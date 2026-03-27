## Methodology

This section delineates the methodological approach employed to develop, implement, and validate the proposed LLM-assisted ESG disclosure assessment framework tailored for Taiwan-listed companies. Emphasis has been placed on addressing the distinct linguistic, regulatory, and cultural characteristics of the Taiwanese ESG disclosure environment, particularly the bilingual nature of corporate reports involving Mandarin and English. The overall system architecture is illustrated in @fig-1, which delineates the data ingestion, preprocessing, model fine-tuning, ESG-specific analytical components, and output generation workflows integral to the framework.

### Dataset Collection and Characteristics

A corpus of ESG disclosure reports was collected from publicly available filings of Taiwan-listed companies over the period 2018–2022. The dataset comprises approximately 30 to 50 firms representing key industrial sectors including technology, finance, manufacturing, energy, and retail. Each ESG report was manually annotated with domain expert-assigned ESG scores to serve as baseline labels for supervised learning and validation purposes. Annotation followed standardized ESG criteria aligned with both international frameworks and specific Taiwanese regulatory guidelines to ensure contextual relevance.

The dataset exhibits bilingual textual content – some disclosures are predominantly in Mandarin, others in English, with several containing mixed or parallel bilingual sections. Table @tbl-1 summarizes descriptive statistics including company identifiers, sector classification, report year, language composition, disclosure document length, and manual ESG scores, alongside dataset splits for training, validation, and testing subsets.

### Text Preprocessing and Language Detection

To facilitate effective LLM processing, rigorous preprocessing pipelines were established to normalize and prepare the raw disclosure texts. First, language identification algorithms based on character n-gram models and Unicode script detection were applied to segment and classify bilingual portions within each report. A language tag $l_i \in \{Mandarin, English\}$ was assigned to each text segment $T_i$.

Subsequently, normalization techniques including unicode normalization, removal of extraneous symbols, and standardization of date and numeric expressions were applied to reduce noise and improve tokenization quality. Mandarin text was processed with word segmentation tools optimized for Traditional Chinese, while English text underwent standard tokenization and lemmatization. This bilingual preprocessing ensured the integrity of semantic patterns across the languages and optimized model input consistency [@Kovai2020].

The overall preprocessing transform can be expressed as:
$$
\tilde{T_i} = \operatorname{Normalize}(\operatorname{Segment}(T_i, l_i)),
$$
where $\tilde{T_i}$ is the normalized and language-tagged segment ready for LLM input.

### Development of the LLM Analytic Framework

#### Model Selection and Fine-Tuning

The foundation of the analytic framework was a multilingual pretrained Large Language Model, selected for its capability to handle both Mandarin and English text natively. A variant of the Transformer architecture with cross-lingual embedding layers was employed, chosen due to its proven effectiveness in bilingual natural language understanding tasks [@Bender2021; @GarcaDaz2020].  

Fine-tuning was conducted on the collected bilingual ESG corpus to adapt the model’s contextual understanding to ESG-specific terminology, syntax, and discourse structures characteristic of Taiwanese corporate reports. The fine-tuning objective minimized a combined cross-entropy loss for sequence classification tasks aligned with ESG scoring, and masked language modeling losses to preserve linguistic comprehension:
$$
\mathcal{L} = \alpha \mathcal{L}_{classification} + (1-\alpha) \mathcal{L}_{MLM}, \quad \alpha \in [0, 1].
$$
Here, $\alpha$ was empirically optimized via validation performance.

#### Handling Bilingual Disclosure Texts

To effectively integrate the bilingual nature of disclosures, the framework processed texts at segment level $T_i$ identified by language tags, deploying a language-aware encoding mechanism. This facilitated contextual embeddings that respected cross-lingual semantic equivalences and linguistic nuances. Cross-attention layers jointly encoded Mandarin and English segments, enabling feature sharing and richer semantic representation. This bilingual fine-tuning approach, substantiated by ablation experiments (see Section 5), enhanced model accuracy by capturing idiomatic expressions and regulatory phrases unique to Taiwan’s ESG contexts [@Bender2021; @Lai2019].

