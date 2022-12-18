Test
================

- Out of 11,754 valid APIs, 2,284 (19.4%) have a `security` property.

- For Swagger (v2.x), out of the 4,540 valid APIs, 1,905 (42%) have a
  `securityDefinitions` property. The `type` is distributed as 1,322
  (45.8%) apiKey, 1,244 (43.1%) oauth2, and 318 (11%) basic.

- For OpenAPI (v3.x), out of the 7,214 valid APIs, 3,095 (42.9%) have a
  `components/securitySchemes` property. The `type` is distributed as
  1,643 (38.7%) apiKey, 1,448 (34.1%) http, 1,066 (25.1%) oauth2, 34
  (0.8%) openIdConnect, and 52 (1.2%) empty value.

- As only 816 (18 %) of v2.x and 1,468 (20.3 %) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.
