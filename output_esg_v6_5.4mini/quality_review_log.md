# Quality Review Log

## MVP Gate Check

| Gate | Status | Detail |
|------|--------|--------|
| G1: Citations ≥ 20 | ✅ | 39 unique citekeys in text |
| G2: No orphan citations | ❌ | Missing: @cooperation |
| G3: Figures ≥ 4 | ✅ | 4 figures found |
| G4: Tables ≥ 4 | ❌ | 0 tables with #tbl- labels |
| G5: Abstract 150-300 words | ❌ | 0 words |
| G6: No raw LaTeX math | ✅ | All math uses $$ and $ |
| G7: No inline reference list | ✅ | Clean — Quarto handles references |
| G8: Bib DOI coverage ≥ 80% | ✅ | 40/40 entries have DOI (100%) |

**Gates passed**: 5/8

## Round 1 — 2026-03-27T12:39

**Score**: 48/100 (threshold: 80)

### Review
## Scores
| Dimension | Score | Max |
|-----------|-------|-----|
| Research Gap Clarity | 12 | 20 |
| Methodology Rigor | 11 | 25 |
| Results Significance | 9 | 20 |
| Writing Quality | 10 | 15 |
| Citation Accuracy | 2 | 10 |
| Contribution Differentiation | 3 | 5 |
| Figure/Table Quality | 1 | 5 |
| **TOTAL** | **48** | **100** |

## Issues
- **Introduction, first half / Abstract:** The paper states a clear general problem, but the *specific research gap* is only loosely articulated. It needs a sharper statement of what is unknown in prior ESG measurement literature, why Taiwan is uniquely informative, and what exact novelty LLMs add beyond existing NLP-based disclosure measures.  
  **Fix:** Add a focused gap paragraph with 2–3 precise claims and a brief comparison to the nearest prior methods.

- **Introduction, “This study asks…” paragraph:** Hypotheses are not formally stated or numbered, and the paper mixes descriptive aims with causal/validation aims.  
  **Fix:** State explicit hypotheses (e.g., H1 validation superiority; H2 determinants of disclosure quality) and distinguish methodological validation from substantive firm-level inference.

- **Methodology, Sample and Data Collection:** The sample window, number of firms, number of reports, inclusion/exclusion criteria, and unit of analysis are missing. Without these, the study is not reproducible.  
  **Fix:** Report exact years, firm count, report count, language split, exclusions, and whether the panel is balanced/unbalanced.

- **Methodology, Human Benchmark Construction:** The coding process is underdeveloped. There is no information on coder number, training, coding manual, inter-coder reliability results, adjudication rules, or sampling of segments.  
  **Fix:** Report coder credentials, training protocol, ICC/Cohen’s kappa/Krippendorff’s alpha, and examples from the rubric.

- **Methodology, LLM-Assisted ESG Assessment Pipeline:** The paper does not specify the model used, version, temperature, top-p, prompt text, context window, run settings, or whether the model was fine-tuned. This is a major rigor issue for Q1 standards.  
  **Fix:** Provide full model provenance and exact prompting procedure, ideally in an appendix.

- **Methodology, Baseline Disclosure Measures:** The keyword dictionary and checklist are described only abstractly. There is no evidence that the baselines were constructed fairly or validated.  
  **Fix:** List dictionary sources, translation procedure, weighting scheme, and how checklist items were selected and calibrated.

- **Methodology, Validation Strategy:** The paper mentions Pearson/Spearman, MAE, RMSE, and rank agreement, but does not define how rank agreement is computed or whether comparisons are paired and statistically tested correctly.  
  **Fix:** Specify statistical tests, confidence intervals, bootstrap strategy, and multiple-comparison correction if used.

- **Methodology, regression equation:** The equation contains a malformed term: `\mu उद्योग_i` includes a non-English token and appears to be a typesetting error.  
  **Fix:** Replace with a proper industry fixed effect notation, e.g., `\mu_i` or `\mu_{industry}`.

- **Results section overall:** The draft contains placeholder tables with zeros and then later reports non-zero results in prose. This is internally inconsistent and not publication-ready.  
  **Fix:** Remove placeholders and populate all tables with actual estimates matching the narrative.

