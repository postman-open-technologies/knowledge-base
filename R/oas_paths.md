OAS Paths Analysis
================
<sup>Last updated: 2023-02-07</sup>

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

- The average number of path per API is 12, ranging from 1 to 1,550.
- Out of the 21,665 APIs with a path, 13,191 (60.9%) have 1-5 paths,
  2,902 (13.4%) have 6-10 paths, 2,788 (12.9%) have 11-20 paths, 1,882
  (8.7%) have 21-50 paths, and 902 (0.04163397%) have over 50 paths.

<img src="oas_paths_files/figure-gfm/oas_paths_buckets_barplot-1.png" width="90%" />

## Which properties are used under paths?

- Out of 373,985 properties under paths, the most commonly used are
  `get` 169,231 (45.3%), `post` 93,344 (25%), `put` 31,427 (8.4%),
  `delete` 29,379 (7.9%), and `parameters` 22,840 (6.1%).
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
| get                                    | 169231 | 0.4525075 |
| post                                   |  93344 | 0.2495929 |
| put                                    |  31427 | 0.0840328 |
| delete                                 |  29379 | 0.0785566 |
| parameters                             |  22840 | 0.0610720 |
| patch                                  |   8236 | 0.0220223 |
| x-swagger-router-controller            |   6344 | 0.0169632 |
| \$ref                                  |   4655 | 0.0124470 |
| description                            |   1825 | 0.0048799 |
| servers                                |   1320 | 0.0035296 |
| options                                |    770 | 0.0020589 |
| summary                                |    763 | 0.0020402 |
| x-endpoint                             |    687 | 0.0018370 |
| x-platforms-available                  |    663 | 0.0017728 |
| head                                   |    347 | 0.0009278 |
| x-swagger-pipe                         |    295 | 0.0007888 |
| x-route-enum                           |    291 | 0.0007781 |
| x-twilio                               |    253 | 0.0006765 |
| x-api-version                          |    175 | 0.0004679 |
| x-summary                              |    146 | 0.0003904 |
| x-linode-cli-command                   |    133 | 0.0003556 |
| x-path-type                            |    129 | 0.0003449 |
| x-default-output-properties            |    129 | 0.0003449 |
| x-description                          |     81 | 0.0002166 |
| x-restlet                              |     67 | 0.0001792 |
| x-related-model                        |     45 | 0.0001203 |
| x-gelato-group                         |     39 | 0.0001043 |
| x-vault-unauthenticated                |     35 | 0.0000936 |
| x-amazon-apigateway-any-method         |     33 | 0.0000882 |
| x-modules                              |     25 | 0.0000668 |
| x-vault-sudo                           |     25 | 0.0000668 |
| x-controller                           |     25 | 0.0000668 |
| trace                                  |     16 | 0.0000428 |
| x-ms-notification-content              |     14 | 0.0000374 |
| x-WM-COMPLETE_PATH                     |     14 | 0.0000374 |
| x-a127-apply                           |     14 | 0.0000374 |
| x-vault-createSupported                |     11 | 0.0000294 |
| x-amf-description                      |     11 | 0.0000294 |
| x-swagger-section-capabilities         |      9 | 0.0000241 |
| x-eac-ignore                           |      8 | 0.0000214 |
| x-volos-apply                          |      7 | 0.0000187 |
| x-data_classification                  |      7 | 0.0000187 |
| x-external                             |      7 | 0.0000187 |
| x-internal                             |      7 | 0.0000187 |
| x-swagger-section-2fa-bypass-permitted |      7 | 0.0000187 |
| x-controller-interface                 |      6 | 0.0000160 |
| x-last-modified                        |      6 | 0.0000160 |
| x-zendesk-owner                        |      6 | 0.0000160 |
| x-order                                |      6 | 0.0000160 |
| x-vendor-method                        |      5 | 0.0000134 |
| x-swagger-route-controller             |      5 | 0.0000134 |
| x-snyk-api-resource                    |      4 | 0.0000107 |
| x-handler                              |      4 | 0.0000107 |
| x-private                              |      4 | 0.0000107 |
| x-python-connexion-openapi-name        |      4 | 0.0000107 |
| x-kusk                                 |      4 | 0.0000107 |
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
