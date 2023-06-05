OAS Spectral Ruleset postman/postman-library
================
<sup>Last updated: 2023-06-05</sup>

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
| [info-contact](#info-contact)<br/><sup>Ensures that all APIs have contact information.</sup>                                                                                                                                     |  15,145 (64.9%)  |    4,581 (58.3%)     |    10,564 (68.2%)     |
| [info-contact-email](#info-contact-email)<br/><sup>Ensures that all APIs have contact email.</sup>                                                                                                                               |   2,132 (9.1%)   |    1,002 (12.8%)     |     1,130 (7.3%)      |
| [info-contact-email-or-url](#info-contact-email-or-url)<br/><sup>Ensures that all APIs have contact URL or email.</sup>                                                                                                          |   1,184 (5.1%)   |      579 (7.4%)      |      605 (3.9%)       |
| [info-contact-name](#info-contact-name)<br/><sup>Ensures that all APIs have contact name.</sup>                                                                                                                                  |  3,210 (13.8%)   |    1,404 (17.9%)     |     1,806 (11.7%)     |
| [info-contact-url](#info-contact-url)<br/><sup>Ensures that all APIs have contact URL.</sup>                                                                                                                                     |   4,435 (19%)    |    1,947 (24.8%)     |     2,488 (16.1%)     |
| [info-description](#info-description)<br/><sup>Ensures that all OpenAPIs have a information description.</sup>                                                                                                                   |  7,590 (32.5%)   |    1,517 (19.3%)     |     6,073 (39.2%)     |
| [info-license](#info-license)<br/><sup>Ensures that all OpenAPIs have a information object license.</sup>                                                                                                                        |  14,767 (63.3%)  |    5,293 (67.4%)     |     9,474 (61.1%)     |
| [info-license-url](#info-license-url)<br/><sup>Ensures that all OpenAPIs have a information object license url.</sup>                                                                                                            |  3,079 (13.2%)   |       232 (3%)       |     2,847 (18.4%)     |
| [info-terms-of-service](#info-terms-of-service)<br/><sup>Ensures that all OpenAPIs have a information object terms of service.</sup>                                                                                             |  19,457 (83.3%)  |    6,023 (76.7%)     |    13,434 (86.7%)     |
| [no-response-body-on-204](#no-response-body-on-204)<br/><sup>Ensures that no 204 No Content response has a body.</sup>                                                                                                           |    408 (1.7%)    |      95 (1.2%)       |       313 (2%)        |
| [no-trailing-slash-on-paths](#no-trailing-slash-on-paths)<br/><sup>Ensures that there are no trailing slashes on paths.</sup>                                                                                                    |   1,378 (5.9%)   |      576 (7.3%)      |      802 (5.2%)       |
| [operations-description](#operations-description)<br/><sup>Ensures that each of the operations have a description.</sup>                                                                                                         |  12,560 (53.8%)  |    3,578 (45.6%)     |      8,982 (58%)      |
| [operations-status-code-2xx](#operations-status-code-2xx)<br/><sup>Ensures that each of the operations returns at least a 2xx HTTP status code.</sup>                                                                            |   1,605 (6.9%)   |     924 (11.8%)      |      681 (4.4%)       |
| [operations-status-code-5xx](#operations-status-code-5xx)<br/><sup>Ensures that each of the operations returns at least a 5xx HTTP status code.</sup>                                                                            |  18,604 (79.7%)  |    6,286 (80.1%)     |    12,318 (79.5%)     |
| [operations-summary](#operations-summary)<br/><sup>Ensures that each of the operations for an API have a summary.</sup>                                                                                                          |   6,301 (27%)    |    2,701 (34.4%)     |     3,600 (23.2%)     |
| [operations-summary-period-none](#operations-summary-period-none)<br/><sup>Ensures that each of the operations summaries do not have an ending period.</sup>                                                                     |  3,141 (13.5%)   |    1,273 (16.2%)     |     1,868 (12.1%)     |
| [parameters-description](#parameters-description)<br/><sup>Ensures that that all parameters have a descriptions.</sup>                                                                                                           |  7,445 (31.9%)   |    3,229 (41.1%)     |     4,216 (27.2%)     |
| [parameters-examples-any](#parameters-examples-any)<br/><sup>Ensures that that all parameters have a examples.</sup>                                                                                                             |  12,271 (52.6%)  |        0 (0%)        |    12,271 (79.2%)     |
| [request-bodies-examples-any](#request-bodies-examples-any)<br/><sup>Ensures that a example is always present for each request body (schema.example for Swagger 2, examples or example for OpenAPI 3).</sup>                     |  12,055 (51.6%)  |    4,737 (60.3%)     |     7,318 (47.2%)     |
| [request-body-on-patch](#request-body-on-patch)<br/><sup>Ensures that PATCH methods have request bodies.</sup>                                                                                                                   |    376 (1.6%)    |      166 (2.1%)      |      210 (1.4%)       |
| [request-body-on-post](#request-body-on-post)<br/><sup>Ensures that POST methods have request bodies.</sup>                                                                                                                      |   3,736 (16%)    |    1,578 (20.1%)     |     2,158 (13.9%)     |
| [request-body-on-put](#request-body-on-put)<br/><sup>Ensures that PUT methods have request bodies.</sup>                                                                                                                         |   1,339 (5.7%)   |      646 (8.2%)      |      693 (4.5%)       |
| [responses-examples-any](#responses-examples-any)<br/><sup>Ensuring all responses have examples (OpenAPI 3, Swagger 2) or example (OpenAPI 3) defined.</sup>                                                                     |  20,481 (87.7%)  |    7,485 (95.3%)     |    12,996 (83.9%)     |
| [reusable-schema-description](#reusable-schema-description)<br/><sup>Ensure all reusable schema should have a description.</sup>                                                                                                 |  17,995 (77.1%)  |    5,942 (75.7%)     |    12,053 (77.8%)     |
| [schema-properties-define-array-boundaries](#schema-properties-define-array-boundaries)<br/><sup>Requires that arrays have their minimum and maximum boundaries defined.</sup>                                                   |  14,921 (63.9%)  |    6,054 (77.1%)     |     8,867 (57.2%)     |
| [schema-properties-descriptions](#schema-properties-descriptions)<br/><sup>Ensure that all schemas properties should have a description.</sup>                                                                                   |  19,215 (82.3%)  |    6,194 (78.9%)     |     13,021 (84%)      |
| [schema-reference-reusable](#schema-reference-reusable)<br/><sup>Ensures all schema properties use a \$ref contain a \$ref targeting a reusable schema defined in definitions (Swagger 2) or components.schema (OpenAPI 3)</sup> |  17,640 (75.6%)  |    4,258 (54.2%)     |    13,382 (86.4%)     |

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
<small>valid: 8,731 (55.9%) / 15,617<br/>invalid: 2,725 (54.9%) /
4,967<br/>all: 11,456 (55.7%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 3,688 (57.6%) / 6,407<br/>invalid: 994 (48.6%) /
2,044<br/>all: 4,682 (55.4%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 5,043 (54.8%) / 9,210<br/>invalid: 1,731 (59.2%) /
2,923<br/>all: 6,774 (55.8%) / 12,133</small>
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
<small>valid: 15,145 (64.9%) / 23,345<br/>invalid: 3,357 (52.7%) /
6,375<br/>all: 18,502 (62.3%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 4,581 (58.3%) / 7,851<br/>invalid: 1,292 (51.6%) /
2,502<br/>all: 5,873 (56.7%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 10,564 (68.2%) / 15,494<br/>invalid: 2,065 (53.3%) /
3,873<br/>all: 12,629 (65.2%) / 19,367</small>
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
| spectral/postman/postman-library | info-contact | kin           | OpenAPI3 | true     |   5043 |  5043 |
| spectral/postman/postman-library | info-contact | kin           | OpenAPI2 | true     |   3688 |  3688 |
| spectral/postman/postman-library | info-contact | kin           | OpenAPI3 | false    |   1731 |  1731 |
| spectral/postman/postman-library | info-contact | kin           | OpenAPI2 | false    |    994 |   994 |
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
<small>valid: 1,698 (10.9%) / 15,617<br/>invalid: 466 (9.4%) /
4,967<br/>all: 2,164 (10.5%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 786 (12.3%) / 6,407<br/>invalid: 298 (14.6%) /
2,044<br/>all: 1,084 (12.8%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 912 (9.9%) / 9,210<br/>invalid: 168 (5.7%) /
2,923<br/>all: 1,080 (8.9%) / 12,133</small>
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
<small>valid: 2,132 (9.1%) / 23,345<br/>invalid: 595 (9.3%) /
6,375<br/>all: 2,727 (9.2%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 1,002 (12.8%) / 7,851<br/>invalid: 370 (14.8%) /
2,502<br/>all: 1,372 (13.3%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 1,130 (7.3%) / 15,494<br/>invalid: 225 (5.8%) /
3,873<br/>all: 1,355 (7%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code               | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-------------------|:--------------|:---------|:---------|-------:|------:|
| 13  | spectral/postman/postman-library | info-contact-email | kin           | OpenAPI3 | true     |    912 |   912 |
| 14  | spectral/postman/postman-library | info-contact-email | kin           | OpenAPI2 | true     |    786 |   786 |
| 15  | spectral/postman/postman-library | info-contact-email | kin           | OpenAPI2 | false    |    298 |   298 |
| 16  | spectral/postman/postman-library | info-contact-email | postman_apis  | OpenAPI3 | true     |    213 |   213 |
| 17  | spectral/postman/postman-library | info-contact-email | postman_apis  | OpenAPI2 | true     |    201 |   201 |
| 18  | spectral/postman/postman-library | info-contact-email | kin           | OpenAPI3 | false    |    168 |   168 |
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
<small>valid: 936 (6%) / 15,617<br/>invalid: 244 (4.9%) / 4,967<br/>all:
1,180 (5.7%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 471 (7.4%) / 6,407<br/>invalid: 159 (7.8%) /
2,044<br/>all: 630 (7.5%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 465 (5%) / 9,210<br/>invalid: 85 (2.9%) / 2,923<br/>all:
550 (4.5%) / 12,133</small>
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
<small>valid: 1,184 (5.1%) / 23,345<br/>invalid: 345 (5.4%) /
6,375<br/>all: 1,529 (5.1%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 579 (7.4%) / 7,851<br/>invalid: 218 (8.7%) /
2,502<br/>all: 797 (7.7%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 605 (3.9%) / 15,494<br/>invalid: 127 (3.3%) /
3,873<br/>all: 732 (3.8%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                      | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:--------------------------|:--------------|:---------|:---------|-------:|------:|
| 25  | spectral/postman/postman-library | info-contact-email-or-url | kin           | OpenAPI2 | true     |    471 |   471 |
| 26  | spectral/postman/postman-library | info-contact-email-or-url | kin           | OpenAPI3 | true     |    465 |   465 |
| 27  | spectral/postman/postman-library | info-contact-email-or-url | kin           | OpenAPI2 | false    |    159 |   159 |
| 28  | spectral/postman/postman-library | info-contact-email-or-url | postman_apis  | OpenAPI3 | true     |    138 |   138 |
| 29  | spectral/postman/postman-library | info-contact-email-or-url | postman_apis  | OpenAPI2 | true     |     96 |    96 |
| 30  | spectral/postman/postman-library | info-contact-email-or-url | kin           | OpenAPI3 | false    |     85 |    85 |
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
<small>valid: 2,707 (17.3%) / 15,617<br/>invalid: 834 (16.8%) /
4,967<br/>all: 3,541 (17.2%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 1,135 (17.7%) / 6,407<br/>invalid: 363 (17.8%) /
2,044<br/>all: 1,498 (17.7%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 1,572 (17.1%) / 9,210<br/>invalid: 471 (16.1%) /
2,923<br/>all: 2,043 (16.8%) / 12,133</small>
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
<small>valid: 3,210 (13.8%) / 23,345<br/>invalid: 954 (15%) /
6,375<br/>all: 4,164 (14%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 1,404 (17.9%) / 7,851<br/>invalid: 429 (17.1%) /
2,502<br/>all: 1,833 (17.7%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 1,806 (11.7%) / 15,494<br/>invalid: 525 (13.6%) /
3,873<br/>all: 2,331 (12%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code              | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:------------------|:--------------|:---------|:---------|-------:|------:|
| 37  | spectral/postman/postman-library | info-contact-name | kin           | OpenAPI3 | true     |   1572 |  1572 |
| 38  | spectral/postman/postman-library | info-contact-name | kin           | OpenAPI2 | true     |   1135 |  1135 |
| 39  | spectral/postman/postman-library | info-contact-name | kin           | OpenAPI3 | false    |    471 |   471 |
| 40  | spectral/postman/postman-library | info-contact-name | kin           | OpenAPI2 | false    |    363 |   363 |
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
<small>valid: 3,668 (23.5%) / 15,617<br/>invalid: 1,115 (22.4%) /
4,967<br/>all: 4,783 (23.2%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 1,577 (24.6%) / 6,407<br/>invalid: 458 (22.4%) /
2,044<br/>all: 2,035 (24.1%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 2,091 (22.7%) / 9,210<br/>invalid: 657 (22.5%) /
2,923<br/>all: 2,748 (22.6%) / 12,133</small>
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
<small>valid: 4,435 (19%) / 23,345<br/>invalid: 1,311 (20.6%) /
6,375<br/>all: 5,746 (19.3%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 1,947 (24.8%) / 7,851<br/>invalid: 564 (22.5%) /
2,502<br/>all: 2,511 (24.3%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 2,488 (16.1%) / 15,494<br/>invalid: 747 (19.3%) /
3,873<br/>all: 3,235 (16.7%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code             | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-----------------|:--------------|:---------|:---------|-------:|------:|
| 49  | spectral/postman/postman-library | info-contact-url | kin           | OpenAPI3 | true     |   2091 |  2091 |
| 50  | spectral/postman/postman-library | info-contact-url | kin           | OpenAPI2 | true     |   1577 |  1577 |
| 51  | spectral/postman/postman-library | info-contact-url | kin           | OpenAPI3 | false    |    657 |   657 |
| 52  | spectral/postman/postman-library | info-contact-url | kin           | OpenAPI2 | false    |    458 |   458 |
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
<small>valid: 3,442 (22%) / 15,617<br/>invalid: 1,047 (21.1%) /
4,967<br/>all: 4,489 (21.8%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 1,214 (18.9%) / 6,407<br/>invalid: 360 (17.6%) /
2,044<br/>all: 1,574 (18.6%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 2,228 (24.2%) / 9,210<br/>invalid: 687 (23.5%) /
2,923<br/>all: 2,915 (24%) / 12,133</small>
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
<small>valid: 7,590 (32.5%) / 23,345<br/>invalid: 1,505 (23.6%) /
6,375<br/>all: 9,095 (30.6%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 1,517 (19.3%) / 7,851<br/>invalid: 528 (21.1%) /
2,502<br/>all: 2,045 (19.8%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 6,073 (39.2%) / 15,494<br/>invalid: 977 (25.2%) /
3,873<br/>all: 7,050 (36.4%) / 19,367</small>
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
| 62  | spectral/postman/postman-library | info-description | kin           | OpenAPI3 | true     |   2228 |  2228 |
| 63  | spectral/postman/postman-library | info-description | kin           | OpenAPI2 | true     |   1214 |  1214 |
| 64  | spectral/postman/postman-library | info-description | kin           | OpenAPI3 | false    |    687 |   687 |
| 65  | spectral/postman/postman-library | info-description | kin           | OpenAPI2 | false    |    360 |   360 |
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
<small>valid: 10,223 (65.5%) / 15,617<br/>invalid: 3,127 (63%) /
4,967<br/>all: 13,350 (64.9%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 4,261 (66.5%) / 6,407<br/>invalid: 1,203 (58.9%) /
2,044<br/>all: 5,464 (64.7%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 5,962 (64.7%) / 9,210<br/>invalid: 1,924 (65.8%) /
2,923<br/>all: 7,886 (65%) / 12,133</small>
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
<small>valid: 14,767 (63.3%) / 23,345<br/>invalid: 3,816 (59.9%) /
6,375<br/>all: 18,583 (62.5%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 5,293 (67.4%) / 7,851<br/>invalid: 1,550 (62%) /
2,502<br/>all: 6,843 (66.1%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 9,474 (61.1%) / 15,494<br/>invalid: 2,266 (58.5%) /
3,873<br/>all: 11,740 (60.6%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code         | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-------------|:--------------|:---------|:---------|-------:|------:|
| 73  | spectral/postman/postman-library | info-license | kin           | OpenAPI3 | true     |   5962 |  5962 |
| 74  | spectral/postman/postman-library | info-license | kin           | OpenAPI2 | true     |   4261 |  4261 |
| 75  | spectral/postman/postman-library | info-license | postman_apis  | OpenAPI3 | true     |   3395 |  3395 |
| 76  | spectral/postman/postman-library | info-license | kin           | OpenAPI3 | false    |   1924 |  1924 |
| 77  | spectral/postman/postman-library | info-license | kin           | OpenAPI2 | false    |   1203 |  1203 |
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
<small>valid: 544 (3.5%) / 15,617<br/>invalid: 197 (4%) / 4,967<br/>all:
741 (3.6%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 174 (2.7%) / 6,407<br/>invalid: 68 (3.3%) / 2,044<br/>all:
242 (2.9%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 370 (4%) / 9,210<br/>invalid: 129 (4.4%) / 2,923<br/>all:
499 (4.1%) / 12,133</small>
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
<small>valid: 3,079 (13.2%) / 23,345<br/>invalid: 353 (5.5%) /
6,375<br/>all: 3,432 (11.5%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 232 (3%) / 7,851<br/>invalid: 118 (4.7%) / 2,502<br/>all:
350 (3.4%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 2,847 (18.4%) / 15,494<br/>invalid: 235 (6.1%) /
3,873<br/>all: 3,082 (15.9%) / 19,367</small>
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
| 86  | spectral/postman/postman-library | info-license-url | kin           | OpenAPI3 | true     |    370 |   370 |
| 87  | spectral/postman/postman-library | info-license-url | kin           | OpenAPI2 | true     |    174 |   174 |
| 88  | spectral/postman/postman-library | info-license-url | kin           | OpenAPI3 | false    |    129 |   129 |
| 89  | spectral/postman/postman-library | info-license-url | postman_apis  | OpenAPI3 | false    |    105 |   105 |
| 90  | spectral/postman/postman-library | info-license-url | kin           | OpenAPI2 | false    |     68 |    68 |
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
<small>valid: 12,372 (79.2%) / 15,617<br/>invalid: 3,633 (73.1%) /
4,967<br/>all: 16,005 (77.8%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 4,958 (77.4%) / 6,407<br/>invalid: 1,363 (66.7%) /
2,044<br/>all: 6,321 (74.8%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 7,414 (80.5%) / 9,210<br/>invalid: 2,270 (77.7%) /
2,923<br/>all: 9,684 (79.8%) / 12,133</small>
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
<small>valid: 19,457 (83.3%) / 23,345<br/>invalid: 4,725 (74.1%) /
6,375<br/>all: 24,182 (81.4%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 6,023 (76.7%) / 7,851<br/>invalid: 1,726 (69%) /
2,502<br/>all: 7,749 (74.8%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 13,434 (86.7%) / 15,494<br/>invalid: 2,999 (77.4%) /
3,873<br/>all: 16,433 (84.9%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                  | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:----------------------|:--------------|:---------|:---------|-------:|------:|
| 97  | spectral/postman/postman-library | info-terms-of-service | kin           | OpenAPI3 | true     |   7414 |  7414 |
| 98  | spectral/postman/postman-library | info-terms-of-service | postman_apis  | OpenAPI3 | true     |   5922 |  5922 |
| 99  | spectral/postman/postman-library | info-terms-of-service | kin           | OpenAPI2 | true     |   4958 |  4958 |
| 100 | spectral/postman/postman-library | info-terms-of-service | kin           | OpenAPI3 | false    |   2270 |  2270 |
| 101 | spectral/postman/postman-library | info-terms-of-service | kin           | OpenAPI2 | false    |   1363 |  1363 |
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
<small>valid: 294 (1.9%) / 15,617<br/>invalid: 150 (3%) / 4,967<br/>all:
444 (2.2%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 76 (1.2%) / 6,407<br/>invalid: 37 (1.8%) / 2,044<br/>all:
113 (1.3%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 218 (2.4%) / 9,210<br/>invalid: 113 (3.9%) /
2,923<br/>all: 331 (2.7%) / 12,133</small>
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
<small>valid: 408 (1.7%) / 23,345<br/>invalid: 228 (3.6%) /
6,375<br/>all: 636 (2.1%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 95 (1.2%) / 7,851<br/>invalid: 70 (2.8%) / 2,502<br/>all:
165 (1.6%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 313 (2%) / 15,494<br/>invalid: 158 (4.1%) / 3,873<br/>all:
471 (2.4%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                    | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:------------------------|:--------------|:---------|:---------|-------:|------:|
| 109 | spectral/postman/postman-library | no-response-body-on-204 | kin           | OpenAPI3 | true     |    218 |   586 |
| 110 | spectral/postman/postman-library | no-response-body-on-204 | kin           | OpenAPI3 | false    |    113 |   710 |
| 111 | spectral/postman/postman-library | no-response-body-on-204 | postman_apis  | OpenAPI3 | true     |     91 |   587 |
| 112 | spectral/postman/postman-library | no-response-body-on-204 | kin           | OpenAPI2 | true     |     76 |   169 |
| 113 | spectral/postman/postman-library | no-response-body-on-204 | postman_apis  | OpenAPI3 | false    |     45 |   623 |
| 114 | spectral/postman/postman-library | no-response-body-on-204 | kin           | OpenAPI2 | false    |     37 |   142 |
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
<small>valid: 972 (6.2%) / 15,617<br/>invalid: 415 (8.4%) /
4,967<br/>all: 1,387 (6.7%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 391 (6.1%) / 6,407<br/>invalid: 178 (8.7%) /
2,044<br/>all: 569 (6.7%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 581 (6.3%) / 9,210<br/>invalid: 237 (8.1%) /
2,923<br/>all: 818 (6.7%) / 12,133</small>
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
<small>valid: 1,378 (5.9%) / 23,345<br/>invalid: 553 (8.7%) /
6,375<br/>all: 1,931 (6.5%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 576 (7.3%) / 7,851<br/>invalid: 227 (9.1%) /
2,502<br/>all: 803 (7.8%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 802 (5.2%) / 15,494<br/>invalid: 326 (8.4%) /
3,873<br/>all: 1,128 (5.8%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                       | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:---------------------------|:--------------|:---------|:---------|-------:|------:|
| 120 | spectral/postman/postman-library | no-trailing-slash-on-paths | kin           | OpenAPI3 | true     |    581 |  2989 |
| 121 | spectral/postman/postman-library | no-trailing-slash-on-paths | kin           | OpenAPI2 | true     |    391 |  3085 |
| 122 | spectral/postman/postman-library | no-trailing-slash-on-paths | kin           | OpenAPI3 | false    |    237 |  1486 |
| 123 | spectral/postman/postman-library | no-trailing-slash-on-paths | postman_apis  | OpenAPI3 | true     |    218 |  1067 |
| 124 | spectral/postman/postman-library | no-trailing-slash-on-paths | postman_apis  | OpenAPI2 | true     |    179 |  2401 |
| 125 | spectral/postman/postman-library | no-trailing-slash-on-paths | kin           | OpenAPI2 | false    |    178 |   947 |
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
<small>valid: 6,925 (44.3%) / 15,617<br/>invalid: 2,150 (43.3%) /
4,967<br/>all: 9,075 (44.1%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 2,794 (43.6%) / 6,407<br/>invalid: 895 (43.8%) /
2,044<br/>all: 3,689 (43.7%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 4,131 (44.9%) / 9,210<br/>invalid: 1,255 (42.9%) /
2,923<br/>all: 5,386 (44.4%) / 12,133</small>
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
<small>valid: 12,560 (53.8%) / 23,345<br/>invalid: 2,761 (43.3%) /
6,375<br/>all: 15,321 (51.6%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 3,578 (45.6%) / 7,851<br/>invalid: 1,138 (45.5%) /
2,502<br/>all: 4,716 (45.6%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 8,982 (58%) / 15,494<br/>invalid: 1,623 (41.9%) /
3,873<br/>all: 10,605 (54.8%) / 19,367</small>
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
| 133 | spectral/postman/postman-library | operations-description | kin           | OpenAPI3 | true     |   4131 | 43918 |
| 134 | spectral/postman/postman-library | operations-description | kin           | OpenAPI2 | true     |   2794 | 30733 |
| 135 | spectral/postman/postman-library | operations-description | kin           | OpenAPI3 | false    |   1255 | 19310 |
| 136 | spectral/postman/postman-library | operations-description | kin           | OpenAPI2 | false    |    895 | 12988 |
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
<small>valid: 1,229 (7.9%) / 15,617<br/>invalid: 448 (9%) /
4,967<br/>all: 1,677 (8.1%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 700 (10.9%) / 6,407<br/>invalid: 252 (12.3%) /
2,044<br/>all: 952 (11.3%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 529 (5.7%) / 9,210<br/>invalid: 196 (6.7%) /
2,923<br/>all: 725 (6%) / 12,133</small>
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
<small>valid: 1,605 (6.9%) / 23,345<br/>invalid: 545 (8.5%) /
6,375<br/>all: 2,150 (7.2%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 924 (11.8%) / 7,851<br/>invalid: 290 (11.6%) /
2,502<br/>all: 1,214 (11.7%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 681 (4.4%) / 15,494<br/>invalid: 255 (6.6%) /
3,873<br/>all: 936 (4.8%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                       | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:---------------------------|:--------------|:---------|:---------|-------:|------:|
| 144 | spectral/postman/postman-library | operations-status-code-2xx | kin           | OpenAPI2 | true     |    700 |  4807 |
| 145 | spectral/postman/postman-library | operations-status-code-2xx | kin           | OpenAPI3 | true     |    529 |  7990 |
| 146 | spectral/postman/postman-library | operations-status-code-2xx | kin           | OpenAPI2 | false    |    252 |  2263 |
| 147 | spectral/postman/postman-library | operations-status-code-2xx | postman_apis  | OpenAPI2 | true     |    213 |  2341 |
| 148 | spectral/postman/postman-library | operations-status-code-2xx | kin           | OpenAPI3 | false    |    196 |  2227 |
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
<small>valid: 12,177 (78%) / 15,617<br/>invalid: 3,319 (66.8%) /
4,967<br/>all: 15,496 (75.3%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 5,215 (81.4%) / 6,407<br/>invalid: 1,381 (67.6%) /
2,044<br/>all: 6,596 (78%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 6,962 (75.6%) / 9,210<br/>invalid: 1,938 (66.3%) /
2,923<br/>all: 8,900 (73.4%) / 12,133</small>
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
<small>valid: 18,604 (79.7%) / 23,345<br/>invalid: 4,170 (65.4%) /
6,375<br/>all: 22,774 (76.6%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 6,286 (80.1%) / 7,851<br/>invalid: 1,802 (72%) /
2,502<br/>all: 8,088 (78.1%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 12,318 (79.5%) / 15,494<br/>invalid: 2,368 (61.1%) /
3,873<br/>all: 14,686 (75.8%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                       | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:---------------------------|:--------------|:---------|:---------|-------:|------:|
| 156 | spectral/postman/postman-library | operations-status-code-5xx | kin           | OpenAPI3 | true     |   6962 | 93985 |
| 157 | spectral/postman/postman-library | operations-status-code-5xx | postman_apis  | OpenAPI3 | true     |   5262 | 74496 |
| 158 | spectral/postman/postman-library | operations-status-code-5xx | kin           | OpenAPI2 | true     |   5215 | 64192 |
| 159 | spectral/postman/postman-library | operations-status-code-5xx | kin           | OpenAPI3 | false    |   1938 | 31000 |
| 160 | spectral/postman/postman-library | operations-status-code-5xx | kin           | OpenAPI2 | false    |   1381 | 24683 |
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
<small>valid: 5,059 (32.4%) / 15,617<br/>invalid: 1,224 (24.6%) /
4,967<br/>all: 6,283 (30.5%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 2,218 (34.6%) / 6,407<br/>invalid: 567 (27.7%) /
2,044<br/>all: 2,785 (33%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 2,841 (30.8%) / 9,210<br/>invalid: 657 (22.5%) /
2,923<br/>all: 3,498 (28.8%) / 12,133</small>
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
<small>valid: 6,301 (27%) / 23,345<br/>invalid: 1,488 (23.3%) /
6,375<br/>all: 7,789 (26.2%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 2,701 (34.4%) / 7,851<br/>invalid: 687 (27.5%) /
2,502<br/>all: 3,388 (32.7%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 3,600 (23.2%) / 15,494<br/>invalid: 801 (20.7%) /
3,873<br/>all: 4,401 (22.7%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code               | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-------------------|:--------------|:---------|:---------|-------:|------:|
| 168 | spectral/postman/postman-library | operations-summary | kin           | OpenAPI3 | true     |   2841 | 37952 |
| 169 | spectral/postman/postman-library | operations-summary | kin           | OpenAPI2 | true     |   2218 | 22796 |
| 170 | spectral/postman/postman-library | operations-summary | postman_apis  | OpenAPI3 | true     |    712 | 26490 |
| 171 | spectral/postman/postman-library | operations-summary | kin           | OpenAPI3 | false    |    657 | 14884 |
| 172 | spectral/postman/postman-library | operations-summary | kin           | OpenAPI2 | false    |    567 |  8338 |
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
<small>valid: 2,473 (15.8%) / 15,617<br/>invalid: 679 (13.7%) /
4,967<br/>all: 3,152 (15.3%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 1,040 (16.2%) / 6,407<br/>invalid: 270 (13.2%) /
2,044<br/>all: 1,310 (15.5%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 1,433 (15.6%) / 9,210<br/>invalid: 409 (14%) /
2,923<br/>all: 1,842 (15.2%) / 12,133</small>
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
<small>valid: 3,141 (13.5%) / 23,345<br/>invalid: 970 (15.2%) /
6,375<br/>all: 4,111 (13.8%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 1,273 (16.2%) / 7,851<br/>invalid: 414 (16.5%) /
2,502<br/>all: 1,687 (16.3%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 1,868 (12.1%) / 15,494<br/>invalid: 556 (14.4%) /
3,873<br/>all: 2,424 (12.5%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                           | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-------------------------------|:--------------|:---------|:---------|-------:|------:|
| 180 | spectral/postman/postman-library | operations-summary-period-none | kin           | OpenAPI3 | true     |   1433 | 12154 |
| 181 | spectral/postman/postman-library | operations-summary-period-none | kin           | OpenAPI2 | true     |   1040 |  9445 |
| 182 | spectral/postman/postman-library | operations-summary-period-none | kin           | OpenAPI3 | false    |    409 |  3238 |
| 183 | spectral/postman/postman-library | operations-summary-period-none | postman_apis  | OpenAPI3 | true     |    379 |  3610 |
| 184 | spectral/postman/postman-library | operations-summary-period-none | kin           | OpenAPI2 | false    |    270 |  3590 |
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
<small>valid: 5,267 (33.7%) / 15,617<br/>invalid: 1,492 (30%) /
4,967<br/>all: 6,759 (32.8%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 2,479 (38.7%) / 6,407<br/>invalid: 665 (32.5%) /
2,044<br/>all: 3,144 (37.2%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 2,788 (30.3%) / 9,210<br/>invalid: 827 (28.3%) /
2,923<br/>all: 3,615 (29.8%) / 12,133</small>
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
<small>valid: 7,445 (31.9%) / 23,345<br/>invalid: 2,149 (33.7%) /
6,375<br/>all: 9,594 (32.3%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 3,229 (41.1%) / 7,851<br/>invalid: 913 (36.5%) /
2,502<br/>all: 4,142 (40%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 4,216 (27.2%) / 15,494<br/>invalid: 1,236 (31.9%) /
3,873<br/>all: 5,452 (28.2%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                   | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:-----------------------|:--------------|:---------|:---------|-------:|------:|
| 192 | spectral/postman/postman-library | parameters-description | kin           | OpenAPI3 | true     |   2788 | 44696 |
| 193 | spectral/postman/postman-library | parameters-description | kin           | OpenAPI2 | true     |   2479 | 31746 |
| 194 | spectral/postman/postman-library | parameters-description | postman_apis  | OpenAPI3 | true     |   1381 | 52693 |
| 195 | spectral/postman/postman-library | parameters-description | kin           | OpenAPI3 | false    |    827 | 17562 |
| 196 | spectral/postman/postman-library | parameters-description | postman_apis  | OpenAPI2 | true     |    683 | 43862 |
| 197 | spectral/postman/postman-library | parameters-description | kin           | OpenAPI2 | false    |    665 | 14813 |
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
<small>valid: 6,464 (41.4%) / 15,617<br/>invalid: 1,778 (35.8%) /
4,967<br/>all: 8,242 (40%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 6,407<br/>invalid: 7 (0.3%) / 2,044<br/>all: 7
(0.1%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 6,464 (70.2%) / 9,210<br/>invalid: 1,771 (60.6%) /
2,923<br/>all: 8,235 (67.9%) / 12,133</small>
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
<small>valid: 12,271 (52.6%) / 23,345<br/>invalid: 2,583 (40.5%) /
6,375<br/>all: 14,854 (50%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 7,851<br/>invalid: 11 (0.4%) / 2,502<br/>all: 11
(0.1%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 12,271 (79.2%) / 15,494<br/>invalid: 2,572 (66.4%) /
3,873<br/>all: 14,843 (76.6%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                    | collection_id | class    | is_valid | n_apis |  n_err |
|:----|:---------------------------------|:------------------------|:--------------|:---------|:---------|-------:|-------:|
| 204 | spectral/postman/postman-library | parameters-examples-any | kin           | OpenAPI3 | true     |   6464 | 155557 |
| 205 | spectral/postman/postman-library | parameters-examples-any | postman_apis  | OpenAPI3 | true     |   5689 | 146360 |
| 206 | spectral/postman/postman-library | parameters-examples-any | kin           | OpenAPI3 | false    |   1771 |  50094 |
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
<small>valid: 8,952 (57.3%) / 15,617<br/>invalid: 2,261 (45.5%) /
4,967<br/>all: 11,213 (54.5%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 3,663 (57.2%) / 6,407<br/>invalid: 839 (41%) /
2,044<br/>all: 4,502 (53.3%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 5,289 (57.4%) / 9,210<br/>invalid: 1,422 (48.6%) /
2,923<br/>all: 6,711 (55.3%) / 12,133</small>
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
<small>valid: 12,055 (51.6%) / 23,345<br/>invalid: 2,980 (46.7%) /
6,375<br/>all: 15,035 (50.6%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 4,737 (60.3%) / 7,851<br/>invalid: 1,167 (46.6%) /
2,502<br/>all: 5,904 (57%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 7,318 (47.2%) / 15,494<br/>invalid: 1,813 (46.8%) /
3,873<br/>all: 9,131 (47.1%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                        | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:----------------------------|:--------------|:---------|:---------|-------:|------:|
| 212 | spectral/postman/postman-library | request-bodies-examples-any | kin           | OpenAPI3 | true     |   5289 | 41722 |
| 213 | spectral/postman/postman-library | request-bodies-examples-any | kin           | OpenAPI2 | true     |   3663 | 17290 |
| 214 | spectral/postman/postman-library | request-bodies-examples-any | postman_apis  | OpenAPI3 | true     |   1936 | 44954 |
| 215 | spectral/postman/postman-library | request-bodies-examples-any | kin           | OpenAPI3 | false    |   1422 | 12865 |
| 216 | spectral/postman/postman-library | request-bodies-examples-any | postman_apis  | OpenAPI2 | true     |    984 | 12913 |
| 217 | spectral/postman/postman-library | request-bodies-examples-any | kin           | OpenAPI2 | false    |    839 |  5831 |
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
<small>valid: 247 (1.6%) / 15,617<br/>invalid: 247 (5%) / 4,967<br/>all:
494 (2.4%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 107 (1.7%) / 6,407<br/>invalid: 62 (3%) / 2,044<br/>all:
169 (2%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 140 (1.5%) / 9,210<br/>invalid: 185 (6.3%) /
2,923<br/>all: 325 (2.7%) / 12,133</small>
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
<small>valid: 376 (1.6%) / 23,345<br/>invalid: 367 (5.8%) /
6,375<br/>all: 743 (2.5%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 166 (2.1%) / 7,851<br/>invalid: 128 (5.1%) /
2,502<br/>all: 294 (2.8%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 210 (1.4%) / 15,494<br/>invalid: 239 (6.2%) /
3,873<br/>all: 449 (2.3%) / 19,367</small>
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
| 225 | spectral/postman/postman-library | request-body-on-patch | kin           | OpenAPI3 | true     |    140 |  1154 |
| 226 | spectral/postman/postman-library | request-body-on-patch | kin           | OpenAPI2 | true     |    107 |   630 |
| 227 | spectral/postman/postman-library | request-body-on-patch | postman_apis  | OpenAPI3 | true     |     69 |   547 |
| 228 | spectral/postman/postman-library | request-body-on-patch | postman_apis  | OpenAPI2 | false    |     64 |   295 |
| 229 | spectral/postman/postman-library | request-body-on-patch | kin           | OpenAPI2 | false    |     62 |   442 |
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
<small>valid: 2,750 (17.6%) / 15,617<br/>invalid: 1,274 (25.6%) /
4,967<br/>all: 4,024 (19.5%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 1,213 (18.9%) / 6,407<br/>invalid: 529 (25.9%) /
2,044<br/>all: 1,742 (20.6%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 1,537 (16.7%) / 9,210<br/>invalid: 745 (25.5%) /
2,923<br/>all: 2,282 (18.8%) / 12,133</small>
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
<small>valid: 3,736 (16%) / 23,345<br/>invalid: 1,798 (28.2%) /
6,375<br/>all: 5,534 (18.6%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 1,578 (20.1%) / 7,851<br/>invalid: 724 (28.9%) /
2,502<br/>all: 2,302 (22.2%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 2,158 (13.9%) / 15,494<br/>invalid: 1,074 (27.7%) /
3,873<br/>all: 3,232 (16.7%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                 | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:---------------------|:--------------|:---------|:---------|-------:|------:|
| 235 | spectral/postman/postman-library | request-body-on-post | kin           | OpenAPI3 | true     |   1537 | 17660 |
| 236 | spectral/postman/postman-library | request-body-on-post | kin           | OpenAPI2 | true     |   1213 | 13451 |
| 237 | spectral/postman/postman-library | request-body-on-post | kin           | OpenAPI3 | false    |    745 |  8611 |
| 238 | spectral/postman/postman-library | request-body-on-post | postman_apis  | OpenAPI3 | true     |    585 | 15060 |
| 239 | spectral/postman/postman-library | request-body-on-post | kin           | OpenAPI2 | false    |    529 |  6912 |
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
<small>valid: 926 (5.9%) / 15,617<br/>invalid: 514 (10.3%) /
4,967<br/>all: 1,440 (7%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 503 (7.9%) / 6,407<br/>invalid: 222 (10.9%) /
2,044<br/>all: 725 (8.6%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 423 (4.6%) / 9,210<br/>invalid: 292 (10%) / 2,923<br/>all:
715 (5.9%) / 12,133</small>
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
<small>valid: 1,339 (5.7%) / 23,345<br/>invalid: 730 (11.5%) /
6,375<br/>all: 2,069 (7%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 646 (8.2%) / 7,851<br/>invalid: 316 (12.6%) /
2,502<br/>all: 962 (9.3%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 693 (4.5%) / 15,494<br/>invalid: 414 (10.7%) /
3,873<br/>all: 1,107 (5.7%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:--------------------|:--------------|:---------|:---------|-------:|------:|
| 247 | spectral/postman/postman-library | request-body-on-put | kin           | OpenAPI2 | true     |    503 |  3623 |
| 248 | spectral/postman/postman-library | request-body-on-put | kin           | OpenAPI3 | true     |    423 |  3504 |
| 249 | spectral/postman/postman-library | request-body-on-put | kin           | OpenAPI3 | false    |    292 |  2167 |
| 250 | spectral/postman/postman-library | request-body-on-put | postman_apis  | OpenAPI3 | true     |    264 |  9049 |
| 251 | spectral/postman/postman-library | request-body-on-put | kin           | OpenAPI2 | false    |    222 |  2252 |
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
<small>valid: 13,159 (84.3%) / 15,617<br/>invalid: 3,116 (62.7%) /
4,967<br/>all: 16,275 (79.1%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 6,074 (94.8%) / 6,407<br/>invalid: 1,522 (74.5%) /
2,044<br/>all: 7,596 (89.9%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 7,085 (76.9%) / 9,210<br/>invalid: 1,594 (54.5%) /
2,923<br/>all: 8,679 (71.5%) / 12,133</small>
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
<small>valid: 20,481 (87.7%) / 23,345<br/>invalid: 3,936 (61.7%) /
6,375<br/>all: 24,417 (82.2%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 7,485 (95.3%) / 7,851<br/>invalid: 1,940 (77.5%) /
2,502<br/>all: 9,425 (91%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 12,996 (83.9%) / 15,494<br/>invalid: 1,996 (51.5%) /
3,873<br/>all: 14,992 (77.4%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                   | collection_id | class    | is_valid | n_apis |  n_err |
|:----|:---------------------------------|:-----------------------|:--------------|:---------|:---------|-------:|-------:|
| 259 | spectral/postman/postman-library | responses-examples-any | kin           | OpenAPI3 | true     |   7085 | 154831 |
| 260 | spectral/postman/postman-library | responses-examples-any | kin           | OpenAPI2 | true     |   6074 | 191187 |
| 261 | spectral/postman/postman-library | responses-examples-any | postman_apis  | OpenAPI3 | true     |   5772 | 137776 |
| 262 | spectral/postman/postman-library | responses-examples-any | kin           | OpenAPI3 | false    |   1594 |  45813 |
| 263 | spectral/postman/postman-library | responses-examples-any | kin           | OpenAPI2 | false    |   1522 |  58327 |
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
<small>valid: 11,017 (70.5%) / 15,617<br/>invalid: 2,780 (56%) /
4,967<br/>all: 13,797 (67%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 4,706 (73.5%) / 6,407<br/>invalid: 1,195 (58.5%) /
2,044<br/>all: 5,901 (69.8%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 6,311 (68.5%) / 9,210<br/>invalid: 1,585 (54.2%) /
2,923<br/>all: 7,896 (65.1%) / 12,133</small>
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
<small>valid: 17,995 (77.1%) / 23,345<br/>invalid: 3,816 (59.9%) /
6,375<br/>all: 21,811 (73.4%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 5,942 (75.7%) / 7,851<br/>invalid: 1,510 (60.4%) /
2,502<br/>all: 7,452 (72%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 12,053 (77.8%) / 15,494<br/>invalid: 2,306 (59.5%) /
3,873<br/>all: 14,359 (74.1%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                        | collection_id | class    | is_valid | n_apis | n_err |
|:----|:---------------------------------|:----------------------------|:--------------|:---------|:---------|-------:|------:|
| 271 | spectral/postman/postman-library | reusable-schema-description | kin           | OpenAPI3 | true     |   6311 | 96459 |
| 272 | spectral/postman/postman-library | reusable-schema-description | postman_apis  | OpenAPI3 | true     |   5628 | 72180 |
| 273 | spectral/postman/postman-library | reusable-schema-description | kin           | OpenAPI2 | true     |   4706 | 64401 |
| 274 | spectral/postman/postman-library | reusable-schema-description | kin           | OpenAPI3 | false    |   1585 | 26478 |
| 275 | spectral/postman/postman-library | reusable-schema-description | kin           | OpenAPI2 | false    |   1195 | 16585 |
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
<small>valid: 11,450 (73.3%) / 15,617<br/>invalid: 2,701 (54.4%) /
4,967<br/>all: 14,151 (68.7%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 4,822 (75.3%) / 6,407<br/>invalid: 1,067 (52.2%) /
2,044<br/>all: 5,889 (69.7%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 6,628 (72%) / 9,210<br/>invalid: 1,634 (55.9%) /
2,923<br/>all: 8,262 (68.1%) / 12,133</small>
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
<small>valid: 14,921 (63.9%) / 23,345<br/>invalid: 3,502 (54.9%) /
6,375<br/>all: 18,423 (62%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 6,054 (77.1%) / 7,851<br/>invalid: 1,446 (57.8%) /
2,502<br/>all: 7,500 (72.4%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 8,867 (57.2%) / 15,494<br/>invalid: 2,056 (53.1%) /
3,873<br/>all: 10,923 (56.4%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                                      | collection_id | class    | is_valid | n_apis |  n_err |
|:----|:---------------------------------|:------------------------------------------|:--------------|:---------|:---------|-------:|-------:|
| 283 | spectral/postman/postman-library | schema-properties-define-array-boundaries | kin           | OpenAPI3 | true     |   6628 | 105695 |
| 284 | spectral/postman/postman-library | schema-properties-define-array-boundaries | kin           | OpenAPI2 | true     |   4822 |  66421 |
| 285 | spectral/postman/postman-library | schema-properties-define-array-boundaries | postman_apis  | OpenAPI3 | true     |   2112 |  83394 |
| 286 | spectral/postman/postman-library | schema-properties-define-array-boundaries | kin           | OpenAPI3 | false    |   1634 |  28727 |
| 287 | spectral/postman/postman-library | schema-properties-define-array-boundaries | postman_apis  | OpenAPI2 | true     |   1107 |  35062 |
| 288 | spectral/postman/postman-library | schema-properties-define-array-boundaries | kin           | OpenAPI2 | false    |   1067 |  16138 |
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
<small>valid: 12,135 (77.7%) / 15,617<br/>invalid: 3,161 (63.6%) /
4,967<br/>all: 15,296 (74.3%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 4,973 (77.6%) / 6,407<br/>invalid: 1,172 (57.3%) /
2,044<br/>all: 6,145 (72.7%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 7,162 (77.8%) / 9,210<br/>invalid: 1,989 (68%) /
2,923<br/>all: 9,151 (75.4%) / 12,133</small>
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
<small>valid: 19,215 (82.3%) / 23,345<br/>invalid: 4,208 (66%) /
6,375<br/>all: 23,423 (78.8%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 6,194 (78.9%) / 7,851<br/>invalid: 1,518 (60.7%) /
2,502<br/>all: 7,712 (74.5%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 13,021 (84%) / 15,494<br/>invalid: 2,690 (69.5%) /
3,873<br/>all: 15,711 (81.1%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                           | collection_id | class    | is_valid | n_apis |  n_err |
|:----|:---------------------------------|:-------------------------------|:--------------|:---------|:---------|-------:|-------:|
| 295 | spectral/postman/postman-library | schema-properties-descriptions | kin           | OpenAPI3 | true     |   7162 | 428935 |
| 296 | spectral/postman/postman-library | schema-properties-descriptions | postman_apis  | OpenAPI3 | true     |   5742 | 776231 |
| 297 | spectral/postman/postman-library | schema-properties-descriptions | kin           | OpenAPI2 | true     |   4973 | 280627 |
| 298 | spectral/postman/postman-library | schema-properties-descriptions | kin           | OpenAPI3 | false    |   1989 | 156120 |
| 299 | spectral/postman/postman-library | schema-properties-descriptions | kin           | OpenAPI2 | false    |   1172 |  83903 |
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
<small>valid: 11,105 (71.1%) / 15,617<br/>invalid: 2,868 (57.7%) /
4,967<br/>all: 13,973 (67.9%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 3,453 (53.9%) / 6,407<br/>invalid: 902 (44.1%) /
2,044<br/>all: 4,355 (51.5%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 7,652 (83.1%) / 9,210<br/>invalid: 1,966 (67.3%) /
2,923<br/>all: 9,618 (79.3%) / 12,133</small>
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
<small>valid: 17,640 (75.6%) / 23,345<br/>invalid: 4,056 (63.6%) /
6,375<br/>all: 21,696 (73%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 4,258 (54.2%) / 7,851<br/>invalid: 1,273 (50.9%) /
2,502<br/>all: 5,531 (53.4%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 13,382 (86.4%) / 15,494<br/>invalid: 2,783 (71.9%) /
3,873<br/>all: 16,165 (83.5%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                  | code                      | collection_id | class    | is_valid | n_apis |  n_err |
|:----|:---------------------------------|:--------------------------|:--------------|:---------|:---------|-------:|-------:|
| 307 | spectral/postman/postman-library | schema-reference-reusable | kin           | OpenAPI3 | true     |   7652 | 234459 |
| 308 | spectral/postman/postman-library | schema-reference-reusable | postman_apis  | OpenAPI3 | true     |   5601 | 229616 |
| 309 | spectral/postman/postman-library | schema-reference-reusable | kin           | OpenAPI2 | true     |   3453 |  28869 |
| 310 | spectral/postman/postman-library | schema-reference-reusable | kin           | OpenAPI3 | false    |   1966 |  71478 |
| 311 | spectral/postman/postman-library | schema-reference-reusable | kin           | OpenAPI2 | false    |    902 |  14207 |
| 312 | spectral/postman/postman-library | schema-reference-reusable | postman_apis  | OpenAPI3 | false    |    788 | 114225 |
| 313 | spectral/postman/postman-library | schema-reference-reusable | postman_apis  | OpenAPI2 | true     |    705 |  17502 |
| 314 | spectral/postman/postman-library | schema-reference-reusable | postman_apis  | OpenAPI2 | false    |    309 |  42405 |
| 315 | spectral/postman/postman-library | schema-reference-reusable | kinweb        | OpenAPI3 | true     |    129 |   4483 |
| 316 | spectral/postman/postman-library | schema-reference-reusable | kinweb        | OpenAPI2 | true     |    100 |   1115 |
| 317 | spectral/postman/postman-library | schema-reference-reusable | kinweb        | OpenAPI2 | false    |     62 |   1066 |
| 318 | spectral/postman/postman-library | schema-reference-reusable | kinweb        | OpenAPI3 | false    |     29 |   1318 |

</details>
