OAS Validity: Source of Errors
================
<sup>Last updated: 2023-01-04</sup>

- <a href="#findings" id="toc-findings">Findings</a>
  - <a
    href="#which-top-level-paths-of-api-specifications-are-the-source-of-validation-errors"
    id="toc-which-top-level-paths-of-api-specifications-are-the-source-of-validation-errors"><em>Which
    top level paths of API specifications are the source of validation
    errors?</em></a>
  - <a href="#which-errors-are-found-under-path"
    id="toc-which-errors-are-found-under-path"><em>Which errors are found
    under <code>path</code>?</em></a>
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

- A total of 58,053 validation errors are found across 3,555 invalid
  APIs
- Looking at the *error* counts, 45,803 (78.9%) are found under `paths`.
  This is followed by 5,087 (8.8%) under `components`, 4,356 (7.5%)
  under `definitions`, 1,152 (2%) under `root`, and 597 (1%) under
  `info`
- Looking at the *API* counts, 2,162 (39.4%)have at least one error
  under `paths`. This is followed by 949 (17.3%) under `root`, 773
  (14.1%) under `components`, 489 (8.9%) under `info`, and 307 (5.6%)
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
| paths               | 45803 | 0.7889859 |
| components          |  5087 | 0.0876268 |
| definitions         |  4356 | 0.0750349 |
| root                |  1152 | 0.0198439 |
| info                |   597 | 0.0102837 |
| servers             |   311 | 0.0053572 |
| tags                |   208 | 0.0035829 |
| basePath            |   118 | 0.0020326 |
| host                |   115 | 0.0019809 |
| security            |    64 | 0.0011024 |
| schemes             |    51 | 0.0008785 |
| securityDefinitions |    48 | 0.0008268 |
| parameters          |    40 | 0.0006890 |
| responses           |    34 | 0.0005857 |
| produces            |    32 | 0.0005512 |
| externalDocs        |    19 | 0.0003273 |
| openapi             |     9 | 0.0001550 |
| consumes            |     6 | 0.0001034 |
| swagger             |     3 | 0.0000517 |

</details>
<details>
<summary>
Table: Count of APIs with 1 or more errors by top property
</summary>

| path                |    n |       pct |
|:--------------------|-----:|----------:|
| paths               | 2162 | 0.3937352 |
| root                |  949 | 0.1728283 |
| components          |  773 | 0.1407758 |
| info                |  489 | 0.0890548 |
| definitions         |  307 | 0.0559097 |
| servers             |  260 | 0.0473502 |
| basePath            |  118 | 0.0214897 |
| host                |  115 | 0.0209434 |
| tags                |   74 | 0.0134766 |
| security            |   64 | 0.0116554 |
| schemes             |   48 | 0.0087416 |
| securityDefinitions |   44 | 0.0080131 |
| produces            |   32 | 0.0058277 |
| externalDocs        |   15 | 0.0027317 |
| parameters          |   12 | 0.0021854 |
| responses           |   11 | 0.0020033 |
| openapi             |    9 | 0.0016390 |
| consumes            |    6 | 0.0010927 |
| swagger             |    3 | 0.0005463 |

</details>

## *Which errors are found under `path`?*

*Analysis in progress*

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
