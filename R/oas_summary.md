OAS Summary
================
<sup>Last updated: 2022-12-14</sup>

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

Out of 11,247 APIs, 8,654 (76.9%) are valid.

See [validity analysis](oas_validity.md) for further details.

### What are the primary sources of error in APIs?

*This research topic will be initiated shortly*

## Server

### How is the server property used in APIs?

- Out of 8,654 valid APIs, 4,382 (50.6%) have a `servers` property, with
  an average of 1.3 server/entry, and a range of 0-14.

### How often do APIs use localhost vs domain based servers?

- Out of the 5,697 server entries (across all APIs), 1,224 (21.5%)
  contain localhost or 127.0.0.1, and 3,768 (66.1%) use a domain based
  name. 493 (8.7%) use a relative path (no server, just starting with
  /), and the residuals entries are not categorized.
- 1,730 (30.4%) use an <http://> protocol, and 3,213 (56.4%) <https://>.
- *@TODO: compute API level statistics (localhost vs DNS vs mixed)*

## Paths

### How is the path property used in APIs?

- The average number of path per API is 11.2, ranging from 1 to 271.
- Out of the 8,415 APIs with a path, 4,684 (55.7%) have 1-5 paths, 1,314
  (15.6%) have 6-10 paths, 1,258 (14.9%) have 11-20 paths, 806 (9.6%)
  have 21-50 paths, and 353 (0.0419489%) have over 50 paths.

See [paths analysis](oas_paths.md) for further details.

## JSON Schema

### What is average number of locally defined JSON objects per API?

- The average number of JSON objects defined locally under /definitions
  (Swagger) or /components/schema (OpenAPI) is 20.8, ranging from 1 to
  642.
- Out of the 7,153 APIs, 2,916 (40.8%) have 1-5 entries, 1,320 (18.5%)
  have 6-10 entries, 1,135 (15.9%) have 11-20 entries, 997 (13.9%) have
  21-50 entries, and 785 (11%) have over 50 entries.

## Licensing

### How is the license property used in APIs?

- Out of 8,654 valid APIs, 2,966 (34.3%) have a `license` property, with
  2,656 (30.7%) providing both the `name` and `url`.
- Out of the 74 v3.1 APIs with a license, 5 (6.8%) use the `identifier`
  property (introduced in 3.1).

### What is the breakdown of licenses use by the APIs?

- Analysis based on a simple harmonization method looking at terms in
  the license name and url values indicates that 1,504 (50.7%) of the
  APIs use an Apache license.
- Other notable categories include MIT (16.9%), Creative Commons (7.8%),
  GNU/GPL (4.7%).
- 12.4% are categorized as Other.

## Security

### How are the security related properties used in APIs?

*Note that in OpenAPI versions 3, `securityDefinitions` was renamed to
`securitySchemes` and moved inside `components`, and the `type: basic`
was replaced with `type: http` with `scheme: basic`.*

- Out of 8,654 valid APIs, 1,635 (18.9%) have a `security` property.

- For Swagger (v2.x), out of the 3,170 valid APIs, 1,329 (41.9%) have a
  `securityDefinitions` property. The `type` is distributed as 916
  (44.7%) oauth2, 882 (43%) apiKey, and 252 (12.3%) basic.

- For OpenAPI (v3.x), out of the 5,484 valid APIs, 2,338 (42.6%) have a
  `components/securitySchemes` property. The `type` is distributed as
  1,246 (39.1%) apiKey, 1,041 (32.7%) http, 834 (26.2%) oauth2, 26
  (0.8%) openIdConnect, and 40 (1.3%) empty value.

- As only 565 (17.8%) of v2.x and 1,070 (19.5%) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.

## Responses

### What is the breakdown of status codes in the OpenAPIs responses?

*This research topic will be initiated shortly*
