# PaperClaw

An AI agent framework for writing academic papers — from concept to submission.

PaperClaw automates the 11-phase academic paper pipeline: literature search, DOI verification, research positioning, paper writing, quality review, and journal submission.

## Features

- **11-Phase Pipeline** — Structured workflow from concept validation to rebuttal
- **Multi-source DOI Verification** — CrossRef + OpenAlex + Semantic Scholar
- **Pluggable LLM** — Claude, Gemini, Groq, OpenRouter
- **Quality Gates** — Automated review loops with configurable thresholds
- **Journal Templates** — Elsevier, Springer, and more via Quarto
- **Export** — QMD, PDF, DOCX, BibTeX

## Quick Start

```bash
npm install -g paperclaw

# Start a new paper project
paperclaw init --topic "Your Research Topic" --journal "Target Journal"

# Run the full pipeline
paperclaw run --mode mvp    # Skip experiments, generate draft
paperclaw run --mode full   # Full 11-phase pipeline
```

## The 11 Phases

| Phase | Name | Description |
|-------|------|-------------|
| 1 | Concept | Validate research question, hypothesis, contributions |
| 2 | Literature | Collect 35+ references with DOI triple-verification |
| 3 | Positioning | Identify research gaps, differentiation statement |
| 4 | Structure | Paper skeleton, figure/table planning |
| 5 | Experiment Design | Protocols, baselines, ablation plans |
| 6 | Execution | Run experiments, collect results |
| 7 | Analysis | Statistical analysis, generate figures/tables |
| 8 | Writing | Draft all sections in parallel |
| 9 | Review | Multi-stage quality gate + self-healing loop |
| 10 | Submission | Cover letter, highlights, format check |
| 11 | Rebuttal | Structured reviewer response |

> Phases 5-6 can be skipped in MVP mode for draft-first workflows.

## Architecture

```
paperclaw/
├── core/           — Orchestrator, agent base, LLM adapters
├── phases/         — 11 phase implementations
├── skills/         — Markdown-based skill definitions
├── tools/          — API integrations (CrossRef, OpenAlex, S2)
├── templates/      — Journal templates (Elsevier, Springer)
└── cli.js          — CLI entry point
```

## Supported LLMs

| Provider | Models | Cost |
|----------|--------|------|
| Anthropic | Claude Opus, Sonnet, Haiku | API key |
| Google | Gemini Flash, Pro | API key |
| Groq | Llama 3.3 70B | Free tier |
| OpenRouter | Grok, Mixtral, etc. | Pay per use |

## License

MIT

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Credits

Built by [Paper Lab](https://paperlab.cooperation.tw) — AI-powered academic writing methodology.
