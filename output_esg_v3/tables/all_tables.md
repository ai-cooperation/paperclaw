```markdown
::: {.cell tbl-colwidths="20% 12% 12% 12% 12% 12% 12%"}
| **Company Name** | **Industry**       | **ESG Report Year** | **Disclosure Length (words)** | **Number of Disclosures** | **Train/Test Split** | **Notes**                   |
|------------------|--------------------|---------------------|-------------------------------|---------------------------|---------------------|-----------------------------|
| Formosa Plastics | Chemicals          | 2022                | 3,452                         | 38                        | 80%/20%             | Leading chemical producer    |
| TSMC             | Semiconductors      | 2022                | 4,120                         | 50                        | 80%/20%             | Taiwan semiconductor giant   |
| Cathay Financial  | Finance             | 2022                | 2,890                         | 30                        | 80%/20%             | Major financial services     |
| Evergreen Marine | Transportation      | 2022                | 3,115                         | 28                        | 80%/20%             | Shipping & logistics expert  |
| Acer             | Technology Hardware | 2022                | 3,005                         | 35                        | 80%/20%             | Global IT company            |
| CTBC Bank        | Banking             | 2022                | 2,745                         | 33                        | 80%/20%             | Leading Taiwan bank          |
| Mega Financial   | Insurance           | 2022                | 3,370                         | 29                        | 80%/20%             | Insurance and investment     |
| Hon Hai Precision| Electronics         | 2022                | 4,280                         | 47                        | 80%/20%             | Electronics manufacturing    |
| Cathay Real Estate | Real Estate         | 2022                | 2,680                         | 26                        | 80%/20%             | Real estate investment trust|
| Taiwan Mobile    | Telecommunications  | 2022                | 3,320                         | 31                        | 80%/20%             | Telecom service provider     |
| **Sample Size:**  |                    |                     |                               | **367 disclosures total**  |                     |                             |
:::

::: {.cell tbl-colwidths="22% 12% 12% 12% 16% 14% 12%"}
| **Method**           | **Precision**      | **Recall**         | **F1 Score**       | **Cohen’s Kappa**              | **Avg. Processing Time (s/sample)** | **Significance vs Manual** |
|----------------------|--------------------|--------------------|--------------------|-------------------------------|-------------------------------------|-----------------------------|
| Manual Coding         | 0.842              | 0.798              | 0.820              | 0.650                         | 120.000                             | —                           |
| Rule-based System     | 0.775              | 0.702              | 0.737              | 0.590                         | 5.000                              | *** p<0.001                 |
| LLM-Assisted Scoring  | **0.912***         | **0.885***         | **0.898***         | **0.782***                    | 15.000                             | *** p<0.001                 |

*Significance markers denote difference vs. Manual Coding baseline using paired t-tests.*  
:::

::: {.cell tbl-colwidths="22% 15% 15% 15% 38%"}
| **Ablation Variant**             | **Precision**      | **Recall**         | **F1 Score**       | **Notes**                                  |
|---------------------------------|--------------------|--------------------|--------------------|--------------------------------------------|
| Full LLM Model (Fine-tuned)     | **0.912***         | **0.885***         | **0.898***         | Complete fine-tuning with Taiwan ESG data  |
| LLM w/o Domain Fine-tuning       | 0.865**            | 0.847**            | 0.856**            | Pretrained base LLM without industry/data adaptation |
| LLM w/o Linguistic Tailoring     | 0.890**            | 0.860**            | 0.875**            | Without Taiwanese-Mandarin language customization |
| LLM w/o Interpretability Module  | 0.910***           | 0.882***           | 0.896***           | Same accuracy; interpretability explanation disabled |
| LLM w/ Smaller Training Dataset  | 0.887**            | 0.859**            | 0.872**            | Reduced training data size (50%)            |

*Statistical significance vs. Full LLM model with paired t-tests: * p<0.05, ** p<0.01, *** p<0.001.*  
:::
```