- **Results, Table 2 / Table 3 / Table 4 / Table 5 / Table 6:** All tables are fabricated placeholders with zero values, and some include nonsensical markers such as human benchmark as a “method” with perfect correlations.  
  **Fix:** Replace with actual empirical outputs; if human benchmark is a reference standard, present it separately and not as a predictive method.

- **Results, “Main Results” subsection:** The paper reports exact correlations, MAEs, RMSEs, and p-values, but no table or figure in the draft contains those numbers. This makes the results unverifiable.  
  **Fix:** Insert results tables with estimates, standard errors/CI, and test statistics; ensure consistency between text and tables.

- **Results, regression findings:** Coefficients and significance levels are discussed, but the corresponding regression table contains all zeros and the model specifications are unclear.  
  **Fix:** Provide full regression outputs, including coefficient labels, standard errors, significance codes, fit statistics, and sample size.

- **Results, robustness/ablation:** The paper claims multiple robustness checks and performance changes, but Table 5 remains entirely placeholder values.  
  **Fix:** Replace with actual ablation results and explain whether changes are practically meaningful, not just statistically significant.

- **Figure/Table Quality, figures 1/3/4/5:** Figures are embedded only as file links with no visible content in the manuscript draft, so they cannot be evaluated for clarity or readability. Figure 2 is referenced in the text but not included at all.  
  **Fix:** Include rendered figures in the manuscript and ensure all referenced figures are present, labeled consistently, and readable.

- **Figure/Table Quality, numbering:** Figure numbering is inconsistent: Figure 2 is cited in the Results but not shown; Figures 3–5 appear before the Results section.  
  **Fix:** Renumber figures sequentially and ensure each is cited in the correct order.

- **Citation Accuracy:** Citation practice is highly problematic. Many in-text citations use `@...` without a proper citation style in the body, and the reference list contains numerous irrelevant or mismatched sources (e.g., papers on environmental engineering, advertising, fake accounts, social media, and river basins) that do not substantively support the claims made.  
  **Fix:** Audit every citation against the statement it supports; remove irrelevant references and replace them with direct literature on ESG disclosure measurement, LLMs, and corporate reporting.

- **Citation Accuracy:** Several references appear semantically unrelated to the cited claims, suggesting citation padding rather than targeted scholarship. Example: `@Wu2022`, `@Yang2019`, `@Zhang2017`, `@Breuer2020`, `@Wen2020` are used in contexts with no clear conceptual link.  
  **Fix:** Use domain-specific references only; verify each citation’s relevance and accuracy.

- **Citation Accuracy:** The draft cites `@Unknown2016`, which is not an acceptable scholarly source for supporting substantive claims.  
  **Fix:** Remove or replace with a real peer-reviewed source.

- **Writing Quality:** The paper is readable at a high level, but it has repetition, inflated claims, and several sections that read like proposal text rather than completed research.  
  **Fix:** Tighten prose, remove repeated introductory statements, and rewrite methods/results in past tense and concrete empirical language.

- **Writing Quality:** The manuscript contains meta-instructions and drafting notes inside the Results section (“Below are publication-ready markdown tables…”, “If you want, I can next convert…”), which should never appear in a paper.  
  **Fix:** Delete all drafting commentary and keep only the finalized scholarly content.

- **Writing Quality:** The text repeatedly states that findings are “strong,” “significant,” and “scalable” without supporting evidence in the tables or figures.  
  **Fix:** Use calibrated language and tie all claims to reported estimates.

- **Contribution Differentiation:** The paper claims technical, empirical, and practical contributions, but these are not differentiated from prior work with enough specificity.  
  **Fix:** Add a paragraph explaining exactly what is new versus prior LLM evaluation studies, prior ESG scoring studies, and prior multilingual disclosure work.

- **Contribution Differentiation:** The “LLM-assisted framework” may be useful, but as drafted it is not clear whether the paper offers a methodological advance, an application study, or both.  
  **Fix:** Define the primary contribution and subordinate contributions explicitly.

- **Figure/Table Quality:** Table layout is acceptable as scaffolding, but as a final manuscript it is not Q1-level. There is no caption quality control, no notes for statistical significance in the actual output, and no substantive values.  
  **Fix:** Rebuild all tables with real estimates, consistent formatting, and informative notes.

- **Overall publication readiness:** The manuscript is currently far below Q1 journal threshold because the core empirical evidence is missing from tables, the methodology is under-specified, and the references are not trustworthy enough for validation.  
  **Fix:** Before resubmission, complete the empirical section, audit citations, provide reproducible methods, and ensure table/figure consistency throughout.

