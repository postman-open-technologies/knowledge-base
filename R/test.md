Test
================

- Out of 12,018 valid APIs, 2,371 (19.7%) have a `security` property.

- For Swagger (v2.x), out of the 4,587 valid APIs, 1,926 (42%) have a
  `securityDefinitions` property. The `type` is distributed as 1,342
  (46%) apiKey, 1,252 (42.9%) oauth2, and 322 (11%) basic.

- For OpenAPI (v3.x), out of the 7,431 valid APIs, 3,206 (43.1%) have a
  `components/securitySchemes` property. The `type` is distributed as
  1,684 (38%) apiKey, 1,529 (34.5%) http, 1,095 (24.7%) oauth2, 56
  (1.3%) openIdConnect, and 70 (1.6%) empty value.

- As only 836 (18.2 %) of v2.x and 1,535 (20.7 %) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.
