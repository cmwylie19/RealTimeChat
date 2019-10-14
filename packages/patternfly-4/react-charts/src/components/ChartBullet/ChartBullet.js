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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var React = require("react");
var hoist_non_react_statics_1 = require("hoist-non-react-statics");
var victory_1 = require("victory");
var chart_bullet_size_1 = require("./utils/chart-bullet-size");
var chart_bullet_domain_1 = require("./utils/chart-bullet-domain");
var chart_bullet_theme_1 = require("./utils/chart-bullet-theme");
var ChartAxis_1 = require("../ChartAxis");
var ChartBulletComparativeErrorMeasure_1 = require("./ChartBulletComparativeErrorMeasure");
var ChartBulletComparativeMeasure_1 = require("./ChartBulletComparativeMeasure");
var ChartBulletComparativeWarningMeasure_1 = require("./ChartBulletComparativeWarningMeasure");
var ChartBulletGroupTitle_1 = require("./ChartBulletGroupTitle");
var ChartBulletPrimaryDotMeasure_1 = require("./ChartBulletPrimaryDotMeasure");
var ChartBulletPrimarySegmentedMeasure_1 = require("./ChartBulletPrimarySegmentedMeasure");
var ChartBulletQualitativeRange_1 = require("./ChartBulletQualitativeRange");
var ChartBulletTitle_1 = require("./ChartBulletTitle");
var ChartContainer_1 = require("../ChartContainer");
var ChartLegend_1 = require("../ChartLegend");
var ChartTheme_1 = require("../ChartTheme");
var ChartTooltip_1 = require("../ChartTooltip");
var ChartUtils_1 = require("../ChartUtils");
exports.ChartBullet = function (_a) {
    var ariaDesc = _a.ariaDesc, ariaTitle = _a.ariaTitle, _b = _a.axisComponent, axisComponent = _b === void 0 ? <ChartAxis_1.ChartAxis /> : _b, _c = _a.comparativeErrorMeasureComponent, comparativeErrorMeasureComponent = _c === void 0 ? <ChartBulletComparativeErrorMeasure_1.ChartBulletComparativeErrorMeasure /> : _c, comparativeErrorMeasureData = _a.comparativeErrorMeasureData, comparativeErrorMeasureDataY = _a.comparativeErrorMeasureDataY, comparativeErrorMeasureLegendData = _a.comparativeErrorMeasureLegendData, _d = _a.comparativeWarningMeasureComponent, comparativeWarningMeasureComponent = _d === void 0 ? <ChartBulletComparativeWarningMeasure_1.ChartBulletComparativeWarningMeasure /> : _d, comparativeWarningMeasureData = _a.comparativeWarningMeasureData, comparativeWarningMeasureDataY = _a.comparativeWarningMeasureDataY, comparativeWarningMeasureLegendData = _a.comparativeWarningMeasureLegendData, _e = _a.comparativeZeroMeasureComponent, comparativeZeroMeasureComponent = _e === void 0 ? <ChartBulletComparativeMeasure_1.ChartBulletComparativeMeasure /> : _e, _f = _a.constrainToVisibleArea, constrainToVisibleArea = _f === void 0 ? false : _f, _g = _a.groupTitleComponent, groupTitleComponent = _g === void 0 ? <ChartBulletGroupTitle_1.ChartBulletGroupTitle /> : _g, groupSubTitle = _a.groupSubTitle, groupTitle = _a.groupTitle, _h = _a.horizontal, horizontal = _h === void 0 ? true : _h, _j = _a.invert, invert = _j === void 0 ? false : _j, labels = _a.labels, _k = _a.legendComponent, legendComponent = _k === void 0 ? <ChartLegend_1.ChartLegend /> : _k, legendItemsPerRow = _a.legendItemsPerRow, _l = _a.legendPosition, legendPosition = _l === void 0 ? 'bottom' : _l, maxDomain = _a.maxDomain, minDomain = _a.minDomain, padding = _a.padding, _m = _a.primaryDotMeasureComponent, primaryDotMeasureComponent = _m === void 0 ? <ChartBulletPrimaryDotMeasure_1.ChartBulletPrimaryDotMeasure /> : _m, primaryDotMeasureData = _a.primaryDotMeasureData, primaryDotMeasureDataY = _a.primaryDotMeasureDataY, primaryDotMeasureLegendData = _a.primaryDotMeasureLegendData, _o = _a.primarySegmentedMeasureComponent, primarySegmentedMeasureComponent = _o === void 0 ? <ChartBulletPrimarySegmentedMeasure_1.ChartBulletPrimarySegmentedMeasure /> : _o, primarySegmentedMeasureData = _a.primarySegmentedMeasureData, primarySegmentedMeasureDataY = _a.primarySegmentedMeasureDataY, primarySegmentedMeasureLegendData = _a.primarySegmentedMeasureLegendData, _p = _a.qualitativeRangeComponent, qualitativeRangeComponent = _p === void 0 ? <ChartBulletQualitativeRange_1.ChartBulletQualitativeRange /> : _p, qualitativeRangeData = _a.qualitativeRangeData, qualitativeRangeDataY = _a.qualitativeRangeDataY, qualitativeRangeDataY0 = _a.qualitativeRangeDataY0, qualitativeRangeLegendData = _a.qualitativeRangeLegendData, _q = _a.standalone, standalone = _q === void 0 ? true : _q, subTitle = _a.subTitle, themeColor = _a.themeColor, themeVariant = _a.themeVariant, title = _a.title, _r = _a.titleComponent, titleComponent = _r === void 0 ? <ChartBulletTitle_1.ChartBulletTitle /> : _r, titlePosition = _a.titlePosition, 
    // destructure last
    _s = _a.theme, 
    // destructure last
    theme = _s === void 0 ? chart_bullet_theme_1.getBulletThemeWithLegendColorScale({
        comparativeErrorMeasureData: comparativeErrorMeasureData,
        comparativeErrorMeasureLegendData: comparativeErrorMeasureLegendData,
        comparativeWarningMeasureData: comparativeWarningMeasureData,
        comparativeWarningMeasureLegendData: comparativeWarningMeasureLegendData,
        invert: invert,
        primaryDotMeasureData: primaryDotMeasureData,
        primaryDotMeasureLegendData: primaryDotMeasureLegendData,
        primarySegmentedMeasureData: primarySegmentedMeasureData,
        primarySegmentedMeasureLegendData: primarySegmentedMeasureLegendData,
        qualitativeRangeData: qualitativeRangeData,
        qualitativeRangeLegendData: qualitativeRangeLegendData,
        themeColor: themeColor,
        themeVariant: themeVariant
    }) : _s, _t = _a.domain, domain = _t === void 0 ? chart_bullet_domain_1.getBulletDomain({
        comparativeErrorMeasureComponent: comparativeErrorMeasureComponent,
        comparativeErrorMeasureData: comparativeErrorMeasureData,
        comparativeWarningMeasureComponent: comparativeWarningMeasureComponent,
        comparativeWarningMeasureData: comparativeWarningMeasureData,
        maxDomain: maxDomain,
        minDomain: minDomain,
        primaryDotMeasureComponent: primaryDotMeasureComponent,
        primaryDotMeasureData: primaryDotMeasureData,
        primarySegmentedMeasureComponent: primarySegmentedMeasureComponent,
        primarySegmentedMeasureData: primarySegmentedMeasureData,
        qualitativeRangeComponent: qualitativeRangeComponent,
        qualitativeRangeData: qualitativeRangeData
    }) : _t, _u = _a.legendOrientation, legendOrientation = _u === void 0 ? theme.legend.orientation : _u, _v = _a.height, height = _v === void 0 ? horizontal ? theme.chart.height : theme.chart.width : _v, _w = _a.width, width = _w === void 0 ? horizontal ? theme.chart.width : theme.chart.height : _w, _x = _a.bulletSize, bulletSize = _x === void 0 ? theme.chart.height : _x, rest = __rest(_a, ["ariaDesc", "ariaTitle", "axisComponent", "comparativeErrorMeasureComponent", "comparativeErrorMeasureData", "comparativeErrorMeasureDataY", "comparativeErrorMeasureLegendData", "comparativeWarningMeasureComponent", "comparativeWarningMeasureData", "comparativeWarningMeasureDataY", "comparativeWarningMeasureLegendData", "comparativeZeroMeasureComponent", "constrainToVisibleArea", "groupTitleComponent", "groupSubTitle", "groupTitle", "horizontal", "invert", "labels", "legendComponent", "legendItemsPerRow", "legendPosition", "maxDomain", "minDomain", "padding", "primaryDotMeasureComponent", "primaryDotMeasureData", "primaryDotMeasureDataY", "primaryDotMeasureLegendData", "primarySegmentedMeasureComponent", "primarySegmentedMeasureData", "primarySegmentedMeasureDataY", "primarySegmentedMeasureLegendData", "qualitativeRangeComponent", "qualitativeRangeData", "qualitativeRangeDataY", "qualitativeRangeDataY0", "qualitativeRangeLegendData", "standalone", "subTitle", "themeColor", "themeVariant", "title", "titleComponent", "titlePosition", "theme", "domain", "legendOrientation", "height", "width", "bulletSize"]);
    // Note that we're using a fixed bullet height width to align components.
    var chartSize = {
        height: horizontal ? bulletSize : height,
        width: horizontal ? width : bulletSize
    };
    var defaultPadding = {
        bottom: ChartUtils_1.getPaddingForSide('bottom', padding, theme.chart.padding),
        left: ChartUtils_1.getPaddingForSide('left', padding, theme.chart.padding),
        right: ChartUtils_1.getPaddingForSide('right', padding, theme.chart.padding),
        top: ChartUtils_1.getPaddingForSide('top', padding, theme.chart.padding)
    };
    // Bullet group title
    var bulletGroupTitle = React.cloneElement(groupTitleComponent, __assign({ height: height, standalone: false, subTitle: groupSubTitle, title: groupTitle, width: width }, groupTitleComponent.props));
    // Bullet title
    var bulletTitle = React.cloneElement(titleComponent, __assign({ height: height,
        horizontal: horizontal,
        legendPosition: legendPosition,
        padding: padding, standalone: false, subTitle: subTitle,
        theme: theme,
        title: title,
        titlePosition: titlePosition,
        width: width }, titleComponent.props));
    // Comparative error measure
    var comparativeErrorMeasure = React.cloneElement(comparativeErrorMeasureComponent, __assign({ barWidth: chart_bullet_size_1.getComparativeMeasureErrorWidth({ height: chartSize.height, horizontal: horizontal, width: chartSize.width }), constrainToVisibleArea: constrainToVisibleArea, data: comparativeErrorMeasureData, domain: domain, height: chartSize.height, horizontal: horizontal, labelComponent: <ChartTooltip_1.ChartTooltip height={height} width={width}/>, labels: labels,
        padding: padding, standalone: false, width: chartSize.width, y: comparativeErrorMeasureDataY }, comparativeErrorMeasureComponent.props));
    // Comparative warning measure
    var comparativeWarningMeasure = React.cloneElement(comparativeWarningMeasureComponent, __assign({ barWidth: chart_bullet_size_1.getComparativeMeasureWarningWidth({ height: chartSize.height, horizontal: horizontal, width: chartSize.width }), constrainToVisibleArea: constrainToVisibleArea, data: comparativeWarningMeasureData, domain: domain, height: chartSize.height, horizontal: horizontal, labelComponent: <ChartTooltip_1.ChartTooltip height={height} width={width}/>, labels: labels,
        padding: padding, standalone: false, width: chartSize.width, y: comparativeWarningMeasureDataY }, comparativeWarningMeasureComponent.props));
    // Comparative zero measure
    var comparativeZeroMeasure = React.cloneElement(comparativeZeroMeasureComponent, __assign({ barWidth: chart_bullet_size_1.getComparativeMeasureWidth({ height: chartSize.height, horizontal: horizontal, width: chartSize.width }), data: [{ y: 0 }], domain: domain, height: chartSize.height, horizontal: horizontal,
        padding: padding, standalone: false, width: chartSize.width }, comparativeZeroMeasureComponent.props));
    // Legend
    var legend = React.cloneElement(legendComponent, __assign({ data: __spreadArrays((primaryDotMeasureLegendData ? primaryDotMeasureLegendData : []), (primarySegmentedMeasureLegendData ? primarySegmentedMeasureLegendData : []), (comparativeWarningMeasureLegendData ? comparativeWarningMeasureLegendData : []), (comparativeErrorMeasureLegendData ? comparativeErrorMeasureLegendData : []), (qualitativeRangeLegendData ? qualitativeRangeLegendData : [])), itemsPerRow: legendItemsPerRow, orientation: legendOrientation, position: legendPosition, theme: theme }, legendComponent.props));
    // Primary dot measure
    var primaryDotMeasure = React.cloneElement(primaryDotMeasureComponent, __assign({ constrainToVisibleArea: constrainToVisibleArea, data: primaryDotMeasureData, domain: domain, height: chartSize.height, horizontal: horizontal,
        invert: invert, labelComponent: <ChartTooltip_1.ChartTooltip height={height} width={width}/>, labels: labels,
        padding: padding, size: chart_bullet_size_1.getPrimaryDotMeasureSize({ height: chartSize.height, horizontal: horizontal, width: chartSize.width }), standalone: false, themeColor: themeColor,
        themeVariant: themeVariant, width: chartSize.width, y: primaryDotMeasureDataY }, primaryDotMeasureComponent.props));
    // Primary segmented measure
    var primarySegmentedMeasure = React.cloneElement(primarySegmentedMeasureComponent, __assign({ constrainToVisibleArea: constrainToVisibleArea, barWidth: chart_bullet_size_1.getPrimarySegmentedMeasureWidth({ height: chartSize.height, horizontal: horizontal, width: chartSize.width }), data: primarySegmentedMeasureData, domain: domain, height: chartSize.height, horizontal: horizontal,
        invert: invert, labelComponent: <ChartTooltip_1.ChartTooltip height={height} width={width}/>, labels: labels,
        padding: padding, standalone: false, themeColor: themeColor,
        themeVariant: themeVariant, width: chartSize.width, y: primarySegmentedMeasureDataY }, primarySegmentedMeasureComponent.props));
    // Qualitative range
    var qualitativeRange = React.cloneElement(qualitativeRangeComponent, __assign({ constrainToVisibleArea: constrainToVisibleArea, barWidth: chart_bullet_size_1.getQualitativeRangeBarWidth({ height: chartSize.height, horizontal: horizontal, width: chartSize.width }), data: qualitativeRangeData, domain: domain, height: chartSize.height, horizontal: horizontal,
        invert: invert, labelComponent: <ChartTooltip_1.ChartTooltip height={height} width={width}/>, labels: labels,
        padding: padding, standalone: false, width: chartSize.width, y: qualitativeRangeDataY, y0: qualitativeRangeDataY0 }, qualitativeRangeComponent.props));
    // Returns tick values -- Victory doesn't include min/max domain
    var getTickValues = function (minVal, maxVal) {
        var tickValues = [minVal, maxVal];
        var range = 0;
        if (minVal < 0 && maxVal < 0) {
            range = Math.abs(minVal - maxVal);
        }
        else if (minVal < 0) {
            range = Math.abs(minVal) + maxVal;
        }
        else {
            range = maxVal - minVal;
        }
        var tickInterval = range / (ChartTheme_1.ChartBulletStyles.axisTickCount - 1);
        for (var i = minVal; i < maxVal;) {
            i += tickInterval;
            tickValues.push(Math.ceil(i));
        }
        return tickValues;
    };
    // Returns a wrapped legend
    var getWrappedLegend = function () {
        if (!legend.props.data) {
            return null;
        }
        var dx = 0;
        var dy = 0;
        // Adjust for padding
        if (legendPosition === ChartLegend_1.ChartLegendPosition.bottom) {
            dy = horizontal
                ? defaultPadding.top * .5 + (defaultPadding.bottom * .5 - (defaultPadding.bottom)) - 25
                : title ? -defaultPadding.bottom + 60 : -defaultPadding.bottom;
        }
        else if (legendPosition === ChartLegend_1.ChartLegendPosition.bottomLeft) {
            dy = horizontal
                ? defaultPadding.top * .5 + (defaultPadding.bottom * .5 - (defaultPadding.bottom)) - 25
                : title ? -defaultPadding.bottom + 60 : -defaultPadding.bottom;
            dx = -10;
        }
        return (<ChartLegend_1.ChartLegendWrapper chartType="bullet" dx={dx} dy={dy} height={chartSize.height} legendComponent={legend} orientation={legendOrientation} padding={padding} position={legendPosition} theme={theme} width={chartSize.width}/>);
    };
    // Returns comparative zero measure
    var getComparativeZeroMeasure = function () {
        var _domain = domain;
        var low = Array.isArray(_domain)
            ? _domain[0]
            : _domain.y && Array.isArray(_domain.y) ? _domain.y[0] : 0;
        var high = Array.isArray(_domain)
            ? _domain[_domain.length - 1]
            : _domain.y && Array.isArray(_domain.y) ? _domain.y[_domain.y.length - 1] : 0;
        if (low < 0 && high > 0) {
            return comparativeZeroMeasure;
        }
        return null;
    };
    // Axis component for custom tick values
    var axis = React.cloneElement(axisComponent, __assign({ dependentAxis: horizontal ? false : true, domain: !horizontal ? domain : {
            x: domain.y,
            y: domain.x
        }, height: chartSize.height, 
        // Adjust for padding
        offsetX: !horizontal ? defaultPadding.left * .5 + (defaultPadding.right * .5 - (defaultPadding.right - 55)) : 0, offsetY: horizontal ? 80 - defaultPadding.top * .5 + (defaultPadding.bottom * .5 - 25) : 0, padding: padding, standalone: false, tickCount: ChartTheme_1.ChartBulletStyles.axisTickCount, tickValues: getTickValues(domain.y[0], domain.y[1]), width: chartSize.width }, axisComponent.props));
    var bulletChart = (<React.Fragment>
      {axis}
      {bulletGroupTitle}
      {bulletTitle}
      {qualitativeRange}
      {primarySegmentedMeasure}
      {primaryDotMeasure}
      {comparativeErrorMeasure}
      {comparativeWarningMeasure}
      {getComparativeZeroMeasure()}
      {getWrappedLegend()}
    </React.Fragment>);
    return standalone ? (<ChartContainer_1.ChartContainer desc={ariaDesc} height={height} title={ariaTitle} theme={theme} width={width}>
      {bulletChart}
    </ChartContainer_1.ChartContainer>) : (<React.Fragment>
      {bulletChart}
    </React.Fragment>);
};
hoist_non_react_statics_1["default"](exports.ChartBullet, victory_1.VictoryChart);
