"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = require("react");
var react_styles_1 = require("@patternfly/react-styles");
var data_list_1 = require("@patternfly/react-styles/css/components/DataList/data-list");
exports.DataListItem = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.isExpanded, isExpanded = _c === void 0 ? false : _c, ariaLabelledBy = _a["aria-labelledby"], props = __rest(_a, ["children", "className", "isExpanded", 'aria-labelledby']);
    return (<li className={react_styles_1.css(data_list_1["default"].dataListItem, isExpanded && data_list_1["default"].modifiers.expanded, className)} aria-labelledby={ariaLabelledBy} {...props}>
    {React.Children.map(children, function (child) {
        return React.isValidElement(child) &&
            React.cloneElement(child, {
                rowid: ariaLabelledBy
            });
    })}
  </li>);
};
