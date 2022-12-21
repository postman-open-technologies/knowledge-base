OAS Summary
================
<sup>Last updated: 2022-12-21</sup>

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

Out of 15,562 APIs, 12,018 (77.2%) are valid.

See [validity analysis](oas_validity.md) for further details.

### What are the primary sources of error in APIs?

*This research topic will be initiated shortly*

## Server

### How is the server property used in APIs?

- Out of 12,018 valid APIs, 6,000 (49.9%) have a `servers` property,
  with an average of 1.3 server/entry, and a range of 0-13.

### How often do APIs use localhost vs domain based servers?

- Out of the 7,827 server entries (across all APIs), 1,806 (23.1%)
  contain localhost or 127.0.0.1, and 5,071 (64.8%) use a domain based
  name. 661 (8.4%) use a relative path (no server, just starting with
  /), and the residuals entries are not categorized.
- 2,442 (31.2%) use an <http://> protocol, and 4,375 (55.9%) <https://>.
- *@TODO: compute API level statistics (localhost vs DNS vs mixed)*

## Paths

### How is the path property used in APIs?

- The average number of path per API is 11.3, ranging from 1 to 310.
- Out of the 11,588 APIs with a path, 6,380 (55.1%) have 1-5 paths,
  1,845 (15.9%) have 6-10 paths, 1,743 (15%) have 11-20 paths, 1,143
  (9.9%) have 21-50 paths, and 477 (0.04116327%) have over 50 paths.

See [paths analysis](oas_paths.md) for further details.

## JSON Schema

### What is average number of locally defined JSON objects per API?

- The average number of JSON objects defined locally under /definitions
  (Swagger) or /components/schema (OpenAPI) is 21.7, ranging from 1 to
  642.
- Out of the 9,890 APIs, 4,057 (41%) have 1-5 entries, 1,782 (18%) have
  6-10 entries, 1,500 (15.2%) have 11-20 entries, 1,379 (13.9%) have
  21-50 entries, and 1,172 (11.9%) have over 50 entries.

## Licensing

### How is the license property used in APIs?

- Out of 12,018 valid APIs, 4,038 (33.6%) have a `license` property,
  with 3,617 (30.1%) providing both the `name` and `url`.
- Out of the 89 v3.1 APIs with a license, 4 (4.5%) use the `identifier`
  property (introduced in 3.1).

### What is the breakdown of licenses use by the APIs?

- Analysis based on a simple harmonization method looking at terms in
  the license name and url values indicates that 2,069 (51.2%) of the
  APIs use an Apache license.
- Other notable categories include MIT (16.1%), Creative Commons (8.2%),
  GNU/GPL (4.6%).
- 13.2% are categorized as Other.

## Security

### How are the security related properties used in APIs?

*Note that in OpenAPI versions 3, `securityDefinitions` was renamed to
`securitySchemes` and moved inside `components`, and the `type: basic`
was replaced with `type: http` with `scheme: basic`.*

- Out of 12,018 valid APIs, 2,371 (19.7%) have a `security` property.

- For Swagger (v2.x), out of the 4,587 valid APIs, 1,926 (42%) have a
  `securityDefinitions` property. The `type` is distributed as 1,342
  (46%) apiKey, 1,252 (42.9%) oauth2, and 322 (11%) basic.

- For OpenAPI (v3.x), out of the 7,431 valid APIs, 3,206 (43.1%) have a
  `components/securitySchemes` property. The `type` is distributed as
  1,684 (38%) apiKey, 1,529 (34.5%) http, 1,095 (24.7%) oauth2, 56
  (1.3%) openIdConnect, and 70 (1.6%) empty value.

- As only 836 (18.2%) of v2.x and 1,535 (20.7%) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.

## Responses

### What is the breakdown of status codes in the OpenAPIs responses?

*This research topic will be initiated shortly*
