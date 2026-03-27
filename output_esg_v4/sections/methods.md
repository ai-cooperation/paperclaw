## Methodology

This study’s methodology encompasses the comprehensive design and implementation of a large language model (LLM)-assisted framework for assessing Environmental, Social, and Governance (ESG) disclosures of Taiwan-listed companies. The methodological approach integrates data collection and preprocessing, LLM selection and fine-tuning for bilingual ESG tasks, comparative benchmarking against manual and rule-based methods, and the application of bias-mitigation techniques adapted to ESG textual analysis. Figure @fig-1 illustrates the overall architecture and workflow of the proposed assessment framework.

### Dataset Collection and Preprocessing

The dataset comprises publicly available ESG disclosure documents from Taiwan-listed companies during the 2021 and 2022 reporting years. It includes annual ESG reports, sustainability disclosures, integrated ESG and Corporate Social Responsibility (CSR) reports, and financial reports containing ESG information. The reports are predominantly written in Mandarin, with substantial portions in English, reflecting bilingual reporting practices mandated by Taiwan’s regulatory framework.

Preprocessing steps were conducted to standardize and prepare the textual corpus for model training and evaluation. Initially, Optical Character Recognition (OCR) was applied where reports were in PDF image formats. Then, text cleaning procedures included removal of non-informative content such as boilerplate sections, irrelevant tables, and standard disclaimers. Tokenization was performed with language-specific tokenizers appropriate for Mandarin and English respectively, preserving linguistic nuances essential for semantic interpretation. Named entity recognition (NER) tools were employed to identify and mask company names and other sensitive information to avoid model bias toward specific entities.

The curated dataset totals approximately 1.2 million tokens spanning about 1,700 documents across multiple sectors (see Table 1). Three expert annotators with domain expertise in ESG and sustainability independently coded a representative subset of 400 documents to establish ground truth labels for key ESG disclosure dimensions, achieving inter-rater reliability above 0.75 (Cohen’s Kappa), which served as an evaluation benchmark for model predictions.

### Large Language Model Selection and ESG Fine-tuning

The core of the methodology lies in developing a bilingual LLM tailored to ESG disclosure assessment in the Taiwan market context. The pre-trained GPT-2 architecture was selected as the foundational model due to its demonstrated strong performance in text generation and comprehension tasks and adaptability via fine-tuning @Shahid2021; @Mejova2021. To address bilingual requirements and domain specificity, the following multi-stage fine-tuning strategy was employed:

1. **Domain-adaptive pretraining (DAPT):** The GPT-2 base model underwent additional pretraining on the entire unlabelled corpus of Taiwan ESG reports to adapt the model weights to domain-specific language distributions and terminology, especially covering sustainability lexicons in Mandarin and English @Vardasbi2021.

2. **Task-specific fine-tuning:** The model was subsequently fine-tuned with supervised learning on annotated documents for the ESG classification and scoring task, which involves extracting relevant textual segments and assigning ESG theme labels with quantitative scores reflecting disclosure quality and completeness. Cross-entropy loss was minimized over labeled samples.

3. **Multilingual adaptation:** A mixed-language training regime was applied to effectively learn bilingual representations, where input sequences were sampled with a balanced Mandarin-English ratio and masked language modeling was augmented with language identification tokens.

The model thus learned to interpret and evaluate ESG disclosures with sensitivity to linguistic, syntactic, and contextual cues characteristic of Taiwan-listed firms’ reporting practices. Hyperparameters such as learning rate, batch size, and dropout rates were systematically optimized via grid search and early stopping on a validation set.

### Benchmarking Framework: Manual and Rule-based Assessment

To evaluate the efficacy of the LLM-assisted ESG assessment, two baseline comparators were established:

- **Manual Assessment:** Expert human coders evaluated ESG reports according to a standardized codebook developed from Taiwan’s ESG reporting guidelines. Expert annotations were made independently, followed by consensus discussions to resolve discrepancies. This process ensured high-quality ground truth labels but entailed significant resource and time costs.

- **Rule-based Automated Method:** A heuristic rule-based system was implemented using keyword dictionaries, pattern matching, and simple syntactic rules targeting ESG-related phrases and category indicators. This baseline represents the state of traditional automated ESG evaluation techniques frequently documented in the literature @Millot2021; @Ali2022. However, it lacks deep semantic understanding and is susceptible to vocabulary variability and context ambiguity.

