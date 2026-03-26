/**
 * Semantic Scholar API adapter.
 * Rate limit: ~100 req/5min (unauthenticated).
 */

const BASE = 'https://api.semanticscholar.org/graph/v1/paper';
const FIELDS = 'title,year,authors,venue,externalIds,journal,abstract,citationCount';

export async function verifyDOI(doi) {
  const url = `${BASE}/DOI:${encodeURIComponent(doi)}?fields=${FIELDS}`;
  let res = await fetch(url, { headers: { 'Accept': 'application/json' } });

  // Retry with increasing delay on rate-limit
  for (let retry = 0; retry < 2 && res.status === 429; retry++) {
    await new Promise(r => setTimeout(r, (retry + 1) * 4000));
    res = await fetch(url, { headers: { 'Accept': 'application/json' } });
  }

  if (!res.ok) return null;
  const item = await res.json();
  return parseS2Item(item, doi);
}

function parseS2Item(item, fallbackDoi) {
  return {
    source: 'SemanticScholar',
    title: item.title || null,
    year: item.year || null,
    authors: (item.authors || []).map(a => a.name || '').filter(Boolean),
    journal: item.journal?.name || item.venue || null,
    volume: item.journal?.volume || null,
    pages: item.journal?.pages || null,
    doi: item.externalIds?.DOI || fallbackDoi,
    abstract: item.abstract || null,
    citationCount: item.citationCount || 0,
  };
}
