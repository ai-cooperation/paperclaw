/**
 * Phase 10: Submission Preparation
 * Generates cover letter, highlights, and submission checklist.
 */

import { Agent, runParallel } from '../core/agent.js';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const COVER_LETTER_SYSTEM = `You are an academic submission specialist. Write a cover letter for journal submission. Structure:
1. Dear Editor-in-Chief (use name if journal is known)
2. Paper title and brief summary (2-3 sentences)
3. Three key contributions
4. Why this journal is appropriate
5. Data availability statement
6. Declarations (no conflicts, not submitted elsewhere, all authors approve)
7. Corresponding author contact

Keep it professional, concise (under 400 words).`;

const HIGHLIGHTS_SYSTEM = `Generate 3-5 research highlights (1 sentence each, max 85 characters). Each should be a standalone finding. Use active voice.`;

const CHECKLIST_SYSTEM = `Generate a submission checklist for this paper. Include:
- [ ] Manuscript format matches journal requirements
- [ ] All figures are high resolution (300+ DPI)
- [ ] All tables have no empty cells
- [ ] References are complete (DOI, year, authors)
- [ ] Author information is correct
- [ ] Abstract within word limit
- [ ] Keywords provided
- [ ] Cover letter attached
- [ ] Highlights file attached
- [ ] Supplementary materials prepared
Add any journal-specific items if known.`;

export async function execute(state, llm) {
  // Load final draft
  let draftPath;
  for (let v = 3; v >= 0; v--) {
    try {
      draftPath = join(state.outputDir, `paper_draft_v${v}.qmd`);
      await readFile(draftPath, 'utf-8');
      break;
    } catch { draftPath = null; }
  }

  if (!draftPath) {
    console.error('Phase 10: No paper draft found');
    return { error: 'No draft found' };
  }

  const draft = await readFile(draftPath, 'utf-8');
  const concept = await readFile(join(state.outputDir, 'phase1_concept.md'), 'utf-8');

  const context = `Paper title: ${state.topic}\nTarget journal: ${state.journal || 'Not specified'}\n\nConcept:\n${concept}\n\nDraft (first 2000 chars):\n${draft.slice(0, 2000)}`;

  // Generate cover letter, highlights, and checklist in parallel
  const [coverAgent, highlightsAgent, checklistAgent] = [
    new Agent('cover-letter', llm, { system: COVER_LETTER_SYSTEM }),
    new Agent('highlights', llm, { system: HIGHLIGHTS_SYSTEM }),
    new Agent('checklist', llm, { system: CHECKLIST_SYSTEM }),
  ];

  const [coverLetter, highlights, checklist] = await runParallel(
    [coverAgent, highlightsAgent, checklistAgent],
    [
      `Context:\n${context}\n\nWrite the cover letter.`,
      `Context:\n${context}\n\nGenerate research highlights.`,
      `Context:\n${context}\n\nGenerate the submission checklist.`,
    ]
  );

  await writeFile(join(state.outputDir, 'cover_letter.md'), coverLetter);
  await writeFile(join(state.outputDir, 'highlights.md'), highlights);
  await writeFile(join(state.outputDir, 'submission_checklist.md'), checklist);

  console.log('Phase 10: Submission materials ready');
  console.log('  - cover_letter.md');
  console.log('  - highlights.md');
  console.log('  - submission_checklist.md');

  return {
    coverLetter: join(state.outputDir, 'cover_letter.md'),
    highlights: join(state.outputDir, 'highlights.md'),
    checklist: join(state.outputDir, 'submission_checklist.md'),
    finalDraft: draftPath,
  };
}
