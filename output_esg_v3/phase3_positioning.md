# Research Positioning

# Literature Landscape

Environmental, Social, and Governance (ESG) disclosure assessment has gained heightened attention due to increasing regulatory and investor demands around corporate sustainability transparency. Traditional approaches to ESG scoring frequently rely on manual coding or rule-based text analytics, which often suffer from low consistency, limited scalability, and inability to fully capture nuanced disclosure content. While conventional machine learning and shallow NLP methods have been explored for automated ESG analysis, their capacity to understand linguistic complexity and context remains limited. This creates opportunities for leveraging advanced natural language processing (NLP) tools, such as large language models (LLMs), which have transformed NLP tasks with deep contextual understanding and transfer learning capabilities (Bender et al., 2021). However, the application of LLMs specifically for ESG disclosure assessment is still nascent, especially in non-English contexts and emerging markets.

Research in ESG assessment has largely focused on Western markets with well-established regulatory environments and disclosure standards. Many frameworks and datasets stem from European and North American companies, limiting the transferability of findings to Asian markets like Taiwan, which have distinct regulatory regimes, linguistic characteristics, and disclosure practices. The lack of context-specific adaptation constrains the relevance and accuracy of ESG scoring applied to Taiwan-listed companies. There is a critical need for methodologies that account for local language (Mandarin, Traditional Chinese script), regional ESG priorities, and regulatory peculiarities. Existing studies either overlook this dimension or apply generic approaches that underperform in such settings, underscoring a significant gap in locale-tailored ESG assessment research.

Moreover, transparency, reproducibility, and interpretability remain persistent challenges in automated ESG scoring. Stakeholders — investors, regulators, and firms — require trustworthy and explainable ESG assessments to foster confidence and adoption. Yet, many automated systems operate as black boxes, providing scores without clear rationale or insight into scoring drivers. Research addressing these issues is scarce. Additionally, inconsistency and inter-rater variability in manual ESG coding underscore the value of consistent automated approaches, but systematic empirical evaluations comparing traditional and LLM-assisted ESG assessments remain limited. This research gap calls for rigorous experiments to quantify improvements in accuracy, consistency, and transparency offered by LLM-based frameworks.

In summary, the literature reveals three intertwined gaps: (1) limited exploration of LLMs for ESG disclosure assessment, particularly in specific emerging markets; (2) deficiencies in tailoring ESG assessment tools to Taiwan’s unique regulatory and linguistic context; and (3) lack of solutions emphasizing assessment consistency, interpretability, and stakeholder trust. Addressing these gaps through a technically robust, empirically validated, and practically oriented LLM-assisted assessment framework for Taiwan-listed companies would represent a substantive advance.

# Gap Matrix

| Gap                                | Description                                                            | Existing Work                                    | Our Approach                                                        |
|-----------------------------------|------------------------------------------------------------------------|-------------------------------------------------|-------------------------------------------------------------------|
| Limited Application of LLMs in ESG Assessment | Most ESG scoring relies on manual or shallow methods with minimal use of deep LLM NLP techniques | NLP advances and concerns with large models discussed by Bender et al. (2021) but limited ESG-specific use | Develop and fine-tune LLM models specifically for ESG disclosure text of Taiwan-listed companies |
| Context-Specific ESG Disclosure Analysis | ESG frameworks predominantly Western-centric; lack adaptation to Taiwan’s language and regulations | ESG scoring studies largely focus on Western firms; no localized Taiwan ESG LLM applications identified | Create Taiwan-contextual models and integrate local regulatory and linguistic features into ESG assessment |
| Assessment Consistency and Transparency Challenges | Automated ESG scoring often lacks transparency and reproducibility; manual assessments show high variability | Recognition of interpretability challenges in AI (Bender et al., 2021), few ESG-specific interpretability studies | Enhance interpretability of LLM outputs and demonstrate reduced inter-rater variability empirically |
| Empirical Evaluation on Taiwan ESG Data | Scarcity of rigorous empirical assessments comparing LLM vs. traditional ESG scoring methods on Taiwanese firm data | Existing ESG empirical studies emphasize Western markets; Asian market datasets limited or absent | Conduct comprehensive evaluation on Taiwan stock exchange ESG disclosures demonstrating improved performance |

# Differentiation Statement

Unlike previous work that predominantly applies manual or rule-based ESG scoring methods developed for Western contexts, our study advances ESG disclosure assessment for Taiwan-listed companies by developing a fine-tuned LLM framework tailored to the local linguistic and regulatory environment, empirically validated to improve accuracy, consistency, and interpretability of ESG scoring.

# Contribution Echo

1. **Technical Contribution:** The use of LLMs for ESG disclosure assessment aligns with the emerging but underexplored intersection of advanced NLP models and sustainability reporting, supported by critiques and developments in LLM methodology (Bender et al., 2021). Our domain-specific fine-tuning and interpretability enhancements respond directly to identified concerns about transparency and contextual adaptation.

2. **Empirical Contribution:** The comprehensive evaluation on Taiwan-listed company disclosures fills a clear empirical gap noted in literature, where localized datasets and rigorous comparisons of manual versus automated ESG scoring remain scarce, thereby reinforcing the study’s empirical grounding and practical relevance.

3. **Practical Contribution:** The creation of a scalable assessment tool tailored to Taiwanese stakeholders addresses the documented demand for actionable, trustworthy ESG information that facilitates sustainable investment and regulatory oversight, resonating with calls for transparent, reproducible ESG evaluation mechanisms.

---

**References**

- Bender2021: Bender et al., "On the Dangers of Stochastic Parrots," *FAccT 2021*.  
(Discusses advancements and challenges in large language models pertinent to our LLM fine-tuning strategy.)