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
var nav_1 = require("@patternfly/react-styles/css/components/Nav/nav");
var react_styles_1 = require("@patternfly/react-styles");
var util_1 = require("../../helpers/util");
exports.NavGroup = function (_a) {
    var title = _a.title, _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.id, id = _d === void 0 ? util_1.getUniqueId() : _d, props = __rest(_a, ["title", "children", "className", "id"]);
    return (<section className={react_styles_1.css(nav_1["default"].navSection, className)} aria-labelledby={id} {...props}>
    <h2 className={react_styles_1.css(nav_1["default"].navSectionTitle)} id={id}>
      {title}
    </h2>
    <ul className={react_styles_1.css(nav_1["default"].navSimpleList)}>{children}</ul>
  </section>);
};
