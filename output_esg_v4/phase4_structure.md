# Paper Structure

# Paper Structure for  
**LLM-Assisted ESG Disclosure Assessment for Taiwan Listed Companies**  
*Target Journal: Business Strategy and the Environment*

---

## 1. Section Outline

| Section       | Key Arguments / Subsections                                                                                                                                                                                                                                                             | Target Word Count | References to Cite                              |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|-----------------------------------------------|
| **Abstract**  | - Problem statement: ESG disclosure assessment challenges for Taiwan-listed companies<br>- Proposed solution: LLM-assisted assessment combining Mandarin-English fine-tuned models<br>- Methods: Model development, benchmarking vs. manual and rule-based<br>- Results: Improved accuracy, consistency, efficiency<br>- Contributions and implications | 200–250           | (Mention key methods & contributions, e.g., Vardasbi2021 indirectly for bias correction) |
| **Introduction**  | - Context: Rising ESG importance and Taiwan market specifics<br>- Challenges in current ESG assessment: linguistic, methodological gaps<br>- Research question and hypothesis<br>- Overview of contributions (technical, empirical, practical)<br>- Paper roadmap                                                 | 1000              | Chen2023 (general sustainability), Vardasbi2021 (bias correction), literature on NLP gaps |
| **Related Work**  | 1. ESG disclosure assessment methods: manual, keyword-based, rule-based (with shortcomings)<br>2. NLP in ESG: dominant English focus, lacking in Mandarin/Asia<br>3. Large Language Models & fine-tuning for domain adaptation<br>4. Bias correction methods in automated evaluation (e.g., mixture-based correction)<br>5. Regional & linguistic challenges in ESG NLP | 1200              | Vardasbi2021, general NLP survey refs (implied), Chin2023, Millot2021 (context of sustainability) |
| **Methodology**  | 1. Dataset collection and preprocessing of ESG reports (Mandarin & English)<br>2. LLM development: selection (e.g., GPT variant), fine-tuning process for ESG tasks, bilingual capability<br>3. Benchmarking methods: manual coding process, rule-based system description<br>4. Evaluation metrics: accuracy, consistency, efficiency<br>5. Bias mitigation approaches applied (inspired by Vardasbi2021) | 1500              | Vardasbi2021, details of LLMs from recent AI literature, ESG reporting standards in Taiwan |
| **Results**  | 1. Model performance: accuracy, consistency, speed compared with manual and rule-based<br>2. Qualitative analysis of typical assessment examples<br>3. Impact of bilingual fine-tuning<br>4. Bias correction effects<br>5. Statistical significance and error analysis                                                            | 1200              | N/A (own results), refer to benchmarking standards, Silva202x (if available)                  |
| **Discussion**  | 1. Interpretation of findings relative to existing gaps<br>2. Practical implications for stakeholders (investors, regulators)<br>3. Limitations of the current study<br>4. Future work directions: multi-market extension, explainability, regulatory integration                                                                      | 1000              | Vardasbi2021, Chin2023 (decision-making), contextual references                               |
| **Conclusion**  | - Summary of main findings<br>- Confirmation of hypotheses<br>- Contributions restated<br>- Call for adoption of LLM-assisted ESG assessment in Taiwan<br>- Broader impacts on ESG transparency and sustainability                                                                                                               | 500               | None or minimal                                                                                    |

**Total Target Word Count:** ~6600 words

---

## 2. Figure Plan

