# Paper Structure

```markdown
# Paper Structure for "LLM-Assisted ESG Disclosure Assessment for Taiwan Listed Companies"

---

## 1. Section Outline

| Section          | Key Arguments / Subsections                                                                                         | Target Word Count | References to Cite                     |
|------------------|--------------------------------------------------------------------------------------------------------------------|-------------------|--------------------------------------|
| **Abstract**     | - Motivations: ESG disclosure challenges in Taiwan<br>- Aim: Employ LLMs to improve ESG assessment<br>- Methods overview<br>- Key findings: accuracy, consistency improvements<br>- Contributions and implications | 200-250           | Bender2021 (LLM context), brief mention of Taiwan ESG context |
| **Introduction** | - Importance of ESG disclosure for Taiwan-listed firms<br>- Challenges of current assessment methods (manual, rule-based)<br>- Potential of LLMs in ESG context<br>- Research gap and motivation<br>- Research question & hypothesis<br>- Overview of contributions and paper structure | 800-1000          | Bender2021; Wang2023 (context on sustainability importance); Tang2022 (environmental production context, optional) |
| **Related Work** | - ESG disclosure assessment methods: manual, rule-based, ML, shallow NLP<br>- Limitations of existing methods<br>- Advances in LLMs for NLP tasks, interpretability challenges (Bender et al.)<br>- ESG assessment in Asian/Taiwan context—scarcity of localized research<br>- Transparency, reproducibility challenges in ESG scoring | 1200-1400         | Bender2021; Saylam2022 (gov info transparency analogy); Yue2022 (social media & org behavior, for transparency analogy); Nejadali2021 (sustainability tech background) |
| **Methodology**  | - Dataset description: Taiwan-listed ESG disclosures<br>- LLM model selection and fine-tuning process (including linguistic & regulatory tailoring)<br>- Framework architecture and interpretability features<br>- ESG scoring algorithm design and benchmarking<br>- Experimental setup, baselines (manual and rule-based)<br>- Metrics for accuracy, consistency, interpretability evaluation | 1500-1800         | Bender2021 (LLM fine-tuning guidelines); Banerjee2022 (data mining approaches); BoubetaPuig2021 (model-driven approach analogy) |
| **Results**      | - Quantitative performance comparison: LLM vs. manual and rule-based<br>- Accuracy improvements: precision, recall, F1<br>- Consistency: inter-rater agreement metrics<br>- Interpretability demonstration: case-based explanations<br>- Statistical significance testing<br>- Robustness checks and error analysis | 1200-1500         | No external refs primarily; cite own methodology sections for setup |
| **Discussion**   | - Interpretation of results in context of Taiwan ESG reporting<br>- Technical implications for NLP and ESG domain<br>- Practical significance for investors, regulators, companies<br>- Limitations: data size, model generalizability, language challenges<br>- Future directions: cross-market adaptation, multi-lingual models, real-time ESG monitoring | 1000-1200         | Bender2021 (limitations of LLMs); HernándezTrasobares2020 (innovation via cooperative tech, analogy); Wang2021 (thermal tech evaluation analogy to robustness) |
| **Conclusion**   | - Summary of key findings and contributions<br>- Research question answered and hypotheses supported<br>- Implications for sustainable investment and policy<br>- Call for adoption and extension of LLM-assisted ESG assessment tools | 400-500           | None (implicit summary)               |

---

## 2. Figure Plan

| Figure ID | Type                   | Caption                                                                                   | Data Source                                                | Narrative Role                                        |
|-----------|------------------------|-------------------------------------------------------------------------------------------|------------------------------------------------------------|------------------------------------------------------|
| **Fig 1** | Framework Diagram      | "Architecture of the LLM-Assisted ESG Disclosure Assessment Framework for Taiwan Firms"   | Own design based on methodology; showing data flow, modules (data input, LLM fine-tuning, ESG scoring, interpretability) | Visually communicate the technical setup and workflow of the proposed framework to readers |
| **Fig 2** | Bar/line charts        | "Comparison of ESG Scoring Accuracy and Consistency: LLM vs. Manual and Rule-based Methods" | Experimental results from evaluation dataset (Taiwan ESG disclosures) | Demonstrate key empirical improvements in accuracy and scoring consistency of the LLM approach |
| **Fig 3** | Visualization: Case-level interpretability examples (e.g., attention heatmaps, scoring rationales) | "Interpretability Examples of LLM-Generated ESG Scores on Sample Disclosures" | Selected disclosure samples, LLM attention/explanation outputs | Showcase transparency and interpretability features to increase stakeholder trust |

---

## 3. Table Plan

| Table ID | Description                   | Columns                                                      | Rows                              | Data Source                          |
|----------|-------------------------------|--------------------------------------------------------------|----------------------------------|------------------------------------|
| **Tbl 1** | Dataset and Experimental Setup | Company Name / Industry / ESG Report Year / Disclosure Length / Number of Disclosures / Dataset Splits (Train/Test) | Sample of 10-15 Taiwan-listed companies representing different industries | Taiwan Stock Exchange (TWSE) ESG datasets |
| **Tbl 2** | Performance Comparison of ESG Scoring Methods | Method (Manual, Rule-based, LLM-Assisted)<br>Accuracy (Precision, Recall, F1)<br>Inter-rater Agreement (Cohen’s Kappa)<br>Processing Time | Results aggregated over full test set; possibly per ESG dimension (E/S/G) | Results from experimental runs |

---

## 4. Research Contract

### Research Questions (RQs)
- RQ1: Can LLMs improve the accuracy of ESG disclosure assessment for Taiwan-listed companies compared to existing manual and rule-based methods?
- RQ2: Does the use of LLMs reduce inter-rater variability and improve consistency in ESG scoring?
- RQ3: How can interpretability be effectively incorporated into LLM-assisted ESG scoring to enhance transparency and stakeholder trust?

### Hypotheses
- H1: LLM-assisted ESG assessment yields statistically significant improvements in accuracy metrics (precision, recall, F1) versus traditional approaches.
- H2: LLM-based approaches demonstrate higher inter-rater agreement, indicating improved consistency.
- H3: Integration of interpretability features in LLM outputs provides meaningful explanations enhancing trust from ESG stakeholders.

### Methods
- Dataset collection of ESG disclosures from Taiwan Stock Exchange-listed companies.
- Development of an LLM-based assessment framework: fine-tuning a state-of-the-art LLM with domain-specific Taiwan ESG data.
- Comparative experiments with manual coders and rule-based scoring systems.
- Quantitative evaluation using standard metrics for accuracy and consistency.
- Qualitative demonstration of interpretability via model explanation techniques.

### Expected Outcomes
- Empirically validated LLM framework improving ESG scoring accuracy and consistency specific to Taiwan's regulatory and linguistic context.
- Prototype interpretable ESG scoring tool enhancing transparency.
- Practical recommendations for adoption by investors and regulators in Taiwan.

### Limitations
- Dataset size constrained by availability and disclosure heterogeneity.
- Model generalizability beyond Taiwan’s market not guaranteed without further adaptation.
- Interpretability methods limited to currently available LLM explanation techniques, may not capture all scoring nuances.
- Potential issues with bias or language nuances not fully addressed in initial versions.

---

# Summary

This paper structure balances technical depth, empirical rigor, and practical relevance aligned with the aims and scope of *Business Strategy and the Environment*. It leverages the core citation Bender2021 to ground the LLM methodology, focuses on Taiwan-specific ESG challenges, and demonstrates measurable improvements with clear figures and tables to persuade a mixed academic-practitioner audience.

```
