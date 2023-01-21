OAS Summary
================
<sup>Last updated: 2023-01-21</sup>

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

- Based on 20,720 valid API specifications, the average JSON size is
  36Kb, ranging from \< 1Kb to 7,575Kb.
- No significant difference is observed between version 2 (36.8Kb) and 3
  (35.7Kb)

## Validity and source of errors

### How many valid OpenAPIs do we have?

<sup>See [validity analysis](oas_validity.md) for further details.<sup>

- Out of 26,051 APIs, 20,720 (79.5%) are valid.

### What are the primary sources of error in APIs?

*This research topic will be initiated shortly*

## Server

<sup>See [servers analysis](oas_servers.md) for further details.</sup>

### How is the server property used in APIs?

- Out of 6,500 valid OpenAPI2 specifications, 4,930 (75.8%) have a
  `host` property, 4,789 (73.7%) have a `basePath` property, and 5,217
  (80.3%) have a `schemes` property.

- Out of 14,220 valid OpenAPI3 specifications, 11,902 (83.7%) have a
  `servers` property, with an average of 1.2 server/entry, and a range
  of 0-13.

### How often do APIs use localhost vs domain based servers?

- Out of the 18,613 host/servers entries (across all APIs), 4,619
  (24.8%) contain localhost or 127.0.0.1, 10,495 (56.4%) use a DNS host,
  and 733 (3.9%) use a variable template (3.x only). 1,578 (8.5%) use a
  relative path (no server specified).
- 5,924 (31.8%) use an http protocol, and 9,920 (53.3%) https.

### What are the most commonly used top level domains?

- The top 3 most commonly used top level domains in our API collection
  are swagger.io (1,024), swaggerhub.com (949), and pstmn.io (529).

## Paths

<sup>See [paths analysis](oas_paths.md) for further details.</sup>

### How is the path property used in APIs?

- The average number of path per API is 12.4, ranging from 1 to 1,550.
- Out of the 20,244 APIs with a path, 12,255 (60.5%) have 1-5 paths,
  2,684 (13.3%) have 6-10 paths, 2,596 (12.8%) have 11-20 paths, 1,813
  (9%) have 21-50 paths, and 896 (0.04426003%) have over 50 paths.

## JSON Schema

### What is average number of locally defined JSON objects per API?

- The average number of JSON objects defined locally under /definitions
  (OpenAPI2) or /components/schema (OpenAPI3) is 21, ranging from 1 to
  2,146.
- Out of the 17,883 APIs, 9,005 (50.4%) have 1-5 entries, 2,711 (15.2%)
  have 6-10 entries, 2,203 (12.3%) have 11-20 entries, 2,070 (11.6%)
  have 21-50 entries, and 1,894 (10.6%) have over 50 entries.

## Licensing

### How is the license property used in APIs?

- Out of 20,720 valid APIs, 7,578 (36.6%) have a `license` property,
  with 4,580 (22.1%) providing both the `name` and `url`.
- Out of the 138 v3.1 APIs with a license, 5 (3.6%) use the `identifier`
  property (introduced in 3.1).

### What is the breakdown of licenses use by the APIs?

- Analysis based on a simple harmonization method looking at terms in
  the license name and url values indicates that 2,666 (35.2%) of the
  APIs use an Apache license.
- Other notable categories include MIT (43.1%), Creative Commons (4.9%),
  GNU/GPL (2.9%).
- 10% are categorized as Other.

## Security

### How are the security related properties used in APIs?

<sup>*Note that in OpenAPI3, `securityDefinitions` was renamed to
`securitySchemes` and moved inside `components`, and the `type: basic`
was replaced with `type: http` with `scheme: basic`.*</sup>

- Out of 20,720 valid APIs, 6,304 (30.4%) have a `security` property.

- For OpenAPI2, out of the 6,500 valid APIs, 2,843 (43.7%) have a
  `securityDefinitions` property. The `type` is distributed as 1,958
  (46.9%) apiKey, 1,692 (40.5%) oauth2, and 523 (12.5%) basic.

- For OpenAPI3, out of the 14,220 valid APIs, 7,499 (52.7%) have a
  `components/securitySchemes` property. The `type` is distributed as
  2,927 (32.3%) apiKey, 4,612 (50.9%) http, 1,375 (15.2%) oauth2, 77
  (0.8%) openIdConnect, and 77 (0.8%) empty value.

- As only 1,248 (19.2%) of v2.x and 5,056 (35.6%) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.

## Responses

### What is the breakdown of status codes in the OpenAPIs responses?

*This research topic will be initiated shortly*
