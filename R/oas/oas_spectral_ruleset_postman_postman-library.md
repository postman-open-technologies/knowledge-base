OAS Spectral Ruleset postman/postman-library
================
<sup>Last updated: 2023-04-05</sup>

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

| rule                                                                                                                                                                                                                             | All<br/>(23,345) | OpenAPI2<br/>(7,851) | OpenAPI3<br/>(15,494) |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------:|:--------------------:|:---------------------:|
| [info-contact](#info-contact)<br/><sup>Ensures that all APIs have contact information.</sup>                                                                                                                                     |  15,027 (64.4%)  |    4,514 (57.5%)     |    10,513 (67.9%)     |
| [info-contact-email](#info-contact-email)<br/><sup>Ensures that all APIs have contact email.</sup>                                                                                                                               |   2,120 (9.1%)   |     993 (12.6%)      |     1,127 (7.3%)      |
| [info-contact-email-or-url](#info-contact-email-or-url)<br/><sup>Ensures that all APIs have contact URL or email.</sup>                                                                                                          |    1,177 (5%)    |      572 (7.3%)      |      605 (3.9%)       |
| [info-contact-name](#info-contact-name)<br/><sup>Ensures that all APIs have contact name.</sup>                                                                                                                                  |  3,187 (13.7%)   |    1,389 (17.7%)     |     1,798 (11.6%)     |
| [info-contact-url](#info-contact-url)<br/><sup>Ensures that all APIs have contact URL.</sup>                                                                                                                                     |  4,398 (18.8%)   |    1,923 (24.5%)     |      2,475 (16%)      |
| [info-description](#info-description)<br/><sup>Ensures that all OpenAPIs have a information description.</sup>                                                                                                                   |  7,531 (32.3%)   |    1,485 (18.9%)     |      6,046 (39%)      |
| [info-license](#info-license)<br/><sup>Ensures that all OpenAPIs have a information object license.</sup>                                                                                                                        |  14,615 (62.6%)  |    5,222 (66.5%)     |     9,393 (60.6%)     |
| [info-license-url](#info-license-url)<br/><sup>Ensures that all OpenAPIs have a information object license url.</sup>                                                                                                            |  3,069 (13.1%)   |      227 (2.9%)      |     2,842 (18.3%)     |
| [info-terms-of-service](#info-terms-of-service)<br/><sup>Ensures that all OpenAPIs have a information object terms of service.</sup>                                                                                             |  19,308 (82.7%)  |    5,940 (75.7%)     |    13,368 (86.3%)     |
| [no-response-body-on-204](#no-response-body-on-204)<br/><sup>Ensures that no 204 No Content response has a body.</sup>                                                                                                           |    403 (1.7%)    |      93 (1.2%)       |       310 (2%)        |
| [no-trailing-slash-on-paths](#no-trailing-slash-on-paths)<br/><sup>Ensures that there are no trailing slashes on paths.</sup>                                                                                                    |   1,371 (5.9%)   |      571 (7.3%)      |      800 (5.2%)       |
| [operations-description](#operations-description)<br/><sup>Ensures that each of the operations have a description.</sup>                                                                                                         |  12,428 (53.2%)  |    3,506 (44.7%)     |     8,922 (57.6%)     |
| [operations-status-code-2xx](#operations-status-code-2xx)<br/><sup>Ensures that each of the operations returns at least a 2xx HTTP status code.</sup>                                                                            |   1,589 (6.8%)   |     916 (11.7%)      |      673 (4.3%)       |
| [operations-status-code-5xx](#operations-status-code-5xx)<br/><sup>Ensures that each of the operations returns at least a 5xx HTTP status code.</sup>                                                                            |   18,449 (79%)   |    6,197 (78.9%)     |    12,252 (79.1%)     |
| [operations-summary](#operations-summary)<br/><sup>Ensures that each of the operations for an API have a summary.</sup>                                                                                                          |  6,243 (26.7%)   |    2,676 (34.1%)     |      3,567 (23%)      |
| [operations-summary-period-none](#operations-summary-period-none)<br/><sup>Ensures that each of the operations summaries do not have an ending period.</sup>                                                                     |  3,068 (13.1%)   |    1,242 (15.8%)     |     1,826 (11.8%)     |
| [parameters-description](#parameters-description)<br/><sup>Ensures that that all parameters have a descriptions.</sup>                                                                                                           |  7,362 (31.5%)   |    3,181 (40.5%)     |      4,181 (27%)      |
| [parameters-examples-any](#parameters-examples-any)<br/><sup>Ensures that that all parameters have a examples.</sup>                                                                                                             |  12,185 (52.2%)  |        0 (0%)        |    12,185 (78.6%)     |
| [request-bodies-examples-any](#request-bodies-examples-any)<br/><sup>Ensures that a example is always present for each request body (schema.example for Swagger 2, examples or example for OpenAPI 3).</sup>                     |   11,916 (51%)   |    4,667 (59.4%)     |     7,249 (46.8%)     |
| [request-body-on-patch](#request-body-on-patch)<br/><sup>Ensures that PATCH methods have request bodies.</sup>                                                                                                                   |    374 (1.6%)    |      165 (2.1%)      |      209 (1.3%)       |
| [request-body-on-post](#request-body-on-post)<br/><sup>Ensures that POST methods have request bodies.</sup>                                                                                                                      |  3,676 (15.7%)   |    1,544 (19.7%)     |     2,132 (13.8%)     |
| [request-body-on-put](#request-body-on-put)<br/><sup>Ensures that PUT methods have request bodies.</sup>                                                                                                                         |   1,323 (5.7%)   |      636 (8.1%)      |      687 (4.4%)       |
| [responses-examples-any](#responses-examples-any)<br/><sup>Ensuring all responses have examples (OpenAPI 3, Swagger 2) or example (OpenAPI 3) defined.</sup>                                                                     |  20,279 (86.9%)  |     7,381 (94%)      |    12,898 (83.2%)     |
| [reusable-schema-description](#reusable-schema-description)<br/><sup>Ensure all reusable schema should have a description.</sup>                                                                                                 |  17,829 (76.4%)  |    5,857 (74.6%)     |    11,972 (77.3%)     |
| [schema-properties-define-array-boundaries](#schema-properties-define-array-boundaries)<br/><sup>Requires that arrays have their minimum and maximum boundaries defined.</sup>                                                   |  14,737 (63.1%)  |    5,961 (75.9%)     |     8,776 (56.6%)     |
| [schema-properties-descriptions](#schema-properties-descriptions)<br/><sup>Ensure that all schemas properties should have a description.</sup>                                                                                   |  19,041 (81.6%)  |    6,106 (77.8%)     |    12,935 (83.5%)     |
| [schema-reference-reusable](#schema-reference-reusable)<br/><sup>Ensures all schema properties use a \$ref contain a \$ref targeting a reusable schema defined in definitions (Swagger 2) or components.schema (OpenAPI 3)</sup> |  17,475 (74.9%)  |    4,183 (53.3%)     |    13,292 (85.8%)     |

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
<small>valid: 8,613 (55.2%) / 15,617<br/>invalid: 2,685 (54.1%) /
4,967<br/>all: 11,298 (54.9%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 3,621 (56.5%) / 6,407<br/>invalid: 963 (47.1%) /
2,044<br/>all: 4,584 (54.2%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 4,992 (54.2%) / 9,210<br/>invalid: 1,722 (58.9%) /
2,923<br/>all: 6,714 (55.3%) / 12,133</small>
</td>
</tr>
<tr>
<td>
kinweb
</td>
<td style="text-align:center">
<small>valid: 173 (58.6%) / 295<br/>invalid: 60 (55.6%) / 108<br/>all:
233 (57.8%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 97 (65.5%) / 148<br/>invalid: 45 (58.4%) / 77<br/>all: 142
(63.1%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 76 (51.7%) / 147<br/>invalid: 15 (48.4%) / 31<br/>all: 91
(51.1%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 15,027 (64.4%) / 23,345<br/>invalid: 3,317 (52%) /
6,375<br/>all: 18,344 (61.7%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 4,514 (57.5%) / 7,851<br/>invalid: 1,261 (50.4%) /
2,502<br/>all: 5,775 (55.8%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 10,513 (67.9%) / 15,494<br/>invalid: 2,056 (53.1%) /
3,873<br/>all: 12,569 (64.9%) / 19,367</small>
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
| spectral/postman/postman-library | info-contact | kin           | OpenAPI3 | true     |   4992 |  4992 |
| spectral/postman/postman-library | info-contact | kin           | OpenAPI2 | true     |   3621 |  3621 |
| spectral/postman/postman-library | info-contact | kin           | OpenAPI3 | false    |   1722 |  1722 |
| spectral/postman/postman-library | info-contact | kin           | OpenAPI2 | false    |    963 |   963 |
| spectral/postman/postman-library | info-contact | postman_apis  | OpenAPI2 | true     |    796 |   796 |
| spectral/postman/postman-library | info-contact | postman_apis  | OpenAPI3 | false    |    319 |   319 |
| spectral/postman/postman-library | info-contact | postman_apis  | OpenAPI2 | false    |    253 |   253 |
| spectral/postman/postman-library | info-contact | kinweb        | OpenAPI2 | true     |     97 |    97 |
| spectral/postman/postman-library | info-contact | kinweb        | OpenAPI3 | true     |     76 |    76 |
| spectral/postman/postman-library | info-contact | kinweb        | OpenAPI2 | false    |     45 |    45 |
| spectral/postman/postman-library | info-contact | kinweb        | OpenAPI3 | false    |     15 |    15 |

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
<small>valid: 1,686 (10.8%) / 15,617<br/>invalid: 457 (9.2%) /
4,967<br/>all: 2,143 (10.4%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 777 (12.1%) / 6,407<br/>invalid: 294 (14.4%) /
2,044<br/>all: 1,071 (12.7%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 909 (9.9%) / 9,210<br/>invalid: 163 (5.6%) /
2,923<br/>all: 1,072 (8.8%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 20 (6.8%) / 295<br/>invalid: 12 (11.1%) / 108<br/>all: 32
(7.9%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 15 (10.1%) / 148<br/>invalid: 7 (9.1%) / 77<br/>all: 22
(9.8%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 5 (3.4%) / 147<br/>invalid: 5 (16.1%) / 31<br/>all: 10
(5.6%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 2,120 (9.1%) / 23,345<br/>invalid: 586 (9.2%) /
6,375<br/>all: 2,706 (9.1%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 993 (12.6%) / 7,851<br/>invalid: 366 (14.6%) /
2,502<br/>all: 1,359 (13.1%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 1,127 (7.3%) / 15,494<br/>invalid: 220 (5.7%) /
3,873<br/>all: 1,347 (7%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code               | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-------------------|:--------------|:---------|:---------|-------:|------:|
| 13  | spectral/postman/postman-library | info-contact-email | kin           | OpenAPI3 | true     |    909 |   909 |
| 14  | spectral/postman/postman-library | info-contact-email | kin           | OpenAPI2 | true     |    777 |   777 |
| 15  | spectral/postman/postman-library | info-contact-email | kin           | OpenAPI2 | false    |    294 |   294 |
| 16  | spectral/postman/postman-library | info-contact-email | postman_apis  | OpenAPI3 | true     |    213 |   213 |
| 17  | spectral/postman/postman-library | info-contact-email | postman_apis  | OpenAPI2 | true     |    201 |   201 |
| 18  | spectral/postman/postman-library | info-contact-email | kin           | OpenAPI3 | false    |    163 |   163 |
| 19  | spectral/postman/postman-library | info-contact-email | postman_apis  | OpenAPI2 | false    |     65 |    65 |
| 20  | spectral/postman/postman-library | info-contact-email | postman_apis  | OpenAPI3 | false    |     52 |    52 |
| 21  | spectral/postman/postman-library | info-contact-email | kinweb        | OpenAPI2 | true     |     15 |    15 |
| 22  | spectral/postman/postman-library | info-contact-email | kinweb        | OpenAPI2 | false    |      7 |     7 |
| 23  | spectral/postman/postman-library | info-contact-email | kinweb        | OpenAPI3 | false    |      5 |     5 |
| 24  | spectral/postman/postman-library | info-contact-email | kinweb        | OpenAPI3 | true     |      5 |     5 |

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
<small>valid: 929 (5.9%) / 15,617<br/>invalid: 235 (4.7%) /
4,967<br/>all: 1,164 (5.7%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 464 (7.2%) / 6,407<br/>invalid: 155 (7.6%) /
2,044<br/>all: 619 (7.3%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 465 (5%) / 9,210<br/>invalid: 80 (2.7%) / 2,923<br/>all:
545 (4.5%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 14 (4.7%) / 295<br/>invalid: 12 (11.1%) / 108<br/>all: 26
(6.5%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 12 (8.1%) / 148<br/>invalid: 7 (9.1%) / 77<br/>all: 19
(8.4%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 2 (1.4%) / 147<br/>invalid: 5 (16.1%) / 31<br/>all: 7
(3.9%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 1,177 (5%) / 23,345<br/>invalid: 336 (5.3%) /
6,375<br/>all: 1,513 (5.1%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 572 (7.3%) / 7,851<br/>invalid: 214 (8.6%) /
2,502<br/>all: 786 (7.6%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 605 (3.9%) / 15,494<br/>invalid: 122 (3.2%) /
3,873<br/>all: 727 (3.8%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                      | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:--------------------------|:--------------|:---------|:---------|-------:|------:|
| 25  | spectral/postman/postman-library | info-contact-email-or-url | kin           | OpenAPI3 | true     |    465 |   465 |
| 26  | spectral/postman/postman-library | info-contact-email-or-url | kin           | OpenAPI2 | true     |    464 |   464 |
| 27  | spectral/postman/postman-library | info-contact-email-or-url | kin           | OpenAPI2 | false    |    155 |   155 |
| 28  | spectral/postman/postman-library | info-contact-email-or-url | postman_apis  | OpenAPI3 | true     |    138 |   138 |
| 29  | spectral/postman/postman-library | info-contact-email-or-url | postman_apis  | OpenAPI2 | true     |     96 |    96 |
| 30  | spectral/postman/postman-library | info-contact-email-or-url | kin           | OpenAPI3 | false    |     80 |    80 |
| 31  | spectral/postman/postman-library | info-contact-email-or-url | postman_apis  | OpenAPI2 | false    |     52 |    52 |
| 32  | spectral/postman/postman-library | info-contact-email-or-url | postman_apis  | OpenAPI3 | false    |     37 |    37 |
| 33  | spectral/postman/postman-library | info-contact-email-or-url | kinweb        | OpenAPI2 | true     |     12 |    12 |
| 34  | spectral/postman/postman-library | info-contact-email-or-url | kinweb        | OpenAPI2 | false    |      7 |     7 |
| 35  | spectral/postman/postman-library | info-contact-email-or-url | kinweb        | OpenAPI3 | false    |      5 |     5 |
| 36  | spectral/postman/postman-library | info-contact-email-or-url | kinweb        | OpenAPI3 | true     |      2 |     2 |

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
<small>valid: 2,684 (17.2%) / 15,617<br/>invalid: 820 (16.5%) /
4,967<br/>all: 3,504 (17%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 1,120 (17.5%) / 6,407<br/>invalid: 354 (17.3%) /
2,044<br/>all: 1,474 (17.4%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 1,564 (17%) / 9,210<br/>invalid: 466 (15.9%) /
2,923<br/>all: 2,030 (16.7%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 31 (10.5%) / 295<br/>invalid: 25 (23.1%) / 108<br/>all: 56
(13.9%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 19 (12.8%) / 148<br/>invalid: 17 (22.1%) / 77<br/>all: 36
(16%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 12 (8.2%) / 147<br/>invalid: 8 (25.8%) / 31<br/>all: 20
(11.2%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 3,187 (13.7%) / 23,345<br/>invalid: 940 (14.7%) /
6,375<br/>all: 4,127 (13.9%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 1,389 (17.7%) / 7,851<br/>invalid: 420 (16.8%) /
2,502<br/>all: 1,809 (17.5%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 1,798 (11.6%) / 15,494<br/>invalid: 520 (13.4%) /
3,873<br/>all: 2,318 (12%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code              | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:------------------|:--------------|:---------|:---------|-------:|------:|
| 37  | spectral/postman/postman-library | info-contact-name | kin           | OpenAPI3 | true     |   1564 |  1564 |
| 38  | spectral/postman/postman-library | info-contact-name | kin           | OpenAPI2 | true     |   1120 |  1120 |
| 39  | spectral/postman/postman-library | info-contact-name | kin           | OpenAPI3 | false    |    466 |   466 |
| 40  | spectral/postman/postman-library | info-contact-name | kin           | OpenAPI2 | false    |    354 |   354 |
| 41  | spectral/postman/postman-library | info-contact-name | postman_apis  | OpenAPI2 | true     |    250 |   250 |
| 42  | spectral/postman/postman-library | info-contact-name | postman_apis  | OpenAPI3 | true     |    222 |   222 |
| 43  | spectral/postman/postman-library | info-contact-name | postman_apis  | OpenAPI2 | false    |     49 |    49 |
| 44  | spectral/postman/postman-library | info-contact-name | postman_apis  | OpenAPI3 | false    |     46 |    46 |
| 45  | spectral/postman/postman-library | info-contact-name | kinweb        | OpenAPI2 | true     |     19 |    19 |
| 46  | spectral/postman/postman-library | info-contact-name | kinweb        | OpenAPI2 | false    |     17 |    17 |
| 47  | spectral/postman/postman-library | info-contact-name | kinweb        | OpenAPI3 | true     |     12 |    12 |
| 48  | spectral/postman/postman-library | info-contact-name | kinweb        | OpenAPI3 | false    |      8 |     8 |

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
<small>valid: 3,631 (23.3%) / 15,617<br/>invalid: 1,093 (22%) /
4,967<br/>all: 4,724 (22.9%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 1,553 (24.2%) / 6,407<br/>invalid: 445 (21.8%) /
2,044<br/>all: 1,998 (23.6%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 2,078 (22.6%) / 9,210<br/>invalid: 648 (22.2%) /
2,923<br/>all: 2,726 (22.5%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 53 (18%) / 295<br/>invalid: 35 (32.4%) / 108<br/>all: 88
(21.8%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 33 (22.3%) / 148<br/>invalid: 23 (29.9%) / 77<br/>all: 56
(24.9%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 20 (13.6%) / 147<br/>invalid: 12 (38.7%) / 31<br/>all: 32
(18%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 4,398 (18.8%) / 23,345<br/>invalid: 1,289 (20.2%) /
6,375<br/>all: 5,687 (19.1%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 1,923 (24.5%) / 7,851<br/>invalid: 551 (22%) /
2,502<br/>all: 2,474 (23.9%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 2,475 (16%) / 15,494<br/>invalid: 738 (19.1%) /
3,873<br/>all: 3,213 (16.6%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code             | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-----------------|:--------------|:---------|:---------|-------:|------:|
| 49  | spectral/postman/postman-library | info-contact-url | kin           | OpenAPI3 | true     |   2078 |  2078 |
| 50  | spectral/postman/postman-library | info-contact-url | kin           | OpenAPI2 | true     |   1553 |  1553 |
| 51  | spectral/postman/postman-library | info-contact-url | kin           | OpenAPI3 | false    |    648 |   648 |
| 52  | spectral/postman/postman-library | info-contact-url | kin           | OpenAPI2 | false    |    445 |   445 |
| 53  | spectral/postman/postman-library | info-contact-url | postman_apis  | OpenAPI3 | true     |    377 |   377 |
| 54  | spectral/postman/postman-library | info-contact-url | postman_apis  | OpenAPI2 | true     |    337 |   337 |
| 55  | spectral/postman/postman-library | info-contact-url | postman_apis  | OpenAPI2 | false    |     83 |    83 |
| 56  | spectral/postman/postman-library | info-contact-url | postman_apis  | OpenAPI3 | false    |     78 |    78 |
| 57  | spectral/postman/postman-library | info-contact-url | kinweb        | OpenAPI2 | true     |     33 |    33 |
| 58  | spectral/postman/postman-library | info-contact-url | kinweb        | OpenAPI2 | false    |     23 |    23 |
| 59  | spectral/postman/postman-library | info-contact-url | kinweb        | OpenAPI3 | true     |     20 |    20 |
| 60  | spectral/postman/postman-library | info-contact-url | kinweb        | OpenAPI3 | false    |     12 |    12 |

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
<small>valid: 3,383 (21.7%) / 15,617<br/>invalid: 1,032 (20.8%) /
4,967<br/>all: 4,415 (21.4%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 1,182 (18.4%) / 6,407<br/>invalid: 350 (17.1%) /
2,044<br/>all: 1,532 (18.1%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 2,201 (23.9%) / 9,210<br/>invalid: 682 (23.3%) /
2,923<br/>all: 2,883 (23.8%) / 12,133</small>
</td>
</tr>
<tr>
<td>
kinweb
</td>
<td style="text-align:center">
<small>valid: 87 (29.5%) / 295<br/>invalid: 22 (20.4%) / 108<br/>all:
109 (27%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 47 (31.8%) / 148<br/>invalid: 13 (16.9%) / 77<br/>all: 60
(26.7%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 40 (27.2%) / 147<br/>invalid: 9 (29%) / 31<br/>all: 49
(27.5%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 7,531 (32.3%) / 23,345<br/>invalid: 1,490 (23.4%) /
6,375<br/>all: 9,021 (30.4%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 1,485 (18.9%) / 7,851<br/>invalid: 518 (20.7%) /
2,502<br/>all: 2,003 (19.3%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 6,046 (39%) / 15,494<br/>invalid: 972 (25.1%) /
3,873<br/>all: 7,018 (36.2%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code             | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-----------------|:--------------|:---------|:---------|-------:|------:|
| 61  | spectral/postman/postman-library | info-description | postman_apis  | OpenAPI3 | true     |   3805 |  3805 |
| 62  | spectral/postman/postman-library | info-description | kin           | OpenAPI3 | true     |   2201 |  2201 |
| 63  | spectral/postman/postman-library | info-description | kin           | OpenAPI2 | true     |   1182 |  1182 |
| 64  | spectral/postman/postman-library | info-description | kin           | OpenAPI3 | false    |    682 |   682 |
| 65  | spectral/postman/postman-library | info-description | kin           | OpenAPI2 | false    |    350 |   350 |
| 66  | spectral/postman/postman-library | info-description | postman_apis  | OpenAPI3 | false    |    281 |   281 |
| 67  | spectral/postman/postman-library | info-description | postman_apis  | OpenAPI2 | true     |    256 |   256 |
| 68  | spectral/postman/postman-library | info-description | postman_apis  | OpenAPI2 | false    |    155 |   155 |
| 69  | spectral/postman/postman-library | info-description | kinweb        | OpenAPI2 | true     |     47 |    47 |
| 70  | spectral/postman/postman-library | info-description | kinweb        | OpenAPI3 | true     |     40 |    40 |
| 71  | spectral/postman/postman-library | info-description | kinweb        | OpenAPI2 | false    |     13 |    13 |
| 72  | spectral/postman/postman-library | info-description | kinweb        | OpenAPI3 | false    |      9 |     9 |

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
<small>valid: 10,071 (64.5%) / 15,617<br/>invalid: 3,070 (61.8%) /
4,967<br/>all: 13,141 (63.8%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 4,190 (65.4%) / 6,407<br/>invalid: 1,162 (56.8%) /
2,044<br/>all: 5,352 (63.3%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 5,881 (63.9%) / 9,210<br/>invalid: 1,908 (65.3%) /
2,923<br/>all: 7,789 (64.2%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 220 (74.6%) / 295<br/>invalid: 85 (78.7%) / 108<br/>all:
305 (75.7%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 103 (69.6%) / 148<br/>invalid: 59 (76.6%) / 77<br/>all:
162 (72%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 117 (79.6%) / 147<br/>invalid: 26 (83.9%) / 31<br/>all:
143 (80.3%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 14,615 (62.6%) / 23,345<br/>invalid: 3,759 (59%) /
6,375<br/>all: 18,374 (61.8%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 5,222 (66.5%) / 7,851<br/>invalid: 1,509 (60.3%) /
2,502<br/>all: 6,731 (65%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 9,393 (60.6%) / 15,494<br/>invalid: 2,250 (58.1%) /
3,873<br/>all: 11,643 (60.1%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code         | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-------------|:--------------|:---------|:---------|-------:|------:|
| 73  | spectral/postman/postman-library | info-license | kin           | OpenAPI3 | true     |   5881 |  5881 |
| 74  | spectral/postman/postman-library | info-license | kin           | OpenAPI2 | true     |   4190 |  4190 |
| 75  | spectral/postman/postman-library | info-license | postman_apis  | OpenAPI3 | true     |   3395 |  3395 |
| 76  | spectral/postman/postman-library | info-license | kin           | OpenAPI3 | false    |   1908 |  1908 |
| 77  | spectral/postman/postman-library | info-license | kin           | OpenAPI2 | false    |   1162 |  1162 |
| 78  | spectral/postman/postman-library | info-license | postman_apis  | OpenAPI2 | true     |    929 |   929 |
| 79  | spectral/postman/postman-library | info-license | postman_apis  | OpenAPI3 | false    |    316 |   316 |
| 80  | spectral/postman/postman-library | info-license | postman_apis  | OpenAPI2 | false    |    288 |   288 |
| 81  | spectral/postman/postman-library | info-license | kinweb        | OpenAPI3 | true     |    117 |   117 |
| 82  | spectral/postman/postman-library | info-license | kinweb        | OpenAPI2 | true     |    103 |   103 |
| 83  | spectral/postman/postman-library | info-license | kinweb        | OpenAPI2 | false    |     59 |    59 |
| 84  | spectral/postman/postman-library | info-license | kinweb        | OpenAPI3 | false    |     26 |    26 |

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
<small>valid: 534 (3.4%) / 15,617<br/>invalid: 192 (3.9%) /
4,967<br/>all: 726 (3.5%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 169 (2.6%) / 6,407<br/>invalid: 64 (3.1%) / 2,044<br/>all:
233 (2.8%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 365 (4%) / 9,210<br/>invalid: 128 (4.4%) / 2,923<br/>all:
493 (4.1%) / 12,133</small>
</td>
</tr>
<tr>
<td>
kinweb
</td>
<td style="text-align:center">
<small>valid: 12 (4.1%) / 295<br/>invalid: 9 (8.3%) / 108<br/>all: 21
(5.2%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 7 (4.7%) / 148<br/>invalid: 8 (10.4%) / 77<br/>all: 15
(6.7%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 5 (3.4%) / 147<br/>invalid: 1 (3.2%) / 31<br/>all: 6
(3.4%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 3,069 (13.1%) / 23,345<br/>invalid: 348 (5.5%) /
6,375<br/>all: 3,417 (11.5%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 227 (2.9%) / 7,851<br/>invalid: 114 (4.6%) /
2,502<br/>all: 341 (3.3%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 2,842 (18.3%) / 15,494<br/>invalid: 234 (6%) /
3,873<br/>all: 3,076 (15.9%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code             | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-----------------|:--------------|:---------|:---------|-------:|------:|
| 85  | spectral/postman/postman-library | info-license-url | postman_apis  | OpenAPI3 | true     |   2472 |  2472 |
| 86  | spectral/postman/postman-library | info-license-url | kin           | OpenAPI3 | true     |    365 |   365 |
| 87  | spectral/postman/postman-library | info-license-url | kin           | OpenAPI2 | true     |    169 |   169 |
| 88  | spectral/postman/postman-library | info-license-url | kin           | OpenAPI3 | false    |    128 |   128 |
| 89  | spectral/postman/postman-library | info-license-url | postman_apis  | OpenAPI3 | false    |    105 |   105 |
| 90  | spectral/postman/postman-library | info-license-url | kin           | OpenAPI2 | false    |     64 |    64 |
| 91  | spectral/postman/postman-library | info-license-url | postman_apis  | OpenAPI2 | true     |     51 |    51 |
| 92  | spectral/postman/postman-library | info-license-url | postman_apis  | OpenAPI2 | false    |     42 |    42 |
| 93  | spectral/postman/postman-library | info-license-url | kinweb        | OpenAPI2 | false    |      8 |     8 |
| 94  | spectral/postman/postman-library | info-license-url | kinweb        | OpenAPI2 | true     |      7 |     7 |
| 95  | spectral/postman/postman-library | info-license-url | kinweb        | OpenAPI3 | true     |      5 |     5 |
| 96  | spectral/postman/postman-library | info-license-url | kinweb        | OpenAPI3 | false    |      1 |     1 |

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
<small>valid: 12,223 (78.3%) / 15,617<br/>invalid: 3,572 (71.9%) /
4,967<br/>all: 15,795 (76.7%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 4,875 (76.1%) / 6,407<br/>invalid: 1,319 (64.5%) /
2,044<br/>all: 6,194 (73.3%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 7,348 (79.8%) / 9,210<br/>invalid: 2,253 (77.1%) /
2,923<br/>all: 9,601 (79.1%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 217 (73.6%) / 295<br/>invalid: 93 (86.1%) / 108<br/>all:
310 (76.9%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 119 (80.4%) / 148<br/>invalid: 65 (84.4%) / 77<br/>all:
184 (81.8%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 98 (66.7%) / 147<br/>invalid: 28 (90.3%) / 31<br/>all: 126
(70.8%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 19,308 (82.7%) / 23,345<br/>invalid: 4,664 (73.2%) /
6,375<br/>all: 23,972 (80.7%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 5,940 (75.7%) / 7,851<br/>invalid: 1,682 (67.2%) /
2,502<br/>all: 7,622 (73.6%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 13,368 (86.3%) / 15,494<br/>invalid: 2,982 (77%) /
3,873<br/>all: 16,350 (84.4%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                  | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:----------------------|:--------------|:---------|:---------|-------:|------:|
| 97  | spectral/postman/postman-library | info-terms-of-service | kin           | OpenAPI3 | true     |   7348 |  7348 |
| 98  | spectral/postman/postman-library | info-terms-of-service | postman_apis  | OpenAPI3 | true     |   5922 |  5922 |
| 99  | spectral/postman/postman-library | info-terms-of-service | kin           | OpenAPI2 | true     |   4875 |  4875 |
| 100 | spectral/postman/postman-library | info-terms-of-service | kin           | OpenAPI3 | false    |   2253 |  2253 |
| 101 | spectral/postman/postman-library | info-terms-of-service | kin           | OpenAPI2 | false    |   1319 |  1319 |
| 102 | spectral/postman/postman-library | info-terms-of-service | postman_apis  | OpenAPI2 | true     |    946 |   946 |
| 103 | spectral/postman/postman-library | info-terms-of-service | postman_apis  | OpenAPI3 | false    |    701 |   701 |
| 104 | spectral/postman/postman-library | info-terms-of-service | postman_apis  | OpenAPI2 | false    |    298 |   298 |
| 105 | spectral/postman/postman-library | info-terms-of-service | kinweb        | OpenAPI2 | true     |    119 |   119 |
| 106 | spectral/postman/postman-library | info-terms-of-service | kinweb        | OpenAPI3 | true     |     98 |    98 |
| 107 | spectral/postman/postman-library | info-terms-of-service | kinweb        | OpenAPI2 | false    |     65 |    65 |
| 108 | spectral/postman/postman-library | info-terms-of-service | kinweb        | OpenAPI3 | false    |     28 |    28 |

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
<small>valid: 289 (1.9%) / 15,617<br/>invalid: 146 (2.9%) /
4,967<br/>all: 435 (2.1%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 74 (1.2%) / 6,407<br/>invalid: 33 (1.6%) / 2,044<br/>all:
107 (1.3%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 215 (2.3%) / 9,210<br/>invalid: 113 (3.9%) /
2,923<br/>all: 328 (2.7%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 6 (2%) / 295<br/>invalid: 5 (4.6%) / 108<br/>all: 11
(2.7%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 2 (1.4%) / 148<br/>invalid: 5 (6.5%) / 77<br/>all: 7
(3.1%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 4 (2.7%) / 147<br/>invalid: 0 (0%) / 31<br/>all: 4 (2.2%)
/ 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 403 (1.7%) / 23,345<br/>invalid: 224 (3.5%) /
6,375<br/>all: 627 (2.1%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 93 (1.2%) / 7,851<br/>invalid: 66 (2.6%) / 2,502<br/>all:
159 (1.5%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 310 (2%) / 15,494<br/>invalid: 158 (4.1%) / 3,873<br/>all:
468 (2.4%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                    | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:------------------------|:--------------|:---------|:---------|-------:|------:|
| 109 | spectral/postman/postman-library | no-response-body-on-204 | kin           | OpenAPI3 | true     |    215 |   580 |
| 110 | spectral/postman/postman-library | no-response-body-on-204 | kin           | OpenAPI3 | false    |    113 |   710 |
| 111 | spectral/postman/postman-library | no-response-body-on-204 | postman_apis  | OpenAPI3 | true     |     91 |   587 |
| 112 | spectral/postman/postman-library | no-response-body-on-204 | kin           | OpenAPI2 | true     |     74 |   164 |
| 113 | spectral/postman/postman-library | no-response-body-on-204 | postman_apis  | OpenAPI3 | false    |     45 |   623 |
| 114 | spectral/postman/postman-library | no-response-body-on-204 | kin           | OpenAPI2 | false    |     33 |   129 |
| 115 | spectral/postman/postman-library | no-response-body-on-204 | postman_apis  | OpenAPI2 | false    |     28 |   861 |
| 116 | spectral/postman/postman-library | no-response-body-on-204 | postman_apis  | OpenAPI2 | true     |     17 |    60 |
| 117 | spectral/postman/postman-library | no-response-body-on-204 | kinweb        | OpenAPI2 | false    |      5 |    15 |
| 118 | spectral/postman/postman-library | no-response-body-on-204 | kinweb        | OpenAPI3 | true     |      4 |     8 |
| 119 | spectral/postman/postman-library | no-response-body-on-204 | kinweb        | OpenAPI2 | true     |      2 |     5 |

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
<small>valid: 965 (6.2%) / 15,617<br/>invalid: 412 (8.3%) /
4,967<br/>all: 1,377 (6.7%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 386 (6%) / 6,407<br/>invalid: 175 (8.6%) / 2,044<br/>all:
561 (6.6%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 579 (6.3%) / 9,210<br/>invalid: 237 (8.1%) /
2,923<br/>all: 816 (6.7%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 9 (3.1%) / 295<br/>invalid: 7 (6.5%) / 108<br/>all: 16
(4%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 6 (4.1%) / 148<br/>invalid: 6 (7.8%) / 77<br/>all: 12
(5.3%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 3 (2%) / 147<br/>invalid: 1 (3.2%) / 31<br/>all: 4 (2.2%)
/ 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 1,371 (5.9%) / 23,345<br/>invalid: 550 (8.6%) /
6,375<br/>all: 1,921 (6.5%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 571 (7.3%) / 7,851<br/>invalid: 224 (9%) / 2,502<br/>all:
795 (7.7%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 800 (5.2%) / 15,494<br/>invalid: 326 (8.4%) /
3,873<br/>all: 1,126 (5.8%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                       | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:---------------------------|:--------------|:---------|:---------|-------:|------:|
| 120 | spectral/postman/postman-library | no-trailing-slash-on-paths | kin           | OpenAPI3 | true     |    579 |  2981 |
| 121 | spectral/postman/postman-library | no-trailing-slash-on-paths | kin           | OpenAPI2 | true     |    386 |  3068 |
| 122 | spectral/postman/postman-library | no-trailing-slash-on-paths | kin           | OpenAPI3 | false    |    237 |  1486 |
| 123 | spectral/postman/postman-library | no-trailing-slash-on-paths | postman_apis  | OpenAPI3 | true     |    218 |  1067 |
| 124 | spectral/postman/postman-library | no-trailing-slash-on-paths | postman_apis  | OpenAPI2 | true     |    179 |  2401 |
| 125 | spectral/postman/postman-library | no-trailing-slash-on-paths | kin           | OpenAPI2 | false    |    175 |   943 |
| 126 | spectral/postman/postman-library | no-trailing-slash-on-paths | postman_apis  | OpenAPI3 | false    |     88 |   823 |
| 127 | spectral/postman/postman-library | no-trailing-slash-on-paths | postman_apis  | OpenAPI2 | false    |     43 |   461 |
| 128 | spectral/postman/postman-library | no-trailing-slash-on-paths | kinweb        | OpenAPI2 | true     |      6 |    37 |
| 129 | spectral/postman/postman-library | no-trailing-slash-on-paths | kinweb        | OpenAPI2 | false    |      6 |    45 |
| 130 | spectral/postman/postman-library | no-trailing-slash-on-paths | kinweb        | OpenAPI3 | true     |      3 |     9 |
| 131 | spectral/postman/postman-library | no-trailing-slash-on-paths | kinweb        | OpenAPI3 | false    |      1 |    22 |

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
<small>valid: 6,793 (43.5%) / 15,617<br/>invalid: 2,101 (42.3%) /
4,967<br/>all: 8,894 (43.2%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 2,722 (42.5%) / 6,407<br/>invalid: 858 (42%) /
2,044<br/>all: 3,580 (42.4%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 4,071 (44.2%) / 9,210<br/>invalid: 1,243 (42.5%) /
2,923<br/>all: 5,314 (43.8%) / 12,133</small>
</td>
</tr>
<tr>
<td>
kinweb
</td>
<td style="text-align:center">
<small>valid: 178 (60.3%) / 295<br/>invalid: 68 (63%) / 108<br/>all: 246
(61%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 93 (62.8%) / 148<br/>invalid: 51 (66.2%) / 77<br/>all: 144
(64%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 85 (57.8%) / 147<br/>invalid: 17 (54.8%) / 31<br/>all: 102
(57.3%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 12,428 (53.2%) / 23,345<br/>invalid: 2,712 (42.5%) /
6,375<br/>all: 15,140 (50.9%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 3,506 (44.7%) / 7,851<br/>invalid: 1,101 (44%) /
2,502<br/>all: 4,607 (44.5%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 8,922 (57.6%) / 15,494<br/>invalid: 1,611 (41.6%) /
3,873<br/>all: 10,533 (54.4%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                   | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-----------------------|:--------------|:---------|:---------|-------:|------:|
| 132 | spectral/postman/postman-library | operations-description | postman_apis  | OpenAPI3 | true     |   4766 | 41717 |
| 133 | spectral/postman/postman-library | operations-description | kin           | OpenAPI3 | true     |   4071 | 43013 |
| 134 | spectral/postman/postman-library | operations-description | kin           | OpenAPI2 | true     |   2722 | 29429 |
| 135 | spectral/postman/postman-library | operations-description | kin           | OpenAPI3 | false    |   1243 | 19147 |
| 136 | spectral/postman/postman-library | operations-description | kin           | OpenAPI2 | false    |    858 | 12390 |
| 137 | spectral/postman/postman-library | operations-description | postman_apis  | OpenAPI2 | true     |    691 | 22833 |
| 138 | spectral/postman/postman-library | operations-description | postman_apis  | OpenAPI3 | false    |    351 | 10602 |
| 139 | spectral/postman/postman-library | operations-description | postman_apis  | OpenAPI2 | false    |    192 | 30461 |
| 140 | spectral/postman/postman-library | operations-description | kinweb        | OpenAPI2 | true     |     93 |  1597 |
| 141 | spectral/postman/postman-library | operations-description | kinweb        | OpenAPI3 | true     |     85 |  1131 |
| 142 | spectral/postman/postman-library | operations-description | kinweb        | OpenAPI2 | false    |     51 |   902 |
| 143 | spectral/postman/postman-library | operations-description | kinweb        | OpenAPI3 | false    |     17 |   280 |

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
<small>valid: 1,213 (7.8%) / 15,617<br/>invalid: 444 (8.9%) /
4,967<br/>all: 1,657 (8%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 692 (10.8%) / 6,407<br/>invalid: 250 (12.2%) /
2,044<br/>all: 942 (11.1%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 521 (5.7%) / 9,210<br/>invalid: 194 (6.6%) /
2,923<br/>all: 715 (5.9%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 22 (7.5%) / 295<br/>invalid: 7 (6.5%) / 108<br/>all: 29
(7.2%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 11 (7.4%) / 148<br/>invalid: 5 (6.5%) / 77<br/>all: 16
(7.1%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 11 (7.5%) / 147<br/>invalid: 2 (6.5%) / 31<br/>all: 13
(7.3%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 1,589 (6.8%) / 23,345<br/>invalid: 541 (8.5%) /
6,375<br/>all: 2,130 (7.2%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 916 (11.7%) / 7,851<br/>invalid: 288 (11.5%) /
2,502<br/>all: 1,204 (11.6%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 673 (4.3%) / 15,494<br/>invalid: 253 (6.5%) /
3,873<br/>all: 926 (4.8%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                       | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:---------------------------|:--------------|:---------|:---------|-------:|------:|
| 144 | spectral/postman/postman-library | operations-status-code-2xx | kin           | OpenAPI2 | true     |    692 |  4650 |
| 145 | spectral/postman/postman-library | operations-status-code-2xx | kin           | OpenAPI3 | true     |    521 |  7933 |
| 146 | spectral/postman/postman-library | operations-status-code-2xx | kin           | OpenAPI2 | false    |    250 |  2254 |
| 147 | spectral/postman/postman-library | operations-status-code-2xx | postman_apis  | OpenAPI2 | true     |    213 |  2341 |
| 148 | spectral/postman/postman-library | operations-status-code-2xx | kin           | OpenAPI3 | false    |    194 |  2223 |
| 149 | spectral/postman/postman-library | operations-status-code-2xx | postman_apis  | OpenAPI3 | true     |    141 |  2288 |
| 150 | spectral/postman/postman-library | operations-status-code-2xx | postman_apis  | OpenAPI3 | false    |     57 |  1610 |
| 151 | spectral/postman/postman-library | operations-status-code-2xx | postman_apis  | OpenAPI2 | false    |     33 |  2395 |
| 152 | spectral/postman/postman-library | operations-status-code-2xx | kinweb        | OpenAPI3 | true     |     11 |    77 |
| 153 | spectral/postman/postman-library | operations-status-code-2xx | kinweb        | OpenAPI2 | true     |     11 |   184 |
| 154 | spectral/postman/postman-library | operations-status-code-2xx | kinweb        | OpenAPI2 | false    |      5 |    82 |
| 155 | spectral/postman/postman-library | operations-status-code-2xx | kinweb        | OpenAPI3 | false    |      2 |     4 |

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
<small>valid: 12,022 (77%) / 15,617<br/>invalid: 3,259 (65.6%) /
4,967<br/>all: 15,281 (74.2%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 5,126 (80%) / 6,407<br/>invalid: 1,336 (65.4%) /
2,044<br/>all: 6,462 (76.5%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 6,896 (74.9%) / 9,210<br/>invalid: 1,923 (65.8%) /
2,923<br/>all: 8,819 (72.7%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 214 (72.5%) / 295<br/>invalid: 89 (82.4%) / 108<br/>all:
303 (75.2%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 120 (81.1%) / 148<br/>invalid: 65 (84.4%) / 77<br/>all:
185 (82.2%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 94 (63.9%) / 147<br/>invalid: 24 (77.4%) / 31<br/>all: 118
(66.3%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 18,449 (79%) / 23,345<br/>invalid: 4,110 (64.5%) /
6,375<br/>all: 22,559 (75.9%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 6,197 (78.9%) / 7,851<br/>invalid: 1,757 (70.2%) /
2,502<br/>all: 7,954 (76.8%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 12,252 (79.1%) / 15,494<br/>invalid: 2,353 (60.8%) /
3,873<br/>all: 14,605 (75.4%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                       | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:---------------------------|:--------------|:---------|:---------|-------:|------:|
| 156 | spectral/postman/postman-library | operations-status-code-5xx | kin           | OpenAPI3 | true     |   6896 | 93018 |
| 157 | spectral/postman/postman-library | operations-status-code-5xx | postman_apis  | OpenAPI3 | true     |   5262 | 74496 |
| 158 | spectral/postman/postman-library | operations-status-code-5xx | kin           | OpenAPI2 | true     |   5126 | 62572 |
| 159 | spectral/postman/postman-library | operations-status-code-5xx | kin           | OpenAPI3 | false    |   1923 | 30656 |
| 160 | spectral/postman/postman-library | operations-status-code-5xx | kin           | OpenAPI2 | false    |   1336 | 23375 |
| 161 | spectral/postman/postman-library | operations-status-code-5xx | postman_apis  | OpenAPI2 | true     |    951 | 38957 |
| 162 | spectral/postman/postman-library | operations-status-code-5xx | postman_apis  | OpenAPI3 | false    |    406 | 24565 |
| 163 | spectral/postman/postman-library | operations-status-code-5xx | postman_apis  | OpenAPI2 | false    |    356 | 46348 |
| 164 | spectral/postman/postman-library | operations-status-code-5xx | kinweb        | OpenAPI2 | true     |    120 |  2059 |
| 165 | spectral/postman/postman-library | operations-status-code-5xx | kinweb        | OpenAPI3 | true     |     94 |  1255 |
| 166 | spectral/postman/postman-library | operations-status-code-5xx | kinweb        | OpenAPI2 | false    |     65 |  1886 |
| 167 | spectral/postman/postman-library | operations-status-code-5xx | kinweb        | OpenAPI3 | false    |     24 |   576 |

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
<small>valid: 5,001 (32%) / 15,617<br/>invalid: 1,198 (24.1%) /
4,967<br/>all: 6,199 (30.1%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 2,193 (34.2%) / 6,407<br/>invalid: 550 (26.9%) /
2,044<br/>all: 2,743 (32.5%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 2,808 (30.5%) / 9,210<br/>invalid: 648 (22.2%) /
2,923<br/>all: 3,456 (28.5%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 81 (27.5%) / 295<br/>invalid: 36 (33.3%) / 108<br/>all:
117 (29%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 34 (23%) / 148<br/>invalid: 26 (33.8%) / 77<br/>all: 60
(26.7%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 47 (32%) / 147<br/>invalid: 10 (32.3%) / 31<br/>all: 57
(32%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 6,243 (26.7%) / 23,345<br/>invalid: 1,462 (22.9%) /
6,375<br/>all: 7,705 (25.9%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 2,676 (34.1%) / 7,851<br/>invalid: 670 (26.8%) /
2,502<br/>all: 3,346 (32.3%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 3,567 (23%) / 15,494<br/>invalid: 792 (20.4%) /
3,873<br/>all: 4,359 (22.5%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code               | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-------------------|:--------------|:---------|:---------|-------:|------:|
| 168 | spectral/postman/postman-library | operations-summary | kin           | OpenAPI3 | true     |   2808 | 37604 |
| 169 | spectral/postman/postman-library | operations-summary | kin           | OpenAPI2 | true     |   2193 | 22335 |
| 170 | spectral/postman/postman-library | operations-summary | postman_apis  | OpenAPI3 | true     |    712 | 26490 |
| 171 | spectral/postman/postman-library | operations-summary | kin           | OpenAPI3 | false    |    648 | 14811 |
| 172 | spectral/postman/postman-library | operations-summary | kin           | OpenAPI2 | false    |    550 |  8201 |
| 173 | spectral/postman/postman-library | operations-summary | postman_apis  | OpenAPI2 | true     |    449 | 14333 |
| 174 | spectral/postman/postman-library | operations-summary | postman_apis  | OpenAPI3 | false    |    134 |  5647 |
| 175 | spectral/postman/postman-library | operations-summary | postman_apis  | OpenAPI2 | false    |     94 | 14060 |
| 176 | spectral/postman/postman-library | operations-summary | kinweb        | OpenAPI3 | true     |     47 |   393 |
| 177 | spectral/postman/postman-library | operations-summary | kinweb        | OpenAPI2 | true     |     34 |   630 |
| 178 | spectral/postman/postman-library | operations-summary | kinweb        | OpenAPI2 | false    |     26 |   167 |
| 179 | spectral/postman/postman-library | operations-summary | kinweb        | OpenAPI3 | false    |     10 |    75 |

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
<small>valid: 2,400 (15.4%) / 15,617<br/>invalid: 648 (13%) /
4,967<br/>all: 3,048 (14.8%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 1,009 (15.7%) / 6,407<br/>invalid: 244 (11.9%) /
2,044<br/>all: 1,253 (14.8%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 1,391 (15.1%) / 9,210<br/>invalid: 404 (13.8%) /
2,923<br/>all: 1,795 (14.8%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 98 (33.2%) / 295<br/>invalid: 49 (45.4%) / 108<br/>all:
147 (36.5%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 42 (28.4%) / 148<br/>invalid: 39 (50.6%) / 77<br/>all: 81
(36%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 56 (38.1%) / 147<br/>invalid: 10 (32.3%) / 31<br/>all: 66
(37.1%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 3,068 (13.1%) / 23,345<br/>invalid: 939 (14.7%) /
6,375<br/>all: 4,007 (13.5%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 1,242 (15.8%) / 7,851<br/>invalid: 388 (15.5%) /
2,502<br/>all: 1,630 (15.7%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 1,826 (11.8%) / 15,494<br/>invalid: 551 (14.2%) /
3,873<br/>all: 2,377 (12.3%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                           | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-------------------------------|:--------------|:---------|:---------|-------:|------:|
| 180 | spectral/postman/postman-library | operations-summary-period-none | kin           | OpenAPI3 | true     |   1391 | 11846 |
| 181 | spectral/postman/postman-library | operations-summary-period-none | kin           | OpenAPI2 | true     |   1009 |  9200 |
| 182 | spectral/postman/postman-library | operations-summary-period-none | kin           | OpenAPI3 | false    |    404 |  3205 |
| 183 | spectral/postman/postman-library | operations-summary-period-none | postman_apis  | OpenAPI3 | true     |    379 |  3610 |
| 184 | spectral/postman/postman-library | operations-summary-period-none | kin           | OpenAPI2 | false    |    244 |  3299 |
| 185 | spectral/postman/postman-library | operations-summary-period-none | postman_apis  | OpenAPI2 | true     |    191 |  3063 |
| 186 | spectral/postman/postman-library | operations-summary-period-none | postman_apis  | OpenAPI3 | false    |    137 |  2676 |
| 187 | spectral/postman/postman-library | operations-summary-period-none | postman_apis  | OpenAPI2 | false    |    105 |  1895 |
| 188 | spectral/postman/postman-library | operations-summary-period-none | kinweb        | OpenAPI3 | true     |     56 |   348 |
| 189 | spectral/postman/postman-library | operations-summary-period-none | kinweb        | OpenAPI2 | true     |     42 |   380 |
| 190 | spectral/postman/postman-library | operations-summary-period-none | kinweb        | OpenAPI2 | false    |     39 |   475 |
| 191 | spectral/postman/postman-library | operations-summary-period-none | kinweb        | OpenAPI3 | false    |     10 |   103 |

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
<small>valid: 5,184 (33.2%) / 15,617<br/>invalid: 1,457 (29.3%) /
4,967<br/>all: 6,641 (32.3%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 2,431 (37.9%) / 6,407<br/>invalid: 639 (31.3%) /
2,044<br/>all: 3,070 (36.3%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 2,753 (29.9%) / 9,210<br/>invalid: 818 (28%) /
2,923<br/>all: 3,571 (29.4%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 114 (38.6%) / 295<br/>invalid: 53 (49.1%) / 108<br/>all:
167 (41.4%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 67 (45.3%) / 148<br/>invalid: 38 (49.4%) / 77<br/>all: 105
(46.7%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 47 (32%) / 147<br/>invalid: 15 (48.4%) / 31<br/>all: 62
(34.8%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 7,362 (31.5%) / 23,345<br/>invalid: 2,114 (33.2%) /
6,375<br/>all: 9,476 (31.9%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 3,181 (40.5%) / 7,851<br/>invalid: 887 (35.5%) /
2,502<br/>all: 4,068 (39.3%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 4,181 (27%) / 15,494<br/>invalid: 1,227 (31.7%) /
3,873<br/>all: 5,408 (27.9%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                   | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-----------------------|:--------------|:---------|:---------|-------:|------:|
| 192 | spectral/postman/postman-library | parameters-description | kin           | OpenAPI3 | true     |   2753 | 43557 |
| 193 | spectral/postman/postman-library | parameters-description | kin           | OpenAPI2 | true     |   2431 | 30620 |
| 194 | spectral/postman/postman-library | parameters-description | postman_apis  | OpenAPI3 | true     |   1381 | 52693 |
| 195 | spectral/postman/postman-library | parameters-description | kin           | OpenAPI3 | false    |    818 | 17467 |
| 196 | spectral/postman/postman-library | parameters-description | postman_apis  | OpenAPI2 | true     |    683 | 43862 |
| 197 | spectral/postman/postman-library | parameters-description | kin           | OpenAPI2 | false    |    639 | 14179 |
| 198 | spectral/postman/postman-library | parameters-description | postman_apis  | OpenAPI3 | false    |    394 | 32240 |
| 199 | spectral/postman/postman-library | parameters-description | postman_apis  | OpenAPI2 | false    |    210 | 55832 |
| 200 | spectral/postman/postman-library | parameters-description | kinweb        | OpenAPI2 | true     |     67 |  1432 |
| 201 | spectral/postman/postman-library | parameters-description | kinweb        | OpenAPI3 | true     |     47 |  1239 |
| 202 | spectral/postman/postman-library | parameters-description | kinweb        | OpenAPI2 | false    |     38 |   961 |
| 203 | spectral/postman/postman-library | parameters-description | kinweb        | OpenAPI3 | false    |     15 |   174 |

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
<small>valid: 6,378 (40.8%) / 15,617<br/>invalid: 1,762 (35.5%) /
4,967<br/>all: 8,140 (39.5%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 6,407<br/>invalid: 7 (0.3%) / 2,044<br/>all: 7
(0.1%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 6,378 (69.3%) / 9,210<br/>invalid: 1,755 (60%) /
2,923<br/>all: 8,133 (67%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 118 (40%) / 295<br/>invalid: 26 (24.1%) / 108<br/>all: 144
(35.7%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 148<br/>invalid: 0 (0%) / 77<br/>all: 0 (0%) /
225</small>
</td>
<td style="text-align:center">
<small>valid: 118 (80.3%) / 147<br/>invalid: 26 (83.9%) / 31<br/>all:
144 (80.9%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 12,185 (52.2%) / 23,345<br/>invalid: 2,567 (40.3%) /
6,375<br/>all: 14,752 (49.6%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 7,851<br/>invalid: 11 (0.4%) / 2,502<br/>all: 11
(0.1%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 12,185 (78.6%) / 15,494<br/>invalid: 2,556 (66%) /
3,873<br/>all: 14,741 (76.1%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                    | collection_id | class    | is_valid | n_apis |  n_err |
|:----|:---------------------------------|:------------------------|:--------------|:---------|:---------|-------:|-------:|
| 204 | spectral/postman/postman-library | parameters-examples-any | kin           | OpenAPI3 | true     |   6378 | 153114 |
| 205 | spectral/postman/postman-library | parameters-examples-any | postman_apis  | OpenAPI3 | true     |   5689 | 146360 |
| 206 | spectral/postman/postman-library | parameters-examples-any | kin           | OpenAPI3 | false    |   1755 |  49649 |
| 207 | spectral/postman/postman-library | parameters-examples-any | postman_apis  | OpenAPI3 | false    |    775 |  94919 |
| 208 | spectral/postman/postman-library | parameters-examples-any | kinweb        | OpenAPI3 | true     |    118 |   2874 |
| 209 | spectral/postman/postman-library | parameters-examples-any | kinweb        | OpenAPI3 | false    |     26 |   1070 |
| 210 | spectral/postman/postman-library | parameters-examples-any | kin           | OpenAPI2 | false    |      7 |     85 |
| 211 | spectral/postman/postman-library | parameters-examples-any | postman_apis  | OpenAPI2 | false    |      4 |   1723 |

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
<small>valid: 8,813 (56.4%) / 15,617<br/>invalid: 2,212 (44.5%) /
4,967<br/>all: 11,025 (53.6%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 3,593 (56.1%) / 6,407<br/>invalid: 798 (39%) /
2,044<br/>all: 4,391 (52%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 5,220 (56.7%) / 9,210<br/>invalid: 1,414 (48.4%) /
2,923<br/>all: 6,634 (54.7%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 183 (62%) / 295<br/>invalid: 73 (67.6%) / 108<br/>all: 256
(63.5%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 90 (60.8%) / 148<br/>invalid: 59 (76.6%) / 77<br/>all: 149
(66.2%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 93 (63.3%) / 147<br/>invalid: 14 (45.2%) / 31<br/>all: 107
(60.1%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 11,916 (51%) / 23,345<br/>invalid: 2,931 (46%) /
6,375<br/>all: 14,847 (50%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 4,667 (59.4%) / 7,851<br/>invalid: 1,126 (45%) /
2,502<br/>all: 5,793 (56%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 7,249 (46.8%) / 15,494<br/>invalid: 1,805 (46.6%) /
3,873<br/>all: 9,054 (46.7%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                        | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:----------------------------|:--------------|:---------|:---------|-------:|------:|
| 212 | spectral/postman/postman-library | request-bodies-examples-any | kin           | OpenAPI3 | true     |   5220 | 40844 |
| 213 | spectral/postman/postman-library | request-bodies-examples-any | kin           | OpenAPI2 | true     |   3593 | 16855 |
| 214 | spectral/postman/postman-library | request-bodies-examples-any | postman_apis  | OpenAPI3 | true     |   1936 | 44954 |
| 215 | spectral/postman/postman-library | request-bodies-examples-any | kin           | OpenAPI3 | false    |   1414 | 12736 |
| 216 | spectral/postman/postman-library | request-bodies-examples-any | postman_apis  | OpenAPI2 | true     |    984 | 12913 |
| 217 | spectral/postman/postman-library | request-bodies-examples-any | kin           | OpenAPI2 | false    |    798 |  5477 |
| 218 | spectral/postman/postman-library | request-bodies-examples-any | postman_apis  | OpenAPI3 | false    |    377 | 11221 |
| 219 | spectral/postman/postman-library | request-bodies-examples-any | postman_apis  | OpenAPI2 | false    |    269 | 16554 |
| 220 | spectral/postman/postman-library | request-bodies-examples-any | kinweb        | OpenAPI3 | true     |     93 |  1073 |
| 221 | spectral/postman/postman-library | request-bodies-examples-any | kinweb        | OpenAPI2 | true     |     90 |   517 |
| 222 | spectral/postman/postman-library | request-bodies-examples-any | kinweb        | OpenAPI2 | false    |     59 |   513 |
| 223 | spectral/postman/postman-library | request-bodies-examples-any | kinweb        | OpenAPI3 | false    |     14 |   166 |

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
<small>valid: 245 (1.6%) / 15,617<br/>invalid: 245 (4.9%) /
4,967<br/>all: 490 (2.4%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 106 (1.7%) / 6,407<br/>invalid: 60 (2.9%) / 2,044<br/>all:
166 (2%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 139 (1.5%) / 9,210<br/>invalid: 185 (6.3%) /
2,923<br/>all: 324 (2.7%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 3 (1%) / 295<br/>invalid: 2 (1.9%) / 108<br/>all: 5 (1.2%)
/ 403</small>
</td>
<td style="text-align:center">
<small>valid: 2 (1.4%) / 148<br/>invalid: 2 (2.6%) / 77<br/>all: 4
(1.8%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 1 (0.7%) / 147<br/>invalid: 0 (0%) / 31<br/>all: 1 (0.6%)
/ 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 374 (1.6%) / 23,345<br/>invalid: 365 (5.7%) /
6,375<br/>all: 739 (2.5%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 165 (2.1%) / 7,851<br/>invalid: 126 (5%) / 2,502<br/>all:
291 (2.8%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 209 (1.3%) / 15,494<br/>invalid: 239 (6.2%) /
3,873<br/>all: 448 (2.3%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                  | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:----------------------|:--------------|:---------|:---------|-------:|------:|
| 224 | spectral/postman/postman-library | request-body-on-patch | kin           | OpenAPI3 | false    |    185 |   891 |
| 225 | spectral/postman/postman-library | request-body-on-patch | kin           | OpenAPI3 | true     |    139 |  1152 |
| 226 | spectral/postman/postman-library | request-body-on-patch | kin           | OpenAPI2 | true     |    106 |   629 |
| 227 | spectral/postman/postman-library | request-body-on-patch | postman_apis  | OpenAPI3 | true     |     69 |   547 |
| 228 | spectral/postman/postman-library | request-body-on-patch | postman_apis  | OpenAPI2 | false    |     64 |   295 |
| 229 | spectral/postman/postman-library | request-body-on-patch | kin           | OpenAPI2 | false    |     60 |   437 |
| 230 | spectral/postman/postman-library | request-body-on-patch | postman_apis  | OpenAPI2 | true     |     57 |   281 |
| 231 | spectral/postman/postman-library | request-body-on-patch | postman_apis  | OpenAPI3 | false    |     54 |  1957 |
| 232 | spectral/postman/postman-library | request-body-on-patch | kinweb        | OpenAPI2 | true     |      2 |     2 |
| 233 | spectral/postman/postman-library | request-body-on-patch | kinweb        | OpenAPI2 | false    |      2 |     5 |
| 234 | spectral/postman/postman-library | request-body-on-patch | kinweb        | OpenAPI3 | true     |      1 |     2 |

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
<small>valid: 2,690 (17.2%) / 15,617<br/>invalid: 1,246 (25.1%) /
4,967<br/>all: 3,936 (19.1%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 1,179 (18.4%) / 6,407<br/>invalid: 507 (24.8%) /
2,044<br/>all: 1,686 (20%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 1,511 (16.4%) / 9,210<br/>invalid: 739 (25.3%) /
2,923<br/>all: 2,250 (18.5%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 79 (26.8%) / 295<br/>invalid: 39 (36.1%) / 108<br/>all:
118 (29.3%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 43 (29.1%) / 148<br/>invalid: 28 (36.4%) / 77<br/>all: 71
(31.6%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 36 (24.5%) / 147<br/>invalid: 11 (35.5%) / 31<br/>all: 47
(26.4%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 3,676 (15.7%) / 23,345<br/>invalid: 1,770 (27.8%) /
6,375<br/>all: 5,446 (18.3%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 1,544 (19.7%) / 7,851<br/>invalid: 702 (28.1%) /
2,502<br/>all: 2,246 (21.7%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 2,132 (13.8%) / 15,494<br/>invalid: 1,068 (27.6%) /
3,873<br/>all: 3,200 (16.5%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                 | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:---------------------|:--------------|:---------|:---------|-------:|------:|
| 235 | spectral/postman/postman-library | request-body-on-post | kin           | OpenAPI3 | true     |   1511 | 17426 |
| 236 | spectral/postman/postman-library | request-body-on-post | kin           | OpenAPI2 | true     |   1179 | 13151 |
| 237 | spectral/postman/postman-library | request-body-on-post | kin           | OpenAPI3 | false    |    739 |  8546 |
| 238 | spectral/postman/postman-library | request-body-on-post | postman_apis  | OpenAPI3 | true     |    585 | 15060 |
| 239 | spectral/postman/postman-library | request-body-on-post | kin           | OpenAPI2 | false    |    507 |  6770 |
| 240 | spectral/postman/postman-library | request-body-on-post | postman_apis  | OpenAPI2 | true     |    322 |  5369 |
| 241 | spectral/postman/postman-library | request-body-on-post | postman_apis  | OpenAPI3 | false    |    318 | 17464 |
| 242 | spectral/postman/postman-library | request-body-on-post | postman_apis  | OpenAPI2 | false    |    167 |  7515 |
| 243 | spectral/postman/postman-library | request-body-on-post | kinweb        | OpenAPI2 | true     |     43 |   373 |
| 244 | spectral/postman/postman-library | request-body-on-post | kinweb        | OpenAPI3 | true     |     36 |   296 |
| 245 | spectral/postman/postman-library | request-body-on-post | kinweb        | OpenAPI2 | false    |     28 |   217 |
| 246 | spectral/postman/postman-library | request-body-on-post | kinweb        | OpenAPI3 | false    |     11 |   151 |

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
<small>valid: 910 (5.8%) / 15,617<br/>invalid: 505 (10.2%) /
4,967<br/>all: 1,415 (6.9%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 493 (7.7%) / 6,407<br/>invalid: 217 (10.6%) /
2,044<br/>all: 710 (8.4%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 417 (4.5%) / 9,210<br/>invalid: 288 (9.9%) /
2,923<br/>all: 705 (5.8%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 20 (6.8%) / 295<br/>invalid: 14 (13%) / 108<br/>all: 34
(8.4%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 14 (9.5%) / 148<br/>invalid: 8 (10.4%) / 77<br/>all: 22
(9.8%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 6 (4.1%) / 147<br/>invalid: 6 (19.4%) / 31<br/>all: 12
(6.7%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 1,323 (5.7%) / 23,345<br/>invalid: 721 (11.3%) /
6,375<br/>all: 2,044 (6.9%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 636 (8.1%) / 7,851<br/>invalid: 311 (12.4%) /
2,502<br/>all: 947 (9.1%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 687 (4.4%) / 15,494<br/>invalid: 410 (10.6%) /
3,873<br/>all: 1,097 (5.7%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:--------------------|:--------------|:---------|:---------|-------:|------:|
| 247 | spectral/postman/postman-library | request-body-on-put | kin           | OpenAPI2 | true     |    493 |  3483 |
| 248 | spectral/postman/postman-library | request-body-on-put | kin           | OpenAPI3 | true     |    417 |  3464 |
| 249 | spectral/postman/postman-library | request-body-on-put | kin           | OpenAPI3 | false    |    288 |  2148 |
| 250 | spectral/postman/postman-library | request-body-on-put | postman_apis  | OpenAPI3 | true     |    264 |  9049 |
| 251 | spectral/postman/postman-library | request-body-on-put | kin           | OpenAPI2 | false    |    217 |  2215 |
| 252 | spectral/postman/postman-library | request-body-on-put | postman_apis  | OpenAPI2 | true     |    129 |  1536 |
| 253 | spectral/postman/postman-library | request-body-on-put | postman_apis  | OpenAPI3 | false    |    116 |  4430 |
| 254 | spectral/postman/postman-library | request-body-on-put | postman_apis  | OpenAPI2 | false    |     86 |  1460 |
| 255 | spectral/postman/postman-library | request-body-on-put | kinweb        | OpenAPI2 | true     |     14 |   166 |
| 256 | spectral/postman/postman-library | request-body-on-put | kinweb        | OpenAPI2 | false    |      8 |    45 |
| 257 | spectral/postman/postman-library | request-body-on-put | kinweb        | OpenAPI3 | true     |      6 |    40 |
| 258 | spectral/postman/postman-library | request-body-on-put | kinweb        | OpenAPI3 | false    |      6 |    67 |

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
<small>valid: 12,957 (83%) / 15,617<br/>invalid: 3,052 (61.4%) /
4,967<br/>all: 16,009 (77.8%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 5,970 (93.2%) / 6,407<br/>invalid: 1,472 (72%) /
2,044<br/>all: 7,442 (88.1%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 6,987 (75.9%) / 9,210<br/>invalid: 1,580 (54.1%) /
2,923<br/>all: 8,567 (70.6%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 281 (95.3%) / 295<br/>invalid: 98 (90.7%) / 108<br/>all:
379 (94%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 142 (95.9%) / 148<br/>invalid: 75 (97.4%) / 77<br/>all:
217 (96.4%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 139 (94.6%) / 147<br/>invalid: 23 (74.2%) / 31<br/>all:
162 (91%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 20,279 (86.9%) / 23,345<br/>invalid: 3,872 (60.7%) /
6,375<br/>all: 24,151 (81.3%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 7,381 (94%) / 7,851<br/>invalid: 1,890 (75.5%) /
2,502<br/>all: 9,271 (89.5%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 12,898 (83.2%) / 15,494<br/>invalid: 1,982 (51.2%) /
3,873<br/>all: 14,880 (76.8%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                   | collection_id | class    | is_valid | n_apis |  n_err |
|:----|:---------------------------------|:-----------------------|:--------------|:---------|:---------|-------:|-------:|
| 259 | spectral/postman/postman-library | responses-examples-any | kin           | OpenAPI3 | true     |   6987 | 151020 |
| 260 | spectral/postman/postman-library | responses-examples-any | kin           | OpenAPI2 | true     |   5970 | 186703 |
| 261 | spectral/postman/postman-library | responses-examples-any | postman_apis  | OpenAPI3 | true     |   5772 | 137776 |
| 262 | spectral/postman/postman-library | responses-examples-any | kin           | OpenAPI3 | false    |   1580 |  45352 |
| 263 | spectral/postman/postman-library | responses-examples-any | kin           | OpenAPI2 | false    |   1472 |  55305 |
| 264 | spectral/postman/postman-library | responses-examples-any | postman_apis  | OpenAPI2 | true     |   1269 | 126558 |
| 265 | spectral/postman/postman-library | responses-examples-any | postman_apis  | OpenAPI3 | false    |    379 |  42968 |
| 266 | spectral/postman/postman-library | responses-examples-any | postman_apis  | OpenAPI2 | false    |    343 | 129028 |
| 267 | spectral/postman/postman-library | responses-examples-any | kinweb        | OpenAPI2 | true     |    142 |   5528 |
| 268 | spectral/postman/postman-library | responses-examples-any | kinweb        | OpenAPI3 | true     |    139 |   4748 |
| 269 | spectral/postman/postman-library | responses-examples-any | kinweb        | OpenAPI2 | false    |     75 |   4514 |
| 270 | spectral/postman/postman-library | responses-examples-any | kinweb        | OpenAPI3 | false    |     23 |    642 |

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
<small>valid: 10,851 (69.5%) / 15,617<br/>invalid: 2,728 (54.9%) /
4,967<br/>all: 13,579 (66%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 4,621 (72.1%) / 6,407<br/>invalid: 1,153 (56.4%) /
2,044<br/>all: 5,774 (68.3%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 6,230 (67.6%) / 9,210<br/>invalid: 1,575 (53.9%) /
2,923<br/>all: 7,805 (64.3%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 231 (78.3%) / 295<br/>invalid: 83 (76.9%) / 108<br/>all:
314 (77.9%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 117 (79.1%) / 148<br/>invalid: 66 (85.7%) / 77<br/>all:
183 (81.3%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 114 (77.6%) / 147<br/>invalid: 17 (54.8%) / 31<br/>all:
131 (73.6%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 17,829 (76.4%) / 23,345<br/>invalid: 3,764 (59%) /
6,375<br/>all: 21,593 (72.7%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 5,857 (74.6%) / 7,851<br/>invalid: 1,468 (58.7%) /
2,502<br/>all: 7,325 (70.8%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 11,972 (77.3%) / 15,494<br/>invalid: 2,296 (59.3%) /
3,873<br/>all: 14,268 (73.7%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                        | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:----------------------------|:--------------|:---------|:---------|-------:|------:|
| 271 | spectral/postman/postman-library | reusable-schema-description | kin           | OpenAPI3 | true     |   6230 | 95169 |
| 272 | spectral/postman/postman-library | reusable-schema-description | postman_apis  | OpenAPI3 | true     |   5628 | 72180 |
| 273 | spectral/postman/postman-library | reusable-schema-description | kin           | OpenAPI2 | true     |   4621 | 62940 |
| 274 | spectral/postman/postman-library | reusable-schema-description | kin           | OpenAPI3 | false    |   1575 | 26214 |
| 275 | spectral/postman/postman-library | reusable-schema-description | kin           | OpenAPI2 | false    |   1153 | 15734 |
| 276 | spectral/postman/postman-library | reusable-schema-description | postman_apis  | OpenAPI2 | true     |   1119 | 30722 |
| 277 | spectral/postman/postman-library | reusable-schema-description | postman_apis  | OpenAPI3 | false    |    704 | 53613 |
| 278 | spectral/postman/postman-library | reusable-schema-description | postman_apis  | OpenAPI2 | false    |    249 | 25232 |
| 279 | spectral/postman/postman-library | reusable-schema-description | kinweb        | OpenAPI2 | true     |    117 |  1995 |
| 280 | spectral/postman/postman-library | reusable-schema-description | kinweb        | OpenAPI3 | true     |    114 |  1786 |
| 281 | spectral/postman/postman-library | reusable-schema-description | kinweb        | OpenAPI2 | false    |     66 |  1183 |
| 282 | spectral/postman/postman-library | reusable-schema-description | kinweb        | OpenAPI3 | false    |     17 |   368 |

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
<small>valid: 11,266 (72.1%) / 15,617<br/>invalid: 2,646 (53.3%) /
4,967<br/>all: 13,912 (67.6%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 4,729 (73.8%) / 6,407<br/>invalid: 1,023 (50%) /
2,044<br/>all: 5,752 (68.1%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 6,537 (71%) / 9,210<br/>invalid: 1,623 (55.5%) /
2,923<br/>all: 8,160 (67.3%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 252 (85.4%) / 295<br/>invalid: 89 (82.4%) / 108<br/>all:
341 (84.6%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 125 (84.5%) / 148<br/>invalid: 68 (88.3%) / 77<br/>all:
193 (85.8%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 127 (86.4%) / 147<br/>invalid: 21 (67.7%) / 31<br/>all:
148 (83.1%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 14,737 (63.1%) / 23,345<br/>invalid: 3,447 (54.1%) /
6,375<br/>all: 18,184 (61.2%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 5,961 (75.9%) / 7,851<br/>invalid: 1,402 (56%) /
2,502<br/>all: 7,363 (71.1%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 8,776 (56.6%) / 15,494<br/>invalid: 2,045 (52.8%) /
3,873<br/>all: 10,821 (55.9%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                                      | collection_id | class    | is_valid | n_apis |  n_err |
|:----|:---------------------------------|:------------------------------------------|:--------------|:---------|:---------|-------:|-------:|
| 283 | spectral/postman/postman-library | schema-properties-define-array-boundaries | kin           | OpenAPI3 | true     |   6537 | 103876 |
| 284 | spectral/postman/postman-library | schema-properties-define-array-boundaries | kin           | OpenAPI2 | true     |   4729 |  64923 |
| 285 | spectral/postman/postman-library | schema-properties-define-array-boundaries | postman_apis  | OpenAPI3 | true     |   2112 |  83394 |
| 286 | spectral/postman/postman-library | schema-properties-define-array-boundaries | kin           | OpenAPI3 | false    |   1623 |  28542 |
| 287 | spectral/postman/postman-library | schema-properties-define-array-boundaries | postman_apis  | OpenAPI2 | true     |   1107 |  35062 |
| 288 | spectral/postman/postman-library | schema-properties-define-array-boundaries | kin           | OpenAPI2 | false    |   1023 |  15072 |
| 289 | spectral/postman/postman-library | schema-properties-define-array-boundaries | postman_apis  | OpenAPI3 | false    |    401 |  31341 |
| 290 | spectral/postman/postman-library | schema-properties-define-array-boundaries | postman_apis  | OpenAPI2 | false    |    311 |  39486 |
| 291 | spectral/postman/postman-library | schema-properties-define-array-boundaries | kinweb        | OpenAPI3 | true     |    127 |   2343 |
| 292 | spectral/postman/postman-library | schema-properties-define-array-boundaries | kinweb        | OpenAPI2 | true     |    125 |   2134 |
| 293 | spectral/postman/postman-library | schema-properties-define-array-boundaries | kinweb        | OpenAPI2 | false    |     68 |   1498 |
| 294 | spectral/postman/postman-library | schema-properties-define-array-boundaries | kinweb        | OpenAPI3 | false    |     21 |    361 |

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
<small>valid: 11,961 (76.6%) / 15,617<br/>invalid: 3,105 (62.5%) /
4,967<br/>all: 15,066 (73.2%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 4,885 (76.2%) / 6,407<br/>invalid: 1,128 (55.2%) /
2,044<br/>all: 6,013 (71.2%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 7,076 (76.8%) / 9,210<br/>invalid: 1,977 (67.6%) /
2,923<br/>all: 9,053 (74.6%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 240 (81.4%) / 295<br/>invalid: 90 (83.3%) / 108<br/>all:
330 (81.9%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 123 (83.1%) / 148<br/>invalid: 68 (88.3%) / 77<br/>all:
191 (84.9%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 117 (79.6%) / 147<br/>invalid: 22 (71%) / 31<br/>all: 139
(78.1%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 19,041 (81.6%) / 23,345<br/>invalid: 4,152 (65.1%) /
6,375<br/>all: 23,193 (78%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 6,106 (77.8%) / 7,851<br/>invalid: 1,474 (58.9%) /
2,502<br/>all: 7,580 (73.2%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 12,935 (83.5%) / 15,494<br/>invalid: 2,678 (69.1%) /
3,873<br/>all: 15,613 (80.6%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                           | collection_id | class    | is_valid | n_apis |  n_err |
|:----|:---------------------------------|:-------------------------------|:--------------|:---------|:---------|-------:|-------:|
| 295 | spectral/postman/postman-library | schema-properties-descriptions | kin           | OpenAPI3 | true     |   7076 | 422539 |
| 296 | spectral/postman/postman-library | schema-properties-descriptions | postman_apis  | OpenAPI3 | true     |   5742 | 776231 |
| 297 | spectral/postman/postman-library | schema-properties-descriptions | kin           | OpenAPI2 | true     |   4885 | 273601 |
| 298 | spectral/postman/postman-library | schema-properties-descriptions | kin           | OpenAPI3 | false    |   1977 | 155259 |
| 299 | spectral/postman/postman-library | schema-properties-descriptions | kin           | OpenAPI2 | false    |   1128 |  76677 |
| 300 | spectral/postman/postman-library | schema-properties-descriptions | postman_apis  | OpenAPI2 | true     |   1098 | 154394 |
| 301 | spectral/postman/postman-library | schema-properties-descriptions | postman_apis  | OpenAPI3 | false    |    679 | 149314 |
| 302 | spectral/postman/postman-library | schema-properties-descriptions | postman_apis  | OpenAPI2 | false    |    278 | 149735 |
| 303 | spectral/postman/postman-library | schema-properties-descriptions | kinweb        | OpenAPI2 | true     |    123 |  10762 |
| 304 | spectral/postman/postman-library | schema-properties-descriptions | kinweb        | OpenAPI3 | true     |    117 |   8522 |
| 305 | spectral/postman/postman-library | schema-properties-descriptions | kinweb        | OpenAPI2 | false    |     68 |  10131 |
| 306 | spectral/postman/postman-library | schema-properties-descriptions | kinweb        | OpenAPI3 | false    |     22 |   1621 |

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
<small>valid: 10,940 (70.1%) / 15,617<br/>invalid: 2,807 (56.5%) /
4,967<br/>all: 13,747 (66.8%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 3,378 (52.7%) / 6,407<br/>invalid: 859 (42%) /
2,044<br/>all: 4,237 (50.1%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 7,562 (82.1%) / 9,210<br/>invalid: 1,948 (66.6%) /
2,923<br/>all: 9,510 (78.4%) / 12,133</small>
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
kinweb
</td>
<td style="text-align:center">
<small>valid: 229 (77.6%) / 295<br/>invalid: 91 (84.3%) / 108<br/>all:
320 (79.4%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 100 (67.6%) / 148<br/>invalid: 62 (80.5%) / 77<br/>all:
162 (72%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 129 (87.8%) / 147<br/>invalid: 29 (93.5%) / 31<br/>all:
158 (88.8%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 17,475 (74.9%) / 23,345<br/>invalid: 3,995 (62.7%) /
6,375<br/>all: 21,470 (72.2%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 4,183 (53.3%) / 7,851<br/>invalid: 1,230 (49.2%) /
2,502<br/>all: 5,413 (52.3%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 13,292 (85.8%) / 15,494<br/>invalid: 2,765 (71.4%) /
3,873<br/>all: 16,057 (82.9%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                      | collection_id | class    | is_valid | n_apis |  n_err |
|:----|:---------------------------------|:--------------------------|:--------------|:---------|:---------|-------:|-------:|
| 307 | spectral/postman/postman-library | schema-reference-reusable | kin           | OpenAPI3 | true     |   7562 | 230806 |
| 308 | spectral/postman/postman-library | schema-reference-reusable | postman_apis  | OpenAPI3 | true     |   5601 | 229616 |
| 309 | spectral/postman/postman-library | schema-reference-reusable | kin           | OpenAPI2 | true     |   3378 |  28025 |
| 310 | spectral/postman/postman-library | schema-reference-reusable | kin           | OpenAPI3 | false    |   1948 |  70963 |
| 311 | spectral/postman/postman-library | schema-reference-reusable | kin           | OpenAPI2 | false    |    859 |  13399 |
| 312 | spectral/postman/postman-library | schema-reference-reusable | postman_apis  | OpenAPI3 | false    |    788 | 114225 |
| 313 | spectral/postman/postman-library | schema-reference-reusable | postman_apis  | OpenAPI2 | true     |    705 |  17502 |
| 314 | spectral/postman/postman-library | schema-reference-reusable | postman_apis  | OpenAPI2 | false    |    309 |  42405 |
| 315 | spectral/postman/postman-library | schema-reference-reusable | kinweb        | OpenAPI3 | true     |    129 |   4483 |
| 316 | spectral/postman/postman-library | schema-reference-reusable | kinweb        | OpenAPI2 | true     |    100 |   1115 |
| 317 | spectral/postman/postman-library | schema-reference-reusable | kinweb        | OpenAPI2 | false    |     62 |   1066 |
| 318 | spectral/postman/postman-library | schema-reference-reusable | kinweb        | OpenAPI3 | false    |     29 |   1318 |

</details>
