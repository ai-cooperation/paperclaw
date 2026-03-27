## Results

This section presents the empirical outcomes of evaluating the LLM-assisted ESG disclosure assessment framework against traditional human expert evaluations for Taiwan-listed companies. We organize the results beginning with a description of the dataset characteristics, followed by quantitative comparisons of accuracy, inter-rater reliability (consistency), and processing time. Subsequently, we provide statistical significance testing to establish robustness. Finally, an ablation analysis examines the effect of Taiwan-specific fine-tuning on model performance. All statistical analyses employ paired tests at a 0.05 significance threshold unless noted otherwise.

### Dataset Characteristics

The dataset comprises ESG disclosures from 30 prominent Taiwan-listed companies spanning diverse sectors, including technology, finance, telecommunications, manufacturing, and chemicals. As summarized in @tbl-1, the disclosures present in Mandarin, English, or bilingual formats, reflecting the linguistic duality characteristic of Taiwan’s regulatory and corporate disclosure environment. Document counts per company range from 35 to 50, with an emphasis on balanced representation across environmental, social, and governance regulatory categories. Expert evaluation panels consisted of 2 to 4 raters per company, ensuring rigorous human judgment baselines for comparison.

The bilingual nature of the dataset posed unique challenges addressed by the LLM framework’s tailored multilingual model fine-tuned on Taiwan-specific ESG corpora. This enabled effective contextual understanding across languages and sector-specific terminology @Bender2021; @GascoHernandez2022. The corpus diversity supports generalizability of conclusions regarding model-assisted ESG evaluations in the Taiwanese institutional context.

### Quantitative Comparisons: Accuracy, Consistency, and Efficiency

#### Accuracy

Table @tbl-2 presents aggregated accuracy scores for LLM-assisted versus human expert ESG disclosure assessments, benchmarked against consensus ground truths established through multi-rater agreement and prior regulatory validations. The LLM-assisted framework yielded a substantially higher average accuracy of 89.76%, outperforming human experts whose mean accuracy reached 82.35%. The accuracy gain of over 7 percentage points substantiates the primary hypothesis (H1) that LLM assistance improves ESG assessment precision by effectively synthesizing multilingual disclosures and regulatory nuances @Kang2021; @Virmani2023.

#### Inter-rater Reliability (Consistency)

Consistency across evaluators, measured using Fleiss’ Kappa, further highlighted the advantage of LLM assistance. The LLM-assisted approach achieved a Fleiss’ Kappa of 0.782, indicating strong agreement among assessments, compared to 0.653 for human experts. This improvement confirms hypothesis H2 that automated assistance enhances evaluation consistency by reducing subjective biases and interpretative variability typical of manual review processes @GascoHernandez2022; @Bender2021. Higher consistency supports reliability and comparability of ESG ratings critical for investors and regulators.

#### Processing Time

Efficiency gains were also pronounced. The average processing time per evaluation batch was 7.45 hours with LLM assistance, less than half the 15.2 hours typically required by expert human panels. This reduction addresses hypothesis H3 by demonstrating LLMs can substantially accelerate ESG disclosure assessments without quality degradation @Kang2021; @OwusuAgyei2020. Faster evaluations contribute to more timely ESG disclosures, aiding stakeholder decision-making and regulatory compliance.

### Statistical Significance Testing

All observed gains in accuracy, consistency, and efficiency were statistically significant with p-values well below the 0.01 threshold (see last column of @tbl-2). Specifically, paired t-tests comparing LLM-assisted and human expert results produced p = 0.0002 for accuracy and Fleiss’ Kappa improvements, and similarly significant values for processing time reduction. These results robustly confirm the reliability of the quantitative enhancements achieved by the proposed LLM framework across key performance dimensions.

### Qualitative Insights and Case Examples

Complementing the quantitative metrics, qualitative inspection revealed that the LLM model effectively resolved ambiguities in bilingual disclosures challenging for human reviewers. For instance, interleaved Mandarin-English ESG statements often contain regulatory terminology and idiomatic expressions with subtle connotational shifts. The fine-tuned LLM consistently captured these nuances, enabling more accurate classification of disclosure completeness and topical relevance. Conversely, human evaluations occasionally exhibited inconsistent interpretations, especially when confronted with intricate governance disclosures written in English idiomatic phrases.

Moreover, LLM outputs facilitated transparent reasoning traces, supporting human experts as an assistive tool rather than a replacement. This interactive collaboration helped preserve expert involvement and mitigated concerns regarding automation-induced demotivation identified in related literature @Kang2021. Figure @fig-3 illustrates examples of error types reconciled by the LLM and remaining discrepancies affirming the need for continuous model improvement through iterative fine-tuning.

### Ablation Study: Effect of Taiwan-Specific Fine-Tuning

To investigate the contribution of regional and linguistic customization (hypothesis H4), we compared the Taiwan-specific fine-tuned LLM model against the base multilingual LLM without such targeted adaptation. The ablation results in @tbl-3 demonstrate that fine-tuning significantly improved accuracy from 85.13% to 89.76% (p = 0.001) and consistency from 0.710 to 0.782. Processing time also benefited, reducing modestly from 8.1 to 7.45 hours on average.

This fine-tuning translated into enhanced linguistic competence in interpreting Taiwan’s regulatory ESG mandates and corporate disclosure conventions in both Mandarin and English, affirming the necessity of contextual adaptation beyond generic multilingual pretraining @Bender2021; @GascoHernandez2022. The statistical significance of these improvements confirms the critical role of regionally tailored model refinement for domain-specific ESG analysis in multilingual settings.

### Summary

Collectively, these results demonstrate that the LLM-assisted ESG disclosure assessment framework tailored for Taiwan-listed companies significantly outperforms traditional human expert evaluations. The framework achieves superior accuracy and consistency in analyzing bilingual ESG disclosures while drastically reducing processing time. The Taiwan-specific fine-tuning further amplifies these gains, underscoring the value of specialized linguistic and regulatory adaptation.

These findings provide strong empirical validation for deploying LLM-based tools to augment and accelerate ESG disclosure assessments in complex Asian markets, addressing key gaps in existing literature on regional AI applications for sustainability governance @Kang2021; @Virmani2023; @GascoHernandez2022. They also suggest practical pathways for regulators and rating agencies to leverage AI effectively, improving ESG transparency and accountability in Taiwan-listed firms.