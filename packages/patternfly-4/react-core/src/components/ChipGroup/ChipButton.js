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
exports.ChipButton = function (_a) {
    var _b = _a.ariaLabel, ariaLabel = _b === void 0 ? 'close' : _b, _c = _a.children, children = _c === void 0 ? null : _c, _d = _a.className, className = _d === void 0 ? '' : _d, _e = _a.onClick, onClick = _e === void 0 ? function () { return undefined; } : _e, props = __rest(_a, ["ariaLabel", "children", "className", "onClick"]);
    return (<Button_1.Button variant="plain" aria-label={ariaLabel} onClick={onClick} className={className} {...props}>
      {children}
    </Button_1.Button>);
};
