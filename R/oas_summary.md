OAS Summary
================
<sup>Last updated: 2023-02-11</sup>

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

- Based on 22,642 valid API specifications, the average JSON size is
  34.1Kb, ranging from \< 1Kb to 7,575Kb.
- No significant difference is observed between version 2 (33.6Kb) and 3
  (34.3Kb)

## Validity and source of errors

### How many valid OpenAPIs do we have?

<sup>See [validity analysis](oas_validity.md) for further details.<sup>

- Out of 28,745 APIs, 22,642 (78.8%) are valid.

### What are the primary sources of error in APIs?

*This research topic will be initiated shortly*

## Server

<sup>See [servers analysis](oas_servers.md) for further details.</sup>

### How is the server property used in APIs?

- Out of 7,489 valid OpenAPI2 specifications, 5,658 (75.6%) have a
  `host` property, 5,460 (72.9%) have a `basePath` property, and 6,030
  (80.5%) have a `schemes` property.

- Out of 15,153 valid OpenAPI3 specifications, 12,651 (83.5%) have a
  `servers` property, with an average of 1.2 server/entry, and a range
  of 0-13.

### How often do APIs use localhost vs domain based servers?

- Out of the 20,351 host/servers entries (across all APIs), 4,881 (24%)
  contain localhost or 127.0.0.1, 11,558 (56.8%) use a DNS host, and 776
  (3.8%) use a variable template (3.x only). 1,789 (8.8%) use a relative
  path (no server specified).
- 6,659 (32.7%) use an http protocol, and 10,890 (53.5%) https.

### What are the most commonly used top level domains?

- The top 3 most commonly used top level domains in our API collection
  are swagger.io (1,092), swaggerhub.com (1,002), and azure.com (536).

## Paths

<sup>See [paths analysis](oas_paths.md) for further details.</sup>

### How is the path property used in APIs?

- The average number of path per API is 11.9, ranging from 1 to 1,550.
- Out of the 22,119 APIs with a path, 13,491 (61%) have 1-5 paths, 2,961
  (13.4%) have 6-10 paths, 2,854 (12.9%) have 11-20 paths, 1,908 (8.6%)
  have 21-50 paths, and 905 (0.04091505%) have over 50 paths.

## JSON Schema

### What is average number of locally defined JSON objects per API?

- The average number of JSON objects defined locally under /definitions
  (OpenAPI2) or /components/schema (OpenAPI3) is 20.2, ranging from 1 to
  2,146.
- Out of the 19,470 APIs, 9,719 (49.9%) have 1-5 entries, 3,012 (15.5%)
  have 6-10 entries, 2,510 (12.9%) have 11-20 entries, 2,298 (11.8%)
  have 21-50 entries, and 1,931 (9.9%) have over 50 entries.

## Licensing

### How is the license property used in APIs?

- Out of 22,642 valid APIs, 8,243 (36.4%) have a `license` property,
  with 5,201 (23%) providing both the `name` and `url`.
- Out of the 147 v3.1 APIs with a license, 5 (3.4%) use the `identifier`
  property (introduced in 3.1).

### What is the breakdown of licenses use by the APIs?

- Analysis based on a simple harmonization method looking at terms in
  the license name and url values indicates that 3,070 (37.2%) of the
  APIs use an Apache license.
- Other notable categories include MIT (40.6%), Creative Commons (5.3%),
  GNU/GPL (2.8%).
- 10.3% are categorized as Other.

## Security

### How are the security related properties used in APIs?

<sup>*Note that in OpenAPI3, `securityDefinitions` was renamed to
`securitySchemes` and moved inside `components`, and the `type: basic`
was replaced with `type: http` with `scheme: basic`.*</sup>

- Out of 22,642 valid APIs, 6,669 (29.5%) have a `security` property.

- For OpenAPI2, out of the 7,489 valid APIs, 3,247 (43.4%) have a
  `securityDefinitions` property. The `type` is distributed as 2,118
  (45.6%) apiKey, 1,935 (41.7%) oauth2, and 590 (12.7%) basic.

- For OpenAPI3, out of the 15,153 valid APIs, 7,849 (51.8%) have a
  `components/securitySchemes` property. The `type` is distributed as
  3,102 (32.7%) apiKey, 4,756 (50.1%) http, 1,487 (15.7%) oauth2, 77
  (0.8%) openIdConnect, and 77 (0.8%) empty value.

- As only 1,459 (19.5%) of v2.x and 5,210 (34.4%) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.

## Responses

### What is the breakdown of status codes in the OpenAPIs responses?

<sup>See [paths operations analysis](oas_paths_operations.md) for
further details.<sup>

- Across all 872,917 responses, the most common codes or values are
  `200` 286,395 (32.8%), `400` 97,017 (11.1%), `404` 88,328 (10.1%),
  `401` 78,776 (9%), and `500` 64,447 (7.4%)
