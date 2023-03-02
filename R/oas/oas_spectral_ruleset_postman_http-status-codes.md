OAS Spectral Ruleset postman/http-status-codes
================
<sup>Last updated: 2023-03-01</sup>

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

| rule                                                                                                                                                                            | All<br/>(22,756) | OpenAPI2<br/>(7,555) | OpenAPI3<br/>(15,201) |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------:|:--------------------:|:---------------------:|
| [postman:SpectralRule:http-status-codes:invalid:v1](#postman:SpectralRule:http-status-codes:invalid:v1)<br/><sup>HTTP status code not \[1-5\]XX, default or an x-tension.</sup> |   2,011 (8.8%)   |      465 (6.2%)      |     1,546 (10.2%)     |
| [postman:SpectralRule:http-status-codes:unassigned:v1](#postman:SpectralRule:http-status-codes:unassigned:v1)<br/><sup>Unassigned HTTP status code.</sup>                       |    158 (0.7%)    |      42 (0.6%)       |      116 (0.8%)       |
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
<small>valid: 134 (0.9%) / 15,323<br/>invalid: 33 (0.7%) /
4,859<br/>all: 167 (0.8%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 30 (0.5%) / 6,259<br/>invalid: 10 (0.5%) / 1,967<br/>all:
40 (0.5%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 104 (1.1%) / 9,064<br/>invalid: 23 (0.8%) / 2,892<br/>all:
127 (1.1%) / 11,956</small>
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
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 158 (0.7%) / 22,756<br/>invalid: 36 (0.6%) /
6,159<br/>all: 194 (0.7%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 42 (0.6%) / 7,555<br/>invalid: 10 (0.4%) / 2,348<br/>all:
52 (0.5%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 116 (0.8%) / 15,201<br/>invalid: 26 (0.7%) /
3,811<br/>all: 142 (0.7%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                    | code                                                 | collection_id | class    | is_valid | n_apis | n_err |
|:----|:-----------------------------------|:-----------------------------------------------------|:--------------|:---------|:---------|-------:|------:|
| 9   | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unassigned:v1 | kin           | OpenAPI3 | true     |    104 |  4044 |
| 10  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unassigned:v1 | kin           | OpenAPI2 | true     |     30 |   606 |
| 11  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unassigned:v1 | kin           | OpenAPI3 | false    |     23 |   170 |
| 12  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unassigned:v1 | postman_apis  | OpenAPI2 | true     |     12 |   794 |
| 13  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unassigned:v1 | postman_apis  | OpenAPI3 | true     |     12 |    49 |
| 14  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unassigned:v1 | kin           | OpenAPI2 | false    |     10 |   128 |
| 15  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unassigned:v1 | postman_apis  | OpenAPI3 | false    |      3 |    20 |

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
<small>valid: 17 (0.1%) / 15,323<br/>invalid: 9 (0.2%) / 4,859<br/>all:
26 (0.1%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 6 (0.1%) / 6,259<br/>invalid: 2 (0.1%) / 1,967<br/>all: 8
(0.1%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 11 (0.1%) / 9,064<br/>invalid: 7 (0.2%) / 2,892<br/>all:
18 (0.2%) / 11,956</small>
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
<small>valid: 21 (0.1%) / 22,756<br/>invalid: 9 (0.1%) / 6,159<br/>all:
30 (0.1%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 7 (0.1%) / 7,555<br/>invalid: 2 (0.1%) / 2,348<br/>all: 9
(0.1%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 14 (0.1%) / 15,201<br/>invalid: 7 (0.2%) / 3,811<br/>all:
21 (0.1%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type                    | code                                             | collection_id | class    | is_valid | n_apis | n_err |
|:----|:-----------------------------------|:-------------------------------------------------|:--------------|:---------|:---------|-------:|------:|
| 16  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unused:v1 | kin           | OpenAPI3 | true     |     11 |    38 |
| 17  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unused:v1 | kin           | OpenAPI3 | false    |      7 |    69 |
| 18  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unused:v1 | kin           | OpenAPI2 | true     |      6 |    27 |
| 19  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unused:v1 | postman_apis  | OpenAPI3 | true     |      3 |     3 |
| 20  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unused:v1 | kin           | OpenAPI2 | false    |      2 |     2 |
| 21  | spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:unused:v1 | postman_apis  | OpenAPI2 | true     |      1 |     2 |

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
<small>valid: 1,400 (9.1%) / 15,323<br/>invalid: 379 (7.8%) /
4,859<br/>all: 1,779 (8.8%) / 20,182</small>
</td>
<td style="text-align:center">
<small>valid: 382 (6.1%) / 6,259<br/>invalid: 112 (5.7%) /
1,967<br/>all: 494 (6%) / 8,226</small>
</td>
<td style="text-align:center">
<small>valid: 1,018 (11.2%) / 9,064<br/>invalid: 267 (9.2%) /
2,892<br/>all: 1,285 (10.7%) / 11,956</small>
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
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 2,011 (8.8%) / 22,756<br/>invalid: 449 (7.3%) /
6,159<br/>all: 2,460 (8.5%) / 28,915</small>
</td>
<td style="text-align:center">
<small>valid: 465 (6.2%) / 7,555<br/>invalid: 131 (5.6%) /
2,348<br/>all: 596 (6%) / 9,903</small>
</td>
<td style="text-align:center">
<small>valid: 1,546 (10.2%) / 15,201<br/>invalid: 318 (8.3%) /
3,811<br/>all: 1,864 (9.8%) / 19,012</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

| attachment_type                    | code                                              | collection_id | class    | is_valid | n_apis | n_err |
|:-----------------------------------|:--------------------------------------------------|:--------------|:---------|:---------|-------:|------:|
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | kin           | OpenAPI3 | true     |   1018 |  5686 |
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | postman_apis  | OpenAPI3 | true     |    528 |  6109 |
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | kin           | OpenAPI2 | true     |    382 |  1237 |
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | kin           | OpenAPI3 | false    |    267 |  2276 |
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | kin           | OpenAPI2 | false    |    112 |   470 |
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | postman_apis  | OpenAPI2 | true     |     83 |  1514 |
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | postman_apis  | OpenAPI3 | false    |     51 |   292 |
| spectral/postman/http-status-codes | postman:SpectralRule:http-status-codes:invalid:v1 | postman_apis  | OpenAPI2 | false    |     19 |   175 |

</details>
