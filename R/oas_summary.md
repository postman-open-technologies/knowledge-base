OAS Summary
================
<sup>Last updated: 2023-02-10</sup>

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

- Based on 22,540 valid API specifications, the average JSON size is
  34.2Kb, ranging from \< 1Kb to 7,575Kb.
- No significant difference is observed between version 2 (33.8Kb) and 3
  (34.4Kb)

## Validity and source of errors

### How many valid OpenAPIs do we have?

<sup>See [validity analysis](oas_validity.md) for further details.<sup>

- Out of 28,598 APIs, 22,540 (78.8%) are valid.

### What are the primary sources of error in APIs?

*This research topic will be initiated shortly*

## Server

<sup>See [servers analysis](oas_servers.md) for further details.</sup>

### How is the server property used in APIs?

- Out of 7,434 valid OpenAPI2 specifications, 5,613 (75.5%) have a
  `host` property, 5,429 (73%) have a `basePath` property, and 5,984
  (80.5%) have a `schemes` property.

- Out of 15,106 valid OpenAPI3 specifications, 12,613 (83.5%) have a
  `servers` property, with an average of 1.2 server/entry, and a range
  of 0-13.

### How often do APIs use localhost vs domain based servers?

- Out of the 20,263 host/servers entries (across all APIs), 4,873 (24%)
  contain localhost or 127.0.0.1, 11,497 (56.7%) use a DNS host, and 774
  (3.8%) use a variable template (3.x only). 1,781 (8.8%) use a relative
  path (no server specified).
- 6,627 (32.7%) use an http protocol, and 10,838 (53.5%) https.

### What are the most commonly used top level domains?

- The top 3 most commonly used top level domains in our API collection
  are swagger.io (1,090), swaggerhub.com (999), and pstmn.io (529).

## Paths

<sup>See [paths analysis](oas_paths.md) for further details.</sup>

### How is the path property used in APIs?

- The average number of path per API is 11.9, ranging from 1 to 1,550.
- Out of the 22,018 APIs with a path, 13,415 (60.9%) have 1-5 paths,
  2,952 (13.4%) have 6-10 paths, 2,841 (12.9%) have 11-20 paths, 1,905
  (8.7%) have 21-50 paths, and 905 (0.04110273%) have over 50 paths.

## JSON Schema

### What is average number of locally defined JSON objects per API?

- The average number of JSON objects defined locally under /definitions
  (OpenAPI2) or /components/schema (OpenAPI3) is 20.2, ranging from 1 to
  2,146.
- Out of the 19,386 APIs, 9,676 (49.9%) have 1-5 entries, 2,990 (15.4%)
  have 6-10 entries, 2,502 (12.9%) have 11-20 entries, 2,289 (11.8%)
  have 21-50 entries, and 1,929 (10%) have over 50 entries.

## Licensing

### How is the license property used in APIs?

- Out of 22,540 valid APIs, 8,212 (36.4%) have a `license` property,
  with 5,171 (22.9%) providing both the `name` and `url`.
- Out of the 146 v3.1 APIs with a license, 5 (3.4%) use the `identifier`
  property (introduced in 3.1).

### What is the breakdown of licenses use by the APIs?

- Analysis based on a simple harmonization method looking at terms in
  the license name and url values indicates that 3,050 (37.1%) of the
  APIs use an Apache license.
- Other notable categories include MIT (40.7%), Creative Commons (5.3%),
  GNU/GPL (2.8%).
- 10.4% are categorized as Other.

## Security

### How are the security related properties used in APIs?

<sup>*Note that in OpenAPI3, `securityDefinitions` was renamed to
`securitySchemes` and moved inside `components`, and the `type: basic`
was replaced with `type: http` with `scheme: basic`.*</sup>

- Out of 22,540 valid APIs, 6,647 (29.5%) have a `security` property.

- For OpenAPI2, out of the 7,434 valid APIs, 3,224 (43.4%) have a
  `securityDefinitions` property. The `type` is distributed as 2,113
  (45.7%) apiKey, 1,919 (41.5%) oauth2, and 588 (12.7%) basic.

- For OpenAPI3, out of the 15,106 valid APIs, 7,830 (51.8%) have a
  `components/securitySchemes` property. The `type` is distributed as
  3,092 (32.6%) apiKey, 4,748 (50.1%) http, 1,480 (15.6%) oauth2, 77
  (0.8%) openIdConnect, and 77 (0.8%) empty value.

- As only 1,445 (19.4%) of v2.x and 5,202 (34.4%) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.

## Responses

### What is the breakdown of status codes in the OpenAPIs responses?

<sup>See [paths operations analysis](oas_paths_operations.md) for
further details.<sup>

- Across all 871,361 responses, the most common codes or values are
  `200` 285,825 (32.8%), `400` 96,868 (11.1%), `404` 88,211 (10.1%),
  `401` 78,641 (9%), and `500` 64,367 (7.4%)
