OAS Spectral Ruleset postman/postman-library
================
<sup>Last updated: 2023-03-01</sup>

<sup>*DISCLAIMER: the results and findings below are preliminary and
have not been fully validated or peer reviewed. Use with care. Do not
quote or disseminate.*</sup>

<sup>[Back to spectral](oas_spectral.md) \| [View related
issues](https://github.com/postman-open-technologies/knowledge-base/labels/oas%3Aspectral)</sup>

### Overview

Source code for this ruleset can be found at
<https://github.com/postman-open-technologies/knowledge-base/tree/main/spectral>

<a id="summary"></a>

### Summary

Spectral rule error rates for <u>schema validated APIs</u>. See below
for details and more granular analysis for each rule.

| rule                                                                                                                                                                                                                             | All<br/>(22,756) | OpenAPI2<br/>(7,555) | OpenAPI3<br/>(15,201) |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------:|:--------------------:|:---------------------:|
| [info-contact](#info-contact)<br/><sup>Ensures that all APIs have contact information.</sup>                                                                                                                                     |  14,812 (65.1%)  |    4,399 (58.2%)     |    10,413 (68.5%)     |
| [info-contact-email](#info-contact-email)<br/><sup>Ensures that all APIs have contact email.</sup>                                                                                                                               |   2,097 (9.2%)   |     975 (12.9%)      |     1,122 (7.4%)      |
| [info-contact-email-or-url](#info-contact-email-or-url)<br/><sup>Ensures that all APIs have contact URL or email.</sup>                                                                                                          |   1,161 (5.1%)   |      558 (7.4%)      |       603 (4%)        |
| [info-contact-name](#info-contact-name)<br/><sup>Ensures that all APIs have contact name.</sup>                                                                                                                                  |  3,147 (13.8%)   |    1,367 (18.1%)     |     1,780 (11.7%)     |
| [info-contact-url](#info-contact-url)<br/><sup>Ensures that all APIs have contact URL.</sup>                                                                                                                                     |   4,333 (19%)    |    1,884 (24.9%)     |     2,449 (16.1%)     |
| [info-description](#info-description)<br/><sup>Ensures that all OpenAPIs have a information description.</sup>                                                                                                                   |  7,428 (32.6%)   |     1,433 (19%)      |     5,995 (39.4%)     |
| [info-license](#info-license)<br/><sup>Ensures that all OpenAPIs have a information object license.</sup>                                                                                                                        |  14,348 (63.1%)  |    5,098 (67.5%)     |     9,250 (60.9%)     |
| [info-license-url](#info-license-url)<br/><sup>Ensures that all OpenAPIs have a information object license url.</sup>                                                                                                            |  3,056 (13.4%)   |      220 (2.9%)      |     2,836 (18.7%)     |
| [info-terms-of-service](#info-terms-of-service)<br/><sup>Ensures that all OpenAPIs have a information object terms of service.</sup>                                                                                             |  19,034 (83.6%)  |    5,799 (76.8%)     |    13,235 (87.1%)     |
| [no-response-body-on-204](#no-response-body-on-204)<br/><sup>Ensures that no 204 No Content response has a body.</sup>                                                                                                           |    393 (1.7%)    |      88 (1.2%)       |       305 (2%)        |
| [no-trailing-slash-on-paths](#no-trailing-slash-on-paths)<br/><sup>Ensures that there are no trailing slashes on paths.</sup>                                                                                                    |    1,357 (6%)    |      563 (7.5%)      |      794 (5.2%)       |
| [operations-description](#operations-description)<br/><sup>Ensures that each of the operations have a description.</sup>                                                                                                         |  12,225 (53.7%)  |    3,406 (45.1%)     |      8,819 (58%)      |
| [operations-status-code-2xx](#operations-status-code-2xx)<br/><sup>Ensures that each of the operations returns at least a 2xx HTTP status code.</sup>                                                                            |   1,562 (6.9%)   |      903 (12%)       |      659 (4.3%)       |
| [operations-status-code-5xx](#operations-status-code-5xx)<br/><sup>Ensures that each of the operations returns at least a 5xx HTTP status code.</sup>                                                                            |  18,178 (79.9%)  |    6,054 (80.1%)     |    12,124 (79.8%)     |
| [operations-summary](#operations-summary)<br/><sup>Ensures that each of the operations for an API have a summary.</sup>                                                                                                          |   6,138 (27%)    |    2,630 (34.8%)     |     3,508 (23.1%)     |
| [operations-summary-period-none](#operations-summary-period-none)<br/><sup>Ensures that each of the operations summaries do not have an ending period.</sup>                                                                     |   2,960 (13%)    |    1,197 (15.8%)     |     1,763 (11.6%)     |
| [parameters-description](#parameters-description)<br/><sup>Ensures that that all parameters have a descriptions.</sup>                                                                                                           |  7,224 (31.7%)   |    3,104 (41.1%)     |     4,120 (27.1%)     |
| [parameters-examples-any](#parameters-examples-any)<br/><sup>Ensures that that all parameters have a examples.</sup>                                                                                                             |  12,040 (52.9%)  |        0 (0%)        |    12,040 (79.2%)     |
| [request-bodies-examples-any](#request-bodies-examples-any)<br/><sup>Ensures that a example is always present for each request body (schema.example for Swagger 2, examples or example for OpenAPI 3).</sup>                     |  11,691 (51.4%)  |    4,560 (60.4%)     |     7,131 (46.9%)     |
| [request-body-on-patch](#request-body-on-patch)<br/><sup>Ensures that PATCH methods have request bodies.</sup>                                                                                                                   |    370 (1.6%)    |      163 (2.2%)      |      207 (1.4%)       |
| [request-body-on-post](#request-body-on-post)<br/><sup>Ensures that POST methods have request bodies.</sup>                                                                                                                      |  3,586 (15.8%)   |    1,498 (19.8%)     |     2,088 (13.7%)     |
| [request-body-on-put](#request-body-on-put)<br/><sup>Ensures that PUT methods have request bodies.</sup>                                                                                                                         |   1,299 (5.7%)   |      620 (8.2%)      |      679 (4.5%)       |
| [responses-examples-any](#responses-examples-any)<br/><sup>Ensuring all responses have examples (OpenAPI 3, Swagger 2) or example (OpenAPI 3) defined.</sup>                                                                     |  19,942 (87.6%)  |    7,212 (95.5%)     |    12,730 (83.7%)     |
| [reusable-schema-description](#reusable-schema-description)<br/><sup>Ensure all reusable schema should have a description.</sup>                                                                                                 |  17,552 (77.1%)  |    5,719 (75.7%)     |    11,833 (77.8%)     |
| [schema-properties-define-array-boundaries](#schema-properties-define-array-boundaries)<br/><sup>Requires that arrays have their minimum and maximum boundaries defined.</sup>                                                   |  14,442 (63.5%)  |     5,818 (77%)      |     8,624 (56.7%)     |
| [schema-properties-descriptions](#schema-properties-descriptions)<br/><sup>Ensure that all schemas properties should have a description.</sup>                                                                                   |  18,746 (82.4%)  |    5,962 (78.9%)     |    12,784 (84.1%)     |
| [schema-reference-reusable](#schema-reference-reusable)<br/><sup>Ensures all schema properties use a \$ref contain a \$ref targeting a reusable schema defined in definitions (Swagger 2) or components.schema (OpenAPI 3)</sup> |  17,200 (75.6%)  |    4,071 (53.9%)     |    13,129 (86.4%)     |

<a id="info-contact"></a>

### info-contact <sup>[🔝](#summary)</sup>

|             |                                                 |
|-------------|-------------------------------------------------|
| Description | Ensures that all APIs have contact information. |
| Severity    | error                                           |
| Message:    | API must have a contact information available.  |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that all APIs have contact information.
    message: API must have a contact information available.
    given: $.info
    severity: error
    formats:
    - oas2
    - oas3
    then:
      field: contact
      function: truthy

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 6,241 (84%) / 7,433<br/>invalid: 572 (44%) /
1,300<br/>all: 6,813 (78%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 796 (61.4%) / 1,296<br/>invalid: 253 (66.4%) /
381<br/>all: 1,049 (62.6%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 5,445 (88.7%) / 6,137<br/>invalid: 319 (34.7%) /
919<br/>all: 5,764 (81.7%) / 7,056</small>
</td>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 8,571 (55.9%) / 15,323<br/>invalid: 2,675 (55.1%) /
4,859<br/>all: 11,246 (55.7%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 3,603 (57.6%) / 6,259<br/>invalid: 958 (48.7%) /
1,967<br/>all: 4,561 (55.4%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 4,968 (54.8%) / 9,064<br/>invalid: 1,717 (59.4%) /
2,892<br/>all: 6,685 (55.9%) / 11,956</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 14,812 (65.1%) / 22,756<br/>invalid: 3,247 (52.7%) /
6,159<br/>all: 18,059 (62.5%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 4,399 (58.2%) / 7,555<br/>invalid: 1,211 (51.6%) /
2,348<br/>all: 5,610 (56.6%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 10,413 (68.5%) / 15,201<br/>invalid: 2,036 (53.4%) /
3,811<br/>all: 12,449 (65.5%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

| attachment_type                  | code         | collection_id | class    | is_valid | n_apis | n_err |
|:---------------------------------|:-------------|:--------------|:---------|:---------|-------:|------:|
| spectral/postman/postman-library | info-contact | postman_apis  | OpenAPI3 | true     |   5445 |  5445 |
| spectral/postman/postman-library | info-contact | kin           | OpenAPI3 | true     |   4968 |  4968 |
| spectral/postman/postman-library | info-contact | kin           | OpenAPI2 | true     |   3603 |  3603 |
| spectral/postman/postman-library | info-contact | kin           | OpenAPI3 | false    |   1717 |  1717 |
| spectral/postman/postman-library | info-contact | kin           | OpenAPI2 | false    |    958 |   958 |
| spectral/postman/postman-library | info-contact | postman_apis  | OpenAPI2 | true     |    796 |   796 |
| spectral/postman/postman-library | info-contact | postman_apis  | OpenAPI3 | false    |    319 |   319 |
| spectral/postman/postman-library | info-contact | postman_apis  | OpenAPI2 | false    |    253 |   253 |

</details>

<a id="info-contact-email"></a>

### info-contact-email <sup>[🔝](#summary)</sup>

|             |                                           |
|-------------|-------------------------------------------|
| Description | Ensures that all APIs have contact email. |
| Severity    | error                                     |
| Message:    | API must have a contact email available.  |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that all APIs have contact email.
    message: API must have a contact email available.
    given: $.info.contact
    severity: error
    formats:
    - oas2
    - oas3
    then:
      field: email
      function: truthy

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 1,683 (11%) / 15,323<br/>invalid: 455 (9.4%) /
4,859<br/>all: 2,138 (10.6%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 774 (12.4%) / 6,259<br/>invalid: 293 (14.9%) /
1,967<br/>all: 1,067 (13%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 909 (10%) / 9,064<br/>invalid: 162 (5.6%) / 2,892<br/>all:
1,071 (9%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 414 (5.6%) / 7,433<br/>invalid: 117 (9%) / 1,300<br/>all:
531 (6.1%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 201 (15.5%) / 1,296<br/>invalid: 65 (17.1%) / 381<br/>all:
266 (15.9%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 213 (3.5%) / 6,137<br/>invalid: 52 (5.7%) / 919<br/>all:
265 (3.8%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 2,097 (9.2%) / 22,756<br/>invalid: 572 (9.3%) /
6,159<br/>all: 2,669 (9.2%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 975 (12.9%) / 7,555<br/>invalid: 358 (15.2%) /
2,348<br/>all: 1,333 (13.5%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 1,122 (7.4%) / 15,201<br/>invalid: 214 (5.6%) /
3,811<br/>all: 1,336 (7%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code               | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-------------------|:--------------|:---------|:---------|-------:|------:|
| 9   | spectral/postman/postman-library | info-contact-email | kin           | OpenAPI3 | true     |    909 |   909 |
| 10  | spectral/postman/postman-library | info-contact-email | kin           | OpenAPI2 | true     |    774 |   774 |
| 11  | spectral/postman/postman-library | info-contact-email | kin           | OpenAPI2 | false    |    293 |   293 |
| 12  | spectral/postman/postman-library | info-contact-email | postman_apis  | OpenAPI3 | true     |    213 |   213 |
| 13  | spectral/postman/postman-library | info-contact-email | postman_apis  | OpenAPI2 | true     |    201 |   201 |
| 14  | spectral/postman/postman-library | info-contact-email | kin           | OpenAPI3 | false    |    162 |   162 |
| 15  | spectral/postman/postman-library | info-contact-email | postman_apis  | OpenAPI2 | false    |     65 |    65 |
| 16  | spectral/postman/postman-library | info-contact-email | postman_apis  | OpenAPI3 | false    |     52 |    52 |

</details>

<a id="info-contact-email-or-url"></a>

### info-contact-email-or-url <sup>[🔝](#summary)</sup>

|             |                                                  |
|-------------|--------------------------------------------------|
| Description | Ensures that all APIs have contact URL or email. |
| Severity    | error                                            |
| Message:    | API must have a contact URL or email available.  |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that all APIs have contact URL or email.
    message: API must have a contact URL or email available.
    given: $.info.contact
    severity: error
    formats:
    - oas2
    - oas3
    then:
      function: schema
      functionOptions:
        schema:
          anyOf:
          - required: url
          - required: email

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 927 (6%) / 15,323<br/>invalid: 234 (4.8%) / 4,859<br/>all:
1,161 (5.8%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 462 (7.4%) / 6,259<br/>invalid: 154 (7.8%) /
1,967<br/>all: 616 (7.5%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 465 (5.1%) / 9,064<br/>invalid: 80 (2.8%) / 2,892<br/>all:
545 (4.6%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 234 (3.1%) / 7,433<br/>invalid: 89 (6.8%) / 1,300<br/>all:
323 (3.7%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 96 (7.4%) / 1,296<br/>invalid: 52 (13.6%) / 381<br/>all:
148 (8.8%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 138 (2.2%) / 6,137<br/>invalid: 37 (4%) / 919<br/>all: 175
(2.5%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 1,161 (5.1%) / 22,756<br/>invalid: 323 (5.2%) /
6,159<br/>all: 1,484 (5.1%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 558 (7.4%) / 7,555<br/>invalid: 206 (8.8%) /
2,348<br/>all: 764 (7.7%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 603 (4%) / 15,201<br/>invalid: 117 (3.1%) / 3,811<br/>all:
720 (3.8%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                      | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:--------------------------|:--------------|:---------|:---------|-------:|------:|
| 17  | spectral/postman/postman-library | info-contact-email-or-url | kin           | OpenAPI3 | true     |    465 |   465 |
| 18  | spectral/postman/postman-library | info-contact-email-or-url | kin           | OpenAPI2 | true     |    462 |   462 |
| 19  | spectral/postman/postman-library | info-contact-email-or-url | kin           | OpenAPI2 | false    |    154 |   154 |
| 20  | spectral/postman/postman-library | info-contact-email-or-url | postman_apis  | OpenAPI3 | true     |    138 |   138 |
| 21  | spectral/postman/postman-library | info-contact-email-or-url | postman_apis  | OpenAPI2 | true     |     96 |    96 |
| 22  | spectral/postman/postman-library | info-contact-email-or-url | kin           | OpenAPI3 | false    |     80 |    80 |
| 23  | spectral/postman/postman-library | info-contact-email-or-url | postman_apis  | OpenAPI2 | false    |     52 |    52 |
| 24  | spectral/postman/postman-library | info-contact-email-or-url | postman_apis  | OpenAPI3 | false    |     37 |    37 |

</details>

<a id="info-contact-name"></a>

### info-contact-name <sup>[🔝](#summary)</sup>

|             |                                          |
|-------------|------------------------------------------|
| Description | Ensures that all APIs have contact name. |
| Severity    | error                                    |
| Message:    | API must have a contact name available.  |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that all APIs have contact name.
    message: API must have a contact name available.
    given: $.info.contact
    severity: error
    formats:
    - oas2
    - oas3
    then:
      field: name
      function: truthy

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 2,675 (17.5%) / 15,323<br/>invalid: 816 (16.8%) /
4,859<br/>all: 3,491 (17.3%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 1,117 (17.8%) / 6,259<br/>invalid: 352 (17.9%) /
1,967<br/>all: 1,469 (17.9%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 1,558 (17.2%) / 9,064<br/>invalid: 464 (16%) /
2,892<br/>all: 2,022 (16.9%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 472 (6.4%) / 7,433<br/>invalid: 95 (7.3%) / 1,300<br/>all:
567 (6.5%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 250 (19.3%) / 1,296<br/>invalid: 49 (12.9%) / 381<br/>all:
299 (17.8%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 222 (3.6%) / 6,137<br/>invalid: 46 (5%) / 919<br/>all: 268
(3.8%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 3,147 (13.8%) / 22,756<br/>invalid: 911 (14.8%) /
6,159<br/>all: 4,058 (14%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 1,367 (18.1%) / 7,555<br/>invalid: 401 (17.1%) /
2,348<br/>all: 1,768 (17.9%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 1,780 (11.7%) / 15,201<br/>invalid: 510 (13.4%) /
3,811<br/>all: 2,290 (12%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code              | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:------------------|:--------------|:---------|:---------|-------:|------:|
| 25  | spectral/postman/postman-library | info-contact-name | kin           | OpenAPI3 | true     |   1558 |  1558 |
| 26  | spectral/postman/postman-library | info-contact-name | kin           | OpenAPI2 | true     |   1117 |  1117 |
| 27  | spectral/postman/postman-library | info-contact-name | kin           | OpenAPI3 | false    |    464 |   464 |
| 28  | spectral/postman/postman-library | info-contact-name | kin           | OpenAPI2 | false    |    352 |   352 |
| 29  | spectral/postman/postman-library | info-contact-name | postman_apis  | OpenAPI2 | true     |    250 |   250 |
| 30  | spectral/postman/postman-library | info-contact-name | postman_apis  | OpenAPI3 | true     |    222 |   222 |
| 31  | spectral/postman/postman-library | info-contact-name | postman_apis  | OpenAPI2 | false    |     49 |    49 |
| 32  | spectral/postman/postman-library | info-contact-name | postman_apis  | OpenAPI3 | false    |     46 |    46 |

</details>

<a id="info-contact-url"></a>

### info-contact-url <sup>[🔝](#summary)</sup>

|             |                                         |
|-------------|-----------------------------------------|
| Description | Ensures that all APIs have contact URL. |
| Severity    | error                                   |
| Message:    | API must have a contact URL available.  |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that all APIs have contact URL.
    message: API must have a contact URL available.
    given: $.info.contact
    severity: error
    formats:
    - oas2
    - oas3
    then:
      field: url
      function: truthy

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 3,619 (23.6%) / 15,323<br/>invalid: 1,088 (22.4%) /
4,859<br/>all: 4,707 (23.3%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 1,547 (24.7%) / 6,259<br/>invalid: 442 (22.5%) /
1,967<br/>all: 1,989 (24.2%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 2,072 (22.9%) / 9,064<br/>invalid: 646 (22.3%) /
2,892<br/>all: 2,718 (22.7%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 714 (9.6%) / 7,433<br/>invalid: 161 (12.4%) /
1,300<br/>all: 875 (10%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 337 (26%) / 1,296<br/>invalid: 83 (21.8%) / 381<br/>all:
420 (25%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 377 (6.1%) / 6,137<br/>invalid: 78 (8.5%) / 919<br/>all:
455 (6.4%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 4,333 (19%) / 22,756<br/>invalid: 1,249 (20.3%) /
6,159<br/>all: 5,582 (19.3%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 1,884 (24.9%) / 7,555<br/>invalid: 525 (22.4%) /
2,348<br/>all: 2,409 (24.3%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 2,449 (16.1%) / 15,201<br/>invalid: 724 (19%) /
3,811<br/>all: 3,173 (16.7%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code             | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-----------------|:--------------|:---------|:---------|-------:|------:|
| 33  | spectral/postman/postman-library | info-contact-url | kin           | OpenAPI3 | true     |   2072 |  2072 |
| 34  | spectral/postman/postman-library | info-contact-url | kin           | OpenAPI2 | true     |   1547 |  1547 |
| 35  | spectral/postman/postman-library | info-contact-url | kin           | OpenAPI3 | false    |    646 |   646 |
| 36  | spectral/postman/postman-library | info-contact-url | kin           | OpenAPI2 | false    |    442 |   442 |
| 37  | spectral/postman/postman-library | info-contact-url | postman_apis  | OpenAPI3 | true     |    377 |   377 |
| 38  | spectral/postman/postman-library | info-contact-url | postman_apis  | OpenAPI2 | true     |    337 |   337 |
| 39  | spectral/postman/postman-library | info-contact-url | postman_apis  | OpenAPI2 | false    |     83 |    83 |
| 40  | spectral/postman/postman-library | info-contact-url | postman_apis  | OpenAPI3 | false    |     78 |    78 |

</details>

<a id="info-description"></a>

### info-description <sup>[🔝](#summary)</sup>

|             |                                                           |
|-------------|-----------------------------------------------------------|
| Description | Ensures that all OpenAPIs have a information description. |
| Severity    | warn                                                      |
| Message:    | The info object should have a description.                |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that all OpenAPIs have a information description.
    message: The info object should have a description.
    given: $.info
    severity: warn
    formats:
    - oas2
    - oas3
    then:
      field: description
      function: truthy

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 4,061 (54.6%) / 7,433<br/>invalid: 436 (33.5%) /
1,300<br/>all: 4,497 (51.5%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 256 (19.8%) / 1,296<br/>invalid: 155 (40.7%) /
381<br/>all: 411 (24.5%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 3,805 (62%) / 6,137<br/>invalid: 281 (30.6%) /
919<br/>all: 4,086 (57.9%) / 7,056</small>
</td>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 3,367 (22%) / 15,323<br/>invalid: 1,032 (21.2%) /
4,859<br/>all: 4,399 (21.8%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 1,177 (18.8%) / 6,259<br/>invalid: 350 (17.8%) /
1,967<br/>all: 1,527 (18.6%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 2,190 (24.2%) / 9,064<br/>invalid: 682 (23.6%) /
2,892<br/>all: 2,872 (24%) / 11,956</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 7,428 (32.6%) / 22,756<br/>invalid: 1,468 (23.8%) /
6,159<br/>all: 8,896 (30.8%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 1,433 (19%) / 7,555<br/>invalid: 505 (21.5%) /
2,348<br/>all: 1,938 (19.6%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 5,995 (39.4%) / 15,201<br/>invalid: 963 (25.3%) /
3,811<br/>all: 6,958 (36.6%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code             | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-----------------|:--------------|:---------|:---------|-------:|------:|
| 41  | spectral/postman/postman-library | info-description | postman_apis  | OpenAPI3 | true     |   3805 |  3805 |
| 42  | spectral/postman/postman-library | info-description | kin           | OpenAPI3 | true     |   2190 |  2190 |
| 43  | spectral/postman/postman-library | info-description | kin           | OpenAPI2 | true     |   1177 |  1177 |
| 44  | spectral/postman/postman-library | info-description | kin           | OpenAPI3 | false    |    682 |   682 |
| 45  | spectral/postman/postman-library | info-description | kin           | OpenAPI2 | false    |    350 |   350 |
| 46  | spectral/postman/postman-library | info-description | postman_apis  | OpenAPI3 | false    |    281 |   281 |
| 47  | spectral/postman/postman-library | info-description | postman_apis  | OpenAPI2 | true     |    256 |   256 |
| 48  | spectral/postman/postman-library | info-description | postman_apis  | OpenAPI2 | false    |    155 |   155 |

</details>

<a id="info-license"></a>

### info-license <sup>[🔝](#summary)</sup>

|             |                                                              |
|-------------|--------------------------------------------------------------|
| Description | Ensures that all OpenAPIs have a information object license. |
| Severity    | warn                                                         |
| Message:    | The info object should have a license.                       |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that all OpenAPIs have a information object license.
    message: The info object should have a license.
    given: $.info
    severity: warn
    formats:
    - oas2
    - oas3
    then:
      field: license
      function: truthy

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 10,024 (65.4%) / 15,323<br/>invalid: 3,058 (62.9%) /
4,859<br/>all: 13,082 (64.8%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 4,169 (66.6%) / 6,259<br/>invalid: 1,156 (58.8%) /
1,967<br/>all: 5,325 (64.7%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 5,855 (64.6%) / 9,064<br/>invalid: 1,902 (65.8%) /
2,892<br/>all: 7,757 (64.9%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 4,324 (58.2%) / 7,433<br/>invalid: 604 (46.5%) /
1,300<br/>all: 4,928 (56.4%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 929 (71.7%) / 1,296<br/>invalid: 288 (75.6%) /
381<br/>all: 1,217 (72.6%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 3,395 (55.3%) / 6,137<br/>invalid: 316 (34.4%) /
919<br/>all: 3,711 (52.6%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 14,348 (63.1%) / 22,756<br/>invalid: 3,662 (59.5%) /
6,159<br/>all: 18,010 (62.3%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 5,098 (67.5%) / 7,555<br/>invalid: 1,444 (61.5%) /
2,348<br/>all: 6,542 (66.1%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 9,250 (60.9%) / 15,201<br/>invalid: 2,218 (58.2%) /
3,811<br/>all: 11,468 (60.3%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code         | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-------------|:--------------|:---------|:---------|-------:|------:|
| 49  | spectral/postman/postman-library | info-license | kin           | OpenAPI3 | true     |   5855 |  5855 |
| 50  | spectral/postman/postman-library | info-license | kin           | OpenAPI2 | true     |   4169 |  4169 |
| 51  | spectral/postman/postman-library | info-license | postman_apis  | OpenAPI3 | true     |   3395 |  3395 |
| 52  | spectral/postman/postman-library | info-license | kin           | OpenAPI3 | false    |   1902 |  1902 |
| 53  | spectral/postman/postman-library | info-license | kin           | OpenAPI2 | false    |   1156 |  1156 |
| 54  | spectral/postman/postman-library | info-license | postman_apis  | OpenAPI2 | true     |    929 |   929 |
| 55  | spectral/postman/postman-library | info-license | postman_apis  | OpenAPI3 | false    |    316 |   316 |
| 56  | spectral/postman/postman-library | info-license | postman_apis  | OpenAPI2 | false    |    288 |   288 |

</details>

<a id="info-license-url"></a>

### info-license-url <sup>[🔝](#summary)</sup>

|             |                                                                  |
|-------------|------------------------------------------------------------------|
| Description | Ensures that all OpenAPIs have a information object license url. |
| Severity    | warn                                                             |
| Message:    | The info object should have a license url.                       |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that all OpenAPIs have a information object license url.
    message: The info object should have a license url.
    given: $.info.license
    severity: warn
    formats:
    - oas2
    - oas3
    then:
      field: url
      function: truthy

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 2,523 (33.9%) / 7,433<br/>invalid: 147 (11.3%) /
1,300<br/>all: 2,670 (30.6%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 51 (3.9%) / 1,296<br/>invalid: 42 (11%) / 381<br/>all: 93
(5.5%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 2,472 (40.3%) / 6,137<br/>invalid: 105 (11.4%) /
919<br/>all: 2,577 (36.5%) / 7,056</small>
</td>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 533 (3.5%) / 15,323<br/>invalid: 191 (3.9%) /
4,859<br/>all: 724 (3.6%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 169 (2.7%) / 6,259<br/>invalid: 64 (3.3%) / 1,967<br/>all:
233 (2.8%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 364 (4%) / 9,064<br/>invalid: 127 (4.4%) / 2,892<br/>all:
491 (4.1%) / 11,956</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 3,056 (13.4%) / 22,756<br/>invalid: 338 (5.5%) /
6,159<br/>all: 3,394 (11.7%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 220 (2.9%) / 7,555<br/>invalid: 106 (4.5%) /
2,348<br/>all: 326 (3.3%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 2,836 (18.7%) / 15,201<br/>invalid: 232 (6.1%) /
3,811<br/>all: 3,068 (16.1%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code             | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-----------------|:--------------|:---------|:---------|-------:|------:|
| 57  | spectral/postman/postman-library | info-license-url | postman_apis  | OpenAPI3 | true     |   2472 |  2472 |
| 58  | spectral/postman/postman-library | info-license-url | kin           | OpenAPI3 | true     |    364 |   364 |
| 59  | spectral/postman/postman-library | info-license-url | kin           | OpenAPI2 | true     |    169 |   169 |
| 60  | spectral/postman/postman-library | info-license-url | kin           | OpenAPI3 | false    |    127 |   127 |
| 61  | spectral/postman/postman-library | info-license-url | postman_apis  | OpenAPI3 | false    |    105 |   105 |
| 62  | spectral/postman/postman-library | info-license-url | kin           | OpenAPI2 | false    |     64 |    64 |
| 63  | spectral/postman/postman-library | info-license-url | postman_apis  | OpenAPI2 | true     |     51 |    51 |
| 64  | spectral/postman/postman-library | info-license-url | postman_apis  | OpenAPI2 | false    |     42 |    42 |

</details>

<a id="info-terms-of-service"></a>

### info-terms-of-service <sup>[🔝](#summary)</sup>

|             |                                                                       |
|-------------|-----------------------------------------------------------------------|
| Description | Ensures that all OpenAPIs have a information object terms of service. |
| Severity    | warn                                                                  |
| Message:    | The info object should have a terms of service.                       |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that all OpenAPIs have a information object terms of service.
    message: The info object should have a terms of service.
    given: $.info
    severity: warn
    formats:
    - oas2
    - oas3
    then:
      field: termsOfService
      function: truthy

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 12,166 (79.4%) / 15,323<br/>invalid: 3,557 (73.2%) /
4,859<br/>all: 15,723 (77.9%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 4,853 (77.5%) / 6,259<br/>invalid: 1,312 (66.7%) /
1,967<br/>all: 6,165 (74.9%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 7,313 (80.7%) / 9,064<br/>invalid: 2,245 (77.6%) /
2,892<br/>all: 9,558 (79.9%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 6,868 (92.4%) / 7,433<br/>invalid: 999 (76.8%) /
1,300<br/>all: 7,867 (90.1%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 946 (73%) / 1,296<br/>invalid: 298 (78.2%) / 381<br/>all:
1,244 (74.2%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 5,922 (96.5%) / 6,137<br/>invalid: 701 (76.3%) /
919<br/>all: 6,623 (93.9%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 19,034 (83.6%) / 22,756<br/>invalid: 4,556 (74%) /
6,159<br/>all: 23,590 (81.6%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 5,799 (76.8%) / 7,555<br/>invalid: 1,610 (68.6%) /
2,348<br/>all: 7,409 (74.8%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 13,235 (87.1%) / 15,201<br/>invalid: 2,946 (77.3%) /
3,811<br/>all: 16,181 (85.1%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                  | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:----------------------|:--------------|:---------|:---------|-------:|------:|
| 65  | spectral/postman/postman-library | info-terms-of-service | kin           | OpenAPI3 | true     |   7313 |  7313 |
| 66  | spectral/postman/postman-library | info-terms-of-service | postman_apis  | OpenAPI3 | true     |   5922 |  5922 |
| 67  | spectral/postman/postman-library | info-terms-of-service | kin           | OpenAPI2 | true     |   4853 |  4853 |
| 68  | spectral/postman/postman-library | info-terms-of-service | kin           | OpenAPI3 | false    |   2245 |  2245 |
| 69  | spectral/postman/postman-library | info-terms-of-service | kin           | OpenAPI2 | false    |   1312 |  1312 |
| 70  | spectral/postman/postman-library | info-terms-of-service | postman_apis  | OpenAPI2 | true     |    946 |   946 |
| 71  | spectral/postman/postman-library | info-terms-of-service | postman_apis  | OpenAPI3 | false    |    701 |   701 |
| 72  | spectral/postman/postman-library | info-terms-of-service | postman_apis  | OpenAPI2 | false    |    298 |   298 |

</details>

<a id="no-response-body-on-204"></a>

### no-response-body-on-204 <sup>[🔝](#summary)</sup>

|             |                                                     |
|-------------|-----------------------------------------------------|
| Description | Ensures that no 204 No Content response has a body. |
| Severity    | error                                               |
| Message:    | A 204 No Content response can’t have a body.        |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that no 204 No Content response has a body.
    message: A 204 No Content response can't have a body.
    given: $.paths.*.*.responses.204
    severity: error
    formats:
    - oas2
    - oas3
    then:
    - field: schema
      function: falsy
    - field: content
      function: falsy

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 285 (1.9%) / 15,323<br/>invalid: 145 (3%) / 4,859<br/>all:
430 (2.1%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 71 (1.1%) / 6,259<br/>invalid: 33 (1.7%) / 1,967<br/>all:
104 (1.3%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 214 (2.4%) / 9,064<br/>invalid: 112 (3.9%) /
2,892<br/>all: 326 (2.7%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 108 (1.5%) / 7,433<br/>invalid: 73 (5.6%) / 1,300<br/>all:
181 (2.1%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 17 (1.3%) / 1,296<br/>invalid: 28 (7.3%) / 381<br/>all: 45
(2.7%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 91 (1.5%) / 6,137<br/>invalid: 45 (4.9%) / 919<br/>all:
136 (1.9%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 393 (1.7%) / 22,756<br/>invalid: 218 (3.5%) /
6,159<br/>all: 611 (2.1%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 88 (1.2%) / 7,555<br/>invalid: 61 (2.6%) / 2,348<br/>all:
149 (1.5%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 305 (2%) / 15,201<br/>invalid: 157 (4.1%) / 3,811<br/>all:
462 (2.4%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                    | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:------------------------|:--------------|:---------|:---------|-------:|------:|
| 73  | spectral/postman/postman-library | no-response-body-on-204 | kin           | OpenAPI3 | true     |    214 |   578 |
| 74  | spectral/postman/postman-library | no-response-body-on-204 | kin           | OpenAPI3 | false    |    112 |   684 |
| 75  | spectral/postman/postman-library | no-response-body-on-204 | postman_apis  | OpenAPI3 | true     |     91 |   587 |
| 76  | spectral/postman/postman-library | no-response-body-on-204 | kin           | OpenAPI2 | true     |     71 |   159 |
| 77  | spectral/postman/postman-library | no-response-body-on-204 | postman_apis  | OpenAPI3 | false    |     45 |   623 |
| 78  | spectral/postman/postman-library | no-response-body-on-204 | kin           | OpenAPI2 | false    |     33 |   129 |
| 79  | spectral/postman/postman-library | no-response-body-on-204 | postman_apis  | OpenAPI2 | false    |     28 |   861 |
| 80  | spectral/postman/postman-library | no-response-body-on-204 | postman_apis  | OpenAPI2 | true     |     17 |    60 |

</details>

<a id="no-trailing-slash-on-paths"></a>

### no-trailing-slash-on-paths <sup>[🔝](#summary)</sup>

|             |                                                      |
|-------------|------------------------------------------------------|
| Description | Ensures that there are no trailing slashes on paths. |
| Severity    | error                                                |
| Message:    | There should be no trailing slashes on paths.        |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that there are no trailing slashes on paths.
    message: There should be no trailing slashes on paths.
    given: $.paths.*~
    severity: error
    formats:
    - oas2
    - oas3
    then:
      function: pattern
      functionOptions:
        notMatch: .+\/$

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 960 (6.3%) / 15,323<br/>invalid: 412 (8.5%) /
4,859<br/>all: 1,372 (6.8%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 384 (6.1%) / 6,259<br/>invalid: 175 (8.9%) /
1,967<br/>all: 559 (6.8%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 576 (6.4%) / 9,064<br/>invalid: 237 (8.2%) /
2,892<br/>all: 813 (6.8%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 397 (5.3%) / 7,433<br/>invalid: 131 (10.1%) /
1,300<br/>all: 528 (6%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 179 (13.8%) / 1,296<br/>invalid: 43 (11.3%) / 381<br/>all:
222 (13.2%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 218 (3.6%) / 6,137<br/>invalid: 88 (9.6%) / 919<br/>all:
306 (4.3%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 1,357 (6%) / 22,756<br/>invalid: 543 (8.8%) /
6,159<br/>all: 1,900 (6.6%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 563 (7.5%) / 7,555<br/>invalid: 218 (9.3%) /
2,348<br/>all: 781 (7.9%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 794 (5.2%) / 15,201<br/>invalid: 325 (8.5%) /
3,811<br/>all: 1,119 (5.9%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                       | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:---------------------------|:--------------|:---------|:---------|-------:|------:|
| 81  | spectral/postman/postman-library | no-trailing-slash-on-paths | kin           | OpenAPI3 | true     |    576 |  2972 |
| 82  | spectral/postman/postman-library | no-trailing-slash-on-paths | kin           | OpenAPI2 | true     |    384 |  3063 |
| 83  | spectral/postman/postman-library | no-trailing-slash-on-paths | kin           | OpenAPI3 | false    |    237 |  1486 |
| 84  | spectral/postman/postman-library | no-trailing-slash-on-paths | postman_apis  | OpenAPI3 | true     |    218 |  1067 |
| 85  | spectral/postman/postman-library | no-trailing-slash-on-paths | postman_apis  | OpenAPI2 | true     |    179 |  2401 |
| 86  | spectral/postman/postman-library | no-trailing-slash-on-paths | kin           | OpenAPI2 | false    |    175 |   943 |
| 87  | spectral/postman/postman-library | no-trailing-slash-on-paths | postman_apis  | OpenAPI3 | false    |     88 |   823 |
| 88  | spectral/postman/postman-library | no-trailing-slash-on-paths | postman_apis  | OpenAPI2 | false    |     43 |   461 |

</details>

<a id="operations-description"></a>

### operations-description <sup>[🔝](#summary)</sup>

|             |                                                         |
|-------------|---------------------------------------------------------|
| Description | Ensures that each of the operations have a description. |
| Severity    | warn                                                    |
| Message:    | Your operations all need descriptions.                  |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that each of the operations have a description.
    message: Your operations all need descriptions.
    given: $.paths.*[get,post,patch,put,delete,options,head,trace]
    severity: warn
    formats:
    - oas2
    - oas3
    then:
    - field: description
      function: truthy

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 5,457 (73.4%) / 7,433<br/>invalid: 543 (41.8%) /
1,300<br/>all: 6,000 (68.7%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 691 (53.3%) / 1,296<br/>invalid: 192 (50.4%) /
381<br/>all: 883 (52.7%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 4,766 (77.7%) / 6,137<br/>invalid: 351 (38.2%) /
919<br/>all: 5,117 (72.5%) / 7,056</small>
</td>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 6,768 (44.2%) / 15,323<br/>invalid: 2,096 (43.1%) /
4,859<br/>all: 8,864 (43.9%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 2,715 (43.4%) / 6,259<br/>invalid: 857 (43.6%) /
1,967<br/>all: 3,572 (43.4%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 4,053 (44.7%) / 9,064<br/>invalid: 1,239 (42.8%) /
2,892<br/>all: 5,292 (44.3%) / 11,956</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 12,225 (53.7%) / 22,756<br/>invalid: 2,639 (42.8%) /
6,159<br/>all: 14,864 (51.4%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 3,406 (45.1%) / 7,555<br/>invalid: 1,049 (44.7%) /
2,348<br/>all: 4,455 (45%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 8,819 (58%) / 15,201<br/>invalid: 1,590 (41.7%) /
3,811<br/>all: 10,409 (54.7%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                   | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-----------------------|:--------------|:---------|:---------|-------:|------:|
| 89  | spectral/postman/postman-library | operations-description | postman_apis  | OpenAPI3 | true     |   4766 | 41717 |
| 90  | spectral/postman/postman-library | operations-description | kin           | OpenAPI3 | true     |   4053 | 42801 |
| 91  | spectral/postman/postman-library | operations-description | kin           | OpenAPI2 | true     |   2715 | 29404 |
| 92  | spectral/postman/postman-library | operations-description | kin           | OpenAPI3 | false    |   1239 | 18941 |
| 93  | spectral/postman/postman-library | operations-description | kin           | OpenAPI2 | false    |    857 | 12389 |
| 94  | spectral/postman/postman-library | operations-description | postman_apis  | OpenAPI2 | true     |    691 | 22833 |
| 95  | spectral/postman/postman-library | operations-description | postman_apis  | OpenAPI3 | false    |    351 | 10602 |
| 96  | spectral/postman/postman-library | operations-description | postman_apis  | OpenAPI2 | false    |    192 | 30461 |

</details>

<a id="operations-status-code-2xx"></a>

### operations-status-code-2xx <sup>[🔝](#summary)</sup>

|             |                                                                              |
|-------------|------------------------------------------------------------------------------|
| Description | Ensures that each of the operations returns at least a 2xx HTTP status code. |
| Severity    | warn                                                                         |
| Message:    | Operation should return a 2xx HTTP status code                               |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that each of the operations returns at least a 2xx HTTP status
      code.
    message: Operation should return a 2xx HTTP status code
    given: $.paths.*.*.responses
    severity: warn
    formats:
    - oas2
    - oas3
    then:
      function: schema
      functionOptions:
        schema:
          $schema: https://json-schema.org/draft/2020-12/schema
          anyOf:
          - required: 2XX
            properties:
              2XX: yes
          - required: '200'
            properties:
              '200': yes
          - required: '201'
            properties:
              '201': yes
          - required: '202'
            properties:
              '202': yes
          - required: '203'
            properties:
              '203': yes
          - required: '204'
            properties:
              '204': yes
          - required: '205'
            properties:
              '205': yes
          - required: '206'
            properties:
              '206': yes
          - required: '207'
            properties:
              '207': yes
          - required: '208'
            properties:
              '208': yes
          - required: '226'
            properties:
              '226': yes

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 1,208 (7.9%) / 15,323<br/>invalid: 443 (9.1%) /
4,859<br/>all: 1,651 (8.2%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 690 (11%) / 6,259<br/>invalid: 249 (12.7%) /
1,967<br/>all: 939 (11.4%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 518 (5.7%) / 9,064<br/>invalid: 194 (6.7%) /
2,892<br/>all: 712 (6%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 354 (4.8%) / 7,433<br/>invalid: 90 (6.9%) / 1,300<br/>all:
444 (5.1%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 213 (16.4%) / 1,296<br/>invalid: 33 (8.7%) / 381<br/>all:
246 (14.7%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 141 (2.3%) / 6,137<br/>invalid: 57 (6.2%) / 919<br/>all:
198 (2.8%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 1,562 (6.9%) / 22,756<br/>invalid: 533 (8.7%) /
6,159<br/>all: 2,095 (7.2%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 903 (12%) / 7,555<br/>invalid: 282 (12%) / 2,348<br/>all:
1,185 (12%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 659 (4.3%) / 15,201<br/>invalid: 251 (6.6%) /
3,811<br/>all: 910 (4.8%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                       | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:---------------------------|:--------------|:---------|:---------|-------:|------:|
| 97  | spectral/postman/postman-library | operations-status-code-2xx | kin           | OpenAPI2 | true     |    690 |  4638 |
| 98  | spectral/postman/postman-library | operations-status-code-2xx | kin           | OpenAPI3 | true     |    518 |  7913 |
| 99  | spectral/postman/postman-library | operations-status-code-2xx | kin           | OpenAPI2 | false    |    249 |  2250 |
| 100 | spectral/postman/postman-library | operations-status-code-2xx | postman_apis  | OpenAPI2 | true     |    213 |  2341 |
| 101 | spectral/postman/postman-library | operations-status-code-2xx | kin           | OpenAPI3 | false    |    194 |  2223 |
| 102 | spectral/postman/postman-library | operations-status-code-2xx | postman_apis  | OpenAPI3 | true     |    141 |  2288 |
| 103 | spectral/postman/postman-library | operations-status-code-2xx | postman_apis  | OpenAPI3 | false    |     57 |  1610 |
| 104 | spectral/postman/postman-library | operations-status-code-2xx | postman_apis  | OpenAPI2 | false    |     33 |  2395 |

</details>

<a id="operations-status-code-5xx"></a>

### operations-status-code-5xx <sup>[🔝](#summary)</sup>

|             |                                                                              |
|-------------|------------------------------------------------------------------------------|
| Description | Ensures that each of the operations returns at least a 5xx HTTP status code. |
| Severity    | warn                                                                         |
| Message:    | Operation should return a 5xx HTTP status code                               |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that each of the operations returns at least a 5xx HTTP status
      code.
    message: Operation should return a 5xx HTTP status code
    given: $.paths.*.*.responses
    severity: warn
    formats:
    - oas2
    - oas3
    then:
      function: schema
      functionOptions:
        schema:
          $schema: https://json-schema.org/draft/2020-12/schema
          anyOf:
          - required: '500'
            properties:
              '500': yes
          - required: '501'
            properties:
              '501': yes
          - required: '502'
            properties:
              '502': yes
          - required: '503'
            properties:
              '503': yes
          - required: '504'
            properties:
              '504': yes
          - required: '505'
            properties:
              '505': yes
          - required: '506'
            properties:
              '506': yes
          - required: '507'
            properties:
              '507': yes
          - required: '508'
            properties:
              '508': yes
          - required: '510'
            properties:
              '510': yes
          - required: '511'
            properties:
              '511': yes

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 11,965 (78.1%) / 15,323<br/>invalid: 3,250 (66.9%) /
4,859<br/>all: 15,215 (75.4%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 5,103 (81.5%) / 6,259<br/>invalid: 1,332 (67.7%) /
1,967<br/>all: 6,435 (78.2%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 6,862 (75.7%) / 9,064<br/>invalid: 1,918 (66.3%) /
2,892<br/>all: 8,780 (73.4%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 6,213 (83.6%) / 7,433<br/>invalid: 762 (58.6%) /
1,300<br/>all: 6,975 (79.9%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 951 (73.4%) / 1,296<br/>invalid: 356 (93.4%) /
381<br/>all: 1,307 (77.9%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 5,262 (85.7%) / 6,137<br/>invalid: 406 (44.2%) /
919<br/>all: 5,668 (80.3%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 18,178 (79.9%) / 22,756<br/>invalid: 4,012 (65.1%) /
6,159<br/>all: 22,190 (76.7%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 6,054 (80.1%) / 7,555<br/>invalid: 1,688 (71.9%) /
2,348<br/>all: 7,742 (78.2%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 12,124 (79.8%) / 15,201<br/>invalid: 2,324 (61%) /
3,811<br/>all: 14,448 (76%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                       | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:---------------------------|:--------------|:---------|:---------|-------:|------:|
| 105 | spectral/postman/postman-library | operations-status-code-5xx | kin           | OpenAPI3 | true     |   6862 | 92670 |
| 106 | spectral/postman/postman-library | operations-status-code-5xx | postman_apis  | OpenAPI3 | true     |   5262 | 74496 |
| 107 | spectral/postman/postman-library | operations-status-code-5xx | kin           | OpenAPI2 | true     |   5103 | 62371 |
| 108 | spectral/postman/postman-library | operations-status-code-5xx | kin           | OpenAPI3 | false    |   1918 | 30642 |
| 109 | spectral/postman/postman-library | operations-status-code-5xx | kin           | OpenAPI2 | false    |   1332 | 23309 |
| 110 | spectral/postman/postman-library | operations-status-code-5xx | postman_apis  | OpenAPI2 | true     |    951 | 38957 |
| 111 | spectral/postman/postman-library | operations-status-code-5xx | postman_apis  | OpenAPI3 | false    |    406 | 24565 |
| 112 | spectral/postman/postman-library | operations-status-code-5xx | postman_apis  | OpenAPI2 | false    |    356 | 46348 |

</details>

<a id="operations-summary"></a>

### operations-summary <sup>[🔝](#summary)</sup>

|             |                                                                |
|-------------|----------------------------------------------------------------|
| Description | Ensures that each of the operations for an API have a summary. |
| Severity    | error                                                          |
| Message:    | All of your operations need summaries.                         |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that each of the operations for an API have a summary.
    message: All of your operations need summaries.
    given: $.paths.*[get,post,patch,put,delete,options,head,trace]
    severity: error
    formats:
    - oas2
    - oas3
    then:
    - field: summary
      function: truthy

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 4,977 (32.5%) / 15,323<br/>invalid: 1,195 (24.6%) /
4,859<br/>all: 6,172 (30.6%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 2,181 (34.8%) / 6,259<br/>invalid: 548 (27.9%) /
1,967<br/>all: 2,729 (33.2%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 2,796 (30.8%) / 9,064<br/>invalid: 647 (22.4%) /
2,892<br/>all: 3,443 (28.8%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 1,161 (15.6%) / 7,433<br/>invalid: 228 (17.5%) /
1,300<br/>all: 1,389 (15.9%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 449 (34.6%) / 1,296<br/>invalid: 94 (24.7%) / 381<br/>all:
543 (32.4%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 712 (11.6%) / 6,137<br/>invalid: 134 (14.6%) /
919<br/>all: 846 (12%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 6,138 (27%) / 22,756<br/>invalid: 1,423 (23.1%) /
6,159<br/>all: 7,561 (26.1%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 2,630 (34.8%) / 7,555<br/>invalid: 642 (27.3%) /
2,348<br/>all: 3,272 (33%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 3,508 (23.1%) / 15,201<br/>invalid: 781 (20.5%) /
3,811<br/>all: 4,289 (22.6%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code               | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-------------------|:--------------|:---------|:---------|-------:|------:|
| 113 | spectral/postman/postman-library | operations-summary | kin           | OpenAPI3 | true     |   2796 | 37507 |
| 114 | spectral/postman/postman-library | operations-summary | kin           | OpenAPI2 | true     |   2181 | 22241 |
| 115 | spectral/postman/postman-library | operations-summary | postman_apis  | OpenAPI3 | true     |    712 | 26490 |
| 116 | spectral/postman/postman-library | operations-summary | kin           | OpenAPI3 | false    |    647 | 14663 |
| 117 | spectral/postman/postman-library | operations-summary | kin           | OpenAPI2 | false    |    548 |  8173 |
| 118 | spectral/postman/postman-library | operations-summary | postman_apis  | OpenAPI2 | true     |    449 | 14333 |
| 119 | spectral/postman/postman-library | operations-summary | postman_apis  | OpenAPI3 | false    |    134 |  5647 |
| 120 | spectral/postman/postman-library | operations-summary | postman_apis  | OpenAPI2 | false    |     94 | 14060 |

</details>

<a id="operations-summary-period-none"></a>

### operations-summary-period-none <sup>[🔝](#summary)</sup>

|             |                                                                             |
|-------------|-----------------------------------------------------------------------------|
| Description | Ensures that each of the operations summaries do not have an ending period. |
| Severity    | warn                                                                        |
| Message:    | Your operations summaries should not end with a period.                     |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that each of the operations summaries do not have an ending period.
    message: Your operations summaries should not end with a period.
    given: $.paths.*[get,post,patch,put,delete,options,head,trace]
    severity: warn
    formats:
    - oas2
    - oas3
    then:
      field: summary
      function: pattern
      functionOptions:
        notMatch: \.$

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 2,390 (15.6%) / 15,323<br/>invalid: 645 (13.3%) /
4,859<br/>all: 3,035 (15%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 1,006 (16.1%) / 6,259<br/>invalid: 244 (12.4%) /
1,967<br/>all: 1,250 (15.2%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 1,384 (15.3%) / 9,064<br/>invalid: 401 (13.9%) /
2,892<br/>all: 1,785 (14.9%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 570 (7.7%) / 7,433<br/>invalid: 242 (18.6%) /
1,300<br/>all: 812 (9.3%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 191 (14.7%) / 1,296<br/>invalid: 105 (27.6%) /
381<br/>all: 296 (17.7%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 379 (6.2%) / 6,137<br/>invalid: 137 (14.9%) / 919<br/>all:
516 (7.3%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 2,960 (13%) / 22,756<br/>invalid: 887 (14.4%) /
6,159<br/>all: 3,847 (13.3%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 1,197 (15.8%) / 7,555<br/>invalid: 349 (14.9%) /
2,348<br/>all: 1,546 (15.6%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 1,763 (11.6%) / 15,201<br/>invalid: 538 (14.1%) /
3,811<br/>all: 2,301 (12.1%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                           | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-------------------------------|:--------------|:---------|:---------|-------:|------:|
| 121 | spectral/postman/postman-library | operations-summary-period-none | kin           | OpenAPI3 | true     |   1384 | 11784 |
| 122 | spectral/postman/postman-library | operations-summary-period-none | kin           | OpenAPI2 | true     |   1006 |  9189 |
| 123 | spectral/postman/postman-library | operations-summary-period-none | kin           | OpenAPI3 | false    |    401 |  3201 |
| 124 | spectral/postman/postman-library | operations-summary-period-none | postman_apis  | OpenAPI3 | true     |    379 |  3610 |
| 125 | spectral/postman/postman-library | operations-summary-period-none | kin           | OpenAPI2 | false    |    244 |  3299 |
| 126 | spectral/postman/postman-library | operations-summary-period-none | postman_apis  | OpenAPI2 | true     |    191 |  3063 |
| 127 | spectral/postman/postman-library | operations-summary-period-none | postman_apis  | OpenAPI3 | false    |    137 |  2676 |
| 128 | spectral/postman/postman-library | operations-summary-period-none | postman_apis  | OpenAPI2 | false    |    105 |  1895 |

</details>

<a id="parameters-description"></a>

### parameters-description <sup>[🔝](#summary)</sup>

|             |                                                       |
|-------------|-------------------------------------------------------|
| Description | Ensures that that all parameters have a descriptions. |
| Severity    | warn                                                  |
| Message:    | Your parameters all need descriptions.                |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that that all parameters have a descriptions.
    message: Your parameters all need descriptions.
    given:
    - $.paths.*.parameters.*
    - $.paths.*.*.parameters.*
    severity: warn
    formats:
    - oas2
    - oas3
    then:
      field: description
      function: truthy

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 5,160 (33.7%) / 15,323<br/>invalid: 1,453 (29.9%) /
4,859<br/>all: 6,613 (32.8%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 2,421 (38.7%) / 6,259<br/>invalid: 637 (32.4%) /
1,967<br/>all: 3,058 (37.2%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 2,739 (30.2%) / 9,064<br/>invalid: 816 (28.2%) /
2,892<br/>all: 3,555 (29.7%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 2,064 (27.8%) / 7,433<br/>invalid: 604 (46.5%) /
1,300<br/>all: 2,668 (30.6%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 683 (52.7%) / 1,296<br/>invalid: 210 (55.1%) /
381<br/>all: 893 (53.2%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 1,381 (22.5%) / 6,137<br/>invalid: 394 (42.9%) /
919<br/>all: 1,775 (25.2%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 7,224 (31.7%) / 22,756<br/>invalid: 2,057 (33.4%) /
6,159<br/>all: 9,281 (32.1%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 3,104 (41.1%) / 7,555<br/>invalid: 847 (36.1%) /
2,348<br/>all: 3,951 (39.9%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 4,120 (27.1%) / 15,201<br/>invalid: 1,210 (31.8%) /
3,811<br/>all: 5,330 (28%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                   | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-----------------------|:--------------|:---------|:---------|-------:|------:|
| 129 | spectral/postman/postman-library | parameters-description | kin           | OpenAPI3 | true     |   2739 | 43446 |
| 130 | spectral/postman/postman-library | parameters-description | kin           | OpenAPI2 | true     |   2421 | 30575 |
| 131 | spectral/postman/postman-library | parameters-description | postman_apis  | OpenAPI3 | true     |   1381 | 52693 |
| 132 | spectral/postman/postman-library | parameters-description | kin           | OpenAPI3 | false    |    816 | 17311 |
| 133 | spectral/postman/postman-library | parameters-description | postman_apis  | OpenAPI2 | true     |    683 | 43862 |
| 134 | spectral/postman/postman-library | parameters-description | kin           | OpenAPI2 | false    |    637 | 14162 |
| 135 | spectral/postman/postman-library | parameters-description | postman_apis  | OpenAPI3 | false    |    394 | 32240 |
| 136 | spectral/postman/postman-library | parameters-description | postman_apis  | OpenAPI2 | false    |    210 | 55832 |

</details>

<a id="parameters-examples-any"></a>

### parameters-examples-any <sup>[🔝](#summary)</sup>

|             |                                                   |
|-------------|---------------------------------------------------|
| Description | Ensures that that all parameters have a examples. |
| Severity    | warn                                              |
| Message:    | Your parameters all need examples.                |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that that all parameters have a examples.
    message: Your parameters all need examples.
    given:
    - $.paths.*.parameters.*
    - $.paths.*.*.parameters.*
    severity: warn
    formats: oas3
    then:
      function: xor
      functionOptions:
        properties:
        - example
        - examples

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 6,351 (41.4%) / 15,323<br/>invalid: 1,755 (36.1%) /
4,859<br/>all: 8,106 (40.2%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 6,259<br/>invalid: 7 (0.4%) / 1,967<br/>all: 7
(0.1%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 6,351 (70.1%) / 9,064<br/>invalid: 1,748 (60.4%) /
2,892<br/>all: 8,099 (67.7%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 5,689 (76.5%) / 7,433<br/>invalid: 779 (59.9%) /
1,300<br/>all: 6,468 (74.1%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 1,296<br/>invalid: 4 (1%) / 381<br/>all: 4 (0.2%)
/ 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 5,689 (92.7%) / 6,137<br/>invalid: 775 (84.3%) /
919<br/>all: 6,464 (91.6%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 12,040 (52.9%) / 22,756<br/>invalid: 2,534 (41.1%) /
6,159<br/>all: 14,574 (50.4%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 7,555<br/>invalid: 11 (0.5%) / 2,348<br/>all: 11
(0.1%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 12,040 (79.2%) / 15,201<br/>invalid: 2,523 (66.2%) /
3,811<br/>all: 14,563 (76.6%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                    | collection_id | class    | is_valid | n_apis |  n_err |
|:----|:---------------------------------|:------------------------|:--------------|:---------|:---------|-------:|-------:|
| 137 | spectral/postman/postman-library | parameters-examples-any | kin           | OpenAPI3 | true     |   6351 | 152796 |
| 138 | spectral/postman/postman-library | parameters-examples-any | postman_apis  | OpenAPI3 | true     |   5689 | 146360 |
| 139 | spectral/postman/postman-library | parameters-examples-any | kin           | OpenAPI3 | false    |   1748 |  49453 |
| 140 | spectral/postman/postman-library | parameters-examples-any | postman_apis  | OpenAPI3 | false    |    775 |  94919 |
| 141 | spectral/postman/postman-library | parameters-examples-any | kin           | OpenAPI2 | false    |      7 |     85 |
| 142 | spectral/postman/postman-library | parameters-examples-any | postman_apis  | OpenAPI2 | false    |      4 |   1723 |

</details>

<a id="request-bodies-examples-any"></a>

### request-bodies-examples-any <sup>[🔝](#summary)</sup>

|             |                                                                                                                                   |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------|
| Description | Ensures that a example is always present for each request body (schema.example for Swagger 2, examples or example for OpenAPI 3). |
| Severity    | warn                                                                                                                              |
| Message:    | All request bodies should have an example present.                                                                                |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that a example is always present for each request body (schema.example
      for Swagger 2, examples or example for OpenAPI 3).
    message: All request bodies should have an example present.
    given:
    - $.paths.*.*.parameters[?(@.in == 'body')].schema
    - $.paths.*.*.requestBody.content.*
    severity: warn
    formats:
    - oas2
    - oas3
    then:
      function: xor
      functionOptions:
        properties:
        - examples
        - example

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 8,771 (57.2%) / 15,323<br/>invalid: 2,207 (45.4%) /
4,859<br/>all: 10,978 (54.4%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 3,576 (57.1%) / 6,259<br/>invalid: 797 (40.5%) /
1,967<br/>all: 4,373 (53.2%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 5,195 (57.3%) / 9,064<br/>invalid: 1,410 (48.8%) /
2,892<br/>all: 6,605 (55.2%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 2,920 (39.3%) / 7,433<br/>invalid: 646 (49.7%) /
1,300<br/>all: 3,566 (40.8%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 984 (75.9%) / 1,296<br/>invalid: 269 (70.6%) /
381<br/>all: 1,253 (74.7%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 1,936 (31.5%) / 6,137<br/>invalid: 377 (41%) /
919<br/>all: 2,313 (32.8%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 11,691 (51.4%) / 22,756<br/>invalid: 2,853 (46.3%) /
6,159<br/>all: 14,544 (50.3%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 4,560 (60.4%) / 7,555<br/>invalid: 1,066 (45.4%) /
2,348<br/>all: 5,626 (56.8%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 7,131 (46.9%) / 15,201<br/>invalid: 1,787 (46.9%) /
3,811<br/>all: 8,918 (46.9%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                        | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:----------------------------|:--------------|:---------|:---------|-------:|------:|
| 143 | spectral/postman/postman-library | request-bodies-examples-any | kin           | OpenAPI3 | true     |   5195 | 40703 |
| 144 | spectral/postman/postman-library | request-bodies-examples-any | kin           | OpenAPI2 | true     |   3576 | 16809 |
| 145 | spectral/postman/postman-library | request-bodies-examples-any | postman_apis  | OpenAPI3 | true     |   1936 | 44954 |
| 146 | spectral/postman/postman-library | request-bodies-examples-any | kin           | OpenAPI3 | false    |   1410 | 12667 |
| 147 | spectral/postman/postman-library | request-bodies-examples-any | postman_apis  | OpenAPI2 | true     |    984 | 12913 |
| 148 | spectral/postman/postman-library | request-bodies-examples-any | kin           | OpenAPI2 | false    |    797 |  5476 |
| 149 | spectral/postman/postman-library | request-bodies-examples-any | postman_apis  | OpenAPI3 | false    |    377 | 11221 |
| 150 | spectral/postman/postman-library | request-bodies-examples-any | postman_apis  | OpenAPI2 | false    |    269 | 16554 |

</details>

<a id="request-body-on-patch"></a>

### request-body-on-patch <sup>[🔝](#summary)</sup>

|             |                                                 |
|-------------|-------------------------------------------------|
| Description | Ensures that PATCH methods have request bodies. |
| Severity    | warn                                            |
| Message:    | Your PATCH methods should have request bodies.  |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that PATCH methods have request bodies.
    message: Your PATCH methods should have request bodies.
    given: $.paths.*.patch
    severity: warn
    formats:
    - oas2
    - oas3
    then:
      function: schema
      functionOptions:
        schema:
          $schema: https://json-schema.org/draft/2020-12/schema
          oneOf:
          - required: requestBody
          - required: parameters
            properties:
              parameters:
                type: array
                minItems: 1
                contains:
                  type: object
                  properties:
                    in:
                      type: string
                      pattern: ^body|formData$
                  required: name

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 244 (1.6%) / 15,323<br/>invalid: 243 (5%) / 4,859<br/>all:
487 (2.4%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 106 (1.7%) / 6,259<br/>invalid: 60 (3.1%) / 1,967<br/>all:
166 (2%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 138 (1.5%) / 9,064<br/>invalid: 183 (6.3%) /
2,892<br/>all: 321 (2.7%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 126 (1.7%) / 7,433<br/>invalid: 118 (9.1%) /
1,300<br/>all: 244 (2.8%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 57 (4.4%) / 1,296<br/>invalid: 64 (16.8%) / 381<br/>all:
121 (7.2%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 69 (1.1%) / 6,137<br/>invalid: 54 (5.9%) / 919<br/>all:
123 (1.7%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 370 (1.6%) / 22,756<br/>invalid: 361 (5.9%) /
6,159<br/>all: 731 (2.5%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 163 (2.2%) / 7,555<br/>invalid: 124 (5.3%) /
2,348<br/>all: 287 (2.9%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 207 (1.4%) / 15,201<br/>invalid: 237 (6.2%) /
3,811<br/>all: 444 (2.3%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                  | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:----------------------|:--------------|:---------|:---------|-------:|------:|
| 151 | spectral/postman/postman-library | request-body-on-patch | kin           | OpenAPI3 | false    |    183 |   874 |
| 152 | spectral/postman/postman-library | request-body-on-patch | kin           | OpenAPI3 | true     |    138 |  1150 |
| 153 | spectral/postman/postman-library | request-body-on-patch | kin           | OpenAPI2 | true     |    106 |   629 |
| 154 | spectral/postman/postman-library | request-body-on-patch | postman_apis  | OpenAPI3 | true     |     69 |   547 |
| 155 | spectral/postman/postman-library | request-body-on-patch | postman_apis  | OpenAPI2 | false    |     64 |   295 |
| 156 | spectral/postman/postman-library | request-body-on-patch | kin           | OpenAPI2 | false    |     60 |   437 |
| 157 | spectral/postman/postman-library | request-body-on-patch | postman_apis  | OpenAPI2 | true     |     57 |   281 |
| 158 | spectral/postman/postman-library | request-body-on-patch | postman_apis  | OpenAPI3 | false    |     54 |  1957 |

</details>

<a id="request-body-on-post"></a>

### request-body-on-post <sup>[🔝](#summary)</sup>

|             |                                                |
|-------------|------------------------------------------------|
| Description | Ensures that POST methods have request bodies. |
| Severity    | warn                                           |
| Message:    | Your POST methods should have request bodies.  |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that POST methods have request bodies.
    message: Your POST methods should have request bodies.
    given: $.paths.*.post
    severity: warn
    formats:
    - oas2
    - oas3
    then:
      function: schema
      functionOptions:
        schema:
          $schema: https://json-schema.org/draft/2020-12/schema
          oneOf:
          - required: requestBody
          - required: parameters
            properties:
              parameters:
                type: array
                minItems: 1
                contains:
                  type: object
                  properties:
                    in:
                      type: string
                      pattern: ^body|formData$
                  required: name

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 2,679 (17.5%) / 15,323<br/>invalid: 1,241 (25.5%) /
4,859<br/>all: 3,920 (19.4%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 1,176 (18.8%) / 6,259<br/>invalid: 505 (25.7%) /
1,967<br/>all: 1,681 (20.4%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 1,503 (16.6%) / 9,064<br/>invalid: 736 (25.4%) /
2,892<br/>all: 2,239 (18.7%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 907 (12.2%) / 7,433<br/>invalid: 485 (37.3%) /
1,300<br/>all: 1,392 (15.9%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 322 (24.8%) / 1,296<br/>invalid: 167 (43.8%) /
381<br/>all: 489 (29.2%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 585 (9.5%) / 6,137<br/>invalid: 318 (34.6%) / 919<br/>all:
903 (12.8%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 3,586 (15.8%) / 22,756<br/>invalid: 1,726 (28%) /
6,159<br/>all: 5,312 (18.4%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 1,498 (19.8%) / 7,555<br/>invalid: 672 (28.6%) /
2,348<br/>all: 2,170 (21.9%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 2,088 (13.7%) / 15,201<br/>invalid: 1,054 (27.7%) /
3,811<br/>all: 3,142 (16.5%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                 | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:---------------------|:--------------|:---------|:---------|-------:|------:|
| 159 | spectral/postman/postman-library | request-body-on-post | kin           | OpenAPI3 | true     |   1503 | 17375 |
| 160 | spectral/postman/postman-library | request-body-on-post | kin           | OpenAPI2 | true     |   1176 | 13126 |
| 161 | spectral/postman/postman-library | request-body-on-post | kin           | OpenAPI3 | false    |    736 |  8487 |
| 162 | spectral/postman/postman-library | request-body-on-post | postman_apis  | OpenAPI3 | true     |    585 | 15060 |
| 163 | spectral/postman/postman-library | request-body-on-post | kin           | OpenAPI2 | false    |    505 |  6766 |
| 164 | spectral/postman/postman-library | request-body-on-post | postman_apis  | OpenAPI2 | true     |    322 |  5369 |
| 165 | spectral/postman/postman-library | request-body-on-post | postman_apis  | OpenAPI3 | false    |    318 | 17464 |
| 166 | spectral/postman/postman-library | request-body-on-post | postman_apis  | OpenAPI2 | false    |    167 |  7515 |

</details>

<a id="request-body-on-put"></a>

### request-body-on-put <sup>[🔝](#summary)</sup>

|             |                                               |
|-------------|-----------------------------------------------|
| Description | Ensures that PUT methods have request bodies. |
| Severity    | warn                                          |
| Message:    | Your PUT methods should have request bodies.  |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensures that PUT methods have request bodies.
    message: Your PUT methods should have request bodies.
    given: $.paths.*.put
    severity: warn
    formats:
    - oas2
    - oas3
    then:
      function: schema
      functionOptions:
        schema:
          $schema: https://json-schema.org/draft/2020-12/schema
          oneOf:
          - required: requestBody
          - required: parameters
            properties:
              parameters:
                type: array
                minItems: 1
                contains:
                  type: object
                  properties:
                    in:
                      type: string
                      pattern: ^body|formData$
                  required: name

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 906 (5.9%) / 15,323<br/>invalid: 500 (10.3%) /
4,859<br/>all: 1,406 (7%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 491 (7.8%) / 6,259<br/>invalid: 216 (11%) / 1,967<br/>all:
707 (8.6%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 415 (4.6%) / 9,064<br/>invalid: 284 (9.8%) /
2,892<br/>all: 699 (5.8%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 393 (5.3%) / 7,433<br/>invalid: 202 (15.5%) /
1,300<br/>all: 595 (6.8%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 129 (10%) / 1,296<br/>invalid: 86 (22.6%) / 381<br/>all:
215 (12.8%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 264 (4.3%) / 6,137<br/>invalid: 116 (12.6%) / 919<br/>all:
380 (5.4%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 1,299 (5.7%) / 22,756<br/>invalid: 702 (11.4%) /
6,159<br/>all: 2,001 (6.9%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 620 (8.2%) / 7,555<br/>invalid: 302 (12.9%) /
2,348<br/>all: 922 (9.3%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 679 (4.5%) / 15,201<br/>invalid: 400 (10.5%) /
3,811<br/>all: 1,079 (5.7%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:--------------------|:--------------|:---------|:---------|-------:|------:|
| 167 | spectral/postman/postman-library | request-body-on-put | kin           | OpenAPI2 | true     |    491 |  3460 |
| 168 | spectral/postman/postman-library | request-body-on-put | kin           | OpenAPI3 | true     |    415 |  3462 |
| 169 | spectral/postman/postman-library | request-body-on-put | kin           | OpenAPI3 | false    |    284 |  2126 |
| 170 | spectral/postman/postman-library | request-body-on-put | postman_apis  | OpenAPI3 | true     |    264 |  9049 |
| 171 | spectral/postman/postman-library | request-body-on-put | kin           | OpenAPI2 | false    |    216 |  2212 |
| 172 | spectral/postman/postman-library | request-body-on-put | postman_apis  | OpenAPI2 | true     |    129 |  1536 |
| 173 | spectral/postman/postman-library | request-body-on-put | postman_apis  | OpenAPI3 | false    |    116 |  4430 |
| 174 | spectral/postman/postman-library | request-body-on-put | postman_apis  | OpenAPI2 | false    |     86 |  1460 |

</details>

<a id="responses-examples-any"></a>

### responses-examples-any <sup>[🔝](#summary)</sup>

|             |                                                                                                          |
|-------------|----------------------------------------------------------------------------------------------------------|
| Description | Ensuring all responses have examples (OpenAPI 3, Swagger 2) or example (OpenAPI 3) defined.              |
| Severity    | warn                                                                                                     |
| Message:    | All your responses need to have property examples (OpenAPI 3, Swagger 2) or example (OpenAPI 3) defined. |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensuring all responses have examples (OpenAPI 3, Swagger 2) or example
      (OpenAPI 3) defined.
    message: All your responses need to have property examples (OpenAPI 3, Swagger 2)
      or example (OpenAPI 3) defined.
    given: '#ResponseContentDefinition'
    severity: warn
    formats:
    - oas2
    - oas3
    then:
      function: xor
      functionOptions:
        properties:
        - example
        - examples

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 12,901 (84.2%) / 15,323<br/>invalid: 3,040 (62.6%) /
4,859<br/>all: 15,941 (79%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 5,943 (95%) / 6,259<br/>invalid: 1,466 (74.5%) /
1,967<br/>all: 7,409 (90.1%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 6,958 (76.8%) / 9,064<br/>invalid: 1,574 (54.4%) /
2,892<br/>all: 8,532 (71.4%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 7,041 (94.7%) / 7,433<br/>invalid: 722 (55.5%) /
1,300<br/>all: 7,763 (88.9%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 1,269 (97.9%) / 1,296<br/>invalid: 343 (90%) /
381<br/>all: 1,612 (96.1%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 5,772 (94.1%) / 6,137<br/>invalid: 379 (41.2%) /
919<br/>all: 6,151 (87.2%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 19,942 (87.6%) / 22,756<br/>invalid: 3,762 (61.1%) /
6,159<br/>all: 23,704 (82%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 7,212 (95.5%) / 7,555<br/>invalid: 1,809 (77%) /
2,348<br/>all: 9,021 (91.1%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 12,730 (83.7%) / 15,201<br/>invalid: 1,953 (51.2%) /
3,811<br/>all: 14,683 (77.2%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                   | collection_id | class    | is_valid | n_apis |  n_err |
|:----|:---------------------------------|:-----------------------|:--------------|:---------|:---------|-------:|-------:|
| 175 | spectral/postman/postman-library | responses-examples-any | kin           | OpenAPI3 | true     |   6958 | 150579 |
| 176 | spectral/postman/postman-library | responses-examples-any | kin           | OpenAPI2 | true     |   5943 | 185893 |
| 177 | spectral/postman/postman-library | responses-examples-any | postman_apis  | OpenAPI3 | true     |   5772 | 137776 |
| 178 | spectral/postman/postman-library | responses-examples-any | kin           | OpenAPI3 | false    |   1574 |  45043 |
| 179 | spectral/postman/postman-library | responses-examples-any | kin           | OpenAPI2 | false    |   1466 |  55201 |
| 180 | spectral/postman/postman-library | responses-examples-any | postman_apis  | OpenAPI2 | true     |   1269 | 126558 |
| 181 | spectral/postman/postman-library | responses-examples-any | postman_apis  | OpenAPI3 | false    |    379 |  42968 |
| 182 | spectral/postman/postman-library | responses-examples-any | postman_apis  | OpenAPI2 | false    |    343 | 129028 |

</details>

<a id="reusable-schema-description"></a>

### reusable-schema-description <sup>[🔝](#summary)</sup>

|             |                                                       |
|-------------|-------------------------------------------------------|
| Description | Ensure all reusable schema should have a description. |
| Severity    | warn                                                  |
| Message:    | All reusable schema should have descriptions.         |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensure all reusable schema should have a description.
    message: All reusable schema should have descriptions.
    given:
    - $.definitions.*
    - $.components.schemas.*
    severity: warn
    formats:
    - oas2
    - oas3
    then:
      field: description
      function: truthy

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 10,805 (70.5%) / 15,323<br/>invalid: 2,721 (56%) /
4,859<br/>all: 13,526 (67%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 4,600 (73.5%) / 6,259<br/>invalid: 1,149 (58.4%) /
1,967<br/>all: 5,749 (69.9%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 6,205 (68.5%) / 9,064<br/>invalid: 1,572 (54.4%) /
2,892<br/>all: 7,777 (65%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 6,747 (90.8%) / 7,433<br/>invalid: 953 (73.3%) /
1,300<br/>all: 7,700 (88.2%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 1,119 (86.3%) / 1,296<br/>invalid: 249 (65.4%) /
381<br/>all: 1,368 (81.6%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 5,628 (91.7%) / 6,137<br/>invalid: 704 (76.6%) /
919<br/>all: 6,332 (89.7%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 17,552 (77.1%) / 22,756<br/>invalid: 3,674 (59.7%) /
6,159<br/>all: 21,226 (73.4%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 5,719 (75.7%) / 7,555<br/>invalid: 1,398 (59.5%) /
2,348<br/>all: 7,117 (71.9%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 11,833 (77.8%) / 15,201<br/>invalid: 2,276 (59.7%) /
3,811<br/>all: 14,109 (74.2%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                        | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:----------------------------|:--------------|:---------|:---------|-------:|------:|
| 183 | spectral/postman/postman-library | reusable-schema-description | kin           | OpenAPI3 | true     |   6205 | 94858 |
| 184 | spectral/postman/postman-library | reusable-schema-description | postman_apis  | OpenAPI3 | true     |   5628 | 72180 |
| 185 | spectral/postman/postman-library | reusable-schema-description | kin           | OpenAPI2 | true     |   4600 | 62745 |
| 186 | spectral/postman/postman-library | reusable-schema-description | kin           | OpenAPI3 | false    |   1572 | 26196 |
| 187 | spectral/postman/postman-library | reusable-schema-description | kin           | OpenAPI2 | false    |   1149 | 15730 |
| 188 | spectral/postman/postman-library | reusable-schema-description | postman_apis  | OpenAPI2 | true     |   1119 | 30722 |
| 189 | spectral/postman/postman-library | reusable-schema-description | postman_apis  | OpenAPI3 | false    |    704 | 53613 |
| 190 | spectral/postman/postman-library | reusable-schema-description | postman_apis  | OpenAPI2 | false    |    249 | 25232 |

</details>

<a id="schema-properties-define-array-boundaries"></a>

### schema-properties-define-array-boundaries <sup>[🔝](#summary)</sup>

|             |                                                                         |
|-------------|-------------------------------------------------------------------------|
| Description | Requires that arrays have their minimum and maximum boundaries defined. |
| Severity    | warn                                                                    |
| Message:    | Arrays must have minItems and maxItems defined.                         |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Requires that arrays have their minimum and maximum boundaries defined.
    message: Arrays must have minItems and maxItems defined.
    given: $..[?(@ != null && @.type=="array")]
    severity: warn
    formats:
    - oas2
    - oas3
    then:
    - field: maxItems
      function: defined
    - field: minItems
      function: defined

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 11,223 (73.2%) / 15,323<br/>invalid: 2,636 (54.2%) /
4,859<br/>all: 13,859 (68.7%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 4,711 (75.3%) / 6,259<br/>invalid: 1,018 (51.8%) /
1,967<br/>all: 5,729 (69.6%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 6,512 (71.8%) / 9,064<br/>invalid: 1,618 (55.9%) /
2,892<br/>all: 8,130 (68%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 3,219 (43.3%) / 7,433<br/>invalid: 712 (54.8%) /
1,300<br/>all: 3,931 (45%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 1,107 (85.4%) / 1,296<br/>invalid: 311 (81.6%) /
381<br/>all: 1,418 (84.6%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 2,112 (34.4%) / 6,137<br/>invalid: 401 (43.6%) /
919<br/>all: 2,513 (35.6%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 14,442 (63.5%) / 22,756<br/>invalid: 3,348 (54.4%) /
6,159<br/>all: 17,790 (61.5%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 5,818 (77%) / 7,555<br/>invalid: 1,329 (56.6%) /
2,348<br/>all: 7,147 (72.2%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 8,624 (56.7%) / 15,201<br/>invalid: 2,019 (53%) /
3,811<br/>all: 10,643 (56%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                                      | collection_id | class    | is_valid | n_apis |  n_err |
|:----|:---------------------------------|:------------------------------------------|:--------------|:---------|:---------|-------:|-------:|
| 191 | spectral/postman/postman-library | schema-properties-define-array-boundaries | kin           | OpenAPI3 | true     |   6512 | 103597 |
| 192 | spectral/postman/postman-library | schema-properties-define-array-boundaries | kin           | OpenAPI2 | true     |   4711 |  64757 |
| 193 | spectral/postman/postman-library | schema-properties-define-array-boundaries | postman_apis  | OpenAPI3 | true     |   2112 |  83394 |
| 194 | spectral/postman/postman-library | schema-properties-define-array-boundaries | kin           | OpenAPI3 | false    |   1618 |  28398 |
| 195 | spectral/postman/postman-library | schema-properties-define-array-boundaries | postman_apis  | OpenAPI2 | true     |   1107 |  35062 |
| 196 | spectral/postman/postman-library | schema-properties-define-array-boundaries | kin           | OpenAPI2 | false    |   1018 |  15011 |
| 197 | spectral/postman/postman-library | schema-properties-define-array-boundaries | postman_apis  | OpenAPI3 | false    |    401 |  31341 |
| 198 | spectral/postman/postman-library | schema-properties-define-array-boundaries | postman_apis  | OpenAPI2 | false    |    311 |  39486 |

</details>

<a id="schema-properties-descriptions"></a>

### schema-properties-descriptions <sup>[🔝](#summary)</sup>

|             |                                                               |
|-------------|---------------------------------------------------------------|
| Description | Ensure that all schemas properties should have a description. |
| Severity    | warn                                                          |
| Message:    | All schema properties should have descriptions.               |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Ensure that all schemas properties should have a description.
    message: All schema properties should have descriptions.
    given: $..properties.*
    severity: warn
    formats:
    - oas2
    - oas3
    then:
      field: description
      function: truthy

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 11,906 (77.7%) / 15,323<br/>invalid: 3,096 (63.7%) /
4,859<br/>all: 15,002 (74.3%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 4,864 (77.7%) / 6,259<br/>invalid: 1,124 (57.1%) /
1,967<br/>all: 5,988 (72.8%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 7,042 (77.7%) / 9,064<br/>invalid: 1,972 (68.2%) /
2,892<br/>all: 9,014 (75.4%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 6,840 (92%) / 7,433<br/>invalid: 957 (73.6%) /
1,300<br/>all: 7,797 (89.3%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 1,098 (84.7%) / 1,296<br/>invalid: 278 (73%) /
381<br/>all: 1,376 (82.1%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 5,742 (93.6%) / 6,137<br/>invalid: 679 (73.9%) /
919<br/>all: 6,421 (91%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 18,746 (82.4%) / 22,756<br/>invalid: 4,053 (65.8%) /
6,159<br/>all: 22,799 (78.8%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 5,962 (78.9%) / 7,555<br/>invalid: 1,402 (59.7%) /
2,348<br/>all: 7,364 (74.4%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 12,784 (84.1%) / 15,201<br/>invalid: 2,651 (69.6%) /
3,811<br/>all: 15,435 (81.2%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                           | collection_id | class    | is_valid | n_apis |  n_err |
|:----|:---------------------------------|:-------------------------------|:--------------|:---------|:---------|-------:|-------:|
| 199 | spectral/postman/postman-library | schema-properties-descriptions | kin           | OpenAPI3 | true     |   7042 | 421384 |
| 200 | spectral/postman/postman-library | schema-properties-descriptions | postman_apis  | OpenAPI3 | true     |   5742 | 776231 |
| 201 | spectral/postman/postman-library | schema-properties-descriptions | kin           | OpenAPI2 | true     |   4864 | 272481 |
| 202 | spectral/postman/postman-library | schema-properties-descriptions | kin           | OpenAPI3 | false    |   1972 | 154440 |
| 203 | spectral/postman/postman-library | schema-properties-descriptions | kin           | OpenAPI2 | false    |   1124 |  76596 |
| 204 | spectral/postman/postman-library | schema-properties-descriptions | postman_apis  | OpenAPI2 | true     |   1098 | 154394 |
| 205 | spectral/postman/postman-library | schema-properties-descriptions | postman_apis  | OpenAPI3 | false    |    679 | 149314 |
| 206 | spectral/postman/postman-library | schema-properties-descriptions | postman_apis  | OpenAPI2 | false    |    278 | 149735 |

</details>

<a id="schema-reference-reusable"></a>

### schema-reference-reusable <sup>[🔝](#summary)</sup>

|             |                                                                                       |
|-------------|---------------------------------------------------------------------------------------|
| Description | Ensures all schema properties use a \$ref contain a \$ref targeting a reusable schema |

defined in definitions (Swagger 2) or components.schema (OpenAPI 3) \|
\| Severity \| warn \| \| Message: \| A schema property should have a
\$ref property referencing a reusable schema \|

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: "Ensures all schema properties use a $ref contain a $ref targeting a
      reusable schema \ndefined in definitions (Swagger 2) or components.schema (OpenAPI
      3)\n"
    message: A schema property should have a $ref property referencing a reusable schema
    given: $..schema
    resolved: no
    severity: warn
    formats:
    - oas2
    - oas3
    then:
    - field: $ref
      function: truthy
    - field: $ref
      function: pattern
      functionOptions:
        match: ^.*#\/(definitions|components\/schemas)\/.*$

</details>

#### Statistics

<table>
<tr>
<th>
Collection
</th>
<th>
All
</th>
<th>
OpenAPI2
</th>
<th>
OpenAPI3
</th>
</tr>
<tr>
<td>
kin
</td>
<td style="text-align:center">
<small>valid: 10,894 (71.1%) / 15,323<br/>invalid: 2,796 (57.5%) /
4,859<br/>all: 13,690 (67.8%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 3,366 (53.8%) / 6,259<br/>invalid: 855 (43.5%) /
1,967<br/>all: 4,221 (51.3%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 7,528 (83.1%) / 9,064<br/>invalid: 1,941 (67.1%) /
2,892<br/>all: 9,469 (79.2%) / 11,956</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 6,306 (84.8%) / 7,433<br/>invalid: 1,097 (84.4%) /
1,300<br/>all: 7,403 (84.8%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 705 (54.4%) / 1,296<br/>invalid: 309 (81.1%) /
381<br/>all: 1,014 (60.5%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 5,601 (91.3%) / 6,137<br/>invalid: 788 (85.7%) /
919<br/>all: 6,389 (90.5%) / 7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 17,200 (75.6%) / 22,756<br/>invalid: 3,893 (63.2%) /
6,159<br/>all: 21,093 (72.9%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 4,071 (53.9%) / 7,555<br/>invalid: 1,164 (49.6%) /
2,348<br/>all: 5,235 (52.9%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 13,129 (86.4%) / 15,201<br/>invalid: 2,729 (71.6%) /
3,811<br/>all: 15,858 (83.4%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                      | collection_id | class    | is_valid | n_apis |  n_err |
|:----|:---------------------------------|:--------------------------|:--------------|:---------|:---------|-------:|-------:|
| 207 | spectral/postman/postman-library | schema-reference-reusable | kin           | OpenAPI3 | true     |   7528 | 230220 |
| 208 | spectral/postman/postman-library | schema-reference-reusable | postman_apis  | OpenAPI3 | true     |   5601 | 229616 |
| 209 | spectral/postman/postman-library | schema-reference-reusable | kin           | OpenAPI2 | true     |   3366 |  27858 |
| 210 | spectral/postman/postman-library | schema-reference-reusable | kin           | OpenAPI3 | false    |   1941 |  70652 |
| 211 | spectral/postman/postman-library | schema-reference-reusable | kin           | OpenAPI2 | false    |    855 |  13316 |
| 212 | spectral/postman/postman-library | schema-reference-reusable | postman_apis  | OpenAPI3 | false    |    788 | 114225 |
| 213 | spectral/postman/postman-library | schema-reference-reusable | postman_apis  | OpenAPI2 | true     |    705 |  17502 |
| 214 | spectral/postman/postman-library | schema-reference-reusable | postman_apis  | OpenAPI2 | false    |    309 |  42405 |

</details>
