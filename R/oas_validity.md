OAS Validity
================
<sup>Last updated: 2023-01-31</sup>

- <a href="#findings" id="toc-findings">Findings</a>
  - <a href="#how-many-valid-openapis-do-we-have"
    id="toc-how-many-valid-openapis-do-we-have"><em>How many valid OpenAPIs
    do we have?</em></a>
  - <a
    href="#which-top-level-paths-of-api-specifications-are-the-source-of-validation-errors"
    id="toc-which-top-level-paths-of-api-specifications-are-the-source-of-validation-errors"><em>Which
    top level paths of API specifications are the source of validation
    errors?</em></a>
- <a href="#methodology" id="toc-methodology">Methodology</a>

<sup>*DISCLAIMER: the results and findings below are preliminary and
have not been fully validated or peer reviewed. Use with care. Do not
quote or disseminate.*</sup>

<sup>[Back to summary](oas_summary.md) \| [View related
issues](https://github.com/postman-open-technologies/knowledge-base/labels/oas%3Avalidity)</sup>

# Findings

## *How many valid OpenAPIs do we have?*

- Out of 27,107 entries, 21,503 (79.3%) are valid and 5,604 (20.7%) are
  invalid
- 6,896 out of the 8,980 OpenAPI2 entries are valid (76.8%)
- 14,607 out of the 18,127 OpenAPI3 entries are valid (80.6%)

![](oas_validity_files/figure-gfm/oas_validity_charts-1.png)<!-- -->

## *Which top level paths of API specifications are the source of validation errors?*

<sup>See [source of errors](oas_validity_errors.md) for details and more
in-depth analysis around validation issues.<sup>

- A total of 174,720 validation errors are found across 5,604 invalid
  APIs
- Looking at the *error* counts, 122,961 (70.4%) are found under
  `paths`. This is followed by 35,456 (20.3%) under `components`, 11,881
  (6.8%) under `definitions`, 1,637 (0.9%) under `root`, and 951 (0.5%)
  under `info`
- Looking at the *API* counts, 3,488 (40.3%)have at least one error
  under `paths`. This is followed by 1,398 (16.2%) under `components`,
  1,356 (15.7%) under `root`, 727 (8.4%) under `info`, and 459 (5.3%)
  under `definitions`
- Keep in mind the `definitions` property is only used by OpenAPI 2.x
  and `components` by OpenAPI 3.x (as v2 `definitions` became
  `components/schema` in v3)
- `root` in the above findings mean an error at the highest level of the
  API specification (not under a property path)

# Methodology

Results are based on the count of the `isValid` boolean property in the
resource metadata. This flag is set by the `kb_oas_validation.py`
script, which uses the JSON schemas published under the [OAI GitHub
project](https://github.com/OAI/OpenAPI-Specification/tree/main/schemas).
Validation is performed by the Python
[jsonschema](https://github.com/python-jsonschema/jsonschema) package.
Validation errors are saved in a local file for further analysis.
