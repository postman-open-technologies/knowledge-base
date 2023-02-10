OAS Validity: Source of Errors
================
<sup>Last updated: 2023-02-10</sup>

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

- A total of 182,009 validation errors are found across 6,058 invalid
  APIs
- Looking at the *error* counts, 128,399 (70.5%) are found under
  `paths`. This is followed by 35,994 (19.8%) under `components`, 12,828
  (7%) under `definitions`, 1,772 (1%) under `root`, and 1,037 (0.6%)
  under `info`
- Looking at the *API* counts, 3,796 (40.3%)have at least one error
  under `paths`. This is followed by 1,502 (15.9%) under `components`,
  1,457 (15.5%) under `root`, 797 (8.5%) under `info`, and 508 (5.4%)
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
| paths               | 128399 | 0.7054541 |
| components          |  35994 | 0.1977595 |
| definitions         |  12828 | 0.0704800 |
| root                |   1772 | 0.0097358 |
| info                |   1037 | 0.0056975 |
| tags                |    521 | 0.0028625 |
| servers             |    406 | 0.0022307 |
| host                |    211 | 0.0011593 |
| securityDefinitions |    204 | 0.0011208 |
| basePath            |    191 | 0.0010494 |
| security            |    124 | 0.0006813 |
| responses           |     76 | 0.0004176 |
| schemes             |     73 | 0.0004011 |
| parameters          |     68 | 0.0003736 |
| produces            |     52 | 0.0002857 |
| externalDocs        |     27 | 0.0001483 |
| openapi             |     14 | 0.0000769 |
| consumes            |      8 | 0.0000440 |
| swagger             |      4 | 0.0000220 |

</details>
<details>
<summary>
Table: Count of APIs with 1 or more errors by top property
</summary>

| path                |    n |       pct |
|:--------------------|-----:|----------:|
| paths               | 3796 | 0.4030580 |
| components          | 1502 | 0.1594818 |
| root                | 1457 | 0.1547038 |
| info                |  797 | 0.0846252 |
| definitions         |  508 | 0.0539393 |
| servers             |  348 | 0.0369505 |
| host                |  211 | 0.0224039 |
| basePath            |  191 | 0.0202803 |
| securityDefinitions |  165 | 0.0175196 |
| security            |  122 | 0.0129539 |
| tags                |  102 | 0.0108303 |
| schemes             |   70 | 0.0074326 |
| produces            |   52 | 0.0055213 |
| parameters          |   31 | 0.0032916 |
| externalDocs        |   21 | 0.0022298 |
| responses           |   19 | 0.0020174 |
| openapi             |   14 | 0.0014865 |
| consumes            |    8 | 0.0008494 |
| swagger             |    4 | 0.0004247 |

</details>

## *Which errors are found under `paths`?*

The majority of the API validation issues occur under the `path`
property.

434 errors are found under at the first level (the properties right
under `/paths`) ,which represents a small proportion of all `paths`
errors (0.2%), but are nonetheless important as they hide all underlying
content.

They can be categorized as follows:

- Regex mismatch: 335 (77.2%). Raised when the property name does not
  start with a / or x-, essentially not matching the JSON schema
  `'^/', '^x-'` regular expression. Note that the schema validation
  library aggregates all regex issues under a single error (not one per
  property).
- Not an object: 95 (21.9%). Raised when the `paths` property is not a
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
| REGEX    | 335 | 0.7718894 |
| NOTOBJ   |  95 | 0.2188940 |
| UNEVAL   |   4 | 0.0092166 |

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
