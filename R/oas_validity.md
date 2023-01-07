OAS Validity
================
<sup>Last updated: 2023-01-07</sup>

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

- Out of 15,665 entries, 12,110 (77.3%) are valid and 3,555 (22.7%) are
  invalid
- 4,630 out of the 5,931 OpenAPI v2.x entries are valid (78.1%)
- 7,480 out of the 9,734 OpenAPI v3.x entries are valid (76.8%)

![](oas_validity_files/figure-gfm/oas_validity_charts-1.png)<!-- -->

## *Which top level paths of API specifications are the source of validation errors?*

<sup>See [source of errors](oas_validity_errors.md) for details and more
in-depth analysis around validation issues.<sup>

- A total of 57,824 validation errors are found across 3,555 invalid
  APIs
- Looking at the *error* counts, 45,606 (78.9%) are found under `paths`.
  This is followed by 5,088 (8.8%) under `components`, 4,324 (7.5%)
  under `definitions`, 1,152 (2%) under `root`, and 596 (1%) under
  `info`
- Looking at the *API* counts, 2,164 (39.4%)have at least one error
  under `paths`. This is followed by 949 (17.3%) under `root`, 774
  (14.1%) under `components`, 488 (8.9%) under `info`, and 307 (5.6%)
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
