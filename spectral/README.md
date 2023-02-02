# Spectral Finders #

Spectral rulesets containing rules meant to find point of interests.

## Command line examples

Regular CLI terminal output:

```
spectral lint -r foo.spectral.yaml bar.json
```

JSON output (don't forget the -q to get proper JSON without any other message)

```
spectral lint -q -f json -r foo.spectral.yaml bar.json
```

JSON output a nd save to file

```
spectral lint -q -f json -o output.json -r foo.pectral.yaml bar.json
```
