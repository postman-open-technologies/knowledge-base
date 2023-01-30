OAS Validity: Source of Errors
================
<sup>Last updated: 2023-01-30</sup>

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

- A total of 170,919 validation errors are found across 5,331 invalid
  APIs
- Looking at the *error* counts, 119,621 (70%) are found under `paths`.
  This is followed by 35,288 (20.6%) under `components`, 11,800 (6.9%)
  under `definitions`, 1,554 (0.9%) under `root`, and 901 (0.5%) under
  `info`
- Looking at the *API* counts, 3,311 (40.3%)have at least one error
  under `paths`. This is followed by 1,350 (16.4%) under `components`,
  1,286 (15.7%) under `root`, 684 (8.3%) under `info`, and 425 (5.2%)
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
| paths               | 119621 | 0.6998695 |
| components          |  35288 | 0.2064604 |
| definitions         |  11800 | 0.0690386 |
| root                |   1554 | 0.0090920 |
| info                |    901 | 0.0052715 |
| tags                |    502 | 0.0029371 |
| servers             |    341 | 0.0019951 |
| securityDefinitions |    187 | 0.0010941 |
| host                |    183 | 0.0010707 |
| basePath            |    142 | 0.0008308 |
| security            |    104 | 0.0006085 |
| responses           |     76 | 0.0004447 |
| schemes             |     68 | 0.0003978 |
| parameters          |     56 | 0.0003276 |
| produces            |     47 | 0.0002750 |
| externalDocs        |     26 | 0.0001521 |
| openapi             |     12 | 0.0000702 |
| consumes            |      7 | 0.0000410 |
| swagger             |      4 | 0.0000234 |

</details>
<details>
<summary>
Table: Count of APIs with 1 or more errors by top property
</summary>

| path                |    n |       pct |
|:--------------------|-----:|----------:|
| paths               | 3311 | 0.4033869 |
| components          | 1350 | 0.1644737 |
| root                | 1286 | 0.1566764 |
| info                |  684 | 0.0833333 |
| definitions         |  425 | 0.0517788 |
| servers             |  285 | 0.0347222 |
| host                |  183 | 0.0222953 |
| securityDefinitions |  150 | 0.0182749 |
| basePath            |  142 | 0.0173002 |
| security            |  102 | 0.0124269 |
| tags                |   92 | 0.0112086 |
| schemes             |   65 | 0.0079191 |
| produces            |   47 | 0.0057261 |
| parameters          |   24 | 0.0029240 |
| externalDocs        |   20 | 0.0024366 |
| responses           |   19 | 0.0023148 |
| openapi             |   12 | 0.0014620 |
| consumes            |    7 | 0.0008528 |
| swagger             |    4 | 0.0004873 |

</details>

## *Which errors are found under `paths`?*

The majority of the API validation issues occur under the `path`
property.

377 errors are found under at the first level (the properties right
under `/paths`) ,which represents a small proportion of all `paths`
errors (0.2%), but are nonetheless important as they hide all underlying
content.

They can be categorized as follows:

- Regex mismatch: 304 (80.6%). Raised when the property name does not
  start with a / or x-, essentially not matching the JSON schema
  `'^/', '^x-'` regular expression. Note that the schema validation
  library aggregates all regex issues under a single error (not one per
  property).
- Not an object: 70 (18.6%). Raised when the `paths` property is not a
  valid JSON {object}. Examples includes an empty \[\] or populated
  array, a string, a null value, etc.
- Unevaluated properties: 3 (0.8%). Raise when an invalid property name
  is used in a v3.1 specification.

<details>
<summary>
Table: Categorized count of errors under `paths` first level
</summary>

| category |   n |       pct |
|:---------|----:|----------:|
| REGEX    | 304 | 0.8063660 |
| NOTOBJ   |  70 | 0.1856764 |
| UNEVAL   |   3 | 0.0079576 |

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
