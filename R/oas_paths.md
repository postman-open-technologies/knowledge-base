OAS Paths Analysis
================
<sup>Last updated: 2023-02-06</sup>

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
- Out of the 21,106 APIs with a path, 12,821 (60.7%) have 1-5 paths,
  2,798 (13.3%) have 6-10 paths, 2,718 (12.9%) have 11-20 paths, 1,869
  (8.9%) have 21-50 paths, and 900 (0.0426419%) have over 50 paths.

<img src="oas_paths_files/figure-gfm/oas_paths_buckets_barplot-1.png" width="90%" />

## Which properties are used under paths?

- Out of 369,551 properties under paths, the most commonly used are
  `get` 167,140 (45.2%), `post` 92,206 (25%), `put` 31,129 (8.4%),
  `delete` 29,052 (7.9%), and `parameters` 22,673 (6.1%).
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
| get                                    | 167140 | 0.4522786 |
| post                                   |  92206 | 0.2495082 |
| put                                    |  31129 | 0.0842347 |
| delete                                 |  29052 | 0.0786143 |
| parameters                             |  22673 | 0.0613528 |
| patch                                  |   8124 | 0.0219834 |
| x-swagger-router-controller            |   6256 | 0.0169287 |
| \$ref                                  |   4596 | 0.0124367 |
| description                            |   1799 | 0.0048681 |
| servers                                |   1249 | 0.0033798 |
| summary                                |    748 | 0.0020241 |
| options                                |    746 | 0.0020187 |
| x-endpoint                             |    687 | 0.0018590 |
| x-platforms-available                  |    663 | 0.0017941 |
| head                                   |    342 | 0.0009254 |
| x-swagger-pipe                         |    294 | 0.0007956 |
| x-route-enum                           |    291 | 0.0007874 |
| x-twilio                               |    249 | 0.0006738 |
| x-api-version                          |    175 | 0.0004735 |
| x-summary                              |    146 | 0.0003951 |
| x-linode-cli-command                   |    133 | 0.0003599 |
| x-path-type                            |    129 | 0.0003491 |
| x-default-output-properties            |    129 | 0.0003491 |
| x-description                          |     81 | 0.0002192 |
| x-restlet                              |     67 | 0.0001813 |
| x-related-model                        |     45 | 0.0001218 |
| x-gelato-group                         |     39 | 0.0001055 |
| x-vault-unauthenticated                |     34 | 0.0000920 |
| x-amazon-apigateway-any-method         |     30 | 0.0000812 |
| x-controller                           |     25 | 0.0000676 |
| x-modules                              |     25 | 0.0000676 |
| x-vault-sudo                           |     25 | 0.0000676 |
| trace                                  |     15 | 0.0000406 |
| x-ms-notification-content              |     14 | 0.0000379 |
| x-WM-COMPLETE_PATH                     |     14 | 0.0000379 |
| x-a127-apply                           |     14 | 0.0000379 |
| x-amf-description                      |     11 | 0.0000298 |
| x-vault-createSupported                |     11 | 0.0000298 |
| x-swagger-section-capabilities         |      9 | 0.0000244 |
| x-eac-ignore                           |      8 | 0.0000216 |
| x-external                             |      7 | 0.0000189 |
| x-swagger-section-2fa-bypass-permitted |      7 | 0.0000189 |
| x-internal                             |      7 | 0.0000189 |
| x-data_classification                  |      7 | 0.0000189 |
| x-volos-apply                          |      7 | 0.0000189 |
| x-order                                |      6 | 0.0000162 |
| x-last-modified                        |      6 | 0.0000162 |
| x-zendesk-owner                        |      6 | 0.0000162 |
| x-controller-interface                 |      6 | 0.0000162 |
| x-swagger-route-controller             |      5 | 0.0000135 |
| x-python-connexion-openapi-name        |      4 | 0.0000108 |
| x-private                              |      4 | 0.0000108 |
| x-kusk                                 |      4 | 0.0000108 |
| x-handler                              |      4 | 0.0000108 |
| x-snyk-api-resource                    |      4 | 0.0000108 |
| x-vertx-event-bus                      |      3 | 0.0000081 |
| x-vendor-method                        |      3 | 0.0000081 |
| x-annotation-counting                  |      2 | 0.0000054 |
| x-style-validator-ignored              |      2 | 0.0000054 |
| x-annotation-clearanceLevel            |      2 | 0.0000054 |
| x-wso2-sandbox-endpoints               |      2 | 0.0000054 |
| x-amzn-api-sandbox                     |      2 | 0.0000054 |
| x-annotation-meta-data                 |      2 | 0.0000054 |
| x-wso2-production-endpoints            |      2 | 0.0000054 |
| x-db-table-name                        |      2 | 0.0000054 |
| x-oba-custom                           |      2 | 0.0000054 |
| x-annotation-experimental              |      2 | 0.0000054 |
| x-exegesis-controller                  |      2 | 0.0000054 |
| x-bank                                 |      1 | 0.0000027 |
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
| x-volos-authorizations                 |      1 | 0.0000027 |
| x-route-filters                        |      1 | 0.0000027 |
| x-oad-type                             |      1 | 0.0000027 |
| x-kong-plugin-key-auth                 |      1 | 0.0000027 |
| x-DNB-ID                               |      1 | 0.0000027 |

</details>

# Methodology

Results are based on the content and count of entries in the `/paths`
property in the APIs specifications.
