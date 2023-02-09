OAS Validity: Source of Errors
================
<sup>Last updated: 2023-02-09</sup>

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

- A total of 179,881 validation errors are found across 6,022 invalid
  APIs
- Looking at the *error* counts, 126,892 (70.5%) are found under
  `paths`. This is followed by 35,969 (20%) under `components`, 12,261
  (6.8%) under `definitions`, 1,759 (1%) under `root`, and 1,035 (0.6%)
  under `info`
- Looking at the *API* counts, 3,769 (40.3%)have at least one error
  under `paths`. This is followed by 1,493 (16%) under `components`,
  1,448 (15.5%) under `root`, 796 (8.5%) under `info`, and 503 (5.4%)
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
| paths               | 126892 | 0.7054219 |
| components          |  35969 | 0.1999600 |
| definitions         |  12261 | 0.0681617 |
| root                |   1759 | 0.0097787 |
| info                |   1035 | 0.0057538 |
| tags                |    519 | 0.0028852 |
| servers             |    401 | 0.0022293 |
| host                |    209 | 0.0011619 |
| securityDefinitions |    202 | 0.0011230 |
| basePath            |    190 | 0.0010563 |
| security            |    123 | 0.0006838 |
| responses           |     76 | 0.0004225 |
| schemes             |     73 | 0.0004058 |
| parameters          |     68 | 0.0003780 |
| produces            |     52 | 0.0002891 |
| externalDocs        |     27 | 0.0001501 |
| openapi             |     14 | 0.0000778 |
| consumes            |      7 | 0.0000389 |
| swagger             |      4 | 0.0000222 |

</details>
<details>
<summary>
Table: Count of APIs with 1 or more errors by top property
</summary>

| path                |    n |       pct |
|:--------------------|-----:|----------:|
| paths               | 3769 | 0.4029723 |
| components          | 1493 | 0.1596279 |
| root                | 1448 | 0.1548166 |
| info                |  796 | 0.0851064 |
| definitions         |  503 | 0.0537795 |
| servers             |  343 | 0.0366727 |
| host                |  209 | 0.0223458 |
| basePath            |  190 | 0.0203143 |
| securityDefinitions |  163 | 0.0174276 |
| security            |  121 | 0.0129370 |
| tags                |  100 | 0.0106918 |
| schemes             |   70 | 0.0074842 |
| produces            |   52 | 0.0055597 |
| parameters          |   31 | 0.0033144 |
| externalDocs        |   21 | 0.0022453 |
| responses           |   19 | 0.0020314 |
| openapi             |   14 | 0.0014968 |
| consumes            |    7 | 0.0007484 |
| swagger             |    4 | 0.0004277 |

</details>

## *Which errors are found under `paths`?*

The majority of the API validation issues occur under the `path`
property.

430 errors are found under at the first level (the properties right
under `/paths`) ,which represents a small proportion of all `paths`
errors (0.2%), but are nonetheless important as they hide all underlying
content.

They can be categorized as follows:

- Regex mismatch: 335 (77.9%). Raised when the property name does not
  start with a / or x-, essentially not matching the JSON schema
  `'^/', '^x-'` regular expression. Note that the schema validation
  library aggregates all regex issues under a single error (not one per
  property).
- Not an object: 91 (21.2%). Raised when the `paths` property is not a
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
| REGEX    | 335 | 0.7790698 |
| NOTOBJ   |  91 | 0.2116279 |
| UNEVAL   |   4 | 0.0093023 |

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
