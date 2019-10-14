"use strict";
exports.__esModule = true;
function evaluateFormatters(formatters) {
    return function (value, extra) {
        return formatters.reduce(function (parameters, formatter) { return ({
            value: formatter(parameters.value, parameters.extra),
            extra: extra
        }); }, { value: value, extra: extra }).value;
    };
}
exports.evaluateFormatters = evaluateFormatters;
