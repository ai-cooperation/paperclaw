/**
 * Pluggable LLM adapter.
 * Supports Claude, Gemini, Groq, OpenRouter.
 */

export function createLLM(config) {
  const { provider, model, apiKey } = config;

  switch (provider) {
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
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents,
          systemInstruction: options.system ? { parts: [{ text: options.system }] } : undefined,
        }),
      });
      const data = await res.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
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
