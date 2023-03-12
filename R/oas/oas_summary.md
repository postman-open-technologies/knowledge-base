OAS Summary
================
<sup>Last updated: 2023-03-12</sup>

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

- Based on 23,050 valid API specifications, the average JSON size is
  33.8Kb, ranging from \< 1Kb to 7,575Kb.
- No significant difference is observed between version 2 (33.3Kb) and 3
  (34.1Kb)

## Validity and source of errors

### How many valid OpenAPIs do we have?

<sup>See [validity analysis](oas_validity.md) for further details.<sup>

- Out of 29,317 APIs, 23,050 (78.6%) are valid.

### What are the primary sources of error in APIs?

*This research topic will be initiated shortly*

## Server

<sup>See [servers analysis](oas_servers.md) for further details.</sup>

### How is the server property used in APIs?

- Out of 7,703 valid OpenAPI2 specifications, 5,834 (75.7%) have a
  `host` property, 5,592 (72.6%) have a `basePath` property, and 6,202
  (80.5%) have a `schemes` property.

- Out of 15,347 valid OpenAPI3 specifications, 12,797 (83.4%) have a
  `servers` property, with an average of 1.2 server/entry, and a range
  of 0-13.

### How often do APIs use localhost vs domain based servers?

- Out of the 20,718 host/servers entries (across all APIs), 4,903
  (23.7%) contain localhost or 127.0.0.1, 11,829 (57.1%) use a DNS host,
  and 792 (3.8%) use a variable template (3.x only). 1,833 (8.8%) use a
  relative path (no server specified).
- 6,758 (32.6%) use an http protocol, and 11,123 (53.7%) https.

### What are the most commonly used top level domains?

- The top 3 most commonly used top level domains in our API collection
  are swagger.io (1,113), swaggerhub.com (1,005), and azure.com (551).

## Paths

<sup>See [paths analysis](oas_paths.md) for further details.</sup>

### How is the path property used in APIs?

- The average number of path per API is 11.9, ranging from 1 to 1,550.
- Out of the 22,519 APIs with a path, 13,681 (60.8%) have 1-5 paths,
  3,029 (13.5%) have 6-10 paths, 2,937 (13%) have 11-20 paths, 1,955
  (8.7%) have 21-50 paths, and 917 (0.04072117%) have over 50 paths.

## JSON Schema

### What is average number of locally defined JSON objects per API?

- The average number of JSON objects defined locally under /definitions
  (OpenAPI2) or /components/schema (OpenAPI3) is 20.1, ranging from 1 to
  2,146.
- Out of the 19,830 APIs, 9,841 (49.6%) have 1-5 entries, 3,079 (15.5%)
  have 6-10 entries, 2,584 (13%) have 11-20 entries, 2,367 (11.9%) have
  21-50 entries, and 1,959 (9.9%) have over 50 entries.

## Licensing

### How is the license property used in APIs?

- Out of 23,050 valid APIs, 8,346 (36.2%) have a `license` property,
  with 5,290 (23%) providing both the `name` and `url`.
- Out of the 147 v3.1 APIs with a license, 5 (3.4%) use the `identifier`
  property (introduced in 3.1).

### What is the breakdown of licenses use by the APIs?

- Analysis based on a simple harmonization method looking at terms in
  the license name and url values indicates that 3,124 (37.4%) of the
  APIs use an Apache license.
- Other notable categories include MIT (40.3%), Creative Commons (5.3%),
  GNU/GPL (2.8%).
- 10.5% are categorized as Other.

## Security

### How are the security related properties used in APIs?

<sup>*Note that in OpenAPI3, `securityDefinitions` was renamed to
`securitySchemes` and moved inside `components`, and the `type: basic`
was replaced with `type: http` with `scheme: basic`.*</sup>

- Out of 23,050 valid APIs, 6,766 (29.4%) have a `security` property.

- For OpenAPI2, out of the 7,703 valid APIs, 3,348 (43.5%) have a
  `securityDefinitions` property. The `type` is distributed as 2,182
  (45.7%) apiKey, 1,982 (41.5%) oauth2, and 609 (12.8%) basic.

- For OpenAPI3, out of the 15,347 valid APIs, 7,949 (51.8%) have a
  `components/securitySchemes` property. The `type` is distributed as
  3,155 (32.8%) apiKey, 4,804 (49.9%) http, 1,514 (15.7%) oauth2, 77
  (0.8%) openIdConnect, and 77 (0.8%) empty value.

- As only 1,491 (19.4%) of v2.x and 5,275 (34.4%) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.

## Responses

### What is the breakdown of status codes in the OpenAPIs responses?

<sup>See [paths operations analysis](oas_paths_operations.md) for
further details.<sup>

- Across all 886,851 responses, the most common codes or values are
  `200` 290,917 (32.8%), `400` 98,577 (11.1%), `404` 89,894 (10.1%),
  `401` 80,367 (9.1%), and `500` 65,545 (7.4%)
