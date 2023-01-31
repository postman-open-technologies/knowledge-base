OAS Summary
================
<sup>Last updated: 2023-01-31</sup>

- <a href="#size" id="toc-size">Size</a>
- <a href="#validity-and-source-of-errors"
  id="toc-validity-and-source-of-errors">Validity and source of errors</a>
- <a href="#server" id="toc-server">Server</a>
- <a href="#paths" id="toc-paths">Paths</a>
- <a href="#json-schema" id="toc-json-schema">JSON Schema</a>
- <a href="#licensing" id="toc-licensing">Licensing</a>
- <a href="#security" id="toc-security">Security</a>
- <a href="#responses" id="toc-responses">Responses</a>

<sup>*DISCLAIMER: the results and findings below are preliminary and
have not been fully validated or peer reviewed. Use with care. Do not
quote or disseminate.*</sup>

This document enumerates the research questions and topics we are
investigating in the knowledge base around OpenAPI specifications and
provides a summary of findings. More in-depth analysis is available for
selected topics.

## Size

### What is the typicaly size of an API?

<sup>See [size analysis](oas_size.md) for further details.<sup>

- Based on 21,503 valid API specifications, the average JSON size is
  35.2Kb, ranging from \< 1Kb to 7,575Kb.
- No significant difference is observed between version 2 (35.4Kb) and 3
  (35.1Kb)

## Validity and source of errors

### How many valid OpenAPIs do we have?

<sup>See [validity analysis](oas_validity.md) for further details.<sup>

- Out of 27,107 APIs, 21,503 (79.3%) are valid.

### What are the primary sources of error in APIs?

*This research topic will be initiated shortly*

## Server

<sup>See [servers analysis](oas_servers.md) for further details.</sup>

### How is the server property used in APIs?

- Out of 6,896 valid OpenAPI2 specifications, 5,236 (75.9%) have a
  `host` property, 5,070 (73.5%) have a `basePath` property, and 5,560
  (80.6%) have a `schemes` property.

- Out of 14,607 valid OpenAPI3 specifications, 12,208 (83.6%) have a
  `servers` property, with an average of 1.2 server/entry, and a range
  of 0-13.

### How often do APIs use localhost vs domain based servers?

- Out of the 19,340 host/servers entries (across all APIs), 4,737
  (24.5%) contain localhost or 127.0.0.1, 10,951 (56.6%) use a DNS host,
  and 747 (3.9%) use a variable template (3.x only). 1,655 (8.6%) use a
  relative path (no server specified).
- 6,244 (32.3%) use an http protocol, and 10,338 (53.5%) https.

### What are the most commonly used top level domains?

- The top 3 most commonly used top level domains in our API collection
  are swagger.io (1,046), swaggerhub.com (974), and pstmn.io (529).

## Paths

<sup>See [paths analysis](oas_paths.md) for further details.</sup>

### How is the path property used in APIs?

- The average number of path per API is 12.2, ranging from 1 to 1,550.
- Out of the 21,010 APIs with a path, 12,755 (60.7%) have 1-5 paths,
  2,787 (13.3%) have 6-10 paths, 2,703 (12.9%) have 11-20 paths, 1,865
  (8.9%) have 21-50 paths, and 900 (0.04283674%) have over 50 paths.

## JSON Schema

### What is average number of locally defined JSON objects per API?

- The average number of JSON objects defined locally under /definitions
  (OpenAPI2) or /components/schema (OpenAPI3) is 20.7, ranging from 1 to
  2,146.
- Out of the 18,548 APIs, 9,284 (50.1%) have 1-5 entries, 2,855 (15.4%)
  have 6-10 entries, 2,336 (12.6%) have 11-20 entries, 2,160 (11.6%)
  have 21-50 entries, and 1,913 (10.3%) have over 50 entries.

## Licensing

### How is the license property used in APIs?

- Out of 21,503 valid APIs, 7,863 (36.6%) have a `license` property,
  with 4,848 (22.5%) providing both the `name` and `url`.
- Out of the 141 v3.1 APIs with a license, 5 (3.5%) use the `identifier`
  property (introduced in 3.1).

### What is the breakdown of licenses use by the APIs?

- Analysis based on a simple harmonization method looking at terms in
  the license name and url values indicates that 2,839 (36.1%) of the
  APIs use an Apache license.
- Other notable categories include MIT (41.9%), Creative Commons (5.3%),
  GNU/GPL (2.8%).
- 10.1% are categorized as Other.

## Security

### How are the security related properties used in APIs?

<sup>*Note that in OpenAPI3, `securityDefinitions` was renamed to
`securitySchemes` and moved inside `components`, and the `type: basic`
was replaced with `type: http` with `scheme: basic`.*</sup>

- Out of 21,503 valid APIs, 6,468 (30.1%) have a `security` property.

- For OpenAPI2, out of the 6,896 valid APIs, 3,006 (43.6%) have a
  `securityDefinitions` property. The `type` is distributed as 2,016
  (46.2%) apiKey, 1,790 (41%) oauth2, and 555 (12.7%) basic.

- For OpenAPI3, out of the 14,607 valid APIs, 7,645 (52.3%) have a
  `components/securitySchemes` property. The `type` is distributed as
  3,003 (32.5%) apiKey, 4,666 (50.5%) http, 1,422 (15.4%) oauth2, 77
  (0.8%) openIdConnect, and 77 (0.8%) empty value.

- As only 1,343 (19.5%) of v2.x and 5,125 (35.1%) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.

## Responses

### What is the breakdown of status codes in the OpenAPIs responses?

<sup>See [paths operations analysis](oas_paths_operations.md) for
further details.<sup>

- Across all 853,147 responses, the most common codes or values are
  `200` 279,024 (32.7%), `400` 94,983 (11.1%), `404` 86,400 (10.1%),
  `401` 77,468 (9.1%), and `403` 62,805 (7.4%)
