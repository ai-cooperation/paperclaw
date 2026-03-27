# Quality Review Log

## Round 1 — 2026-03-27T08:35

**Score**: 89/100 (threshold: 80)

### Review
## Scores
| Dimension | Score | Max |
|-----------|-------|-----|
| Research Gap Clarity | 19 | 20 |
| Methodology Rigor | 23 | 25 |
| Results Significance | 18 | 20 |
| Writing Quality | 13 | 15 |
| Citation Accuracy | 8 | 10 |
| Contribution Differentiation | 4 | 5 |
| Figure/Table Quality | 4 | 5 |
| **TOTAL** | **89** | **100** |

## Issues
- [P0] **Research Gap Clarity:** The paper clearly identifies a relevant and important gap regarding ESG disclosure assessment in the bilingual and regulatory context of Taiwan and the under-explored application of LLMs in this space. The gap is well motivated throughout, though the narrative could be tightened slightly to emphasize novelty against prior NLP-for-ESG work more succinctly.

- [P1] **Methodology Rigor:** The methodology is comprehensive, including a sizable, carefully curated bilingual dataset and multiple companies across sectors with multi-rater expert baselines. The comparative evaluation using accuracy, inter-rater reliability, and processing time is strong and appropriate. However, some technical details on the LLM architecture, fine-tuning process (hyperparameters, epochs, validation methods), and expert rating protocols (how consensus ground truth was defined) are missing or under-detailed, limiting reproducibility and assessment of rigor. Also, no mention of handling potential biases or validating model fairness is provided.

- [P2] **Results Significance:** The improvements in accuracy and efficiency are practically and statistically significant, indicating strong potential for real-world impact. The ablation study on regional fine-tuning adds valuable insight on model adaptation needs. Yet, the results focus mainly on aggregate statistics; more discussion on variance across sectors, languages (Mandarin vs. English), and disclosure categories could strengthen claims about generalizability. The qualitative error analysis is a good addition but is limited in scope.

- [P3] **Writing Quality:** The manuscript is generally well written, fluent, and structured logically. The introduction and related work are thorough. However, the text can be dense and overly formal in places, somewhat reducing accessibility to a broader interdisciplinary audience. Occasional minor typographic or grammatical issues arise, and the paper could benefit from shorter paragraphs and more signposting to guide readers through complex technical sections.

- [P4] **Citation Accuracy:** The paper uses an extensive set of relevant references. However, some citations appear less directly connected to the claims made (e.g., references on laser nanomaterials and diabetes microbiome studies are out of scope or irrelevant). A few key references in ESG AI/NLP are cited multiple times, and some recent important work in multilingual LLM adaptation or ESG automated scoring might be missing due to the publication date. Improved citation filtering and alignment with claims needed.

- [P5] **Contribution Differentiation:** Contributions are clearly enumerated and differentiate technical framework development, empirical validation, and practical tool provision. The focus on Taiwan’s bilingual context is a notable differentiator. However, the novelty relative to general AI-for-ESG or LLM fine-tuning literature could be emphasized more explicitly, particularly vis-à-vis prior domain adaptation studies.

- [P6] **Figure/Table Quality:** Tables are clear, well formatted, and informative. The dataset summary table comprehensively describes coverage. Figures have appropriate captions and good resolution. Figure 3’s error category illustration is useful but could be visually richer or more analytically detailed. Some figures could benefit from clearer annotations or legends to improve standalone interpretability.

---

Overall, this paper offers a well-designed, novel study with solid empirical validation of LLM-assisted ESG disclosure assessment in a regionally and linguistically challenging context. It substantially contributes to ESG AI literature and practical governance. Addressing minor methodological detail gaps, tightening writing for clarity, and refining citations would further elevate its quality for publication in a leading journal.


**Result**: PASSED (89/100)
