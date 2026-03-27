# Paper Structure

# Paper Structure: LLM-Assisted ESG Disclosure Assessment for Taiwan Listed Companies

---

## 1. Section Outline

| Section          | Subsections / Key Arguments                                                                                  | Target Word Count | References to Cite                                   |
|------------------|--------------------------------------------------------------------------------------------------------------|-------------------|-----------------------------------------------------|
| **Abstract**     | - Research question and motivation<br>- Methodology overview (LLM-based framework, multilingual adaptation)<br>- Key empirical findings<br>- Contributions and implications | 200–250           | Bender2021, GarciaDaz2020, DueasOcampo2023            |
| **Introduction** | - Background: Importance of ESG disclosures globally and in Taiwan<br>- Challenges in Taiwan-specific ESG assessment (linguistic, regulatory)<br>- Motivation for LLM use in ESG assessment<br>- Research questions and hypotheses<br>- Summary of contributions and paper structure | 800–1000          | Bender2021, GarciaDaz2020, AllalChrif2021, DueasOcampo2023 |
| **Related Work** | - ESG disclosure frameworks and assessment methodologies globally<br>- ESG challenges specific to Asian and Taiwanese contexts<br>- Prior uses of AI/LLMs in financial and ESG document analysis<br>- Limitations of existing methods: language focus, manual reviews, scalability<br>- Overview of multilingual NLP challenges<br>- Gap analysis summarizing missing elements | 1200–1500         | Bender2021, GarciaDaz2020, AllalChrif2021, DueasOcampo2023, Belkahla2019 |
| **Methodology**  | - Description of dataset: Taiwan-listed company ESG disclosures (bilingual: Mandarin, English)<br>- Preprocessing steps (text normalization, language detection)<br>- Development of the LLM analytic framework:<br> &nbsp;&nbsp;• Model selection and fine-tuning strategies<br> &nbsp;&nbsp;• Handling bilingual disclosure texts with linguistic nuances<br> &nbsp;&nbsp;• ESG-specific lexicon and ontology construction<br>- Automated qualitative data extraction and scoring approach<br>- Validation strategies (benchmarking vs manual/rule-based assessments)<br>- Implementation details and system architecture<br>- Ethical considerations and limitations of LLM use | 1500–1800         | Bender2021, GarciaDaz2020, AllalChrif2021, Kovai2020         |
| **Results**      | - Quantitative performance metrics (accuracy, precision, recall) against baseline methods<br>- Sectoral ESG disclosure quality analysis<br>- Temporal trends in ESG reporting quality<br>- Case studies illustrating nuanced insights from LLM assessments<br>- Qualitative analysis: key linguistic/semantic patterns identified<br>- Robustness checks and error analysis | 1200–1500         | GarciaDaz2020, DueasOcampo2023                          |
| **Discussion**   | - Interpretation of results and comparison with prior findings<br>- Implications for Taiwan’s ESG ecosystem and stakeholder decision-making<br>- Strengths and innovations of the LLM framework<br>- Limitations, challenges, and biases in LLM-based ESG assessments<br>- Potential for scalability and adaptation to other markets<br>- Future research directions (e.g., integration with regulatory systems, cross-market comparisons) | 1000–1200         | Bender2021, AllalChrif2021, DueasOcampo2023               |
| **Conclusion**   | - Summary of key findings and contributions<br>- Reiteration of the value added by LLM-assisted ESG assessment in Taiwan<br>- Practical impact for investors, regulators, companies<br>- Final remarks on advancing sustainable business strategy through AI | 400–500           | DueasOcampo2023, AllalChrif2021                           |

---

## 2. Figure Plan

| Figure ID | Type                        | Caption                                                               | Data Source                         | Narrative Role                                                 |
|-----------|-----------------------------|-----------------------------------------------------------------------|-----------------------------------|----------------------------------------------------------------|
| **Fig 1** | Framework/Architecture Diagram | "LLM-Based Analytic Framework for Multilingual ESG Disclosure Assessment in Taiwan-Listed Companies" | Methodology data and system description | Visualizes the overall system pipeline including data input, preprocessing, model fine-tuning, ESG scoring modules, and output generation; critical for readers to understand the technical architecture and multilingual NLP integration. |
| **Fig 2** | Main Results Visualization (Bar/Line Charts) | "Performance Comparison of LLM-Based ESG Assessment vs Manual and Rule-Based Methods" | Experimental results dataset      | Demonstrates quantitative effectiveness of the proposed LLM framework, including accuracy gains, sectoral ESG score distributions, and temporal improvements, supporting empirical claims. |
| **Fig 3** | Additional Visualization (Heatmaps / Word Clouds) | "Semantic Patterns and Key ESG Themes Extracted from Bilingual Corporate Disclosures" | Processed ESG disclosure texts    | Highlights qualitative insights into common ESG topics detected, bilingual language impact, and sectoral linguistic differences, emphasizing the framework’s interpretability and richness of extracted knowledge. |

