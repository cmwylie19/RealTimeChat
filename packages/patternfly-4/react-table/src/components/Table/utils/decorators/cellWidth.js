"use strict";
exports.__esModule = true;
var react_styles_1 = require("@patternfly/react-styles");
var table_1 = require("@patternfly/react-styles/css/components/Table/table");
exports.cellWidth = function (width) { return function () { return ({
    className: react_styles_1.css(react_styles_1.getModifier(table_1["default"], "width_" + width))
}); }; };
