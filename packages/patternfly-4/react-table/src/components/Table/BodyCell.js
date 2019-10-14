"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var table_1 = require("@patternfly/react-styles/css/components/Table/table");
exports.BodyCell = function (_a) {
    var _b = _a["data-label"], dataLabel = _b === void 0 ? '' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, colSpan = _a.colSpan, _d = _a.component, component = _d === void 0 ? 'td' : _d, isVisible = _a.isVisible, parentId = _a.parentId, _e = _a.textCenter, textCenter = _e === void 0 ? false : _e, isOpen = _a.isOpen, _f = _a.ariaControls, ariaControls = _f === void 0 ? '' : _f, props = __rest(_a, ['data-label', "className", "colSpan", "component", "isVisible", "parentId", "textCenter", "isOpen", "ariaControls"]);
    var Component = component;
    var mappedProps = __assign(__assign({}, (dataLabel ? { 'data-label': dataLabel } : {})), props);
    return (parentId !== undefined && colSpan === undefined) || !isVisible ? null : (<Component {...mappedProps} className={react_styles_1.css(className, textCenter && table_1["default"].modifiers.center)} colSpan={colSpan}/>);
};
