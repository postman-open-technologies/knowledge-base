OAS Paths Analysis
================
<sup>Last updated: 2023-02-08</sup>

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
- Out of the 21,845 APIs with a path, 13,309 (60.9%) have 1-5 paths,
  2,931 (13.4%) have 6-10 paths, 2,811 (12.9%) have 11-20 paths, 1,892
  (8.7%) have 21-50 paths, and 902 (0.04129091%) have over 50 paths.

<img src="oas_paths_files/figure-gfm/oas_paths_buckets_barplot-1.png" width="90%" />

## Which properties are used under paths?

- Out of 375,562 properties under paths, the most commonly used are
  `get` 169,947 (45.3%), `post` 93,774 (25%), `put` 31,524 (8.4%),
  `delete` 29,515 (7.9%), and `parameters` 22,891 (6.1%).
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
| get                                    | 169947 | 0.4525138 |
| post                                   |  93774 | 0.2496898 |
| put                                    |  31524 | 0.0839382 |
| delete                                 |  29515 | 0.0785889 |
| parameters                             |  22891 | 0.0609513 |
| patch                                  |   8282 | 0.0220523 |
| x-swagger-router-controller            |   6367 | 0.0169533 |
| \$ref                                  |   4655 | 0.0123948 |
| description                            |   1848 | 0.0049206 |
| servers                                |   1343 | 0.0035760 |
| options                                |    773 | 0.0020582 |
| summary                                |    764 | 0.0020343 |
| x-endpoint                             |    687 | 0.0018293 |
| x-platforms-available                  |    663 | 0.0017654 |
| head                                   |    350 | 0.0009319 |
| x-swagger-pipe                         |    297 | 0.0007908 |
| x-route-enum                           |    291 | 0.0007748 |
| x-twilio                               |    272 | 0.0007242 |
| x-api-version                          |    175 | 0.0004660 |
| x-summary                              |    146 | 0.0003888 |
| x-linode-cli-command                   |    133 | 0.0003541 |
| x-path-type                            |    129 | 0.0003435 |
| x-default-output-properties            |    129 | 0.0003435 |
| x-description                          |     81 | 0.0002157 |
| x-restlet                              |     67 | 0.0001784 |
| x-related-model                        |     45 | 0.0001198 |
| x-gelato-group                         |     39 | 0.0001038 |
| x-vault-unauthenticated                |     35 | 0.0000932 |
| x-amazon-apigateway-any-method         |     35 | 0.0000932 |
| x-vault-sudo                           |     25 | 0.0000666 |
| x-controller                           |     25 | 0.0000666 |
| x-modules                              |     25 | 0.0000666 |
| trace                                  |     16 | 0.0000426 |
| x-ms-notification-content              |     14 | 0.0000373 |
| x-WM-COMPLETE_PATH                     |     14 | 0.0000373 |
| x-a127-apply                           |     14 | 0.0000373 |
| x-vault-createSupported                |     11 | 0.0000293 |
| x-amf-description                      |     11 | 0.0000293 |
| x-swagger-section-capabilities         |      9 | 0.0000240 |
| x-eac-ignore                           |      8 | 0.0000213 |
| x-volos-apply                          |      7 | 0.0000186 |
| x-data_classification                  |      7 | 0.0000186 |
| x-external                             |      7 | 0.0000186 |
| x-internal                             |      7 | 0.0000186 |
| x-swagger-section-2fa-bypass-permitted |      7 | 0.0000186 |
| x-controller-interface                 |      6 | 0.0000160 |
| x-last-modified                        |      6 | 0.0000160 |
| x-zendesk-owner                        |      6 | 0.0000160 |
| x-snyk-api-resource                    |      6 | 0.0000160 |
| x-order                                |      6 | 0.0000160 |
| x-swagger-route-controller             |      5 | 0.0000133 |
| x-vendor-method                        |      5 | 0.0000133 |
| x-kusk                                 |      4 | 0.0000107 |
| x-handler                              |      4 | 0.0000107 |
| x-python-connexion-openapi-name        |      4 | 0.0000107 |
| x-private                              |      4 | 0.0000107 |
| x-vertx-event-bus                      |      3 | 0.0000080 |
| x-annotation-counting                  |      2 | 0.0000053 |
| x-wso2-sandbox-endpoints               |      2 | 0.0000053 |
| x-annotation-meta-data                 |      2 | 0.0000053 |
| x-exegesis-controller                  |      2 | 0.0000053 |
| x-annotation-experimental              |      2 | 0.0000053 |
| x-oba-custom                           |      2 | 0.0000053 |
| x-wso2-production-endpoints            |      2 | 0.0000053 |
| x-annotation-clearanceLevel            |      2 | 0.0000053 |
| x-style-validator-ignored              |      2 | 0.0000053 |
| x-db-table-name                        |      2 | 0.0000053 |
| x-amzn-api-sandbox                     |      2 | 0.0000053 |
| x-temp                                 |      1 | 0.0000027 |
| x-volos-authorizations                 |      1 | 0.0000027 |
| x-wso2-disable-security                |      1 | 0.0000027 |
| x-wso2-request-interceptor             |      1 | 0.0000027 |
| x-lambda                               |      1 | 0.0000027 |
| x-test                                 |      1 | 0.0000027 |
| x-bank                                 |      1 | 0.0000027 |
| x-route-filters                        |      1 | 0.0000027 |
| x-kong-plugin-key-auth                 |      1 | 0.0000027 |
| x-DNB-ID                               |      1 | 0.0000027 |
| x-DNB-Name                             |      1 | 0.0000027 |
| x-openapi-router-controller            |      1 | 0.0000027 |
| x-a127-authorizations                  |      1 | 0.0000027 |
| x-zally-ignore                         |      1 | 0.0000027 |
| x-oad-type                             |      1 | 0.0000027 |
| x-comment                              |      1 | 0.0000027 |
| x-swagstar                             |      1 | 0.0000027 |

</details>

# Methodology

Results are based on the content and count of entries in the `/paths`
property in the APIs specifications.
