OAS Validity: Source of Errors
================
<sup>Last updated: 2023-02-11</sup>

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

- A total of 182,535 validation errors are found across 6,103 invalid
  APIs
- Looking at the *error* counts, 128,785 (70.6%) are found under
  `paths`. This is followed by 36,086 (19.8%) under `components`, 12,839
  (7%) under `definitions`, 1,788 (1%) under `root`, and 1,049 (0.6%)
  under `info`
- Looking at the *API* counts, 3,825 (40.3%)have at least one error
  under `paths`. This is followed by 1,514 (16%) under `components`,
  1,470 (15.5%) under `root`, 804 (8.5%) under `info`, and 510 (5.4%)
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
| paths               | 128785 | 0.7055359 |
| components          |  36086 | 0.1976936 |
| definitions         |  12839 | 0.0703372 |
| root                |   1788 | 0.0097954 |
| info                |   1049 | 0.0057468 |
| tags                |    521 | 0.0028542 |
| servers             |    410 | 0.0022461 |
| host                |    211 | 0.0011559 |
| securityDefinitions |    204 | 0.0011176 |
| basePath            |    194 | 0.0010628 |
| security            |    125 | 0.0006848 |
| responses           |     76 | 0.0004164 |
| schemes             |     73 | 0.0003999 |
| parameters          |     68 | 0.0003725 |
| produces            |     52 | 0.0002849 |
| externalDocs        |     27 | 0.0001479 |
| openapi             |     15 | 0.0000822 |
| consumes            |      8 | 0.0000438 |
| swagger             |      4 | 0.0000219 |

</details>
<details>
<summary>
Table: Count of APIs with 1 or more errors by top property
</summary>

| path                |    n |       pct |
|:--------------------|-----:|----------:|
| paths               | 3825 | 0.4030558 |
| components          | 1514 | 0.1595364 |
| root                | 1470 | 0.1548999 |
| info                |  804 | 0.0847208 |
| definitions         |  510 | 0.0537408 |
| servers             |  352 | 0.0370917 |
| host                |  211 | 0.0222339 |
| basePath            |  194 | 0.0204426 |
| securityDefinitions |  165 | 0.0173867 |
| security            |  123 | 0.0129610 |
| tags                |  102 | 0.0107482 |
| schemes             |   70 | 0.0073762 |
| produces            |   52 | 0.0054795 |
| parameters          |   31 | 0.0032666 |
| externalDocs        |   21 | 0.0022129 |
| responses           |   19 | 0.0020021 |
| openapi             |   15 | 0.0015806 |
| consumes            |    8 | 0.0008430 |
| swagger             |    4 | 0.0004215 |

</details>

## *Which errors are found under `paths`?*

The majority of the API validation issues occur under the `path`
property.

436 errors are found under at the first level (the properties right
under `/paths`) ,which represents a small proportion of all `paths`
errors (0.2%), but are nonetheless important as they hide all underlying
content.

They can be categorized as follows:

- Regex mismatch: 335 (76.8%). Raised when the property name does not
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
| REGEX    | 335 | 0.7683486 |
| NOTOBJ   |  97 | 0.2224771 |
| UNEVAL   |   4 | 0.0091743 |

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
