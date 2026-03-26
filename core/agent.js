/**
 * Base Agent class for PaperClaw.
 * Each phase can spawn specialized agents for parallel work.
 */

export class Agent {
  constructor(name, llm, options = {}) {
    this.name = name;
    this.llm = llm;
    this.system = options.system || '';
    this.tools = options.tools || [];
  }

  async run(prompt) {
    const messages = [{ role: 'user', content: prompt }];
    return this.llm.chat(messages, { system: this.system });
  }

  async runWithContext(context, prompt) {
    const messages = [
      { role: 'user', content: `Context:\n${context}\n\nTask:\n${prompt}` },
    ];
    return this.llm.chat(messages, { system: this.system });
  }
}

/**
 * Run multiple agents in parallel.
 */
export async function runParallel(agents, prompts) {
  return Promise.all(
    agents.map((agent, i) => agent.run(prompts[i]))
  );
}