| Fig No. | Type                        | Caption                                                                                              | Data Source                                | Narrative Role                                                   |
|---------|-----------------------------|----------------------------------------------------------------------------------------------------|--------------------------------------------|----------------------------------------------------------------|
| **Fig 1** | Framework / Architecture Diagram | *"The proposed LLM-assisted ESG disclosure assessment framework integrating bilingual model fine-tuning, bias correction, and multi-method benchmarking."* | Model design and system architecture      | Illustrate workflow of data preprocessing, LLM fine-tuning, assessment, and evaluation pipeline. Clarifies technical contribution. |
| **Fig 2** | Main Results Visualization (Bar/Box plots) | *"Comparison of Accuracy, Consistency (Inter-rater reliability), and Efficiency (processing time) across LLM-assisted, manual, and rule-based methods on Taiwan ESG dataset."* | Performance metrics from experiments       | Visualizes empirical superiority and trade-offs, supporting hypothesis on enhanced performance. |
| **Fig 3** | Additional Figure: Ablation / Bias Correction Impact | *"Impact of bias correction techniques on LLM model assessment performance and robustness."*        | Results with and without bias correction    | Quantifies contribution of bias mitigation, justifying methodological rigour and alignment with recent advances. |
| **Optional Fig 4** | Sample Text Interpretation (e.g., heatmap or attention visualization) | *"Illustration of LLM semantic understanding in ESG disclosure excerpts: Language and contextual nuances captured by model."* | Model interpretation outputs                | Demonstrates semantic depth and bilingual capability, supporting technical novelty. |

---

## 3. Table Plan

| Table No. | Purpose                             | Columns                                                        | Rows (Examples)                | Data Source                         |
|-----------|-----------------------------------|----------------------------------------------------------------|-------------------------------|-----------------------------------|
| **Table 1** | Dataset and Experimental Setup    | Company Name, Industry Sector, Report Year, Language, Report Type, Manual Assessment Details, Dataset Size (Docs & Tokens) | Summary of Taiwan-listed companies' ESG reports used for experiments | Collected ESG disclosures dataset from Taiwan stock market; manual coding annotations |
| **Table 2** | Main Results Comparison           | Method (Manual, Rule-based, LLM), Accuracy (%), Consistency (Cohen’s Kappa), Efficiency (Time per report), Bias-corrected Performance | Benchmark results for each assessment method | Experimental benchmarking results from testing phase |

---

## 4. Research Contract

| Aspect                  | Details                                                                                                                                                |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Research Questions**   | 1. Can LLMs effectively assess ESG disclosures of Taiwan-listed companies with improved accuracy and efficiency?<br>2. How do bilingual fine-tuned models compare with manual and rule-based methods?<br>3. What is the impact of bias correction on assessment quality? |
| **Hypotheses**          | LLM-assisted ESG assessment provides significantly higher accuracy, consistency, and efficiency than traditional manual or rule-based automated methods for Taiwan-listed company ESG disclosures. Bias correction methods enhance model robustness and trustworthiness. |
| **Methods**              | 1. Curate and preprocess bilingual ESG report data from Taiwan-listed firms.<br>2. Fine-tune large pre-trained LLMs on ESG tasks with bilingual capabilities.<br>3. Implement manual coding protocol and rule-based baseline.<br>4. Evaluate performance via quantitative metrics, bias correction techniques.<br>5. Statistical and qualitative analyses. |
| **Expected Outcomes**    | - Demonstrate that LLM models outperform manual and rule-based approaches on accuracy, consistency, and processing efficiency.<br>- Show that bilingual fine-tuning captures Taiwan-specific linguistic and regulatory context.<br>- Present evidence that bias correction further improves reliability.<br>- Deliver an open framework/toolkit ready for practical use in Taiwan ESG evaluation. |
| **Limitations**          | - Dataset limited to publicly available ESG disclosures of Taiwan-listed companies, may not generalize to other regions.<br>- Manual coding process subject to human bias.<br>- Computationally intensive fine-tuning requiring access to powerful LLM infrastructure.<br>- Potential challenges in interpretability of LLM-based scores.<br>- Regulatory and market dynamics may evolve, requiring continual model updates. |

---

# Summary

This structure ensures a focused, rigorous, and impactful paper that addresses the identified gaps in ESG disclosure assessment research by introducing cutting-edge LLM technology tailored to an under-researched linguistic and regulatory context, with comprehensive empirical validation and practical applicability for the Taiwan market.