OAS Validity: Source of Errors
================
<sup>Last updated: 2023-02-07</sup>

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

- A total of 177,446 validation errors are found across 5,884 invalid
  APIs
- Looking at the *error* counts, 125,058 (70.5%) are found under
  `paths`. This is followed by 35,756 (20.2%) under `components`, 11,999
  (6.8%) under `definitions`, 1,712 (1%) under `root`, and 1,006 (0.6%)
  under `info`
- Looking at the *API* counts, 3,670 (40.3%)have at least one error
  under `paths`. This is followed by 1,460 (16%) under `components`,
  1,414 (15.5%) under `root`, 777 (8.5%) under `info`, and 493 (5.4%)
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
| paths               | 125058 | 0.7047665 |
| components          |  35756 | 0.2015036 |
| definitions         |  11999 | 0.0676206 |
| root                |   1712 | 0.0096480 |
| info                |   1006 | 0.0056693 |
| tags                |    517 | 0.0029136 |
| servers             |    384 | 0.0021640 |
| host                |    206 | 0.0011609 |
| securityDefinitions |    198 | 0.0011158 |
| basePath            |    183 | 0.0010313 |
| security            |    115 | 0.0006481 |
| responses           |     76 | 0.0004283 |
| schemes             |     71 | 0.0004001 |
| parameters          |     64 | 0.0003607 |
| produces            |     49 | 0.0002761 |
| externalDocs        |     27 | 0.0001522 |
| openapi             |     14 | 0.0000789 |
| consumes            |      7 | 0.0000394 |
| swagger             |      4 | 0.0000225 |

</details>
<details>
<summary>
Table: Count of APIs with 1 or more errors by top property
</summary>

| path                |    n |       pct |
|:--------------------|-----:|----------:|
| paths               | 3670 | 0.4028098 |
| components          | 1460 | 0.1602459 |
| root                | 1414 | 0.1551970 |
| info                |  777 | 0.0852815 |
| definitions         |  493 | 0.0541104 |
| servers             |  326 | 0.0357809 |
| host                |  206 | 0.0226100 |
| basePath            |  183 | 0.0200856 |
| securityDefinitions |  160 | 0.0175612 |
| security            |  113 | 0.0124026 |
| tags                |   98 | 0.0107562 |
| schemes             |   68 | 0.0074635 |
| produces            |   49 | 0.0053781 |
| parameters          |   29 | 0.0031830 |
| externalDocs        |   21 | 0.0023049 |
| responses           |   19 | 0.0020854 |
| openapi             |   14 | 0.0015366 |
| consumes            |    7 | 0.0007683 |
| swagger             |    4 | 0.0004390 |

</details>

## *Which errors are found under `paths`?*

The majority of the API validation issues occur under the `path`
property.

415 errors are found under at the first level (the properties right
under `/paths`) ,which represents a small proportion of all `paths`
errors (0.2%), but are nonetheless important as they hide all underlying
content.

They can be categorized as follows:

- Regex mismatch: 329 (79.3%). Raised when the property name does not
  start with a / or x-, essentially not matching the JSON schema
  `'^/', '^x-'` regular expression. Note that the schema validation
  library aggregates all regex issues under a single error (not one per
  property).
- Not an object: 82 (19.8%). Raised when the `paths` property is not a
  valid JSON {object}. Examples includes an empty \[\] or populated
  array, a string, a null value, etc.
- Unevaluated properties: 4 (1%). Raise when an invalid property name is
  used in a v3.1 specification.

<details>
<summary>
Table: Categorized count of errors under `paths` first level
</summary>

| category |   n |       pct |
|:---------|----:|----------:|
| REGEX    | 329 | 0.7927711 |
| NOTOBJ   |  82 | 0.1975904 |
| UNEVAL   |   4 | 0.0096386 |

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
