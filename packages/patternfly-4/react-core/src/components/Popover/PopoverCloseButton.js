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
exports.PopoverCloseButton = function (_a) {
    var _b = _a.onClose, onClose = _b === void 0 ? function () { return undefined; } : _b, props = __rest(_a, ["onClose"]);
    return (<Button_1.Button onClick={onClose} variant="plain" aria-label {...props} style={{ pointerEvents: 'auto' }}>
    <react_icons_1.TimesIcon />
  </Button_1.Button>);
};
