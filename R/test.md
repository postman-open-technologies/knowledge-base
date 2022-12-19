Test
================

- Out of 11,847 valid APIs, 2,303 (19.4%) have a `security` property.

- For Swagger (v2.x), out of the 4,556 valid APIs, 1,911 (41.9%) have a
  `securityDefinitions` property. The `type` is distributed as 1,326
  (45.8%) apiKey, 1,252 (43.2%) oauth2, and 319 (11%) basic.

- For OpenAPI (v3.x), out of the 7,291 valid APIs, 3,123 (42.8%) have a
  `components/securitySchemes` property. The `type` is distributed as
  1,654 (38.6%) apiKey, 1,461 (34.1%) http, 1,079 (25.2%) oauth2, 34
  (0.8%) openIdConnect, and 52 (1.2%) empty value.

- As only 823 (18.1 %) of v2.x and 1,480 (20.3 %) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.
