OAS Paths Analysis
================
<sup>Last updated: 2023-02-09</sup>

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
- Out of the 21,950 APIs with a path, 13,377 (60.9%) have 1-5 paths,
  2,945 (13.4%) have 6-10 paths, 2,827 (12.9%) have 11-20 paths, 1,898
  (8.6%) have 21-50 paths, and 903 (0.04113895%) have over 50 paths.

<img src="oas_paths_files/figure-gfm/oas_paths_buckets_barplot-1.png" width="90%" />

## Which properties are used under paths?

- Out of 376,662 properties under paths, the most commonly used are
  `get` 170,450 (45.3%), `post` 94,058 (25%), `put` 31,647 (8.4%),
  `delete` 29,624 (7.9%), and `parameters` 22,918 (6.1%).
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
| get                                    | 170450 | 0.4525277 |
| post                                   |  94058 | 0.2497146 |
| put                                    |  31647 | 0.0840196 |
| delete                                 |  29624 | 0.0786488 |
| parameters                             |  22918 | 0.0608450 |
| patch                                  |   8304 | 0.0220463 |
| x-swagger-router-controller            |   6392 | 0.0169701 |
| \$ref                                  |   4655 | 0.0123586 |
| description                            |   1848 | 0.0049063 |
| servers                                |   1347 | 0.0035762 |
| options                                |    773 | 0.0020522 |
| summary                                |    764 | 0.0020283 |
| x-endpoint                             |    687 | 0.0018239 |
| x-platforms-available                  |    663 | 0.0017602 |
| head                                   |    351 | 0.0009319 |
| x-swagger-pipe                         |    298 | 0.0007912 |
| x-route-enum                           |    291 | 0.0007726 |
| x-twilio                               |    272 | 0.0007221 |
| x-api-version                          |    175 | 0.0004646 |
| x-summary                              |    146 | 0.0003876 |
| x-linode-cli-command                   |    133 | 0.0003531 |
| x-path-type                            |    129 | 0.0003425 |
| x-default-output-properties            |    129 | 0.0003425 |
| x-description                          |     81 | 0.0002150 |
| x-restlet                              |     67 | 0.0001779 |
| x-related-model                        |     45 | 0.0001195 |
| x-gelato-group                         |     39 | 0.0001035 |
| x-vault-unauthenticated                |     35 | 0.0000929 |
| x-amazon-apigateway-any-method         |     35 | 0.0000929 |
| x-vault-sudo                           |     25 | 0.0000664 |
| x-controller                           |     25 | 0.0000664 |
| x-modules                              |     25 | 0.0000664 |
| trace                                  |     16 | 0.0000425 |
| x-ms-notification-content              |     14 | 0.0000372 |
| x-WM-COMPLETE_PATH                     |     14 | 0.0000372 |
| x-a127-apply                           |     14 | 0.0000372 |
| x-amf-description                      |     12 | 0.0000319 |
| x-vault-createSupported                |     11 | 0.0000292 |
| x-swagger-section-capabilities         |      9 | 0.0000239 |
| x-eac-ignore                           |      8 | 0.0000212 |
| x-volos-apply                          |      7 | 0.0000186 |
| x-data_classification                  |      7 | 0.0000186 |
| x-external                             |      7 | 0.0000186 |
| x-internal                             |      7 | 0.0000186 |
| x-swagger-section-2fa-bypass-permitted |      7 | 0.0000186 |
| x-controller-interface                 |      6 | 0.0000159 |
| x-last-modified                        |      6 | 0.0000159 |
| x-zendesk-owner                        |      6 | 0.0000159 |
| x-snyk-api-resource                    |      6 | 0.0000159 |
| x-order                                |      6 | 0.0000159 |
| x-swagger-route-controller             |      5 | 0.0000133 |
| x-vendor-method                        |      5 | 0.0000133 |
| x-kusk                                 |      4 | 0.0000106 |
| x-handler                              |      4 | 0.0000106 |
| x-python-connexion-openapi-name        |      4 | 0.0000106 |
| x-private                              |      4 | 0.0000106 |
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
