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
var victory_core_1 = require("victory-core");
var chart_theme_1 = require("../ChartUtils/chart-theme");
var ChartContainer_1 = require("../ChartContainer");
var ChartLabel_1 = require("../ChartLabel");
var ChartPie_1 = require("../ChartPie");
var ChartTheme_1 = require("../ChartTheme");
var ChartUtils_1 = require("../ChartUtils");
var ChartDonutLabelPosition;
(function (ChartDonutLabelPosition) {
    ChartDonutLabelPosition["centroid"] = "centroid";
    ChartDonutLabelPosition["endAngle"] = "endAngle";
    ChartDonutLabelPosition["startAngle"] = "startAngle";
})(ChartDonutLabelPosition = exports.ChartDonutLabelPosition || (exports.ChartDonutLabelPosition = {}));
var ChartDonutSortOrder;
(function (ChartDonutSortOrder) {
    ChartDonutSortOrder["ascending"] = "ascending";
    ChartDonutSortOrder["descending"] = "descending";
})(ChartDonutSortOrder = exports.ChartDonutSortOrder || (exports.ChartDonutSortOrder = {}));
var ChartDonutSubTitlePosition;
(function (ChartDonutSubTitlePosition) {
    ChartDonutSubTitlePosition["bottom"] = "bottom";
    ChartDonutSubTitlePosition["center"] = "center";
    ChartDonutSubTitlePosition["right"] = "right";
})(ChartDonutSubTitlePosition = exports.ChartDonutSubTitlePosition || (exports.ChartDonutSubTitlePosition = {}));
exports.ChartDonut = function (_a) {
    var _b = _a.allowTooltip, allowTooltip = _b === void 0 ? true : _b, ariaDesc = _a.ariaDesc, ariaTitle = _a.ariaTitle, _c = _a.capHeight, capHeight = _c === void 0 ? 1.1 : _c, _d = _a.containerComponent, containerComponent = _d === void 0 ? <ChartContainer_1.ChartContainer /> : _d, innerRadius = _a.innerRadius, _e = _a.legendPosition, legendPosition = _e === void 0 ? ChartTheme_1.ChartCommonStyles.legend.position : _e, padding = _a.padding, radius = _a.radius, _f = _a.standalone, standalone = _f === void 0 ? true : _f, subTitle = _a.subTitle, _g = _a.subTitleComponent, subTitleComponent = _g === void 0 ? <ChartLabel_1.ChartLabel /> : _g, _h = _a.subTitlePosition, subTitlePosition = _h === void 0 ? ChartTheme_1.ChartDonutStyles.label.subTitlePosition : _h, themeColor = _a.themeColor, themeVariant = _a.themeVariant, title = _a.title, _j = _a.titleComponent, titleComponent = _j === void 0 ? <ChartLabel_1.ChartLabel /> : _j, 
    // destructure last
    _k = _a.theme, 
    // destructure last
    theme = _k === void 0 ? chart_theme_1.getDonutTheme(themeColor, themeVariant) : _k, _l = _a.height, height = _l === void 0 ? theme.pie.height : _l, _m = _a.width, width = _m === void 0 ? theme.pie.width : _m, rest = __rest(_a, ["allowTooltip", "ariaDesc", "ariaTitle", "capHeight", "containerComponent", "innerRadius", "legendPosition", "padding", "radius", "standalone", "subTitle", "subTitleComponent", "subTitlePosition", "themeColor", "themeVariant", "title", "titleComponent", "theme", "height", "width"]);
    var defaultPadding = {
        bottom: ChartUtils_1.getPaddingForSide('bottom', padding, theme.pie.padding),
        left: ChartUtils_1.getPaddingForSide('left', padding, theme.pie.padding),
        right: ChartUtils_1.getPaddingForSide('right', padding, theme.pie.padding),
        top: ChartUtils_1.getPaddingForSide('top', padding, theme.pie.padding)
    };
    var chartRadius = radius ? radius : victory_core_1.Helpers.getRadius({
        height: height,
        width: width,
        padding: defaultPadding
    });
    var chartInnerRadius = innerRadius ? innerRadius : chartRadius - 9; // Todo: Add pf-core variable
    // Returns subtitle
    var getSubTitle = function () {
        if (!subTitle || subTitlePosition === ChartDonutSubTitlePosition.center) {
            return null;
        }
        var subTitleProps = subTitleComponent.props ? subTitleComponent.props : {};
        return React.cloneElement(subTitleComponent, __assign({ style: ChartTheme_1.ChartDonutStyles.label.subTitle, text: subTitle, textAnchor: subTitlePosition === 'right' ? 'start' : 'middle', verticalAnchor: 'middle', x: ChartUtils_1.getPieLabelX({
                height: height,
                labelPosition: subTitlePosition,
                legendPosition: legendPosition,
                padding: defaultPadding,
                width: width
            }), y: ChartUtils_1.getPieLabelY({
                height: height,
                labelPosition: subTitlePosition,
                padding: defaultPadding,
                width: width
            }) }, subTitleProps));
    };
    // Returns title
    var getTitle = function () {
        if (!title) {
            return null;
        }
        var titleProps = titleComponent ? titleComponent.props : {};
        var showBoth = title && subTitle && subTitlePosition == ChartDonutSubTitlePosition.center;
        return React.cloneElement(titleComponent, __assign(__assign(__assign({}, showBoth && { capHeight: capHeight }), { style: [ChartTheme_1.ChartDonutStyles.label.title, ChartTheme_1.ChartDonutStyles.label.subTitle], text: showBoth ? [title, subTitle] : title, textAnchor: 'middle', verticalAnchor: 'middle', x: ChartUtils_1.getPieLabelX({
                height: height,
                labelPosition: 'center',
                legendPosition: legendPosition,
                padding: defaultPadding,
                width: width
            }), y: ChartUtils_1.getPieLabelY({
                height: height,
                labelPosition: 'center',
                padding: defaultPadding,
                width: width
            }) }), titleProps));
    };
    var chart = (<ChartPie_1.ChartPie allowTooltip={allowTooltip} height={height} innerRadius={chartInnerRadius > 0 ? chartInnerRadius : 0} legendPosition={legendPosition} padding={padding} radius={chartRadius > 0 ? chartRadius : 0} standalone={false} theme={theme} width={width} {...rest}/>);
    // Clone so users can override container props
    var StandaloneContainer = function (_a) {
        var children = _a.children;
        return React.cloneElement(containerComponent, __assign({ desc: ariaDesc, height: height, title: ariaTitle, width: width,
            theme: theme }, containerComponent.props), children);
    };
    return standalone ? (<StandaloneContainer>
      {chart}
      {getTitle()}
      {getSubTitle()}
    </StandaloneContainer>) : (<React.Fragment>
      {chart}
      {getTitle()}
      {getSubTitle()}
    </React.Fragment>);
};
// Note: VictoryPie.role must be hoisted
hoist_non_react_statics_1["default"](exports.ChartDonut, victory_1.VictoryPie);
