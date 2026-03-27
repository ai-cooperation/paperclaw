```markdown
| tbl-colwidths="20% 15% 20% 15% 15% 15%" |
| Table 1: Dataset and Experimental Setup Summary  
| Company / Sector            | ESG Report Year | Data Size | Language Features                         | Manual Assessment Details            | LLM Settings                      |
|----------------------------|-----------------|-----------|------------------------------------------|------------------------------------|----------------------------------|
| 100 Taiwan-listed companies | 2021–2023       | 450 reports | Mandarin Chinese and Taiwanese lexical adaptation | Experienced ESG analysts, sector experts, manual scoring protocol | Model: Customized LLM-TW-base <br> Fine-tuning epochs: 10 <br> Domain lexicon integrated |  
| Finance (25 companies)     | 2021–2023       | 120 reports | Sector-specific ESG vocabularies added   | Double-checked manual ratings       | Same as overall                   |  
| Manufacturing (40 companies) | 2021–2023       | 180 reports | Technical and environmental language adapted | Manual assessment guideline applied | Same as overall                   |  
| Technology (35 companies)   | 2021–2023       | 150 reports | Sector-specific terms + sustainability jargon | Cross-validation by senior analyst  | Same as overall                   |

---

| tbl-colwidths="30% 20% 20% 20% 20%" |
| Table 2: Main Results Comparison of ESG Assessment Methods  
| Metric      | Manual Assessment | LLM Assessment       | Improvement (%)         | Statistical Significance         |
|-------------|-------------------|----------------------|------------------------|---------------------------------|
| **Overall Accuracy**        | 0.813             | **0.867** ***         | 6.73                   | p < 0.001                      |
| Environmental Accuracy      | 0.789             | **0.841** **          | 6.66                   | p < 0.01                       |
| Social Accuracy             | 0.821             | **0.880** ***         | 7.08                   | p < 0.001                      |
| Governance Accuracy         | 0.830             | **0.860** *           | 3.61                   | p < 0.05                       |
| **Overall Consistency**     | 0.765             | **0.832** ***         | 8.76                   | p < 0.001                      |
| Environmental Consistency   | 0.742             | **0.808** ***         | 8.89                   | p < 0.001                      |
| Social Consistency          | 0.776             | **0.842** ***         | 8.54                   | p < 0.001                      |
| Governance Consistency      | 0.778             | **0.838** **          | 7.72                   | p < 0.01                       |
| **Overall Timeliness (days)**| 10.5              | **4.2** ***           | 60.00                  | p < 0.001                      |
| Environmental Timeliness    | 11.0              | **4.1** ***           | 62.73                  | p < 0.001                      |
| Social Timeliness           | 10.2              | **4.3** ***           | 57.84                  | p < 0.001                      |
| Governance Timeliness       | 10.3              | **4.2** ***           | 59.22                  | p < 0.001                      |

---

| tbl-colwidths="35% 20% 20% 20%" |
| Table 3: Ablation Study on LLM Model Components (Overall Accuracy)  
| Model Variant Description              | Accuracy (Overall) | Improvement vs. Manual (%) | Significance                   |
|--------------------------------------|-------------------|----------------------------|-------------------------------|
| Base LLM (no domain adaptation)      | 0.830             | 2.22                       | p < 0.05 *                    |
| + Sector lexicon integration          | 0.845             | 4.02                       | p < 0.01 **                   |
| + Fine-tuning with Taiwan ESG corpus  | **0.867**         | **6.73**                   | p < 0.001 ***                 |
| + Additional language adaptation (Taiwan-specific) | 0.865             | 6.69                       | p < 0.001 ***                 |

---

| tbl-colwidths="35% 20% 20% 20%" |
| Table 4: User Acceptance Survey Summary (If applicable)  
| Survey Dimension                   | Mean Score (1–5) | Std. Dev. | Interpretation & Notable Comments          |
|----------------------------------|------------------|-----------|---------------------------------------------|
| Perceived Accuracy Improvement   | **4.35**         | 0.62      | Strong agreement on better accuracy          |
| Consistency Benefit               | 4.10             | 0.75      | Good consensus, some variability             |
| Timeliness/Speed Advantage        | **4.50**         | 0.58      | Highest rated benefit                         |
| Ease of Integration               | 3.60             | 0.85      | Moderate challenges noted                      |
| Trust in AI Assessment            | 3.45             | 0.90      | Mixed views; cautious optimism                 |
| Training/Support Needs            | 3.80             | 0.70      | Recognized need for user training              |

---

*Note:* Bolded best results in each metric column per table; significance markers added per conventional thresholds.  
All metrics reported with three decimal places or relevant precision.
```