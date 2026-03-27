# Paper Structure

# Paper Structure for  
**"LLM-Assisted ESG Disclosure Assessment for Taiwan Listed Companies"**  
Target Journal: *Business Strategy and the Environment*

---

## 1. Section Outline

| Section           | Key Arguments / Subsections                                                                                                                                                                                                                                                                                          | Target Word Count | Key References to Cite                 |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|--------------------------------------|
| **Abstract**      | - Motivation: Need for improved ESG disclosure assessment accuracy and efficiency in Taiwan context<br>- Objective: Propose LLM-assisted framework tailored for bilingual ESG disclosures<br>- Methods: Model fine-tuning, empirical evaluation vs. expert human assessments<br>- Results: Improved accuracy, consistency, and reduced processing time<br>- Contributions and implications | 250–300           | Bender2021, GascoHernandez2022, Kang2021  |
| **Introduction**  | 1. Background on ESG disclosure importance globally and in Taiwan<br>2. Challenges: manual assessment bottlenecks, multilingual disclosures, regional regulatory uniqueness<br>3. Emerging role of LLMs in text analysis and potential for ESG assessment<br>4. Research gap and positioning<br>5. Research questions and hypotheses<br>6. Structure overview              | 900–1100          | GascoHernandez2022, Bender2021, Kang2021  |
| **Related Work**  | 1. Traditional ESG disclosure assessment methods and limitations<br>2. AI and NLP applications in ESG and sustainability<br>3. Large language models: capabilities and risks, especially multilingual and regional adaptation<br>4. Empirical studies comparing AI/LLM with human evaluators<br>5. Issues in human-AI collaboration in evaluation tasks<br>6. Taiwan-specific ESG assessment literature (gaps)               | 1200–1400         | Bender2021, Kang2021, GascoHernandez2022, Virmani2023  |
| **Methodology**   | 1. Dataset collection: ESG disclosures from Taiwan-listed companies in Mandarin and English (sampling, period, sources)<br>2. Description of the LLM framework:<br>&emsp;- Base model selection and multilingual capability<br>&emsp;- Fine-tuning process with Taiwan-specific ESG data<br>3. Expert human evaluation setup (criteria, raters, process)<br>4. Evaluation metrics: accuracy, consistency (inter-rater reliability), processing time<br>5. Experimental design and statistical analysis methods | 1500–1800         | Bender2021, Kang2021, GascoHernandez2022  |
| **Results**       | 1. Dataset characteristics summary (language distribution, ESG topics)<br>2. Quantitative comparison of LLM-assisted vs. human evaluation:<br>&emsp;- Accuracy improvements<br>&emsp;- Consistency gains<br>&emsp;- Efficiency (processing time reduction)<br>3. Statistical significance tests<br>4. Qualitative insights or case examples showing LLM outputs vs. human judgments                                | 1200–1400         | Bender2021, GascoHernandez2022, Kang2021  |
| **Discussion**    | 1. Interpretation of results in light of research objectives and hypotheses<br>2. Advantages of LLM-based ESG assessment, including bilingual and regional adaptation benefits<br>3. Practical implications for Taiwan regulators, investors, rating agencies<br>4. Risks and limitations: model biases, human-AI interaction challenges, domain adaptation limits<br>5. Future research directions (e.g., deployment studies, broader markets)         | 1100–1300         | Bender2021, Kang2021, Virmani2023, GascoHernandez2022  |
| **Conclusion**    | 1. Summary of contributions: technical, empirical, practical<br>2. Confirmation of hypotheses regarding improved accuracy, consistency, and efficiency<br>3. Emphasis on importance of regional customization and bilingual approaches<br>4. Call for adoption of AI-assisted ESG assessment tools in Taiwan and similar markets<br>5. Final remarks and potential societal impact                | 500–700           | GascoHernandez2022, Bender2021  |

---

## 2. Figure Plan

