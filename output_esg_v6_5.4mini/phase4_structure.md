# Paper Structure

# Paper Structure: LLM-Assisted ESG Disclosure Assessment for Taiwan Listed Companies

## Working Title
**LLM-Assisted ESG Disclosure Assessment for Taiwan Listed Companies: A Validated Semantic Framework for Disclosure Quality Measurement**

---

## 1) Section Outline

## Abstract
**Target word count:** 200–250

### Key arguments / subsections
- Research problem: conventional ESG disclosure scoring is shallow and keyword-driven.
- Proposed solution: an LLM-assisted semantic assessment framework for ESG disclosure quality.
- Validation design: comparison against expert human ratings and traditional rule-based/keyword-based methods.
- Empirical setting: Taiwan-listed companies using annual/sustainability reports in Chinese or bilingual formats.
- Main findings preview: LLM scores align more closely with expert judgment and better differentiate disclosure quality across firms and ESG dimensions.
- Contribution preview: method, evidence, and practical implications for regulators/investors/firms.

### References to cite
- `Bender2021`
- `Tong2022`
- `LI2015`
- `Berger2021`

---

## Introduction
**Target word count:** 1,200–1,600

### Key arguments / subsections
1. **Background and motivation**
   - ESG disclosure has become strategically important for capital markets and sustainability governance.
   - Existing disclosure measures are often crude and unable to capture semantic quality, specificity, completeness, and relevance.
   - Taiwan provides a compelling context because reports are often Chinese or bilingual and disclosure practices are heterogeneous.

2. **Problem statement**
   - Keyword-based or rule-based ESG scoring treats disclosure as text frequency rather than meaning.
   - Such methods can misclassify boilerplate disclosures as high-quality and miss nuanced substantive reporting.

3. **Research question and hypothesis**
   - Main RQ: how accurately and consistently can LLMs assess ESG disclosure quality relative to traditional methods?
   - H1: LLM-assisted assessment is more aligned with expert human evaluations.

4. **Contributions**
   - Technical: semantic, auditable LLM-based disclosure framework.
   - Empirical: Taiwan-listed company ESG disclosure evidence.
   - Practical: benchmark tool for regulators/investors/firms.

5. **Paper overview**
   - Brief roadmap of sections.

### References to cite
- `LI2015`
- `Park2015`
- `Berger2021`
- `Gelhard2016`
- `Wang2017`
- `Bender2021`

---

## Related Work
**Target word count:** 1,500–2,000

### Key arguments / subsections
1. **ESG disclosure measurement**
   - Traditional approaches: checklists, keyword counts, proxy-based ratings.
   - Limitations in capturing semantic completeness and substantive quality.

2. **Narrative disclosure quality and strategic ambiguity**
   - Disclosure precision/readability are strategic choices.
   - ESG narratives can be obfuscated or boilerplate even when “compliant.”

3. **Digital methods and LLMs for document understanding**
   - LLMs can support extraction, classification, and semantic evaluation.
   - Need for careful validation, documentation, and benchmark design.

4. **Multilingual / Chinese-language challenges**
   - Cross-lingual transfer is sensitive to shot selection and language/task design.
   - Long-document and document-level extraction remain challenging.

5. **Firm-level determinants of ESG disclosure**
   - Disclosure may vary by environmental sensitivity, governance strength, ownership structure, and organizational capabilities.

6. **Gap synthesis**
   - Existing literature lacks a validated LLM-based ESG disclosure assessment framework for Taiwan-listed firms.

### References to cite
- `LI2015`
- `Park2015`
- `Tong2022`
- `Zhao2021`
- `Bender2021`
- `Berger2021`
- `Gelhard2016`
- `Wang2017`
- `Yang2022`
- `Muninger2019`
- `Steelman2019`

---

## Methodology
**Target word count:** 2,200–2,800

### Key arguments / subsections
1. **Research design**
   - Mixed-method design: expert benchmark + automated scoring comparison + firm-level explanatory analysis.

2. **Sample and data**
   - Taiwan-listed companies.
   - Annual reports and sustainability/ESG reports.
   - Reporting language: Chinese and bilingual documents.
   - Time window and selection criteria.

3. **Benchmark construction**
   - Expert human coding rubric for ESG disclosure quality.
   - Dimensions: completeness, specificity, consistency, relevance, and possibly verifiability.
   - Inter-coder reliability process.

4. **LLM-assisted assessment pipeline**
   - Document preprocessing, segmentation, ESG section detection.
   - Prompting strategy and output schema.
   - Scoring procedure for E/S/G dimensions.
   - Optional multi-pass or ensemble prompting to improve robustness.

5. **Traditional comparison methods**
   - Keyword counting.
   - Rule-based checklist scoring.
   - Readability or length-based proxies if included.

6. **Validation strategy**
   - Agreement with human benchmark: correlation, rank agreement, MAE/RMSE, Cohen/Fleiss/F1 if categorical, calibration if probabilistic.
   - Robustness checks across industries and report languages.