#### ESG-Specific Lexicon and Ontology Construction

An ESG ontology was constructed to provide domain-specific guidance and semantic constraints during model training and inference. The ontology incorporated structured hierarchies of ESG themes, key terms, and their contextual relationships derived from established ESG frameworks and localized Taiwanese regulatory disclosures. Terms were classified into environmental, social, and governance categories, with multilingual synonyms and related concepts indexed.

Terms within an input segment $\tilde{T_i}$ were matched to ontology entries using fuzzy string matching and semantic similarity measures based on pretrained embeddings:
$$
S_{match}(t_j, o_k) = \cos(\mathbf{v}_{t_j}, \mathbf{v}_{o_k}),
$$
where $t_j$ is a term in the text segment, $o_k$ is an ontology entry, and $\mathbf{v}$ denotes vector embeddings.

Ontology integration was operationalized via an attention bias module that elevated weights for recognized ESG terms, guiding the LLM’s focus to salient content during sequence encoding [@GarcaDaz2020]. This increased the precision of ESG concept detection and improved interpretability.

### Automated Qualitative Data Extraction and Scoring

The framework’s core analytical module employed the fine-tuned LLM to automatically extract qualitative ESG disclosures and generate ESG scores. Input texts were first segmented into coherent ESG-relevant passages using sliding window tokenization with overlap to maintain context continuity.

The scoring utilized a regression head predicting an ESG disclosure quality score $y_i \in [0,1]$ for each document segment, aggregating to a final company-level score $Y_c$ via weighted averaging:
$$
Y_c = \frac{\sum_{i=1}^N w_i y_i}{\sum_{i=1}^N w_i},
$$
where weights $w_i$ corresponded to passage confidence scores derived from ontology term density and model attention scores.

Qualitative extraction outputs included thematic categorizations, sentiment polarity, and disclosure depth metrics, all inferred through classification and sequence labeling submodels embedded within the LLM architecture. This enabled comprehensive assessment beyond mere keyword presence, capturing semantic subtleties and contextual nuances essential to ESG evaluation [@AllalChrif2021].

### Validation Strategies

Validation of the LLM framework was conducted through multi-faceted benchmarking against manual expert assessments and automated rule-based methods. Performance metrics included accuracy, precision, recall, and F1-score computed over the test set of annotated ESG reports.

Quantitative comparisons utilized paired hypothesis testing to ascertain statistical significance of performance improvements. Significance was assessed at the $p<0.05$ threshold.

An ablation study investigated the contribution of critical framework components such as multilingual fine-tuning, ontology integration, and preprocessing steps by systematically disabling each and measuring performance impact.

Additionally, qualitative validation involved detailed error analyses and case studies highlighting the model’s ability to identify sector-specific ESG disclosure patterns and temporal changes missed by previous methods.

### Implementation Details and System Architecture

The complete system pipeline, as depicted in @fig-1, was implemented using the PyTorch deep learning framework allowing modular experimentation and scalability. Data preprocessing modules were built using standard NLP libraries tailored for Mandarin and English tokenization.

Training utilized GPU acceleration, with model parameters optimized through AdamW optimizer, employing learning rate scheduling and early stopping based on validation loss improvements. Model checkpoints and fine-tuning hyperparameters were logged systematically to ensure reproducibility.

The inference engine supported batch processing of new ESG disclosures for real-time assessment, outputting interactive visual summaries and detailed ESG score reports accessible through a web-based interface designed for investor and regulatory stakeholder use.

### Ethical Considerations and Limitations

Ethical considerations were addressed by ensuring model transparency through attention visualization and ontology alignment, allowing users to trace ESG score derivations to specific textual evidences. Measures were taken to mitigate biases originating from unbalanced training data and domain-specific language complexities [@Bender2021].

Limitations inherent to LLMs, including potential misinterpretations of implicit or culturally coded information in disclosures, were acknowledged. The model’s reliance on the quality and completeness of source ESG documents imposes further constraints on assessment precision.

Environmental impacts associated with large-scale model training were considered, employing efficient training protocols and emphasizing the framework’s deployment efficiency to offset computational costs [@Bender2021].