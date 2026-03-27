## Methodology

## Research design

This study employed a mixed-method research design that combined expert human coding, LLM-assisted semantic scoring, and conventional disclosure metrics in a single validation framework. As shown in @fig-1, the workflow proceeded from report collection and preprocessing to ESG section detection, scoring by multiple methods, human benchmark construction, and subsequent firm-level analysis. Such a design was selected because disclosure quality is a latent construct that cannot be observed directly and therefore requires triangulation across complementary measurement strategies @Bender2021; @Tong2022; @Berger2021. The methodological logic was to compare the degree to which each automated approach reproduced expert judgments while also examining whether the resulting disclosure scores explained systematic variation across firms and industries @Gelhard2016; @Wang2017.

Let $i$ index firms and $t$ index reporting years. The observed disclosure quality score was treated as a latent-textual measure, denoted by $Q_{it}$. Three families of measures were constructed: an LLM-derived semantic score $Q^{LLM}_{it}$, a keyword-based score $Q^{KW}_{it}$, and a rule-based checklist score $Q^{RB}_{it}$. The expert benchmark score was denoted by $Q^{H}_{it}$. Validation was conducted by assessing the extent to which $Q^{LLM}_{it}$ approximated $Q^{H}_{it}$ relative to baseline methods. This approach is consistent with prior work emphasizing that textual precision and strategic ambiguity must be measured at the semantic level rather than through surface-term frequency alone @LI2015; @Park2015.

## Sample and data collection

The sample consisted of Taiwan-listed firms with publicly available annual reports and, where available, sustainability or ESG reports. Taiwan was selected because corporate disclosures are commonly produced in Chinese or bilingual formats, creating a setting in which multilingual document understanding is necessary and where rule-based English-centric proxies are unlikely to perform well @Zhao2021; @Xiao2020. Public reports were obtained from company websites and exchange-linked filing repositories. The observation window was defined by report availability, and only firms with sufficiently complete ESG narratives for at least one reporting period were retained. Firms in the financial sector and other regulated industries were not excluded ex ante, because heterogeneity in disclosure practice was considered substantively informative rather than merely noise-producing @Wang2017; @Yang2022.

Each report was converted into machine-readable text through optical character recognition when necessary and then standardized through cleaning procedures. Non-textual boilerplate, duplicated headers, page numbers, and purely financial tables were removed prior to analysis. Reports were segmented into ESG-relevant passages by section headings, keyword anchors, and document structure cues. This segmentation stage was important because long-document evaluation is known to be sensitive to information dispersion and context loss, particularly in cross-lingual settings @Tong2022; @Zhao2021; @Bender2021. A sample construction summary was documented in @tbl-main, which recorded report type, language, benchmark construction, and all scoring variants.

## Human benchmark construction

A human benchmark was constructed to serve as the reference standard for disclosure quality. Two or more trained coders independently evaluated each ESG passage using a structured rubric with five dimensions: completeness, specificity, consistency, relevance, and verifiability. Completeness captured whether a firm addressed the expected ESG subtopics; specificity reflected the presence of concrete actions, metrics, or targets; consistency reflected alignment across sections and years; relevance assessed whether the content was substantively connected to ESG issues; and verifiability evaluated whether claims were accompanied by auditable indicators or evidence. These dimensions were selected because disclosure quality is reflected in narrative precision and substantive content rather than mere topical presence @LI2015; @Gelhard2016.

For each dimension $d$, coders assigned scores on a bounded ordinal scale, which were then aggregated into a composite human score:

$$
Q^H_{it} = \frac{1}{D}\sum_{d=1}^{D} s_{itd},
$$

where $D$ denotes the number of rubric dimensions and $s_{itd}$ denotes the dimension-specific human rating. Inter-coder agreement was evaluated using weighted Cohen’s $\kappa$ for pairwise coding or Fleiss’ $\kappa$ where more than two coders were involved. Where disagreement occurred, adjudication was performed through joint review and rubric clarification. This benchmark construction followed the principle that automated ESG scores should be validated against expert judgment rather than treated as inherently correct @Bender2021; @Steelman2019.

## LLM-assisted assessment pipeline

The LLM-assisted pipeline was designed to estimate ESG disclosure quality through contextual semantic evaluation. After preprocessing, each ESG passage was submitted to the model with a standardized prompt instructing it to rate the passage along the same rubric dimensions used by human coders. The prompt specified scoring anchors, provided brief examples of strong and weak disclosure, and required a structured output schema to ensure comparability across documents. The output was constrained to numeric ratings and short justifications to support auditability. Such prompt standardization was necessary because LLM outputs are known to vary with instruction phrasing, output format, and context window design @Bender2021; @Sun2023; @Raheja2024.

