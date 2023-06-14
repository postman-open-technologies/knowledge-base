OAS Spectral Ruleset stoplight/owasp
================
<sup>Last updated: 2023-06-14</sup>

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

| rule                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | All<br/>(23,345) | OpenAPI2<br/>(7,851) | OpenAPI3<br/>(15,494) |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------:|:--------------------:|:---------------------:|
| [owasp:api1:2019-no-numeric-ids](#owasp:api1:2019-no-numeric-ids)<br/><sup>OWASP API1:2019 - Use random IDs that cannot be guessed. UUIDs are preferred.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |   1,731 (7.4%)   |      11 (0.1%)       |     1,720 (11.1%)     |
| [owasp:api2:2019-auth-insecure-schemes](#owasp:api2:2019-auth-insecure-schemes)<br/><sup>There are many [HTTP authorization schemes](https://www.iana.org/assignments/http-authschemes/) but some of them are now considered insecure, such as negotiating authentication using specifications like NTLM or OAuth v1.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |    37 (0.2%)     |        0 (0%)        |       37 (0.2%)       |
| [owasp:api2:2019-jwt-best-practices](#owasp:api2:2019-jwt-best-practices)<br/><sup>JSON Web Tokens RFC7519 is a compact, URL-safe, means of representing claims to be transferred between two parties. JWT can be enclosed in encrypted or signed tokens like JWS and JWE.The [JOSE IANA registry](https://www.iana.org/assignments/jose/jose.xhtml) provides algorithms information.RFC8725 describes common pitfalls in the JWx specifications and intheir implementations, such as:- the ability to ignore algorithms, eg. `{"alg": "none"}`;- using insecure algorithms like `RSASSA-PKCS1-v1_5` eg. `{"alg": "RS256"}`.An API using JWT should explicit in the `description`that the implementation conforms to RFC8725.`components:  securitySchemes:    JWTBearer:      type: http      scheme: bearer      bearerFormat: JWT      description: |-        A bearer token in the format of a JWS and conformato        to the specifications included in RFC8725.`</sup> |   1,788 (7.7%)   |        0 (0%)        |     1,788 (11.5%)     |
| [owasp:api2:2019-no-api-keys-in-url](#owasp:api2:2019-no-api-keys-in-url)<br/><sup>API Keys are (usually opaque) strings thatare passed in headers, cookies or query parametersto access APIs.Those keys can be eavesdropped, especially when they are storedin cookies or passed as URL parameters.`security:- ApiKey: []paths:  /books: {}  /users: {}securitySchemes:  ApiKey:    type: apiKey    in: cookie    name: X-Api-Key`</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |    391 (1.7%)    |        0 (0%)        |      391 (2.5%)       |
| [owasp:api2:2019-no-credentials-in-url](#owasp:api2:2019-no-credentials-in-url)<br/><sup>URL parameters MUST NOT contain credentials such as API key, password, or secret. See [RAC_GEN_004](https://docs.italia.it/italia/piano-triennale-ict/lg-modellointeroperabilita-docs/it/bozza/doc/04_Raccomandazioni%20di%20implementazione/04_raccomandazioni-tecniche-generali/01_globali.html?highlight=credenziali#rac-gen-004-non-passare-credenziali-o-dati-riservati-nellurl)</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |    759 (3.3%)    |        0 (0%)        |      759 (4.9%)       |
| [owasp:api2:2019-no-http-basic](#owasp:api2:2019-no-http-basic)<br/><sup>Basic authentication credentials transported over network are more susceptible to interception than other forms of authentication, and as they are not encrypted it means passwords and tokens are more easily leaked.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |    681 (2.9%)    |        0 (0%)        |      681 (4.4%)       |
| [owasp:api2:2019-protection-global-safe](#owasp:api2:2019-protection-global-safe)<br/><sup>Check if the operation is protected at operation level.Otherwise, check the global `#/security` property.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |  9,470 (40.6%)   |    4,115 (52.4%)     |     5,355 (34.6%)     |
| [owasp:api2:2019-protection-global-unsafe](#owasp:api2:2019-protection-global-unsafe)<br/><sup>Your API should be protected by a `security` rule either at global or operation level. All operations should be protected especially when theynot safe (methods that do not alter the state of the server) HTTP methods like `POST`, `PUT`, `PATCH` and `DELETE`.This is done with one or more non-empty `security` rules.Security rules are defined in the `securityScheme` section.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |  7,977 (34.2%)   |    3,429 (43.7%)     |     4,548 (29.4%)     |
| [owasp:api2:2019-protection-global-unsafe-strict](#owasp:api2:2019-protection-global-unsafe-strict)<br/><sup>Check if the operation is protected at operation level.Otherwise, check the global `#/security` property.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |  8,025 (34.4%)   |    3,431 (43.7%)     |     4,594 (29.7%)     |
| [owasp:api3:2019-define-error-responses-401](#owasp:api3:2019-define-error-responses-401)<br/><sup>OWASP API Security recommends defining schemas for all responses, even errors. The 401 describes what happens when a request is unauthorized, so its important to define this not just for documentation, but to empower contract testing to make sure the proper JSON structure is being returned instead of leaking implementation details in backtraces.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |   14,471 (62%)   |    6,341 (80.8%)     |     8,130 (52.5%)     |
| [owasp:api3:2019-define-error-responses-500](#owasp:api3:2019-define-error-responses-500)<br/><sup>OWASP API Security recommends defining schemas for all responses, even errors. The 500 describes what happens when a request fails with an internal server error, so its important to define this not just for documentation, but to empower contract testing to make sure the proper JSON structure is being returned instead of leaking implementation details in backtraces.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |  14,165 (60.7%)  |    6,341 (80.8%)     |     7,824 (50.5%)     |
| [owasp:api3:2019-define-error-validation](#owasp:api3:2019-define-error-validation)<br/><sup>Carefully define schemas for all the API responses, including either 400 or 422 responses which describe errors caused by invalid requests.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |  12,644 (54.2%)  |    5,427 (69.1%)     |     7,217 (46.6%)     |
| [owasp:api4:2019-array-limit](#owasp:api4:2019-array-limit)<br/><sup>Array size should be limited to mitigate resource exhaustion attacks. This can be done using `maxItems`. You should ensure that the subschema in `items` is constrained too.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |  11,754 (50.3%)  |    4,972 (63.3%)     |     6,782 (43.8%)     |
| [owasp:api4:2019-integer-format](#owasp:api4:2019-integer-format)<br/><sup>Integers should be limited to mitigate resource exhaustion attacks. Specifying whether int32 or int64 is expected via `format`.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |  6,560 (28.1%)   |    2,548 (32.5%)     |     4,012 (25.9%)     |
| [owasp:api4:2019-integer-limit](#owasp:api4:2019-integer-limit)<br/><sup>Integers should be limited to mitigate resource exhaustion attacks. This can be done using `minimum` and `maximum`, which can with e.g.: avoiding negative numbers when positive are expected, or reducing unreasonable iterations like doing something 1000 times when 10 is expected.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |    70 (0.3%)     |        0 (0%)        |       70 (0.5%)       |
| [owasp:api4:2019-integer-limit-legacy](#owasp:api4:2019-integer-limit-legacy)<br/><sup>Integers should be limited to mitigate resource exhaustion attacks. This can be done using `minimum` and `maximum`, which can with e.g.: avoiding negative numbers when positive are expected, or reducing unreasonable iterations like doing something 1000 times when 10 is expected.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |  10,287 (44.1%)  |    4,481 (57.1%)     |     5,806 (37.5%)     |
| [owasp:api4:2019-rate-limit](#owasp:api4:2019-rate-limit)<br/><sup>Define proper rate limiting to avoid attackers overloading the API. There are many ways to implement rate-limiting, but most of them involve using HTTP headers, and there are two popular ways to do that:IETF Draft HTTP RateLimit Headers:. <https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/Customer> headers like X-Rate-Limit-Limit (Twitter: <https://developer.twitter.com/en/docs/twitter-api/rate-limits>) or X-RateLimit-Limit (GitHub: <https://docs.github.com/en/rest/overview/resources-in-the-rest-api>)</sup>                                                                                                                                                                                                                                                                                                                                                        |  8,551 (36.6%)   |        0 (0%)        |     8,551 (55.2%)     |
| [owasp:api4:2019-rate-limit-responses-429](#owasp:api4:2019-rate-limit-responses-429)<br/><sup>OWASP API Security recommends defining schemas for all responses, even errors. A HTTP 429 response signals the API client is making too many requests, and will supply information about when to retry so that the client can back off calmly without everything breaking. Defining this response is important not just for documentation, but to empower contract testing to make sure the proper JSON structure is being returned instead of leaking implementation details in backtraces. It also ensures your API/framework/gateway actually has rate limiting set up.</sup>                                                                                                                                                                                                                                                                                                |  14,777 (63.3%)  |    6,341 (80.8%)     |     8,436 (54.4%)     |
| [owasp:api4:2019-rate-limit-retry-after](#owasp:api4:2019-rate-limit-retry-after)<br/><sup>Define proper rate limiting to avoid attackers overloading the API. Part of that involves setting a Retry-After header so well meaning consumers are not polling and potentially exacerbating problems.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |    41 (0.2%)     |        0 (0%)        |       41 (0.3%)       |
| [owasp:api4:2019-string-limit](#owasp:api4:2019-string-limit)<br/><sup>String size should be limited to mitigate resource exhaustion attacks. This can be done using `maxLength`.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |  14,812 (63.4%)  |    6,273 (79.9%)     |     8,539 (55.1%)     |
| [owasp:api4:2019-string-restricted](#owasp:api4:2019-string-restricted)<br/><sup>To avoid unexpected values being sent or leaked, ensure that strings have either a format or a RegEx pattern. This can be done using `format` or `pattern`.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |  14,695 (62.9%)  |    6,211 (79.1%)     |     8,484 (54.8%)     |
| [owasp:api6:2019-constrained-additionalProperties](#owasp:api6:2019-constrained-additionalProperties)<br/><sup>By default JSON Schema allows additional properties, which can potentially lead to mass assignment issues, where unspecified fields are passed to the API without validation. Disable them with `additionalProperties: false` or add `maxProperties`</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |   1,314 (5.6%)   |        0 (0%)        |     1,314 (8.5%)      |
| [owasp:api6:2019-no-additionalProperties](#owasp:api6:2019-no-additionalProperties)<br/><sup>By default JSON Schema allows additional properties, which can potentially lead to mass assignment issues, where unspecified fields are passed to the API without validation. Disable them with `additionalProperties: false` or add `maxProperties`.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |   1,487 (6.4%)   |        0 (0%)        |     1,487 (9.6%)      |
| [owasp:api7:2019-security-hosts-https-oas2](#owasp:api7:2019-security-hosts-https-oas2)<br/><sup>All server interactions MUST use the https protocol, so the only OpenAPI scheme being used should be `https`.Learn more about the importance of TLS (over SSL) here: <https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html></sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |  2,599 (11.1%)   |    2,599 (33.1%)     |        0 (0%)         |
| [owasp:api7:2019-security-hosts-https-oas3](#owasp:api7:2019-security-hosts-https-oas3)<br/><sup>All server interactions MUST use the https protocol, meaning server URLs should begin `https://`.Learn more about the importance of TLS (over SSL) here: <https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html></sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |  3,892 (16.7%)   |        0 (0%)        |     3,892 (25.1%)     |

<a id="owasp:api1:2019-no-numeric-ids"></a>

### owasp:api1:2019-no-numeric-ids <sup>[🔝](#summary)</sup>

|             |                                                                               |
|-------------|-------------------------------------------------------------------------------|
| Description | OWASP API1:2019 - Use random IDs that cannot be guessed. UUIDs are preferred. |
| Severity    | error                                                                         |
| Message:    |                                                                               |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    description: OWASP API1:2019 - Use random IDs that cannot be guessed. UUIDs are preferred.
    severity: error
    given: $.paths..parameters[*][?(@property === "name" && (@ === "id" || @.match(/(_id|Id|-id)$/)))]^.schema
    then:
      function: schema
      functionOptions:
        schema:
          type: object
          not:
            properties:
              type:
                const: integer
          properties:
            format:
              const: uuid

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
<small>valid: 1,706 (10.9%) / 15,617<br/>invalid: 515 (10.4%) /
4,967<br/>all: 2,221 (10.8%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 11 (0.2%) / 6,407<br/>invalid: 40 (2%) / 2,044<br/>all: 51
(0.6%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 1,695 (18.4%) / 9,210<br/>invalid: 475 (16.3%) /
2,923<br/>all: 2,170 (17.9%) / 12,133</small>
</td>
</tr>
<tr>
<td>
kinweb
</td>
<td style="text-align:center">
<small>valid: 25 (8.5%) / 295<br/>invalid: 8 (7.4%) / 108<br/>all: 33
(8.2%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 148<br/>invalid: 0 (0%) / 77<br/>all: 0 (0%) /
225</small>
</td>
<td style="text-align:center">
<small>valid: 25 (17%) / 147<br/>invalid: 8 (25.8%) / 31<br/>all: 33
(18.5%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 1,731 (7.4%) / 23,345<br/>invalid: 523 (8.2%) /
6,375<br/>all: 2,254 (7.6%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 11 (0.1%) / 7,851<br/>invalid: 40 (1.6%) / 2,502<br/>all:
51 (0.5%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 1,720 (11.1%) / 15,494<br/>invalid: 483 (12.5%) /
3,873<br/>all: 2,203 (11.4%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

| attachment_type          | code                           | collection_id | class    | is_valid | n_apis | n_err |
|:-------------------------|:-------------------------------|:--------------|:---------|:---------|-------:|------:|
| spectral/stoplight/owasp | owasp:api1:2019-no-numeric-ids | kin           | OpenAPI3 | true     |   1695 | 12521 |
| spectral/stoplight/owasp | owasp:api1:2019-no-numeric-ids | kin           | OpenAPI3 | false    |    475 |  4382 |
| spectral/stoplight/owasp | owasp:api1:2019-no-numeric-ids | kin           | OpenAPI2 | false    |     40 |   186 |
| spectral/stoplight/owasp | owasp:api1:2019-no-numeric-ids | kinweb        | OpenAPI3 | true     |     25 |   149 |
| spectral/stoplight/owasp | owasp:api1:2019-no-numeric-ids | kin           | OpenAPI2 | true     |     11 |    35 |
| spectral/stoplight/owasp | owasp:api1:2019-no-numeric-ids | kinweb        | OpenAPI3 | false    |      8 |   110 |

</details>

<a id="owasp:api2:2019-no-http-basic"></a>

### owasp:api2:2019-no-http-basic <sup>[🔝](#summary)</sup>

|             |                                                                                                                                                                                                                        |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Description | Basic authentication credentials transported over network are more susceptible to interception than other forms of authentication, and as they are not encrypted it means passwords and tokens are more easily leaked. |
| Severity    | error                                                                                                                                                                                                                  |
| Message:    | Security scheme uses HTTP Basic. Use a more secure authentication method, like OAuth 2.0.                                                                                                                              |

<details style="margin-bottom:20px;">
<summary>
Rule Definition
</summary>

    message: Security scheme uses HTTP Basic. Use a more secure authentication method,
      like OAuth 2.0.
    description: Basic authentication credentials transported over network are more susceptible
      to interception than other forms of authentication, and as they are not encrypted
      it means passwords and tokens are more easily leaked.
    severity: error
    given: $.components.securitySchemes[*]
    then:
      field: scheme
      function: pattern
      functionOptions:
        notMatch: basic

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
<small>valid: 654 (4.2%) / 15,617<br/>invalid: 66 (1.3%) /
4,967<br/>all: 720 (3.5%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 6,407<br/>invalid: 1 (0%) / 2,044<br/>all: 1 (0%)
/ 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 654 (7.1%) / 9,210<br/>invalid: 65 (2.2%) / 2,923<br/>all:
719 (5.9%) / 12,133</small>
</td>
</tr>
<tr>
<td>
kinweb
</td>
<td style="text-align:center">
<small>valid: 27 (9.2%) / 295<br/>invalid: 1 (0.9%) / 108<br/>all: 28
(6.9%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 148<br/>invalid: 0 (0%) / 77<br/>all: 0 (0%) /
225</small>
</td>
<td style="text-align:center">
<small>valid: 27 (18.4%) / 147<br/>invalid: 1 (3.2%) / 31<br/>all: 28
(15.7%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 681 (2.9%) / 23,345<br/>invalid: 67 (1.1%) /
6,375<br/>all: 748 (2.5%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 7,851<br/>invalid: 1 (0%) / 2,502<br/>all: 1 (0%)
/ 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 681 (4.4%) / 15,494<br/>invalid: 66 (1.7%) /
3,873<br/>all: 747 (3.9%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type          | code                          | collection_id | class    | is_valid | n_apis | n_err |
|:----|:-------------------------|:------------------------------|:--------------|:---------|:---------|-------:|------:|
| 22  | spectral/stoplight/owasp | owasp:api2:2019-no-http-basic | kin           | OpenAPI3 | true     |    654 |   659 |
| 23  | spectral/stoplight/owasp | owasp:api2:2019-no-http-basic | kin           | OpenAPI3 | false    |     65 |    69 |
| 24  | spectral/stoplight/owasp | owasp:api2:2019-no-http-basic | kinweb        | OpenAPI3 | true     |     27 |    28 |
| 25  | spectral/stoplight/owasp | owasp:api2:2019-no-http-basic | kin           | OpenAPI2 | false    |      1 |     1 |
| 26  | spectral/stoplight/owasp | owasp:api2:2019-no-http-basic | kinweb        | OpenAPI3 | false    |      1 |     1 |

</details>

<a id="owasp:api2:2019-no-api-keys-in-url"></a>

### owasp:api2:2019-no-api-keys-in-url <sup>[🔝](#summary)</sup>

|             |                                            |
|-------------|--------------------------------------------|
| Description | API Keys are (usually opaque) strings that |

are passed in headers, cookies or query parameters to access APIs. Those
keys can be eavesdropped, especially when they are stored in cookies or
passed as URL parameters.

    security:
    - ApiKey: []
    paths:
      /books: {}
      /users: {}
    securitySchemes:
      ApiKey:
        type: apiKey
        in: cookie
        name: X-Api-Key
    ``` |
    | Severity | error |
    | Message: | ApiKey passed in URL: {{error}}. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: ‘ApiKey passed in URL: {{error}}.’ description: \|- API Keys
are (usually opaque) strings that are passed in headers, cookies or
query parameters to access APIs. Those keys can be eavesdropped,
especially when they are stored in cookies or passed as URL parameters.
`security:   - ApiKey: []   paths:     /books: {}     /users: {}   securitySchemes:     ApiKey:       type: apiKey       in: cookie       name: X-Api-Key`
severity: error formats: oas3 given:
$..[securitySchemes][?(@ && @.type=="apiKey")].in then: - function: pattern  functionOptions:  notMatch: ^(path|query)$

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 389 (2.5%) / 15,617<br/>invalid: 48 (1%) / 4,967<br/>all: 437 (2.1%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 6,407<br/>invalid: 2 (0.1%) / 2,044<br/>all: 2 (0%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 389 (4.2%) / 9,210<br/>invalid: 46 (1.6%) / 2,923<br/>all: 435 (3.6%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 2 (0.7%) / 295<br/>invalid: 1 (0.9%) / 108<br/>all: 3 (0.7%) / 403</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 148<br/>invalid: 0 (0%) / 77<br/>all: 0 (0%) / 225</small></td>
    <td style="text-align:center"><small>valid: 2 (1.4%) / 147<br/>invalid: 1 (3.2%) / 31<br/>all: 3 (1.7%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 391 (1.7%) / 23,345<br/>invalid: 49 (0.8%) / 6,375<br/>all: 440 (1.5%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 7,851<br/>invalid: 2 (0.1%) / 2,502<br/>all: 2 (0%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 391 (2.5%) / 15,494<br/>invalid: 47 (1.2%) / 3,873<br/>all: 438 (2.3%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                               |collection_id |class    |is_valid | n_apis| n_err|
    |:--|:------------------------|:----------------------------------|:-------------|:--------|:--------|------:|-----:|
    |13 |spectral/stoplight/owasp |owasp:api2:2019-no-api-keys-in-url |kin           |OpenAPI3 |true     |    389|   402|
    |14 |spectral/stoplight/owasp |owasp:api2:2019-no-api-keys-in-url |kin           |OpenAPI3 |false    |     46|    51|
    |15 |spectral/stoplight/owasp |owasp:api2:2019-no-api-keys-in-url |kin           |OpenAPI2 |false    |      2|     2|
    |16 |spectral/stoplight/owasp |owasp:api2:2019-no-api-keys-in-url |kinweb        |OpenAPI3 |true     |      2|     2|
    |17 |spectral/stoplight/owasp |owasp:api2:2019-no-api-keys-in-url |kinweb        |OpenAPI3 |false    |      1|     1|
    </details>




      



    <a id="owasp:api2:2019-no-credentials-in-url"></a>

    ### owasp:api2:2019-no-credentials-in-url <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | URL parameters MUST NOT contain credentials such as API key, password, or secret. See [RAC_GEN_004](https://docs.italia.it/italia/piano-triennale-ict/lg-modellointeroperabilita-docs/it/bozza/doc/04_Raccomandazioni%20di%20implementazione/04_raccomandazioni-tecniche-generali/01_globali.html?highlight=credenziali#rac-gen-004-non-passare-credenziali-o-dati-riservati-nellurl) |
    | Severity | error |
    | Message: | Security credentials detected in path parameter: {{value}}. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: ‘Security credentials detected in path parameter: {{value}}.’
description: URL parameters MUST NOT contain credentials such as API
key, password, or secret. See
[RAC_GEN_004](https://docs.italia.it/italia/piano-triennale-ict/lg-modellointeroperabilita-docs/it/bozza/doc/04_Raccomandazioni%20di%20implementazione/04_raccomandazioni-tecniche-generali/01_globali.html?highlight=credenziali#rac-gen-004-non-passare-credenziali-o-dati-riservati-nellurl)
severity: error formats: oas3 given:
$..parameters[?(@ && @.in && (@.in == "query" || @.in == "path"))].name then: - field: name  function: pattern  functionOptions:  notMatch: /^.*(client_?secret|token|access_?token|refresh_?token|id_?token|password|secret|api-?key).*$/i

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 744 (4.8%) / 15,617<br/>invalid: 224 (4.5%) / 4,967<br/>all: 968 (4.7%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 6,407<br/>invalid: 0 (0%) / 2,044<br/>all: 0 (0%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 744 (8.1%) / 9,210<br/>invalid: 224 (7.7%) / 2,923<br/>all: 968 (8%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 15 (5.1%) / 295<br/>invalid: 3 (2.8%) / 108<br/>all: 18 (4.5%) / 403</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 148<br/>invalid: 0 (0%) / 77<br/>all: 0 (0%) / 225</small></td>
    <td style="text-align:center"><small>valid: 15 (10.2%) / 147<br/>invalid: 3 (9.7%) / 31<br/>all: 18 (10.1%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 759 (3.3%) / 23,345<br/>invalid: 227 (3.6%) / 6,375<br/>all: 986 (3.3%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 7,851<br/>invalid: 0 (0%) / 2,502<br/>all: 0 (0%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 759 (4.9%) / 15,494<br/>invalid: 227 (5.9%) / 3,873<br/>all: 986 (5.1%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                                  |collection_id |class    |is_valid | n_apis| n_err|
    |:--|:------------------------|:-------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |18 |spectral/stoplight/owasp |owasp:api2:2019-no-credentials-in-url |kin           |OpenAPI3 |true     |    744|  3635|
    |19 |spectral/stoplight/owasp |owasp:api2:2019-no-credentials-in-url |kin           |OpenAPI3 |false    |    224|   637|
    |20 |spectral/stoplight/owasp |owasp:api2:2019-no-credentials-in-url |kinweb        |OpenAPI3 |true     |     15|    47|
    |21 |spectral/stoplight/owasp |owasp:api2:2019-no-credentials-in-url |kinweb        |OpenAPI3 |false    |      3|     4|
    </details>




      



    <a id="owasp:api2:2019-auth-insecure-schemes"></a>

    ### owasp:api2:2019-auth-insecure-schemes <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | There are many [HTTP authorization schemes](https://www.iana.org/assignments/http-authschemes/) but some of them are now considered insecure, such as negotiating authentication using specifications like NTLM or OAuth v1. |
    | Severity | error |
    | Message: | Authentication scheme is considered outdated or insecure: {{value}}. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: ‘Authentication scheme is considered outdated or insecure:
{{value}}.’ description: There are many [HTTP authorization
schemes](https://www.iana.org/assignments/http-authschemes/) but some of
them are now considered insecure, such as negotiating authentication
using specifications like NTLM or OAuth v1. severity: error formats:
oas3 given:
$..[securitySchemes][?(@.type=="http")].scheme then: - function: pattern  functionOptions:  notMatch: ^(negotiate|oauth)$

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 37 (0.2%) / 15,617<br/>invalid: 0 (0%) / 4,967<br/>all: 37 (0.2%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 6,407<br/>invalid: 0 (0%) / 2,044<br/>all: 0 (0%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 37 (0.4%) / 9,210<br/>invalid: 0 (0%) / 2,923<br/>all: 37 (0.3%) / 12,133</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 37 (0.2%) / 23,345<br/>invalid: 0 (0%) / 6,375<br/>all: 37 (0.1%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 7,851<br/>invalid: 0 (0%) / 2,502<br/>all: 0 (0%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 37 (0.2%) / 15,494<br/>invalid: 0 (0%) / 3,873<br/>all: 37 (0.2%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                                  |collection_id |class    |is_valid | n_apis| n_err|
    |:--|:------------------------|:-------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |7  |spectral/stoplight/owasp |owasp:api2:2019-auth-insecure-schemes |kin           |OpenAPI3 |true     |     37|    37|
    </details>




      



    <a id="owasp:api2:2019-jwt-best-practices"></a>

    ### owasp:api2:2019-jwt-best-practices <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | JSON Web Tokens RFC7519 is a compact, URL-safe, means of representing claims to be transferred between two parties. JWT can be enclosed in encrypted or signed tokens like JWS and JWE.

    The [JOSE IANA registry](https://www.iana.org/assignments/jose/jose.xhtml) provides algorithms information.

    RFC8725 describes common pitfalls in the JWx specifications and in
    their implementations, such as:
    - the ability to ignore algorithms, eg. `{"alg": "none"}`;
    - using insecure algorithms like `RSASSA-PKCS1-v1_5` eg. `{"alg": "RS256"}`.
    An API using JWT should explicit in the `description`
    that the implementation conforms to RFC8725.

components: securitySchemes: JWTBearer: type: http scheme: bearer
bearerFormat: JWT description: \|- A bearer token in the format of a JWS
and conformato to the specifications included in RFC8725.

``` |
| Severity | error |
| Message: | Security schemes using JWTs must explicitly declare support for RFC8725 in the description. |

<details style="margin-bottom:20px;">
<summary>Rule Definition</summary>
```

message: Security schemes using JWTs must explicitly declare support for
RFC8725 in the description. description: \|- JSON Web Tokens RFC7519 is
a compact, URL-safe, means of representing claims to be transferred
between two parties. JWT can be enclosed in encrypted or signed tokens
like JWS and JWE.

The [JOSE IANA
registry](https://www.iana.org/assignments/jose/jose.xhtml) provides
algorithms information.

RFC8725 describes common pitfalls in the JWx specifications and in their
implementations, such as: - the ability to ignore algorithms, eg.
`{"alg": "none"}`; - using insecure algorithms like `RSASSA-PKCS1-v1_5`
eg. `{"alg": "RS256"}`. An API using JWT should explicit in the
`description` that the implementation conforms to RFC8725.
`components:     securitySchemes:       JWTBearer:         type: http         scheme: bearer         bearerFormat: JWT         description: |-           A bearer token in the format of a JWS and conformato           to the specifications included in RFC8725.`
severity: error given: - \$..\[securitySchemes\]\[?(@ &&
@.type==“oauth2”)\] - \$..\[securitySchemes\]\[?(@ &&
(@.bearerFormat==“jwt” \|\| @.bearerFormat==“JWT”))\] then: - field:
description function: truthy - field: description function: pattern
functionOptions: match: .*RFC8725.*

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 1,765 (11.3%) / 15,617<br/>invalid: 515 (10.4%) / 4,967<br/>all: 2,280 (11.1%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 6,407<br/>invalid: 1 (0%) / 2,044<br/>all: 1 (0%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 1,765 (19.2%) / 9,210<br/>invalid: 514 (17.6%) / 2,923<br/>all: 2,279 (18.8%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 23 (7.8%) / 295<br/>invalid: 10 (9.3%) / 108<br/>all: 33 (8.2%) / 403</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 148<br/>invalid: 0 (0%) / 77<br/>all: 0 (0%) / 225</small></td>
    <td style="text-align:center"><small>valid: 23 (15.6%) / 147<br/>invalid: 10 (32.3%) / 31<br/>all: 33 (18.5%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 1,788 (7.7%) / 23,345<br/>invalid: 525 (8.2%) / 6,375<br/>all: 2,313 (7.8%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 7,851<br/>invalid: 1 (0%) / 2,502<br/>all: 1 (0%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 1,788 (11.5%) / 15,494<br/>invalid: 524 (13.5%) / 3,873<br/>all: 2,312 (11.9%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                               |collection_id |class    |is_valid | n_apis| n_err|
    |:--|:------------------------|:----------------------------------|:-------------|:--------|:--------|------:|-----:|
    |8  |spectral/stoplight/owasp |owasp:api2:2019-jwt-best-practices |kin           |OpenAPI3 |true     |   1765|  1951|
    |9  |spectral/stoplight/owasp |owasp:api2:2019-jwt-best-practices |kin           |OpenAPI3 |false    |    514|   587|
    |10 |spectral/stoplight/owasp |owasp:api2:2019-jwt-best-practices |kinweb        |OpenAPI3 |true     |     23|    24|
    |11 |spectral/stoplight/owasp |owasp:api2:2019-jwt-best-practices |kinweb        |OpenAPI3 |false    |     10|    12|
    |12 |spectral/stoplight/owasp |owasp:api2:2019-jwt-best-practices |kin           |OpenAPI2 |false    |      1|     1|
    </details>




      



    <a id="owasp:api2:2019-protection-global-unsafe"></a>

    ### owasp:api2:2019-protection-global-unsafe <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | Your API should be protected by a `security` rule either at global or operation level. All operations should be protected especially when they
    not safe (methods that do not alter the state of the server) 
    HTTP methods like `POST`, `PUT`, `PATCH` and `DELETE`.
    This is done with one or more non-empty `security` rules.

    Security rules are defined in the `securityScheme` section. |
    | Severity | error |
    | Message: | This operation is not protected by any security scheme. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: This operation is not protected by any security scheme.
description: “Your API should be protected by a `security` rule either
at global or operation level. All operations should be protected
especially when theysafe (methods that do not alter the state of the
server) methods like `POST`, `PUT`, `PATCH` and `DELETE`.is done with
one or more non-empty `security` rules.rules are defined in the
`securityScheme` section.” severity: error given: \$ then: - function:
checkSecurity functionOptions: schemesPath: securitySchemes nullable:
yes methods: - post - put - patch - delete

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 7,849 (50.3%) / 15,617<br/>invalid: 2,588 (52.1%) / 4,967<br/>all: 10,437 (50.7%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 3,349 (52.3%) / 6,407<br/>invalid: 1,052 (51.5%) / 2,044<br/>all: 4,401 (52.1%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 4,500 (48.9%) / 9,210<br/>invalid: 1,536 (52.5%) / 2,923<br/>all: 6,036 (49.7%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 128 (43.4%) / 295<br/>invalid: 50 (46.3%) / 108<br/>all: 178 (44.2%) / 403</small></td>
    <td style="text-align:center"><small>valid: 80 (54.1%) / 148<br/>invalid: 42 (54.5%) / 77<br/>all: 122 (54.2%) / 225</small></td>
    <td style="text-align:center"><small>valid: 48 (32.7%) / 147<br/>invalid: 8 (25.8%) / 31<br/>all: 56 (31.5%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 7,977 (34.2%) / 23,345<br/>invalid: 2,638 (41.4%) / 6,375<br/>all: 10,615 (35.7%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 3,429 (43.7%) / 7,851<br/>invalid: 1,094 (43.7%) / 2,502<br/>all: 4,523 (43.7%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 4,548 (29.4%) / 15,494<br/>invalid: 1,544 (39.9%) / 3,873<br/>all: 6,092 (31.5%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                                     |collection_id |class    |is_valid | n_apis| n_err|
    |:--|:------------------------|:----------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |35 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |kin           |OpenAPI3 |true     |   4500| 27721|
    |36 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |kin           |OpenAPI2 |true     |   3349| 24710|
    |37 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |kin           |OpenAPI3 |false    |   1536| 11698|
    |38 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |kin           |OpenAPI2 |false    |   1052|  9463|
    |39 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |kinweb        |OpenAPI2 |true     |     80|   670|
    |40 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |kinweb        |OpenAPI3 |true     |     48|   379|
    |41 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |kinweb        |OpenAPI2 |false    |     42|   579|
    |42 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |kinweb        |OpenAPI3 |false    |      8|    70|
    </details>




      



    <a id="owasp:api2:2019-protection-global-unsafe-strict"></a>

    ### owasp:api2:2019-protection-global-unsafe-strict <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | Check if the operation is protected at operation level.
    Otherwise, check the global `#/security` property. |
    | Severity | info |
    | Message: | This operation is not protected by any security scheme. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: This operation is not protected by any security scheme.
description: \|- Check if the operation is protected at operation level.
Otherwise, check the global `#/security` property. severity: info given:
\$ then: - function: checkSecurity functionOptions: schemesPath:
securitySchemes nullable: no methods: - post - patch - delete - put

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 7,897 (50.6%) / 15,617<br/>invalid: 2,652 (53.4%) / 4,967<br/>all: 10,549 (51.2%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 3,351 (52.3%) / 6,407<br/>invalid: 1,054 (51.6%) / 2,044<br/>all: 4,405 (52.1%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 4,546 (49.4%) / 9,210<br/>invalid: 1,598 (54.7%) / 2,923<br/>all: 6,144 (50.6%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 128 (43.4%) / 295<br/>invalid: 51 (47.2%) / 108<br/>all: 179 (44.4%) / 403</small></td>
    <td style="text-align:center"><small>valid: 80 (54.1%) / 148<br/>invalid: 42 (54.5%) / 77<br/>all: 122 (54.2%) / 225</small></td>
    <td style="text-align:center"><small>valid: 48 (32.7%) / 147<br/>invalid: 9 (29%) / 31<br/>all: 57 (32%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 8,025 (34.4%) / 23,345<br/>invalid: 2,703 (42.4%) / 6,375<br/>all: 10,728 (36.1%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 3,431 (43.7%) / 7,851<br/>invalid: 1,096 (43.8%) / 2,502<br/>all: 4,527 (43.7%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 4,594 (29.7%) / 15,494<br/>invalid: 1,607 (41.5%) / 3,873<br/>all: 6,201 (32%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                                            |collection_id |class    |is_valid | n_apis| n_err|
    |:--|:------------------------|:-----------------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |43 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |kin           |OpenAPI3 |true     |   4546| 27919|
    |44 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |kin           |OpenAPI2 |true     |   3351| 24715|
    |45 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |kin           |OpenAPI3 |false    |   1598| 12176|
    |46 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |kin           |OpenAPI2 |false    |   1054|  9596|
    |47 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |kinweb        |OpenAPI2 |true     |     80|   670|
    |48 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |kinweb        |OpenAPI3 |true     |     48|   379|
    |49 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |kinweb        |OpenAPI2 |false    |     42|   579|
    |50 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |kinweb        |OpenAPI3 |false    |      9|   107|
    </details>




      



    <a id="owasp:api2:2019-protection-global-safe"></a>

    ### owasp:api2:2019-protection-global-safe <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | Check if the operation is protected at operation level.
    Otherwise, check the global `#/security` property. |
    | Severity | info |
    | Message: | This operation is not protected by any security scheme. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: This operation is not protected by any security scheme.
description: \|- Check if the operation is protected at operation level.
Otherwise, check the global `#/security` property. severity: info given:
\$ then: - function: checkSecurity functionOptions: schemesPath:
securitySchemes nullable: yes methods: - get - head

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 9,289 (59.5%) / 15,617<br/>invalid: 2,833 (57%) / 4,967<br/>all: 12,122 (58.9%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 4,012 (62.6%) / 6,407<br/>invalid: 1,189 (58.2%) / 2,044<br/>all: 5,201 (61.5%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 5,277 (57.3%) / 9,210<br/>invalid: 1,644 (56.2%) / 2,923<br/>all: 6,921 (57%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 181 (61.4%) / 295<br/>invalid: 57 (52.8%) / 108<br/>all: 238 (59.1%) / 403</small></td>
    <td style="text-align:center"><small>valid: 103 (69.6%) / 148<br/>invalid: 44 (57.1%) / 77<br/>all: 147 (65.3%) / 225</small></td>
    <td style="text-align:center"><small>valid: 78 (53.1%) / 147<br/>invalid: 13 (41.9%) / 31<br/>all: 91 (51.1%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 9,470 (40.6%) / 23,345<br/>invalid: 2,890 (45.3%) / 6,375<br/>all: 12,360 (41.6%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 4,115 (52.4%) / 7,851<br/>invalid: 1,233 (49.3%) / 2,502<br/>all: 5,348 (51.7%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 5,355 (34.6%) / 15,494<br/>invalid: 1,657 (42.8%) / 3,873<br/>all: 7,012 (36.2%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                                   |collection_id |class    |is_valid | n_apis| n_err|
    |:--|:------------------------|:--------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |27 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |kin           |OpenAPI3 |true     |   5277| 34046|
    |28 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |kin           |OpenAPI2 |true     |   4012| 27567|
    |29 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |kin           |OpenAPI3 |false    |   1644| 13504|
    |30 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |kin           |OpenAPI2 |false    |   1189| 10406|
    |31 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |kinweb        |OpenAPI2 |true     |    103|  1102|
    |32 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |kinweb        |OpenAPI3 |true     |     78|   559|
    |33 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |kinweb        |OpenAPI2 |false    |     44|  1043|
    |34 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |kinweb        |OpenAPI3 |false    |     13|    95|
    </details>




      



    <a id="owasp:api3:2019-define-error-validation"></a>

    ### owasp:api3:2019-define-error-validation <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | Carefully define schemas for all the API responses, including either 400 or 422 responses which describe errors caused by invalid requests. |
    | Severity | warn |
    | Message: | Missing error validation response of either 400 or 422. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: Missing error validation response of either 400 or 422.
description: Carefully define schemas for all the API responses,
including either 400 or 422 responses which describe errors caused by
invalid requests. severity: warn given: \$.paths..responses then: -
function: schema functionOptions: schema: type: object oneOf: -
required: ‘400’ - required: ‘422’

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 12,419 (79.5%) / 15,617<br/>invalid: 3,247 (65.4%) / 4,967<br/>all: 15,666 (76.1%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 5,306 (82.8%) / 6,407<br/>invalid: 1,361 (66.6%) / 2,044<br/>all: 6,667 (78.9%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 7,113 (77.2%) / 9,210<br/>invalid: 1,886 (64.5%) / 2,923<br/>all: 8,999 (74.2%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 225 (76.3%) / 295<br/>invalid: 90 (83.3%) / 108<br/>all: 315 (78.2%) / 403</small></td>
    <td style="text-align:center"><small>valid: 121 (81.8%) / 148<br/>invalid: 64 (83.1%) / 77<br/>all: 185 (82.2%) / 225</small></td>
    <td style="text-align:center"><small>valid: 104 (70.7%) / 147<br/>invalid: 26 (83.9%) / 31<br/>all: 130 (73%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 12,644 (54.2%) / 23,345<br/>invalid: 3,337 (52.3%) / 6,375<br/>all: 15,981 (53.8%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 5,427 (69.1%) / 7,851<br/>invalid: 1,425 (57%) / 2,502<br/>all: 6,852 (66.2%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 7,217 (46.6%) / 15,494<br/>invalid: 1,912 (49.4%) / 3,873<br/>all: 9,129 (47.1%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                                    |collection_id |class    |is_valid | n_apis| n_err|
    |:--|:------------------------|:---------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |67 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |kin           |OpenAPI3 |true     |   7113| 83459|
    |68 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |kin           |OpenAPI2 |true     |   5306| 58133|
    |69 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |kin           |OpenAPI3 |false    |   1886| 28001|
    |70 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |kin           |OpenAPI2 |false    |   1361| 24458|
    |71 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |kinweb        |OpenAPI2 |true     |    121|  1903|
    |72 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |kinweb        |OpenAPI3 |true     |    104|  1149|
    |73 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |kinweb        |OpenAPI2 |false    |     64|  1937|
    |74 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |kinweb        |OpenAPI3 |false    |     26|   485|
    </details>




      



    <a id="owasp:api3:2019-define-error-responses-401"></a>

    ### owasp:api3:2019-define-error-responses-401 <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | OWASP API Security recommends defining schemas for all responses, even errors. The 401 describes what happens when a request is unauthorized, so its important to define this not just for documentation, but to empower contract testing to make sure the proper JSON structure is being returned instead of leaking implementation details in backtraces. |
    | Severity | warn |
    | Message: | Operation is missing {{property}}. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: Operation is missing {{property}}. description: OWASP API
Security recommends defining schemas for all responses, even errors. The
401 describes what happens when a request is unauthorized, so its
important to define this not just for documentation, but to empower
contract testing to make sure the proper JSON structure is being
returned instead of leaking implementation details in backtraces.
severity: warn given: \$.paths..responses then: - field: ‘401’ function:
truthy - field: 401.content function: truthy

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 14,208 (91%) / 15,617<br/>invalid: 3,713 (74.8%) / 4,967<br/>all: 17,921 (87.1%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 6,198 (96.7%) / 6,407<br/>invalid: 1,602 (78.4%) / 2,044<br/>all: 7,800 (92.3%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 8,010 (87%) / 9,210<br/>invalid: 2,111 (72.2%) / 2,923<br/>all: 10,121 (83.4%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 263 (89.2%) / 295<br/>invalid: 104 (96.3%) / 108<br/>all: 367 (91.1%) / 403</small></td>
    <td style="text-align:center"><small>valid: 143 (96.6%) / 148<br/>invalid: 75 (97.4%) / 77<br/>all: 218 (96.9%) / 225</small></td>
    <td style="text-align:center"><small>valid: 120 (81.6%) / 147<br/>invalid: 29 (93.5%) / 31<br/>all: 149 (83.7%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 14,471 (62%) / 23,345<br/>invalid: 3,817 (59.9%) / 6,375<br/>all: 18,288 (61.5%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 6,341 (80.8%) / 7,851<br/>invalid: 1,677 (67%) / 2,502<br/>all: 8,018 (77.4%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 8,130 (52.5%) / 15,494<br/>invalid: 2,140 (55.3%) / 3,873<br/>all: 10,270 (53%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                                       |collection_id |class    |is_valid | n_apis|  n_err|
    |:--|:------------------------|:------------------------------------------|:-------------|:--------|:--------|------:|------:|
    |51 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |kin           |OpenAPI3 |true     |   8010| 191737|
    |52 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |kin           |OpenAPI2 |true     |   6198| 151035|
    |53 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |kin           |OpenAPI3 |false    |   2111|  66809|
    |54 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |kin           |OpenAPI2 |false    |   1602|  55340|
    |55 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |kinweb        |OpenAPI2 |true     |    143|   4124|
    |56 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |kinweb        |OpenAPI3 |true     |    120|   2533|
    |57 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |kinweb        |OpenAPI2 |false    |     75|   3619|
    |58 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |kinweb        |OpenAPI3 |false    |     29|   1003|
    </details>




      



    <a id="owasp:api3:2019-define-error-responses-500"></a>

    ### owasp:api3:2019-define-error-responses-500 <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | OWASP API Security recommends defining schemas for all responses, even errors. The 500 describes what happens when a request fails with an internal server error, so its important to define this not just for documentation, but to empower contract testing to make sure the proper JSON structure is being returned instead of leaking implementation details in backtraces. |
    | Severity | warn |
    | Message: | Operation is missing {{property}}. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: Operation is missing {{property}}. description: OWASP API
Security recommends defining schemas for all responses, even errors. The
500 describes what happens when a request fails with an internal server
error, so its important to define this not just for documentation, but
to empower contract testing to make sure the proper JSON structure is
being returned instead of leaking implementation details in backtraces.
severity: warn given: \$.paths..responses then: - field: ‘500’ function:
truthy - field: 500.content function: truthy

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 13,907 (89.1%) / 15,617<br/>invalid: 3,659 (73.7%) / 4,967<br/>all: 17,566 (85.3%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 6,198 (96.7%) / 6,407<br/>invalid: 1,601 (78.3%) / 2,044<br/>all: 7,799 (92.3%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 7,709 (83.7%) / 9,210<br/>invalid: 2,058 (70.4%) / 2,923<br/>all: 9,767 (80.5%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 258 (87.5%) / 295<br/>invalid: 100 (92.6%) / 108<br/>all: 358 (88.8%) / 403</small></td>
    <td style="text-align:center"><small>valid: 143 (96.6%) / 148<br/>invalid: 75 (97.4%) / 77<br/>all: 218 (96.9%) / 225</small></td>
    <td style="text-align:center"><small>valid: 115 (78.2%) / 147<br/>invalid: 25 (80.6%) / 31<br/>all: 140 (78.7%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 14,165 (60.7%) / 23,345<br/>invalid: 3,759 (59%) / 6,375<br/>all: 17,924 (60.3%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 6,341 (80.8%) / 7,851<br/>invalid: 1,676 (67%) / 2,502<br/>all: 8,017 (77.4%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 7,824 (50.5%) / 15,494<br/>invalid: 2,083 (53.8%) / 3,873<br/>all: 9,907 (51.2%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                                       |collection_id |class    |is_valid | n_apis|  n_err|
    |:--|:------------------------|:------------------------------------------|:-------------|:--------|:--------|------:|------:|
    |59 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |kin           |OpenAPI3 |true     |   7709| 199477|
    |60 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |kin           |OpenAPI2 |true     |   6198| 147544|
    |61 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |kin           |OpenAPI3 |false    |   2058|  67578|
    |62 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |kin           |OpenAPI2 |false    |   1601|  55773|
    |63 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |kinweb        |OpenAPI2 |true     |    143|   4426|
    |64 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |kinweb        |OpenAPI3 |true     |    115|   2809|
    |65 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |kinweb        |OpenAPI2 |false    |     75|   4076|
    |66 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |kinweb        |OpenAPI3 |false    |     25|   1193|
    </details>




      



    <a id="owasp:api4:2019-rate-limit"></a>

    ### owasp:api4:2019-rate-limit <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | Define proper rate limiting to avoid attackers overloading the API. There are many ways to implement rate-limiting, but most of them involve using HTTP headers, and there are two popular ways to do that:

    IETF Draft HTTP RateLimit Headers:. https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/

    Customer headers like X-Rate-Limit-Limit (Twitter: https://developer.twitter.com/en/docs/twitter-api/rate-limits) or X-RateLimit-Limit (GitHub: https://docs.github.com/en/rest/overview/resources-in-the-rest-api) |
    | Severity | error |
    | Message: | All 2XX and 4XX responses should define rate limiting headers. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: All 2XX and 4XX responses should define rate limiting headers.
description: \|- Define proper rate limiting to avoid attackers
overloading the API. There are many ways to implement rate-limiting, but
most of them involve using HTTP headers, and there are two popular ways
to do that:

IETF Draft HTTP RateLimit Headers:.
<https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/>

Customer headers like X-Rate-Limit-Limit (Twitter:
<https://developer.twitter.com/en/docs/twitter-api/rate-limits>) or
X-RateLimit-Limit (GitHub:
<https://docs.github.com/en/rest/overview/resources-in-the-rest-api>)
severity: error formats: oas3 given:
\$.paths\[\*\]..responses\[?(@property.match(/^(2\|4)/))\] then: field:
headers function: schema functionOptions: schema: type: object oneOf: -
required: - RateLimit-Limit - RateLimit-Reset - required:
X-RateLimit-Limit - required: X-Rate-Limit-Limit

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 8,405 (53.8%) / 15,617<br/>invalid: 2,144 (43.2%) / 4,967<br/>all: 10,549 (51.2%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 6,407<br/>invalid: 7 (0.3%) / 2,044<br/>all: 7 (0.1%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 8,405 (91.3%) / 9,210<br/>invalid: 2,137 (73.1%) / 2,923<br/>all: 10,542 (86.9%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 146 (49.5%) / 295<br/>invalid: 29 (26.9%) / 108<br/>all: 175 (43.4%) / 403</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 148<br/>invalid: 0 (0%) / 77<br/>all: 0 (0%) / 225</small></td>
    <td style="text-align:center"><small>valid: 146 (99.3%) / 147<br/>invalid: 29 (93.5%) / 31<br/>all: 175 (98.3%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 8,551 (36.6%) / 23,345<br/>invalid: 2,173 (34.1%) / 6,375<br/>all: 10,724 (36.1%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 7,851<br/>invalid: 7 (0.3%) / 2,502<br/>all: 7 (0.1%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 8,551 (55.2%) / 15,494<br/>invalid: 2,166 (55.9%) / 3,873<br/>all: 10,717 (55.3%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                       |collection_id |class    |is_valid | n_apis|  n_err|
    |:---|:------------------------|:--------------------------|:-------------|:--------|:--------|------:|------:|
    |101 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit |kin           |OpenAPI3 |true     |   8405| 209307|
    |102 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit |kin           |OpenAPI3 |false    |   2137|  79713|
    |103 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit |kinweb        |OpenAPI3 |true     |    146|   4515|
    |104 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit |kinweb        |OpenAPI3 |false    |     29|   1119|
    |105 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit |kin           |OpenAPI2 |false    |      7|     95|
    </details>




      



    <a id="owasp:api4:2019-rate-limit-retry-after"></a>

    ### owasp:api4:2019-rate-limit-retry-after <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | Define proper rate limiting to avoid attackers overloading the API. Part of that involves setting a Retry-After header so well meaning consumers are not polling and potentially exacerbating problems. |
    | Severity | error |
    | Message: | A 429 response should define a Retry-After header. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: A 429 response should define a Retry-After header. description:
Define proper rate limiting to avoid attackers overloading the API. Part
of that involves setting a Retry-After header so well meaning consumers
are not polling and potentially exacerbating problems. severity: error
formats: oas3 given: \$..responses\[429\].headers then: field:
Retry-After function: defined

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 41 (0.3%) / 15,617<br/>invalid: 5 (0.1%) / 4,967<br/>all: 46 (0.2%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 6,407<br/>invalid: 0 (0%) / 2,044<br/>all: 0 (0%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 41 (0.4%) / 9,210<br/>invalid: 5 (0.2%) / 2,923<br/>all: 46 (0.4%) / 12,133</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 41 (0.2%) / 23,345<br/>invalid: 5 (0.1%) / 6,375<br/>all: 46 (0.2%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 7,851<br/>invalid: 0 (0%) / 2,502<br/>all: 0 (0%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 41 (0.3%) / 15,494<br/>invalid: 5 (0.1%) / 3,873<br/>all: 46 (0.2%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                                   |collection_id |class    |is_valid | n_apis| n_err|
    |:---|:------------------------|:--------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |114 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-retry-after |kin           |OpenAPI3 |true     |     41|   150|
    |115 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-retry-after |kin           |OpenAPI3 |false    |      5|    58|
    </details>




      



    <a id="owasp:api4:2019-rate-limit-responses-429"></a>

    ### owasp:api4:2019-rate-limit-responses-429 <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | OWASP API Security recommends defining schemas for all responses, even errors. A HTTP 429 response signals the API client is making too many requests, and will supply information about when to retry so that the client can back off calmly without everything breaking. Defining this response is important not just for documentation, but to empower contract testing to make sure the proper JSON structure is being returned instead of leaking implementation details in backtraces. It also ensures your API/framework/gateway actually has rate limiting set up. |
    | Severity | warn |
    | Message: | Operation is missing rate limiting response in {{property}}. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: Operation is missing rate limiting response in {{property}}.
description: OWASP API Security recommends defining schemas for all
responses, even errors. A HTTP 429 response signals the API client is
making too many requests, and will supply information about when to
retry so that the client can back off calmly without everything
breaking. Defining this response is important not just for
documentation, but to empower contract testing to make sure the proper
JSON structure is being returned instead of leaking implementation
details in backtraces. It also ensures your API/framework/gateway
actually has rate limiting set up. severity: warn given:
\$.paths..responses then: - field: ‘429’ function: truthy - field:
429.content function: truthy

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 14,510 (92.9%) / 15,617<br/>invalid: 3,756 (75.6%) / 4,967<br/>all: 18,266 (88.7%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 6,198 (96.7%) / 6,407<br/>invalid: 1,602 (78.4%) / 2,044<br/>all: 7,800 (92.3%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 8,312 (90.2%) / 9,210<br/>invalid: 2,154 (73.7%) / 2,923<br/>all: 10,466 (86.3%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 267 (90.5%) / 295<br/>invalid: 104 (96.3%) / 108<br/>all: 371 (92.1%) / 403</small></td>
    <td style="text-align:center"><small>valid: 143 (96.6%) / 148<br/>invalid: 75 (97.4%) / 77<br/>all: 218 (96.9%) / 225</small></td>
    <td style="text-align:center"><small>valid: 124 (84.4%) / 147<br/>invalid: 29 (93.5%) / 31<br/>all: 153 (86%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 14,777 (63.3%) / 23,345<br/>invalid: 3,860 (60.5%) / 6,375<br/>all: 18,637 (62.7%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 6,341 (80.8%) / 7,851<br/>invalid: 1,677 (67%) / 2,502<br/>all: 8,018 (77.4%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 8,436 (54.4%) / 15,494<br/>invalid: 2,183 (56.4%) / 3,873<br/>all: 10,619 (54.8%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                                     |collection_id |class    |is_valid | n_apis|  n_err|
    |:---|:------------------------|:----------------------------------------|:-------------|:--------|:--------|------:|------:|
    |106 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |kin           |OpenAPI3 |true     |   8312| 229245|
    |107 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |kin           |OpenAPI2 |true     |   6198| 163014|
    |108 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |kin           |OpenAPI3 |false    |   2154|  78998|
    |109 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |kin           |OpenAPI2 |false    |   1602|  60901|
    |110 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |kinweb        |OpenAPI2 |true     |    143|   4751|
    |111 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |kinweb        |OpenAPI3 |true     |    124|   3603|
    |112 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |kinweb        |OpenAPI2 |false    |     75|   4260|
    |113 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |kinweb        |OpenAPI3 |false    |     29|   1296|
    </details>




      



    <a id="owasp:api4:2019-array-limit"></a>

    ### owasp:api4:2019-array-limit <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | Array size should be limited to mitigate resource exhaustion attacks. This can be done using `maxItems`. You should ensure that the subschema in `items` is constrained too. |
    | Severity | error |
    | Message: | Schema of type array must specify maxItems. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: Schema of type array must specify maxItems. description: Array
size should be limited to mitigate resource exhaustion attacks. This can
be done using `maxItems`. You should ensure that the subschema in
`items` is constrained too. severity: error given: ‘\#ArrayProperties’
then: field: maxItems function: defined

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 11,503 (73.7%) / 15,617<br/>invalid: 2,711 (54.6%) / 4,967<br/>all: 14,214 (69.1%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 4,847 (75.7%) / 6,407<br/>invalid: 1,082 (52.9%) / 2,044<br/>all: 5,929 (70.2%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 6,656 (72.3%) / 9,210<br/>invalid: 1,629 (55.7%) / 2,923<br/>all: 8,285 (68.3%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 251 (85.1%) / 295<br/>invalid: 89 (82.4%) / 108<br/>all: 340 (84.4%) / 403</small></td>
    <td style="text-align:center"><small>valid: 125 (84.5%) / 148<br/>invalid: 68 (88.3%) / 77<br/>all: 193 (85.8%) / 225</small></td>
    <td style="text-align:center"><small>valid: 126 (85.7%) / 147<br/>invalid: 21 (67.7%) / 31<br/>all: 147 (82.6%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 11,754 (50.3%) / 23,345<br/>invalid: 2,800 (43.9%) / 6,375<br/>all: 14,554 (49%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 4,972 (63.3%) / 7,851<br/>invalid: 1,150 (46%) / 2,502<br/>all: 6,122 (59.1%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 6,782 (43.8%) / 15,494<br/>invalid: 1,650 (42.6%) / 3,873<br/>all: 8,432 (43.5%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                        |collection_id |class    |is_valid | n_apis|  n_err|
    |:--|:------------------------|:---------------------------|:-------------|:--------|:--------|------:|------:|
    |75 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |kin           |OpenAPI3 |true     |   6656| 105501|
    |76 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |kin           |OpenAPI2 |true     |   4847|  66046|
    |77 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |kin           |OpenAPI3 |false    |   1629|  28484|
    |78 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |kin           |OpenAPI2 |false    |   1082|  16347|
    |79 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |kinweb        |OpenAPI3 |true     |    126|   2341|
    |80 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |kinweb        |OpenAPI2 |true     |    125|   2134|
    |81 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |kinweb        |OpenAPI2 |false    |     68|   1498|
    |82 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |kinweb        |OpenAPI3 |false    |     21|    361|
    </details>




      



    <a id="owasp:api4:2019-string-limit"></a>

    ### owasp:api4:2019-string-limit <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | String size should be limited to mitigate resource exhaustion attacks. This can be done using `maxLength`. |
    | Severity | error |
    | Message: | Schema of type string must specify maxLength. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: Schema of type string must specify maxLength. description:
String size should be limited to mitigate resource exhaustion attacks.
This can be done using `maxLength`. severity: error given:
‘\#StringProperties’ then: field: maxLength function: defined

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 14,526 (93%) / 15,617<br/>invalid: 3,728 (75.1%) / 4,967<br/>all: 18,254 (88.7%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 6,130 (95.7%) / 6,407<br/>invalid: 1,544 (75.5%) / 2,044<br/>all: 7,674 (90.8%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 8,396 (91.2%) / 9,210<br/>invalid: 2,184 (74.7%) / 2,923<br/>all: 10,580 (87.2%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 286 (96.9%) / 295<br/>invalid: 103 (95.4%) / 108<br/>all: 389 (96.5%) / 403</small></td>
    <td style="text-align:center"><small>valid: 143 (96.6%) / 148<br/>invalid: 75 (97.4%) / 77<br/>all: 218 (96.9%) / 225</small></td>
    <td style="text-align:center"><small>valid: 143 (97.3%) / 147<br/>invalid: 28 (90.3%) / 31<br/>all: 171 (96.1%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 14,812 (63.4%) / 23,345<br/>invalid: 3,831 (60.1%) / 6,375<br/>all: 18,643 (62.7%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 6,273 (79.9%) / 7,851<br/>invalid: 1,619 (64.7%) / 2,502<br/>all: 7,892 (76.2%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 8,539 (55.1%) / 15,494<br/>invalid: 2,212 (57.1%) / 3,873<br/>all: 10,751 (55.5%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                         |collection_id |class    |is_valid | n_apis|  n_err|
    |:---|:------------------------|:----------------------------|:-------------|:--------|:--------|------:|------:|
    |116 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |kin           |OpenAPI3 |true     |   8396| 587428|
    |117 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |kin           |OpenAPI2 |true     |   6130| 415022|
    |118 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |kin           |OpenAPI3 |false    |   2184| 158821|
    |119 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |kin           |OpenAPI2 |false    |   1544| 113699|
    |120 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |kinweb        |OpenAPI3 |true     |    143|  10931|
    |121 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |kinweb        |OpenAPI2 |true     |    143|  12679|
    |122 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |kinweb        |OpenAPI2 |false    |     75|   9093|
    |123 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |kinweb        |OpenAPI3 |false    |     28|   2021|
    </details>




      



    <a id="owasp:api4:2019-string-restricted"></a>

    ### owasp:api4:2019-string-restricted <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | To avoid unexpected values being sent or leaked, ensure that strings have either a format or a RegEx pattern. This can be done using `format` or `pattern`. |
    | Severity | error |
    | Message: | Schema of type string must specify a format or pattern. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: Schema of type string must specify a format or pattern.
description: To avoid unexpected values being sent or leaked, ensure
that strings have either a format or a RegEx pattern. This can be done
using `format` or `pattern`. severity: error given: ‘\#StringProperties’
then: function: schema functionOptions: schema: type: object oneOf: -
required: format - required: pattern

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 14,409 (92.3%) / 15,617<br/>invalid: 3,656 (73.6%) / 4,967<br/>all: 18,065 (87.8%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 6,068 (94.7%) / 6,407<br/>invalid: 1,508 (73.8%) / 2,044<br/>all: 7,576 (89.6%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 8,341 (90.6%) / 9,210<br/>invalid: 2,148 (73.5%) / 2,923<br/>all: 10,489 (86.5%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 286 (96.9%) / 295<br/>invalid: 103 (95.4%) / 108<br/>all: 389 (96.5%) / 403</small></td>
    <td style="text-align:center"><small>valid: 143 (96.6%) / 148<br/>invalid: 75 (97.4%) / 77<br/>all: 218 (96.9%) / 225</small></td>
    <td style="text-align:center"><small>valid: 143 (97.3%) / 147<br/>invalid: 28 (90.3%) / 31<br/>all: 171 (96.1%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 14,695 (62.9%) / 23,345<br/>invalid: 3,759 (59%) / 6,375<br/>all: 18,454 (62.1%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 6,211 (79.1%) / 7,851<br/>invalid: 1,583 (63.3%) / 2,502<br/>all: 7,794 (75.3%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 8,484 (54.8%) / 15,494<br/>invalid: 2,176 (56.2%) / 3,873<br/>all: 10,660 (55%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                              |collection_id |class    |is_valid | n_apis|  n_err|
    |:---|:------------------------|:---------------------------------|:-------------|:--------|:--------|------:|------:|
    |124 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |kin           |OpenAPI3 |true     |   8341| 547737|
    |125 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |kin           |OpenAPI2 |true     |   6068| 394504|
    |126 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |kin           |OpenAPI3 |false    |   2148| 147575|
    |127 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |kin           |OpenAPI2 |false    |   1508| 107370|
    |128 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |kinweb        |OpenAPI3 |true     |    143|   9843|
    |129 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |kinweb        |OpenAPI2 |true     |    143|  11597|
    |130 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |kinweb        |OpenAPI2 |false    |     75|   8431|
    |131 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |kinweb        |OpenAPI3 |false    |     28|   1831|
    </details>




      



    <a id="owasp:api4:2019-integer-limit"></a>

    ### owasp:api4:2019-integer-limit <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | Integers should be limited to mitigate resource exhaustion attacks. This can be done using `minimum` and `maximum`, which can with e.g.: avoiding negative numbers when positive are expected, or reducing unreasonable iterations like doing something 1000 times when 10 is expected. |
    | Severity | error |
    | Message: | Schema of type integer must specify minimum and maximum. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: Schema of type integer must specify minimum and maximum.
description: ‘Integers should be limited to mitigate resource exhaustion
attacks. This can be done using `minimum` and `maximum`, which can with
e.g.: avoiding negative numbers when positive are expected, or reducing
unreasonable iterations like doing something 1000 times when 10 is
expected.’ severity: error formats: oas3_1 given: ‘\#IntegerProperties’
then: - function: xor functionOptions: properties: - minimum -
exclusiveMinimum - function: xor functionOptions: properties: -
maximum - exclusiveMaximum

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 70 (0.4%) / 15,617<br/>invalid: 25 (0.5%) / 4,967<br/>all: 95 (0.5%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 6,407<br/>invalid: 0 (0%) / 2,044<br/>all: 0 (0%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 70 (0.8%) / 9,210<br/>invalid: 25 (0.9%) / 2,923<br/>all: 95 (0.8%) / 12,133</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 70 (0.3%) / 23,345<br/>invalid: 25 (0.4%) / 6,375<br/>all: 95 (0.3%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 7,851<br/>invalid: 0 (0%) / 2,502<br/>all: 0 (0%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 70 (0.5%) / 15,494<br/>invalid: 25 (0.6%) / 3,873<br/>all: 95 (0.5%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                          |collection_id |class    |is_valid | n_apis| n_err|
    |:--|:------------------------|:-----------------------------|:-------------|:--------|:--------|------:|-----:|
    |91 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit |kin           |OpenAPI3 |true     |     70|  1389|
    |92 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit |kin           |OpenAPI3 |false    |     25|   329|
    </details>




      



    <a id="owasp:api4:2019-integer-limit-legacy"></a>

    ### owasp:api4:2019-integer-limit-legacy <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | Integers should be limited to mitigate resource exhaustion attacks. This can be done using `minimum` and `maximum`, which can with e.g.: avoiding negative numbers when positive are expected, or reducing unreasonable iterations like doing something 1000 times when 10 is expected. |
    | Severity | error |
    | Message: | Schema of type integer must specify minimum and maximum. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: Schema of type integer must specify minimum and maximum.
description: ‘Integers should be limited to mitigate resource exhaustion
attacks. This can be done using `minimum` and `maximum`, which can with
e.g.: avoiding negative numbers when positive are expected, or reducing
unreasonable iterations like doing something 1000 times when 10 is
expected.’ severity: error formats: - oas2 - oas3_0 given:
‘\#IntegerProperties’ then: - field: minimum function: defined - field:
maximum function: defined

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 10,036 (64.3%) / 15,617<br/>invalid: 2,512 (50.6%) / 4,967<br/>all: 12,548 (61%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 4,358 (68%) / 6,407<br/>invalid: 1,125 (55%) / 2,044<br/>all: 5,483 (64.9%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 5,678 (61.7%) / 9,210<br/>invalid: 1,387 (47.5%) / 2,923<br/>all: 7,065 (58.2%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 251 (85.1%) / 295<br/>invalid: 90 (83.3%) / 108<br/>all: 341 (84.6%) / 403</small></td>
    <td style="text-align:center"><small>valid: 123 (83.1%) / 148<br/>invalid: 69 (89.6%) / 77<br/>all: 192 (85.3%) / 225</small></td>
    <td style="text-align:center"><small>valid: 128 (87.1%) / 147<br/>invalid: 21 (67.7%) / 31<br/>all: 149 (83.7%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 10,287 (44.1%) / 23,345<br/>invalid: 2,602 (40.8%) / 6,375<br/>all: 12,889 (43.4%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 4,481 (57.1%) / 7,851<br/>invalid: 1,194 (47.7%) / 2,502<br/>all: 5,675 (54.8%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 5,806 (37.5%) / 15,494<br/>invalid: 1,408 (36.4%) / 3,873<br/>all: 7,214 (37.2%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                                 |collection_id |class    |is_valid | n_apis|  n_err|
    |:---|:------------------------|:------------------------------------|:-------------|:--------|:--------|------:|------:|
    |93  |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |kin           |OpenAPI3 |true     |   5678| 112269|
    |94  |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |kin           |OpenAPI2 |true     |   4358|  77985|
    |95  |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |kin           |OpenAPI3 |false    |   1387|  33078|
    |96  |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |kin           |OpenAPI2 |false    |   1125|  30906|
    |97  |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |kinweb        |OpenAPI3 |true     |    128|   2492|
    |98  |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |kinweb        |OpenAPI2 |true     |    123|   2650|
    |99  |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |kinweb        |OpenAPI2 |false    |     69|   1917|
    |100 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |kinweb        |OpenAPI3 |false    |     21|    472|
    </details>




      



    <a id="owasp:api4:2019-integer-format"></a>

    ### owasp:api4:2019-integer-format <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | Integers should be limited to mitigate resource exhaustion attacks. Specifying whether int32 or int64 is expected via `format`. |
    | Severity | error |
    | Message: | Schema of type integer must specify format (int32 or int64). |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: Schema of type integer must specify format (int32 or int64).
description: Integers should be limited to mitigate resource exhaustion
attacks. Specifying whether int32 or int64 is expected via `format`.
severity: error given: ‘\#IntegerProperties’ then: - field: format
function: defined

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 6,470 (41.4%) / 15,617<br/>invalid: 1,814 (36.5%) / 4,967<br/>all: 8,284 (40.2%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 2,513 (39.2%) / 6,407<br/>invalid: 730 (35.7%) / 2,044<br/>all: 3,243 (38.4%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 3,957 (43%) / 9,210<br/>invalid: 1,084 (37.1%) / 2,923<br/>all: 5,041 (41.5%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 90 (30.5%) / 295<br/>invalid: 46 (42.6%) / 108<br/>all: 136 (33.7%) / 403</small></td>
    <td style="text-align:center"><small>valid: 35 (23.6%) / 148<br/>invalid: 30 (39%) / 77<br/>all: 65 (28.9%) / 225</small></td>
    <td style="text-align:center"><small>valid: 55 (37.4%) / 147<br/>invalid: 16 (51.6%) / 31<br/>all: 71 (39.9%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 6,560 (28.1%) / 23,345<br/>invalid: 1,860 (29.2%) / 6,375<br/>all: 8,420 (28.3%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 2,548 (32.5%) / 7,851<br/>invalid: 760 (30.4%) / 2,502<br/>all: 3,308 (32%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 4,012 (25.9%) / 15,494<br/>invalid: 1,100 (28.4%) / 3,873<br/>all: 5,112 (26.4%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                           |collection_id |class    |is_valid | n_apis| n_err|
    |:--|:------------------------|:------------------------------|:-------------|:--------|:--------|------:|-----:|
    |83 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |kin           |OpenAPI3 |true     |   3957| 63897|
    |84 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |kin           |OpenAPI2 |true     |   2513| 33900|
    |85 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |kin           |OpenAPI3 |false    |   1084| 22682|
    |86 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |kin           |OpenAPI2 |false    |    730| 12607|
    |87 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |kinweb        |OpenAPI3 |true     |     55|   971|
    |88 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |kinweb        |OpenAPI2 |true     |     35|   403|
    |89 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |kinweb        |OpenAPI2 |false    |     30|   690|
    |90 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |kinweb        |OpenAPI3 |false    |     16|   395|
    </details>




      



    <a id="owasp:api6:2019-no-additionalProperties"></a>

    ### owasp:api6:2019-no-additionalProperties <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | By default JSON Schema allows additional properties, which can potentially lead to mass assignment issues, where unspecified fields are passed to the API without validation. Disable them with `additionalProperties: false` or add `maxProperties`. |
    | Severity | warn |
    | Message: | If the additionalProperties keyword is used it must be set to false. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: If the additionalProperties keyword is used it must be set to
false. description: ‘By default JSON Schema allows additional
properties, which can potentially lead to mass assignment issues, where
unspecified fields are passed to the API without validation. Disable
them with `additionalProperties: false` or add `maxProperties`.’
severity: warn formats: oas3 given: \$..\[?(@ && @.type==“object” &&
@.additionalProperties)\] then: - field: additionalProperties function:
falsy

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 1,440 (9.2%) / 15,617<br/>invalid: 255 (5.1%) / 4,967<br/>all: 1,695 (8.2%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 6,407<br/>invalid: 1 (0%) / 2,044<br/>all: 1 (0%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 1,440 (15.6%) / 9,210<br/>invalid: 254 (8.7%) / 2,923<br/>all: 1,694 (14%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 47 (15.9%) / 295<br/>invalid: 4 (3.7%) / 108<br/>all: 51 (12.7%) / 403</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 148<br/>invalid: 0 (0%) / 77<br/>all: 0 (0%) / 225</small></td>
    <td style="text-align:center"><small>valid: 47 (32%) / 147<br/>invalid: 4 (12.9%) / 31<br/>all: 51 (28.7%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 1,487 (6.4%) / 23,345<br/>invalid: 259 (4.1%) / 6,375<br/>all: 1,746 (5.9%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 7,851<br/>invalid: 1 (0%) / 2,502<br/>all: 1 (0%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 1,487 (9.6%) / 15,494<br/>invalid: 258 (6.7%) / 3,873<br/>all: 1,745 (9%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                                    |collection_id |class    |is_valid | n_apis| n_err|
    |:---|:------------------------|:---------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |137 |spectral/stoplight/owasp |owasp:api6:2019-no-additionalProperties |kin           |OpenAPI3 |true     |   1440|  7075|
    |138 |spectral/stoplight/owasp |owasp:api6:2019-no-additionalProperties |kin           |OpenAPI3 |false    |    254|  2389|
    |139 |spectral/stoplight/owasp |owasp:api6:2019-no-additionalProperties |kinweb        |OpenAPI3 |true     |     47|   153|
    |140 |spectral/stoplight/owasp |owasp:api6:2019-no-additionalProperties |kinweb        |OpenAPI3 |false    |      4|     5|
    |141 |spectral/stoplight/owasp |owasp:api6:2019-no-additionalProperties |kin           |OpenAPI2 |false    |      1|     2|
    </details>




      



    <a id="owasp:api6:2019-constrained-additionalProperties"></a>

    ### owasp:api6:2019-constrained-additionalProperties <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | By default JSON Schema allows additional properties, which can potentially lead to mass assignment issues, where unspecified fields are passed to the API without validation. Disable them with `additionalProperties: false` or add `maxProperties` |
    | Severity | warn |
    | Message: | Objects should not allow unconstrained additionalProperties. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: Objects should not allow unconstrained additionalProperties.
description: ‘By default JSON Schema allows additional properties, which
can potentially lead to mass assignment issues, where unspecified fields
are passed to the API without validation. Disable them with
`additionalProperties: false` or add `maxProperties`’ severity: warn
formats: oas3 given: \$..\[?(@ && @.type==“object” &&
@.additionalProperties && @.additionalProperties!=true &&
@.additionalProperties!=false )\] then: - field: maxProperties function:
defined

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 1,270 (8.1%) / 15,617<br/>invalid: 233 (4.7%) / 4,967<br/>all: 1,503 (7.3%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 6,407<br/>invalid: 1 (0%) / 2,044<br/>all: 1 (0%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 1,270 (13.8%) / 9,210<br/>invalid: 232 (7.9%) / 2,923<br/>all: 1,502 (12.4%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 44 (14.9%) / 295<br/>invalid: 3 (2.8%) / 108<br/>all: 47 (11.7%) / 403</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 148<br/>invalid: 0 (0%) / 77<br/>all: 0 (0%) / 225</small></td>
    <td style="text-align:center"><small>valid: 44 (29.9%) / 147<br/>invalid: 3 (9.7%) / 31<br/>all: 47 (26.4%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 1,314 (5.6%) / 23,345<br/>invalid: 236 (3.7%) / 6,375<br/>all: 1,550 (5.2%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 7,851<br/>invalid: 1 (0%) / 2,502<br/>all: 1 (0%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 1,314 (8.5%) / 15,494<br/>invalid: 235 (6.1%) / 3,873<br/>all: 1,549 (8%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                                             |collection_id |class    |is_valid | n_apis| n_err|
    |:---|:------------------------|:------------------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |132 |spectral/stoplight/owasp |owasp:api6:2019-constrained-additionalProperties |kin           |OpenAPI3 |true     |   1270|  6541|
    |133 |spectral/stoplight/owasp |owasp:api6:2019-constrained-additionalProperties |kin           |OpenAPI3 |false    |    232|  2203|
    |134 |spectral/stoplight/owasp |owasp:api6:2019-constrained-additionalProperties |kinweb        |OpenAPI3 |true     |     44|   152|
    |135 |spectral/stoplight/owasp |owasp:api6:2019-constrained-additionalProperties |kinweb        |OpenAPI3 |false    |      3|     3|
    |136 |spectral/stoplight/owasp |owasp:api6:2019-constrained-additionalProperties |kin           |OpenAPI2 |false    |      1|     4|
    </details>




      



    <a id="owasp:api7:2019-security-hosts-https-oas2"></a>

    ### owasp:api7:2019-security-hosts-https-oas2 <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | All server interactions MUST use the https protocol, so the only OpenAPI scheme being used should be `https`.

    Learn more about the importance of TLS (over SSL) here: https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html |
    | Severity | error |
    | Message: | All servers defined MUST use https, and no other protocol is permitted. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: All servers defined MUST use https, and no other protocol is
permitted. description: \|- All server interactions MUST use the https
protocol, so the only OpenAPI scheme being used should be `https`.

Learn more about the importance of TLS (over SSL) here:
<https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html>
severity: error formats: oas2 given: \$.schemes then: function: schema
functionOptions: schema: type: array items: type: string const: https

    </details>







    #### Statistics

    <table>
    <tr>
    <th>Collection</th>
    <th>All</th>
    <th>OpenAPI2</th>
    <th>OpenAPI3</th>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 2,566 (16.4%) / 15,617<br/>invalid: 747 (15%) / 4,967<br/>all: 3,313 (16.1%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 2,566 (40%) / 6,407<br/>invalid: 747 (36.5%) / 2,044<br/>all: 3,313 (39.2%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 9,210<br/>invalid: 0 (0%) / 2,923<br/>all: 0 (0%) / 12,133</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 33 (11.2%) / 295<br/>invalid: 23 (21.3%) / 108<br/>all: 56 (13.9%) / 403</small></td>
    <td style="text-align:center"><small>valid: 33 (22.3%) / 148<br/>invalid: 23 (29.9%) / 77<br/>all: 56 (24.9%) / 225</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 147<br/>invalid: 0 (0%) / 31<br/>all: 0 (0%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 2,599 (11.1%) / 23,345<br/>invalid: 770 (12.1%) / 6,375<br/>all: 3,369 (11.3%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 2,599 (33.1%) / 7,851<br/>invalid: 770 (30.8%) / 2,502<br/>all: 3,369 (32.5%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 15,494<br/>invalid: 0 (0%) / 3,873<br/>all: 0 (0%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                                      |collection_id |class    |is_valid | n_apis| n_err|
    |:---|:------------------------|:-----------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |142 |spectral/stoplight/owasp |owasp:api7:2019-security-hosts-https-oas2 |kin           |OpenAPI2 |true     |   2566|  2566|
    |143 |spectral/stoplight/owasp |owasp:api7:2019-security-hosts-https-oas2 |kin           |OpenAPI2 |false    |    747|   747|
    |144 |spectral/stoplight/owasp |owasp:api7:2019-security-hosts-https-oas2 |kinweb        |OpenAPI2 |true     |     33|    33|
    |145 |spectral/stoplight/owasp |owasp:api7:2019-security-hosts-https-oas2 |kinweb        |OpenAPI2 |false    |     23|    23|
    </details>




      



    <a id="owasp:api7:2019-security-hosts-https-oas3"></a>

    ### owasp:api7:2019-security-hosts-https-oas3 <sup>[🔝](#summary)</sup>

    | | |
    |---|---|
    | Description | All server interactions MUST use the https protocol, meaning server URLs should begin `https://`.

    Learn more about the importance of TLS (over SSL) here: https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html |
    | Severity | error |
    | Message: | Server URLs MUST begin https://, and no other protocol is permitted. |

    <details style="margin-bottom:20px;">
    <summary>Rule Definition</summary>

message: Server URLs MUST begin <https://>, and no other protocol is
permitted. description: \|- All server interactions MUST use the https
protocol, meaning server URLs should begin `https://`.

Learn more about the importance of TLS (over SSL) here:
<https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html>
severity: error formats: oas3 given: \$.servers..url then: function:
pattern functionOptions: match: /^<https:/>

\`\`\`
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
<small>valid: 3,842 (24.6%) / 15,617<br/>invalid: 906 (18.2%) /
4,967<br/>all: 4,748 (23.1%) / 20,584</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 6,407<br/>invalid: 3 (0.1%) / 2,044<br/>all: 3
(0%) / 8,451</small>
</td>
<td style="text-align:center">
<small>valid: 3,842 (41.7%) / 9,210<br/>invalid: 903 (30.9%) /
2,923<br/>all: 4,745 (39.1%) / 12,133</small>
</td>
</tr>
<tr>
<td>
kinweb
</td>
<td style="text-align:center">
<small>valid: 50 (16.9%) / 295<br/>invalid: 8 (7.4%) / 108<br/>all: 58
(14.4%) / 403</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 148<br/>invalid: 0 (0%) / 77<br/>all: 0 (0%) /
225</small>
</td>
<td style="text-align:center">
<small>valid: 50 (34%) / 147<br/>invalid: 8 (25.8%) / 31<br/>all: 58
(32.6%) / 178</small>
</td>
</tr>
<tr>
<td>
<i>All Collections</i>
</td>
<td style="text-align:center">
<small>valid: 3,892 (16.7%) / 23,345<br/>invalid: 914 (14.3%) /
6,375<br/>all: 4,806 (16.2%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 7,851<br/>invalid: 3 (0.1%) / 2,502<br/>all: 3
(0%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 3,892 (25.1%) / 15,494<br/>invalid: 911 (23.5%) /
3,873<br/>all: 4,803 (24.8%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type          | code                                      | collection_id | class    | is_valid | n_apis | n_err |
|:----|:-------------------------|:------------------------------------------|:--------------|:---------|:---------|-------:|------:|
| 146 | spectral/stoplight/owasp | owasp:api7:2019-security-hosts-https-oas3 | kin           | OpenAPI3 | true     |   3842 |  4322 |
| 147 | spectral/stoplight/owasp | owasp:api7:2019-security-hosts-https-oas3 | kin           | OpenAPI3 | false    |    903 |  1061 |
| 148 | spectral/stoplight/owasp | owasp:api7:2019-security-hosts-https-oas3 | kinweb        | OpenAPI3 | true     |     50 |    56 |
| 149 | spectral/stoplight/owasp | owasp:api7:2019-security-hosts-https-oas3 | kinweb        | OpenAPI3 | false    |      8 |    10 |
| 150 | spectral/stoplight/owasp | owasp:api7:2019-security-hosts-https-oas3 | kin           | OpenAPI2 | false    |      3 |     3 |

</details>
