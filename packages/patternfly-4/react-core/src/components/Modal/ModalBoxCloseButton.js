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
var Button_1 = require("../Button");
var react_icons_1 = require("@patternfly/react-icons");
exports.ModalBoxCloseButton = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.onClose, onClose = _c === void 0 ? function () { return undefined; } : _c, props = __rest(_a, ["className", "onClose"]);
    return (<Button_1.Button className={className} variant="plain" onClick={onClose} aria-label="Close" {...props}>
    <react_icons_1.TimesIcon />
  </Button_1.Button>);
};
