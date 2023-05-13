OAS Summary
================
<sup>Last updated: 2023-05-13</sup>

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

- Based on 23,345 valid API specifications, the average JSON size is
  33.7Kb, ranging from \< 1Kb to 7,575Kb.
- No significant difference is observed between version 2 (33.1Kb) and 3
  (34.1Kb)
- Some interesting differences are observed between API from the Postman
  public network vs APIs collected the Internet
- It’s important to keep in mind that assessing API size can be
  challenging as we may do not have the full definition when the
  specification is spread across multiple files

## Validity and source of errors

### How many valid OpenAPIs do we have?

<sup>See [validity analysis](oas_validity.md) for further details.<sup>

- Out of 29,720 APIs, 23,345 (78.5%) are valid.

### What are the primary sources of error in APIs?

*This research topic will be initiated shortly*

## Server

<sup>See [servers analysis](oas_servers.md) for further details.</sup>

### How is the server property used in APIs?

- Out of 7,851 valid OpenAPI2 specifications, 5,958 (75.9%) have a
  `host` property, 5,684 (72.4%) have a `basePath` property, and 6,316
  (80.4%) have a `schemes` property.

- Out of 15,494 valid OpenAPI3 specifications, 12,906 (83.3%) have a
  `servers` property, with an average of 1.2 server/entry, and a range
  of 0-13.

### How often do APIs use localhost vs domain based servers?

- Out of the 20,985 host/servers entries (across all APIs), 4,919
  (23.4%) contain localhost or 127.0.0.1, 12,028 (57.3%) use a DNS host,
  and 807 (3.8%) use a variable template (3.x only). 1,867 (8.9%) use a
  relative path (no server specified).
- 6,823 (32.5%) use an http protocol, and 11,292 (53.8%) https.

### What are the most commonly used top level domains?

- The top 3 most commonly used top level domains in our API collection
  are swagger.io (1,128), swaggerhub.com (1,005), and azure.com (551).

## Paths

<sup>See [paths analysis](oas_paths.md) for further details.</sup>

### How is the path property used in APIs?

- The average number of path per API is 11.9, ranging from 1 to 1,550.
- Out of the 22,809 APIs with a path, 13,800 (60.5%) have 1-5 paths,
  3,078 (13.5%) have 6-10 paths, 3,005 (13.2%) have 11-20 paths, 1,998
  (8.8%) have 21-50 paths, and 928 (0.04068569%) have over 50 paths.

## JSON Schema

### What is average number of locally defined JSON objects per API?

- The average number of JSON objects defined locally under /definitions
  (OpenAPI2) or /components/schema (OpenAPI3) is 20.1, ranging from 1 to
  2,146.
- Out of the 20,093 APIs, 9,918 (49.4%) have 1-5 entries, 3,132 (15.6%)
  have 6-10 entries, 2,634 (13.1%) have 11-20 entries, 2,426 (12.1%)
  have 21-50 entries, and 1,983 (9.9%) have over 50 entries.

## Licensing

### How is the license property used in APIs?

- Out of 23,345 valid APIs, 8,421 (36.1%) have a `license` property,
  with 5,353 (22.9%) providing both the `name` and `url`.
- Out of the 147 v3.1 APIs with a license, 5 (3.4%) use the `identifier`
  property (introduced in 3.1).

### What is the breakdown of licenses use by the APIs?

- Analysis based on a simple harmonization method looking at terms in
  the license name and url values indicates that 3,164 (37.6%) of the
  APIs use an Apache license.
- Other notable categories include MIT (40%), Creative Commons (5.3%),
  GNU/GPL (2.8%).
- 10.7% are categorized as Other.

## Security

### How are the security related properties used in APIs?

<sup>*Note that in OpenAPI3, `securityDefinitions` was renamed to
`securitySchemes` and moved inside `components`, and the `type: basic`
was replaced with `type: http` with `scheme: basic`.*</sup>

- Out of 23,345 valid APIs, 6,835 (29.3%) have a `security` property.

- For OpenAPI2, out of the 7,851 valid APIs, 3,413 (43.5%) have a
  `securityDefinitions` property. The `type` is distributed as 2,235
  (45.9%) apiKey, 2,005 (41.2%) oauth2, and 624 (12.8%) basic.

- For OpenAPI3, out of the 15,494 valid APIs, 8,031 (51.8%) have a
  `components/securitySchemes` property. The `type` is distributed as
  3,199 (32.9%) apiKey, 4,843 (49.8%) http, 1,535 (15.8%) oauth2, 77
  (0.8%) openIdConnect, and 77 (0.8%) empty value.

- As only 1,501 (19.1%) of v2.x and 5,334 (34.4%) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.

## Responses

### What is the breakdown of status codes in the OpenAPIs responses?

<sup>See [paths operations analysis](oas_paths_operations.md) for
further details.<sup>

- Across all 898,451 responses, the most common codes or values are
  `200` 294,619 (32.8%), `400` 99,843 (11.1%), `404` 91,201 (10.2%),
  `401` 81,843 (9.1%), and `500` 66,448 (7.4%)
