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
var drawer_1 = require("@patternfly/react-styles/css/components/Drawer/drawer");
var react_styles_1 = require("@patternfly/react-styles");
exports.DrawerPanelContent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, _c = _a.noPadding, noPadding = _c === void 0 ? false : _c, props = __rest(_a, ["className", "children", "noPadding"]);
    return (<aside className={react_styles_1.css(drawer_1["default"].drawerPanel, className)} {...props}>
        <div className={react_styles_1.css(drawer_1["default"].drawerPanelBody, noPadding && drawer_1["default"].modifiers.noPadding)}>
          {children}
        </div>
      </aside>);
};
