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
var ChartContainer_1 = require("../ChartContainer");
var ChartLabel_1 = require("../ChartLabel");
var ChartTheme_1 = require("../ChartTheme");
var ChartUtils_1 = require("../ChartUtils");
exports.ChartBulletTitle = function (_a) {
    var ariaDesc = _a.ariaDesc, ariaTitle = _a.ariaTitle, _b = _a.capHeight, capHeight = _b === void 0 ? 1.1 : _b, _c = _a.horizontal, horizontal = _c === void 0 ? true : _c, _d = _a.legendPosition, legendPosition = _d === void 0 ? 'bottom' : _d, padding = _a.padding, _e = _a.standalone, standalone = _e === void 0 ? true : _e, _f = _a.subTitleComponent, subTitleComponent = _f === void 0 ? <ChartLabel_1.ChartLabel /> : _f, subTitle = _a.subTitle, themeColor = _a.themeColor, themeVariant = _a.themeVariant, title = _a.title, _g = _a.titleComponent, titleComponent = _g === void 0 ? <ChartLabel_1.ChartLabel /> : _g, titlePosition = _a.titlePosition, 
    // destructure last
    _h = _a.theme, 
    // destructure last
    theme = _h === void 0 ? ChartUtils_1.getBulletTheme(themeColor, themeVariant) : _h, _j = _a.height, height = _j === void 0 ? horizontal ? theme.chart.height : theme.chart.width : _j, _k = _a.width, width = _k === void 0 ? horizontal ? theme.chart.width : theme.chart.height : _k, rest = __rest(_a, ["ariaDesc", "ariaTitle", "capHeight", "horizontal", "legendPosition", "padding", "standalone", "subTitleComponent", "subTitle", "themeColor", "themeVariant", "title", "titleComponent", "titlePosition", "theme", "height", "width"]);
    var chartSize = {
        height: horizontal ? theme.chart.height : height,
        width: horizontal ? width : theme.chart.height
    };
    var defaultPadding = {
        bottom: ChartUtils_1.getPaddingForSide('bottom', padding, theme.chart.padding),
        left: ChartUtils_1.getPaddingForSide('left', padding, theme.chart.padding),
        right: ChartUtils_1.getPaddingForSide('right', padding, theme.chart.padding),
        top: ChartUtils_1.getPaddingForSide('top', padding, theme.chart.padding)
    };
    // Returns title
    var getTitle = function () {
        var showBoth = title && subTitle;
        var labelPosition = horizontal ? 'left' : 'bottom';
        if (titlePosition && titlePosition.includes('left') && horizontal) {
            labelPosition = titlePosition;
        }
        // The x and y calculations below are used to adjust the position of the title, based on padding and scale.
        // This ensures that when padding is adjusted, the title moves along with the chart's position.
        return React.cloneElement(titleComponent, __assign(__assign(__assign({}, showBoth && { capHeight: capHeight }), { style: [ChartTheme_1.ChartBulletStyles.label.title, ChartTheme_1.ChartBulletStyles.label.subTitle], text: showBoth ? [title, subTitle] : title, textAnchor: labelPosition === 'top-left' ? 'start' : horizontal ? 'end' : 'middle', verticalAnchor: labelPosition === 'top-left' ? 'end' : 'middle', 
            // Adjust for padding
            x: horizontal
                ? ChartUtils_1.getBulletLabelX({
                    chartWidth: chartSize.width,
                    dx: labelPosition === 'top-left'
                        ? defaultPadding.left
                        : defaultPadding.left - ChartTheme_1.ChartCommonStyles.label.margin * 1.75,
                    labelPosition: 'left',
                    legendPosition: legendPosition,
                    svgWidth: width
                })
                : defaultPadding.left * .5 + (defaultPadding.right * .5 - (defaultPadding.right - 50)) +
                    ChartTheme_1.ChartBulletStyles.qualitativeRangeWidth / 2, y: ChartUtils_1.getBulletLabelY({
                chartHeight: chartSize.height,
                // Adjust for padding
                dy: labelPosition === 'top-left'
                    ? defaultPadding.top * .5 + (defaultPadding.bottom * .5 - (defaultPadding.bottom)) + 58 -
                        ChartTheme_1.ChartCommonStyles.legend.margin + (showBoth ? 0 : 1)
                    : horizontal
                        ? defaultPadding.top * .5 + (defaultPadding.bottom * .5 - (defaultPadding.bottom))
                        : ChartTheme_1.ChartCommonStyles.legend.margin * 2 - defaultPadding.bottom,
                labelPosition: labelPosition
            }) }), titleComponent.props));
    };
    return standalone ? (<ChartContainer_1.ChartContainer desc={ariaDesc} height={height} title={ariaTitle} width={width}>
      {getTitle()}
    </ChartContainer_1.ChartContainer>) : (<React.Fragment>
      {getTitle()}
    </React.Fragment>);
};
