OAS Summary
================
<sup>Last updated: 2022-12-19</sup>

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

Out of 15,359 APIs, 11,847 (77.1%) are valid.

See [validity analysis](oas_validity.md) for further details.

### What are the primary sources of error in APIs?

*This research topic will be initiated shortly*

## Server

### How is the server property used in APIs?

- Out of 11,847 valid APIs, 5,870 (49.5%) have a `servers` property,
  with an average of 1.3 server/entry, and a range of 0-14.

### How often do APIs use localhost vs domain based servers?

- Out of the 7,660 server entries (across all APIs), 1,772 (23.1%)
  contain localhost or 127.0.0.1, and 4,978 (65%) use a domain based
  name. 621 (8.1%) use a relative path (no server, just starting with
  /), and the residuals entries are not categorized.
- 2,373 (31%) use an <http://> protocol, and 4,317 (56.4%) <https://>.
- *@TODO: compute API level statistics (localhost vs DNS vs mixed)*

## Paths

### How is the path property used in APIs?

- The average number of path per API is 11.2, ranging from 1 to 271.
- Out of the 11,425 APIs with a path, 6,304 (55.2%) have 1-5 paths,
  1,807 (15.8%) have 6-10 paths, 1,731 (15.2%) have 11-20 paths, 1,114
  (9.8%) have 21-50 paths, and 469 (0.04105033%) have over 50 paths.

See [paths analysis](oas_paths.md) for further details.

## JSON Schema

### What is average number of locally defined JSON objects per API?

- The average number of JSON objects defined locally under /definitions
  (Swagger) or /components/schema (OpenAPI) is 21.7, ranging from 1 to
  642.
- Out of the 9,736 APIs, 3,985 (40.9%) have 1-5 entries, 1,756 (18%)
  have 6-10 entries, 1,485 (15.3%) have 11-20 entries, 1,367 (14%) have
  21-50 entries, and 1,143 (11.7%) have over 50 entries.

## Licensing

### How is the license property used in APIs?

- Out of 11,847 valid APIs, 3,970 (33.5%) have a `license` property,
  with 3,552 (30%) providing both the `name` and `url`.
- Out of the 87 v3.1 APIs with a license, 5 (5.7%) use the `identifier`
  property (introduced in 3.1).

### What is the breakdown of licenses use by the APIs?

- Analysis based on a simple harmonization method looking at terms in
  the license name and url values indicates that 2,022 (50.9%) of the
  APIs use an Apache license.
- Other notable categories include MIT (16.1%), Creative Commons (8.4%),
  GNU/GPL (4.6%).
- 13% are categorized as Other.

## Security

### How are the security related properties used in APIs?

*Note that in OpenAPI versions 3, `securityDefinitions` was renamed to
`securitySchemes` and moved inside `components`, and the `type: basic`
was replaced with `type: http` with `scheme: basic`.*

- Out of 11,847 valid APIs, 2,303 (19.4%) have a `security` property.

- For Swagger (v2.x), out of the 4,556 valid APIs, 1,911 (41.9%) have a
  `securityDefinitions` property. The `type` is distributed as 1,326
  (45.8%) apiKey, 1,252 (43.2%) oauth2, and 319 (11%) basic.

- For OpenAPI (v3.x), out of the 7,291 valid APIs, 3,123 (42.8%) have a
  `components/securitySchemes` property. The `type` is distributed as
  1,654 (38.6%) apiKey, 1,461 (34.1%) http, 1,079 (25.2%) oauth2, 34
  (0.8%) openIdConnect, and 52 (1.2%) empty value.

- As only 823 (18.1%) of v2.x and 1,480 (20.3%) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.

## Responses

### What is the breakdown of status codes in the OpenAPIs responses?

*This research topic will be initiated shortly*