| Figure ID | Type                         | Caption                                                                                                  | Data Source                                 | Narrative Role                                                    |
|-----------|------------------------------|----------------------------------------------------------------------------------------------------------|---------------------------------------------|------------------------------------------------------------------|
| **Fig 1** | Framework / Architecture Diagram | Architecture of LLM-assisted ESG disclosure assessment framework: multilingual input, model fine-tuning, evaluation pipeline | Constructed schematic based on methodology  | Visualizes the proposed technical solution and process flow      |
| **Fig 2** | Main Results Visualization (Bar chart / Box plot) | Comparison of accuracy, inter-rater reliability (consistency), and processing time between LLM-assisted and human expert ESG assessments on Taiwan-listed companies | Empirical evaluation results from experiments | Demonstrates quantitative performance gains of LLM assistance    |
| **Fig 3** | Additional Analysis (Ablation / Error analysis) | Error types and examples in ESG assessment: differences between LLM and human evaluations; bilingual text challenges highlighted | Evaluation data highlighting discrepancies  | Explores strengths and limitations of LLM outputs qualitatively  |

---

## 3. Table Plan

| Table ID | Purpose                          | Columns                                                                                           | Rows                                        | Data Source                    |
|----------|---------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------|--------------------------------|
| **Tbl 1** | Dataset and Experimental Setup   | Company Name, Sector, Disclosure Language (Mandarin/English/Bilingual), Number of Documents, Regulatory Category, Expert Raters Count | Sample of 30–50 Taiwan-listed companies representing diverse sectors and languages | Dataset collected for study     |
| **Tbl 2** | Main Results Comparison          | Method (LLM-assisted vs. Human), Accuracy (%), Inter-rater Reliability (Fleiss’ Kappa), Avg. Processing Time (hours), Statistical Significance (p-value) | Results aggregated across companies and ESG criteria | Evaluation metrics from experiments |

---

## 4. Research Contract

### Research Questions (RQs)
- **RQ1:** Can large language models improve the accuracy of ESG disclosure assessments for Taiwan-listed companies compared to traditional manual methods?
- **RQ2:** Do LLM-assisted assessments provide greater consistency (inter-rater reliability) across evaluations?
- **RQ3:** Can LLM assistance reduce the processing time needed for ESG disclosure evaluation without compromising quality?
- **RQ4:** How can LLM frameworks be tailored to accommodate Taiwan’s bilingual ESG disclosure and regulatory peculiarities?

### Hypotheses
- **H1:** LLM-assisted ESG disclosure assessments yield significantly higher accuracy than manual expert evaluations.
- **H2:** LLM-assisted evaluations show significantly better consistency (inter-rater reliability) than human assessments.
- **H3:** Incorporating LLM assistance reduces the total processing time for ESG disclosure assessments compared to manual methods.
- **H4:** Regionally and linguistically customized fine-tuning of LLMs improves performance over generic multilingual models.

### Methods
- Construct dataset of ESG disclosures from Taiwan-listed firms (Mandarin and English)
- Select and fine-tune a multilingual LLM incorporating Taiwan-specific ESG contexts
- Prepare expert human evaluators to perform ESG ratings on the same dataset
- Compare LLM-assisted outputs against human ratings on multiple metrics: accuracy (vs. ground truth or consensus), consistency (inter-rater reliability), and efficiency (processing time)
- Quantitative statistical analyses and qualitative error inspection

### Expected Outcomes
- Empirical evidence of superior accuracy, higher consistency, and faster processing with LLM assistance
- Validation that regional adaptation (Taiwan-specific fine-tuning) is critical for bilingual ESG assessment tasks
- Insights into deploying LLM tools effectively as supportive rather than replacement technologies in ESG evaluation workflows

### Limitations
- Potential bias or errors introduced by training data limitations and LLM hallucination risks
- Domain adaptation challenges for highly specialized ESG regulatory language
- Limited sample size may constrain generalizability
- Human-AI interaction effects (e.g., evaluator acceptance) not fully explored in this study

---

*This detailed paper structure is designed to lead a rigorous, novel investigation of LLM-assisted ESG assessments tailored for Taiwan-listed companies, addressing important literature gaps and offering practical tools for sustainability governance improvements.*