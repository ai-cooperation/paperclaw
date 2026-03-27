The methodology section delineates the systematic approach employed to develop, customize, and empirically evaluate a large language model (LLM)-assisted framework for Environmental, Social, and Governance (ESG) disclosure assessment tailored to Taiwan-listed companies. The framework aims to address key research questions concerning the effectiveness of LLM assistance in enhancing accuracy, consistency, and timeliness of ESG assessment compared to conventional manual methods. This section articulates four major components: the dataset selection and preprocessing, LLM framework development and customization, comparative assessment protocol, and the comprehensive evaluation setup. Reference is made to Figure 1, which schematically illustrates the overall architecture and workflow of the proposed ESG assessment framework.

## Dataset Description

The empirical analysis is conducted on a carefully curated dataset comprising ESG disclosure reports from Taiwan-listed companies spanning the years 2021 to 2023. The selection criteria prioritized reports officially issued by publicly listed firms across multiple sectors—including finance, manufacturing, and technology—to ensure sectoral diversity and representation of Taiwan’s regulatory and market context.

The resulting corpus consists of approximately 450 ESG reports, authored primarily in Mandarin Chinese with significant incorporation of Taiwanese lexical nuances. Preprocessing procedures were meticulously applied to prepare the textual data for LLM ingestion and analysis. These procedures included standard natural language processing (NLP) steps of tokenization, sentence segmentation, and stop-word removal, augmented with domain-specific adaptations such as expansion of sector-related ESG terminology and normalization of variant expressions common in Taiwanese corporate disclosures. This linguistic preprocessing was essential for accurate semantic parsing given the idiosyncratic use of language and terminology within Taiwan’s sustainability reporting landscape.

Concurrently, an ESG disclosure vocabulary was constructed encompassing regulatory terms mandated by Taiwan’s Financial Supervisory Commission (FSC), local sustainability standards, and sector-specific ESG jargon. This lexicon served as an integral component of the domain adaptation process in the subsequent LLM fine-tuning stage (details in the next subsection). Table 1 summarizes the dataset composition, language features, manual assessment details, and LLM configuration parameters across sectors.

## LLM Framework Development

The core of the framework centers on a proprietary foundation model, herein designated as LLM-TW-base, selected for its capacity to model complex linguistic constructs typical of Mandarin Chinese and its adaptability through fine-tuning. Building upon this base, a multi-stage customization pipeline was executed to enhance both linguistic affinity and ESG domain relevance.

First, sector-specific lexicon integration was employed to augment the model’s vocabulary embedding layer. This strategy involved injecting learned embeddings for ESG sector terms and regulatory phrases absent from general corpora, thereby improving lexical coverage and contextual understanding during inference.

Second, a domain adaptation process was conducted through supervised fine-tuning using a seed set of annotated ESG reports from Taiwan-listed companies. The annotation schema encompassed key ESG disclosure elements aligned with regulatory guidelines and best practice frameworks. The fine-tuning objective function optimized cross-entropy loss over classification labels representing ESG dimensions (Environmental, Social, Governance) and their constituent subcategories. Formally, given a training example $(x_i, y_i)$ where $x_i$ denotes the tokenized ESG text and $y_i \in \{E, S, G\}$ the corresponding ESG class label, the fine-tuning loss $L$ was defined as

$$
L = - \sum_{i=1}^N y_i \log p_\theta(y_i | x_i)
$$

where $p_\theta$ represents the model’s predicted class probability parameterized by $\theta$, and $N$ is the number of training samples. The fine-tuning was carried out over ten epochs with an early stopping criterion to mitigate overfitting.

Third, linguistic adaptation targeted Taiwan-specific language variants, including regional idioms and orthographic forms, ensuring comprehensive token embedding and improved semantic representation in the local context. This step was essential for addressing Gap 1 identified in prior literature, concerning regional contextualization of ESG language (Cheng2020; Jeyaraj2022).

