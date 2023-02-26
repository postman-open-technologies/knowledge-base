OAS Summary
================
<sup>Last updated: 2023-02-26</sup>

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

- Based on 22,756 valid API specifications, the average JSON size is
  34Kb, ranging from \< 1Kb to 7,575Kb.
- No significant difference is observed between version 2 (33.4Kb) and 3
  (34.2Kb)

## Validity and source of errors

### How many valid OpenAPIs do we have?

<sup>See [validity analysis](oas_validity.md) for further details.<sup>

- Out of 28,915 APIs, 22,756 (78.7%) are valid.

### What are the primary sources of error in APIs?

*This research topic will be initiated shortly*

## Server

<sup>See [servers analysis](oas_servers.md) for further details.</sup>

### How is the server property used in APIs?

- Out of 7,555 valid OpenAPI2 specifications, 5,710 (75.6%) have a
  `host` property, 5,500 (72.8%) have a `basePath` property, and 6,088
  (80.6%) have a `schemes` property.

- Out of 15,201 valid OpenAPI3 specifications, 12,689 (83.5%) have a
  `servers` property, with an average of 1.2 server/entry, and a range
  of 0-13.

### How often do APIs use localhost vs domain based servers?

- Out of the 20,453 host/servers entries (across all APIs), 4,888
  (23.9%) contain localhost or 127.0.0.1, 11,631 (56.9%) use a DNS host,
  and 777 (3.8%) use a variable template (3.x only). 1,799 (8.8%) use a
  relative path (no server specified).
- 6,695 (32.7%) use an http protocol, and 10,954 (53.6%) https.

### What are the most commonly used top level domains?

- The top 3 most commonly used top level domains in our API collection
  are swagger.io (1,098), swaggerhub.com (1,005), and azure.com (551).

## Paths

<sup>See [paths analysis](oas_paths.md) for further details.</sup>

### How is the path property used in APIs?

- The average number of path per API is 11.9, ranging from 1 to 1,550.
- Out of the 22,230 APIs with a path, 13,562 (61%) have 1-5 paths, 2,981
  (13.4%) have 6-10 paths, 2,869 (12.9%) have 11-20 paths, 1,912 (8.6%)
  have 21-50 paths, and 906 (0.04075574%) have over 50 paths.

## JSON Schema

### What is average number of locally defined JSON objects per API?

- The average number of JSON objects defined locally under /definitions
  (OpenAPI2) or /components/schema (OpenAPI3) is 20.2, ranging from 1 to
  2,146.
- Out of the 19,568 APIs, 9,764 (49.9%) have 1-5 entries, 3,027 (15.5%)
  have 6-10 entries, 2,534 (12.9%) have 11-20 entries, 2,308 (11.8%)
  have 21-50 entries, and 1,935 (9.9%) have over 50 entries.

## Licensing

### How is the license property used in APIs?

- Out of 22,756 valid APIs, 8,271 (36.3%) have a `license` property,
  with 5,227 (23%) providing both the `name` and `url`.
- Out of the 147 v3.1 APIs with a license, 5 (3.4%) use the `identifier`
  property (introduced in 3.1).

### What is the breakdown of licenses use by the APIs?

- Analysis based on a simple harmonization method looking at terms in
  the license name and url values indicates that 3,084 (37.3%) of the
  APIs use an Apache license.
- Other notable categories include MIT (40.5%), Creative Commons (5.3%),
  GNU/GPL (2.8%).
- 10.4% are categorized as Other.

## Security

### How are the security related properties used in APIs?

<sup>*Note that in OpenAPI3, `securityDefinitions` was renamed to
`securitySchemes` and moved inside `components`, and the `type: basic`
was replaced with `type: http` with `scheme: basic`.*</sup>

- Out of 22,756 valid APIs, 6,697 (29.4%) have a `security` property.

- For OpenAPI2, out of the 7,555 valid APIs, 3,283 (43.5%) have a
  `securityDefinitions` property. The `type` is distributed as 2,129
  (45.5%) apiKey, 1,959 (41.8%) oauth2, and 594 (12.7%) basic.

- For OpenAPI3, out of the 15,201 valid APIs, 7,867 (51.8%) have a
  `components/securitySchemes` property. The `type` is distributed as
  3,111 (32.7%) apiKey, 4,765 (50%) http, 1,493 (15.7%) oauth2, 77
  (0.8%) openIdConnect, and 77 (0.8%) empty value.

- As only 1,481 (19.6%) of v2.x and 5,216 (34.3%) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.

## Responses

### What is the breakdown of status codes in the OpenAPIs responses?

<sup>See [paths operations analysis](oas_paths_operations.md) for
further details.<sup>

- Across all 875,275 responses, the most common codes or values are
  `200` 287,227 (32.8%), `400` 97,316 (11.1%), `404` 88,594 (10.1%),
  `401` 78,891 (9%), and `500` 64,642 (7.4%)
