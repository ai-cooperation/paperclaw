/**
 * PaperClaw Orchestrator
 * Controls the 11-phase paper pipeline.
 */

import { loadPhase } from './phase-loader.js';
import { createLLM } from './llm-adapter.js';
import { EventEmitter } from 'events';

export class Orchestrator extends EventEmitter {
  constructor(config) {
    super();
    this.config = config;
    this.llm = createLLM(config.llm);
    this.state = {
      phase: 0,
      mode: config.mode || 'mvp', // 'mvp' | 'full'
      topic: config.topic,
      journal: config.journal || null,
      outputDir: config.outputDir || './output',
      results: {},
    };
  }

  async run() {
    const phases = this.state.mode === 'mvp'
      ? [1, 2, 3, 4, 7, 8, 9, 10]       // Skip 5-6 (experiments)
      : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Full pipeline

    for (const phaseNum of phases) {
      this.state.phase = phaseNum;
      this.emit('phase:start', phaseNum);

      try {
        const phase = await loadPhase(phaseNum);
        const result = await phase.execute(this.state, this.llm);
        this.state.results[phaseNum] = result;
        this.emit('phase:complete', phaseNum, result);
      } catch (err) {
        this.emit('phase:error', phaseNum, err);
        throw err;
      }
    }

    this.emit('pipeline:complete', this.state);
    return this.state;
  }

  async runPhase(phaseNum) {
    this.state.phase = phaseNum;
    const phase = await loadPhase(phaseNum);
    const result = await phase.execute(this.state, this.llm);
    this.state.results[phaseNum] = result;
    return result;
  }
}
