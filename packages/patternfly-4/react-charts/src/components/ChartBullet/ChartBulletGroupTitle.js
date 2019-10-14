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
var victory_core_1 = require("victory-core");
var ChartContainer_1 = require("../ChartContainer");
var ChartLabel_1 = require("../ChartLabel");
var ChartTheme_1 = require("../ChartTheme");
var ChartUtils_1 = require("../ChartUtils");
exports.ChartBulletGroupTitle = function (_a) {
    var ariaDesc = _a.ariaDesc, ariaTitle = _a.ariaTitle, _b = _a.capHeight, capHeight = _b === void 0 ? 1.1 : _b, _c = _a.dividerComponent, dividerComponent = _c === void 0 ? <victory_core_1.Line /> : _c, padding = _a.padding, _d = _a.standalone, standalone = _d === void 0 ? true : _d, _e = _a.subTitleComponent, subTitleComponent = _e === void 0 ? <ChartLabel_1.ChartLabel /> : _e, subTitle = _a.subTitle, themeColor = _a.themeColor, themeVariant = _a.themeVariant, title = _a.title, _f = _a.titleComponent, titleComponent = _f === void 0 ? <ChartLabel_1.ChartLabel /> : _f, 
    // destructure last
    _g = _a.theme, 
    // destructure last
    theme = _g === void 0 ? ChartUtils_1.getBulletGroupTitleTheme(themeColor, themeVariant) : _g, _h = _a.height, height = _h === void 0 ? theme.chart.height : _h, _j = _a.width, width = _j === void 0 ? theme.chart.width : _j, rest = __rest(_a, ["ariaDesc", "ariaTitle", "capHeight", "dividerComponent", "padding", "standalone", "subTitleComponent", "subTitle", "themeColor", "themeVariant", "title", "titleComponent", "theme", "height", "width"]);
    var defaultPadding = {
        bottom: ChartUtils_1.getPaddingForSide('bottom', padding, theme.chart.padding),
        left: ChartUtils_1.getPaddingForSide('left', padding, theme.chart.padding),
        right: ChartUtils_1.getPaddingForSide('right', padding, theme.chart.padding),
        top: ChartUtils_1.getPaddingForSide('top', padding, theme.chart.padding)
    };
    var labelPadding = {
        bottom: ChartUtils_1.getPaddingForSide('bottom', padding, theme.legend.style.labels.padding),
        left: ChartUtils_1.getPaddingForSide('left', padding, theme.legend.style.labels.padding),
        right: ChartUtils_1.getPaddingForSide('right', padding, theme.legend.style.labels.padding),
        top: ChartUtils_1.getPaddingForSide('top', padding, theme.legend.style.labels.padding)
    };
    // Horizontal divider to render under the group title
    var getDivider = function () {
        var titleSize = ChartUtils_1.getLabelTextSize({ text: title, theme: theme });
        var subTitleSize = ChartUtils_1.getLabelTextSize({ text: subTitle, theme: theme });
        var dy = title && subTitle
            ? titleSize.height + subTitleSize.height + labelPadding.top + labelPadding.bottom
            : titleSize.height + labelPadding.top + labelPadding.bottom;
        return React.cloneElement(dividerComponent, __assign({ x1: defaultPadding.left, x2: width - defaultPadding.right, y1: defaultPadding.top + dy, y2: defaultPadding.top + dy, style: theme.line.style.data }, dividerComponent.props));
    };
    // Returns title
    var getTitle = function () {
        var titleProps = titleComponent ? titleComponent.props : {};
        var showBoth = title && subTitle;
        return React.cloneElement(titleComponent, __assign(__assign(__assign({}, showBoth && { capHeight: capHeight }), { style: [ChartTheme_1.ChartBulletStyles.label.groupTitle, ChartTheme_1.ChartBulletStyles.label.subTitle], text: showBoth ? [title, subTitle] : title, textAnchor: 'middle', verticalAnchor: 'middle', x: ChartUtils_1.getBulletLabelX({
                chartWidth: width,
                labelPosition: 'top'
            }), y: ChartUtils_1.getBulletLabelY({
                chartHeight: height,
                dy: defaultPadding.top,
                labelPosition: 'top'
            }) }), titleProps));
    };
    var groupTitle = (Boolean(title) && (<React.Fragment>
        {getTitle()}
        {getDivider()}
      </React.Fragment>));
    return standalone ? (<ChartContainer_1.ChartContainer desc={ariaDesc} height={height} title={ariaTitle} width={width}>
      {groupTitle}
    </ChartContainer_1.ChartContainer>) : (<React.Fragment>
      {groupTitle}
    </React.Fragment>);
};
