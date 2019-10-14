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
var utils_1 = require("./utils");
var ChartContainer_1 = require("../ChartContainer");
var ChartScatter_1 = require("../ChartScatter");
var ChartTheme_1 = require("../ChartTheme");
var ChartTooltip_1 = require("../ChartTooltip");
var ChartUtils_1 = require("../ChartUtils");
exports.ChartBulletPrimaryDotMeasure = function (_a) {
    var ariaDesc = _a.ariaDesc, ariaTitle = _a.ariaTitle, _b = _a.constrainToVisibleArea, constrainToVisibleArea = _b === void 0 ? false : _b, data = _a.data, domain = _a.domain, _c = _a.horizontal, horizontal = _c === void 0 ? true : _c, _d = _a.invert, invert = _d === void 0 ? false : _d, labels = _a.labels, _e = _a.measureComponent, measureComponent = _e === void 0 ? <ChartScatter_1.ChartScatter /> : _e, padding = _a.padding, _f = _a.size, size = _f === void 0 ? ChartTheme_1.ChartBulletStyles.primaryDotMeasureSize : _f, _g = _a.standalone, standalone = _g === void 0 ? true : _g, themeColor = _a.themeColor, themeVariant = _a.themeVariant, y = _a.y, y0 = _a.y0, 
    // destructure last
    _h = _a.theme, 
    // destructure last
    theme = _h === void 0 ? ChartUtils_1.getBulletPrimaryDotMeasureTheme(themeColor, themeVariant) : _h, _j = _a.labelComponent, labelComponent = _j === void 0 ? <ChartTooltip_1.ChartTooltip /> : _j, _k = _a.height, height = _k === void 0 ? theme.group.height : _k, _l = _a.width, width = _l === void 0 ? theme.group.width : _l, rest = __rest(_a, ["ariaDesc", "ariaTitle", "constrainToVisibleArea", "data", "domain", "horizontal", "invert", "labels", "measureComponent", "padding", "size", "standalone", "themeColor", "themeVariant", "y", "y0", "theme", "labelComponent", "height", "width"]);
    var computedData = utils_1.getPrimaryDotMeasureData({
        data: data,
        invert: invert,
        theme: theme,
        y: y,
        y0: y0
    });
    // Label component
    //
    // Note: SVG height and width are provided by ChartBullet as a workaround to support constrainToVisibleArea
    var tooltip = React.cloneElement(labelComponent, __assign({ constrainToVisibleArea: constrainToVisibleArea, dx: 0, dy: horizontal ? -(size) : 0, orientation: 'top' }, labelComponent.props));
    var measure = computedData.map(function (dataPoint, index) {
        return React.cloneElement(measureComponent, __assign({ data: [__assign({}, dataPoint)], domain: domain,
            height: height,
            horizontal: horizontal, key: "pf-chart-bullet-primary-dot-measure-" + index, labelComponent: tooltip, labels: labels,
            padding: padding,
            size: size, standalone: false, style: {
                data: {
                    fill: dataPoint._color
                }
            }, theme: theme,
            width: width }, measureComponent.props));
    });
    return standalone ? (<ChartContainer_1.ChartContainer desc={ariaDesc} height={height} title={ariaTitle} width={width}>
      {measure}
    </ChartContainer_1.ChartContainer>) : (<React.Fragment>
      {measure}
    </React.Fragment>);
};
// Note: VictoryBar.role must be hoisted
hoist_non_react_statics_1["default"](exports.ChartBulletPrimaryDotMeasure, victory_1.VictoryScatter);
