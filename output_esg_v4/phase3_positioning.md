# Research Positioning

# Research Positioning Document

## Literature Landscape

Research on ESG (Environmental, Social, and Governance) disclosure assessment has gained significant momentum globally due to the rising demand for corporate transparency and sustainable investment decisions. Traditional manual assessment methods, relying on expert coders, often suffer from subjectivity, inconsistency, and resource intensiveness. To scale ESG analysis, the literature has increasingly explored automated approaches, primarily leveraging Natural Language Processing (NLP) techniques. However, most automated ESG studies focus on English-language disclosures from Western companies, using keyword-based, dictionary, or rule-based methods that capture surface-level features but lack deep semantic understanding, leading to challenges in precision and cross-domain adaptability (e.g., see general NLP and operational research overviews).

Several recent advances in NLP, especially the advent of large language models (LLMs) such as GPT and its variants, suggest promising improvements in semantic comprehension, contextual nuance, and multilingual capabilities. Yet, research explicitly integrating advanced LLMs for ESG disclosure analysis, particularly within Asian emerging markets, remains sparse. Most existing ESG automated evaluations do not exploit LLMs' fine-tuned potential for specialized domains or languages beyond English (e.g., there is no documented work targeting Mandarin disclosures from Taiwan-listed firms). This gap is crucial because ESG disclosures vary notably across regions due to linguistic, regulatory, and cultural differences, requiring tailored AI model development and calibration to ensure evaluative accuracy and relevance.

The literature also points out methodological shortcomings in correction for bias and trustworthiness in automated assessments. Techniques such as inverse propensity scoring and mixture-based corrections have advanced information retrieval and ranking tasks by mitigating bias in user interaction data [e.g., Vardasbi2021]. While these methods show promise in related AI applications, their direct application to ESG textual analysis and labeling remains underexplored. Further, performance benchmarking of ESG assessment methods tends to overlook cross-lingual and domain-specific empirical validations, especially within Taiwan’s unique market context. Overall, the coupling of robust LLM-based NLP models with rigorous empirical validation and practical deployment frameworks is still an open and compelling frontier.

Therefore, the current state of knowledge reveals three main dimensions: (1) language and regional adaptation of ESG analysis tools is underdeveloped outside the Anglophone context; (2) existing automated methods mostly rely on heuristics rather than deep language understanding, limiting accuracy and consistency; and (3) the application and calibration of state-of-the-art LLMs in ESG assessment workflows, including comparative evaluations against manual and rule-based approaches, remain largely uncharted. The confluence of rich multilingual LLM capabilities and ESG assessment needs, especially for Taiwan-listed companies, offers a timely and impactful research avenue.

---

## Gap Matrix

| Gap                                    | Description                                                                                                      | Existing Work                                                                                              | Our Approach                                                                                                                |
|----------------------------------------|------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Language & Regional Focus               | ESG NLP research primarily on English; limited on Mandarin ESG disclosures from Taiwan-listed companies           | Most ESG NLP systems focus on English Western markets; no tailored models for Taiwan or Mandarin ESG reports| Develop and fine-tune LLMs for Mandarin and English ESG disclosures from Taiwan firms, addressing linguistic/regulatory nuances |
| Methodological Rigor                    | Legacy automated ESG assessments rely on keyword/rule-based systems; limited semantic understanding and bias correction | Keyword-based and rule-based ESG systems prevalent; bias correction methods in ranking but not ESG text [Vardasbi2021] | Employ advanced LLM-based NLP methods with semantic depth; integrate robust bias mitigation strategies for reliable assessment|
| Integration of LLM in ESG Disclosure   | Sparse exploration of GPT-style LLMs in ESG assessment, especially in Asian emerging markets                      | Limited studies on advanced LLM fine-tuning for ESG, and none targeting Taiwan ESG reports                   | Calibrate and evaluate GPT-based LLMs specifically for ESG tasks on Taiwan datasets; benchmark against manual & automated methods |
| Empirical Benchmarking & Practical Toolkit | ESG model evaluations lack comprehensive benchmarking and do not produce actionable toolkits for local practitioners | Few empirical studies with cross-method comparisons; practical ESG assessment tools for Taiwan absent      | Provide systematic benchmark comparisons and develop an actionable LLM-powered ESG assessment toolkit for stakeholders in Taiwan |

---

## Differentiation Statement

Unlike previous work that predominantly applies keyword-based or rule-based automated methods focused on English-language ESG disclosures from Western companies, our study advances the field by developing and fine-tuning large language models specifically tailored for bilingual (Mandarin-English) ESG disclosure assessment in Taiwan-listed companies. We combine deep semantic understanding with regional linguistic and regulatory nuances, and rigorously benchmark LLM-assisted assessments against traditional manual and automated approaches using a comprehensive local dataset.

---

## Contribution Echo

- **Technical Contribution:** The development and fine-tuning of LLM-based NLP models for Mandarin and English reflect a recognized research need for regionally-adapted AI methods in specialized domains, supported indirectly by advances in domain-adaptive NLP and transfer learning literature (e.g., demonstrated improvement from model customization in linguistic and contextual domains, implied in broader NLP and AI research though direct ESG LLM work is emergent).

- **Empirical Contribution:** The rigorous evaluation and benchmarking against manual and automatic methods aligns with calls in the literature for empirical validations and method comparisons, similar in spirit to benchmarking studies in machine learning and operational research [e.g., Vardasbi2021 for bias correction methods]. It addresses a key literature gap around evidence-based assessment in Asian financial markets.

- **Practical Contribution:** The creation of an actionable ESG assessment framework and toolkit for Taiwanese investors, regulators, and managers resonates with the sustainability management literature advocating for bridging AI research with practical implementation to foster transparency and accountability [e.g., sustainability studies emphasizing decision-making support tools].

While direct references to LLM applications on Taiwan ESG disclosure are lacking, the theoretical backing and methodological frameworks in adjacent fields strongly support the novelty and relevance of these contributions.

---

*Note: None of the verified references provided directly study ESG or LLM in ESG, but they illustrate the analytical rigor and multidisciplinary approach (bias correction [Vardasbi2021], benchmarking, practical toolkits, regional specificity) that underpin the motivation and validation strategies of our research.*