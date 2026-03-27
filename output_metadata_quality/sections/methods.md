## Methodology

The approach adopted for this study was designed to address the research question concerning variation in metadata quality across major academic databases and its implications for research discoverability and bibliometric analyses. To achieve this, a standardized framework for assessing metadata quality was developed, followed by systematic data collection, preprocessing, and rigorous quantitative analysis. The research methodology was structured into the following key components: (1) definition of metadata quality dimensions and associated quantitative metrics, (2) selection of databases and data sampling, (3) data preprocessing and normalization, (4) evaluation procedures, and (5) statistical analysis for cross-database comparison of metadata quality. A conceptual overview of the framework and workflow is depicted in Figure 1.

### 1. Development of the Standardized Framework for Metadata Quality Assessment

Four fundamental dimensions of metadata quality were operationalized, drawing on scholarly consensus in bibliometrics and information science literature [@Sandnes2021; @Liu2020]. These dimensions are **completeness**, **accuracy**, **consistency**, and **timeliness**. For each dimension, precise quantitative metrics were formalized to enable objective measurement and cross-database comparability.

#### Completeness

Completeness reflects the extent to which required metadata fields are populated for each record in a database. Formally, for each metadata field $f$ within a set of fields $\mathcal{F}$, completeness $C_f$ is defined as

$$
C_f = \frac{\left| \{ r \in \mathcal{R} \mid r_f \neq \emptyset \} \right|}{|\mathcal{R}|},
$$

where $\mathcal{R}$ denotes the sample of records, and $r_f$ denotes the value of field $f$ for record $r$. The overall completeness metric $C$ for a database is then calculated as the average completeness across all fields:

$$
C = \frac{1}{|\mathcal{F}|} \sum_{f \in \mathcal{F}} C_f.
$$

The fields assessed included Title, Authors, Publication Year, Digital Object Identifier (DOI), and Abstract, selected due to their critical role in discoverability and bibliometric analyses.

#### Accuracy

Accuracy measures the degree to which the metadata values correctly represent the true information about the scholarly work. Due to challenges in obtaining absolute ground truth data, a pragmatic proxy approach was adopted. Accuracy was evaluated by cross-validation against authoritative sources and by internal consistency checks. For numerical and categorical fields (e.g., Publication Year), discrepancies with the publisher's official information served as error indicators. Let $A_r$ be an indicator such that $A_r = 1$ if record $r$ has accurate metadata and 0 otherwise, then accuracy $A$ is computed as:

$$
A = \frac{1}{|\mathcal{R}|} \sum_{r \in \mathcal{R}} A_r.
$$

Accuracy for author names and DOIs was assessed through string matching techniques and DOI resolution validation, leveraging APIs where available.

#### Consistency

Consistency captures the degree of uniformity and standardization of metadata values within the database, particularly across records and in comparison with other authoritative databases. Consistency issues may arise from variations in author name formats, differences in date formats, or conflicting field entries. Quantitatively, consistency was evaluated by measuring the deviation of metadata field values from database-wide modal values or standardized formats using similarity metrics (e.g., Jaccard similarity for author lists). For a given field $f$, consistency $S_f$ is computed as

$$
S_f = 1 - \frac{1}{|\mathcal{R}|} \sum_{r \in \mathcal{R}} d(r_f, M_f),
$$

where $M_f$ is the modal or standard value for the field $f$, and $d(\cdot, \cdot)$ denotes a normalized distance function between field values. The overall consistency score $S$ is averaged across all fields.

#### Timeliness

Timeliness assesses how current the metadata is relative to the publication date or to the date of the last expected update. Timeliness $T$ was quantified by measuring the latency between the date of record entry or update in the database and the official publication date. Formally, for each record $r$, let $t_r^{pub}$ be the publication date and $t_r^{db}$ the date the metadata entry was updated or recorded. The timeliness score for $r$ is given by

$$
T_r = \exp\left(-\alpha (t_r^{db} - t_r^{pub})\right),
$$

where $\alpha > 0$ is a decay parameter controlling the penalty for delays. The overall timeliness metric is the average:

$$
T = \frac{1}{|\mathcal{R}|} \sum_{r \in \mathcal{R}} T_r.
$$

By applying an exponential decay function, records updated closer to publication dates are awarded higher scores, reflecting better timeliness.

The combined set of metrics and their computation stages constitute the standardized framework formally illustrated in Figure 1. This framework provides a replicable methodology suitable for multiple academic databases, facilitating consistency and comparability.

### 2. Dataset Selection and Data Collection Protocols

