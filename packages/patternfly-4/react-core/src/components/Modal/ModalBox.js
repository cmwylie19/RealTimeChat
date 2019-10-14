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
var modal_box_1 = require("@patternfly/react-styles/css/components/ModalBox/modal-box");
exports.ModalBox = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.isLarge, isLarge = _c === void 0 ? false : _c, _d = _a.isSmall, isSmall = _d === void 0 ? false : _d, title = _a.title, id = _a.id, props = __rest(_a, ["children", "className", "isLarge", "isSmall", "title", "id"]);
    return (<div {...props} role="dialog" aria-label={title} aria-describedby={id} aria-modal="true" className={react_styles_1.css(modal_box_1["default"].modalBox, className, isLarge && modal_box_1["default"].modifiers.lg, isSmall && modal_box_1["default"].modifiers.sm)}>
    {children}
  </div>);
};
