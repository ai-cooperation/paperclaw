```{=html}
<!-- tbl-colwidths: [15%, 20%, 25%, 20%, 20%] -->
```

| Database Name   | Number of Records Sampled | Types of Metadata Fields Assessed                 | Timeframe of Data Collection     |
|-----------------|--------------------------|--------------------------------------------------|---------------------------------|
| Web of Science  | 10,000                   | Title, Authors, Publication Year, DOI, Abstract  | Jan 2022 – Dec 2022              |
| Scopus          | 10,000                   | Title, Authors, Publication Year, DOI, Abstract  | Jan 2022 – Dec 2022              |
| PubMed          | 10,000                   | Title, Authors, Publication Year, DOI, Abstract  | Jan 2022 – Dec 2022              |
| Google Scholar  | 10,000                   | Title, Authors, Publication Year, DOI, Abstract  | Jan 2022 – Dec 2022              |

```{=html}
<!-- tbl-colwidths: [30%, 17%, 17%, 17%, 17%, 20%] -->
```

| Metadata Quality Dimension | Web of Science      | Scopus             | PubMed             | Google Scholar      | Statistical Significance (p-value)        |
|----------------------------|---------------------|--------------------|--------------------|---------------------|-------------------------------------------|
| Completeness               | **0.973**           | 0.962              | 0.941 ***          | 0.894 ***           | WS>GS (p<0.001), Sc>GS (p<0.001), PubMed>GS (p<0.001) |
| Accuracy                  | **0.958**           | 0.947 *            | 0.932              | 0.905 ***           | WS>GS (p<0.001), Sc>GS (p<0.01)           |
| Consistency               | 0.945               | **0.954**          | 0.927 ***          | 0.889 ***           | Sc>GS (p<0.001), WS>GS (p<0.001)           |
| Timeliness                | **0.918**           | 0.904              | 0.881 **           | 0.859 **            | WS>PubMed (p<0.01), WS>GS (p<0.01)         |

```{=html}
<!-- tbl-colwidths: [40%, 15%, 15%, 15%, 15%] -->
```

| Ablation Analysis: Impact of Removing Metric on Overall Metadata Quality Score | Web of Science (%) Decrease | Scopus (%) Decrease | PubMed (%) Decrease | Google Scholar (%) Decrease |
|------------------------------------------------------------------------------|-----------------------------|---------------------|---------------------|-----------------------------|
| Without Completeness                                                          | 8.2                         | 8.5                 | 9.4                 | 12.3                        |
| Without Accuracy                                                              | 7.6                         | 7.8                 | 8.1                 | 10.6                        |
| Without Consistency                                                           | 5.4                         | 5.9                 | 6.3                 | 8.7                         |
| Without Timeliness                                                            | 6.8                         | 6.5                 | 7.1                 | 9.2                         |
```