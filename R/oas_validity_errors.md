OAS Validity: Source of Errors
================
<sup>Last updated: 2023-01-13</sup>

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

- A total of 58,501 validation errors are found across 3,557 invalid
  APIs
- Looking at the *error* counts, 46,246 (79.1%) are found under `paths`.
  This is followed by 5,088 (8.7%) under `components`, 4,355 (7.4%)
  under `definitions`, 1,152 (2%) under `root`, and 599 (1%) under
  `info`
- Looking at the *API* counts, 2,163 (39.3%)have at least one error
  under `paths`. This is followed by 949 (17.3%) under `root`, 774
  (14.1%) under `components`, 490 (8.9%) under `info`, and 307 (5.6%)
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
| paths               | 46246 | 0.7905164 |
| components          |  5088 | 0.0869729 |
| definitions         |  4355 | 0.0744432 |
| root                |  1152 | 0.0196920 |
| info                |   599 | 0.0102391 |
| servers             |   312 | 0.0053332 |
| tags                |   208 | 0.0035555 |
| basePath            |   118 | 0.0020171 |
| host                |   117 | 0.0020000 |
| security            |    64 | 0.0010940 |
| schemes             |    51 | 0.0008718 |
| securityDefinitions |    48 | 0.0008205 |
| parameters          |    40 | 0.0006837 |
| responses           |    34 | 0.0005812 |
| produces            |    32 | 0.0005470 |
| externalDocs        |    19 | 0.0003248 |
| openapi             |     9 | 0.0001538 |
| consumes            |     6 | 0.0001026 |
| swagger             |     3 | 0.0000513 |

</details>
<details>
<summary>
Table: Count of APIs with 1 or more errors by top property
</summary>

| path                |    n |       pct |
|:--------------------|-----:|----------:|
| paths               | 2163 | 0.3934874 |
| root                |  949 | 0.1726396 |
| components          |  774 | 0.1408041 |
| info                |  490 | 0.0891395 |
| definitions         |  307 | 0.0558486 |
| servers             |  261 | 0.0474804 |
| basePath            |  118 | 0.0214663 |
| host                |  117 | 0.0212843 |
| tags                |   74 | 0.0134619 |
| security            |   64 | 0.0116427 |
| schemes             |   48 | 0.0087320 |
| securityDefinitions |   44 | 0.0080044 |
| produces            |   32 | 0.0058214 |
| externalDocs        |   15 | 0.0027288 |
| parameters          |   12 | 0.0021830 |
| responses           |   11 | 0.0020011 |
| openapi             |    9 | 0.0016373 |
| consumes            |    6 | 0.0010915 |
| swagger             |    3 | 0.0005458 |

</details>

## *Which errors are found under `paths`?*

The majority of the API validation issues occur under the `path`
property.

276 errors are found under at the first level (the properties right
under `/paths`) ,which represents a small proportion of all `paths`
errors (0.5%), but are nonetheless important as they hide all underlying
content.

They can be categorized as follows:

- Regex mismatch: 206 (74.6%). Raised when the property name does not
  start with a / or x-, essentially not matching the JSON schema
  `'^/', '^x-'` regular expression. Note that the schema validation
  library aggregates all regex issues under a single error (not one per
  property).
- Not an object: 67 (24.3%). Raised when the `paths` property is not a
  valid JSON {object}. Examples includes an empty \[\] or populated
  array, a string, a null value, etc.
- Unevaluated properties: 3 (1.1%). Raise when an invalid property name
  is used in a v3.1 specification.

<details>
<summary>
Table: Categorized count of errors under `paths` first level
</summary>

| category |   n |       pct |
|:---------|----:|----------:|
| REGEX    | 206 | 0.7463768 |
| NOTOBJ   |  67 | 0.2427536 |
| UNEVAL   |   3 | 0.0108696 |

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
