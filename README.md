# PaperClaw

An AI agent framework for writing academic papers — from concept to submission.

PaperClaw automates the 11-phase academic paper pipeline: literature search, DOI verification, research positioning, paper writing, quality review, and journal submission.

## Features

- **11-Phase Pipeline** — Structured workflow from concept validation to rebuttal
- **Multi-source DOI Verification** — CrossRef + OpenAlex + Semantic Scholar
- **Pluggable LLM** — OpenAI, Claude, Gemini, Groq, OpenRouter
- **Quality Gates** — Automated review with 7-dimension scoring (pass threshold: 80/100)
- **Figure Templates** — Framework, heatmap, bar chart, scatter with academic styling
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

# Run a single phase
paperclaw run --phase 1     # Only concept validation
```

## The 11 Phases

| Phase | Name | Description |
|-------|------|-------------|
| 1 | Concept | Validate research question, hypothesis, contributions |
| 2 | Literature | Collect references with DOI triple-verification |
| 3 | Positioning | Identify research gaps, differentiation statement |
| 4 | Structure | Paper skeleton, figure/table planning |
| 5 | Experiment Design | Protocols, baselines, ablation plans |
| 6 | Execution | Run experiments or generate simulated data (MVP) |
| 7 | Analysis | Generate figures (matplotlib templates) + tables |
| 8 | Writing | Draft all sections with citation enforcement |
| 9 | Review | 7-dimension scoring, pass at 80/100 |
| 10 | Submission | Cover letter, highlights, format checklist |
| 11 | Rebuttal | Parse reviewer comments, draft point-by-point responses |

> Phases 5-6 can be skipped in MVP mode for draft-first workflows.

## Hard Requirements

PaperClaw enforces minimum quality standards:

| Requirement | Threshold |
|-------------|-----------|
| Citations in text | >= 20 unique @citekeys |
| Figures | >= 4 |
| Tables | >= 4 |
| Review score | >= 80/100 |
| DOI verification | Triple-source (CrossRef + OpenAlex + S2) |

## Example Output

See [`examples/metadata-quality/`](examples/metadata-quality/) for a complete pipeline output including PDF, QMD, and references.

## Architecture

```
paperclaw/
├── core/
│   ├── orchestrator.js    — 11-phase pipeline controller
│   ├── agent.js           — Agent base class + parallel runner
│   ├── llm-adapter.js     — OpenAI, Claude, Gemini, Groq, OpenRouter
│   └── phase-loader.js    — Dynamic phase loading
├── phases/                — 11 phase implementations
├── tools/
│   ├── doi-verifier.js    — Triple-source DOI verification
│   ├── crossref.js        — CrossRef API
│   ├── openalex.js        — OpenAlex API
│   ├── semantic-scholar.js — Semantic Scholar API
│   └── figure-templates.js — matplotlib figure templates
├── templates/             — Journal templates (Elsevier, Springer)
└── cli.js                 — CLI entry point
```

## Supported LLMs

| Provider | Models | Cost |
|----------|--------|------|
| OpenAI | gpt-4.1-nano ($0.01), gpt-4.1-mini ($0.10), gpt-4.1 | API key |
| Anthropic | Claude Opus, Sonnet, Haiku | API key |
| Google | Gemini Flash, Pro | API key / Free tier |
| Groq | Llama 3.3 70B | Free tier |
| OpenRouter | Grok, Mixtral, etc. | Pay per use |

> Tested: Full MVP pipeline costs ~$0.03 with gpt-4.1-nano, ~$0.10 with gpt-4.1-mini.

---

## PaperClaw Pro

PaperClaw is fully functional as an open-source tool. For researchers targeting Q1/SCI journals who need higher acceptance rates, **PaperClaw Pro** provides advanced capabilities:

| Capability | Open Source | Pro |
|------------|:---:|:---:|
| 11-Phase pipeline | ✅ | ✅ |
| DOI triple-verification | ✅ | ✅ |
| 7-dimension review (score-based) | ✅ | ✅ |
| MVP gate check (P0/P1/P2 audit) | ✅ | ✅ |
| Journal scope matching | ✅ | ✅ |
| Figure templates | ✅ | ✅ |
| **Elite Reviewer Audit** — 12-dimension deep review with 3 simulated reviewers, rejection risk matrix | | ✅ |
| **Paper Review Skill** — 7-dimension scoring with P0/P1/P2 issue classification and prioritized fix plan | | ✅ |
| **Innovation Positioning** — Strategy to avoid "application research" framing, independent novelty narrative | | ✅ |
| **Multi-LLM Peer Review** — Cross-model review (GPT + Gemini + Claude) for diverse perspectives | | ✅ |
| **Research Landscape** — Auto-generate 9 types of knowledge graphs + Obsidian integration | | ✅ |
| **Editor preference analysis** — EiC background research, associate editor matching | | ✅ |
| **1-on-1 consulting** — Expert review of your specific paper | | ✅ |

**Pro is a service, not a fork.** The open-source codebase is complete and unrestricted (MIT). Pro adds expert-crafted prompts and human consulting on top.

Contact: [paperlab@cooperation.tw](mailto:paperlab@cooperation.tw) | [paperlab.cooperation.tw](https://paperlab.cooperation.tw)

---

## License

MIT — Use freely for any purpose.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Credits

Built by [Paper Lab](https://paperlab.cooperation.tw) — AI-powered academic writing methodology.
