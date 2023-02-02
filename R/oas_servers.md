OAS Servers Analysis
================
<sup>Last updated: 2023-02-02</sup>

- <a href="#overview" id="toc-overview">Overview</a>
- <a href="#findings" id="toc-findings">Findings</a>
  - <a href="#how-is-the-server-property-used-in-apis"
    id="toc-how-is-the-server-property-used-in-apis">How is the server
    property used in APIs?</a>
  - <a href="#how-often-do-apis-use-localhost-vs-domain-based-servers"
    id="toc-how-often-do-apis-use-localhost-vs-domain-based-servers">How
    often do APIs use localhost vs domain based servers?</a>
  - <a href="#what-are-the-most-commonly-used-top-level-domains-for-apis"
    id="toc-what-are-the-most-commonly-used-top-level-domains-for-apis">What
    are the most commonly used top level domains for APIs?</a>
- <a href="#methodology" id="toc-methodology">Methodology</a>

<sup>*DISCLAIMER: the results and findings below are preliminary and
have not been fully validated or peer reviewed. Use with care. Do not
quote or disseminate.*</sup>

<sup>[Back to summary](oas_summary.md) \| [View related
issues](https://github.com/postman-open-technologies/knowledge-base/labels/oas%3Aservers)</sup>

# Overview

The `servers` property in OpenAPI provide connectivity information to
target server(s) for the API. It replaces the `host`, `basePath` and
`schemes` properties used in OpenAPI2. This differences between both
versions add a bit to the complexity of the analysis. Note that more
server entries may appears in the 3.x versions as the version 2.x was
essentially limited to a single server entry (with multiple protocols).
Version 3.x also introduced server variables which may obfuscate values
for the host and other components of the URL.

# Findings

## How is the server property used in APIs?

- Out of 6,936 valid OpenAPI2 specifications, 5,266 (75.9%) have a
  `host` property, 5,099 (73.5%) have a `basePath` property, and 5,595
  (80.7%) have a `schemes` property.

- Out of 14,665 valid OpenAPI3 specifications, 12,256 (83.6%) have a
  `servers` property, with an average of 1.2 server/entry, and a range
  of 0-13.

## How often do APIs use localhost vs domain based servers?

- Out of the 19,428 host/servers entries (across all APIs), 4,750
  (24.4%) contain localhost or 127.0.0.1, 11,007 (56.7%) use a DNS host,
  and 748 (3.9%) use a variable template (3.x only). 1,666 (8.6%) use a
  relative path (no server specified).
- 6,285 (32.4%) use an http protocol, and 10,392 (53.5%) https.

## What are the most commonly used top level domains for APIs?

The following 10 top level domains are the most commonly used in our
APIs collection. See [top level domains](oas_servers_tld.md) for a more
comprehensive list.

| Rank | Domain         | \#APIs |
|------|----------------|--------|
| 1    | swagger.io     | 1052   |
| 2    | swaggerhub.com | 978    |
| 3    | pstmn.io       | 529    |
| 4    | azure.com      | 461    |
| 5    | herokuapp.com  | 300    |
| 6    | example.com    | 220    |
| 7    | googleapis.com | 174    |
| 8    | amazonaws.com  | 159    |
| 9    | breakable.com  | 156    |
| 10   | amazon.com     | 144    |

# Methodology

Results are based on the content and count of entries in the `/servers`
property in the OpenAPI 3.x specification, and its equivalent in version
2.0.

For the purpose of categorization across, we extract the host, protocol,
and base name from all servers entries in 3.x to align on the 2.0
version

The host is then categorized as local if the name contains `localhost`
or `127.0.0.1`, and dns based if it is a valid domain name. This
therefore excludes relative paths as well as entries that use variable
templates.

The top level domain names statistics, we derived the entries from the
`host` and `servers` properties present in the API specifications,
excluding local and IP based hosts. The query uses a distinct clause to
prevent multiple counts withing the same as API.
