/**
 * Dynamic phase loader.
 */

const PHASE_NAMES = {
  1: 'concept',
  2: 'literature',
  3: 'positioning',
  4: 'structure',
  5: 'experiment',
  6: 'execution',
  7: 'analysis',
  8: 'writing',
  9: 'review',
  10: 'submission',
  11: 'rebuttal',
};

export async function loadPhase(phaseNum) {
  const name = PHASE_NAMES[phaseNum];
  if (!name) throw new Error(`Unknown phase: ${phaseNum}`);

  const padded = String(phaseNum).padStart(2, '0');
  const module = await import(`../phases/${padded}-${name}.js`);
  return module;
}
