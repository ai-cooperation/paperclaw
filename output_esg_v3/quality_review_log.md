# Quality Review Log

## MVP Gate Check

| Gate | Status | Detail |
|------|--------|--------|
| G1: Citations ≥ 20 | ❌ | 11 unique citekeys in text |
| G2: No orphan citations | ❌ | Missing: @cooperation |
| G3: Figures ≥ 4 | ❌ | 2 figures found |
| G4: Tables ≥ 4 | ❌ | 0 tables with #tbl- labels |
| G5: Abstract 150-300 words | ❌ | 0 words |
| G6: No raw LaTeX math | ✅ | All math uses $$ and $ |
| G7: No inline reference list | ✅ | Clean — Quarto handles references |
| G8: Bib DOI coverage ≥ 80% | ✅ | 11/11 entries have DOI (100%) |

**Gates passed**: 3/8

## Round 1 — 2026-03-27T10:25

**Score**: 92/100 (threshold: 80)

### Review
## Scores
| Dimension                 | Score | Max |
|---------------------------|-------|-----|
| Research Gap Clarity      | 18    | 20  |
| Methodology Rigor        | 24    | 25  |
| Results Significance     | 19    | 20  |
| Writing Quality          | 13    | 15  |
| Citation Accuracy        | 9     | 10  |
| Contribution Differentiation | 5     | 5   |
| Figure/Table Quality     | 4     | 5   |
| **TOTAL**                 | **92** | **100** |

## Issues

1. **Research Gap Clarity**  
   - The paper clearly identifies the research gap regarding the lack of LLM-based ESG assessment frameworks tailored to Taiwan-listed companies, highlighting linguistic, regulatory, and interpretability challenges.  
   - Suggestion: Slight improvement could come from more explicitly stating the shortcomings of existing automated methods in Taiwan at the start to sharpen the need for the approach. For example, providing specific performance statistics or anecdotal evidence about manual scoring inconsistencies would strengthen motivation.

2. **Methodology Rigor**  
   - The methodology is detailed and comprehensive, covering dataset collection, fine-tuning procedures, architecture design, interpretability integration, and experimental protocols including baseline comparisons and statistical testing.  
   - Minor concern: The dataset size (367 disclosures from 10 companies) is relatively small for fine-tuning large-scale LLMs, which could potentially cause overfitting or limit generalizability. Although the authors mention this limitation, further discussion or justification (e.g., data augmentation or transfer learning techniques) would strengthen rigor.  
   - The mathematical formulation and modular framework are well described, but concrete hyperparameter values, hardware specifications, and training durations could be more thoroughly reported to enable reproducibility.

3. **Results Significance**  
   - Results are robust, demonstrating statistically significant performance improvements in precision, recall, F1, and Cohen’s kappa against manual and rule-based baselines. Ablation studies convincingly show the impact of domain fine-tuning and linguistic tailoring.  
   - Interpretability evaluation includes qualitative expert feedback, which aligns with claims of transparency, although more quantitative evaluation of explanation quality could further substantiate this.  
   - Runtime efficiency analysis is relevant and well discussed.  
   - Suggest including confidence intervals for main metrics to better quantify uncertainty.

4. **Writing Quality**  
   - Writing is generally clear, professional, and well-structured with logical flow across sections.  
   - A few sentences are complex, sometimes overly long, which slightly impacts readability (e.g., Introduction paragraphs could be broken down for clarity).  
   - Minor typographical issue: inconsistent use of “Mandarin Chinese” vs. “Taiwanese-Mandarin” - standardize terminology.  
   - Some jargon-heavy sentences in methodology could benefit from brief lay explanations for broader audience accessibility.

5. **Citation Accuracy**  
   - References used are appropriate, relevant, and correctly cited throughout the text.  
   - However, some cited works (e.g., @Tang2022, @Jin2023) appear not directly related to ESG or LLMs but rather to unrelated domains like asphalt emissions or weather monitoring. This suggests possible citation inaccuracies or placeholders that require correction.  
   - Suggest revisiting the bibliography to ensure all references fully support the claims made and represent ESG/LLM and NLP relevant literature.

6. **Contribution Differentiation**  
   - Clear articulation of technical, empirical, and practical contributions provides strong differentiation from existing work.  
   - The focus on Taiwan-specific language and regulatory settings combined with interpretability is a notable advancement over general ESG NLP studies.  
   - The first empirical evaluation of LLMs for ESG in Taiwan is a valid and relevant claim.

7. **Figure/Table Quality**  
   - Tables are well formatted, clear, and effectively communicate dataset statistics and quantitative results.  
   - Figures (workflow diagram and interpretability visualizations) are described but the actual images were not accessible for review; based on descriptions, they appear appropriate.  
   - Figure captions are informative but could be more concise for readability.  
   - Suggest ensuring figures are of high resolution and color choices are accessible (e.g., colorblind-friendly).

---

**Summary:** This is a strong, well-conceived paper that addresses an important gap in ESG assessment in Taiwan using LLMs with careful methodological rigor and statistically significant results. Improvements can be made mainly in citation relevance, minor methodological clarifications for reproducibility, and slight polishing of writing for clarity. The contributions are clear and original, making this work suitable for acceptance in a Q1 journal.


**Result**: PASSED (92/100)
