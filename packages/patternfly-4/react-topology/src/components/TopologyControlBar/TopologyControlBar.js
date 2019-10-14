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
var react_core_1 = require("@patternfly/react-core");
var react_icons_1 = require("@patternfly/react-icons");
require("@patternfly/react-styles/css/components/Topology/topology-controlbar.css");
/* ID's for common control buttons */
exports.ZOOM_IN = 'zoom-in';
exports.ZOOM_OUT = 'zoom-out';
exports.FIT_TO_SCREEN = 'fit-to-screen';
exports.RESET_VIEW = 'reset-view';
exports.LEGEND = 'legend';
/* Default options for creating control buttons */
exports.defaultControlButtonsOptions = {
    zoomIn: true,
    zoomInIcon: <react_icons_1.SearchPlusIcon />,
    zoomInTip: 'Zoom In',
    zoomInAriaLabel: 'Zoom In',
    zoomInCallback: null,
    zoomInDisabled: false,
    zoomInHidden: false,
    zoomOut: true,
    zoomOutIcon: <react_icons_1.SearchMinusIcon />,
    zoomOutTip: 'Zoom Out',
    zoomOutAriaLabel: 'Zoom Out',
    zoomOutCallback: null,
    zoomOutDisabled: false,
    zoomOutHidden: false,
    fitToScreen: true,
    fitToScreenIcon: <react_icons_1.ExpandArrowsAltIcon />,
    fitToScreenTip: 'Fit to Screen',
    fitToScreenAriaLabel: 'Fit to Screen',
    fitToScreenCallback: null,
    fitToScreenDisabled: false,
    fitToScreenHidden: false,
    resetView: true,
    resetViewIcon: <react_icons_1.ExpandIcon />,
    resetViewTip: 'Reset View',
    resetViewAriaLabel: 'Reset View',
    resetViewCallback: null,
    resetViewDisabled: false,
    resetViewHidden: false,
    legend: true,
    legendIcon: 'Legend',
    legendTip: '',
    legendAriaLabel: null,
    legendCallback: null,
    legendDisabled: false,
    legendHidden: false,
    customButtons: []
};
/* Utility function to create the common control buttons, can pass null for all defaults, or specify overrides */
exports.createTopologyControlButtons = function (_a) {
    var _b = _a === void 0 ? exports.defaultControlButtonsOptions : _a, _c = _b.zoomIn, zoomIn = _c === void 0 ? exports.defaultControlButtonsOptions.zoomIn : _c, _d = _b.zoomInIcon, zoomInIcon = _d === void 0 ? exports.defaultControlButtonsOptions.zoomInIcon : _d, _e = _b.zoomInTip, zoomInTip = _e === void 0 ? exports.defaultControlButtonsOptions.zoomInTip : _e, _f = _b.zoomInAriaLabel, zoomInAriaLabel = _f === void 0 ? exports.defaultControlButtonsOptions.zoomInAriaLabel : _f, _g = _b.zoomInCallback, zoomInCallback = _g === void 0 ? exports.defaultControlButtonsOptions.zoomInCallback : _g, _h = _b.zoomInDisabled, zoomInDisabled = _h === void 0 ? exports.defaultControlButtonsOptions.zoomInDisabled : _h, _j = _b.zoomInHidden, zoomInHidden = _j === void 0 ? exports.defaultControlButtonsOptions.zoomInHidden : _j, _k = _b.zoomOut, zoomOut = _k === void 0 ? exports.defaultControlButtonsOptions.zoomOut : _k, _l = _b.zoomOutIcon, zoomOutIcon = _l === void 0 ? exports.defaultControlButtonsOptions.zoomOutIcon : _l, _m = _b.zoomOutTip, zoomOutTip = _m === void 0 ? exports.defaultControlButtonsOptions.zoomOutTip : _m, _o = _b.zoomOutAriaLabel, zoomOutAriaLabel = _o === void 0 ? exports.defaultControlButtonsOptions.zoomOutAriaLabel : _o, _p = _b.zoomOutCallback, zoomOutCallback = _p === void 0 ? exports.defaultControlButtonsOptions.zoomOutCallback : _p, _q = _b.zoomOutDisabled, zoomOutDisabled = _q === void 0 ? exports.defaultControlButtonsOptions.zoomOutDisabled : _q, _r = _b.zoomOutHidden, zoomOutHidden = _r === void 0 ? exports.defaultControlButtonsOptions.zoomOutHidden : _r, _s = _b.fitToScreen, fitToScreen = _s === void 0 ? exports.defaultControlButtonsOptions.fitToScreen : _s, _t = _b.fitToScreenIcon, fitToScreenIcon = _t === void 0 ? exports.defaultControlButtonsOptions.fitToScreenIcon : _t, _u = _b.fitToScreenTip, fitToScreenTip = _u === void 0 ? exports.defaultControlButtonsOptions.fitToScreenTip : _u, _v = _b.fitToScreenAriaLabel, fitToScreenAriaLabel = _v === void 0 ? exports.defaultControlButtonsOptions.fitToScreenAriaLabel : _v, _w = _b.fitToScreenCallback, fitToScreenCallback = _w === void 0 ? exports.defaultControlButtonsOptions.fitToScreenCallback : _w, _x = _b.fitToScreenDisabled, fitToScreenDisabled = _x === void 0 ? exports.defaultControlButtonsOptions.fitToScreenDisabled : _x, _y = _b.fitToScreenHidden, fitToScreenHidden = _y === void 0 ? exports.defaultControlButtonsOptions.fitToScreenHidden : _y, _z = _b.resetView, resetView = _z === void 0 ? exports.defaultControlButtonsOptions.resetView : _z, _0 = _b.resetViewIcon, resetViewIcon = _0 === void 0 ? exports.defaultControlButtonsOptions.resetViewIcon : _0, _1 = _b.resetViewTip, resetViewTip = _1 === void 0 ? exports.defaultControlButtonsOptions.resetViewTip : _1, _2 = _b.resetViewAriaLabel, resetViewAriaLabel = _2 === void 0 ? exports.defaultControlButtonsOptions.resetViewAriaLabel : _2, _3 = _b.resetViewCallback, resetViewCallback = _3 === void 0 ? exports.defaultControlButtonsOptions.resetViewCallback : _3, _4 = _b.resetViewDisabled, resetViewDisabled = _4 === void 0 ? exports.defaultControlButtonsOptions.resetViewDisabled : _4, _5 = _b.resetViewHidden, resetViewHidden = _5 === void 0 ? exports.defaultControlButtonsOptions.resetViewHidden : _5, _6 = _b.legend, legend = _6 === void 0 ? exports.defaultControlButtonsOptions.legend : _6, _7 = _b.legendIcon, legendIcon = _7 === void 0 ? exports.defaultControlButtonsOptions.legendIcon : _7, _8 = _b.legendTip, legendTip = _8 === void 0 ? exports.defaultControlButtonsOptions.legendTip : _8, _9 = _b.legendAriaLabel, legendAriaLabel = _9 === void 0 ? exports.defaultControlButtonsOptions.legendAriaLabel : _9, _10 = _b.legendCallback, legendCallback = _10 === void 0 ? exports.defaultControlButtonsOptions.legendCallback : _10, _11 = _b.legendDisabled, legendDisabled = _11 === void 0 ? exports.defaultControlButtonsOptions.legendDisabled : _11, _12 = _b.legendHidden, legendHidden = _12 === void 0 ? exports.defaultControlButtonsOptions.legendHidden : _12, _13 = _b.customButtons, customButtons = _13 === void 0 ? exports.defaultControlButtonsOptions.customButtons : _13;
    var controlButtons = [];
    if (zoomIn) {
        controlButtons.push({
            id: exports.ZOOM_IN,
            icon: zoomInIcon,
            tooltip: zoomInTip,
            ariaLabel: zoomInAriaLabel,
            callback: zoomInCallback,
            disabled: zoomInDisabled,
            hidden: zoomInHidden
        });
    }
    if (zoomOut) {
        controlButtons.push({
            id: exports.ZOOM_OUT,
            icon: zoomOutIcon,
            tooltip: zoomOutTip,
            ariaLabel: zoomOutAriaLabel,
            callback: zoomOutCallback,
            disabled: zoomOutDisabled,
            hidden: zoomOutHidden
        });
    }
    if (fitToScreen) {
        controlButtons.push({
            id: exports.FIT_TO_SCREEN,
            icon: fitToScreenIcon,
            tooltip: fitToScreenTip,
            ariaLabel: fitToScreenAriaLabel,
            callback: fitToScreenCallback,
            disabled: fitToScreenDisabled,
            hidden: fitToScreenHidden
        });
    }
    if (resetView) {
        controlButtons.push({
            id: exports.RESET_VIEW,
            icon: resetViewIcon,
            tooltip: resetViewTip,
            ariaLabel: resetViewAriaLabel,
            callback: resetViewCallback,
            disabled: resetViewDisabled,
            hidden: resetViewHidden
        });
    }
    if (customButtons) {
        controlButtons.push.apply(controlButtons, customButtons);
    }
    if (legend) {
        controlButtons.push({
            id: exports.LEGEND,
            icon: legendIcon,
            tooltip: legendTip,
            ariaLabel: legendAriaLabel,
            callback: legendCallback,
            disabled: legendDisabled,
            hidden: legendHidden
        });
    }
    return controlButtons;
};
exports.TopologyControlBar = function (_a) {
    var _b = _a.className, className = _b === void 0 ? null : _b, _c = _a.children, children = _c === void 0 ? null : _c, _d = _a.controlButtons, controlButtons = _d === void 0 ? [] : _d, _e = _a.onButtonClick, onButtonClick = _e === void 0 ? function () { return undefined; } : _e, props = __rest(_a, ["className", "children", "controlButtons", "onButtonClick"]);
    var handleButtonClick = function (event, button) {
        event.preventDefault();
        onButtonClick(button.id);
        if (button.callback) {
            button.callback(button.id);
        }
    };
    var renderButton = function (button) {
        var renderedButton = (<react_core_1.Button id={button.id} className={"pf-topology-control-bar__button" + (button.disabled ? ' pf-m-disabled' : '')} onClick={function (event) { return handleButtonClick(event, button); }} disabled={button.disabled} aria-disabled={button.disabled} variant="tertiary">
        {button.icon}
        {(button.ariaLabel || button.tooltip) && (<span className="sr-only">{button.ariaLabel || button.tooltip}</span>)}
      </react_core_1.Button>);
        if (button.tooltip) {
            return (<react_core_1.Tooltip content={button.tooltip}>{renderedButton}</react_core_1.Tooltip>);
        }
        return renderedButton;
    };
    return (<react_core_1.Toolbar className={className} {...props}>
      <react_core_1.ToolbarGroup>
        {controlButtons.map(function (button) {
        return button.hidden ? null : <react_core_1.ToolbarItem key={button.id}>{renderButton(button)}</react_core_1.ToolbarItem>;
    })}
        {children}
      </react_core_1.ToolbarGroup>
    </react_core_1.Toolbar>);
};
