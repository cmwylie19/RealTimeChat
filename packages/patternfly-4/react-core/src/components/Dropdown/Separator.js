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
var dropdownConstants_1 = require("./dropdownConstants");
var InternalDropdownItem_1 = require("./InternalDropdownItem");
exports.DropdownSeparator = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, ref = _a.ref, // Types of Ref are different for React.FC vs React.Component
    props = __rest(_a, ["className", "ref"]);
    return (<dropdownConstants_1.DropdownContext.Consumer>
    {function (_a) {
        var separatorClass = _a.separatorClass;
        return (<dropdownConstants_1.DropdownArrowContext.Consumer>
        {function (context) { return (<InternalDropdownItem_1.InternalDropdownItem {...props} context={context} className={react_styles_1.css(separatorClass, className)} component="div" role="separator"/>); }}
      </dropdownConstants_1.DropdownArrowContext.Consumer>);
    }}
  </dropdownConstants_1.DropdownContext.Consumer>);
};
