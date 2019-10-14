"use strict";
exports.__esModule = true;
var React = require("react");
exports.DataToolbarContext = React.createContext({});
exports.formatSpacers = function (spacers, type) {
    if (type === void 0) { type = 'pf-m-spacer'; }
    return spacers.reduce(function (acc, curr) { return (acc + " " + type + "-" + curr.spacerSize + (curr.breakpoint ? "-on-" + curr.breakpoint : '')); }, '');
};
