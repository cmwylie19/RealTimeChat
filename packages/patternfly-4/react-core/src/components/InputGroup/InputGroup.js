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
var input_group_1 = require("@patternfly/react-styles/css/components/InputGroup/input-group");
var react_styles_1 = require("@patternfly/react-styles");
var FormSelect_1 = require("../FormSelect");
var TextArea_1 = require("../TextArea");
var TextInput_1 = require("../TextInput");
exports.InputGroup = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, props = __rest(_a, ["className", "children"]);
    var formCtrls = [FormSelect_1.FormSelect, TextArea_1.TextArea, TextInput_1.TextInput].map(function (comp) { return comp.toString(); });
    var idItem = React.Children.toArray(children).find(function (child) { return !formCtrls.includes(child.type.toString()) && child.props.id; });
    return (<div className={react_styles_1.css(input_group_1["default"].inputGroup, className)} {...props}>
      {idItem
        ? React.Children.map(children, function (child) {
            return formCtrls.includes(child.type.toString())
                ? React.cloneElement(child, { 'aria-describedby': idItem.props.id })
                : child;
        })
        : children}
    </div>);
};
