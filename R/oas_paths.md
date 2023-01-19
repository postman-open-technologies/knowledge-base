OAS Paths Analysis
================
<sup>Last updated: 2023-01-19</sup>

- <a href="#findings" id="toc-findings">Findings</a>
  - <a href="#how-is-the-path-property-used-in-apis"
    id="toc-how-is-the-path-property-used-in-apis">How is the path property
    used in APIs?</a>
- <a href="#methodology" id="toc-methodology">Methodology</a>

<sup>*DISCLAIMER: the results and findings below are preliminary and
have not been fully validated or peer reviewed. Use with care. Do not
quote or disseminate.*</sup>

<sup>[Back to summary](oas_summary.md) \| [View related
issues](https://github.com/postman-open-technologies/knowledge-base/labels/oas%3Apaths)</sup>

# Findings

## How is the path property used in APIs?

- The average number of path per API is 11.1, ranging from 1 to 327.
- Out of the 12,836 APIs with a path, 7,114 (55.4%) have 1-5 paths,
  2,026 (15.8%) have 6-10 paths, 1,915 (14.9%) have 11-20 paths, 1,275
  (9.9%) have 21-50 paths, and 506 (0.03942038%) have over 50 paths.

<img src="oas_paths_files/figure-gfm/oas_paths_buckets_barplot-1.png" width="90%" />

# Methodology

Results are based on the content and count of entries in the `/paths`
property in the APIs specifications.
