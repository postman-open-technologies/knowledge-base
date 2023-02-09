OAS Validity
================
<sup>Last updated: 2023-02-09</sup>

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

- Out of 28,493 entries, 22,471 (78.9%) are valid and 6,022 (21.1%) are
  invalid
- 7,399 out of the 9,682 OpenAPI2 entries are valid (76.4%)
- 15,072 out of the 18,811 OpenAPI3 entries are valid (80.1%)

![](oas_validity_files/figure-gfm/oas_validity_charts-1.png)<!-- -->

## *Which top level paths of API specifications are the source of validation errors?*

<sup>See [source of errors](oas_validity_errors.md) for details and more
in-depth analysis around validation issues.<sup>

- A total of 179,881 validation errors are found across 6,022 invalid
  APIs
- Looking at the *error* counts, 126,892 (70.5%) are found under
  `paths`. This is followed by 35,969 (20%) under `components`, 12,261
  (6.8%) under `definitions`, 1,759 (1%) under `root`, and 1,035 (0.6%)
  under `info`
- Looking at the *API* counts, 3,769 (40.3%)have at least one error
  under `paths`. This is followed by 1,493 (16%) under `components`,
  1,448 (15.5%) under `root`, 796 (8.5%) under `info`, and 503 (5.4%)
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
