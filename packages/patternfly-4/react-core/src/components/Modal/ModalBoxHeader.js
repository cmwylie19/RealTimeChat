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
var Title_1 = require("../Title");
exports.ModalBoxHeader = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.hideTitle, hideTitle = _d === void 0 ? false : _d, _e = _a.headingLevel, headingLevel = _e === void 0 ? Title_1.TitleLevel.h1 : _e, props = __rest(_a, ["children", "className", "hideTitle", "headingLevel"]);
    return hideTitle ? null : (<React.Fragment>
      <Title_1.Title size="2xl" headingLevel={headingLevel} className={className} {...props}>
        {children}
      </Title_1.Title>
    </React.Fragment>);
};
