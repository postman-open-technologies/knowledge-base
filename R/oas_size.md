OAS JSON Size
================
<sup>Last updated: 2022-12-27</sup>

- <a href="#findings" id="toc-findings">Findings</a>
  - <a href="#what-is-the-typical-size-of-an-api"
    id="toc-what-is-the-typical-size-of-an-api">What is the typical size of
    an API?</a>
- <a href="#methodology" id="toc-methodology">Methodology</a>

<sup>*DISCLAIMER: the results and findings below are preliminary and
have not been fully validated or peer reviewed. Use with care. Do not
quote or disseminate.*</sup>

<sup>[Back to summary](oas_summary.md) \| [View related
issues](https://github.com/postman-open-technologies/knowledge-base/labels/oas%3Asize)</sup>

# Findings

## What is the typical size of an API?

- Based on 12,085 valid API specifications, the average JSON size is
  28.8Kb, ranging from \< 1Kb to 526Kb.
- No significant difference is observed between version 2.x (28.8Kb) and
  3.0 (29.2Kb)

<img src="oas_size_files/figure-gfm/oas_paths_buckets_barplot-1.png" width="90%" height="70%" />

# Methodology

Results are based on json_data_size field in the OAS resource view
populated by the python ingestion script based on size optimized JSON
file (no identation or cr/lf)
