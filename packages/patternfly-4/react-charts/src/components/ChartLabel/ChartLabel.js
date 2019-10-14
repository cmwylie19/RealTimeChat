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
var hoist_non_react_statics_1 = require("hoist-non-react-statics");
var lodash_1 = require("lodash");
var victory_1 = require("victory");
var ChartTheme_1 = require("../ChartTheme");
var ChartLabelDirection;
(function (ChartLabelDirection) {
    ChartLabelDirection["rtl"] = "rtl";
    ChartLabelDirection["ltr"] = "ltr";
    ChartLabelDirection["inherit"] = "inherit";
})(ChartLabelDirection = exports.ChartLabelDirection || (exports.ChartLabelDirection = {}));
var ChartLabelPlacement;
(function (ChartLabelPlacement) {
    ChartLabelPlacement["parallel"] = "parallel";
    ChartLabelPlacement["perpendicular"] = "perpendicular";
    ChartLabelPlacement["vertical"] = "vertical";
})(ChartLabelPlacement = exports.ChartLabelPlacement || (exports.ChartLabelPlacement = {}));
exports.ChartLabel = function (_a) {
    var style = _a.style, rest = __rest(_a, ["style"]);
    var applyDefaultStyle = function (customStyle) { return lodash_1.defaults(customStyle, {
        fontFamily: ChartTheme_1.ChartCommonStyles.label.fontFamily,
        fontSize: ChartTheme_1.ChartCommonStyles.label.fontSize,
        letterSpacing: ChartTheme_1.ChartCommonStyles.label.letterSpacing
    }); };
    var newStyle = Array.isArray(style) ? style.map(applyDefaultStyle) : applyDefaultStyle(style);
    return <victory_1.VictoryLabel style={newStyle} {...rest}/>;
};
// Note: VictoryLabel.role must be hoisted
hoist_non_react_statics_1["default"](exports.ChartLabel, victory_1.VictoryLabel);
