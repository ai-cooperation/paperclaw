/**
 * OpenAlex API adapter.
 */

const BASE = 'https://api.openalex.org/works';

export async function verifyDOI(doi, mailto = '') {
  const url = `${BASE}/doi:${encodeURIComponent(doi)}${mailto ? `?mailto=${mailto}` : ''}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const item = await res.json();
  return parseOpenAlexItem(item, doi);
}

function parseOpenAlexItem(item, fallbackDoi) {
  return {
    source: 'OpenAlex',
    title: item.title || null,
    year: item.publication_year || null,
    authors: (item.authorships || []).map(a => a.author?.display_name || '').filter(Boolean),
    journal: item.primary_location?.source?.display_name || null,
    volume: item.biblio?.volume || null,
    pages: item.biblio?.first_page && item.biblio?.last_page
      ? `${item.biblio.first_page}-${item.biblio.last_page}`
      : item.biblio?.first_page || null,
    doi: item.doi?.replace('https://doi.org/', '') || fallbackDoi,
    abstract: item.abstract_inverted_index
      ? reconstructAbstract(item.abstract_inverted_index)
      : null,
    citationCount: item.cited_by_count || 0,
    isOA: item.open_access?.is_oa || false,
  };
}

function reconstructAbstract(invertedIndex) {
  if (!invertedIndex) return null;
  const words = [];
  for (const [word, positions] of Object.entries(invertedIndex)) {
    for (const pos of positions) {
      words[pos] = word;
    }
  }
  return words.join(' ');
}
