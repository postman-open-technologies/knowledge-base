OAS Validity: Source of Errors
================
<sup>Last updated: 2023-02-08</sup>

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

- A total of 179,017 validation errors are found across 5,973 invalid
  APIs
- Looking at the *error* counts, 126,130 (70.5%) are found under
  `paths`. This is followed by 35,870 (20%) under `components`, 12,296
  (6.9%) under `definitions`, 1,742 (1%) under `root`, and 1,031 (0.6%)
  under `info`
- Looking at the *API* counts, 3,734 (40.3%)have at least one error
  under `paths`. This is followed by 1,474 (15.9%) under `components`,
  1,437 (15.5%) under `root`, 792 (8.5%) under `info`, and 502 (5.4%)
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
| paths               | 126130 | 0.7045700 |
| components          |  35870 | 0.2003720 |
| definitions         |  12296 | 0.0686862 |
| root                |   1742 | 0.0097309 |
| info                |   1031 | 0.0057592 |
| tags                |    518 | 0.0028936 |
| servers             |    392 | 0.0021897 |
| host                |    209 | 0.0011675 |
| securityDefinitions |    202 | 0.0011284 |
| basePath            |    189 | 0.0010558 |
| security            |    121 | 0.0006759 |
| responses           |     76 | 0.0004245 |
| schemes             |     71 | 0.0003966 |
| parameters          |     68 | 0.0003799 |
| produces            |     50 | 0.0002793 |
| externalDocs        |     27 | 0.0001508 |
| openapi             |     14 | 0.0000782 |
| consumes            |      7 | 0.0000391 |
| swagger             |      4 | 0.0000223 |

</details>
<details>
<summary>
Table: Count of APIs with 1 or more errors by top property
</summary>

| path                |    n |       pct |
|:--------------------|-----:|----------:|
| paths               | 3734 | 0.4029786 |
| components          | 1474 | 0.1590762 |
| root                | 1437 | 0.1550831 |
| info                |  792 | 0.0854738 |
| definitions         |  502 | 0.0541766 |
| servers             |  334 | 0.0360458 |
| host                |  209 | 0.0225556 |
| basePath            |  189 | 0.0203972 |
| securityDefinitions |  163 | 0.0175912 |
| security            |  119 | 0.0128427 |
| tags                |   99 | 0.0106842 |
| schemes             |   68 | 0.0073387 |
| produces            |   50 | 0.0053961 |
| parameters          |   31 | 0.0033456 |
| externalDocs        |   21 | 0.0022664 |
| responses           |   19 | 0.0020505 |
| openapi             |   14 | 0.0015109 |
| consumes            |    7 | 0.0007555 |
| swagger             |    4 | 0.0004317 |

</details>

## *Which errors are found under `paths`?*

The majority of the API validation issues occur under the `path`
property.

423 errors are found under at the first level (the properties right
under `/paths`) ,which represents a small proportion of all `paths`
errors (0.2%), but are nonetheless important as they hide all underlying
content.

They can be categorized as follows:

- Regex mismatch: 334 (79%). Raised when the property name does not
  start with a / or x-, essentially not matching the JSON schema
  `'^/', '^x-'` regular expression. Note that the schema validation
  library aggregates all regex issues under a single error (not one per
  property).
- Not an object: 85 (20.1%). Raised when the `paths` property is not a
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
| REGEX    | 334 | 0.7895981 |
| NOTOBJ   |  85 | 0.2009456 |
| UNEVAL   |   4 | 0.0094563 |

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
