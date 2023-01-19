OAS Summary
================
<sup>Last updated: 2023-01-19</sup>

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

- Based on 13,287 valid API specifications, the average JSON size is
  28.5Kb, ranging from \< 1Kb to 526Kb.
- No significant difference is observed between version 2 (27.5Kb) and 3
  (29.1Kb)

## Validity and source of errors

### How many valid OpenAPIs do we have?

<sup>See [validity analysis](oas_validity.md) for further details.<sup>

- Out of 17,318 APIs, 13,287 (76.7%) are valid.

### What are the primary sources of error in APIs?

*This research topic will be initiated shortly*

## Server

<sup>See [servers analysis](oas_servers.md) for further details.</sup>

### How is the server property used in APIs?

- Out of 5,204 valid OpenAPI2 specifications, 3,846 (73.9%) have a
  `host` property, 3,789 (72.8%) have a `basePath` property, and 4,156
  (79.9%) have a `schemes` property.

- Out of 8,083 valid OpenAPI3 specifications, 6,482 (80.2%) have a
  `servers` property, with an average of 1.3 server/entry, and a range
  of 0-13.

### How often do APIs use localhost vs domain based servers?

- Out of the 11,899 host/servers entries (across all APIs), 1,956
  (16.4%) contain localhost or 127.0.0.1, 6,966 (58.5%) use a DNS host,
  and 609 (5.1%) use a variable template (3.x only). 1,390 (11.7%) use a
  relative path (no server specified).
- 4,409 (37.1%) use an http protocol, and 6,831 (57.4%) https.

### What are the most commonly used top level domains?

- The top 3 most commonly used top level domains in our API collection
  are swaggerhub.com (650), azure.com (391), and swagger.io (388).

## Paths

<sup>See [paths analysis](oas_paths.md) for further details.</sup>

### How is the path property used in APIs?

- The average number of path per API is 11.1, ranging from 1 to 327.
- Out of the 12,836 APIs with a path, 7,114 (55.4%) have 1-5 paths,
  2,026 (15.8%) have 6-10 paths, 1,915 (14.9%) have 11-20 paths, 1,275
  (9.9%) have 21-50 paths, and 506 (0.03942038%) have over 50 paths.

## JSON Schema

### What is average number of locally defined JSON objects per API?

- The average number of JSON objects defined locally under /definitions
  (OpenAPI2) or /components/schema (OpenAPI3) is 21.7, ranging from 1 to
  642.
- Out of the 10,916 APIs, 4,505 (41.3%) have 1-5 entries, 1,975 (18.1%)
  have 6-10 entries, 1,649 (15.1%) have 11-20 entries, 1,495 (13.7%)
  have 21-50 entries, and 1,292 (11.8%) have over 50 entries.

## Licensing

### How is the license property used in APIs?

- Out of 13,287 valid APIs, 4,469 (33.6%) have a `license` property,
  with 3,987 (30%) providing both the `name` and `url`.
- Out of the 94 v3.1 APIs with a license, 4 (4.3%) use the `identifier`
  property (introduced in 3.1).

### What is the breakdown of licenses use by the APIs?

- Analysis based on a simple harmonization method looking at terms in
  the license name and url values indicates that 2,273 (50.9%) of the
  APIs use an Apache license.
- Other notable categories include MIT (17.4%), Creative Commons (7.9%),
  GNU/GPL (4.4%).
- 13.2% are categorized as Other.

## Security

### How are the security related properties used in APIs?

<sup>*Note that in OpenAPI3, `securityDefinitions` was renamed to
`securitySchemes` and moved inside `components`, and the `type: basic`
was replaced with `type: http` with `scheme: basic`.*</sup>

- Out of 13,287 valid APIs, 2,559 (19.3%) have a `security` property.

- For OpenAPI2, out of the 5,204 valid APIs, 2,145 (41.2%) have a
  `securityDefinitions` property. The `type` is distributed as 1,478
  (46.1%) apiKey, 1,372 (42.8%) oauth2, and 354 (11%) basic.

- For OpenAPI3, out of the 8,083 valid APIs, 3,445 (42.6%) have a
  `components/securitySchemes` property. The `type` is distributed as
  1,836 (38.7%) apiKey, 1,607 (33.9%) http, 1,163 (24.5%) oauth2, 59
  (1.2%) openIdConnect, and 77 (1.6%) empty value.

- As only 927 (17.8%) of v2.x and 1,632 (20.2%) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.

## Responses

### What is the breakdown of status codes in the OpenAPIs responses?

*This research topic will be initiated shortly*
