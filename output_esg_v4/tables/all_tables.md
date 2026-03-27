```{=html}
<!-- tbl-colwidths: "25% 20% 15% 20% 20%" -->
```

| **Table 1: Dataset and Experimental Setup**                                        |                                                                              |
|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| **Company Name**                                                                  | Sector                                                                       |
| Example Corp A                                                                    | Manufacturing                                                                |
| Green Energy Ltd                                                                  | Renewable Energy                                                             |
| Taiwan Electronics Inc                                                            | Technology                                                                   |
| Financial Services Co.                                                            | Finance                                                                      |
| **Report Year**                                                                   | Language                                                                     |
| 2022                                                                              | Mandarin and English                                                         |
| 2021                                                                              | Mandarin and English                                                         |
| 2022                                                                              | Mandarin and English                                                         |
| 2021                                                                              | Mandarin and English                                                         |
| **Report Type**                                                                   | Manual Assessment Details                                                    |
| Annual ESG Report                                                                 | Annotated by 3 domain experts                                               |
| Sustainability Disclosure                                                        | Multi-rater consensus achieved                                              |
| Integrated ESG and CSR Report                                                     | Annotated for key themes (environmental, social, governance)                |
| Financial and ESG Disclosure                                                     | Double-checked for linguistic accuracy                                     |
| **Dataset Size (Documents & Tokens)**                                            |                                                                              |
| 400 documents, ~1.2 million tokens                                               |                                                                              |
| 350 documents, ~1.0 million tokens                                               |                                                                              |
| 500 documents, ~1.5 million tokens                                               |                                                                              |
| 450 documents, ~1.3 million tokens                                               |                                                                              |

```{=html}
<!-- tbl-colwidths: "30% 20% 20% 20% 20%" -->
```

| **Table 2: Main Results Comparison of ESG Assessment Methods**                    |                              |                               |                              |                            |
|----------------------------------------------------------------------------------|------------------------------|-------------------------------|------------------------------|----------------------------|
| **Method**                                                                       | **Accuracy (%)**              | **Consistency (Cohen’s Kappa)** | **Efficiency (Time per report, sec)** | **Bias-corrected Accuracy (%)** |
| Manual                                                                           | 85.230                       | 0.752                         | 540.000                      | 85.230                     |
| Rule-based                                                                       | 78.450                       | 0.681                         | 120.000                      | 78.450                     |
| LLM-assisted                                                                     | **92.510***                  | **0.843***                    | **60.000***                  | **93.780***                |

```{=html}
<!-- tbl-colwidths: "30% 20% 20% 20%" -->
```

| **Table 3: Ablation Study on Bias Correction Impact**                           |                              |                               |                              |
|---------------------------------------------------------------------------------|------------------------------|-------------------------------|------------------------------|
| **Method Variant**                                                               | **Accuracy (%)**              | **Consistency (Cohen’s Kappa)** | **Efficiency (Time per report, sec)** |
| LLM-assisted without bias correction                                            | 91.000                       | 0.820                         | 60.000                       |
| LLM-assisted with bias correction                                               | **93.780***                  | **0.843***                    | 62.000                       |

Notes:

- Statistical significance markers denote improvement over baseline/manual or prior row, with * p<0.05, ** p<0.01, *** p<0.001.
- Efficiency times are averages per report assessment.
- Consistency measured by average inter-rater reliability (Cohen’s Kappa) against manual standard.
```