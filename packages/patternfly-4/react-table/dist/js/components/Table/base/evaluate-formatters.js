"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.evaluateFormatters = evaluateFormatters;

/**
 * evaluate-formatters.ts
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
function evaluateFormatters(formatters) {
  return function (value, extra) {
    return formatters.reduce(function (parameters, formatter) {
      return {
        value: formatter(parameters.value, parameters.extra),
        extra: extra
      };
    }, {
      value: value,
      extra: extra
    }).value;
  };
}
//# sourceMappingURL=evaluate-formatters.js.map