### Fixes Applied
Saved as: paper_draft_v1.qmd

## Round 2 — 2026-03-27T12:39

**Score**: 8/100 (threshold: 80)

### Review
## Scores
| Dimension | Score | Max |
|-----------|-------|-----|
| Research Gap Clarity | 4 | 20 |
| Methodology Rigor | 1 | 25 |
| Results Significance | 1 | 20 |
| Writing Quality | 2 | 15 |
| Citation Accuracy | 0 | 10 |
| Contribution Differentiation | 0 | 5 |
| Figure/Table Quality | 0 | 5 |
| **TOTAL** | **8** | **100** |

## Issues
- **Entire manuscript / missing draft body**: The submission contains only a `.bib` reference list and no title, abstract, introduction, theory, hypotheses, methods, results, discussion, figures, or tables.  
  **Fix**: Submit the full paper text; a journal review cannot assess a reference list alone.

- **Research Gap Clarity — global**: No research problem, gap, or objective is articulated. The reader cannot tell what the study asks, why it matters, or what prior work is being extended.  
  **Fix**: Add a focused introduction with literature synthesis, explicit gap statement, and 2–4 research questions/hypotheses.

- **Methodology Rigor — global**: No methodology is present, so sampling, data source, variables, identification strategy, validity checks, or robustness cannot be evaluated.  
  **Fix**: Provide detailed methods, including research design, measurement, model specification, and robustness/validity tests aligned with Q1 standards.

- **Results Significance — global**: No results are reported; therefore there is no evidence of empirical/theoretical contribution or statistical significance.  
  **Fix**: Add results with effect sizes, uncertainty estimates, and comparison to baseline/competing approaches.

- **Writing Quality — global**: There is no narrative structure, argument flow, or academic prose to evaluate. The current content is a bibliographic dump rather than a manuscript.  
  **Fix**: Convert the draft into a coherent paper with standard IMRaD structure and consistent terminology.

- **Citation Accuracy — reference list quality**: Several entries appear incomplete, inconsistent, or potentially inaccurate:
  - `Jorge2011`: author field uses full names in a non-standard way; journal title encoding includes `&amp;`.
  - `Raheja2024`: abstract is malformed/redundant and appears to repeat citation metadata rather than summarize the article.
  - `Krackhardt1995`: page range `350-350` looks suspicious.
  - `Unknown2016`: placeholder author/title indicates an unresolved citation.
  - Multiple abstracts begin with `"Abstract"` or `"ABSTRACT"` inconsistently; some entries are conference papers mislabeled as `@article`.  
  **Fix**: Audit every BibTeX entry against the original source, standardize fields, and remove placeholders or malformed records.

- **Contribution Differentiation — global**: No claim is made about what is novel relative to the cited literature. The reference set is broad but disconnected from any specific thesis.  
  **Fix**: State the unique theoretical, empirical, or methodological contribution and position it explicitly against the closest prior studies.

- **Figure/Table Quality — global**: No figures or tables are included, so there is no presentation of data, model, or findings.  
  **Fix**: Add summary tables for sample characteristics, descriptive statistics, main results, and robustness checks; include conceptual or empirical figures where appropriate.

- **Overall assessment**: As submitted, this is not reviewable as a paper draft. It fails all core Q1 criteria because it lacks substantive content beyond references.  
  **Fix**: Resubmit a complete manuscript with coherent argumentation, methods, and results before a meaningful scholarly evaluation can be made.

### Fixes Applied
Saved as: paper_draft_v2.qmd

## Round 3 — 2026-03-27T12:39

**Score**: 1/100 (threshold: 80)

### Review
## Scores
| Dimension | Score | Max |
|-----------|-------|-----|
| Research Gap Clarity | 0 | 20 |
| Methodology Rigor | 0 | 25 |
| Results Significance | 0 | 20 |
| Writing Quality | 1 | 15 |
| Citation Accuracy | 0 | 10 |
| Contribution Differentiation | 0 | 5 |
| Figure/Table Quality | 0 | 5 |
| **TOTAL** | **1** | **100** |

