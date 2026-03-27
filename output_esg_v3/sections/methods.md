## Methodology

This section details the methodological procedures employed to develop and evaluate the large language model (LLM)-assisted ESG disclosure assessment framework tailored to Taiwan-listed companies. The methodology encompasses data collection and preprocessing, LLM selection and fine-tuning—including linguistic and regulatory adaptations—framework architecture incorporating interpretability enhancements, and the experimental design contrasting the proposed LLM-assisted approach with manual and rule-based baselines. Metrics for assessing accuracy, consistency, and interpretability are also described. The overall system architecture is illustrated in the framework diagram (see @fig-1).

### Dataset Collection and Preprocessing

The ESG disclosure dataset consists of corporate sustainability reports published in 2022 by a representative sample of Taiwan Stock Exchange (TWSE)-listed companies drawn from diverse industries such as Chemicals, Semiconductors, Finance, Transportation, and Technology Hardware. The sample includes 367 individual disclosures aggregated from ten prominent firms (see Table 1), reflecting a broad spectrum of environmental, social, and governance topics pertinent to Taiwan’s regulatory context.

Disclosures were extracted primarily from public ESG reports and supplemental filings in Traditional Chinese script, the dominant written language for Taiwan-listed companies. Document lengths ranged from approximately 2,600 to 4,300 words per company report segment. Preprocessing involved text normalization (removal of non-textual artifacts), sentence segmentation adapted for Mandarin grammar, and tokenization using a domain-appropriate tokenizer compatible with LLM input requirements. Stopwords and irrelevant metadata were excluded while preserving contextually important information such as regulatory references and domain-specific terminology.

The dataset was stratified into training (80%) and testing (20%) subsets with care to maintain industry representation and temporal consistency to support generalizability assessments.

### LLM Selection and Domain-Specific Fine-tuning

A state-of-the-art Transformer-based LLM architecture was selected, leveraging its capacity for deep contextual understanding and transfer learning as outlined in @Bender2021. Following best practices in domain adaptation @Banerjee2022, the base model was fine-tuned on the Taiwan ESG corpus to specialize in the linguistic and topical features unique to the target domain.

Mathematically, the LLM is represented as a parameterized conditional language model:

$$
P_\theta(y|x) = \prod_{t=1}^T P_\theta(y_t|y_{<t}, x),
$$

where $x$ denotes input disclosure text tokens, $y$ denotes the predicted ESG category labels or sentiment tokens, $T$ is the output sequence length, and $\theta$ refers to the model parameters updated during fine-tuning. The training objective minimized the cross-entropy loss over domain-labeled ESG data:

$$
\mathcal{L}(\theta) = - \sum_{i=1}^N \sum_{t=1}^{T_i} \log P_\theta(y_t^{(i)} | y_{<t}^{(i)}, x^{(i)}),
$$

where $N$ is the number of training samples.

Two additional adaptations were undertaken:

1. **Linguistic tailoring:** Tokenization and vocabulary embedding layers were adjusted for Traditional Chinese language structures and Taiwan-specific expressions to enhance language comprehension and representation fidelity.

2. **Regulatory context integration:** Supplementary fine-tuning employed corpora comprising Taiwan ESG regulatory documents, including Taiwan Stock Exchange guidelines and Environmental Protection Administration standards, to incorporate local compliance terms and criteria into the model’s knowledge base, improving domain relevance.

### Framework Architecture and Interpretability Features

The complete framework, depicted in @fig-1, consists of four primary modules:

1. **Data Input and Preprocessing:** Raw ESG disclosure texts are ingested, segmented, and converted into token sequences compatible with the fine-tuned LLM.

2. **LLM-Assisted ESG Scoring Engine:** The fine-tuned LLM processes the input sequences to generate vector embeddings capturing semantic and contextual information of disclosure content. These embeddings feed into downstream classification heads performing multilabel ESG attribute classification, scoring each disclosure along environmental (E), social (S), and governance (G) dimensions.

Precisely, given the fine-tuned model embedding function $f_\theta(\cdot)$, each disclosure $x$ is mapped to an embedding vector:

$$
\mathbf{z} = f_\theta(x),
$$

which is then passed to a classifier $g(\cdot)$ producing ESG scores:

