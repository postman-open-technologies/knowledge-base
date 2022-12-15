Test
================

- Out of 8,654 valid APIs, 1,635 (18.9%) have a `security` property.

- For Swagger (v2.x), out of the 3,170 valid APIs, 1,329 (41.9%) have a
  `securityDefinitions` property. The `type` is distributed as 916
  (44.7%) oauth2, 882 (43%) apiKey, and 252 (12.3%) basic.

- For OpenAPI (v3.x), out of the 5,484 valid APIs, 2,338 (42.6%) have a
  `components/securitySchemes` property. The `type` is distributed as
  1,246 (39.1%) apiKey, 1,041 (32.7%) http, 834 (26.2%) oauth2, 26
  (0.8%) openIdConnect, and 40 (1.3%) empty value.

- As only 565 (17.8 %) of v2.x and 1,070 (19.5 %) of v3.x APIs have a
  `security` property, it suggest that the security schemes may not
  always be used. This requires further investigation.
