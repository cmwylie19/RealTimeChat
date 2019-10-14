"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var victory_1 = require("victory");
var ChartContainer_1 = require("../ChartContainer");
var ChartUtils_1 = require("../ChartUtils");
var ChartBulletComparativeMeasure_1 = require("./ChartBulletComparativeMeasure");
exports.ChartBulletComparativeErrorMeasure = function (_a) {
    var ariaDesc = _a.ariaDesc, ariaTitle = _a.ariaTitle, barWidth = _a.barWidth, _b = _a.constrainToVisibleArea, constrainToVisibleArea = _b === void 0 ? false : _b, data = _a.data, domain = _a.domain, _c = _a.horizontal, horizontal = _c === void 0 ? true : _c, labelComponent = _a.labelComponent, labels = _a.labels, _d = _a.measureComponent, measureComponent = _d === void 0 ? <ChartBulletComparativeMeasure_1.ChartBulletComparativeMeasure /> : _d, padding = _a.padding, _e = _a.standalone, standalone = _e === void 0 ? true : _e, themeColor = _a.themeColor, themeVariant = _a.themeVariant, y = _a.y, 
    // destructure last
    _f = _a.theme, 
    // destructure last
    theme = _f === void 0 ? ChartUtils_1.getBulletComparativeErrorMeasureTheme(themeColor, themeVariant) : _f, _g = _a.height, height = _g === void 0 ? theme.bar.height : _g, _h = _a.width, width = _h === void 0 ? theme.bar.width : _h, rest = __rest(_a, ["ariaDesc", "ariaTitle", "barWidth", "constrainToVisibleArea", "data", "domain", "horizontal", "labelComponent", "labels", "measureComponent", "padding", "standalone", "themeColor", "themeVariant", "y", "theme", "height", "width"]);
    // Comparative measure component
    var measure = React.cloneElement(measureComponent, __assign({ ariaDesc: ariaDesc,
        ariaTitle: ariaTitle,
        barWidth: barWidth,
        constrainToVisibleArea: constrainToVisibleArea,
        data: data,
        domain: domain,
        height: height,
        horizontal: horizontal,
        labelComponent: labelComponent,
        labels: labels,
        padding: padding, standalone: false, theme: theme,
        width: width,
        y: y }, measureComponent.props));
    return standalone ? (<ChartContainer_1.ChartContainer desc={ariaDesc} height={height} title={ariaTitle} width={width}>
      {measure}
    </ChartContainer_1.ChartContainer>) : (<React.Fragment>
      {measure}
    </React.Fragment>);
};
// Note: VictoryBar.role must be hoisted
hoist_non_react_statics_1["default"](exports.ChartBulletComparativeErrorMeasure, victory_1.VictoryBar);
