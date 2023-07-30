OAS Spectral Ruleset postman/http-status-codes
================
<sup>Last updated: 2023-07-30</sup>

<sup>*DISCLAIMER: the results and findings below are preliminary and
have not been fully validated or peer reviewed. Use with care. Do not
quote or disseminate.*</sup>

<sup>[Back to spectral](oas_spectral.md) \| [View related
issues](https://github.com/postman-open-technologies/knowledge-base/labels/oas%3Aspectral)</sup>

### Overview

Finders based on IANA HTTP status code registry to detect use of
unassigned, unused or invalid HTTP status codes. The regexes used in
`http-status-codes-unassigned` and `http-status-codes-unused` have been
generated from the registry XML data.

Source code for this ruleset can be found at
<https://github.com/postman-open-technologies/knowledge-base/tree/main/spectral>

<a id="summary"></a>

### Summary

Spectral rule error rates for <u>schema validated APIs</u>. See below
for details and more granular analysis for each rule.

| rule                                                                                                                                                                            | All<br/>(23,345) | OpenAPI2<br/>(7,851) | OpenAPI3<br/>(15,494) |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------:|:--------------------:|:---------------------:|
| [postman:SpectralRule:http-status-codes:invalid:v1](#postman:SpectralRule:http-status-codes:invalid:v1)<br/><sup>HTTP status code not \[1-5\]XX, default or an x-tension.</sup> |   2,056 (8.8%)   |      483 (6.2%)      |     1,573 (10.2%)     |
| [postman:SpectralRule:http-status-codes:unassigned:v1](#postman:SpectralRule:http-status-codes:unassigned:v1)<br/><sup>Unassigned HTTP status code.</sup>                       |    170 (0.7%)    |      44 (0.6%)       |      126 (0.8%)       |
| [postman:SpectralRule:http-status-codes:unused:v1](#postman:SpectralRule:http-status-codes:unused:v1)<br/><sup>Unused or obsolete HTTP status code.</sup>                       |    21 (0.1%)     |       7 (0.1%)       |       14 (0.1%)       |

<a id="postman:SpectralRule:http-status-codes:unassigned:v1"></a>

### postman:SpectralRule:http-status-codes:unassigned:v1 <sup>[🔝](#summary)</sup>

|             |                                                                               |
|-------------|-------------------------------------------------------------------------------|
| Description | Unassigned HTTP status code.                                                  |
| Severity    | warn                                                                          |
| Message:    | The {{property}} HTTP status code is not assigned according to IANA registry. |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Unassigned HTTP status code.
    message: The {{property}} HTTP status code is not assigned according to IANA registry.
    given: '#HttpStatus'
    severity: warn
    formats:
    - oas2
    - oas3
    then:
    - function: pattern
      functionOptions:
        notMatch: (?:10[4-9]|1[1-9][0-9])|(?:209|21[0-9]|22[0-5])|(?:22[7-9]|2[3-9][0-9])|(?:309|3[1-9][0-9])|(?:419|420)|427|430|(?:43[2-9]|44[0-9]|450)|(?:45[2-9]|4[6-9][0-9])|509|(?:51[2-9]|5[2-9][0-9])

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
<small>valid: 140 (0.9%) / 15,617<br/>invalid: 35 (0.7%) /
4,967<br/>all: 175 (0.9%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 31 (0.5%) / 6,407<br/>invalid: 10 (0.5%) / 2,044<br/>all:
41 (0.5%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 109 (1.2%) / 9,210<br/>invalid: 25 (0.9%) / 2,923<br/>all:
134 (1.1%) / 12,133</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 24 (0.3%) / 7,433<br/>invalid: 3 (0.2%) / 1,300<br/>all:
27 (0.3%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 12 (0.9%) / 1,296<br/>invalid: 0 (0%) / 381<br/>all: 12
(0.7%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 12 (0.2%) / 6,137<br/>invalid: 3 (0.3%) / 919<br/>all: 15
(0.2%) / 7,056</small>
</td>
</tr>
<tr>
<td>
kinweb
</td>
<td style="text-align:center">
<small>valid: 6 (2%) / 295<br/>invalid: 2 (1.9%) / 108<br/>all: 8 (2%) /
403</small>
</td>
<td style="text-align:center">
<small>valid: 1 (0.7%) / 148<br/>invalid: 0 (0%) / 77<br/>all: 1 (0.4%)
/ 225</small>
</td>
<td style="text-align:center">
<small>valid: 5 (3.4%) / 147<br/>invalid: 2 (6.5%) / 31<br/>all: 7
(3.9%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 170 (0.7%) / 23,345<br/>invalid: 40 (0.6%) /
6,375<br/>all: 210 (0.7%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 44 (0.6%) / 7,851<br/>invalid: 10 (0.4%) / 2,502<br/>all:
54 (0.5%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 126 (0.8%) / 15,494<br/>invalid: 30 (0.8%) /
3,873<br/>all: 156 (0.8%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                    | code                                                 | collection_id | class    | is_valid | n_apis | n_err |
|:----|:-----------------------------------|:-----------------------------------------------------|:--------------|:---------|:---------|-------:|------:|
| 13  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unassigned:v1 | kin           | OpenAPI3 | true     |    109 |  4082 |
| 14  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unassigned:v1 | kin           | OpenAPI2 | true     |     31 |   607 |
| 15  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unassigned:v1 | kin           | OpenAPI3 | false    |     25 |   175 |
| 16  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unassigned:v1 | postman_apis  | OpenAPI2 | true     |     12 |   794 |
| 17  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unassigned:v1 | postman_apis  | OpenAPI3 | true     |     12 |    49 |
| 18  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unassigned:v1 | kin           | OpenAPI2 | false    |     10 |   128 |
| 19  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unassigned:v1 | kinweb        | OpenAPI3 | true     |      5 |    38 |
| 20  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unassigned:v1 | postman_apis  | OpenAPI3 | false    |      3 |    20 |
| 21  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unassigned:v1 | kinweb        | OpenAPI3 | false    |      2 |     5 |
| 22  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unassigned:v1 | kinweb        | OpenAPI2 | true     |      1 |     1 |

</details>

<a id="postman:SpectralRule:http-status-codes:unused:v1"></a>

### postman:SpectralRule:http-status-codes:unused:v1 <sup>[🔝](#summary)</sup>

|             |                                                                                     |
|-------------|-------------------------------------------------------------------------------------|
| Description | Unused or obsolete HTTP status code.                                                |
| Severity    | warn                                                                                |
| Message:    | The {{property}} HTTP status code is unused or obsolete according to IANA registry. |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: Unused or obsolete HTTP status code.
    message: The {{property}} HTTP status code is unused or obsolete according to IANA
      registry.
    given: '#HttpStatus'
    severity: warn
    formats:
    - oas2
    - oas3
    then:
    - function: pattern
      functionOptions:
        notMatch: 306|418|510

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
<small>valid: 17 (0.1%) / 15,617<br/>invalid: 9 (0.2%) / 4,967<br/>all:
26 (0.1%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 6 (0.1%) / 6,407<br/>invalid: 2 (0.1%) / 2,044<br/>all: 8
(0.1%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 11 (0.1%) / 9,210<br/>invalid: 7 (0.2%) / 2,923<br/>all:
18 (0.1%) / 12,133</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 4 (0.1%) / 7,433<br/>invalid: 0 (0%) / 1,300<br/>all: 4
(0%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 1 (0.1%) / 1,296<br/>invalid: 0 (0%) / 381<br/>all: 1
(0.1%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 3 (0%) / 6,137<br/>invalid: 0 (0%) / 919<br/>all: 3 (0%) /
7,056</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 21 (0.1%) / 23,345<br/>invalid: 9 (0.1%) / 6,375<br/>all:
30 (0.1%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 7 (0.1%) / 7,851<br/>invalid: 2 (0.1%) / 2,502<br/>all: 9
(0.1%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 14 (0.1%) / 15,494<br/>invalid: 7 (0.2%) / 3,873<br/>all:
21 (0.1%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                    | code                                             | collection_id | class    | is_valid | n_apis | n_err |
|:----|:-----------------------------------|:-------------------------------------------------|:--------------|:---------|:---------|-------:|------:|
| 23  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unused:v1 | kin           | OpenAPI3 | true     |     11 |    38 |
| 24  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unused:v1 | kin           | OpenAPI3 | false    |      7 |    69 |
| 25  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unused:v1 | kin           | OpenAPI2 | true     |      6 |    27 |
| 26  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unused:v1 | postman_apis  | OpenAPI3 | true     |      3 |     3 |
| 27  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unused:v1 | kin           | OpenAPI2 | false    |      2 |     2 |
| 28  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unused:v1 | postman_apis  | OpenAPI2 | true     |      1 |     2 |

</details>

<a id="postman:SpectralRule:http-status-codes:invalid:v1"></a>

### postman:SpectralRule:http-status-codes:invalid:v1 <sup>[🔝](#summary)</sup>

|             |                                                                                            |
|-------------|--------------------------------------------------------------------------------------------|
| Description | HTTP status code not \[1-5\]XX, default or an x-tension.                                   |
| Severity    | error                                                                                      |
| Message:    | {{property}} is not a valid HTTP status (100-599), the ‘default’ wildcard or an extension. |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: HTTP status code not [1-5]XX, default or an x-tension.
    message: '{{property}} is not a valid HTTP status (100-599), the ''default'' wildcard
      or an extension.'
    given: '#HttpStatus'
    severity: error
    formats:
    - oas2
    - oas3
    then:
    - function: pattern
      functionOptions:
        match: '[1-5]..|default|^x-'

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
<small>valid: 1,424 (9.1%) / 15,617<br/>invalid: 386 (7.8%) /
4,967<br/>all: 1,810 (8.8%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 391 (6.1%) / 6,407<br/>invalid: 114 (5.6%) /
2,044<br/>all: 505 (6%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 1,033 (11.2%) / 9,210<br/>invalid: 272 (9.3%) /
2,923<br/>all: 1,305 (10.8%) / 12,133</small>
</td>
</tr>
<tr>
<td>
postman_apis
</td>
<td style="text-align:center">
<small>valid: 611 (8.2%) / 7,433<br/>invalid: 70 (5.4%) / 1,300<br/>all:
681 (7.8%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 83 (6.4%) / 1,296<br/>invalid: 19 (5%) / 381<br/>all: 102
(6.1%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 528 (8.6%) / 6,137<br/>invalid: 51 (5.5%) / 919<br/>all:
579 (8.2%) / 7,056</small>
</td>
</tr>
<tr>
<td>
kinweb
</td>
<td style="text-align:center">
<small>valid: 21 (7.1%) / 295<br/>invalid: 7 (6.5%) / 108<br/>all: 28
(6.9%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 9 (6.1%) / 148<br/>invalid: 2 (2.6%) / 77<br/>all: 11
(4.9%) / 225</small>
</td>
<td style="text-align:center">
<small>valid: 12 (8.2%) / 147<br/>invalid: 5 (16.1%) / 31<br/>all: 17
(9.6%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 2,056 (8.8%) / 23,345<br/>invalid: 463 (7.3%) /
6,375<br/>all: 2,519 (8.5%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 483 (6.2%) / 7,851<br/>invalid: 135 (5.4%) /
2,502<br/>all: 618 (6%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 1,573 (10.2%) / 15,494<br/>invalid: 328 (8.5%) /
3,873<br/>all: 1,901 (9.8%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

| attachment_type                    | code                                              | collection_id | class    | is_valid | n_apis | n_err |
|:-----------------------------------|:--------------------------------------------------|:--------------|:---------|:---------|-------:|------:|
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | kin           | OpenAPI3 | true     |   1033 |  5735 |
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | postman_apis  | OpenAPI3 | true     |    528 |  6109 |
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | kin           | OpenAPI2 | true     |    391 |  1263 |
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | kin           | OpenAPI3 | false    |    272 |  2316 |
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | kin           | OpenAPI2 | false    |    114 |   481 |
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | postman_apis  | OpenAPI2 | true     |     83 |  1514 |
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | postman_apis  | OpenAPI3 | false    |     51 |   292 |
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | postman_apis  | OpenAPI2 | false    |     19 |   175 |
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | kinweb        | OpenAPI3 | true     |     12 |    34 |
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | kinweb        | OpenAPI2 | true     |      9 |    26 |
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | kinweb        | OpenAPI3 | false    |      5 |    40 |
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | kinweb        | OpenAPI2 | false    |      2 |    11 |

</details>
