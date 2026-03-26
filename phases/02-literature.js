/**
 * Phase 2: Literature Collection
 * Collects 35+ references with DOI triple-verification.
 */

import { Agent } from '../core/agent.js';
import { verifyDOI, verifyBatch } from '../tools/doi-verifier.js';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const SYSTEM = `You are an academic literature researcher. Given a research concept, generate a list of relevant DOIs for the literature review. Focus on:
1. Seminal works in the field
2. Recent advances (last 3 years)
3. Methodological foundations
4. Direct competitors / related work

Return ONLY a JSON array of DOI strings, at least 40 candidates.
Example: ["10.1038/nature14539", "10.1145/3442188.3445922"]`;

export async function execute(state, llm) {
  const agent = new Agent('literature-researcher', llm, { system: SYSTEM });

  // Load Phase 1 output
  const conceptPath = join(state.outputDir, 'phase1_concept.md');
  const concept = await readFile(conceptPath, 'utf-8');

  // Generate DOI candidates
  const rawDois = await agent.runWithContext(concept, 'Generate candidate DOIs for literature review.');
  let dois;
  try {
    dois = JSON.parse(rawDois.match(/\[[\s\S]*\]/)?.[0] || '[]');
  } catch {
    dois = [];
  }

  console.log(`Phase 2: Generated ${dois.length} DOI candidates, verifying...`);

  // Triple-verify each DOI
  const verified = [];
  const failed = [];

  const results = await verifyBatch(dois, state.config?.mailto || '', (done, total, result) => {
    console.log(`  [${done}/${total}] ${result.doi} — ${result.verified ? 'verified' : 'FAILED'}`);
  });

  for (const r of results) {
    if (r.verified) {
      verified.push(r);
    } else {
      failed.push(r.doi);
    }
  }

  console.log(`Phase 2: ${verified.length} verified, ${failed.length} failed`);

  // Generate BibTeX
  const bibEntries = verified.map(r => toBibTeX(r.suggested, r.doi)).join('\n\n');
  const bibPath = join(state.outputDir, 'references.bib');
  await writeFile(bibPath, bibEntries);

  // Generate verification report
  const report = generateReport(verified, failed);
  const reportPath = join(state.outputDir, 'doi_verification_report.md');
  await writeFile(reportPath, report);

  // Check hard requirement: >= 35
  if (verified.length < 35) {
    console.warn(`WARNING: Only ${verified.length}/35 verified references. Need more.`);
  }

  return {
    bibPath,
    reportPath,
    verifiedCount: verified.length,
    failedCount: failed.length,
    verified,
  };
}

function toBibTeX(data, doi) {
  const lastName = (data.authors?.[0] || 'Unknown').split(',')[0].split(' ')[0].replace(/[^\w]/g, '');
  const year = data.year || 'XXXX';
  const key = `${lastName}${year}`;

  const lines = [`@article{${key},`];
  if (data.authors?.length) lines.push(`  author = {${data.authors.join(' and ')}},`);
  if (data.title) lines.push(`  title = {${data.title}},`);
  if (data.journal) lines.push(`  journal = {${data.journal}},`);
  if (data.year) lines.push(`  year = {${data.year}},`);
  if (data.volume) lines.push(`  volume = {${data.volume}},`);
  if (data.pages) lines.push(`  pages = {${data.pages}},`);
  if (doi) lines.push(`  doi = {${doi}},`);
  if (data.abstract) lines.push(`  abstract = {${data.abstract}},`);
  lines.push('}');
  return lines.join('\n');
}

function generateReport(verified, failed) {
  const lines = [
    '# DOI Verification Report',
    '',
    `**Total verified**: ${verified.length}`,
    `**Total failed**: ${failed.length}`,
    `**Pass rate**: ${Math.round(verified.length / (verified.length + failed.length) * 100)}%`,
    '',
    '## Verified',
    '',
    ...verified.map(r => `- [x] ${r.doi} (${r.sourceCount}/3 sources)`),
    '',
  ];

  if (failed.length > 0) {
    lines.push('## Failed', '', ...failed.map(d => `- [ ] ${d}`), '');
  }

  return lines.join('\n');
}