For each passage, the LLM produced dimension scores $\hat{s}_{itd}$, which were aggregated into a composite score:

$$
Q^{LLM}_{it} = \frac{1}{D}\sum_{d=1}^{D} \hat{s}_{itd}.
$$

To improve robustness, multiple passes were conducted under either identical or minimally perturbed prompts, and the final score was computed as an average across runs:

$$
\bar{Q}^{LLM}_{it} = \frac{1}{R}\sum_{r=1}^{R} Q^{LLM(r)}_{it},
$$

where $R$ denotes the number of runs. If large variance across runs was detected, the passage was flagged for manual review. This design reflected concerns in the LLM literature regarding hallucination, instability, and sensitivity to sampling parameters @Bender2021; @Tong2022; @Wu2022. The method also incorporated document-level context such as section labels and report language to reduce misclassification caused by isolated sentence interpretation, which is especially important in Chinese and bilingual corpora @Zhao2021; @Xiao2020.

## Baseline scoring methods

Two conventional baselines were constructed for comparison. First, the keyword-based score counted ESG-related terms from a predefined dictionary and normalized the count by document length. Let $n_{it}$ denote the number of ESG keywords appearing in report $i$ at time $t$ and let $L_{it}$ denote the total token count. The normalized score was defined as:

$$
Q^{KW}_{it} = \frac{n_{it}}{L_{it}}.
$$

Second, the rule-based checklist score assigned points when a report included predefined disclosures, such as a policy statement, performance metric, or target for a given ESG topic. The checklist method was intended to represent common disclosure scoring practices in prior work that emphasize presence/absence criteria rather than semantic depth @LI2015; @Park2015; @Marques2020. These baseline methods were expected to perform relatively well on breadth but poorly on nuance, because they are unable to distinguish boilerplate repetition from substantive explanation @Dixon2010; @Jorge2011.

## Validation and evaluation metrics

Method validity was assessed by comparing automated scores against human benchmark scores using multiple metrics. Pearson correlation and Spearman rank correlation were computed to evaluate linear association and ordinal consistency. Mean absolute error and root mean squared error were used to quantify average deviation:

$$
MAE = \frac{1}{N}\sum_{i=1}^{N}\left|Q^{A}_{it} - Q^H_{it}\right|,
$$

$$
RMSE = \sqrt{\frac{1}{N}\sum_{i=1}^{N}\left(Q^{A}_{it} - Q^H_{it}\right)^2},
$$

where $Q^{A}_{it}$ denotes the automated score from either LLM, keyword, or rule-based methods. Rank agreement was also assessed because disclosure evaluation is often used for comparative screening rather than absolute calibration. In addition, subgroup validation was conducted across industries, report languages, and document lengths to test robustness to heterogeneity in text structure and reporting context @Zhao2021; @Tong2022; @Berger2021. The main comparison results were reported in @tbl-main, while robustness and ablation outcomes were summarized in @tbl-ablation.

## Firm-level explanatory analysis

After validation, the LLM-derived disclosure quality score was used as the dependent variable in a firm-level regression framework to identify determinants of disclosure variation. The baseline specification was:

$$
Q^{LLM}_{it} = \alpha + \beta_1 ES_i + \beta_2 GOV_i + \beta_3 FO_i + \gamma'X_{it} + \mu_j + \lambda_t + \varepsilon_{it},
$$

where $ES_i$ denotes environmental sensitivity, $GOV_i$ denotes governance strength, $FO_i$ denotes foreign ownership, and $X_{it}$ is a vector of controls including firm size, profitability, leverage, and other standard accounting variables. Industry fixed effects $\mu_j$ and year fixed effects $\lambda_t$ were included where appropriate. This model was motivated by literature suggesting that sustainability disclosure varies with organizational capability, governance quality, and investor composition @Gelhard2016; @Wang2017; @Yang2022; @Krackhardt1995. Standard errors were clustered at the firm level to account for serial correlation in repeated observations.

## Transparency, reproducibility, and ethics

To support reproducibility, all prompts, rubric definitions, preprocessing rules, and dictionary items were archived and version controlled. The coding protocol was documented to ensure that both expert and automated scores could be audited. Because LLM outputs may reflect hidden bias or unstable behavior, the analysis was designed to include error inspection and sensitivity testing rather than relying on a single model configuration @Bender2021; @Muninger2019; @Steelman2019. No proprietary or confidential information was required, and all data were drawn from public corporate disclosures. This design was intended to balance scalability with interpretability, thereby producing an ESG assessment method that is both empirically defensible and operationally useful for stakeholders in Taiwan’s capital market.