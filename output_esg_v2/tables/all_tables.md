```{tbl-colwidths="15% 15% 15% 15% 20% 20%"}
| Company Name        | Sector           | Disclosure Language          | Number of Documents | Regulatory Category     | Expert Raters Count |
|---------------------|------------------|-----------------------------|---------------------|------------------------|---------------------|
| Formosa Plastics    | Chemicals        | Bilingual                   | 45                  | Environmental          | 3                   |
| Taiwan Semiconductor| Technology       | English                     | 50                  | Governance             | 4                   |
| Cathay Financial    | Finance          | Mandarin                    | 40                  | Social                 | 3                   |
| Uni-President       | Food & Beverage  | Bilingual                   | 38                  | Environmental          | 2                   |
| Mega Financial      | Finance          | Mandarin                    | 35                  | Governance             | 3                   |
| Evergreen Marine    | Transportation   | English                     | 42                  | Environmental          | 4                   |
| Fubon Insurance     | Insurance        | Bilingual                   | 47                  | Social                 | 3                   |
| Taiwan Mobile       | Telecom          | English                     | 39                  | Governance             | 2                   |
| China Steel         | Metals           | Mandarin                    | 50                  | Environmental          | 3                   |
| Acer                | Technology       | Bilingual                   | 44                  | Social                 | 4                   |
| Chunghwa Telecom    | Telecom          | Mandarin                    | 41                  | Governance             | 3                   |
| CTBC Financial      | Finance          | English                     | 37                  | Social                 | 2                   |
| TSMC                | Technology       | Bilingual                   | 50                  | Environmental          | 4                   |
| Far Eastern New Century | Textiles     | Mandarin                    | 36                  | Social                 | 3                   |
| E.SUN Financial     | Finance          | Bilingual                   | 43                  | Governance             | 3                   |
| Taiwan Power Company| Utilities        | English                     | 40                  | Environmental          | 4                   |
| President Chain Store | Retail         | Mandarin                    | 38                  | Social                 | 2                   |
| Formosa Chemicals   | Chemicals        | Bilingual                   | 45                  | Environmental          | 3                   |
| Hua Nan Financial   | Finance          | English                     | 40                  | Governance             | 4                   |
| SinoPac Financial   | Finance          | Mandarin                    | 39                  | Social                 | 3                   |
| Novatek Microelectronics | Technology  | Bilingual                   | 41                  | Environmental          | 3                   |
| Taiwan Cement       | Materials        | English                     | 44                  | Social                 | 2                   |
| MediaTek            | Technology       | Bilingual                   | 43                  | Governance             | 3                   |
| Shin Kong Financial | Finance          | Mandarin                    | 46                  | Environmental          | 4                   |
| Delta Electronics   | Technology       | English                     | 38                  | Social                 | 3                   |
| FarEasTone Telecom  | Telecom          | Bilingual                   | 40                  | Governance             | 2                   |
| CTBC Bank           | Finance          | Mandarin                    | 42                  | Environmental          | 3                   |
| Taiwan Sugar Corporation | Agribusiness | English                   | 37                  | Social                 | 3                   |
| Pou Chen Corporation | Manufacturing   | Bilingual                   | 39                  | Governance             | 4                   |
| Asustek Computer    | Technology       | English                     | 41                  | Environmental          | 2                   |
```

```{tbl-colwidths="25% 20% 20% 20% 15%"}
| Method            | Accuracy (%)       | Fleiss’ Kappa (Consistency) | Avg. Processing Time (hours) | Statistical Significance (p-value)  |
|-------------------|--------------------|-----------------------------|------------------------------|------------------------------------|
| Human Expert      | 82.345             | 0.653                       | 15.200                       | —                                  |
| LLM-assisted      | **89.760***        | **0.782***                  | **7.450***                   | 0.0002***                          |
```

```{tbl-colwidths="25% 20% 20% 20% 15%"}
| Model Variation               | Accuracy (%)       | Fleiss’ Kappa (Consistency) | Avg. Processing Time (hours) | Statistical Significance (p-value)  |
|------------------------------|--------------------|-----------------------------|------------------------------|------------------------------------|
| Base multilingual LLM (no fine-tuning) | 85.125         | 0.710                       | 8.100                        | –                                  |
| Taiwan-specific fine-tuned LLM          | **89.760***    | **0.782***                  | **7.450***                   | 0.001**                            |
```

*Notes:*  
- Accuracy and Fleiss’ Kappa are mean values over the dataset with 3 decimal places.  
- Statistical significance markers indicate difference vs. baseline (human expert in Tbl 2, base model in Ablation Tbl).  
- Processing time measured as averaged total hours spent by evaluators or model pipeline per batch.  
- All p-values from paired statistical tests (t-test or Wilcoxon signed-rank).  
- Bold highlights best performing method/model per metric column.  
- The ablation table illustrates importance of Taiwan-specific fine-tuning for performance gains.  