7. **Firm-level explanatory model**
   - Dependent variable: LLM-derived ESG disclosure quality.
   - Independent variables: environmental sensitivity, governance strength, foreign ownership, size, leverage, profitability, analyst following, etc.
   - Model type: panel regression or cross-sectional regression depending on sample design.

8. **Ethics, transparency, and reproducibility**
   - Prompt documentation, codebook, error analysis, limitations of LLM outputs.

### References to cite
- `Tong2022`
- `Bender2021`
- `Zhao2021`
- `LI2015`
- `Gelhard2016`
- `Wang2017`
- `Berger2021`
- `Xiao2020`
- `Raheja2024`
- `Sun2023`

---

## Results
**Target word count:** 1,500–2,000

### Key arguments / subsections
1. **Descriptive statistics**
   - Sample composition by industry, year, and report type.
   - Distribution of disclosure scores by E/S/G.

2. **Main validation results**
   - LLM vs expert human benchmark.
   - LLM vs keyword/rule-based methods.
   - Statistical significance and effect sizes.

3. **Dimension-level performance**
   - Whether LLM performs best on one ESG pillar more than others.

4. **Firm-level determinants of disclosure quality**
   - Effects of environmental sensitivity, governance strength, foreign ownership, and control variables.

5. **Robustness checks**
   - Alternative prompt structures.
   - Alternative scoring thresholds.
   - Language-specific subsample analysis.
   - Industry fixed effects or year fixed effects.
   - Excluding very short/very long reports.

### References to cite
- Mainly methodological references as needed:
  - `Tong2022`
  - `Zhao2021`
  - `LI2015`
  - `Gelhard2016`
  - `Wang2017`
  - `Bender2021`

---

## Discussion
**Target word count:** 1,000–1,400

### Key arguments / subsections
1. **Interpretation of findings**
   - Why LLMs outperform rule-based methods.
   - Semantic nuance, contextual interpretation, bilingual handling.

2. **Theoretical implications**
   - Disclosure theory: quality matters beyond term frequency.
   - Digital transformation and capability perspectives in sustainability reporting.

3. **Practical implications**
   - Regulators: scalable audit/monitoring support.
   - Investors: improved screening and benchmarking.
   - Firms: diagnostic feedback on ESG reporting quality.

4. **Risks and caveats**
   - Hallucination, bias, and auditability concerns.
   - Need for human oversight.

### References to cite
- `LI2015`
- `Berger2021`
- `Bender2021`
- `Gelhard2016`
- `Wang2017`
- `Yang2022`

---

## Conclusion
**Target word count:** 400–600

### Key arguments / subsections
- Re-state research question and main contribution.
- Summarize key empirical and methodological findings.
- Emphasize validated semantic ESG disclosure assessment as the main advance.
- Note limitations and future research directions:
  - more languages,
  - more years,
  - broader ESG data sources,
  - downstream market consequences of disclosure quality.

### References to cite
- `Bender2021`
- `Berger2021`
- `Tong2022`

---

# 2) Figure Plan

## fig1 — Framework / architecture diagram
**Type:** System architecture / workflow diagram

**Proposed caption:**  
*Figure 1. LLM-assisted ESG disclosure assessment framework for Taiwan-listed companies.*

**Data source:**  
- Annual reports and sustainability reports of Taiwan-listed firms  
- Expert-coded benchmark dataset  
- Traditional keyword/rule-based scoring outputs  
- LLM-generated ESG scores

**Narrative role:**  
- Introduces the paper’s core method.
- Shows end-to-end pipeline: document collection → preprocessing → ESG section detection → LLM scoring → human validation → firm-level analysis.
- Helps readers understand how the method improves over conventional scoring.

---

## fig2 — Main results visualization
**Type:** Performance comparison chart
- Suggested format: grouped bar chart or line plot with confidence intervals
- Metrics: correlation with expert scores, MAE, agreement rate, or rank correlation

**Proposed caption:**  
*Figure 2. LLM-assisted ESG scoring exhibits stronger alignment with expert human evaluations than keyword-based and rule-based methods.*

**Data source:**  
- Expert benchmark labels
- LLM output scores
- Baseline disclosure scores

**Narrative role:**  
- Primary evidence for H1.
- Visually demonstrates the superiority of LLM-assisted assessment.
- Can be split into panels by E, S, and G dimensions.

---

## fig3 — Cross-dimensional and industry heterogeneity
**Type:** Heatmap or faceted boxplots

**Proposed caption:**  
*Figure 3. ESG disclosure quality varies across dimensions and industries in Taiwan-listed firms.*

**Data source:**  
- LLM-derived disclosure scores
- Firm industry classification
- ESG pillar scores

**Narrative role:**  
- Shows where disclosure quality is strongest/weakest.
- Supports the empirical contribution.
- Useful for identifying industry-specific disclosure patterns.

---

## fig4 — Ablation / robustness visualization
**Type:** Line chart, dot plot, or coefficient plot

**Proposed caption:**  
*Figure 4. Robustness of LLM assessment across prompting strategies, report language, and document length.*

**Data source:**  
- Alternative LLM prompts
- Subsample analyses
- Different preprocessing settings

