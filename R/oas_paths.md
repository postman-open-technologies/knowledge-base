OAS Paths Analysis
================
<sup>Last updated: 2023-01-30</sup>

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

- The average number of path per API is 12.4, ranging from 1 to 1,550.
- Out of the 20,244 APIs with a path, 12,255 (60.5%) have 1-5 paths,
  2,684 (13.3%) have 6-10 paths, 2,596 (12.8%) have 11-20 paths, 1,813
  (9%) have 21-50 paths, and 896 (0.04426003%) have over 50 paths.

<img src="oas_paths_files/figure-gfm/oas_paths_buckets_barplot-1.png" width="90%" />

## Which properties are used under paths?

- Out of 361,612 properties under paths, the most commonly used are
  `get` 163,339 (45.2%), `post` 90,188 (24.9%), `put` 30,578 (8.5%),
  `delete` 28,467 (7.9%), and `parameters` 22,339 (6.2%).
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
| get                                    | 163339 | 0.4516968 |
| post                                   |  90188 | 0.2494054 |
| put                                    |  30578 | 0.0845602 |
| delete                                 |  28467 | 0.0787225 |
| parameters                             |  22339 | 0.0617762 |
| patch                                  |   7933 | 0.0219379 |
| x-swagger-router-controller            |   6101 | 0.0168717 |
| \$ref                                  |   4482 | 0.0123945 |
| description                            |   1776 | 0.0049113 |
| servers                                |   1180 | 0.0032632 |
| summary                                |    717 | 0.0019828 |
| options                                |    711 | 0.0019662 |
| x-endpoint                             |    687 | 0.0018998 |
| x-platforms-available                  |    663 | 0.0018335 |
| head                                   |    334 | 0.0009236 |
| x-swagger-pipe                         |    293 | 0.0008103 |
| x-route-enum                           |    291 | 0.0008047 |
| x-twilio                               |    250 | 0.0006913 |
| x-api-version                          |    175 | 0.0004839 |
| x-summary                              |    144 | 0.0003982 |
| x-linode-cli-command                   |    133 | 0.0003678 |
| x-default-output-properties            |    129 | 0.0003567 |
| x-path-type                            |    129 | 0.0003567 |
| x-description                          |     81 | 0.0002240 |
| x-restlet                              |     64 | 0.0001770 |
| x-related-model                        |     45 | 0.0001244 |
| x-gelato-group                         |     39 | 0.0001079 |
| x-vault-unauthenticated                |     33 | 0.0000913 |
| x-modules                              |     25 | 0.0000691 |
| x-vault-sudo                           |     25 | 0.0000691 |
| x-controller                           |     25 | 0.0000691 |
| x-amazon-apigateway-any-method         |     22 | 0.0000608 |
| trace                                  |     14 | 0.0000387 |
| x-WM-COMPLETE_PATH                     |     14 | 0.0000387 |
| x-a127-apply                           |     14 | 0.0000387 |
| x-ms-notification-content              |     14 | 0.0000387 |
| x-vault-createSupported                |     11 | 0.0000304 |
| x-amf-description                      |     11 | 0.0000304 |
| x-swagger-section-capabilities         |      9 | 0.0000249 |
| x-eac-ignore                           |      8 | 0.0000221 |
| x-swagger-section-2fa-bypass-permitted |      7 | 0.0000194 |
| x-data_classification                  |      7 | 0.0000194 |
| x-volos-apply                          |      7 | 0.0000194 |
| x-external                             |      7 | 0.0000194 |
| x-internal                             |      7 | 0.0000194 |
| x-controller-interface                 |      6 | 0.0000166 |
| x-zendesk-owner                        |      6 | 0.0000166 |
| x-order                                |      6 | 0.0000166 |
| x-swagger-route-controller             |      5 | 0.0000138 |
| x-python-connexion-openapi-name        |      4 | 0.0000111 |
| x-private                              |      4 | 0.0000111 |
| x-kusk                                 |      4 | 0.0000111 |
| x-snyk-api-resource                    |      4 | 0.0000111 |
| x-handler                              |      4 | 0.0000111 |
| x-vertx-event-bus                      |      3 | 0.0000083 |
| x-exegesis-controller                  |      2 | 0.0000055 |
| x-amzn-api-sandbox                     |      2 | 0.0000055 |
| x-annotation-meta-data                 |      2 | 0.0000055 |
| x-annotation-experimental              |      2 | 0.0000055 |
| x-oba-custom                           |      2 | 0.0000055 |
| x-annotation-clearanceLevel            |      2 | 0.0000055 |
| x-annotation-counting                  |      2 | 0.0000055 |
| x-db-table-name                        |      2 | 0.0000055 |
| x-style-validator-ignored              |      2 | 0.0000055 |
| x-wso2-production-endpoints            |      2 | 0.0000055 |
| x-wso2-sandbox-endpoints               |      2 | 0.0000055 |
| x-wso2-disable-security                |      1 | 0.0000028 |
| x-temp                                 |      1 | 0.0000028 |
| x-DNB-Name                             |      1 | 0.0000028 |
| x-wso2-request-interceptor             |      1 | 0.0000028 |
| x-swagstar                             |      1 | 0.0000028 |
| x-openapi-router-controller            |      1 | 0.0000028 |
| x-test                                 |      1 | 0.0000028 |
| x-bank                                 |      1 | 0.0000028 |
| x-route-filters                        |      1 | 0.0000028 |
| x-kong-plugin-key-auth                 |      1 | 0.0000028 |
| x-DNB-ID                               |      1 | 0.0000028 |
| x-a127-authorizations                  |      1 | 0.0000028 |
| x-zally-ignore                         |      1 | 0.0000028 |
| x-oad-type                             |      1 | 0.0000028 |
| x-comment                              |      1 | 0.0000028 |
| x-volos-authorizations                 |      1 | 0.0000028 |

</details>

# Methodology

Results are based on the content and count of entries in the `/paths`
property in the APIs specifications.
