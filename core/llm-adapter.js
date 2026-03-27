/**
 * Pluggable LLM adapter.
 * Supports OpenAI, Claude, Gemini, Groq, OpenRouter.
 */

// Usage tracking
let totalTokens = 0;
let totalCalls = 0;
let totalCost = 0;

export function getUsage() {
  return { totalTokens, totalCalls, totalCost: totalCost.toFixed(6) };
}

function trackUsage(inputTokens, outputTokens, costPerMInput, costPerMOutput) {
  totalCalls++;
  totalTokens += (inputTokens + outputTokens);
  totalCost += (inputTokens / 1_000_000) * costPerMInput + (outputTokens / 1_000_000) * costPerMOutput;
}

export function createLLM(config) {
  const { provider, model, apiKey } = config;

  switch (provider) {
    case 'openai':
      return createOpenAIAdapter(model, apiKey);
    case 'anthropic':
      return createAnthropicAdapter(model, apiKey);
    case 'google':
      return createGoogleAdapter(model, apiKey);
    case 'groq':
      return createGroqAdapter(model, apiKey);
    case 'openrouter':
      return createOpenRouterAdapter(model, apiKey);
    default:
      throw new Error(`Unknown LLM provider: ${provider}`);
  }
}

// gpt-4.1-mini: $0.40/M input, $1.60/M output — cheapest capable model
// gpt-4.1-nano: $0.10/M input, $0.40/M output — cheapest overall
function createOpenAIAdapter(model, apiKey) {
  const selectedModel = model || 'gpt-4.1-nano';
  const pricing = {
    'gpt-4.1-nano': [0.10, 0.40],
    'gpt-4.1-mini': [0.40, 1.60],
    'gpt-4.1': [2.00, 8.00],
    'gpt-4o-mini': [0.15, 0.60],
    'gpt-4o': [2.50, 10.00],
  };
  const [costIn, costOut] = pricing[selectedModel] || [0.40, 1.60];

  return {
    provider: 'openai',
    model: selectedModel,
    async chat(messages, options = {}) {
      const url = 'https://api.openai.com/v1/chat/completions';
      const body = {
        model: this.model,
        messages: options.system
          ? [{ role: 'system', content: options.system }, ...messages]
          : messages,
        max_tokens: options.maxTokens || 4096,
      };

      // Retry up to 3 times on timeout/network errors
      let res;
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          res = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify(body),
            signal: AbortSignal.timeout(60000), // 60s timeout
          });
          break;
        } catch (fetchErr) {
          if (attempt < 2) {
            console.warn(`OpenAI fetch failed (attempt ${attempt + 1}), retrying in 5s...`);
            await new Promise(r => setTimeout(r, 5000));
          } else {
            throw fetchErr;
          }
        }
      }

      if (!res.ok) {
        const err = await res.text();
        throw new Error(`OpenAI API error ${res.status}: ${err.slice(0, 200)}`);
      }

      const data = await res.json();
      const usage = data.usage;
      if (usage) {
        trackUsage(usage.prompt_tokens || 0, usage.completion_tokens || 0, costIn, costOut);
      }
      return data.choices?.[0]?.message?.content || '';
    },
  };
}

function createAnthropicAdapter(model, apiKey) {
  return {
    provider: 'anthropic',
    model: model || 'claude-sonnet-4-6',
    async chat(messages, options = {}) {
      const { default: Anthropic } = await import('@anthropic-ai/sdk');
      const client = new Anthropic({ apiKey });
      const response = await client.messages.create({
        model: this.model,
        max_tokens: options.maxTokens || 4096,
        system: options.system || '',
        messages,
      });
      return response.content[0].text;
    },
  };
}

function createGoogleAdapter(model, apiKey) {
  return {
    provider: 'google',
    model: model || 'gemini-2.5-flash',
    async chat(messages, options = {}) {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent?key=${apiKey}`;
      const contents = messages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }],
      }));
      const body = { contents };
      if (options.system) {
        body.systemInstruction = { parts: [{ text: options.system }] };
      }

      // Retry up to 3 times on 429
      for (let attempt = 0; attempt < 3; attempt++) {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        if (res.status === 429) {
          const wait = (attempt + 1) * 10000; // 10s, 20s, 30s
          console.warn(`Gemini rate-limited, waiting ${wait / 1000}s...`);
          await new Promise(r => setTimeout(r, wait));
          continue;
        }
        if (!res.ok) {
          const err = await res.text();
          throw new Error(`Gemini API error ${res.status}: ${err.slice(0, 200)}`);
        }
        const data = await res.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
      }
      throw new Error('Gemini rate limit exceeded after 3 retries');
    },
  };
}

function createGroqAdapter(model, apiKey) {
  return {
    provider: 'groq',
    model: model || 'llama-3.3-70b-versatile',
    async chat(messages, options = {}) {
      const url = 'https://api.groq.com/openai/v1/chat/completions';
      const body = {
        model: this.model,
        messages: options.system
          ? [{ role: 'system', content: options.system }, ...messages]
          : messages,
        max_tokens: options.maxTokens || 4096,
      };
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      return data.choices?.[0]?.message?.content || '';
    },
  };
}

function createOpenRouterAdapter(model, apiKey) {
  return {
    provider: 'openrouter',
    model: model || 'x-ai/grok-3-mini-fast',
    async chat(messages, options = {}) {
      const url = 'https://openrouter.ai/api/v1/chat/completions';
      const body = {
        model: this.model,
        messages: options.system
          ? [{ role: 'system', content: options.system }, ...messages]
          : messages,
        max_tokens: options.maxTokens || 4096,
      };
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      return data.choices?.[0]?.message?.content || '';
    },
  };
}