The rule-based system was tuned on the same training data to maximize precision of ESG theme identification but did not produce continuous scores, limiting interpretability.

### Evaluation Metrics and Analytical Procedures

The comparative evaluation employed the following quantitative metrics to assess accuracy, consistency, and efficiency:

- **Accuracy ($A$):** The proportion of correctly classified ESG disclosure labels compared to the manual ground truth. For continuous scores, mean squared error (MSE) and correlation coefficients were computed.

- **Inter-rater Reliability (Consistency, $K$):** Cohen’s Kappa statistic was used to quantify agreement between model outputs and manual annotations, reflecting the consistency of assessments beyond chance.

- **Processing Efficiency ($T$):** Average time in seconds required to process and evaluate one ESG report was recorded to measure computational and operational feasibility.

Let $D = \{d_1, d_2, \ldots, d_n\}$ denote the evaluation dataset of $n$ ESG documents, with label set $L$ associated with each report. The LLM-generated labels $\hat{L}_i$ and manual labels $L_i$ satisfy

$$
A = \frac{1}{n} \sum_{i=1}^{n} \mathbf{1}(\hat{L}_i = L_i)
$$

where $\mathbf{1}(\cdot)$ is the indicator function, and

$$
K = \frac{p_o - p_e}{1 - p_e}
$$

with $p_o$ denoting observed agreement and $p_e$ expected agreement by chance.

Efficiency time $T$ was averaged over documents excluding I/O overhead.

### Bias Mitigation Strategy

Inspired by recent advances in bias correction in ranking and recommendation systems @Vardasbi2021, a mixture-based inverse propensity scoring approach was adapted to mitigate potential model bias arising from skewed annotation distributions and linguistic imbalances in the training data.

Specifically, for each label class $l \in L$, the propensity score $p(l)$ representing the probability of label occurrence in training was estimated. Model outputs were reweighted by inverse propensity weights:

$$
w(l) = \frac{1}{p(l)}
$$

The adjusted prediction probability $\tilde{P}(\hat{L} = l)$ is computed by multiplying the raw prediction $P(\hat{L} = l)$ by $w(l)$ and normalizing across classes. This correction reduces the effect of overrepresented or underrepresented ESG themes influencing model bias.

An ablation study was conducted to compare model performance with and without the bias correction, quantifying its impact on accuracy and consistency (see Table 3 and Figure @fig-3). This approach enhanced robustness across thematic categories, particularly improving recall on less frequent environmental and governance labels without sacrificing precision.

### Experimental Environment and Implementation Details

All model training and evaluations were implemented using Python with the Hugging Face Transformers library. Fine-tuning employed NVIDIA V100 GPUs with 32GB memory, utilizing mixed-precision training for efficiency. The training regime integrated AdamW optimizer with learning rate warmup and weight decay regularization. Manual annotation was managed in a dedicated platform supporting multi-rater consensus.

The entire processing pipeline from data ingestion through to ESG classification and scoring is encapsulated in a reusable codebase and containerized workflow, facilitating reproducibility and possible deployment as an ESG assessment toolkit for end users.

### Summary of Methodological Innovations and Rigor

This methodology uniquely combines:

- The compilation and bilingual preprocessing of a large-scale Mandarin and English ESG disclosure corpus specific to the Taiwan market;

- The targeted fine-tuning of a state-of-the-art GPT variant LLM for semantic, bilingual ESG extraction and scoring reflecting regional linguistic nuances;

- The establishment of rigorous benchmarking baselines spanning manual expert coding and rule-based automated systems to validate relative performance gains;

- The integration of inverse propensity scoring-based bias correction techniques to enhance model fairness and trustworthiness.

Together, these components ensure that the developed ESG assessment framework is both technically robust and practically relevant for Taiwanese ESG evaluation contexts. The systematic evaluation framework, including accuracy, reliability, and efficiency metrics, along with bias correction analyses, contribute to addressing limitations identified in extant literature on automated ESG disclosure assessment methods @Millot2021; @Vardasbi2021; @Chin2023.

The full end-to-end architecture is depicted in Figure @fig-1, highlighting the flow from raw ESG disclosures through bilingual preprocessing, domain-adaptive LLM fine-tuning, bias-mitigated scoring, and multi-method benchmarking.