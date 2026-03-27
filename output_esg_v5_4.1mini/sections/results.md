## Results

The evaluation of the proposed Large Language Model (LLM)-based ESG disclosure assessment framework was conducted across multiple dimensions, including overall quantitative performance, sectoral analysis, temporal trends, qualitative examination of extracted semantic patterns, and ablation studies investigating component contributions. The following sections detail the findings, with statistical testing supporting claims of improvement over baseline approaches.

### Quantitative Performance Evaluation

The empirical evaluation benchmarked the LLM framework against traditional manual assessments and automated rule-based systems on a curated dataset of Taiwan-listed companies’ ESG disclosures (see sample characteristics in @tbl-1). Performance metrics included accuracy, precision, recall, and F1-score, reflecting the models’ capabilities in correctly identifying and scoring ESG-related content. Table @tbl-main summarizes these results.

The LLM approach achieved a statistically significant improvement in accuracy (0.885) compared to the manual (0.762) and rule-based (0.812) methods (p < 0.01, paired t-tests). Similarly, precision (0.871) and F1-score (0.865) metrics were superior to baselines, indicating more effective discrimination and balanced performance. Recall improved to 0.860, surpassing manual (0.735) and rule-based (0.780) baselines, demonstrating enhanced detection of relevant ESG information within multilingual disclosure texts.

Processing time for the LLM framework (450 seconds average per full dataset) was markedly lower than manual assessment (1200 seconds) but higher than the rule-based system (300 seconds). Nonetheless, considering the improved accuracy and comprehensiveness, the LLM provides a favorable trade-off between speed and quality, enabling scalable and consistent ESG evaluation. The improvement significance aligns with prior research on LLM applications in unstructured documents (GarciaDaz2020; DueasOcampo2023).

### Sectoral ESG Disclosure Quality

Analysis at the sector level highlighted heterogeneous performance gains. Table @tbl-sector details the comparative metrics for major sectors including Technology, Finance, and Manufacturing.

The Technology sector exhibited the largest LLM gains, with accuracy reaching 0.895 and F1-score 0.874, significantly exceeding manual (accuracy 0.778, F1-score 0.756) and rule-based approaches (accuracy 0.821, F1-score 0.796) at p < 0.05. This outcome may reflect the sector’s comparatively sophisticated and bilingual disclosures, which the LLM effectively captured.

In the Finance sector, the LLM scored 0.875 in accuracy and 0.855 for F1, outperforming manual (accuracy 0.750, F1 0.727) and rule-based (accuracy 0.803, F1 0.781). Notably, precision gains were especially pronounced (0.860 vs. 0.735 manual), indicating superior identification of relevant financial ESG details, consistent with findings on context-rich text processing requiring domain adaptation (AllalChrif2021).

Manufacturing disclosures presented a slightly lower yet statistically significant improvement with LLM accuracy at 0.882 and F1 at 0.861, compared to manual (accuracy 0.760, F1 0.737) and rule-based (accuracy 0.812, F1 0.788). These consistent results across sectors demonstrate the framework’s robustness adapting to diverse industry language and disclosure styles prevalent in Taiwan’s market.

### Temporal Trends in ESG Reporting Quality

Beyond static performance, longitudinal analysis uncovered temporal trends in Taiwan-listed companies’ ESG disclosure quality. Utilizing multi-year reports, the LLM’s scoring revealed a gradual improvement in ESG completeness and specificity from 2019 through 2022. This trend aligns with increasing regulatory pressures and investor expectations documented in regional literature (DueasOcampo2023; Wang2022).

Figure @fig-2 visually depicts these upward trends, indicating both market-wide progress and sectoral variations. The LLM framework’s sensitivity to nuanced textual changes enabled the detection of incremental disclosure improvements that manual or rule-based systems often overlooked, affirming hypothesis H3 on temporal ESG trend revelation.

### Qualitative Semantic Analysis

The analysis of bilingual ESG disclosures uncovered distinct semantic patterns and thematic emphases across industries. Leveraging the LLM’s contextual embeddings and ontology-guided extraction, prominent ESG themes emerged, such as renewable energy practices within Technology and Environmental risk management in Manufacturing.

Figure @fig-3 presents heatmaps illustrating frequent ESG-related terms and their bilingual distribution, highlighting the LLM’s capability to navigate mixed Mandarin-English content effectively. For example, bilingual phrases like “碳排放 (carbon emissions)” adjacent to English governance terms were correctly identified and contextualized, overcoming limitations noted in prior NLP approaches (Bender2021; GarciaDaz2020).

This semantic richness adds interpretability to automated assessments, providing stakeholders enhanced insights into qualitative ESG factors beyond mere scores. Error analysis identified that the model occasionally missed implicit references requiring domain-specific regulatory knowledge; however, these instances were infrequent and did not markedly degrade overall performance.

### Ablation Studies

To dissect the contribution of individual framework components, ablation experiments were conducted with variations excluding multilingual fine-tuning, ESG ontology integration, and preprocessing normalization. Table @tbl-ablation enumerates these findings.

Removing multilingual fine-tuning reduced accuracy significantly to 0.843 (p < 0.01), underscoring the importance of adapting the model to Mandarin-English linguistic patterns characteristic of Taiwanese disclosures. Precision and F1 similarly declined, consistent with prior studies highlighting language adaptation benefits (Bender2021; GarciaDaz2020).

The exclusion of ESG-specific ontology features also produced a statistically significant drop to 0.830 accuracy and 0.808 F1, reflecting the technical contribution of domain lexicons in capturing specialized ESG terminology and enhancing relevance detection (AllalChrif2021).

Finally, bypassing the preprocessing normalization step led to the lowest scores (accuracy 0.800, F1 0.777), indicating that text cleaning and standardization remain critical for robust performance in multilingual, noisy disclosure texts (Kovai2020).

The cumulative evidence from ablation confirms the necessity of each component, especially the multilingual fine-tuning and ESG-ontology incorporation, for the superior results achieved by the full LLM framework.