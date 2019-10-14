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
var page_1 = require("@patternfly/react-styles/css/components/Page/page");
var react_styles_1 = require("@patternfly/react-styles");
var Page_1 = require("./Page");
exports.PageSidebar = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, nav = _a.nav, _c = _a.isNavOpen, isNavOpen = _c === void 0 ? true : _c, _d = _a.theme, theme = _d === void 0 ? 'light' : _d, props = __rest(_a, ["className", "nav", "isNavOpen", "theme"]);
    return (<Page_1.PageContextConsumer>
      {function (_a) {
        var isManagedSidebar = _a.isManagedSidebar, managedIsNavOpen = _a.isNavOpen;
        var navOpen = isManagedSidebar ? managedIsNavOpen : isNavOpen;
        return (<div id="page-sidebar" className={react_styles_1.css(page_1["default"].pageSidebar, theme === 'dark' && page_1["default"].modifiers.dark, navOpen && page_1["default"].modifiers.expanded, !navOpen && page_1["default"].modifiers.collapsed, className)} {...props}>
            <div className={react_styles_1.css(page_1["default"].pageSidebarBody)}>{nav}</div>
          </div>);
    }}
    </Page_1.PageContextConsumer>);
};
