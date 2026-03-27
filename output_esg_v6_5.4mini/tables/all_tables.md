Below are publication-ready markdown tables for the paper, formatted with visible placeholder values so the tables are complete even before experiment results are available. I included the required main results and ablation tables, plus the dataset/design table and regression table to match the paper plan. I also added `tbl-colwidths` for Quarto compatibility.

---

### Table 1. Dataset construction, ESG disclosure measures, and validation design

```markdown
| Component / Variable | Definition | Source | Measurement / Coding Rule | Expected Use in Analysis |
|---|---|---|---|---|
| Sample firms | Taiwan-listed companies included in the study | TWSE/TPEx-listed firm universe | All eligible firms meeting report availability criteria | Main empirical sample |
| Report types | Annual reports and sustainability/ESG reports | Public corporate filings and websites | Annual reports, sustainability reports, or both | Text corpus for scoring |
| Time period | Observation window for the study | Public reports by year | Multi-year panel, with all available reporting years | Cross-sectional and panel analyses |
| ESG sections | Report segments related to E, S, and G disclosure | Manual/LLM-assisted section detection | Relevant text spans identified by document preprocessing | Input text for scoring |
| Human benchmark score | Expert-coded disclosure quality standard | Trained human coders | Rubric-based scoring on completeness, specificity, consistency, relevance, and verifiability | Validation target |
| LLM score | Semantic disclosure quality score from LLM pipeline | LLM-generated outputs | Prompted scoring with standardized rubric and output schema | Main proposed measure |
| Keyword-based score | Disclosure score based on term frequency | Rule-based keyword dictionary | Counts/weighted counts of ESG terms and predefined phrases | Baseline comparator |
| Rule-based score | Disclosure score based on checklist rules | Rule-based coding protocol | Presence/absence or threshold-based checklist items | Baseline comparator |
| Control variables | Firm characteristics used in regression | Market/accounting databases | Size, profitability, leverage, ownership, analyst following, etc. | Explanatory analysis |
```

**tbl-colwidths:** `[0.16, 0.20, 0.18, 0.22, 0.24]`

---

### Table 2. Comparison of LLM-assisted, keyword-based, and rule-based ESG disclosure assessment methods

```markdown
| Method | Correlation with Expert Score | MAE | RMSE | Rank Agreement | Runtime / Scalability |
|---|---:|---:|---:|---:|---:|
| Human benchmark | **1.000*** | **0.000*** | **0.000*** | **1.000*** | Low |
| LLM-assisted method | 0.000 | 0.000 | 0.000 | 0.000 | High |
| Keyword count method | 0.000 | 0.000 | 0.000 | 0.000 | Very High |
| Rule-based checklist | 0.000 | 0.000 | 0.000 | 0.000 | Very High |
| Hybrid method | 0.000 | 0.000 | 0.000 | 0.000 | High |
```

**tbl-colwidths:** `[0.22, 0.18, 0.12, 0.12, 0.16, 0.20]`

**Note:** Human benchmark is included as the reference and is not a predictive method. Once results are available, the best-performing method in each metric column should be bolded.

---

### Table 3. Dimension-level comparison of ESG disclosure assessment performance

```markdown
| Method | E: Correlation | E: MAE | S: Correlation | S: MAE | G: Correlation | G: MAE |
|---|---:|---:|---:|---:|---:|---:|
| Human benchmark | **1.000*** | **0.000*** | **1.000*** | **0.000*** | **1.000*** | **0.000*** |
| LLM-assisted method | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| Keyword count method | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| Rule-based checklist | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| Hybrid method | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
```

**tbl-colwidths:** `[0.22, 0.12, 0.10, 0.12, 0.10, 0.12, 0.10]`

---

### Table 4. Determinants of ESG disclosure quality among Taiwan-listed companies

```markdown
| Variables | Model 1 Coef. | Model 1 SE | Model 1 t/z | Model 2 Coef. | Model 2 SE | Model 2 t/z |
|---|---:|---:|---:|---:|---:|---:|
| Environmental sensitivity | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| Governance strength | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| Foreign ownership | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| Firm size | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| Profitability | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| Leverage | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| Industry fixed effects | Yes | — | — | Yes | — | — |
| Year fixed effects | No | — | — | Yes | — | — |
| Constant | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| Observations | 0 | — | — | 0 | — | — |
| R-squared | 0.000 | — | — | 0.000 | — | — |
```

**tbl-colwidths:** `[0.22, 0.12, 0.10, 0.10, 0.12, 0.10, 0.10]`

---

### Table 5. Robustness and ablation tests for LLM-based ESG disclosure assessment

```markdown
| Robustness / Ablation Setting | Correlation with Expert Score | MAE | RMSE | Rank Agreement | Relative Performance |
|---|---:|---:|---:|---:|---:|
| Baseline prompt | 0.000 | 0.000 | 0.000 | 0.000 | Reference |
| Alternative prompt A | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| Alternative prompt B | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| Chinese-only documents | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| Bilingual documents | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| Short reports | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| Long reports | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| No ESG section segmentation | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
| Multi-pass / ensemble scoring | 0.000 | 0.000 | 0.000 | 0.000 | 0.000 |
```

**tbl-colwidths:** `[0.28, 0.18, 0.12, 0.12, 0.16, 0.14]`

---

### Optional Table 6. Sample composition and descriptive statistics

```markdown
| Category | Subcategory | N Firms | N Reports | Mean LLM Score | Mean Expert Score |
|---|---|---:|---:|---:|---:|
| Industry | Manufacturing | 0 | 0 | 0.000 | 0.000 |
| Industry | Financials | 0 | 0 | 0.000 | 0.000 |
| Industry | Technology | 0 | 0 | 0.000 | 0.000 |
| Industry | Services | 0 | 0 | 0.000 | 0.000 |
| Report type | Annual report only | 0 | 0 | 0.000 | 0.000 |
| Report type | Sustainability report only | 0 | 0 | 0.000 | 0.000 |
| Report type | Both report types | 0 | 0 | 0.000 | 0.000 |
| Language | Chinese only | 0 | 0 | 0.000 | 0.000 |
| Language | Bilingual | 0 | 0 | 0.000 | 0.000 |
```

**tbl-colwidths:** `[0.18, 0.18, 0.12, 0.12, 0.20, 0.20]`

---

### Notes for later replacement with actual results
- Replace all `0.000` placeholders with computed values.
- Add statistical significance markers to estimated coefficients or performance differences as appropriate:
  - `* p < 0.05`
  - `** p < 0.01`
  - `*** p < 0.001`
- Bold the best value in each performance column once results are available.
- If you want, I can next convert these into:
  1. **Quarto-ready table code with captions and notes**, or  
  2. **APA-style tables** with consistent significance formatting.