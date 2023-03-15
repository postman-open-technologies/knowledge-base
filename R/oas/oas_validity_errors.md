OAS Validity: Source of Errors
================
<sup>Last updated: 2023-03-15</sup>

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

- A total of 186,354 validation errors are found across 6,375 invalid
  APIs
- Looking at the *error* counts, 132,096 (70.9%) are found under
  `paths`. This is followed by 36,176 (19.4%) under `components`, 13,101
  (7%) under `definitions`, 1,817 (1%) under `root`, and 1,107 (0.6%)
  under `info`
- Looking at the *API* counts, 4,000 (40.6%)have at least one error
  under `paths`. This is followed by 1,543 (15.6%) under `components`,
  1,496 (15.2%) under `root`, 854 (8.7%) under `info`, and 563 (5.7%)
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
| paths               | 132096 | 0.7088445 |
| components          |  36176 | 0.1941252 |
| definitions         |  13101 | 0.0703017 |
| root                |   1817 | 0.0097503 |
| info                |   1107 | 0.0059403 |
| tags                |    523 | 0.0028065 |
| servers             |    412 | 0.0022108 |
| securityDefinitions |    218 | 0.0011698 |
| host                |    216 | 0.0011591 |
| basePath            |    203 | 0.0010893 |
| security            |    131 | 0.0007030 |
| parameters          |     97 | 0.0005205 |
| responses           |     76 | 0.0004078 |
| schemes             |     74 | 0.0003971 |
| produces            |     53 | 0.0002844 |
| externalDocs        |     27 | 0.0001449 |
| openapi             |     15 | 0.0000805 |
| consumes            |      8 | 0.0000429 |
| swagger             |      4 | 0.0000215 |

</details>
<details>
<summary>
Table: Count of APIs with 1 or more errors by top property
</summary>

| path                |    n |       pct |
|:--------------------|-----:|----------:|
| paths               | 4000 | 0.4055150 |
| components          | 1543 | 0.1564274 |
| root                | 1496 | 0.1516626 |
| info                |  854 | 0.0865775 |
| definitions         |  563 | 0.0570762 |
| servers             |  354 | 0.0358881 |
| host                |  216 | 0.0218978 |
| basePath            |  203 | 0.0205799 |
| securityDefinitions |  175 | 0.0177413 |
| security            |  129 | 0.0130779 |
| tags                |  104 | 0.0105434 |
| schemes             |   71 | 0.0071979 |
| produces            |   53 | 0.0053731 |
| parameters          |   36 | 0.0036496 |
| externalDocs        |   21 | 0.0021290 |
| responses           |   19 | 0.0019262 |
| openapi             |   15 | 0.0015207 |
| consumes            |    8 | 0.0008110 |
| swagger             |    4 | 0.0004055 |

</details>

## *Which errors are found under `paths`?*

The majority of the API validation issues occur under the `path`
property.

439 errors are found under at the first level (the properties right
under `/paths`) ,which represents a small proportion of all `paths`
errors (0.2%), but are nonetheless important as they hide all underlying
content.

They can be categorized as follows:

- Regex mismatch: 336 (76.5%). Raised when the property name does not
  start with a / or x-, essentially not matching the JSON schema
  `'^/', '^x-'` regular expression. Note that the schema validation
  library aggregates all regex issues under a single error (not one per
  property).
- Not an object: 99 (22.6%). Raised when the `paths` property is not a
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
| REGEX    | 336 | 0.7653759 |
| NOTOBJ   |  99 | 0.2255125 |
| UNEVAL   |   4 | 0.0091116 |

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