## Issues
- **Overall manuscript missing**
  - **Location:** Entire submission
  - **Issue:** The draft does not contain a title, abstract, introduction, methods, results, discussion, conclusion, figures, or tables. It is only a bibliography plus a note saying the manuscript text is missing.
  - **Suggested fix:** Provide the complete paper text before submission. Without the manuscript, it is impossible to assess research question, contribution, methods, or findings to Q1 standards.

- **No research gap stated**
  - **Location:** Introduction section absent
  - **Issue:** There is no articulation of the problem, gap in the literature, or why the study is needed.
  - **Suggested fix:** Add a focused introduction that synthesizes the relevant literature, states the unresolved gap, and ends with explicit research objectives/questions/hypotheses.

- **No methodology to evaluate**
  - **Location:** Methods section absent
  - **Issue:** The draft provides no design, sample, data source, variables, model, identification strategy, validity checks, or reproducibility details.
  - **Suggested fix:** Include a complete methods section with data collection, sampling frame, measures, analytic approach, and robustness/validity tests.

- **No results or evidence**
  - **Location:** Results section absent
  - **Issue:** No findings are reported, so significance, novelty, and empirical contribution cannot be judged.
  - **Suggested fix:** Add a results section with descriptive statistics, main estimates, effect sizes, uncertainty intervals, and robustness analyses.

- **No discussion or contribution**
  - **Location:** Discussion/conclusion absent
  - **Issue:** The paper does not interpret findings, compare them to prior work, or explain theoretical/practical implications.
  - **Suggested fix:** Conclude with a discussion that ties results back to the gap, clarifies theoretical/practical implications, limitations, and future research.

- **Citation set is unvetted and likely misaligned**
  - **Location:** Reference list
  - **Issue:** The bibliography contains many references across unrelated domains (green purchasing, IPO underpricing, social media, environmental engineering, NLP, etc.). This suggests the reference list may be template noise rather than a coherent literature base.
  - **Suggested fix:** Curate references strictly to the paper’s topic. Remove unrelated citations and retain only literature directly supporting the research question, theory, and method.

- **Potential citation quality problems**
  - **Location:** Reference list entries
  - **Issue:** Several entries have formatting inconsistencies or likely metadata issues:
    - “Jorge2011” lists authors as a single string rather than structured names.
    - “Unknown2016” lacks authors.
    - Some abstracts contain extraneous “Abstract” tokens or truncated text.
    - Page ranges sometimes appear duplicated or malformed, e.g., `121506-121506`, `109348-109348`, `113957-113957`.
  - **Suggested fix:** Validate all BibTeX entries against publisher metadata; correct author parsing, page formats, and titles; remove incomplete or placeholder records.

- **No indication the cited sources are used correctly**
  - **Location:** In-text citations absent
  - **Issue:** Since no manuscript text is provided, there is no way to verify whether citations are accurate, relevant, or properly attributed in context.
  - **Suggested fix:** Add in-text citations only where each source directly supports a claim, and ensure every citation matches the reference list exactly.

- **No figures or tables**
  - **Location:** Entire submission
  - **Issue:** There are no figures, tables, or captions to assess. For Q1 standards, empirical work typically requires at least one clear conceptual figure and tables for sample description/results.
  - **Suggested fix:** Provide numbered figures/tables with titles, captions, and notes. Ensure all are referenced in the text and are publication-quality.

- **Writing quality cannot meet journal standards in current form**
  - **Location:** Whole submission
  - **Issue:** The only prose is a meta-response requesting the missing manuscript, not scientific writing. There is no scholarly narrative, argumentation, or structure.
  - **Suggested fix:** Rewrite as a complete academic manuscript with IMRaD structure, concise argumentation, and discipline-appropriate terminology.

- **Contribution is not differentiated**
  - **Location:** Whole submission
  - **Issue:** No novel theoretical, methodological, or empirical contribution is identifiable.
  - **Suggested fix:** State explicitly what is new relative to prior studies: new dataset, new theory extension, new method, new context, or new mechanism.

- **Not suitable for review as a paper draft**
  - **Location:** Submission level
  - **Issue:** This is not a paper draft but a request for missing materials, so it fails basic editorial screening.
  - **Suggested fix:** Submit a complete manuscript package including title page, abstract, main text, references, and any figures/tables.



### Fixes Applied
Saved as: paper_draft_v3.qmd


## HUMAN REVIEW REQUIRED
After 3 rounds, the paper has not reached the 80/100 threshold.
Manual intervention needed.
