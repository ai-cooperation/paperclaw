#!/usr/bin/env node

/**
 * PaperClaw CLI
 * Usage:
 *   paperclaw init --topic "..." [--journal "..."]
 *   paperclaw run [--mode mvp|full] [--phase N]
 */

import { Orchestrator } from './core/orchestrator.js';
import { readFile } from 'fs/promises';
import { resolve } from 'path';

const args = process.argv.slice(2);
const command = args[0];

function getArg(name) {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 && idx + 1 < args.length ? args[idx + 1] : null;
}

function hasFlag(name) {
  return args.includes(`--${name}`);
}

async function loadConfig() {
  try {
    const raw = await readFile(resolve('paperclaw.json'), 'utf-8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function main() {
  if (!command || command === 'help' || command === '--help') {
    console.log(`
PaperClaw — AI agent for writing academic papers

Commands:
  init    Create a new paper project
  run     Execute the pipeline
  phase   Run a single phase

Options:
  --topic     Research topic (required for init)
  --journal   Target journal
  --mode      mvp (default) or full
  --phase     Phase number (1-11)
  --provider  LLM provider: anthropic, google, groq, openrouter
  --model     LLM model name
`);
    return;
  }

  const config = await loadConfig();
  const provider = getArg('provider') || config.llm?.provider || process.env.PAPERCLAW_LLM_PROVIDER || 'anthropic';
  const model = getArg('model') || config.llm?.model;
  const apiKey = config.llm?.apiKey
    || process.env.ANTHROPIC_API_KEY
    || process.env.GOOGLE_API_KEY
    || process.env.GROQ_API_KEY
    || process.env.OPENROUTER_API_KEY;

  if (command === 'init') {
    const topic = getArg('topic');
    if (!topic) {
      console.error('Error: --topic is required');
      process.exit(1);
    }

    const projectConfig = {
      topic,
      journal: getArg('journal') || null,
      mode: getArg('mode') || 'mvp',
      outputDir: './output',
      llm: { provider, model, apiKey },
    };

    const { writeFile } = await import('fs/promises');
    await writeFile('paperclaw.json', JSON.stringify(projectConfig, null, 2));
    console.log('Created paperclaw.json');
    console.log(`Topic: ${topic}`);
    console.log(`Mode: ${projectConfig.mode}`);
    console.log(`Run: paperclaw run`);
    return;
  }

  if (command === 'run') {
    const topic = getArg('topic') || config.topic;
    if (!topic) {
      console.error('Error: No topic. Run "paperclaw init --topic ..." first.');
      process.exit(1);
    }

    const orchestrator = new Orchestrator({
      topic,
      journal: getArg('journal') || config.journal,
      mode: getArg('mode') || config.mode || 'mvp',
      outputDir: config.outputDir || './output',
      llm: { provider, model, apiKey },
    });

    orchestrator.on('phase:start', (n) => console.log(`\n=== Phase ${n} ===`));
    orchestrator.on('phase:complete', (n) => console.log(`Phase ${n} complete.`));
    orchestrator.on('phase:error', (n, err) => console.error(`Phase ${n} error:`, err.message));

    const phaseNum = getArg('phase');
    if (phaseNum) {
      await orchestrator.runPhase(parseInt(phaseNum));
    } else {
      await orchestrator.run();
    }
    return;
  }

  console.error(`Unknown command: ${command}. Run "paperclaw help".`);
  process.exit(1);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
