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
var data_toolbar_1 = require("@patternfly/react-styles/css/components/DataToolbar/data-toolbar");
var react_styles_1 = require("@patternfly/react-styles");
var DataToolbarUtils_1 = require("./DataToolbarUtils");
var util_1 = require("../../../helpers/util");
var DataToolbarItemVariant;
(function (DataToolbarItemVariant) {
    DataToolbarItemVariant["separator"] = "separator";
    DataToolbarItemVariant["bulk-select"] = "bulk-select";
    DataToolbarItemVariant["overflow-menu"] = "overflow-menu";
    DataToolbarItemVariant["pagination"] = "pagination";
    DataToolbarItemVariant["search-filter"] = "search-filter";
    DataToolbarItemVariant["label"] = "label";
})(DataToolbarItemVariant = exports.DataToolbarItemVariant || (exports.DataToolbarItemVariant = {}));
exports.DataToolbarItem = function (_a) {
    var className = _a.className, variant = _a.variant, _b = _a.breakpointMods, breakpointMods = _b === void 0 ? [] : _b, _c = _a.spacers, spacers = _c === void 0 ? [] : _c, id = _a.id, children = _a.children, props = __rest(_a, ["className", "variant", "breakpointMods", "spacers", "id", "children"]);
    var labelVariant = variant === 'label';
    return (<div className={react_styles_1.css(data_toolbar_1["default"].dataToolbarItem, variant && react_styles_1.getModifier(data_toolbar_1["default"], variant), util_1.formatBreakpointMods(breakpointMods, data_toolbar_1["default"]), DataToolbarUtils_1.formatSpacers(spacers), className)} {...labelVariant && { 'aria-hidden': true }} id={id} {...props}>
      {children}
    </div>);
};
