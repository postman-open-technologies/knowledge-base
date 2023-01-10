OAS Summary
================
<sup>Last updated: 2023-01-10</sup>

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

- Based on 12,116 valid API specifications, the average JSON size is
  28.8Kb, ranging from \< 1Kb to 526Kb.
- No significant difference is observed between version 2 (28.8Kb) and 3
  (29.3Kb)

## Validity and source of errors

### How many valid OpenAPIs do we have?

<sup>See [validity analysis](oas_validity.md) for further details.<sup>

- Out of 15,674 APIs, 12,116 (77.3%) are valid.

### What are the primary sources of error in APIs?

*This research topic will be initiated shortly*

## Server

<sup>See [servers analysis](oas_servers.md) for further details.</sup>

### How is the server property used in APIs?

- Out of 4,630 valid OpenAPI version 2.x specifications, 3,419 (73.8%)
  have a `host` property, 3,395 (73.3%) have a `basePath` property, and
  3,740 (80.8%) have a `schemes` property.

- Out of 7,486 valid OpenAPI version 3.x specifications, 6,046 (80.8%)
  have a `servers` property, with an average of 1.3 server/entry, and a
  range of 0-13.

### How often do APIs use localhost vs domain based servers?

- Out of the 10,942 host/servers entries (across all APIs), 1,848
  (16.9%) contain localhost or 127.0.0.1, 6,439 (58.8%) use a DNS host,
  and 533 (4.9%) use a variable template (3.x only). 1,290 (11.8%) use a
  relative path (no server specified).
- 4,053 (37%) use an http protocol, and 6,353 (58.1%) https.

### What are the most commonly used top level domains?

- The top 3 most commonly used top level domains in our API collection
  are swaggerhub.com (616), azure.com (357), and swagger.io (337).

## Paths

<sup>See [paths analysis](oas_paths.md) for further details.</sup>

### How is the path property used in APIs?

- The average number of path per API is 11.2, ranging from 1 to 310.
- Out of the 11,680 APIs with a path, 6,416 (54.9%) have 1-5 paths,
  1,861 (15.9%) have 6-10 paths, 1,779 (15.2%) have 11-20 paths, 1,149
  (9.8%) have 21-50 paths, and 475 (0.04066781%) have over 50 paths.

## JSON Schema

### What is average number of locally defined JSON objects per API?

- The average number of JSON objects defined locally under /definitions
  (Swagger) or /components/schema (OpenAPI) is 21.8, ranging from 1 to
  642.
- Out of the 9,977 APIs, 4,079 (40.9%) have 1-5 entries, 1,793 (18%)
  have 6-10 entries, 1,524 (15.3%) have 11-20 entries, 1,396 (14%) have
  21-50 entries, and 1,185 (11.9%) have over 50 entries.

## Licensing

### How is the license property used in APIs?

- Out of 12,116 valid APIs, 4,081 (33.7%) have a `license` property,
  with 3,659 (30.2%) providing both the `name` and `url`.
- Out of the 90 v3.1 APIs with a license, 4 (4.4%) use the `identifier`
  property (introduced in 3.1).

### What is the breakdown of licenses use by the APIs?

- Analysis based on a simple harmonization method looking at terms in
  the license name and url values indicates that 2,078 (50.9%) of the
  APIs use an Apache license.
- Other notable categories include MIT (16.1%), Creative Commons (8.2%),
  GNU/GPL (4.6%).
- 13.5% are categorized as Other.

## Security

### How are the security related properties used in APIs?

<sup>*Note that in OpenAPI versions 3, `securityDefinitions` was renamed
to `securitySchemes` and moved inside `components`, and the
`type: basic` was replaced with `type: http` with
`scheme: basic`.*</sup>

- Out of 12,116 valid APIs, 2,385 (19.7%) have a `security` property.

- For Swagger (v2.x), out of the 4,630 valid APIs, 1,931 (41.7%) have a
  `securityDefinitions` property. The `type` is distributed as 1,340
  (45.9%) apiKey, 1,261 (43.2%) oauth2, and 320 (11%) basic.

- For OpenAPI (v3.x), out of the 7,486 valid APIs, 3,231 (43.2%) have a
  `components/securitySchemes` property. The `type` is distributed as
  1,700 (38.1%) apiKey, 1,532 (34.3%) http, 1,107 (24.8%) oauth2, 56
  (1.3%) openIdConnect, and 70 (1.6%) empty value.

- As only 834 (18%) of v2.x and 1,551 (20.7%) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.

## Responses

### What is the breakdown of status codes in the OpenAPIs responses?

*This research topic will be initiated shortly*
