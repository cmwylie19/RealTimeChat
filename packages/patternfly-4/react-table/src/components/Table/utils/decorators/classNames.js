"use strict";
exports.__esModule = true;
var react_styles_1 = require("@patternfly/react-styles");
var table_1 = require("@patternfly/react-styles/css/components/Table/table");
exports.Visibility = react_styles_1.pickProperties(table_1["default"].modifiers, [
    'hidden',
    'hiddenOnSm',
    'hiddenOnMd',
    'hiddenOnLg',
    'hiddenOnXl',
    'hiddenOn2Xl',
    'visibleOnSm',
    'visibleOnMd',
    'visibleOnLg',
    'visibleOnXl',
    'visibleOn2Xl'
]);
// tslint:disable-next-line:no-shadowed-variable
exports.classNames = function () {
    var classNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
    }
    return function () { return ({
        className: react_styles_1.css.apply(void 0, classNames)
    }); };
};
