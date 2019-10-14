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
var DataToolbarGroupVariant;
(function (DataToolbarGroupVariant) {
    DataToolbarGroupVariant["filter-group"] = "filter-group";
    DataToolbarGroupVariant["icon-button-group"] = "icon-button-group";
    DataToolbarGroupVariant["button-group"] = "button-group";
})(DataToolbarGroupVariant = exports.DataToolbarGroupVariant || (exports.DataToolbarGroupVariant = {}));
exports.DataToolbarGroup = function (_a) {
    var _b = _a.breakpointMods, breakpointMods = _b === void 0 ? [] : _b, _c = _a.spacers, spacers = _c === void 0 ? [] : _c, _d = _a.itemSpacers, itemSpacers = _d === void 0 ? [] : _d, className = _a.className, variant = _a.variant, children = _a.children, props = __rest(_a, ["breakpointMods", "spacers", "itemSpacers", "className", "variant", "children"]);
    return (<div className={react_styles_1.css(data_toolbar_1["default"].dataToolbarGroup, variant && react_styles_1.getModifier(data_toolbar_1["default"], variant), util_1.formatBreakpointMods(breakpointMods, data_toolbar_1["default"]), DataToolbarUtils_1.formatSpacers(itemSpacers, 'pf-m-space-items'), DataToolbarUtils_1.formatSpacers(spacers), className)} {...props}>
      {children}
    </div>);
};
