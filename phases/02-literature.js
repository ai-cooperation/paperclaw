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

  // Validate bib quality
  const bibQuality = validateBib(verified);

  // Generate verification report
  const report = generateReport(verified, failed);
  const reportPath = join(state.outputDir, 'doi_verification_report.md');
  await writeFile(reportPath, report);

  // Check hard requirement: >= 20
  if (verified.length < 20) {
    console.warn(`  ⚠ Only ${verified.length}/20 verified references. Need more.`);
  }

  return {
    bibPath,
    reportPath,
    verifiedCount: verified.length,
    failedCount: failed.length,
    verified,
  };
}

/**
 * BibTeX generation with bib-manager validation rules:
 * - All entries must have: author, title, year, doi
 * - Citekey format: LastnameYear (deduplicated with a/b suffix)
 * - Full author names (never "et al." in bib)
 * - Abstract field required
 */
const usedKeys = new Set();

function toBibTeX(data, doi) {
  const lastName = (data.authors?.[0] || 'Unknown').split(',')[0].split(' ')[0].replace(/[^\w]/g, '');
  const year = data.year || 'XXXX';
  let key = `${lastName}${year}`;

  // Deduplicate citekeys
  if (usedKeys.has(key)) {
    const suffix = 'abcdefghij';
    for (const s of suffix) {
      if (!usedKeys.has(key + s)) { key = key + s; break; }
    }
  }
  usedKeys.add(key);

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

/**
 * Validate bib quality (bib-manager rules).
 */
function validateBib(entries) {
  const warnings = [];
  const keys = new Set();
  let withDoi = 0, withAbstract = 0, recentCount = 0;

  for (const entry of entries) {
    if (keys.has(entry.doi)) warnings.push(`Duplicate DOI: ${entry.doi}`);
    keys.add(entry.doi);
    if (entry.suggested?.doi) withDoi++;
    if (entry.suggested?.abstract) withAbstract++;
    if (entry.suggested?.year && entry.suggested.year >= new Date().getFullYear() - 5) recentCount++;
  }

  const total = entries.length;
  console.log(`  Bib quality: ${total} entries, ${withDoi} with DOI (${Math.round(withDoi/total*100)}%), ${withAbstract} with abstract (${Math.round(withAbstract/total*100)}%), ${recentCount} recent (${Math.round(recentCount/total*100)}%)`);

  if (warnings.length > 0) {
    console.warn('  Bib warnings:', warnings.join('; '));
  }
  return { total, withDoi, withAbstract, recentCount, warnings };
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