**Narrative role:**  
- Demonstrates that results are not driven by one prompt design or one document subset.
- Reinforces credibility and reproducibility.

---

# 3) Table Plan

## tbl1 — Dataset / experimental setup
**Type:** Sample and measurement table

**Proposed caption:**  
*Table 1. Dataset construction, ESG disclosure measures, and validation design.*

**Columns:**
- Component / variable
- Definition
- Source
- Measurement / coding rule
- Expected use in analysis

**Rows:**
- Sample firms
- Report types
- Time period
- ESG sections
- Human benchmark score
- LLM score
- Keyword-based score
- Rule-based score
- Control variables

**Data source:**  
- Public reports
- Human coders
- LLM outputs
- Market/accounting databases for firm controls

---

## tbl2 — Main results comparison
**Type:** Results summary table

**Proposed caption:**  
*Table 2. Comparison of LLM-assisted, keyword-based, and rule-based ESG disclosure assessment methods.*

**Columns:**
- Method
- Correlation with expert score
- MAE / RMSE
- Rank agreement
- Precision/recall/F1 if applicable
- Runtime / scalability metric if available

**Rows:**
- Human benchmark
- LLM-assisted method
- Keyword count method
- Rule-based checklist
- Optional hybrid method

**Data source:**  
- Expert-coded benchmark
- LLM-generated scores
- Baseline scoring outputs
- Computed evaluation metrics

---

## tbl3 — Firm-level determinants of ESG disclosure quality
**Type:** Regression results table

**Proposed caption:**  
*Table 3. Determinants of ESG disclosure quality among Taiwan-listed companies.*

**Columns:**
- Variables
- Coefficient
- Standard error
- t/z-statistic
- Significance
- Model specification

**Rows:**
- Environmental sensitivity
- Governance strength
- Foreign ownership
- Firm size
- Profitability
- Leverage
- Industry fixed effects
- Year fixed effects

**Data source:**  
- LLM-derived disclosure scores
- Firm financial/governance databases

**Optional note:**  
If space is tight, this table can be moved to the appendix and a condensed version kept in the main text.

---

# 4) Research Contract

## Research Question 1 (RQ1)
**How accurately can LLMs assess ESG disclosure quality relative to expert human judgments?**

### Hypothesis
- **H1:** LLM-assisted ESG assessment aligns more closely with expert evaluations than keyword-based or rule-based methods.

### Method
- Build expert-coded benchmark.
- Compare LLM and baseline methods using correlation, MAE/RMSE, and rank agreement.
- Conduct dimension-level analysis for E/S/G.

### Expected outcome
- LLM significantly outperforms baselines, especially on semantic completeness and specificity.

---

## Research Question 2 (RQ2)
**Does LLM-assisted assessment reveal meaningful variation in ESG disclosure quality across firms and industries?**

### Hypotheses
- **H2:** Environmentally sensitive industries exhibit higher ESG disclosure quality.
- **H3:** Firms with stronger governance and higher foreign ownership disclose ESG information more comprehensively.

### Method
- Regress disclosure quality scores on firm-level characteristics.
- Include controls and fixed effects where appropriate.

### Expected outcome
- Positive association with environmental sensitivity, governance strength, and foreign ownership.

---

## Research Question 3 (RQ3)
**Is the LLM method robust across languages, prompt designs, and report structures?**

### Hypothesis
- **H4:** LLM-based scores remain stable across alternative prompting strategies and document preprocessing choices.

### Method
- Robustness and ablation tests.
- Separate analysis for Chinese-only vs bilingual documents.
- Prompt sensitivity checks.

### Expected outcome
- Performance remains superior and stable under alternative implementation choices.

---

## Scope
### Included
- Taiwan-listed firms
- Annual reports and sustainability reports
- ESG disclosure quality measurement
- Human validation
- Comparison with conventional scoring methods
- Firm-level explanatory analysis

### Excluded
- Stock price reaction or capital market consequences, unless added as an extension
- Non-Taiwan firms
- Deep causal identification of ESG disclosure determinants
- Full lifecycle ESG performance outcomes beyond disclosure

---

## Assumptions
- Expert coding reflects the intended construct of disclosure quality.
- LLM outputs can be standardized through prompts and scoring rubrics.
- Public reports are sufficiently accessible and comparable.
- ESG disclosure quality is measurable as a latent construct with observable textual indicators.

---

## Expected Contributions
1. **Methodological:** a validated and auditable LLM-based ESG assessment framework.  
2. **Empirical:** evidence on disclosure quality in Taiwan’s listed firms.  
3. **Practical:** scalable benchmarking tool for ESG oversight and corporate reporting improvement.

---

## Limitations
- Potential LLM hallucination or inconsistency across prompts.
- Human benchmark subjectivity despite coding protocol.
- Chinese/bilingual language complexity may affect performance.
- Results may be specific to Taiwan’s regulatory and reporting environment.
- Disclosure quality is not identical to actual ESG performance.

---

If you want, I can next turn this into a **full journal article blueprint with subsection-level headings and paragraph-by-paragraph writing prompts**, or a **3-page proposal format** suitable for supervisor review.