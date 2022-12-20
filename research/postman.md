# Postman

This document captures ideas /suggestions around new functionalities or enhancements that could be introduced in Postman platform to address some of the issues and overall increase the quality of APIs.

### Licensing

- We need to encourage the use of license (currently under 35%)
- License name is an open text string, but could be used to provide an [SPDX](https://spdx.dev/) license identifier or harmonized/common names for version prior to 3.1
- In version 3.1.x, we should promote the use of the identifier property (in which case the url should not be used)
- We should introduce governance rules to ensure the use of license, and enforce harmonized names, common license URLs, and SPDX identifiers
- Having a license picker or wizard in the Postman UI would go a long way in improving licensing (rather that having to type these values in).

### Security
- The use if security is low, we need to encourage this more. 
- Findings indicate that a significant portion of the security schemes are not being used. This should
- The recently introduced governance rules are a good step in this direction. Can we do more?

### Server
- We should have governance rule in place to warn if no servers are specified, or for high number of servers
- We could have a utility that resolve server name and perform a ping check