$$
\hat{y} = g(\mathbf{z}) \in [0,1]^K,
$$

where $K$ denotes the number of ESG subcategories. The classifier comprises fully connected layers with sigmoid activation to allow multi-dimensional scoring.

3. **Interpretability Module:** To address transparency and stakeholder trust concerns, the framework integrates explainability techniques inspired by attention mechanisms and feature attribution methods @Bender2021. Specifically, attention weight visualization and layer-wise relevance propagation (LRP) were implemented to highlight key sentences and phrases influencing the ESG scores, yielding qualitative rationales interpretable by domain experts.

4. **Output Generation:** The ESG scores alongside interpretability explanations are compiled into structured reports and visualizations to inform investors, regulators, and corporate users.

### ESG Scoring Algorithm and Baselines

The ESG scoring algorithm leverages LLM-generated contextual embeddings to classify disclosures into granulated ESG categories, replacing traditional manual labeling or rule-based keyword matching.

- **Manual Coding Baseline:** Human coders with domain expertise independently scored disclosures following standardized ESG assessment protocols used in Taiwan regulatory practices. Multiple coders annotated the same samples to estimate inter-rater variability.

- **Rule-Based Baseline:** A predetermined set of keyword and pattern-matching rules derived from Taiwan ESG guidelines and previous literature was implemented to score disclosures automatically.

- **LLM-Assisted Scoring:** The fine-tuned LLM framework produced scores as described, with output smoothing and thresholding heuristics applied to optimize classification performance.

### Experimental Setup

The experiments were structured to quantitatively compare the performance of the LLM-assisted scoring system against manual and rule-based baselines on the designated test set.

- **Training and Validation:** The fine-tuned LLM was trained over 20 epochs with early stopping based on validation loss. Hyperparameter tuning included learning rate (initially 3e-5), batch size (16), and dropout rate (0.1).

- **Evaluation Metrics:** Accuracy was evaluated using precision ($P$), recall ($R$), and F1 score, computed over the composite ESG classification task:

$$
\text{Precision} = \frac{TP}{TP + FP}, \quad \text{Recall} = \frac{TP}{TP + FN}, \quad F1 = 2 \cdot \frac{P \times R}{P + R},
$$

where $TP$, $FP$, and $FN$ denote true positives, false positives, and false negatives, respectively.

Inter-rater consistency was assessed via Cohen’s Kappa ($\kappa$), quantifying agreement beyond chance:

$$
\kappa = \frac{p_o - p_e}{1 - p_e},
$$

where $p_o$ is observed agreement and $p_e$ is expected chance agreement. The LLM-derived scores were compared with manual coding to gauge consistency improvements.

- **Statistical Significance:** Paired t-tests were conducted to evaluate significance of performance differences at $p < 0.05$ and $p < 0.001$ thresholds.

- **Runtime Efficiency:** Average processing time per disclosure sample was logged to assess operational scalability.

### Interpretability Evaluation

Interpretability was appraised qualitatively through case studies where attention maps and generated explanations were reviewed by ESG domain experts. The objective was to confirm that highlighted textual elements corresponded coherently to ESG scoring rationales, thereby enhancing user understanding and trust in automated assessments.

### Summary of the Methodological Workflow

The end-to-end methodological workflow can be summarized as follows:

1. ESG disclosure texts from Taiwan-listed firms were collected, preprocessed, and partitioned into train/test sets maintaining domain representativeness.

2. A pre-trained LLM was fine-tuned with Taiwan-specific linguistic and regulatory data sources to specialize its embeddings for ESG disclosure semantics.

3. The fine-tuned LLM generated contextual embeddings for disclosure texts, which a classification head transformed into multi-label ESG scores.

4. Interpretability modules extracted explanation signals from the LLM to produce transparent scoring justifications.

5. Comparative experiments measured the accuracy, consistency, and latency of the LLM-assisted system versus manual coding and rule-based systems.

6. Interpretability outputs were validated against domain expertise to confirm practical utility.

This systematic and rigorous methodology is aligned with prior NLP and ESG domain studies @Bender2021; @Banerjee2022 and addresses identified research gaps relating to localized, transparent, and consistent ESG disclosure assessment.