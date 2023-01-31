OAS Paths Analysis
================
<sup>Last updated: 2023-01-31</sup>

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

- The average number of path per API is 12.2, ranging from 1 to 1,550.
- Out of the 21,010 APIs with a path, 12,755 (60.7%) have 1-5 paths,
  2,787 (13.3%) have 6-10 paths, 2,703 (12.9%) have 11-20 paths, 1,865
  (8.9%) have 21-50 paths, and 900 (0.04283674%) have over 50 paths.

<img src="oas_paths_files/figure-gfm/oas_paths_buckets_barplot-1.png" width="90%" />

## Which properties are used under paths?

- Out of 368,755 properties under paths, the most commonly used are
  `get` 166,717 (45.2%), `post` 92,040 (25%), `put` 31,069 (8.4%),
  `delete` 28,984 (7.9%), and `parameters` 22,641 (6.1%).
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
| get                                    | 166717 | 0.4521078 |
| post                                   |  92040 | 0.2495966 |
| put                                    |  31069 | 0.0842538 |
| delete                                 |  28984 | 0.0785996 |
| parameters                             |  22641 | 0.0613985 |
| patch                                  |   8111 | 0.0219956 |
| x-swagger-router-controller            |   6250 | 0.0169489 |
| \$ref                                  |   4596 | 0.0124636 |
| description                            |   1800 | 0.0048813 |
| servers                                |   1242 | 0.0033681 |
| options                                |    742 | 0.0020122 |
| summary                                |    731 | 0.0019823 |
| x-endpoint                             |    687 | 0.0018630 |
| x-platforms-available                  |    663 | 0.0017979 |
| head                                   |    341 | 0.0009247 |
| x-swagger-pipe                         |    294 | 0.0007973 |
| x-route-enum                           |    291 | 0.0007891 |
| x-twilio                               |    250 | 0.0006780 |
| x-api-version                          |    175 | 0.0004746 |
| x-summary                              |    146 | 0.0003959 |
| x-linode-cli-command                   |    133 | 0.0003607 |
| x-path-type                            |    129 | 0.0003498 |
| x-default-output-properties            |    129 | 0.0003498 |
| x-description                          |     81 | 0.0002197 |
| x-restlet                              |     67 | 0.0001817 |
| x-related-model                        |     45 | 0.0001220 |
| x-gelato-group                         |     39 | 0.0001058 |
| x-vault-unauthenticated                |     34 | 0.0000922 |
| x-amazon-apigateway-any-method         |     29 | 0.0000786 |
| x-controller                           |     25 | 0.0000678 |
| x-modules                              |     25 | 0.0000678 |
| x-vault-sudo                           |     25 | 0.0000678 |
| trace                                  |     15 | 0.0000407 |
| x-ms-notification-content              |     15 | 0.0000407 |
| x-WM-COMPLETE_PATH                     |     14 | 0.0000380 |
| x-a127-apply                           |     14 | 0.0000380 |
| x-amf-description                      |     11 | 0.0000298 |
| x-vault-createSupported                |     11 | 0.0000298 |
| x-swagger-section-capabilities         |      9 | 0.0000244 |
| x-eac-ignore                           |      8 | 0.0000217 |
| x-external                             |      7 | 0.0000190 |
| x-swagger-section-2fa-bypass-permitted |      7 | 0.0000190 |
| x-internal                             |      7 | 0.0000190 |
| x-data_classification                  |      7 | 0.0000190 |
| x-volos-apply                          |      7 | 0.0000190 |
| x-order                                |      6 | 0.0000163 |
| x-last-modified                        |      6 | 0.0000163 |
| x-zendesk-owner                        |      6 | 0.0000163 |
| x-controller-interface                 |      6 | 0.0000163 |
| x-swagger-route-controller             |      5 | 0.0000136 |
| x-handler                              |      4 | 0.0000108 |
| x-private                              |      4 | 0.0000108 |
| x-python-connexion-openapi-name        |      4 | 0.0000108 |
| x-kusk                                 |      4 | 0.0000108 |
| x-snyk-api-resource                    |      4 | 0.0000108 |
| x-vertx-event-bus                      |      3 | 0.0000081 |
| x-annotation-counting                  |      2 | 0.0000054 |
| x-style-validator-ignored              |      2 | 0.0000054 |
| x-annotation-clearanceLevel            |      2 | 0.0000054 |
| x-wso2-sandbox-endpoints               |      2 | 0.0000054 |
| x-amzn-api-sandbox                     |      2 | 0.0000054 |
| x-annotation-meta-data                 |      2 | 0.0000054 |
| x-wso2-production-endpoints            |      2 | 0.0000054 |
| x-db-table-name                        |      2 | 0.0000054 |
| x-vendor-method                        |      2 | 0.0000054 |
| x-oba-custom                           |      2 | 0.0000054 |
| x-annotation-experimental              |      2 | 0.0000054 |
| x-exegesis-controller                  |      2 | 0.0000054 |
| x-oad-type                             |      1 | 0.0000027 |
| x-DNB-Name                             |      1 | 0.0000027 |
| x-comment                              |      1 | 0.0000027 |
| x-swagstar                             |      1 | 0.0000027 |
| x-temp                                 |      1 | 0.0000027 |
| x-test                                 |      1 | 0.0000027 |
| x-openapi-router-controller            |      1 | 0.0000027 |
| x-wso2-request-interceptor             |      1 | 0.0000027 |
| x-a127-authorizations                  |      1 | 0.0000027 |
| x-zally-ignore                         |      1 | 0.0000027 |
| x-wso2-disable-security                |      1 | 0.0000027 |
| x-bank                                 |      1 | 0.0000027 |
| x-route-filters                        |      1 | 0.0000027 |
| x-volos-authorizations                 |      1 | 0.0000027 |
| x-kong-plugin-key-auth                 |      1 | 0.0000027 |
| x-DNB-ID                               |      1 | 0.0000027 |

</details>

# Methodology

Results are based on the content and count of entries in the `/paths`
property in the APIs specifications.
