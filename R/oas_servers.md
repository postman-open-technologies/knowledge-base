OAS Servers Analysis
================
<sup>Last updated: 2023-01-20</sup>

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

- Out of 5,204 valid OpenAPI2 specifications, 3,846 (73.9%) have a
  `host` property, 3,789 (72.8%) have a `basePath` property, and 4,156
  (79.9%) have a `schemes` property.

- Out of 8,083 valid OpenAPI3 specifications, 6,482 (80.2%) have a
  `servers` property, with an average of 1.3 server/entry, and a range
  of 0-13.

## How often do APIs use localhost vs domain based servers?

- Out of the 11,899 host/servers entries (across all APIs), 1,956
  (16.4%) contain localhost or 127.0.0.1, 6,966 (58.5%) use a DNS host,
  and 609 (5.1%) use a variable template (3.x only). 1,390 (11.7%) use a
  relative path (no server specified).
- 4,409 (37.1%) use an http protocol, and 6,831 (57.4%) https.

## What are the most commonly used top level domains for APIs?

The following 10 top level domains are the most commonly used in our
APIs collection. See [top level domains](oas_servers_tld.md) for a more
comprehensive list.

| Rank | Domain              | \#APIs |
|------|---------------------|--------|
| 1    | swaggerhub.com      | 650    |
| 2    | azure.com           | 391    |
| 3    | swagger.io          | 388    |
| 4    | herokuapp.com       | 246    |
| 5    | example.com         | 196    |
| 6    | googleapis.com      | 146    |
| 7    | openweathermap.org  | 102    |
| 8    | azurestack.external | 96     |
| 9    | microsoft.com       | 93     |
| 10   | wordnik.com         | 71     |

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
