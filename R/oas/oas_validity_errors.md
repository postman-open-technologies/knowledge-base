OAS Validity: Source of Errors
================
<sup>Last updated: 2023-03-12</sup>

- <a href="#findings" id="toc-findings">Findings</a>
  - <a
    href="#which-top-level-paths-of-api-specifications-are-the-source-of-validation-errors"
    id="toc-which-top-level-paths-of-api-specifications-are-the-source-of-validation-errors"><em>Which
    top level paths of API specifications are the source of validation
    errors?</em></a>
  - <a href="#which-errors-are-found-under-paths"
    id="toc-which-errors-are-found-under-paths"><em>Which errors are found
    under <code>paths</code>?</em></a>
  - <a href="#which-errors-are-found-under-definitions-and-components"
    id="toc-which-errors-are-found-under-definitions-and-components"><em>Which
    errors are found under <code>definitions</code> and
    <code>components</code>?</em></a>
  - <a href="#which-errors-are-found-at-the-root-level"
    id="toc-which-errors-are-found-at-the-root-level"><em>Which errors are
    found at the root level?</em></a>
- <a href="#recommendations" id="toc-recommendations">Recommendations</a>
- <a href="#methodology" id="toc-methodology">Methodology</a>

<sup>*DISCLAIMER: the results and findings below are preliminary and
have not been fully validated or peer reviewed. Use with care. Do not
quote or disseminate.*</sup>

<sup>[Back to validity](oas_validity.md) \| [View related
issues](https://github.com/postman-open-technologies/knowledge-base/labels/oas%3Avalidity)</sup>

# Findings

## *Which top level paths of API specifications are the source of validation errors?*

- A total of 185,149 validation errors are found across 6,267 invalid
  APIs
- Looking at the *error* counts, 131,102 (70.8%) are found under
  `paths`. This is followed by 36,144 (19.5%) under `components`, 12,976
  (7%) under `definitions`, 1,811 (1%) under `root`, and 1,085 (0.6%)
  under `info`
- Looking at the *API* counts, 3,933 (40.5%)have at least one error
  under `paths`. This is followed by 1,532 (15.8%) under `components`,
  1,490 (15.3%) under `root`, 833 (8.6%) under `info`, and 537 (5.5%)
  under `definitions`
- Keep in mind the `definitions` property is only used by OpenAPI 2.x
  and `components` by OpenAPI 3.x (as v2 `definitions` became
  `components/schema` in v3)
- `root` in the above findings mean an error at the highest level of the
  API specification (not under a property path)

<details>
<summary>
Table: Count of errors by top property
</summary>

| path                |      n |       pct |
|:--------------------|-------:|----------:|
| paths               | 131102 | 0.7080892 |
| components          |  36144 | 0.1952157 |
| definitions         |  12976 | 0.0700841 |
| root                |   1811 | 0.0097813 |
| info                |   1085 | 0.0058601 |
| tags                |    523 | 0.0028248 |
| servers             |    412 | 0.0022252 |
| host                |    214 | 0.0011558 |
| securityDefinitions |    212 | 0.0011450 |
| basePath            |    202 | 0.0010910 |
| security            |    128 | 0.0006913 |
| parameters          |     83 | 0.0004483 |
| responses           |     76 | 0.0004105 |
| schemes             |     74 | 0.0003997 |
| produces            |     53 | 0.0002863 |
| externalDocs        |     27 | 0.0001458 |
| openapi             |     15 | 0.0000810 |
| consumes            |      8 | 0.0000432 |
| swagger             |      4 | 0.0000216 |

</details>
<details>
<summary>
Table: Count of APIs with 1 or more errors by top property
</summary>

| path                |    n |       pct |
|:--------------------|-----:|----------:|
| paths               | 3933 | 0.4045880 |
| components          | 1532 | 0.1575970 |
| root                | 1490 | 0.1532764 |
| info                |  833 | 0.0856908 |
| definitions         |  537 | 0.0552412 |
| servers             |  354 | 0.0364160 |
| host                |  214 | 0.0220142 |
| basePath            |  202 | 0.0207798 |
| securityDefinitions |  171 | 0.0175908 |
| security            |  126 | 0.0129616 |
| tags                |  104 | 0.0106985 |
| schemes             |   71 | 0.0073038 |
| produces            |   53 | 0.0054521 |
| parameters          |   34 | 0.0034976 |
| externalDocs        |   21 | 0.0021603 |
| responses           |   19 | 0.0019545 |
| openapi             |   15 | 0.0015431 |
| consumes            |    8 | 0.0008230 |
| swagger             |    4 | 0.0004115 |

</details>

## *Which errors are found under `paths`?*

The majority of the API validation issues occur under the `path`
property.

438 errors are found under at the first level (the properties right
under `/paths`) ,which represents a small proportion of all `paths`
errors (0.2%), but are nonetheless important as they hide all underlying
content.

They can be categorized as follows:

- Regex mismatch: 336 (76.7%). Raised when the property name does not
  start with a / or x-, essentially not matching the JSON schema
  `'^/', '^x-'` regular expression. Note that the schema validation
  library aggregates all regex issues under a single error (not one per
  property).
- Not an object: 98 (22.4%). Raised when the `paths` property is not a
  valid JSON {object}. Examples includes an empty \[\] or populated
  array, a string, a null value, etc.
- Unevaluated properties: 4 (0.9%). Raise when an invalid property name
  is used in a v3.1 specification.

<details>
<summary>
Table: Categorized count of errors under `paths` first level
</summary>

| category |   n |       pct |
|:---------|----:|----------:|
| REGEX    | 336 | 0.7671233 |
| NOTOBJ   |  98 | 0.2237443 |
| UNEVAL   |   4 | 0.0091324 |

</details>

## *Which errors are found under `definitions` and `components`?*

*Analysis in progress*

## *Which errors are found at the root level?*

*Analysis in progress*

# Recommendations

- t.d.b.

# Methodology

Validation errors reported by the Python
[jsonschema](https://github.com/python-jsonschema/jsonschema) package
are stored in JSON format in the database table, with a view exposing
each issue as a record. The validation metadata provides information on
the JSON path where the error occured and an error message. To classify
the nature of the issue, the error messages are matched to various
categories using regular expressions.
