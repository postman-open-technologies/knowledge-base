OAS Validity: Source of Errors
================
<sup>Last updated: 2023-01-31</sup>

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

- A total of 174,720 validation errors are found across 5,604 invalid
  APIs
- Looking at the *error* counts, 122,961 (70.4%) are found under
  `paths`. This is followed by 35,456 (20.3%) under `components`, 11,881
  (6.8%) under `definitions`, 1,637 (0.9%) under `root`, and 951 (0.5%)
  under `info`
- Looking at the *API* counts, 3,488 (40.3%)have at least one error
  under `paths`. This is followed by 1,398 (16.2%) under `components`,
  1,356 (15.7%) under `root`, 727 (8.4%) under `info`, and 459 (5.3%)
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
| paths               | 122961 | 0.7037603 |
| components          |  35456 | 0.2029304 |
| definitions         |  11881 | 0.0680002 |
| root                |   1637 | 0.0093693 |
| info                |    951 | 0.0054430 |
| tags                |    513 | 0.0029361 |
| servers             |    361 | 0.0020662 |
| securityDefinitions |    193 | 0.0011046 |
| host                |    193 | 0.0011046 |
| basePath            |    161 | 0.0009215 |
| security            |    109 | 0.0006239 |
| responses           |     76 | 0.0004350 |
| schemes             |     71 | 0.0004064 |
| parameters          |     60 | 0.0003434 |
| produces            |     47 | 0.0002690 |
| externalDocs        |     26 | 0.0001488 |
| openapi             |     13 | 0.0000744 |
| consumes            |      7 | 0.0000401 |
| swagger             |      4 | 0.0000229 |

</details>
<details>
<summary>
Table: Count of APIs with 1 or more errors by top property
</summary>

| path                |    n |       pct |
|:--------------------|-----:|----------:|
| paths               | 3488 | 0.4034235 |
| components          | 1398 | 0.1616933 |
| root                | 1356 | 0.1568355 |
| info                |  727 | 0.0840851 |
| definitions         |  459 | 0.0530881 |
| servers             |  303 | 0.0350451 |
| host                |  193 | 0.0223225 |
| basePath            |  161 | 0.0186213 |
| securityDefinitions |  156 | 0.0180430 |
| security            |  107 | 0.0123757 |
| tags                |   95 | 0.0109877 |
| schemes             |   68 | 0.0078649 |
| produces            |   47 | 0.0054360 |
| parameters          |   25 | 0.0028915 |
| externalDocs        |   20 | 0.0023132 |
| responses           |   19 | 0.0021975 |
| openapi             |   13 | 0.0015036 |
| consumes            |    7 | 0.0008096 |
| swagger             |    4 | 0.0004626 |

</details>

## *Which errors are found under `paths`?*

The majority of the API validation issues occur under the `path`
property.

395 errors are found under at the first level (the properties right
under `/paths`) ,which represents a small proportion of all `paths`
errors (0.2%), but are nonetheless important as they hide all underlying
content.

They can be categorized as follows:

- Regex mismatch: 318 (80.5%). Raised when the property name does not
  start with a / or x-, essentially not matching the JSON schema
  `'^/', '^x-'` regular expression. Note that the schema validation
  library aggregates all regex issues under a single error (not one per
  property).
- Not an object: 73 (18.5%). Raised when the `paths` property is not a
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
| REGEX    | 318 | 0.8050633 |
| NOTOBJ   |  73 | 0.1848101 |
| UNEVAL   |   4 | 0.0101266 |

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
