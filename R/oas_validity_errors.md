OAS Validity: Source of Errors
================
<sup>Last updated: 2023-02-12</sup>

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

- A total of 183,750 validation errors are found across 6,152 invalid
  APIs
- Looking at the *error* counts, 129,892 (70.7%) are found under
  `paths`. This is followed by 36,110 (19.7%) under `components`, 12,880
  (7%) under `definitions`, 1,803 (1%) under `root`, and 1,062 (0.6%)
  under `info`
- Looking at the *API* counts, 3,862 (40.4%)have at least one error
  under `paths`. This is followed by 1,520 (15.9%) under `components`,
  1,482 (15.5%) under `root`, 811 (8.5%) under `info`, and 511 (5.3%)
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
| paths               | 129892 | 0.7068952 |
| components          |  36110 | 0.1965170 |
| definitions         |  12880 | 0.0700952 |
| root                |   1803 | 0.0098122 |
| info                |   1062 | 0.0057796 |
| tags                |    523 | 0.0028463 |
| servers             |    412 | 0.0022422 |
| host                |    212 | 0.0011537 |
| securityDefinitions |    205 | 0.0011156 |
| basePath            |    200 | 0.0010884 |
| security            |    125 | 0.0006803 |
| responses           |     76 | 0.0004136 |
| schemes             |     74 | 0.0004027 |
| parameters          |     69 | 0.0003755 |
| produces            |     53 | 0.0002884 |
| externalDocs        |     27 | 0.0001469 |
| openapi             |     15 | 0.0000816 |
| consumes            |      8 | 0.0000435 |
| swagger             |      4 | 0.0000218 |

</details>
<details>
<summary>
Table: Count of APIs with 1 or more errors by top property
</summary>

| path                |    n |       pct |
|:--------------------|-----:|----------:|
| paths               | 3862 | 0.4036371 |
| components          | 1520 | 0.1588629 |
| root                | 1482 | 0.1548913 |
| info                |  811 | 0.0847617 |
| definitions         |  511 | 0.0534072 |
| servers             |  354 | 0.0369983 |
| host                |  212 | 0.0221572 |
| basePath            |  200 | 0.0209030 |
| securityDefinitions |  166 | 0.0173495 |
| security            |  123 | 0.0128554 |
| tags                |  104 | 0.0108696 |
| schemes             |   71 | 0.0074206 |
| produces            |   53 | 0.0055393 |
| parameters          |   32 | 0.0033445 |
| externalDocs        |   21 | 0.0021948 |
| responses           |   19 | 0.0019858 |
| openapi             |   15 | 0.0015677 |
| consumes            |    8 | 0.0008361 |
| swagger             |    4 | 0.0004181 |

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
