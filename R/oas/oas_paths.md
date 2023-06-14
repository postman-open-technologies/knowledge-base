OAS Paths Analysis
================
<sup>Last updated: 2023-06-14</sup>

- <a href="#findings" id="toc-findings">Findings</a>
  - <a href="#how-is-the-path-property-used-in-apis"
    id="toc-how-is-the-path-property-used-in-apis">How is the path property
    used in APIs?</a>
  - <a href="#which-properties-are-used-under-paths"
    id="toc-which-properties-are-used-under-paths">Which properties are used
    under paths?</a>
- <a href="#methodology" id="toc-methodology">Methodology</a>

<sup>*DISCLAIMER: the results and findings below are preliminary and
have not been fully validated or peer reviewed. Use with care. Do not
quote or disseminate.*</sup>

<sup>[Back to summary](oas_summary.md) \| [View related
issues](https://github.com/postman-open-technologies/knowledge-base/labels/oas%3Apaths)</sup>

# Findings

## How is the path property used in APIs?

- The average number of path per API is 11.9, ranging from 1 to 1,550.
- Out of the 22,809 APIs with a path, 13,800 (60.5%) have 1-5 paths,
  3,078 (13.5%) have 6-10 paths, 3,005 (13.2%) have 11-20 paths, 1,998
  (8.8%) have 21-50 paths, and 928 (0.04068569%) have over 50 paths.

<img src="oas_paths_files/figure-gfm/oas_paths_buckets_barplot-1.png" width="90%" />

## Which properties are used under paths?

- Out of 388,137 properties under paths, the most commonly used are
  `get` 176,537 (45.5%), `post` 97,239 (25.1%), `put` 32,385 (8.3%),
  `delete` 30,335 (7.8%), and `parameters` 23,158 (6%).
- Beyond standard properties, numerous extensions were found. See table
  below for details.
- No significant variations were observed across specification versions
  (2.x vs 3.x) or collections
- Consult the [operations report](oas_paths_operations.md) for more
  in-depth analysis.q

<details>
<summary>
Table: Counts and percentages of properties under paths
</summary>

| property                               |      n |       pct |
|:---------------------------------------|-------:|----------:|
| get                                    | 176537 | 0.4548317 |
| post                                   |  97239 | 0.2505275 |
| put                                    |  32385 | 0.0834370 |
| delete                                 |  30335 | 0.0781554 |
| parameters                             |  23158 | 0.0596645 |
| patch                                  |   8473 | 0.0218299 |
| x-swagger-router-controller            |   6421 | 0.0165431 |
| \$ref                                  |   4801 | 0.0123693 |
| description                            |   1855 | 0.0047792 |
| servers                                |   1351 | 0.0034807 |
| summary                                |    866 | 0.0022312 |
| options                                |    813 | 0.0020946 |
| x-endpoint                             |    687 | 0.0017700 |
| x-platforms-available                  |    663 | 0.0017082 |
| head                                   |    358 | 0.0009224 |
| x-swagger-pipe                         |    300 | 0.0007729 |
| x-route-enum                           |    291 | 0.0007497 |
| x-twilio                               |    272 | 0.0007008 |
| x-api-version                          |    175 | 0.0004509 |
| x-summary                              |    146 | 0.0003762 |
| x-linode-cli-command                   |    133 | 0.0003427 |
| x-default-output-properties            |    129 | 0.0003324 |
| x-path-type                            |    129 | 0.0003324 |
| x-description                          |     81 | 0.0002087 |
| x-restlet                              |     67 | 0.0001726 |
| x-related-model                        |     45 | 0.0001159 |
| x-gelato-group                         |     39 | 0.0001005 |
| x-vault-unauthenticated                |     36 | 0.0000928 |
| x-amazon-apigateway-any-method         |     35 | 0.0000902 |
| x-vault-sudo                           |     25 | 0.0000644 |
| x-modules                              |     25 | 0.0000644 |
| x-controller                           |     25 | 0.0000644 |
| trace                                  |     16 | 0.0000412 |
| x-ms-notification-content              |     15 | 0.0000386 |
| x-a127-apply                           |     14 | 0.0000361 |
| x-WM-COMPLETE_PATH                     |     14 | 0.0000361 |
| x-amf-description                      |     12 | 0.0000309 |
| x-vault-createSupported                |     11 | 0.0000283 |
| x-snyk-api-version                     |     10 | 0.0000258 |
| x-swagger-section-capabilities         |      9 | 0.0000232 |
| x-eac-ignore                           |      8 | 0.0000206 |
| x-internal                             |      7 | 0.0000180 |
| x-data_classification                  |      7 | 0.0000180 |
| x-volos-apply                          |      7 | 0.0000180 |
| x-external                             |      7 | 0.0000180 |
| x-swagger-section-2fa-bypass-permitted |      7 | 0.0000180 |
| x-zendesk-owner                        |      6 | 0.0000155 |
| x-controller-interface                 |      6 | 0.0000155 |
| x-snyk-api-resource                    |      6 | 0.0000155 |
| x-order                                |      6 | 0.0000155 |
| x-last-modified                        |      6 | 0.0000155 |
| x-swagger-route-controller             |      5 | 0.0000129 |
| x-vendor-method                        |      5 | 0.0000129 |
| x-private                              |      4 | 0.0000103 |
| x-python-connexion-openapi-name        |      4 | 0.0000103 |
| x-handler                              |      4 | 0.0000103 |
| x-kusk                                 |      4 | 0.0000103 |
| x-vertx-event-bus                      |      3 | 0.0000077 |
| x-oba-custom                           |      2 | 0.0000052 |
| x-annotation-counting                  |      2 | 0.0000052 |
| x-exegesis-controller                  |      2 | 0.0000052 |
| x-db-table-name                        |      2 | 0.0000052 |
| x-annotation-experimental              |      2 | 0.0000052 |
| x-amzn-api-sandbox                     |      2 | 0.0000052 |
| x-style-validator-ignored              |      2 | 0.0000052 |
| x-wso2-production-endpoints            |      2 | 0.0000052 |
| x-wso2-sandbox-endpoints               |      2 | 0.0000052 |
| x-annotation-clearanceLevel            |      2 | 0.0000052 |
| x-annotation-meta-data                 |      2 | 0.0000052 |
| x-temp                                 |      1 | 0.0000026 |
| x-comment                              |      1 | 0.0000026 |
| x-oad-type                             |      1 | 0.0000026 |
| x-zally-ignore                         |      1 | 0.0000026 |
| x-a127-authorizations                  |      1 | 0.0000026 |
| x-openapi-router-controller            |      1 | 0.0000026 |
| x-DNB-Name                             |      1 | 0.0000026 |
| x-lambda                               |      1 | 0.0000026 |
| x-wso2-disable-security                |      1 | 0.0000026 |
| x-volos-authorizations                 |      1 | 0.0000026 |
| x-wso2-request-interceptor             |      1 | 0.0000026 |
| x-test                                 |      1 | 0.0000026 |
| x-bank                                 |      1 | 0.0000026 |
| x-route-filters                        |      1 | 0.0000026 |
| x-kong-plugin-key-auth                 |      1 | 0.0000026 |
| x-DNB-ID                               |      1 | 0.0000026 |
| x-swagstar                             |      1 | 0.0000026 |

</details>

# Methodology

Results are based on the content and count of entries in the `/paths`
property in the APIs specifications.
