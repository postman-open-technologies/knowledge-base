OAS Spectral Ruleset stoplight/owasp
================
<sup>Last updated: 2023-08-17</sup>

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
| [owasp:api1:2019-no-numeric-ids](#owasp:api1:2019-no-numeric-ids)<br/><sup>OWASP API1:2019 - Use random IDs that cannot be guessed. UUIDs are preferred.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |  5,304 (22.7%)   |      18 (0.2%)       |     5,286 (34.1%)     |
| [owasp:api2:2019-auth-insecure-schemes](#owasp:api2:2019-auth-insecure-schemes)<br/><sup>There are many [HTTP authorization schemes](https://www.iana.org/assignments/http-authschemes/) but some of them are now considered insecure, such as negotiating authentication using specifications like NTLM or OAuth v1.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |    40 (0.2%)     |        0 (0%)        |       40 (0.3%)       |
| [owasp:api2:2019-jwt-best-practices](#owasp:api2:2019-jwt-best-practices)<br/><sup>JSON Web Tokens RFC7519 is a compact, URL-safe, means of representing claims to be transferred between two parties. JWT can be enclosed in encrypted or signed tokens like JWS and JWE.The [JOSE IANA registry](https://www.iana.org/assignments/jose/jose.xhtml) provides algorithms information.RFC8725 describes common pitfalls in the JWx specifications and intheir implementations, such as:- the ability to ignore algorithms, eg. `{"alg": "none"}`;- using insecure algorithms like `RSASSA-PKCS1-v1_5` eg. `{"alg": "RS256"}`.An API using JWT should explicit in the `description`that the implementation conforms to RFC8725.`components:  securitySchemes:    JWTBearer:      type: http      scheme: bearer      bearerFormat: JWT      description: |-        A bearer token in the format of a JWS and conformato        to the specifications included in RFC8725.`</sup> |   2,186 (9.4%)   |        0 (0%)        |     2,186 (14.1%)     |
| [owasp:api2:2019-no-api-keys-in-url](#owasp:api2:2019-no-api-keys-in-url)<br/><sup>API Keys are (usually opaque) strings thatare passed in headers, cookies or query parametersto access APIs.Those keys can be eavesdropped, especially when they are storedin cookies or passed as URL parameters.`security:- ApiKey: []paths:  /books: {}  /users: {}securitySchemes:  ApiKey:    type: apiKey    in: cookie    name: X-Api-Key`</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |    525 (2.2%)    |        0 (0%)        |      525 (3.4%)       |
| [owasp:api2:2019-no-credentials-in-url](#owasp:api2:2019-no-credentials-in-url)<br/><sup>URL parameters MUST NOT contain credentials such as API key, password, or secret. See [RAC_GEN_004](https://docs.italia.it/italia/piano-triennale-ict/lg-modellointeroperabilita-docs/it/bozza/doc/04_Raccomandazioni%20di%20implementazione/04_raccomandazioni-tecniche-generali/01_globali.html?highlight=credenziali#rac-gen-004-non-passare-credenziali-o-dati-riservati-nellurl)</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |   1,013 (4.3%)   |        0 (0%)        |     1,013 (6.5%)      |
| [owasp:api2:2019-no-http-basic](#owasp:api2:2019-no-http-basic)<br/><sup>Basic authentication credentials transported over network are more susceptible to interception than other forms of authentication, and as they are not encrypted it means passwords and tokens are more easily leaked.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |  3,303 (14.1%)   |        0 (0%)        |     3,303 (21.3%)     |
| [owasp:api2:2019-protection-global-safe](#owasp:api2:2019-protection-global-safe)<br/><sup>Check if the operation is protected at operation level.Otherwise, check the global `#/security` property.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |  12,681 (54.3%)  |    4,901 (62.4%)     |     7,780 (50.2%)     |
| [owasp:api2:2019-protection-global-unsafe](#owasp:api2:2019-protection-global-unsafe)<br/><sup>Your API should be protected by a `security` rule either at global or operation level. All operations should be protected especially when theynot safe (methods that do not alter the state of the server) HTTP methods like `POST`, `PUT`, `PATCH` and `DELETE`.This is done with one or more non-empty `security` rules.Security rules are defined in the `securityScheme` section.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |  10,106 (43.3%)  |    4,110 (52.4%)     |     5,996 (38.7%)     |
| [owasp:api2:2019-protection-global-unsafe-strict](#owasp:api2:2019-protection-global-unsafe-strict)<br/><sup>Check if the operation is protected at operation level.Otherwise, check the global `#/security` property.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |  10,166 (43.5%)  |    4,113 (52.4%)     |     6,053 (39.1%)     |
| [owasp:api3:2019-define-error-responses-401](#owasp:api3:2019-define-error-responses-401)<br/><sup>OWASP API Security recommends defining schemas for all responses, even errors. The 401 describes what happens when a request is unauthorized, so its important to define this not just for documentation, but to empower contract testing to make sure the proper JSON structure is being returned instead of leaking implementation details in backtraces.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |  21,419 (91.7%)  |    7,629 (97.2%)     |     13,790 (89%)      |
| [owasp:api3:2019-define-error-responses-500](#owasp:api3:2019-define-error-responses-500)<br/><sup>OWASP API Security recommends defining schemas for all responses, even errors. The 500 describes what happens when a request fails with an internal server error, so its important to define this not just for documentation, but to empower contract testing to make sure the proper JSON structure is being returned instead of leaking implementation details in backtraces.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |  20,800 (89.1%)  |    7,629 (97.2%)     |     13,171 (85%)      |
| [owasp:api3:2019-define-error-validation](#owasp:api3:2019-define-error-validation)<br/><sup>Carefully define schemas for all the API responses, including either 400 or 422 responses which describe errors caused by invalid requests.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |  19,103 (81.8%)  |    6,314 (80.4%)     |    12,789 (82.5%)     |
| [owasp:api4:2019-array-limit](#owasp:api4:2019-array-limit)<br/><sup>Array size should be limited to mitigate resource exhaustion attacks. This can be done using `maxItems`. You should ensure that the subschema in `items` is constrained too.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |  14,966 (64.1%)  |    6,075 (77.4%)     |     8,891 (57.4%)     |
| [owasp:api4:2019-integer-format](#owasp:api4:2019-integer-format)<br/><sup>Integers should be limited to mitigate resource exhaustion attacks. Specifying whether int32 or int64 is expected via `format`.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |  8,300 (35.6%)   |    3,077 (39.2%)     |     5,223 (33.7%)     |
| [owasp:api4:2019-integer-limit](#owasp:api4:2019-integer-limit)<br/><sup>Integers should be limited to mitigate resource exhaustion attacks. This can be done using `minimum` and `maximum`, which can with e.g.: avoiding negative numbers when positive are expected, or reducing unreasonable iterations like doing something 1000 times when 10 is expected.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |    94 (0.4%)     |        0 (0%)        |       94 (0.6%)       |
| [owasp:api4:2019-integer-limit-legacy](#owasp:api4:2019-integer-limit-legacy)<br/><sup>Integers should be limited to mitigate resource exhaustion attacks. This can be done using `minimum` and `maximum`, which can with e.g.: avoiding negative numbers when positive are expected, or reducing unreasonable iterations like doing something 1000 times when 10 is expected.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |   16,345 (70%)   |    5,509 (70.2%)     |    10,836 (69.9%)     |
| [owasp:api4:2019-rate-limit](#owasp:api4:2019-rate-limit)<br/><sup>Define proper rate limiting to avoid attackers overloading the API. There are many ways to implement rate-limiting, but most of them involve using HTTP headers, and there are two popular ways to do that:IETF Draft HTTP RateLimit Headers:. <https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/Customer> headers like X-Rate-Limit-Limit (Twitter: <https://developer.twitter.com/en/docs/twitter-api/rate-limits>) or X-RateLimit-Limit (GitHub: <https://docs.github.com/en/rest/overview/resources-in-the-rest-api>)</sup>                                                                                                                                                                                                                                                                                                                                                        |  14,635 (62.7%)  |        0 (0%)        |    14,635 (94.5%)     |
| [owasp:api4:2019-rate-limit-responses-429](#owasp:api4:2019-rate-limit-responses-429)<br/><sup>OWASP API Security recommends defining schemas for all responses, even errors. A HTTP 429 response signals the API client is making too many requests, and will supply information about when to retry so that the client can back off calmly without everything breaking. Defining this response is important not just for documentation, but to empower contract testing to make sure the proper JSON structure is being returned instead of leaking implementation details in backtraces. It also ensures your API/framework/gateway actually has rate limiting set up.</sup>                                                                                                                                                                                                                                                                                                |  21,861 (93.6%)  |    7,629 (97.2%)     |    14,232 (91.9%)     |
| [owasp:api4:2019-rate-limit-retry-after](#owasp:api4:2019-rate-limit-retry-after)<br/><sup>Define proper rate limiting to avoid attackers overloading the API. Part of that involves setting a Retry-After header so well meaning consumers are not polling and potentially exacerbating problems.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |    67 (0.3%)     |        0 (0%)        |       67 (0.4%)       |
| [owasp:api4:2019-string-limit](#owasp:api4:2019-string-limit)<br/><sup>String size should be limited to mitigate resource exhaustion attacks. This can be done using `maxLength`.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |   22,186 (95%)   |    7,559 (96.3%)     |    14,627 (94.4%)     |
| [owasp:api4:2019-string-restricted](#owasp:api4:2019-string-restricted)<br/><sup>To avoid unexpected values being sent or leaked, ensure that strings have either a format or a RegEx pattern. This can be done using `format` or `pattern`.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |  22,053 (94.5%)  |    7,494 (95.5%)     |     14,559 (94%)      |
| [owasp:api6:2019-constrained-additionalProperties](#owasp:api6:2019-constrained-additionalProperties)<br/><sup>By default JSON Schema allows additional properties, which can potentially lead to mass assignment issues, where unspecified fields are passed to the API without validation. Disable them with `additionalProperties: false` or add `maxProperties`</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |   1,716 (7.4%)   |        0 (0%)        |     1,716 (11.1%)     |
| [owasp:api6:2019-no-additionalProperties](#owasp:api6:2019-no-additionalProperties)<br/><sup>By default JSON Schema allows additional properties, which can potentially lead to mass assignment issues, where unspecified fields are passed to the API without validation. Disable them with `additionalProperties: false` or add `maxProperties`.</sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |   1,919 (8.2%)   |        0 (0%)        |     1,919 (12.4%)     |
| [owasp:api7:2019-security-hosts-https-oas2](#owasp:api7:2019-security-hosts-https-oas2)<br/><sup>All server interactions MUST use the https protocol, so the only OpenAPI scheme being used should be `https`.Learn more about the importance of TLS (over SSL) here: <https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html></sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |  2,943 (12.6%)   |    2,943 (37.5%)     |        0 (0%)         |
| [owasp:api7:2019-security-hosts-https-oas3](#owasp:api7:2019-security-hosts-https-oas3)<br/><sup>All server interactions MUST use the https protocol, meaning server URLs should begin `https://`.Learn more about the importance of TLS (over SSL) here: <https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.html></sup>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |   7,242 (31%)    |        0 (0%)        |     7,242 (46.7%)     |

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
postman_apis
</td>
<td style="text-align:center">
<small>valid: 3,573 (48.1%) / 7,433<br/>invalid: 220 (16.9%) /
1,300<br/>all: 3,793 (43.4%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 7 (0.5%) / 1,296<br/>invalid: 11 (2.9%) / 381<br/>all: 18
(1.1%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 3,566 (58.1%) / 6,137<br/>invalid: 209 (22.7%) /
919<br/>all: 3,775 (53.5%) / 7,056</small>
</td>
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
<small>valid: 5,304 (22.7%) / 23,345<br/>invalid: 743 (11.7%) /
6,375<br/>all: 6,047 (20.3%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 18 (0.2%) / 7,851<br/>invalid: 51 (2%) / 2,502<br/>all: 69
(0.7%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 5,286 (34.1%) / 15,494<br/>invalid: 692 (17.9%) /
3,873<br/>all: 5,978 (30.9%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

| attachment_type          | code                           | collection_id | class    | is_valid | n_apis | n_err |
|:-------------------------|:-------------------------------|:--------------|:---------|:---------|-------:|------:|
| spectral/stoplight/owasp | owasp:api1:2019-no-numeric-ids | postman_apis  | OpenAPI3 | true     |   3566 | 15986 |
| spectral/stoplight/owasp | owasp:api1:2019-no-numeric-ids | kin           | OpenAPI3 | true     |   1695 | 12521 |
| spectral/stoplight/owasp | owasp:api1:2019-no-numeric-ids | kin           | OpenAPI3 | false    |    475 |  4382 |
| spectral/stoplight/owasp | owasp:api1:2019-no-numeric-ids | postman_apis  | OpenAPI3 | false    |    209 |  4410 |
| spectral/stoplight/owasp | owasp:api1:2019-no-numeric-ids | kin           | OpenAPI2 | false    |     40 |   186 |
| spectral/stoplight/owasp | owasp:api1:2019-no-numeric-ids | kinweb        | OpenAPI3 | true     |     25 |   149 |
| spectral/stoplight/owasp | owasp:api1:2019-no-numeric-ids | postman_apis  | OpenAPI2 | false    |     11 |    15 |
| spectral/stoplight/owasp | owasp:api1:2019-no-numeric-ids | kin           | OpenAPI2 | true     |     11 |    35 |
| spectral/stoplight/owasp | owasp:api1:2019-no-numeric-ids | kinweb        | OpenAPI3 | false    |      8 |   110 |
| spectral/stoplight/owasp | owasp:api1:2019-no-numeric-ids | postman_apis  | OpenAPI2 | true     |      7 |   459 |

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
postman_apis
</td>
<td style="text-align:center">
<small>valid: 2,622 (35.3%) / 7,433<br/>invalid: 103 (7.9%) /
1,300<br/>all: 2,725 (31.2%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 1,296<br/>invalid: 2 (0.5%) / 381<br/>all: 2
(0.1%) / 1,677</small>
</td>
<td style="text-align:center">
<small>valid: 2,622 (42.7%) / 6,137<br/>invalid: 101 (11%) /
919<br/>all: 2,723 (38.6%) / 7,056</small>
</td>
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
<small>valid: 3,303 (14.1%) / 23,345<br/>invalid: 170 (2.7%) /
6,375<br/>all: 3,473 (11.7%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 7,851<br/>invalid: 3 (0.1%) / 2,502<br/>all: 3
(0%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 3,303 (21.3%) / 15,494<br/>invalid: 167 (4.3%) /
3,873<br/>all: 3,470 (17.9%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type          | code                          | collection_id | class    | is_valid | n_apis | n_err |
|:----|:-------------------------|:------------------------------|:--------------|:---------|:---------|-------:|------:|
| 35  | spectral/stoplight/owasp | owasp:api2:2019-no-http-basic | postman_apis  | OpenAPI3 | true     |   2622 |  2622 |
| 36  | spectral/stoplight/owasp | owasp:api2:2019-no-http-basic | kin           | OpenAPI3 | true     |    654 |   659 |
| 37  | spectral/stoplight/owasp | owasp:api2:2019-no-http-basic | postman_apis  | OpenAPI3 | false    |    101 |   101 |
| 38  | spectral/stoplight/owasp | owasp:api2:2019-no-http-basic | kin           | OpenAPI3 | false    |     65 |    69 |
| 39  | spectral/stoplight/owasp | owasp:api2:2019-no-http-basic | kinweb        | OpenAPI3 | true     |     27 |    28 |
| 40  | spectral/stoplight/owasp | owasp:api2:2019-no-http-basic | postman_apis  | OpenAPI2 | false    |      2 |     2 |
| 41  | spectral/stoplight/owasp | owasp:api2:2019-no-http-basic | kin           | OpenAPI2 | false    |      1 |     1 |
| 42  | spectral/stoplight/owasp | owasp:api2:2019-no-http-basic | kinweb        | OpenAPI3 | false    |      1 |     1 |

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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 134 (1.8%) / 7,433<br/>invalid: 18 (1.4%) / 1,300<br/>all: 152 (1.7%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 1,296<br/>invalid: 0 (0%) / 381<br/>all: 0 (0%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 134 (2.2%) / 6,137<br/>invalid: 18 (2%) / 919<br/>all: 152 (2.2%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 2 (0.7%) / 295<br/>invalid: 1 (0.9%) / 108<br/>all: 3 (0.7%) / 403</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 148<br/>invalid: 0 (0%) / 77<br/>all: 0 (0%) / 225</small></td>
    <td style="text-align:center"><small>valid: 2 (1.4%) / 147<br/>invalid: 1 (3.2%) / 31<br/>all: 3 (1.7%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 525 (2.2%) / 23,345<br/>invalid: 67 (1.1%) / 6,375<br/>all: 592 (2%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 7,851<br/>invalid: 2 (0.1%) / 2,502<br/>all: 2 (0%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 525 (3.4%) / 15,494<br/>invalid: 65 (1.7%) / 3,873<br/>all: 590 (3%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                               |collection_id |class    |is_valid | n_apis| n_err|
    |:--|:------------------------|:----------------------------------|:-------------|:--------|:--------|------:|-----:|
    |21 |spectral/stoplight/owasp |owasp:api2:2019-no-api-keys-in-url |kin           |OpenAPI3 |true     |    389|   402|
    |22 |spectral/stoplight/owasp |owasp:api2:2019-no-api-keys-in-url |postman_apis  |OpenAPI3 |true     |    134|   159|
    |23 |spectral/stoplight/owasp |owasp:api2:2019-no-api-keys-in-url |kin           |OpenAPI3 |false    |     46|    51|
    |24 |spectral/stoplight/owasp |owasp:api2:2019-no-api-keys-in-url |postman_apis  |OpenAPI3 |false    |     18|    18|
    |25 |spectral/stoplight/owasp |owasp:api2:2019-no-api-keys-in-url |kinweb        |OpenAPI3 |true     |      2|     2|
    |26 |spectral/stoplight/owasp |owasp:api2:2019-no-api-keys-in-url |kin           |OpenAPI2 |false    |      2|     2|
    |27 |spectral/stoplight/owasp |owasp:api2:2019-no-api-keys-in-url |kinweb        |OpenAPI3 |false    |      1|     1|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 254 (3.4%) / 7,433<br/>invalid: 147 (11.3%) / 1,300<br/>all: 401 (4.6%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 1,296<br/>invalid: 2 (0.5%) / 381<br/>all: 2 (0.1%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 254 (4.1%) / 6,137<br/>invalid: 145 (15.8%) / 919<br/>all: 399 (5.7%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 15 (5.1%) / 295<br/>invalid: 3 (2.8%) / 108<br/>all: 18 (4.5%) / 403</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 148<br/>invalid: 0 (0%) / 77<br/>all: 0 (0%) / 225</small></td>
    <td style="text-align:center"><small>valid: 15 (10.2%) / 147<br/>invalid: 3 (9.7%) / 31<br/>all: 18 (10.1%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 1,013 (4.3%) / 23,345<br/>invalid: 374 (5.9%) / 6,375<br/>all: 1,387 (4.7%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 7,851<br/>invalid: 2 (0.1%) / 2,502<br/>all: 2 (0%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 1,013 (6.5%) / 15,494<br/>invalid: 372 (9.6%) / 3,873<br/>all: 1,385 (7.2%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                                  |collection_id |class    |is_valid | n_apis| n_err|
    |:--|:------------------------|:-------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |28 |spectral/stoplight/owasp |owasp:api2:2019-no-credentials-in-url |kin           |OpenAPI3 |true     |    744|  3635|
    |29 |spectral/stoplight/owasp |owasp:api2:2019-no-credentials-in-url |postman_apis  |OpenAPI3 |true     |    254|  1285|
    |30 |spectral/stoplight/owasp |owasp:api2:2019-no-credentials-in-url |kin           |OpenAPI3 |false    |    224|   637|
    |31 |spectral/stoplight/owasp |owasp:api2:2019-no-credentials-in-url |postman_apis  |OpenAPI3 |false    |    145|  1301|
    |32 |spectral/stoplight/owasp |owasp:api2:2019-no-credentials-in-url |kinweb        |OpenAPI3 |true     |     15|    47|
    |33 |spectral/stoplight/owasp |owasp:api2:2019-no-credentials-in-url |kinweb        |OpenAPI3 |false    |      3|     4|
    |34 |spectral/stoplight/owasp |owasp:api2:2019-no-credentials-in-url |postman_apis  |OpenAPI2 |false    |      2|     4|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 3 (0%) / 7,433<br/>invalid: 0 (0%) / 1,300<br/>all: 3 (0%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 1,296<br/>invalid: 0 (0%) / 381<br/>all: 0 (0%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 3 (0%) / 6,137<br/>invalid: 0 (0%) / 919<br/>all: 3 (0%) / 7,056</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 40 (0.2%) / 23,345<br/>invalid: 0 (0%) / 6,375<br/>all: 40 (0.1%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 7,851<br/>invalid: 0 (0%) / 2,502<br/>all: 0 (0%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 40 (0.3%) / 15,494<br/>invalid: 0 (0%) / 3,873<br/>all: 40 (0.2%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                                  |collection_id |class    |is_valid | n_apis| n_err|
    |:--|:------------------------|:-------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |11 |spectral/stoplight/owasp |owasp:api2:2019-auth-insecure-schemes |kin           |OpenAPI3 |true     |     37|    37|
    |12 |spectral/stoplight/owasp |owasp:api2:2019-auth-insecure-schemes |postman_apis  |OpenAPI3 |true     |      3|     3|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 398 (5.4%) / 7,433<br/>invalid: 113 (8.7%) / 1,300<br/>all: 511 (5.9%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 1,296<br/>invalid: 2 (0.5%) / 381<br/>all: 2 (0.1%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 398 (6.5%) / 6,137<br/>invalid: 111 (12.1%) / 919<br/>all: 509 (7.2%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 23 (7.8%) / 295<br/>invalid: 10 (9.3%) / 108<br/>all: 33 (8.2%) / 403</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 148<br/>invalid: 0 (0%) / 77<br/>all: 0 (0%) / 225</small></td>
    <td style="text-align:center"><small>valid: 23 (15.6%) / 147<br/>invalid: 10 (32.3%) / 31<br/>all: 33 (18.5%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 2,186 (9.4%) / 23,345<br/>invalid: 638 (10%) / 6,375<br/>all: 2,824 (9.5%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 7,851<br/>invalid: 3 (0.1%) / 2,502<br/>all: 3 (0%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 2,186 (14.1%) / 15,494<br/>invalid: 635 (16.4%) / 3,873<br/>all: 2,821 (14.6%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                               |collection_id |class    |is_valid | n_apis| n_err|
    |:--|:------------------------|:----------------------------------|:-------------|:--------|:--------|------:|-----:|
    |13 |spectral/stoplight/owasp |owasp:api2:2019-jwt-best-practices |kin           |OpenAPI3 |true     |   1765|  1951|
    |14 |spectral/stoplight/owasp |owasp:api2:2019-jwt-best-practices |kin           |OpenAPI3 |false    |    514|   587|
    |15 |spectral/stoplight/owasp |owasp:api2:2019-jwt-best-practices |postman_apis  |OpenAPI3 |true     |    398|   426|
    |16 |spectral/stoplight/owasp |owasp:api2:2019-jwt-best-practices |postman_apis  |OpenAPI3 |false    |    111|   127|
    |17 |spectral/stoplight/owasp |owasp:api2:2019-jwt-best-practices |kinweb        |OpenAPI3 |true     |     23|    24|
    |18 |spectral/stoplight/owasp |owasp:api2:2019-jwt-best-practices |kinweb        |OpenAPI3 |false    |     10|    12|
    |19 |spectral/stoplight/owasp |owasp:api2:2019-jwt-best-practices |postman_apis  |OpenAPI2 |false    |      2|    10|
    |20 |spectral/stoplight/owasp |owasp:api2:2019-jwt-best-practices |kin           |OpenAPI2 |false    |      1|     1|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 2,129 (28.6%) / 7,433<br/>invalid: 586 (45.1%) / 1,300<br/>all: 2,715 (31.1%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 681 (52.5%) / 1,296<br/>invalid: 171 (44.9%) / 381<br/>all: 852 (50.8%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 1,448 (23.6%) / 6,137<br/>invalid: 415 (45.2%) / 919<br/>all: 1,863 (26.4%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 128 (43.4%) / 295<br/>invalid: 50 (46.3%) / 108<br/>all: 178 (44.2%) / 403</small></td>
    <td style="text-align:center"><small>valid: 80 (54.1%) / 148<br/>invalid: 42 (54.5%) / 77<br/>all: 122 (54.2%) / 225</small></td>
    <td style="text-align:center"><small>valid: 48 (32.7%) / 147<br/>invalid: 8 (25.8%) / 31<br/>all: 56 (31.5%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 10,106 (43.3%) / 23,345<br/>invalid: 3,224 (50.6%) / 6,375<br/>all: 13,330 (44.9%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 4,110 (52.4%) / 7,851<br/>invalid: 1,265 (50.6%) / 2,502<br/>all: 5,375 (51.9%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 5,996 (38.7%) / 15,494<br/>invalid: 1,959 (50.6%) / 3,873<br/>all: 7,955 (41.1%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                                     |collection_id |class    |is_valid | n_apis| n_err|
    |:--|:------------------------|:----------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |55 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |kin           |OpenAPI3 |true     |   4500| 27721|
    |56 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |kin           |OpenAPI2 |true     |   3349| 24710|
    |57 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |kin           |OpenAPI3 |false    |   1536| 11698|
    |58 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |postman_apis  |OpenAPI3 |true     |   1448| 19065|
    |59 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |kin           |OpenAPI2 |false    |   1052|  9463|
    |60 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |postman_apis  |OpenAPI2 |true     |    681| 14347|
    |61 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |postman_apis  |OpenAPI3 |false    |    415|  7667|
    |62 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |postman_apis  |OpenAPI2 |false    |    171|  9500|
    |63 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |kinweb        |OpenAPI2 |true     |     80|   670|
    |64 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |kinweb        |OpenAPI3 |true     |     48|   379|
    |65 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |kinweb        |OpenAPI2 |false    |     42|   579|
    |66 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe |kinweb        |OpenAPI3 |false    |      8|    70|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 2,141 (28.8%) / 7,433<br/>invalid: 598 (46%) / 1,300<br/>all: 2,739 (31.4%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 682 (52.6%) / 1,296<br/>invalid: 171 (44.9%) / 381<br/>all: 853 (50.9%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 1,459 (23.8%) / 6,137<br/>invalid: 427 (46.5%) / 919<br/>all: 1,886 (26.7%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 128 (43.4%) / 295<br/>invalid: 51 (47.2%) / 108<br/>all: 179 (44.4%) / 403</small></td>
    <td style="text-align:center"><small>valid: 80 (54.1%) / 148<br/>invalid: 42 (54.5%) / 77<br/>all: 122 (54.2%) / 225</small></td>
    <td style="text-align:center"><small>valid: 48 (32.7%) / 147<br/>invalid: 9 (29%) / 31<br/>all: 57 (32%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 10,166 (43.5%) / 23,345<br/>invalid: 3,301 (51.8%) / 6,375<br/>all: 13,467 (45.3%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 4,113 (52.4%) / 7,851<br/>invalid: 1,267 (50.6%) / 2,502<br/>all: 5,380 (52%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 6,053 (39.1%) / 15,494<br/>invalid: 2,034 (52.5%) / 3,873<br/>all: 8,087 (41.8%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                                            |collection_id |class    |is_valid | n_apis| n_err|
    |:--|:------------------------|:-----------------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |67 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |kin           |OpenAPI3 |true     |   4546| 27919|
    |68 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |kin           |OpenAPI2 |true     |   3351| 24715|
    |69 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |kin           |OpenAPI3 |false    |   1598| 12176|
    |70 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |postman_apis  |OpenAPI3 |true     |   1459| 19443|
    |71 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |kin           |OpenAPI2 |false    |   1054|  9596|
    |72 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |postman_apis  |OpenAPI2 |true     |    682| 14350|
    |73 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |postman_apis  |OpenAPI3 |false    |    427|  8152|
    |74 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |postman_apis  |OpenAPI2 |false    |    171|  9504|
    |75 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |kinweb        |OpenAPI2 |true     |     80|   670|
    |76 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |kinweb        |OpenAPI3 |true     |     48|   379|
    |77 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |kinweb        |OpenAPI2 |false    |     42|   579|
    |78 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-unsafe-strict |kinweb        |OpenAPI3 |false    |      9|   107|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 3,211 (43.2%) / 7,433<br/>invalid: 662 (50.9%) / 1,300<br/>all: 3,873 (44.3%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 786 (60.6%) / 1,296<br/>invalid: 184 (48.3%) / 381<br/>all: 970 (57.8%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 2,425 (39.5%) / 6,137<br/>invalid: 478 (52%) / 919<br/>all: 2,903 (41.1%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 181 (61.4%) / 295<br/>invalid: 57 (52.8%) / 108<br/>all: 238 (59.1%) / 403</small></td>
    <td style="text-align:center"><small>valid: 103 (69.6%) / 148<br/>invalid: 44 (57.1%) / 77<br/>all: 147 (65.3%) / 225</small></td>
    <td style="text-align:center"><small>valid: 78 (53.1%) / 147<br/>invalid: 13 (41.9%) / 31<br/>all: 91 (51.1%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 12,681 (54.3%) / 23,345<br/>invalid: 3,552 (55.7%) / 6,375<br/>all: 16,233 (54.6%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 4,901 (62.4%) / 7,851<br/>invalid: 1,417 (56.6%) / 2,502<br/>all: 6,318 (61%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 7,780 (50.2%) / 15,494<br/>invalid: 2,135 (55.1%) / 3,873<br/>all: 9,915 (51.2%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                                   |collection_id |class    |is_valid | n_apis| n_err|
    |:--|:------------------------|:--------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |43 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |kin           |OpenAPI3 |true     |   5277| 34046|
    |44 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |kin           |OpenAPI2 |true     |   4012| 27567|
    |45 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |postman_apis  |OpenAPI3 |true     |   2425| 20040|
    |46 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |kin           |OpenAPI3 |false    |   1644| 13504|
    |47 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |kin           |OpenAPI2 |false    |   1189| 10406|
    |48 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |postman_apis  |OpenAPI2 |true     |    786| 11766|
    |49 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |postman_apis  |OpenAPI3 |false    |    478| 10910|
    |50 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |postman_apis  |OpenAPI2 |false    |    184|  8606|
    |51 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |kinweb        |OpenAPI2 |true     |    103|  1102|
    |52 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |kinweb        |OpenAPI3 |true     |     78|   559|
    |53 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |kinweb        |OpenAPI2 |false    |     44|  1043|
    |54 |spectral/stoplight/owasp |owasp:api2:2019-protection-global-safe |kinweb        |OpenAPI3 |false    |     13|    95|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 6,459 (86.9%) / 7,433<br/>invalid: 749 (57.6%) / 1,300<br/>all: 7,208 (82.5%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 887 (68.4%) / 1,296<br/>invalid: 344 (90.3%) / 381<br/>all: 1,231 (73.4%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 5,572 (90.8%) / 6,137<br/>invalid: 405 (44.1%) / 919<br/>all: 5,977 (84.7%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 225 (76.3%) / 295<br/>invalid: 90 (83.3%) / 108<br/>all: 315 (78.2%) / 403</small></td>
    <td style="text-align:center"><small>valid: 121 (81.8%) / 148<br/>invalid: 64 (83.1%) / 77<br/>all: 185 (82.2%) / 225</small></td>
    <td style="text-align:center"><small>valid: 104 (70.7%) / 147<br/>invalid: 26 (83.9%) / 31<br/>all: 130 (73%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 19,103 (81.8%) / 23,345<br/>invalid: 4,086 (64.1%) / 6,375<br/>all: 23,189 (78%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 6,314 (80.4%) / 7,851<br/>invalid: 1,769 (70.7%) / 2,502<br/>all: 8,083 (78.1%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 12,789 (82.5%) / 15,494<br/>invalid: 2,317 (59.8%) / 3,873<br/>all: 15,106 (78%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                                    |collection_id |class    |is_valid | n_apis| n_err|
    |:---|:------------------------|:---------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |103 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |kin           |OpenAPI3 |true     |   7113| 83459|
    |104 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |postman_apis  |OpenAPI3 |true     |   5572| 68279|
    |105 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |kin           |OpenAPI2 |true     |   5306| 58133|
    |106 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |kin           |OpenAPI3 |false    |   1886| 28001|
    |107 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |kin           |OpenAPI2 |false    |   1361| 24458|
    |108 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |postman_apis  |OpenAPI2 |true     |    887| 29497|
    |109 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |postman_apis  |OpenAPI3 |false    |    405| 18904|
    |110 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |postman_apis  |OpenAPI2 |false    |    344| 42698|
    |111 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |kinweb        |OpenAPI2 |true     |    121|  1903|
    |112 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |kinweb        |OpenAPI3 |true     |    104|  1149|
    |113 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |kinweb        |OpenAPI2 |false    |     64|  1937|
    |114 |spectral/stoplight/owasp |owasp:api3:2019-define-error-validation |kinweb        |OpenAPI3 |false    |     26|   485|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 6,948 (93.5%) / 7,433<br/>invalid: 800 (61.5%) / 1,300<br/>all: 7,748 (88.7%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 1,288 (99.4%) / 1,296<br/>invalid: 378 (99.2%) / 381<br/>all: 1,666 (99.3%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 5,660 (92.2%) / 6,137<br/>invalid: 422 (45.9%) / 919<br/>all: 6,082 (86.2%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 263 (89.2%) / 295<br/>invalid: 104 (96.3%) / 108<br/>all: 367 (91.1%) / 403</small></td>
    <td style="text-align:center"><small>valid: 143 (96.6%) / 148<br/>invalid: 75 (97.4%) / 77<br/>all: 218 (96.9%) / 225</small></td>
    <td style="text-align:center"><small>valid: 120 (81.6%) / 147<br/>invalid: 29 (93.5%) / 31<br/>all: 149 (83.7%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 21,419 (91.7%) / 23,345<br/>invalid: 4,617 (72.4%) / 6,375<br/>all: 26,036 (87.6%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 7,629 (97.2%) / 7,851<br/>invalid: 2,055 (82.1%) / 2,502<br/>all: 9,684 (93.5%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 13,790 (89%) / 15,494<br/>invalid: 2,562 (66.2%) / 3,873<br/>all: 16,352 (84.4%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |   |attachment_type          |code                                       |collection_id |class    |is_valid | n_apis|  n_err|
    |:--|:------------------------|:------------------------------------------|:-------------|:--------|:--------|------:|------:|
    |79 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |kin           |OpenAPI3 |true     |   8010| 191737|
    |80 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |kin           |OpenAPI2 |true     |   6198| 151035|
    |81 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |postman_apis  |OpenAPI3 |true     |   5660| 150370|
    |82 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |kin           |OpenAPI3 |false    |   2111|  66809|
    |83 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |kin           |OpenAPI2 |false    |   1602|  55340|
    |84 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |postman_apis  |OpenAPI2 |true     |   1288|  72056|
    |85 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |postman_apis  |OpenAPI3 |false    |    422|  46836|
    |86 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |postman_apis  |OpenAPI2 |false    |    378|  90655|
    |87 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |kinweb        |OpenAPI2 |true     |    143|   4124|
    |88 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |kinweb        |OpenAPI3 |true     |    120|   2533|
    |89 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |kinweb        |OpenAPI2 |false    |     75|   3619|
    |90 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-401 |kinweb        |OpenAPI3 |false    |     29|   1003|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 6,635 (89.3%) / 7,433<br/>invalid: 790 (60.8%) / 1,300<br/>all: 7,425 (85%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 1,288 (99.4%) / 1,296<br/>invalid: 378 (99.2%) / 381<br/>all: 1,666 (99.3%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 5,347 (87.1%) / 6,137<br/>invalid: 412 (44.8%) / 919<br/>all: 5,759 (81.6%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 258 (87.5%) / 295<br/>invalid: 100 (92.6%) / 108<br/>all: 358 (88.8%) / 403</small></td>
    <td style="text-align:center"><small>valid: 143 (96.6%) / 148<br/>invalid: 75 (97.4%) / 77<br/>all: 218 (96.9%) / 225</small></td>
    <td style="text-align:center"><small>valid: 115 (78.2%) / 147<br/>invalid: 25 (80.6%) / 31<br/>all: 140 (78.7%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 20,800 (89.1%) / 23,345<br/>invalid: 4,549 (71.4%) / 6,375<br/>all: 25,349 (85.3%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 7,629 (97.2%) / 7,851<br/>invalid: 2,054 (82.1%) / 2,502<br/>all: 9,683 (93.5%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 13,171 (85%) / 15,494<br/>invalid: 2,495 (64.4%) / 3,873<br/>all: 15,666 (80.9%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                                       |collection_id |class    |is_valid | n_apis|  n_err|
    |:---|:------------------------|:------------------------------------------|:-------------|:--------|:--------|------:|------:|
    |91  |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |kin           |OpenAPI3 |true     |   7709| 199477|
    |92  |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |kin           |OpenAPI2 |true     |   6198| 147544|
    |93  |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |postman_apis  |OpenAPI3 |true     |   5347| 155037|
    |94  |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |kin           |OpenAPI3 |false    |   2058|  67578|
    |95  |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |kin           |OpenAPI2 |false    |   1601|  55773|
    |96  |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |postman_apis  |OpenAPI2 |true     |   1288|  80066|
    |97  |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |postman_apis  |OpenAPI3 |false    |    412|  50160|
    |98  |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |postman_apis  |OpenAPI2 |false    |    378|  95768|
    |99  |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |kinweb        |OpenAPI2 |true     |    143|   4426|
    |100 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |kinweb        |OpenAPI3 |true     |    115|   2809|
    |101 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |kinweb        |OpenAPI2 |false    |     75|   4076|
    |102 |spectral/stoplight/owasp |owasp:api3:2019-define-error-responses-500 |kinweb        |OpenAPI3 |false    |     25|   1193|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 6,084 (81.9%) / 7,433<br/>invalid: 436 (33.5%) / 1,300<br/>all: 6,520 (74.7%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 1,296<br/>invalid: 4 (1%) / 381<br/>all: 4 (0.2%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 6,084 (99.1%) / 6,137<br/>invalid: 432 (47%) / 919<br/>all: 6,516 (92.3%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 146 (49.5%) / 295<br/>invalid: 29 (26.9%) / 108<br/>all: 175 (43.4%) / 403</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 148<br/>invalid: 0 (0%) / 77<br/>all: 0 (0%) / 225</small></td>
    <td style="text-align:center"><small>valid: 146 (99.3%) / 147<br/>invalid: 29 (93.5%) / 31<br/>all: 175 (98.3%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 14,635 (62.7%) / 23,345<br/>invalid: 2,609 (40.9%) / 6,375<br/>all: 17,244 (58%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 7,851<br/>invalid: 11 (0.4%) / 2,502<br/>all: 11 (0.1%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 14,635 (94.5%) / 15,494<br/>invalid: 2,598 (67.1%) / 3,873<br/>all: 17,233 (89%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                       |collection_id |class    |is_valid | n_apis|  n_err|
    |:---|:------------------------|:--------------------------|:-------------|:--------|:--------|------:|------:|
    |155 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit |kin           |OpenAPI3 |true     |   8405| 209307|
    |156 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit |postman_apis  |OpenAPI3 |true     |   6084| 154567|
    |157 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit |kin           |OpenAPI3 |false    |   2137|  79713|
    |158 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit |postman_apis  |OpenAPI3 |false    |    432|  54844|
    |159 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit |kinweb        |OpenAPI3 |true     |    146|   4515|
    |160 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit |kinweb        |OpenAPI3 |false    |     29|   1119|
    |161 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit |kin           |OpenAPI2 |false    |      7|     95|
    |162 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit |postman_apis  |OpenAPI2 |false    |      4|   3340|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 26 (0.3%) / 7,433<br/>invalid: 5 (0.4%) / 1,300<br/>all: 31 (0.4%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 1,296<br/>invalid: 0 (0%) / 381<br/>all: 0 (0%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 26 (0.4%) / 6,137<br/>invalid: 5 (0.5%) / 919<br/>all: 31 (0.4%) / 7,056</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 67 (0.3%) / 23,345<br/>invalid: 10 (0.2%) / 6,375<br/>all: 77 (0.3%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 7,851<br/>invalid: 0 (0%) / 2,502<br/>all: 0 (0%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 67 (0.4%) / 15,494<br/>invalid: 10 (0.3%) / 3,873<br/>all: 77 (0.4%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                                   |collection_id |class    |is_valid | n_apis| n_err|
    |:---|:------------------------|:--------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |175 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-retry-after |kin           |OpenAPI3 |true     |     41|   150|
    |176 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-retry-after |postman_apis  |OpenAPI3 |true     |     26|    96|
    |177 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-retry-after |postman_apis  |OpenAPI3 |false    |      5|   139|
    |178 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-retry-after |kin           |OpenAPI3 |false    |      5|    58|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 7,084 (95.3%) / 7,433<br/>invalid: 823 (63.3%) / 1,300<br/>all: 7,907 (90.5%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 1,288 (99.4%) / 1,296<br/>invalid: 378 (99.2%) / 381<br/>all: 1,666 (99.3%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 5,796 (94.4%) / 6,137<br/>invalid: 445 (48.4%) / 919<br/>all: 6,241 (88.4%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 267 (90.5%) / 295<br/>invalid: 104 (96.3%) / 108<br/>all: 371 (92.1%) / 403</small></td>
    <td style="text-align:center"><small>valid: 143 (96.6%) / 148<br/>invalid: 75 (97.4%) / 77<br/>all: 218 (96.9%) / 225</small></td>
    <td style="text-align:center"><small>valid: 124 (84.4%) / 147<br/>invalid: 29 (93.5%) / 31<br/>all: 153 (86%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 21,861 (93.6%) / 23,345<br/>invalid: 4,683 (73.5%) / 6,375<br/>all: 26,544 (89.3%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 7,629 (97.2%) / 7,851<br/>invalid: 2,055 (82.1%) / 2,502<br/>all: 9,684 (93.5%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 14,232 (91.9%) / 15,494<br/>invalid: 2,628 (67.9%) / 3,873<br/>all: 16,860 (87.1%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                                     |collection_id |class    |is_valid | n_apis|  n_err|
    |:---|:------------------------|:----------------------------------------|:-------------|:--------|:--------|------:|------:|
    |163 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |kin           |OpenAPI3 |true     |   8312| 229245|
    |164 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |kin           |OpenAPI2 |true     |   6198| 163014|
    |165 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |postman_apis  |OpenAPI3 |true     |   5796| 172355|
    |166 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |kin           |OpenAPI3 |false    |   2154|  78998|
    |167 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |kin           |OpenAPI2 |false    |   1602|  60901|
    |168 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |postman_apis  |OpenAPI2 |true     |   1288|  87632|
    |169 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |postman_apis  |OpenAPI3 |false    |    445|  55469|
    |170 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |postman_apis  |OpenAPI2 |false    |    378| 104145|
    |171 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |kinweb        |OpenAPI2 |true     |    143|   4751|
    |172 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |kinweb        |OpenAPI3 |true     |    124|   3603|
    |173 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |kinweb        |OpenAPI2 |false    |     75|   4260|
    |174 |spectral/stoplight/owasp |owasp:api4:2019-rate-limit-responses-429 |kinweb        |OpenAPI3 |false    |     29|   1296|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 3,212 (43.2%) / 7,433<br/>invalid: 708 (54.5%) / 1,300<br/>all: 3,920 (44.9%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 1,103 (85.1%) / 1,296<br/>invalid: 309 (81.1%) / 381<br/>all: 1,412 (84.2%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 2,109 (34.4%) / 6,137<br/>invalid: 399 (43.4%) / 919<br/>all: 2,508 (35.5%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 251 (85.1%) / 295<br/>invalid: 89 (82.4%) / 108<br/>all: 340 (84.4%) / 403</small></td>
    <td style="text-align:center"><small>valid: 125 (84.5%) / 148<br/>invalid: 68 (88.3%) / 77<br/>all: 193 (85.8%) / 225</small></td>
    <td style="text-align:center"><small>valid: 126 (85.7%) / 147<br/>invalid: 21 (67.7%) / 31<br/>all: 147 (82.6%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 14,966 (64.1%) / 23,345<br/>invalid: 3,508 (55%) / 6,375<br/>all: 18,474 (62.2%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 6,075 (77.4%) / 7,851<br/>invalid: 1,459 (58.3%) / 2,502<br/>all: 7,534 (72.8%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 8,891 (57.4%) / 15,494<br/>invalid: 2,049 (52.9%) / 3,873<br/>all: 10,940 (56.5%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                        |collection_id |class    |is_valid | n_apis|  n_err|
    |:---|:------------------------|:---------------------------|:-------------|:--------|:--------|------:|------:|
    |115 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |kin           |OpenAPI3 |true     |   6656| 105501|
    |116 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |kin           |OpenAPI2 |true     |   4847|  66046|
    |117 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |postman_apis  |OpenAPI3 |true     |   2109|  82901|
    |118 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |kin           |OpenAPI3 |false    |   1629|  28484|
    |119 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |postman_apis  |OpenAPI2 |true     |   1103|  33198|
    |120 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |kin           |OpenAPI2 |false    |   1082|  16347|
    |121 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |postman_apis  |OpenAPI3 |false    |    399|  31093|
    |122 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |postman_apis  |OpenAPI2 |false    |    309|  36441|
    |123 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |kinweb        |OpenAPI3 |true     |    126|   2341|
    |124 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |kinweb        |OpenAPI2 |true     |    125|   2134|
    |125 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |kinweb        |OpenAPI2 |false    |     68|   1498|
    |126 |spectral/stoplight/owasp |owasp:api4:2019-array-limit |kinweb        |OpenAPI3 |false    |     21|    361|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 7,374 (99.2%) / 7,433<br/>invalid: 997 (76.7%) / 1,300<br/>all: 8,371 (95.9%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 1,286 (99.2%) / 1,296<br/>invalid: 373 (97.9%) / 381<br/>all: 1,659 (98.9%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 6,088 (99.2%) / 6,137<br/>invalid: 624 (67.9%) / 919<br/>all: 6,712 (95.1%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 286 (96.9%) / 295<br/>invalid: 103 (95.4%) / 108<br/>all: 389 (96.5%) / 403</small></td>
    <td style="text-align:center"><small>valid: 143 (96.6%) / 148<br/>invalid: 75 (97.4%) / 77<br/>all: 218 (96.9%) / 225</small></td>
    <td style="text-align:center"><small>valid: 143 (97.3%) / 147<br/>invalid: 28 (90.3%) / 31<br/>all: 171 (96.1%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 22,186 (95%) / 23,345<br/>invalid: 4,828 (75.7%) / 6,375<br/>all: 27,014 (90.9%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 7,559 (96.3%) / 7,851<br/>invalid: 1,992 (79.6%) / 2,502<br/>all: 9,551 (92.3%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 14,627 (94.4%) / 15,494<br/>invalid: 2,836 (73.2%) / 3,873<br/>all: 17,463 (90.2%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                         |collection_id |class    |is_valid | n_apis|  n_err|
    |:---|:------------------------|:----------------------------|:-------------|:--------|:--------|------:|------:|
    |179 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |kin           |OpenAPI3 |true     |   8396| 587428|
    |180 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |kin           |OpenAPI2 |true     |   6130| 415022|
    |181 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |postman_apis  |OpenAPI3 |true     |   6088| 806221|
    |182 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |kin           |OpenAPI3 |false    |   2184| 158821|
    |183 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |kin           |OpenAPI2 |false    |   1544| 113699|
    |184 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |postman_apis  |OpenAPI2 |true     |   1286| 225658|
    |185 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |postman_apis  |OpenAPI3 |false    |    624| 226443|
    |186 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |postman_apis  |OpenAPI2 |false    |    373| 317056|
    |187 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |kinweb        |OpenAPI2 |true     |    143|  12679|
    |188 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |kinweb        |OpenAPI3 |true     |    143|  10931|
    |189 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |kinweb        |OpenAPI2 |false    |     75|   9093|
    |190 |spectral/stoplight/owasp |owasp:api4:2019-string-limit |kinweb        |OpenAPI3 |false    |     28|   2021|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 7,358 (99%) / 7,433<br/>invalid: 989 (76.1%) / 1,300<br/>all: 8,347 (95.6%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 1,283 (99%) / 1,296<br/>invalid: 370 (97.1%) / 381<br/>all: 1,653 (98.6%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 6,075 (99%) / 6,137<br/>invalid: 619 (67.4%) / 919<br/>all: 6,694 (94.9%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 286 (96.9%) / 295<br/>invalid: 103 (95.4%) / 108<br/>all: 389 (96.5%) / 403</small></td>
    <td style="text-align:center"><small>valid: 143 (96.6%) / 148<br/>invalid: 75 (97.4%) / 77<br/>all: 218 (96.9%) / 225</small></td>
    <td style="text-align:center"><small>valid: 143 (97.3%) / 147<br/>invalid: 28 (90.3%) / 31<br/>all: 171 (96.1%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 22,053 (94.5%) / 23,345<br/>invalid: 4,748 (74.5%) / 6,375<br/>all: 26,801 (90.2%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 7,494 (95.5%) / 7,851<br/>invalid: 1,953 (78.1%) / 2,502<br/>all: 9,447 (91.2%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 14,559 (94%) / 15,494<br/>invalid: 2,795 (72.2%) / 3,873<br/>all: 17,354 (89.6%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                              |collection_id |class    |is_valid | n_apis|  n_err|
    |:---|:------------------------|:---------------------------------|:-------------|:--------|:--------|------:|------:|
    |191 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |kin           |OpenAPI3 |true     |   8341| 547737|
    |192 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |postman_apis  |OpenAPI3 |true     |   6075| 683251|
    |193 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |kin           |OpenAPI2 |true     |   6068| 394504|
    |194 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |kin           |OpenAPI3 |false    |   2148| 147575|
    |195 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |kin           |OpenAPI2 |false    |   1508| 107370|
    |196 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |postman_apis  |OpenAPI2 |true     |   1283| 215904|
    |197 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |postman_apis  |OpenAPI3 |false    |    619| 220849|
    |198 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |postman_apis  |OpenAPI2 |false    |    370| 288096|
    |199 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |kinweb        |OpenAPI2 |true     |    143|  11597|
    |200 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |kinweb        |OpenAPI3 |true     |    143|   9843|
    |201 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |kinweb        |OpenAPI2 |false    |     75|   8431|
    |202 |spectral/stoplight/owasp |owasp:api4:2019-string-restricted |kinweb        |OpenAPI3 |false    |     28|   1831|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 24 (0.3%) / 7,433<br/>invalid: 81 (6.2%) / 1,300<br/>all: 105 (1.2%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 1,296<br/>invalid: 0 (0%) / 381<br/>all: 0 (0%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 24 (0.4%) / 6,137<br/>invalid: 81 (8.8%) / 919<br/>all: 105 (1.5%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kin</td>
    <td style="text-align:center"><small>valid: 70 (0.4%) / 15,617<br/>invalid: 25 (0.5%) / 4,967<br/>all: 95 (0.5%) / 20,584</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 6,407<br/>invalid: 0 (0%) / 2,044<br/>all: 0 (0%) / 8,451</small></td>
    <td style="text-align:center"><small>valid: 70 (0.8%) / 9,210<br/>invalid: 25 (0.9%) / 2,923<br/>all: 95 (0.8%) / 12,133</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 94 (0.4%) / 23,345<br/>invalid: 106 (1.7%) / 6,375<br/>all: 200 (0.7%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 7,851<br/>invalid: 0 (0%) / 2,502<br/>all: 0 (0%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 94 (0.6%) / 15,494<br/>invalid: 106 (2.7%) / 3,873<br/>all: 200 (1%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                          |collection_id |class    |is_valid | n_apis| n_err|
    |:---|:------------------------|:-----------------------------|:-------------|:--------|:--------|------:|-----:|
    |139 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit |postman_apis  |OpenAPI3 |false    |     81|   985|
    |140 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit |kin           |OpenAPI3 |true     |     70|  1389|
    |141 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit |kin           |OpenAPI3 |false    |     25|   329|
    |142 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit |postman_apis  |OpenAPI3 |true     |     24|  2255|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 6,058 (81.5%) / 7,433<br/>invalid: 648 (49.8%) / 1,300<br/>all: 6,706 (76.8%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 1,028 (79.3%) / 1,296<br/>invalid: 277 (72.7%) / 381<br/>all: 1,305 (77.8%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 5,030 (82%) / 6,137<br/>invalid: 371 (40.4%) / 919<br/>all: 5,401 (76.5%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 251 (85.1%) / 295<br/>invalid: 90 (83.3%) / 108<br/>all: 341 (84.6%) / 403</small></td>
    <td style="text-align:center"><small>valid: 123 (83.1%) / 148<br/>invalid: 69 (89.6%) / 77<br/>all: 192 (85.3%) / 225</small></td>
    <td style="text-align:center"><small>valid: 128 (87.1%) / 147<br/>invalid: 21 (67.7%) / 31<br/>all: 149 (83.7%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 16,345 (70%) / 23,345<br/>invalid: 3,250 (51%) / 6,375<br/>all: 19,595 (65.9%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 5,509 (70.2%) / 7,851<br/>invalid: 1,471 (58.8%) / 2,502<br/>all: 6,980 (67.4%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 10,836 (69.9%) / 15,494<br/>invalid: 1,779 (45.9%) / 3,873<br/>all: 12,615 (65.1%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                                 |collection_id |class    |is_valid | n_apis|  n_err|
    |:---|:------------------------|:------------------------------------|:-------------|:--------|:--------|------:|------:|
    |143 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |kin           |OpenAPI3 |true     |   5678| 112269|
    |144 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |postman_apis  |OpenAPI3 |true     |   5030| 154508|
    |145 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |kin           |OpenAPI2 |true     |   4358|  77985|
    |146 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |kin           |OpenAPI3 |false    |   1387|  33078|
    |147 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |kin           |OpenAPI2 |false    |   1125|  30906|
    |148 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |postman_apis  |OpenAPI2 |true     |   1028|  59371|
    |149 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |postman_apis  |OpenAPI3 |false    |    371|  43938|
    |150 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |postman_apis  |OpenAPI2 |false    |    277|  63324|
    |151 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |kinweb        |OpenAPI3 |true     |    128|   2492|
    |152 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |kinweb        |OpenAPI2 |true     |    123|   2650|
    |153 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |kinweb        |OpenAPI2 |false    |     69|   1917|
    |154 |spectral/stoplight/owasp |owasp:api4:2019-integer-limit-legacy |kinweb        |OpenAPI3 |false    |     21|    472|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 1,740 (23.4%) / 7,433<br/>invalid: 427 (32.8%) / 1,300<br/>all: 2,167 (24.8%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 529 (40.8%) / 1,296<br/>invalid: 132 (34.6%) / 381<br/>all: 661 (39.4%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 1,211 (19.7%) / 6,137<br/>invalid: 295 (32.1%) / 919<br/>all: 1,506 (21.3%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 90 (30.5%) / 295<br/>invalid: 46 (42.6%) / 108<br/>all: 136 (33.7%) / 403</small></td>
    <td style="text-align:center"><small>valid: 35 (23.6%) / 148<br/>invalid: 30 (39%) / 77<br/>all: 65 (28.9%) / 225</small></td>
    <td style="text-align:center"><small>valid: 55 (37.4%) / 147<br/>invalid: 16 (51.6%) / 31<br/>all: 71 (39.9%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 8,300 (35.6%) / 23,345<br/>invalid: 2,287 (35.9%) / 6,375<br/>all: 10,587 (35.6%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 3,077 (39.2%) / 7,851<br/>invalid: 892 (35.7%) / 2,502<br/>all: 3,969 (38.3%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 5,223 (33.7%) / 15,494<br/>invalid: 1,395 (36%) / 3,873<br/>all: 6,618 (34.2%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                           |collection_id |class    |is_valid | n_apis| n_err|
    |:---|:------------------------|:------------------------------|:-------------|:--------|:--------|------:|-----:|
    |127 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |kin           |OpenAPI3 |true     |   3957| 63897|
    |128 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |kin           |OpenAPI2 |true     |   2513| 33900|
    |129 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |postman_apis  |OpenAPI3 |true     |   1211| 78153|
    |130 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |kin           |OpenAPI3 |false    |   1084| 22682|
    |131 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |kin           |OpenAPI2 |false    |    730| 12607|
    |132 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |postman_apis  |OpenAPI2 |true     |    529| 17709|
    |133 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |postman_apis  |OpenAPI3 |false    |    295| 31940|
    |134 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |postman_apis  |OpenAPI2 |false    |    132| 26621|
    |135 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |kinweb        |OpenAPI3 |true     |     55|   971|
    |136 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |kinweb        |OpenAPI2 |true     |     35|   403|
    |137 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |kinweb        |OpenAPI2 |false    |     30|   690|
    |138 |spectral/stoplight/owasp |owasp:api4:2019-integer-format |kinweb        |OpenAPI3 |false    |     16|   395|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 432 (5.8%) / 7,433<br/>invalid: 67 (5.2%) / 1,300<br/>all: 499 (5.7%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 1,296<br/>invalid: 3 (0.8%) / 381<br/>all: 3 (0.2%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 432 (7%) / 6,137<br/>invalid: 64 (7%) / 919<br/>all: 496 (7%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 47 (15.9%) / 295<br/>invalid: 4 (3.7%) / 108<br/>all: 51 (12.7%) / 403</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 148<br/>invalid: 0 (0%) / 77<br/>all: 0 (0%) / 225</small></td>
    <td style="text-align:center"><small>valid: 47 (32%) / 147<br/>invalid: 4 (12.9%) / 31<br/>all: 51 (28.7%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 1,919 (8.2%) / 23,345<br/>invalid: 326 (5.1%) / 6,375<br/>all: 2,245 (7.6%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 7,851<br/>invalid: 4 (0.2%) / 2,502<br/>all: 4 (0%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 1,919 (12.4%) / 15,494<br/>invalid: 322 (8.3%) / 3,873<br/>all: 2,241 (11.6%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                                    |collection_id |class    |is_valid | n_apis| n_err|
    |:---|:------------------------|:---------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |211 |spectral/stoplight/owasp |owasp:api6:2019-no-additionalProperties |kin           |OpenAPI3 |true     |   1440|  7075|
    |212 |spectral/stoplight/owasp |owasp:api6:2019-no-additionalProperties |postman_apis  |OpenAPI3 |true     |    432|  5822|
    |213 |spectral/stoplight/owasp |owasp:api6:2019-no-additionalProperties |kin           |OpenAPI3 |false    |    254|  2389|
    |214 |spectral/stoplight/owasp |owasp:api6:2019-no-additionalProperties |postman_apis  |OpenAPI3 |false    |     64|   972|
    |215 |spectral/stoplight/owasp |owasp:api6:2019-no-additionalProperties |kinweb        |OpenAPI3 |true     |     47|   153|
    |216 |spectral/stoplight/owasp |owasp:api6:2019-no-additionalProperties |kinweb        |OpenAPI3 |false    |      4|     5|
    |217 |spectral/stoplight/owasp |owasp:api6:2019-no-additionalProperties |postman_apis  |OpenAPI2 |false    |      3|     5|
    |218 |spectral/stoplight/owasp |owasp:api6:2019-no-additionalProperties |kin           |OpenAPI2 |false    |      1|     2|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 402 (5.4%) / 7,433<br/>invalid: 63 (4.8%) / 1,300<br/>all: 465 (5.3%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 1,296<br/>invalid: 3 (0.8%) / 381<br/>all: 3 (0.2%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 402 (6.6%) / 6,137<br/>invalid: 60 (6.5%) / 919<br/>all: 462 (6.5%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 44 (14.9%) / 295<br/>invalid: 3 (2.8%) / 108<br/>all: 47 (11.7%) / 403</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 148<br/>invalid: 0 (0%) / 77<br/>all: 0 (0%) / 225</small></td>
    <td style="text-align:center"><small>valid: 44 (29.9%) / 147<br/>invalid: 3 (9.7%) / 31<br/>all: 47 (26.4%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 1,716 (7.4%) / 23,345<br/>invalid: 299 (4.7%) / 6,375<br/>all: 2,015 (6.8%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 7,851<br/>invalid: 4 (0.2%) / 2,502<br/>all: 4 (0%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 1,716 (11.1%) / 15,494<br/>invalid: 295 (7.6%) / 3,873<br/>all: 2,011 (10.4%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                                             |collection_id |class    |is_valid | n_apis| n_err|
    |:---|:------------------------|:------------------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |203 |spectral/stoplight/owasp |owasp:api6:2019-constrained-additionalProperties |kin           |OpenAPI3 |true     |   1270|  6541|
    |204 |spectral/stoplight/owasp |owasp:api6:2019-constrained-additionalProperties |postman_apis  |OpenAPI3 |true     |    402|  3893|
    |205 |spectral/stoplight/owasp |owasp:api6:2019-constrained-additionalProperties |kin           |OpenAPI3 |false    |    232|  2203|
    |206 |spectral/stoplight/owasp |owasp:api6:2019-constrained-additionalProperties |postman_apis  |OpenAPI3 |false    |     60|   837|
    |207 |spectral/stoplight/owasp |owasp:api6:2019-constrained-additionalProperties |kinweb        |OpenAPI3 |true     |     44|   152|
    |208 |spectral/stoplight/owasp |owasp:api6:2019-constrained-additionalProperties |kinweb        |OpenAPI3 |false    |      3|     3|
    |209 |spectral/stoplight/owasp |owasp:api6:2019-constrained-additionalProperties |postman_apis  |OpenAPI2 |false    |      3|     5|
    |210 |spectral/stoplight/owasp |owasp:api6:2019-constrained-additionalProperties |kin           |OpenAPI2 |false    |      1|     4|
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
    <td>postman_apis</td>
    <td style="text-align:center"><small>valid: 344 (4.6%) / 7,433<br/>invalid: 113 (8.7%) / 1,300<br/>all: 457 (5.2%) / 8,733</small></td>
    <td style="text-align:center"><small>valid: 344 (26.5%) / 1,296<br/>invalid: 113 (29.7%) / 381<br/>all: 457 (27.3%) / 1,677</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 6,137<br/>invalid: 0 (0%) / 919<br/>all: 0 (0%) / 7,056</small></td>
    </tr>
    <tr>
    <td>kinweb</td>
    <td style="text-align:center"><small>valid: 33 (11.2%) / 295<br/>invalid: 23 (21.3%) / 108<br/>all: 56 (13.9%) / 403</small></td>
    <td style="text-align:center"><small>valid: 33 (22.3%) / 148<br/>invalid: 23 (29.9%) / 77<br/>all: 56 (24.9%) / 225</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 147<br/>invalid: 0 (0%) / 31<br/>all: 0 (0%) / 178</small></td>
    </tr>
    <tr>
    <td><i>All Collections</i></td>
    <td style="text-align:center"><small>valid: 2,943 (12.6%) / 23,345<br/>invalid: 883 (13.9%) / 6,375<br/>all: 3,826 (12.9%) / 29,720</small></td>
    <td style="text-align:center"><small>valid: 2,943 (37.5%) / 7,851<br/>invalid: 883 (35.3%) / 2,502<br/>all: 3,826 (37%) / 10,353</small></td>
    <td style="text-align:center"><small>valid: 0 (0%) / 15,494<br/>invalid: 0 (0%) / 3,873<br/>all: 0 (0%) / 19,367</small></td>
    </tr>
    </table>

    <details style="margin-bottom:20px;">
    <summary>Data Table</summary>

    |    |attachment_type          |code                                      |collection_id |class    |is_valid | n_apis| n_err|
    |:---|:------------------------|:-----------------------------------------|:-------------|:--------|:--------|------:|-----:|
    |219 |spectral/stoplight/owasp |owasp:api7:2019-security-hosts-https-oas2 |kin           |OpenAPI2 |true     |   2566|  2566|
    |220 |spectral/stoplight/owasp |owasp:api7:2019-security-hosts-https-oas2 |kin           |OpenAPI2 |false    |    747|   747|
    |221 |spectral/stoplight/owasp |owasp:api7:2019-security-hosts-https-oas2 |postman_apis  |OpenAPI2 |true     |    344|   344|
    |222 |spectral/stoplight/owasp |owasp:api7:2019-security-hosts-https-oas2 |postman_apis  |OpenAPI2 |false    |    113|   113|
    |223 |spectral/stoplight/owasp |owasp:api7:2019-security-hosts-https-oas2 |kinweb        |OpenAPI2 |true     |     33|    33|
    |224 |spectral/stoplight/owasp |owasp:api7:2019-security-hosts-https-oas2 |kinweb        |OpenAPI2 |false    |     23|    23|
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
postman_apis
</td>
<td style="text-align:center">
<small>valid: 3,350 (45.1%) / 7,433<br/>invalid: 571 (43.9%) /
1,300<br/>all: 3,921 (44.9%) / 8,733</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 1,296<br/>invalid: 0 (0%) / 381<br/>all: 0 (0%) /
1,677</small>
</td>
<td style="text-align:center">
<small>valid: 3,350 (54.6%) / 6,137<br/>invalid: 571 (62.1%) /
919<br/>all: 3,921 (55.6%) / 7,056</small>
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
<small>valid: 7,242 (31%) / 23,345<br/>invalid: 1,485 (23.3%) /
6,375<br/>all: 8,727 (29.4%) / 29,720</small>
</td>
<td style="text-align:center">
<small>valid: 0 (0%) / 7,851<br/>invalid: 3 (0.1%) / 2,502<br/>all: 3
(0%) / 10,353</small>
</td>
<td style="text-align:center">
<small>valid: 7,242 (46.7%) / 15,494<br/>invalid: 1,482 (38.3%) /
3,873<br/>all: 8,724 (45%) / 19,367</small>
</td>
</tr>
</table>
<details style="margin-bottom:20px;">
<summary>
Data Table
</summary>

|     | attachment_type          | code                                      | collection_id | class    | is_valid | n_apis | n_err |
|:----|:-------------------------|:------------------------------------------|:--------------|:---------|:---------|-------:|------:|
| 225 | spectral/stoplight/owasp | owasp:api7:2019-security-hosts-https-oas3 | kin           | OpenAPI3 | true     |   3842 |  4322 |
| 226 | spectral/stoplight/owasp | owasp:api7:2019-security-hosts-https-oas3 | postman_apis  | OpenAPI3 | true     |   3350 |  3425 |
| 227 | spectral/stoplight/owasp | owasp:api7:2019-security-hosts-https-oas3 | kin           | OpenAPI3 | false    |    903 |  1061 |
| 228 | spectral/stoplight/owasp | owasp:api7:2019-security-hosts-https-oas3 | postman_apis  | OpenAPI3 | false    |    571 |   586 |
| 229 | spectral/stoplight/owasp | owasp:api7:2019-security-hosts-https-oas3 | kinweb        | OpenAPI3 | true     |     50 |    56 |
| 230 | spectral/stoplight/owasp | owasp:api7:2019-security-hosts-https-oas3 | kinweb        | OpenAPI3 | false    |      8 |    10 |
| 231 | spectral/stoplight/owasp | owasp:api7:2019-security-hosts-https-oas3 | kin           | OpenAPI2 | false    |      3 |     3 |

</details>
