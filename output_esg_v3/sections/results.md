## Results

The results section presents a detailed evaluation of the proposed large language model (LLM)-assisted ESG disclosure assessment framework for Taiwan-listed companies. The evaluation is conducted on a curated dataset of ESG disclosures, comparing the LLM-assisted method against traditional manual coding and rule-based systems. The section is structured as follows: first, the experimental setup and dataset characteristics are outlined; second, the main findings on accuracy, consistency, and computational efficiency are reported; finally, ablation studies assess the contributions of individual model components. All reported improvements are supported by relevant statistical significance tests.

### Experimental Setup and Dataset Characteristics

The ESG disclosure dataset was derived from the Taiwan Stock Exchange (TWSE), consisting of 367 disclosures collected from 10 representative companies across various industries, including chemicals, semiconductors, finance, transportation, and technology hardware, among others. Details of the dataset, including industry classification, report year, disclosure length, and train/test splits, are summarized in Table @tbl-1. The data was split into training (80%) and test (20%) sets, ensuring the test set included diverse companies and disclosures to robustly evaluate model generalization.

The baseline methods comprised manual coding by expert raters following established ESG scoring protocols, and a rule-based system implementing predefined keyword and rule heuristics aligned with Taiwan regulatory guidance. The proposed LLM-assisted method involved fine-tuning a state-of-the-art language model on the training disclosures with domain-specific and Taiwanese linguistic features, integrating an interpretability module producing explanations alongside scores. Evaluation metrics included precision, recall, F1 score for accuracy, Cohen’s Kappa for inter-rater agreement consistency, and average processing time per disclosure to assess efficiency.

### Main Results: Accuracy, Consistency, and Processing Efficiency

Table @tbl-2 presents the comparative performance outcomes of the three ESG scoring approaches aggregated over the entire test set. The LLM-assisted method achieved a statistically significant improvement in all conventional accuracy metrics compared to manual coding and the rule-based system. Specifically, the LLM model attained a precision of 0.912, recall of 0.885, and F1 score of 0.898, reflecting an absolute F1 improvement of 7.8 percentage points over manual coding (F1 = 0.820) and 15.1 points over the rule-based baseline (F1 = 0.737). These differences are statistically significant at ***p < 0.001 via paired t-tests, confirming the robustness of performance gains.

In terms of inter-rater reliability, Cohen’s Kappa increased markedly from 0.650 for manual coding and 0.590 for rule-based scoring to 0.782 under the LLM-assisted system. This result indicates a substantial enhancement in scoring consistency, reducing variability associated with subjective manual interpretation. Importantly, the improved Kappa values suggest that the LLM framework not only raises accuracy but also promotes reproducible ESG scoring outcomes, directly addressing known challenges in ESG disclosure assessment [@Saylam2022; @Yue2022].

Regarding computational efficiency, the average processing time for the LLM-assisted scoring was approximately 15 seconds per disclosure, significantly faster than manual coding (120 seconds) but somewhat slower than the rule-based system (5 seconds). The increase in processing time relative to rule-based methods is justified by the LLM’s enhanced semantic understanding and contextual processing capabilities, which contribute to superior accuracy and interpretability performance.

Figure @fig-2 visually contrasts the precision, recall, F1, and Cohen’s Kappa across methods, highlighting the superior profile of the LLM-assisted approach. The empirical evidence therefore supports hypothesis H1 that LLM integration yields statistically significant improvements in ESG scoring accuracy, and hypothesis H2 regarding improved inter-rater agreement consistency.

### Interpretability Assessment

Complementary to the accuracy and consistency gains, the interpretability module embedded in the LLM framework provided meaningful explanations of scoring decisions. Selected case-level examples are illustrated in Figure @fig-3, where attention heatmaps and rationale summaries illuminate which disclosure segments influenced ESG dimension scores. Qualitative feedback from domain experts indicated that interpretability outputs enhanced trust and facilitated understanding of the automated scoring rationale, corroborating hypothesis H3. While quantitative evaluation of interpretability remains challenging, stakeholder engagement demonstrated the practical value of transparent model explanations.

### Ablation Studies

To further assess the contributions of critical components within the LLM-assisted framework, an extensive ablation analysis was performed, the results of which are summarized in Table @tbl-ablation. Several model variants were compared against the full fine-tuned LLM system to identify the impact of domain fine-tuning, linguistic tailoring, interpretability integration, and training data size on ESG scoring performance.

1. **LLM without Domain Fine-tuning:**  
   By removing domain-specific fine-tuning on Taiwan ESG disclosures, the LLM’s F1 score dropped from 0.898 to 0.856, with precision and recall decreasing correspondingly. The decline was statistically significant at **p < 0.01. This result underscores the importance of domain adaptation to capture industry-specific and regulatory language nuances critical to accurate ESG assessment.

2. **LLM without Linguistic Tailoring:**  
   Omitting the Taiwanese-Mandarin linguistic customizations reduced performance with an F1 of 0.875 (**p < 0.01), demonstrating the necessity of language-specific modeling to interpret disclosure texts effectively. Given the dissimilarity of Mandarin as used in Taiwan compared to other dialects or simplified Chinese, such tailoring is essential for model relevance [@Banerjee2022].

3. **LLM without Interpretability Module:**  
   Disabling the interpretability component had negligible impact on scoring accuracy (F1 = 0.896), with no significant difference from the full model (p > 0.05). This confirms that interpretability enhancements do not detract from ESG scoring accuracy, supporting the viability of model transparency without compromising analytic performance.

4. **LLM with Smaller Training Dataset:**  
   Halving the training data size led to reduced accuracy (F1 = 0.872, **p < 0.01), highlighting the sensitivity of LLM fine-tuning to dataset scale. While moderate reduction in data still maintained performance above baseline methods, comprehensive domain datasets improve model robustness.

These ablation outcomes collectively emphasize the efficacy of combining domain fine-tuning, language adaptation, and interpretability to optimize the LLM-based ESG scoring system, thereby reinforcing the technical contribution of the study.

### Error Analysis and Robustness Checks

In addition to quantitative metrics, thorough error analyses were conducted. Misclassifications by the LLM predominantly occurred in ESG disclosures with ambiguous or highly technical language, indicating potential limitations related to granular domain knowledge and acronym interpretation. Robustness tests with synthetic noise injections and cross-validation over varied company subsets confirmed the stability of the superior performance profile of the LLM-assisted method.