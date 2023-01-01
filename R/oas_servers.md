OAS Servers Analysis
================
<sup>Last updated: 2023-01-01</sup>

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
`schemes` properties used in OpenAPI 2. This differences between both
versions add a bit to the complexity of the analysis. Note that more
server entries may appears in the 3.x versions as the version 2.x was
essentially limited to a single server entry (with multiple protocols).
Version 3.x also introduced server variables which may obfuscate values
for the host and other components of the URL.

# Findings

## How is the server property used in APIs?

- Out of 4,625 valid OpenAPI version 2.x specifications, 3,411 (73.8%)
  have a `host` property, 3,388 (73.3%) have a `basePath` property, and
  3,734 (80.7%) have a `schemes` property.

- Out of 7,468 valid OpenAPI version 3.x specifications, 6,031 (80.8%)
  have a `servers` property, with an average of 1.3 server/entry, and a
  range of 0-13.

## How often do APIs use localhost vs domain based servers?

- Out of the 10,922 host/servers entries (across all APIs), 1,843
  (16.9%) contain localhost or 127.0.0.1, 6,432 (58.9%) use a DNS host,
  and 530 (4.9%) use a variable template (3.x only). 1,289 (11.8%) use a
  relative path (no server specified).
- 4,044 (37%) use an <http://> protocol, and 6,346 (58.1%) <https://>.

*@TODO: compute API level statistics (localhost vs DNS vs mixed)*

## What are the most commonly used top level domains for APIs?

The following 10 top level domains are the most commonly used in our
APIs collection. See [top level domains](oas_servers_tld.md) for a more
comprehensive list.

| Rank | Domain              | \#APIs |
|------|---------------------|--------|
| 1    | swaggerhub.com      | 615    |
| 2    | azure.com           | 356    |
| 3    | swagger.io          | 338    |
| 4    | herokuapp.com       | 221    |
| 5    | example.com         | 192    |
| 6    | googleapis.com      | 138    |
| 7    | openweathermap.org  | 100    |
| 8    | microsoft.com       | 92     |
| 9    | azurestack.external | 82     |
| 10   | wordnik.com         | 62     |

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