---

## 3. Table Plan

| Table ID | Purpose                        | Columns                                                          | Rows                                      | Data Source               |
|----------|--------------------------------|------------------------------------------------------------------|-------------------------------------------|---------------------------|
| **Tbl 1** | Dataset & Experimental Setup   | Company name / Sector / Report Year / Language(s) / Disclosure Length / Manual ESG Score (baseline) / LLM Dataset Split | Sample of ~30–50 Taiwan-listed companies across key industries | Collected Taiwan ESG reports and manual assessment scores |
| **Tbl 2** | Main Results Comparison        | Method (Manual / Rule-Based / LLM) / Accuracy / Precision / Recall / F1-Score / Processing Time | Overall aggregate & by sector (e.g., Technology, Finance, Manufacturing) | Experimental evaluation results                           |

---

## 4. Research Contract

| Aspect           | Description                                                                                              |
|------------------|----------------------------------------------------------------------------------------------------------|
| **Research Questions (RQs)** | 1) How can LLMs be adapted to effectively analyze bilingual Mandarin-English ESG disclosures from Taiwan-listed firms?<br>2) To what extent does LLM integration improve the accuracy and depth of ESG assessments relative to traditional approaches?<br>3) What patterns and insights emerge from large-scale LLM-based ESG analysis in the Taiwanese market? |
| **Hypotheses**   | H1: LLM-assisted assessments yield significantly higher accuracy and comprehensiveness than manual or rule-based methods.<br>H2: Multilingual fine-tuning improves ESG disclosure understanding, capturing nuanced bilingual expressions.<br>H3: Automated LLM analysis can reveal temporal and sectoral ESG trends previously obscured by manual processes. |
| **Methods**     | - Collection of bilingual ESG disclosures from Taiwan-listed companies<br>- Preprocessing and annotation of corpora for supervised fine-tuning<br>- Development of a tailored LLM analytic framework with ontology-driven ESG lexicons<br>- Empirical evaluation against manual and rule-based benchmarks<br>- Qualitative thematic analysis of extraction outputs |
| **Expected Outcomes** | - A validated LLM-based ESG assessment framework that improves accuracy, efficiency, and interpretability<br>- New empirical insights on ESG disclosure patterns specific to Taiwan<br>- A scalable tool prototype for stakeholder ESG monitoring<br>- Contribution to bridging AI NLP research with Asian ESG financial contexts |
| **Limitations** | - Potential biases from training data and model limitations in understanding Taiwan-specific regulatory language<br>- Challenges in fully capturing implicit ESG information due to data availability and model scope<br>- Generalizability beyond Taiwan may require further adaptation<br>- Environmental and computational cost concerns inherent to large-scale LLM training (Bender2021) |

---

# **Summary**

This paper will investigate how LLM technology can transform ESG disclosure assessments for Taiwan-listed companies by overcoming linguistic and contextual challenges. Methodologically, it pioneers a multilingual LLM framework with tailored ESG ontologies to automate qualitative data extraction, benchmarked against traditional methods. Empirically, it will reveal novel sector and temporal ESG reporting insights, with practical implications for investors and regulators. The structure and visuals are designed to clearly communicate the technical framework, quantitative benefits, and qualitative insights. The research fits well within *Business Strategy and the Environment*’s scope, advancing AI-driven sustainability assessment research in an underexplored Asian context.

---

**Key references for citation in the paper:**  
- Bender2021 (LLM risks and multilingual issues)  
- GarciaDaz2020 (Ontology-driven sentiment analysis for multilingual domains)  
- AllalChrif2021 (AI in business function improvements)  
- DueasOcampo2023 (ESG research expansion beyond Western markets)  
- Belkahla2019 (Semantic text analysis for government/NGO contexts)  
- Kovai2020 (Machine learning with missing data, relevant for data preprocessing)