The study targeted four leading academic databases widely used for research discovery and bibliometric analyses: Web of Science, Scopus, PubMed, and Google Scholar. These databases were selected to provide a representative cross-section of disciplinary coverage, indexing policies, and metadata curation practices.

For each database, a stratified random sample of 10,000 records was drawn (Table 1), covering the time frame from January 1, 2022, to December 31, 2022. Stratification was implemented by publication month to ensure temporal representativeness. The choice of sample size balanced statistical power and the practical constraints imposed by data access and computational resources.

Metadata fields assessed encompassed the core descriptors critical for bibliometric studies: Title, Authors, Publication Year, DOI, and Abstract. Data collection adhered to the respective database access policies, utilizing APIs or systematic scraping where permissible. Detailed logging captured retrieval dates and methods to trace update timing for timeliness assessment.

### 3. Data Preprocessing and Normalization

Raw metadata records were subjected to rigorous preprocessing to facilitate reliable metric computation:

- **Data Cleaning:** Removal of records with missing critical identifiers (e.g., no DOI or Title) was performed to prevent biasing completeness and accuracy metrics.

- **Normalization:** Author names were standardized using name disambiguation heuristics to minimize variability introduced by different naming conventions (e.g., initials vs. full names). Publication years were verified for numeric consistency.

- **Deduplication:** Duplicate records within each sample were identified using a combination of DOI matching and fuzzy title similarity and removed.

- **Metadata Validation:** DOIs were resolved via Crossref and publisher APIs to confirm validity for accuracy metrics.

These preprocessing steps ensured comparability across heterogeneous data sources and enhanced the reliability of quality measurements.

### 4. Evaluation Procedures and Metric Computation

Each metadata quality dimension was computed independently per database according to the framework definitions. To accommodate differences in database update practices, timeliness was measured from the metadata entry date where available; if unavailable, the data retrieval date was used as a proxy with caveats noted in limitations.

For accuracy assessment, authoritative publisher data was compiled by querying Crossref and publishers’ official websites, forming a partial ground truth against which database records were benchmarked. Accuracy metrics for author names were augmented by cross-database comparison (e.g., Web of Science vs. Scopus), identifying discrepancies suggestive of errors.

To evaluate consistency, intra-database standardization was analyzed by computing the variance and divergence from modal values for each field. Inter-database consistency was also qualitatively assessed to contextualize findings.

All metric computations yielded scores normalized to the interval $[0,1]$, with higher values indicating better metadata quality.

### 5. Statistical Analysis and Comparison Approach

The aggregated metadata quality metrics for each database were subjected to statistical analyses to test for significant differences across databases and to explore relationships between quality dimensions.

#### Hypothesis Testing

Pairwise comparisons of mean metric scores across databases were conducted using two-tailed Welch’s t-tests, suitable for samples with unequal variances. Statistical significance was evaluated at conventional thresholds ($p < 0.05$, $p < 0.01$, $p < 0.001$). To control for multiple comparisons, Holm-Bonferroni correction was applied, reducing false discovery rates.

#### Correlation Analysis

To explore interdependencies among metadata quality dimensions and their impact on downstream bibliometric outcomes such as coverage rates and citation linking, Pearson’s correlation coefficients ($r$) were calculated. Statistical significance of correlations was similarly tested.

#### Ablation Study

An ablation analysis was performed to assess the relative contribution of each metadata quality dimension to the overall quality score. This involved recalculating overall metadata quality with each dimension sequentially excluded and measuring proportional degradation. This approach provided insights into which dimensions most critically affect metadata reliability.

All analyses were conducted using the statistical software R (version 4.2.0), with reproducible scripts maintained for transparency.

### 6. Limitations and Ethical Considerations

Several limitations influenced the methodology. First, the availability of metadata update timestamps was inconsistent across databases, potentially biasing timeliness measurements. Second, absolute accuracy verification was constrained by the lack of comprehensive ground truth data; accuracy estimates rely on proxies and cross-validation which cannot guarantee perfect verification. Third, proprietary restrictions limited access to some metadata fields, necessitating a focus on commonly available core fields.

Ethical considerations included strict adherence to database usage policies, respecting intellectual property, and anonymizing any potentially sensitive data. No personal data beyond publicly available author information was processed.

### Summary

In summary, the methodological approach combined a rigorously defined, standardized framework for multidimensional metadata quality assessment with multi-database empirical data collection and comprehensive statistical analyses. This methodology addresses gaps identified in the literature by enabling systematic, comparable evaluation of metadata quality across multiple prominent academic databases and establishing foundational insights into the implications of metadata variation for research discoverability and bibliometrics. All components of the workflow, including metric definitions and analytic procedures, are clearly delineated in Figure 1, supporting reproducibility and potential extension by future research.