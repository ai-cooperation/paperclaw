/**
 * CrossRef API adapter.
 * Polite pool: add mailto for higher rate limits.
 */

const BASE = 'https://api.crossref.org/works';

export async function verifyDOI(doi, mailto = '') {
  const url = `${BASE}/${encodeURIComponent(doi)}${mailto ? `?mailto=${mailto}` : ''}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  return parseCrossRefItem(data.message, doi);
}

export async function searchByTitle(title, mailto = '') {
  const url = `${BASE}?query.title=${encodeURIComponent(title)}&rows=3${mailto ? `&mailto=${mailto}` : ''}`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const data = await res.json();
  return (data.message?.items || []).map(item => parseCrossRefItem(item));
}

function parseCrossRefItem(item, fallbackDoi) {
  return {
    source: 'CrossRef',
    title: stripHtml(item.title?.[0]) || null,
    year: item.published?.['date-parts']?.[0]?.[0]
      || item['published-print']?.['date-parts']?.[0]?.[0]
      || item['published-online']?.['date-parts']?.[0]?.[0]
      || null,
    authors: (item.author || []).map(a => {
      const given = a.given || '';
      const family = a.family || '';
      return family ? `${family}, ${given}` : given;
    }).filter(Boolean),
    journal: stripHtml(item['container-title']?.[0]) || null,
    volume: item.volume || null,
    pages: item.page || null,
    doi: item.DOI || fallbackDoi,
    abstract: stripHtml(item.abstract) || null,
    type: item.type || null,
  };
}

function stripHtml(s) {
  if (!s || typeof s !== 'string') return s;
  return s.replace(/<[^>]+>/g, '');
}
