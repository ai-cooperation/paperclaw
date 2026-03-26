/**
 * Triple-source DOI verification.
 * Queries CrossRef + OpenAlex + Semantic Scholar in parallel.
 */

import { verifyDOI as verifyCrossRef } from './crossref.js';
import { verifyDOI as verifyOpenAlex } from './openalex.js';
import { verifyDOI as verifyS2 } from './semantic-scholar.js';

export async function verifyDOI(doi, mailto = '') {
  const [cr, oa, s2] = await Promise.all([
    verifyCrossRef(doi, mailto).catch(() => null),
    verifyOpenAlex(doi, mailto).catch(() => null),
    verifyS2(doi).catch(() => null),
  ]);

  const sources = [cr, oa, s2].filter(Boolean);
  const verified = sources.length >= 2;

  return {
    doi,
    verified,
    sourceCount: sources.length,
    crossref: cr,
    openalex: oa,
    semanticScholar: s2,
    // Pick best metadata from available sources
    suggested: {
      title: cr?.title || oa?.title || s2?.title || null,
      year: cr?.year || oa?.year || s2?.year || null,
      authors: pickBestAuthors(cr, oa, s2),
      journal: cr?.journal || oa?.journal || s2?.journal || null,
      volume: cr?.volume || oa?.volume || s2?.volume || null,
      pages: oa?.pages || cr?.pages || s2?.pages || null,
      abstract: s2?.abstract || oa?.abstract || cr?.abstract || null,
    },
  };
}

export async function verifyBatch(dois, mailto = '', onProgress) {
  const results = [];
  for (let i = 0; i < dois.length; i++) {
    const result = await verifyDOI(dois[i], mailto);
    results.push(result);
    if (onProgress) onProgress(i + 1, dois.length, result);
    // Rate limit: 1 per second for S2
    if (i < dois.length - 1) {
      await new Promise(r => setTimeout(r, 1200));
    }
  }
  return results;
}

function pickBestAuthors(cr, oa, s2) {
  // Pick source with longest total author string (most complete names)
  const candidates = [cr?.authors, oa?.authors, s2?.authors].filter(a => a?.length);
  if (candidates.length === 0) return [];
  return candidates.reduce((best, curr) =>
    curr.join(', ').length > best.join(', ').length ? curr : best
  );
}
