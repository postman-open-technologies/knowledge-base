OAS Summary
================
<sup>Last updated: 2022-12-18</sup>

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

## Validity and source of errors

### How many valid OpenAPIs do we have?

Out of 15,249 APIs, 11,754 (77.1%) are valid.

See [validity analysis](oas_validity.md) for further details.

### What are the primary sources of error in APIs?

*This research topic will be initiated shortly*

## Server

### How is the server property used in APIs?

- Out of 11,754 valid APIs, 5,817 (49.5%) have a `servers` property,
  with an average of 1.3 server/entry, and a range of 0-14.

### How often do APIs use localhost vs domain based servers?

- Out of the 7,594 server entries (across all APIs), 1,762 (23.2%)
  contain localhost or 127.0.0.1, and 4,945 (65.1%) use a domain based
  name. 599 (7.9%) use a relative path (no server, just starting with
  /), and the residuals entries are not categorized.
- 2,362 (31.1%) use an <http://> protocol, and 4,286 (56.4%) <https://>.
- *@TODO: compute API level statistics (localhost vs DNS vs mixed)*

## Paths

### How is the path property used in APIs?

- The average number of path per API is 11.2, ranging from 1 to 271.
- Out of the 11,337 APIs with a path, 6,238 (55%) have 1-5 paths, 1,806
  (15.9%) have 6-10 paths, 1,719 (15.2%) have 11-20 paths, 1,103 (9.7%)
  have 21-50 paths, and 471 (0.04154538%) have over 50 paths.

See [paths analysis](oas_paths.md) for further details.

## JSON Schema

### What is average number of locally defined JSON objects per API?

- The average number of JSON objects defined locally under /definitions
  (Swagger) or /components/schema (OpenAPI) is 21.8, ranging from 1 to
  642.
- Out of the 9,677 APIs, 3,958 (40.9%) have 1-5 entries, 1,743 (18%)
  have 6-10 entries, 1,465 (15.1%) have 11-20 entries, 1,372 (14.2%)
  have 21-50 entries, and 1,139 (11.8%) have over 50 entries.

## Licensing

### How is the license property used in APIs?

- Out of 11,754 valid APIs, 3,920 (33.4%) have a `license` property,
  with 3,504 (29.8%) providing both the `name` and `url`.
- Out of the 86 v3.1 APIs with a license, 5 (5.8%) use the `identifier`
  property (introduced in 3.1).

### What is the breakdown of licenses use by the APIs?

- Analysis based on a simple harmonization method looking at terms in
  the license name and url values indicates that 2,002 (51.1%) of the
  APIs use an Apache license.
- Other notable categories include MIT (16.2%), Creative Commons (8.5%),
  GNU/GPL (4.7%).
- 12.8% are categorized as Other.

## Security

### How are the security related properties used in APIs?

*Note that in OpenAPI versions 3, `securityDefinitions` was renamed to
`securitySchemes` and moved inside `components`, and the `type: basic`
was replaced with `type: http` with `scheme: basic`.*

- Out of 11,754 valid APIs, 2,284 (19.4%) have a `security` property.

- For Swagger (v2.x), out of the 4,540 valid APIs, 1,905 (42%) have a
  `securityDefinitions` property. The `type` is distributed as 1,322
  (45.8%) apiKey, 1,244 (43.1%) oauth2, and 318 (11%) basic.

- For OpenAPI (v3.x), out of the 7,214 valid APIs, 3,095 (42.9%) have a
  `components/securitySchemes` property. The `type` is distributed as
  1,643 (38.7%) apiKey, 1,448 (34.1%) http, 1,066 (25.1%) oauth2, 34
  (0.8%) openIdConnect, and 52 (1.2%) empty value.

- As only 816 (18%) of v2.x and 1,468 (20.3%) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.

## Responses

### What is the breakdown of status codes in the OpenAPIs responses?

*This research topic will be initiated shortly*
