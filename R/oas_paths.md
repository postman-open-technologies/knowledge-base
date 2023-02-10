OAS Paths Analysis
================
<sup>Last updated: 2023-02-10</sup>

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
- Out of the 22,018 APIs with a path, 13,415 (60.9%) have 1-5 paths,
  2,952 (13.4%) have 6-10 paths, 2,841 (12.9%) have 11-20 paths, 1,905
  (8.7%) have 21-50 paths, and 905 (0.04110273%) have over 50 paths.

<img src="oas_paths_files/figure-gfm/oas_paths_buckets_barplot-1.png" width="90%" />

## Which properties are used under paths?

- Out of 377,473 properties under paths, the most commonly used are
  `get` 170,783 (45.2%), `post` 94,260 (25%), `put` 31,718 (8.4%),
  `delete` 29,683 (7.9%), and `parameters` 22,935 (6.1%).
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
| get                                    | 170783 | 0.4524377 |
| post                                   |  94260 | 0.2497132 |
| put                                    |  31718 | 0.0840272 |
| delete                                 |  29683 | 0.0786361 |
| parameters                             |  22935 | 0.0607593 |
| patch                                  |   8312 | 0.0220201 |
| x-swagger-router-controller            |   6402 | 0.0169602 |
| \$ref                                  |   4757 | 0.0126022 |
| description                            |   1848 | 0.0048957 |
| servers                                |   1349 | 0.0035738 |
| options                                |    773 | 0.0020478 |
| summary                                |    764 | 0.0020240 |
| x-endpoint                             |    687 | 0.0018200 |
| x-platforms-available                  |    663 | 0.0017564 |
| head                                   |    351 | 0.0009299 |
| x-swagger-pipe                         |    299 | 0.0007921 |
| x-route-enum                           |    291 | 0.0007709 |
| x-twilio                               |    272 | 0.0007206 |
| x-api-version                          |    175 | 0.0004636 |
| x-summary                              |    146 | 0.0003868 |
| x-linode-cli-command                   |    133 | 0.0003523 |
| x-default-output-properties            |    129 | 0.0003417 |
| x-path-type                            |    129 | 0.0003417 |
| x-description                          |     81 | 0.0002146 |
| x-restlet                              |     67 | 0.0001775 |
| x-related-model                        |     45 | 0.0001192 |
| x-gelato-group                         |     39 | 0.0001033 |
| x-amazon-apigateway-any-method         |     35 | 0.0000927 |
| x-vault-unauthenticated                |     35 | 0.0000927 |
| x-vault-sudo                           |     25 | 0.0000662 |
| x-modules                              |     25 | 0.0000662 |
| x-controller                           |     25 | 0.0000662 |
| x-ms-notification-content              |     20 | 0.0000530 |
| trace                                  |     16 | 0.0000424 |
| x-WM-COMPLETE_PATH                     |     14 | 0.0000371 |
| x-a127-apply                           |     14 | 0.0000371 |
| x-amf-description                      |     12 | 0.0000318 |
| x-vault-createSupported                |     11 | 0.0000291 |
| x-swagger-section-capabilities         |      9 | 0.0000238 |
| x-eac-ignore                           |      8 | 0.0000212 |
| x-volos-apply                          |      7 | 0.0000185 |
| x-data_classification                  |      7 | 0.0000185 |
| x-external                             |      7 | 0.0000185 |
| x-internal                             |      7 | 0.0000185 |
| x-swagger-section-2fa-bypass-permitted |      7 | 0.0000185 |
| x-controller-interface                 |      6 | 0.0000159 |
| x-last-modified                        |      6 | 0.0000159 |
| x-zendesk-owner                        |      6 | 0.0000159 |
| x-snyk-api-resource                    |      6 | 0.0000159 |
| x-order                                |      6 | 0.0000159 |
| x-swagger-route-controller             |      5 | 0.0000132 |
| x-vendor-method                        |      5 | 0.0000132 |
| x-kusk                                 |      4 | 0.0000106 |
| x-handler                              |      4 | 0.0000106 |
| x-python-connexion-openapi-name        |      4 | 0.0000106 |
| x-private                              |      4 | 0.0000106 |
| x-vertx-event-bus                      |      3 | 0.0000079 |
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
| x-temp                                 |      1 | 0.0000026 |
| x-volos-authorizations                 |      1 | 0.0000026 |
| x-wso2-disable-security                |      1 | 0.0000026 |
| x-wso2-request-interceptor             |      1 | 0.0000026 |
| x-lambda                               |      1 | 0.0000026 |
| x-test                                 |      1 | 0.0000026 |
| x-bank                                 |      1 | 0.0000026 |
| x-route-filters                        |      1 | 0.0000026 |
| x-kong-plugin-key-auth                 |      1 | 0.0000026 |
| x-DNB-ID                               |      1 | 0.0000026 |
| x-DNB-Name                             |      1 | 0.0000026 |
| x-openapi-router-controller            |      1 | 0.0000026 |
| x-a127-authorizations                  |      1 | 0.0000026 |
| x-zally-ignore                         |      1 | 0.0000026 |
| x-oad-type                             |      1 | 0.0000026 |
| x-comment                              |      1 | 0.0000026 |
| x-swagstar                             |      1 | 0.0000026 |

</details>

# Methodology

Results are based on the content and count of entries in the `/paths`
property in the APIs specifications.
