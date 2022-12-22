Test
================

- Out of 12,085 valid APIs, 2,380 (19.7%) have a `security` property.

- For Swagger (v2.x), out of the 4,627 valid APIs, 1,938 (41.9%) have a
  `securityDefinitions` property. The `type` is distributed as 1,346
  (46%) apiKey, 1,262 (43.1%) oauth2, and 320 (10.9%) basic.

- For OpenAPI (v3.x), out of the 7,458 valid APIs, 3,217 (43.1%) have a
  `components/securitySchemes` property. The `type` is distributed as
  1,685 (37.9%) apiKey, 1,531 (34.4%) http, 1,104 (24.8%) oauth2, 56
  (1.3%) openIdConnect, and 70 (1.6%) empty value.

- As only 838 (18.1 %) of v2.x and 1,542 (20.7 %) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.
