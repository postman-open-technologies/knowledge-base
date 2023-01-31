# Spectral Finders #

Spectral rulesets containing rules meant to find point of interests.

# Command line examples

Regular CLI terminal output:

```
spectral lint -r http-status-codes.spectral-v6.yaml openapi.yaml
```

JSON output (don't forget the -q to get proper JSON without any other message)

```
spectral lint -q -f json -r http-status-codes.spectral-v6.yaml openapi.yaml
```
