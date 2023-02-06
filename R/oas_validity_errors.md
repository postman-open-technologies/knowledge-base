OAS Validity: Source of Errors
================
<sup>Last updated: 2023-02-06</sup>

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

- A total of 174,826 validation errors are found across 5,635 invalid
  APIs
- Looking at the *error* counts, 123,041 (70.4%) are found under
  `paths`. This is followed by 35,498 (20.3%) under `components`, 11,846
  (6.8%) under `definitions`, 1,641 (0.9%) under `root`, and 955 (0.5%)
  under `info`
- Looking at the *API* counts, 3,510 (40.4%)have at least one error
  under `paths`. This is followed by 1,405 (16.2%) under `components`,
  1,360 (15.6%) under `root`, 731 (8.4%) under `info`, and 461 (5.3%)
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
| paths               | 123041 | 0.7037912 |
| components          |  35498 | 0.2030476 |
| definitions         |  11846 | 0.0677588 |
| root                |   1641 | 0.0093865 |
| info                |    955 | 0.0054626 |
| tags                |    513 | 0.0029343 |
| servers             |    365 | 0.0020878 |
| host                |    194 | 0.0011097 |
| securityDefinitions |    193 | 0.0011040 |
| basePath            |    166 | 0.0009495 |
| security            |    109 | 0.0006235 |
| responses           |     76 | 0.0004347 |
| schemes             |     72 | 0.0004118 |
| parameters          |     60 | 0.0003432 |
| produces            |     47 | 0.0002688 |
| externalDocs        |     26 | 0.0001487 |
| openapi             |     13 | 0.0000744 |
| consumes            |      7 | 0.0000400 |
| swagger             |      4 | 0.0000229 |

</details>
<details>
<summary>
Table: Count of APIs with 1 or more errors by top property
</summary>

| path                |    n |       pct |
|:--------------------|-----:|----------:|
| paths               | 3510 | 0.4036339 |
| components          | 1405 | 0.1615685 |
| root                | 1360 | 0.1563937 |
| info                |  731 | 0.0840616 |
| definitions         |  461 | 0.0530129 |
| servers             |  307 | 0.0353036 |
| host                |  194 | 0.0223091 |
| basePath            |  166 | 0.0190892 |
| securityDefinitions |  156 | 0.0179393 |
| security            |  107 | 0.0123045 |
| tags                |   95 | 0.0109246 |
| schemes             |   69 | 0.0079347 |
| produces            |   47 | 0.0054048 |
| parameters          |   25 | 0.0028749 |
| externalDocs        |   20 | 0.0022999 |
| responses           |   19 | 0.0021849 |
| openapi             |   13 | 0.0014949 |
| consumes            |    7 | 0.0008050 |
| swagger             |    4 | 0.0004600 |

</details>

## *Which errors are found under `paths`?*

The majority of the API validation issues occur under the `path`
property.

398 errors are found under at the first level (the properties right
under `/paths`) ,which represents a small proportion of all `paths`
errors (0.2%), but are nonetheless important as they hide all underlying
content.

They can be categorized as follows:

- Regex mismatch: 319 (80.2%). Raised when the property name does not
  start with a / or x-, essentially not matching the JSON schema
  `'^/', '^x-'` regular expression. Note that the schema validation
  library aggregates all regex issues under a single error (not one per
  property).
- Not an object: 75 (18.8%). Raised when the `paths` property is not a
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
| REGEX    | 319 | 0.8015075 |
| NOTOBJ   |  75 | 0.1884422 |
| UNEVAL   |   4 | 0.0100503 |

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
