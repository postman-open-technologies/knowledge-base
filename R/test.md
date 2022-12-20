Test
================

- Out of 11,975 valid APIs, 2,356 (19.7%) have a `security` property.

- For Swagger (v2.x), out of the 4,570 valid APIs, 1,912 (41.8%) have a
  `securityDefinitions` property. The `type` is distributed as 1,334
  (46%) apiKey, 1,246 (42.9%) oauth2, and 322 (11.1%) basic.

- For OpenAPI (v3.x), out of the 7,405 valid APIs, 3,186 (43%) have a
  `components/securitySchemes` property. The `type` is distributed as
  1,677 (38.1%) apiKey, 1,521 (34.5%) http, 1,080 (24.5%) oauth2, 56
  (1.3%) openIdConnect, and 70 (1.6%) empty value.

- As only 832 (18.2 %) of v2.x and 1,524 (20.6 %) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.
