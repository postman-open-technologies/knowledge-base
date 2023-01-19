OAS Validity: Source of Errors
================
<sup>Last updated: 2023-01-19</sup>

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

- A total of 65,704 validation errors are found across 4,031 invalid
  APIs
- Looking at the *error* counts, 52,176 (79.4%) are found under `paths`.
  This is followed by 5,642 (8.6%) under `components`, 4,647 (7.1%)
  under `definitions`, 1,347 (2.1%) under `root`, and 685 (1%) under
  `info`
- Looking at the *API* counts, 2,432 (39.1%)have at least one error
  under `paths`. This is followed by 1,081 (17.4%) under `root`, 856
  (13.8%) under `components`, 554 (8.9%) under `info`, and 345 (5.5%)
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

| path                |     n |       pct |
|:--------------------|------:|----------:|
| paths               | 52176 | 0.7941069 |
| components          |  5642 | 0.0858700 |
| definitions         |  4647 | 0.0707263 |
| root                |  1347 | 0.0205010 |
| info                |   685 | 0.0104255 |
| servers             |   332 | 0.0050530 |
| tags                |   214 | 0.0032570 |
| host                |   158 | 0.0024047 |
| basePath            |   137 | 0.0020851 |
| security            |    81 | 0.0012328 |
| schemes             |    65 | 0.0009893 |
| securityDefinitions |    53 | 0.0008066 |
| produces            |    46 | 0.0007001 |
| parameters          |    40 | 0.0006088 |
| responses           |    37 | 0.0005631 |
| externalDocs        |    24 | 0.0003653 |
| openapi             |    10 | 0.0001522 |
| consumes            |     6 | 0.0000913 |
| swagger             |     4 | 0.0000609 |

</details>
<details>
<summary>
Table: Count of APIs with 1 or more errors by top property
</summary>

| path                |    n |       pct |
|:--------------------|-----:|----------:|
| paths               | 2432 | 0.3909968 |
| root                | 1081 | 0.1737942 |
| components          |  856 | 0.1376206 |
| info                |  554 | 0.0890675 |
| definitions         |  345 | 0.0554662 |
| servers             |  279 | 0.0448553 |
| host                |  158 | 0.0254019 |
| basePath            |  137 | 0.0220257 |
| security            |   81 | 0.0130225 |
| tags                |   78 | 0.0125402 |
| schemes             |   62 | 0.0099678 |
| securityDefinitions |   48 | 0.0077170 |
| produces            |   46 | 0.0073955 |
| externalDocs        |   18 | 0.0028939 |
| responses           |   13 | 0.0020900 |
| parameters          |   12 | 0.0019293 |
| openapi             |   10 | 0.0016077 |
| consumes            |    6 | 0.0009646 |
| swagger             |    4 | 0.0006431 |

</details>

## *Which errors are found under `paths`?*

The majority of the API validation issues occur under the `path`
property.

303 errors are found under at the first level (the properties right
under `/paths`) ,which represents a small proportion of all `paths`
errors (0.5%), but are nonetheless important as they hide all underlying
content.

They can be categorized as follows:

- Regex mismatch: 230 (75.9%). Raised when the property name does not
  start with a / or x-, essentially not matching the JSON schema
  `'^/', '^x-'` regular expression. Note that the schema validation
  library aggregates all regex issues under a single error (not one per
  property).
- Not an object: 70 (23.1%). Raised when the `paths` property is not a
  valid JSON {object}. Examples includes an empty \[\] or populated
  array, a string, a null value, etc.
- Unevaluated properties: 3 (1%). Raise when an invalid property name is
  used in a v3.1 specification.

<details>
<summary>
Table: Categorized count of errors under `paths` first level
</summary>

| category |   n |       pct |
|:---------|----:|----------:|
| REGEX    | 230 | 0.7590759 |
| NOTOBJ   |  70 | 0.2310231 |
| UNEVAL   |   3 | 0.0099010 |

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
