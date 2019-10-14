/**
 * evaluate-formatters.ts
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
export function evaluateFormatters(formatters) {
  return (value, extra) => formatters.reduce((parameters, formatter) => ({
    value: formatter(parameters.value, parameters.extra),
    extra
  }), {
    value,
    extra
  }).value;
}
//# sourceMappingURL=evaluate-formatters.js.map