The finalized model architecture and workflow—depicted in Figure 1—integrates these components into a pipeline that accepts raw ESG reports, executes preprocessing, maps textual input to ESG classes with probabilistic confidence scores, and outputs structured assessment summaries. This LLM-assisted framework was designed for scalability and compatibility with existing analyst workflows, enabling hybrid human-AI evaluation modes.

## Comparative Assessment Procedure

To robustly benchmark LLM-assisted ESG assessment performance against traditional human methods (addressing Gap 2), a parallel experimental workflow was established. 

The manual assessment protocol involved a team of experienced ESG analysts fluent in Mandarin and knowledgeable in Taiwan’s corporate sustainability regulations. Analysts independently reviewed each ESG report, scoring disclosure quality across standard dimensions—accuracy, consistency, and timeliness—according to a validated rubric derived from FSC guidelines and prior literature (Permatasari2021). To ensure inter-rater reliability, a double-blind scoring procedure was employed with adjudication meetings to resolve disagreements, resulting in consensus ratings.

In contrast, the LLM-assisted assessment entailed passing the preprocessed ESG reports through the customized LLM pipeline. The system generated classification labels for each ESG disclosure element, which were subsequently aggregated into composite scores mirroring the manual scoring rubric. Importantly, the LLM inference time was recorded to evaluate processing speed as a proxy for timeliness benefit.

Assessment metrics were defined as follows:

- **Accuracy (A):** Proportion of correctly identified ESG disclosure elements relative to a gold standard established by consensus human annotation.

- **Consistency (C):** Measured by the intra-class correlation coefficient (ICC) across repeated assessments to evaluate reliability and stability of scores.

- **Timeliness (T):** Quantified as the processing time in days from report release to final assessment availability.

Mathematically, accuracy for a single report $r$ can be expressed as

$$
A_r = \frac{\text{Number of correctly identified ESG elements}}{\text{Total number of gold standard ESG elements}}
$$

and the overall accuracy across $M$ reports is

$$
A = \frac{1}{M} \sum_{r=1}^M A_r.
$$

Consistency was formally assessed by computing the ICC(2,1) model:

$$
ICC = \frac{\sigma^2_\text{between}}{\sigma^2_\text{between} + \sigma^2_\text{within}},
$$

where $\sigma^2_\text{between}$ and $\sigma^2_\text{within}$ denote variance components between and within raters, respectively.

## Evaluation Setup

The evaluation comprised two main experimental stages: (1) quantitative benchmarking of assessment metrics, and (2) exploratory user acceptance analysis.

**Quantitative Benchmarking:** The dataset was split into training, validation, and testing subsets, maintaining balanced sectoral and temporal representation. Statistical hypothesis testing was conducted to ascertain the significance of improvements observed in LLM-assisted assessment over manual methods. Paired sample $t$-tests were applied to metric differences, with effect sizes reported using Cohen’s $d$ to indicate practical relevance (Permatasari2021).

The evaluation also included an ablation study to quantify the contribution of individual model components (sector lexicon integration, Taiwan-specific fine-tuning, linguistic adaptation) on overall accuracy. This granular analysis informed the sensitivity and robustness of the LLM customization process (Table 3).

**User Acceptance and Practical Adoption:** Recognizing Gap 3 related to practical deployment challenges, a preliminary survey was administered to key stakeholder groups, including corporate sustainability officers, ESG analysts, and regulatory personnel. The survey instrument measured perceived accuracy improvements, ease of integration, trust in AI outputs, and training needs on a Likert scale ranging from 1 to 5. Descriptive statistics and qualitative feedback were analyzed to identify potential barriers to adoption and inform guidelines for effective integration (Jeyaraj2022).

All procedures adhered to ethical guidelines for data confidentiality and voluntary participation. The complete evaluation framework, from data processing through final stakeholder feedback, is synthesized in Figure 1, illustrating the iterative synergy between model development, empirical testing, and user-centered design.