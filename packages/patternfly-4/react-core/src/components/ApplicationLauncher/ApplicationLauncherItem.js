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
var app_launcher_1 = require("@patternfly/react-styles/css/components/AppLauncher/app-launcher");
var Dropdown_1 = require("../Dropdown");
var ApplicationLauncherContent_1 = require("./ApplicationLauncherContent");
exports.ApplicationLauncherItemContext = React.createContext({ isExternal: false, icon: null });
exports.ApplicationLauncherItem = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, children = _a.children, _c = _a.icon, icon = _c === void 0 ? null : _c, _d = _a.isExternal, isExternal = _d === void 0 ? false : _d, href = _a.href, _e = _a.tooltip, tooltip = _e === void 0 ? null : _e, _f = _a.tooltipProps, tooltipProps = _f === void 0 ? null : _f, _g = _a.component, component = _g === void 0 ? 'a' : _g, props = __rest(_a, ["className", "children", "icon", "isExternal", "href", "tooltip", "tooltipProps", "component"]);
    return (<exports.ApplicationLauncherItemContext.Provider value={{ isExternal: isExternal, icon: icon }}>
    <Dropdown_1.DropdownItem component={component} href={href || null} className={react_styles_1.css(isExternal && app_launcher_1["default"].modifiers.external, className)} tooltip={tooltip} tooltipProps={tooltipProps} {...props}>
      {children && <ApplicationLauncherContent_1.ApplicationLauncherContent>{children}</ApplicationLauncherContent_1.ApplicationLauncherContent>}
    </Dropdown_1.DropdownItem>
  </exports.ApplicationLauncherItemContext.Provider>);
};
