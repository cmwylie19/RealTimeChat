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
var card_1 = require("@patternfly/react-styles/css/components/Card/card");
var react_styles_1 = require("@patternfly/react-styles");
exports.CardBody = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.component, component = _d === void 0 ? 'div' : _d, _e = _a.isFilled, isFilled = _e === void 0 ? true : _e, props = __rest(_a, ["children", "className", "component", "isFilled"]);
    var Component = component;
    return (<Component className={react_styles_1.css(card_1["default"].cardBody, !isFilled && card_1["default"].modifiers.noFill, className)} {...props}>
    {children}
  </Component>);
};
