OAS Paths Analysis
================
<sup>Last updated: 2023-03-12</sup>

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
- Out of the 22,519 APIs with a path, 13,681 (60.8%) have 1-5 paths,
  3,029 (13.5%) have 6-10 paths, 2,937 (13%) have 11-20 paths, 1,955
  (8.7%) have 21-50 paths, and 917 (0.04072117%) have over 50 paths.

<img src="oas_paths_files/figure-gfm/oas_paths_buckets_barplot-1.png" width="90%" />

## Which properties are used under paths?

- Out of 383,645 properties under paths, the most commonly used are
  `get` 174,099 (45.4%), `post` 95,951 (25%), `put` 32,126 (8.4%),
  `delete` 30,079 (7.8%), and `parameters` 23,067 (6%).
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
| get                                    | 174099 | 0.4538023 |
| post                                   |  95951 | 0.2501036 |
| put                                    |  32126 | 0.0837389 |
| delete                                 |  30079 | 0.0784032 |
| parameters                             |  23067 | 0.0601259 |
| patch                                  |   8412 | 0.0219265 |
| x-swagger-router-controller            |   6417 | 0.0167264 |
| \$ref                                  |   4779 | 0.0124568 |
| description                            |   1853 | 0.0048300 |
| servers                                |   1351 | 0.0035215 |
| summary                                |    818 | 0.0021322 |
| options                                |    794 | 0.0020696 |
| x-endpoint                             |    687 | 0.0017907 |
| x-platforms-available                  |    663 | 0.0017282 |
| head                                   |    355 | 0.0009253 |
| x-swagger-pipe                         |    299 | 0.0007794 |
| x-route-enum                           |    291 | 0.0007585 |
| x-twilio                               |    272 | 0.0007090 |
| x-api-version                          |    175 | 0.0004562 |
| x-summary                              |    146 | 0.0003806 |
| x-linode-cli-command                   |    133 | 0.0003467 |
| x-default-output-properties            |    129 | 0.0003362 |
| x-path-type                            |    129 | 0.0003362 |
| x-description                          |     81 | 0.0002111 |
| x-restlet                              |     67 | 0.0001746 |
| x-related-model                        |     45 | 0.0001173 |
| x-gelato-group                         |     39 | 0.0001017 |
| x-vault-unauthenticated                |     36 | 0.0000938 |
| x-amazon-apigateway-any-method         |     35 | 0.0000912 |
| x-vault-sudo                           |     25 | 0.0000652 |
| x-modules                              |     25 | 0.0000652 |
| x-controller                           |     25 | 0.0000652 |
| trace                                  |     16 | 0.0000417 |
| x-ms-notification-content              |     15 | 0.0000391 |
| x-a127-apply                           |     14 | 0.0000365 |
| x-WM-COMPLETE_PATH                     |     14 | 0.0000365 |
| x-amf-description                      |     12 | 0.0000313 |
| x-vault-createSupported                |     11 | 0.0000287 |
| x-snyk-api-version                     |     10 | 0.0000261 |
| x-swagger-section-capabilities         |      9 | 0.0000235 |
| x-eac-ignore                           |      8 | 0.0000209 |
| x-internal                             |      7 | 0.0000182 |
| x-data_classification                  |      7 | 0.0000182 |
| x-volos-apply                          |      7 | 0.0000182 |
| x-external                             |      7 | 0.0000182 |
| x-swagger-section-2fa-bypass-permitted |      7 | 0.0000182 |
| x-zendesk-owner                        |      6 | 0.0000156 |
| x-controller-interface                 |      6 | 0.0000156 |
| x-snyk-api-resource                    |      6 | 0.0000156 |
| x-order                                |      6 | 0.0000156 |
| x-last-modified                        |      6 | 0.0000156 |
| x-swagger-route-controller             |      5 | 0.0000130 |
| x-vendor-method                        |      5 | 0.0000130 |
| x-private                              |      4 | 0.0000104 |
| x-python-connexion-openapi-name        |      4 | 0.0000104 |
| x-handler                              |      4 | 0.0000104 |
| x-kusk                                 |      4 | 0.0000104 |
| x-vertx-event-bus                      |      3 | 0.0000078 |
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
