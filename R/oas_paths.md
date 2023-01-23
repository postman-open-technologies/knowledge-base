OAS Paths Analysis
================
<sup>Last updated: 2023-01-23</sup>

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

- The average number of path per API is 12.4, ranging from 1 to 1,550.
- Out of the 20,244 APIs with a path, 12,255 (60.5%) have 1-5 paths,
  2,684 (13.3%) have 6-10 paths, 2,596 (12.8%) have 11-20 paths, 1,813
  (9%) have 21-50 paths, and 896 (0.04426003%) have over 50 paths.

<img src="oas_paths_files/figure-gfm/oas_paths_buckets_barplot-1.png" width="90%" />

# Methodology

Results are based on the content and count of entries in the `/paths`
property in the APIs specifications.
