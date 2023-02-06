OAS Summary
================
<sup>Last updated: 2023-02-06</sup>

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

- Based on 21,601 valid API specifications, the average JSON size is
  35.1Kb, ranging from \< 1Kb to 7,575Kb.
- No significant difference is observed between version 2 (35.3Kb) and 3
  (35Kb)

## Validity and source of errors

### How many valid OpenAPIs do we have?

<sup>See [validity analysis](oas_validity.md) for further details.<sup>

- Out of 27,236 APIs, 21,601 (79.3%) are valid.

### What are the primary sources of error in APIs?

*This research topic will be initiated shortly*

## Server

<sup>See [servers analysis](oas_servers.md) for further details.</sup>

### How is the server property used in APIs?

- Out of 6,936 valid OpenAPI2 specifications, 5,266 (75.9%) have a
  `host` property, 5,099 (73.5%) have a `basePath` property, and 5,595
  (80.7%) have a `schemes` property.

- Out of 14,665 valid OpenAPI3 specifications, 12,256 (83.6%) have a
  `servers` property, with an average of 1.2 server/entry, and a range
  of 0-13.

### How often do APIs use localhost vs domain based servers?

- Out of the 19,428 host/servers entries (across all APIs), 4,750
  (24.4%) contain localhost or 127.0.0.1, 11,007 (56.7%) use a DNS host,
  and 748 (3.9%) use a variable template (3.x only). 1,666 (8.6%) use a
  relative path (no server specified).
- 6,285 (32.4%) use an http protocol, and 10,392 (53.5%) https.

### What are the most commonly used top level domains?

- The top 3 most commonly used top level domains in our API collection
  are swagger.io (1,052), swaggerhub.com (978), and pstmn.io (529).

## Paths

<sup>See [paths analysis](oas_paths.md) for further details.</sup>

### How is the path property used in APIs?

- The average number of path per API is 12.2, ranging from 1 to 1,550.
- Out of the 21,106 APIs with a path, 12,821 (60.7%) have 1-5 paths,
  2,798 (13.3%) have 6-10 paths, 2,718 (12.9%) have 11-20 paths, 1,869
  (8.9%) have 21-50 paths, and 900 (0.0426419%) have over 50 paths.

## JSON Schema

### What is average number of locally defined JSON objects per API?

- The average number of JSON objects defined locally under /definitions
  (OpenAPI2) or /components/schema (OpenAPI3) is 20.6, ranging from 1 to
  2,146.
- Out of the 18,624 APIs, 9,325 (50.1%) have 1-5 entries, 2,866 (15.4%)
  have 6-10 entries, 2,346 (12.6%) have 11-20 entries, 2,173 (11.7%)
  have 21-50 entries, and 1,914 (10.3%) have over 50 entries.

## Licensing

### How is the license property used in APIs?

- Out of 21,601 valid APIs, 7,893 (36.5%) have a `license` property,
  with 4,874 (22.6%) providing both the `name` and `url`.
- Out of the 141 v3.1 APIs with a license, 5 (3.5%) use the `identifier`
  property (introduced in 3.1).

### What is the breakdown of licenses use by the APIs?

- Analysis based on a simple harmonization method looking at terms in
  the license name and url values indicates that 2,857 (36.2%) of the
  APIs use an Apache license.
- Other notable categories include MIT (41.8%), Creative Commons (5.2%),
  GNU/GPL (2.8%).
- 10.2% are categorized as Other.

## Security

### How are the security related properties used in APIs?

<sup>*Note that in OpenAPI3, `securityDefinitions` was renamed to
`securitySchemes` and moved inside `components`, and the `type: basic`
was replaced with `type: http` with `scheme: basic`.*</sup>

- Out of 21,601 valid APIs, 6,483 (30%) have a `security` property.

- For OpenAPI2, out of the 6,936 valid APIs, 3,022 (43.6%) have a
  `securityDefinitions` property. The `type` is distributed as 2,023
  (46.1%) apiKey, 1,805 (41.2%) oauth2, and 556 (12.7%) basic.

- For OpenAPI3, out of the 14,665 valid APIs, 7,663 (52.3%) have a
  `components/securitySchemes` property. The `type` is distributed as
  3,012 (32.5%) apiKey, 4,673 (50.4%) http, 1,428 (15.4%) oauth2, 77
  (0.8%) openIdConnect, and 77 (0.8%) empty value.

- As only 1,351 (19.5%) of v2.x and 5,132 (35%) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.

## Responses

### What is the breakdown of status codes in the OpenAPIs responses?

<sup>See [paths operations analysis](oas_paths_operations.md) for
further details.<sup>

- Across all 854,944 responses, the most common codes or values are
  `200` 279,647 (32.7%), `400` 95,199 (11.1%), `404` 86,550 (10.1%),
  `401` 77,596 (9.1%), and `403` 62,919 (7.4%)
