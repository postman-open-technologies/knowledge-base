OAS Servers Analysis
================
<sup>Last updated: 2022-12-22</sup>

- <a href="#overview" id="toc-overview">Overview</a>
- <a href="#findings" id="toc-findings">Findings</a>
  - <a href="#how-is-the-server-property-used-in-apis"
    id="toc-how-is-the-server-property-used-in-apis">How is the server
    property used in APIs?</a>
  - <a href="#how-often-do-apis-use-localhost-vs-domain-based-servers"
    id="toc-how-often-do-apis-use-localhost-vs-domain-based-servers">How
    often do APIs use localhost vs domain based servers?</a>
- <a href="#methodology" id="toc-methodology">Methodology</a>

<sup>*DISCLAIMER: the results and findings below are preliminary and
have not been fully validated or peer reviewed. Use with care. Do not
quote or disseminate.*</sup> <sup>[View issues related to
oas:servers](https://github.com/postman-open-technologies/knowledge-base/labels/oas%3Aservers)</sup>

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

\#`{r, child=c('oas_servers_summary.section.Rmd')} #`

## How often do APIs use localhost vs domain based servers?

- Out of the 10,917 server entries (across all APIs), 1,849 (16.9%)
  contain localhost or 127.0.0.1, 6,417 (58.8%) use a DNS host, and 530
  (4.9%) use a variable template (3.x only). 1,291 (11.8%) use a
  relative path (no server specified).
- 4,039 (37%) use an <http://> protocol, and 6,339 (58.1%) <https://>.

*@TODO: compute API level statistics (localhost vs DNS vs mixed)*

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
