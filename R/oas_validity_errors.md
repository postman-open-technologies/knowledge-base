OAS Validity: Source of Errors
================
<sup>Last updated: 2023-02-16</sup>

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

- A total of 183,684 validation errors are found across 6,158 invalid
  APIs
- Looking at the *error* counts, 129,849 (70.7%) are found under
  `paths`. This is followed by 36,112 (19.7%) under `components`, 12,851
  (7%) under `definitions`, 1,804 (1%) under `root`, and 1,063 (0.6%)
  under `info`
- Looking at the *API* counts, 3,865 (40.4%)have at least one error
  under `paths`. This is followed by 1,521 (15.9%) under `components`,
  1,483 (15.5%) under `root`, 812 (8.5%) under `info`, and 511 (5.3%)
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
| paths               | 129849 | 0.7069151 |
| components          |  36112 | 0.1965985 |
| definitions         |  12851 | 0.0699625 |
| root                |   1804 | 0.0098212 |
| info                |   1063 | 0.0057871 |
| tags                |    523 | 0.0028473 |
| servers             |    412 | 0.0022430 |
| host                |    212 | 0.0011542 |
| securityDefinitions |    206 | 0.0011215 |
| basePath            |    201 | 0.0010943 |
| security            |    125 | 0.0006805 |
| responses           |     76 | 0.0004138 |
| schemes             |     74 | 0.0004029 |
| parameters          |     69 | 0.0003756 |
| produces            |     53 | 0.0002885 |
| externalDocs        |     27 | 0.0001470 |
| openapi             |     15 | 0.0000817 |
| consumes            |      8 | 0.0000436 |
| swagger             |      4 | 0.0000218 |

</details>
<details>
<summary>
Table: Count of APIs with 1 or more errors by top property
</summary>

| path                |    n |       pct |
|:--------------------|-----:|----------:|
| paths               | 3865 | 0.4036132 |
| components          | 1521 | 0.1588346 |
| root                | 1483 | 0.1548663 |
| info                |  812 | 0.0847953 |
| definitions         |  511 | 0.0533626 |
| servers             |  354 | 0.0369674 |
| host                |  212 | 0.0221387 |
| basePath            |  201 | 0.0209900 |
| securityDefinitions |  167 | 0.0174394 |
| security            |  123 | 0.0128446 |
| tags                |  104 | 0.0108605 |
| schemes             |   71 | 0.0074144 |
| produces            |   53 | 0.0055347 |
| parameters          |   32 | 0.0033417 |
| externalDocs        |   21 | 0.0021930 |
| responses           |   19 | 0.0019841 |
| openapi             |   15 | 0.0015664 |
| consumes            |    8 | 0.0008354 |
| swagger             |    4 | 0.0004177 |

</details>

## *Which errors are found under `paths`?*

The majority of the API validation issues occur under the `path`
property.

437 errors are found under at the first level (the properties right
under `/paths`) ,which represents a small proportion of all `paths`
errors (0.2%), but are nonetheless important as they hide all underlying
content.

They can be categorized as follows:

- Regex mismatch: 336 (76.9%). Raised when the property name does not
  start with a / or x-, essentially not matching the JSON schema
  `'^/', '^x-'` regular expression. Note that the schema validation
  library aggregates all regex issues under a single error (not one per
  property).
- Not an object: 97 (22.2%). Raised when the `paths` property is not a
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
| REGEX    | 336 | 0.7688787 |
| NOTOBJ   |  97 | 0.2219680 |
| UNEVAL   |   4 | 0.0091533 |

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
