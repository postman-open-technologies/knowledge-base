OAS Summary
================
<sup>Last updated: 2022-12-20</sup>

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

Out of 15,507 APIs, 11,975 (77.2%) are valid.

See [validity analysis](oas_validity.md) for further details.

### What are the primary sources of error in APIs?

*This research topic will be initiated shortly*

## Server

### How is the server property used in APIs?

- Out of 11,975 valid APIs, 5,973 (49.9%) have a `servers` property,
  with an average of 1.3 server/entry, and a range of 0-13.

### How often do APIs use localhost vs domain based servers?

- Out of the 7,794 server entries (across all APIs), 1,807 (23.2%)
  contain localhost or 127.0.0.1, and 5,039 (64.7%) use a domain based
  name. 658 (8.4%) use a relative path (no server, just starting with
  /), and the residuals entries are not categorized.
- 2,435 (31.2%) use an <http://> protocol, and 4,351 (55.8%) <https://>.
- *@TODO: compute API level statistics (localhost vs DNS vs mixed)*

## Paths

### How is the path property used in APIs?

- The average number of path per API is 11.3, ranging from 1 to 310.
- Out of the 11,551 APIs with a path, 6,373 (55.2%) have 1-5 paths,
  1,832 (15.9%) have 6-10 paths, 1,732 (15%) have 11-20 paths, 1,137
  (9.8%) have 21-50 paths, and 477 (0.04129513%) have over 50 paths.

See [paths analysis](oas_paths.md) for further details.

## JSON Schema

### What is average number of locally defined JSON objects per API?

- The average number of JSON objects defined locally under /definitions
  (Swagger) or /components/schema (OpenAPI) is 21.8, ranging from 1 to
  642.
- Out of the 9,847 APIs, 4,041 (41%) have 1-5 entries, 1,769 (18%) have
  6-10 entries, 1,495 (15.2%) have 11-20 entries, 1,374 (14%) have 21-50
  entries, and 1,168 (11.9%) have over 50 entries.

## Licensing

### How is the license property used in APIs?

- Out of 11,975 valid APIs, 4,042 (33.8%) have a `license` property,
  with 3,619 (30.2%) providing both the `name` and `url`.
- Out of the 89 v3.1 APIs with a license, 5 (5.6%) use the `identifier`
  property (introduced in 3.1).

### What is the breakdown of licenses use by the APIs?

- Analysis based on a simple harmonization method looking at terms in
  the license name and url values indicates that 2,066 (51.1%) of the
  APIs use an Apache license.
- Other notable categories include MIT (16.2%), Creative Commons (8.1%),
  GNU/GPL (4.6%).
- 13.3% are categorized as Other.

## Security

### How are the security related properties used in APIs?

*Note that in OpenAPI versions 3, `securityDefinitions` was renamed to
`securitySchemes` and moved inside `components`, and the `type: basic`
was replaced with `type: http` with `scheme: basic`.*

- Out of 11,975 valid APIs, 2,356 (19.7%) have a `security` property.

- For Swagger (v2.x), out of the 4,570 valid APIs, 1,912 (41.8%) have a
  `securityDefinitions` property. The `type` is distributed as 1,334
  (46%) apiKey, 1,246 (42.9%) oauth2, and 322 (11.1%) basic.

- For OpenAPI (v3.x), out of the 7,405 valid APIs, 3,186 (43%) have a
  `components/securitySchemes` property. The `type` is distributed as
  1,677 (38.1%) apiKey, 1,521 (34.5%) http, 1,080 (24.5%) oauth2, 56
  (1.3%) openIdConnect, and 70 (1.6%) empty value.

- As only 832 (18.2%) of v2.x and 1,524 (20.6%) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.

## Responses

### What is the breakdown of status codes in the OpenAPIs responses?

*This research topic will be initiated shortly*
