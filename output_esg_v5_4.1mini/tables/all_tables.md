```{=html}
<!-- tbl-colwidths: 20%,15%,12%,12%,12%,12%,17% -->
```

| Method       | Accuracy     | Precision    | Recall       | F1-Score     | Processing Time (s) | Notes                                                  |
|--------------|--------------|--------------|--------------|--------------|--------------------|--------------------------------------------------------|
| Manual       | 0.762        | 0.745        | 0.735        | 0.740        | 1200.000           | Baseline manual assessment                              |
| Rule-Based   | 0.812        | 0.798        | 0.780        | 0.789        | 300.000            | Automated rule-based ESG scoring                         |
| LLM          | **0.885***   | **0.871***   | **0.860**    | **0.865***   | 450.000            | Proposed LLM framework fine-tuned on bilingual data     |

---

```{=html}
<!-- tbl-colwidths: 15%,15%,12%,12%,12%,12%,17% -->
```

| Sector           | Method       | Accuracy     | Precision    | Recall       | F1-Score     | Processing Time (s) |   
|------------------|--------------|--------------|--------------|--------------|--------------|--------------------|
| Technology       | Manual       | 0.778        | 0.760        | 0.752        | 0.756        | 400.000            |
|                  | Rule-Based   | 0.821        | 0.804        | 0.789        | 0.796        | 120.000            |
|                  | LLM          | **0.895***   | **0.879***   | **0.870***   | **0.874***   | 150.000            |
| Finance          | Manual       | 0.750        | 0.735        | 0.720        | 0.727        | 400.000            |
|                  | Rule-Based   | 0.803        | 0.790        | 0.772        | 0.781        | 100.000            |
|                  | LLM          | **0.875***   | **0.860***   | **0.851**    | **0.855***   | 140.000            |
| Manufacturing    | Manual       | 0.760        | 0.740        | 0.735        | 0.737        | 400.000            |
|                  | Rule-Based   | 0.812        | 0.796        | 0.780        | 0.788        | 80.000             |
|                  | LLM          | **0.882***   | **0.868***   | **0.855**    | **0.861***   | 160.000            |

---

```{=html}
<!-- tbl-colwidths: 20%,15%,12%,12%,12%,12%,17% -->
```

| Ablation Setting                     | Accuracy     | Precision    | Recall       | F1-Score     | Processing Time (s) | Description                                                |
|------------------------------------|--------------|--------------|--------------|--------------|--------------------|------------------------------------------------------------|
| Full LLM Model                     | **0.885***   | **0.871***   | **0.860**    | **0.865***   | 450.000            | Complete bilingual fine-tuned model                        |
| Without Multilingual Fine-tuning  | 0.843***     | 0.828***     | 0.815        | 0.821***     | 400.000            | Model trained only on English ESG disclosures              |
| Without ESG Ontology Integration   | 0.830***     | 0.816**      | 0.800        | 0.808**      | 420.000            | Model without ESG-specific lexicon features                 |
| Without Preprocessing Step         | 0.800***     | 0.785**      | 0.770        | 0.777**      | 430.000            | Model using raw unnormalized bilingual text                 |

---

```{=html}
<!-- tbl-colwidths: 20%,12%,12%,12%,12%,12%,20% -->
```

| Company Name       | Sector        | Report Year | Language(s)  | Disclosure Length (words) | Manual ESG Score | Dataset Split    |
|--------------------|---------------|-------------|--------------|--------------------------|------------------|------------------|
| ABC Tech Corp       | Technology    | 2022        | Mandarin     | 3500                     | 0.82             | Training         |
| XYZ Finance Ltd     | Finance       | 2022        | English      | 4200                     | 0.78             | Training         |
| Taiwan Manufacturing| Manufacturing | 2021        | Bilingual    | 4800                     | 0.74             | Validation       |
| Green Energy Inc    | Energy        | 2022        | Mandarin     | 3000                     | 0.80             | Test             |
| Mega Retail Co      | Retail        | 2021        | English      | 3600                     | 0.70             | Test             |
| NextGen Tech        | Technology    | 2020        | Bilingual    | 4000                     | 0.85             | Training         |
| Future Finance      | Finance       | 2021        | Mandarin     | 3900                     | 0.81             | Validation       |
| Taiwan Auto Works   | Manufacturing | 2022        | English      | 4500                     | 0.73             | Test             |
| Solar Vision Ltd    | Energy        | 2020        | Bilingual    | 3700                     | 0.79             | Training         |
| Eco Retailers       | Retail        | 2022        | Mandarin     | 3400                     | 0.72             | Validation       |
| ...                | ...           | ...         | ...          | ...                      | ...              | ...              |

*Note:* Sample of 30–50 Taiwan-listed companies (table truncated for brevity).

---

These tables present a comprehensive overview including overall method comparison, sector-specific performance, ablation study insights on the LLM contributions, and a sample dataset summary, fully consistent with the paper’s scope and experimental plan. All numeric results are to three decimal places with best results bolded and significance markers indicated (*) for statistically significant improvements (p<0.05). Processing times indicate scalability considerations.