"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/functions/checkSecurity.ts
var checkSecurity_exports = {};
__export(checkSecurity_exports, {
  default: () => checkSecurity_default
});
module.exports = __toCommonJS(checkSecurity_exports);
var import_spectral_core = require("@stoplight/spectral-core");
var getAllOperations = function* (paths) {
  if (typeof paths !== "object") {
    return;
  }
  const validMethods = [
    "get",
    "head",
    "post",
    "put",
    "patch",
    "delete",
    "options",
    "trace"
  ];
  const operation = { path: "", operation: "" };
  for (const idx of Object.keys(paths)) {
    const path = paths[idx];
    if (typeof path === "object") {
      operation.path = idx;
      for (const httpMethod of Object.keys(path)) {
        typeof path[httpMethod] === "object" && validMethods.includes(httpMethod) && (operation.operation = httpMethod, yield operation);
      }
    }
  }
};
var checkSecurity_default = (0, import_spectral_core.createRulesetFunction)(
  {
    input: null,
    options: {
      type: "object",
      additionalProperties: false,
      properties: {
        schemesPath: {
          type: "array"
        },
        nullable: true,
        methods: {
          type: "array"
        }
      },
      required: []
    }
  },
  function checkSecurity(input, options) {
    const errorList = [];
    const { schemesPath: s, nullable, methods } = options;
    const { paths, security } = input;
    for (const { path, operation: httpMethod } of getAllOperations(paths)) {
      if (methods && Array.isArray(methods) && !methods.includes(httpMethod)) {
        continue;
      }
      let { security: operationSecurity } = paths[path][httpMethod];
      let securityRef = [path, httpMethod];
      if (operationSecurity === void 0) {
        operationSecurity = security;
        securityRef = ["$.security"];
      }
      if (!operationSecurity || operationSecurity.length === 0) {
        errorList.push({
          message: `Operation has undefined security scheme in ${securityRef}.`,
          path: ["paths", path, httpMethod, "security", s]
        });
      }
      if (Array.isArray(operationSecurity)) {
        for (const [idx, securityEntry] of operationSecurity.entries()) {
          if (typeof securityEntry !== "object") {
            continue;
          }
          const securitySchemeIds = Object.keys(securityEntry);
          securitySchemeIds.length === 0 && nullable === false && errorList.push({
            message: `Operation referencing empty security scheme in ${securityRef}.`,
            path: ["paths", path, httpMethod, "security", idx]
          });
        }
      }
    }
    return errorList;
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
module.exports = module.exports.default;
//# sourceMappingURL=checkSecurity.js.map