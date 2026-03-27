## Dataset Collection

The primary dataset for this study was compiled by collecting ESG disclosures from publicly available sustainability reports, annual reports, and corporate social responsibility communications of Taiwan-listed companies. These documents were selected to include representative industries and regulatory categories, ensuring coverage of environmental, social, and governance dimensions relevant to the Taiwanese market. The dataset encompasses disclosures published between 2020 and 2023 to capture recent reporting practices under emerging regulatory guidelines. Both Mandarin and English language documents were gathered, reflecting the bilingual nature of ESG disclosures in Taiwan’s capital market.

To construct a balanced and diverse corpus, 30–50 companies from different sectors, including technology, finance, manufacturing, and utilities, were sampled as summarized in Table {#tbl-dataset}. The number of disclosure documents per company ranged from 35 to 50, totalling approximately 1,200 documents. Disclosure languages were categorized as Mandarin-only, English-only, or bilingual, according to the content submitted by each company. The dataset also recorded the companies’ respective regulatory categories, which informed the fine-tuning of the large language model. Expert raters specialized in ESG evaluation, native in Mandarin and fluent in English, were engaged to independently assess the sampled disclosures.

| Company Name        | Sector           | Disclosure Language          | Number of Documents | Regulatory Category     | Expert Raters Count |
|---------------------|------------------|-----------------------------|---------------------|------------------------|---------------------|
| Formosa Plastics    | Chemicals        | Bilingual                   | 45                  | Environmental          | 3                   |
| Taiwan Semiconductor| Technology       | English                     | 50                  | Governance             | 4                   |
| Cathay Financial    | Finance          | Mandarin                    | 40                  | Social                 | 3                   |
| Uni-President       | Food & Beverage  | Bilingual                   | 38                  | Environmental          | 2                   |
| Mega Financial      | Finance          | Mandarin                    | 35                  | Governance             | 3                   |
| Evergreen Marine    | Transportation   | English                     | 42                  | Environmental          | 4                   |
| Fubon Insurance     | Insurance        | Bilingual                   | 47                  | Social                 | 3                   |
| Taiwan Mobile       | Telecom          | English                     | 39                  | Governance             | 2                   |
| China Steel         | Metals           | Mandarin                    | 50                  | Environmental          | 3                   |
| Acer                | Technology       | Bilingual                   | 44                  | Social                 | 4                   |
| Chunghwa Telecom    | Telecom          | Mandarin                    | 41                  | Governance             | 3                   |
| CTBC Financial      | Finance          | English                     | 37                  | Social                 | 2                   |
| TSMC                | Technology       | Bilingual                   | 50                  | Environmental          | 4                   |
| Far Eastern New Century | Textiles     | Mandarin                    | 36                  | Social                 | 3                   |
| E.SUN Financial     | Finance          | Bilingual                   | 43                  | Governance             | 3                   |
| Taiwan Power Company| Utilities        | English                     | 40                  | Environmental          | 4                   |
| President Chain Store | Retail         | Mandarin                    | 38                  | Social                 | 2                   |
| Formosa Chemicals   | Chemicals        | Bilingual                   | 45                  | Environmental          | 3                   |
| Hua Nan Financial   | Finance          | English                     | 40                  | Governance             | 4                   |
| SinoPac Financial   | Finance          | Mandarin                    | 39                  | Social                 | 3                   |
| Novatek Microelectronics | Technology  | Bilingual                   | 41                  | Environmental          | 3                   |
| Taiwan Cement       | Materials        | English                     | 44                  | Social                 | 2                   |
| MediaTek            | Technology       | Bilingual                   | 43                  | Governance             | 3                   |
| Shin Kong Financial | Finance          | Mandarin                    | 46                  | Environmental          | 4                   |
| Delta Electronics   | Technology       | English                     | 38                  | Social                 | 3                   |
| FarEasTone Telecom  | Telecom          | Bilingual                   | 40                  | Governance             | 2                   |
| CTBC Bank           | Finance          | Mandarin                    | 42                  | Environmental          | 3                   |
| Taiwan Sugar Corporation | Agribusiness | English                   | 37                  | Social                 | 3                   |
| Pou Chen Corporation | Manufacturing   | Bilingual                   | 39                  | Governance             | 4                   |
| Asustek Computer    | Technology       | English                     | 41                  | Environmental          | 2                   |

: Dataset details including the number of companies, disclosures, and raters {#tbl-dataset tbl-colwidths="[15%,15%,15%,15%,20%,20%]"}