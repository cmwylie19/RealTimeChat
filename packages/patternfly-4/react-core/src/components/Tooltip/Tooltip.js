"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var PopoverBase_1 = require("../../helpers/PopoverBase/PopoverBase");
var tooltip_1 = require("@patternfly/react-styles/css/components/Tooltip/tooltip");
require("@patternfly/react-styles/css/components/Tooltip/tippy.css");
require("@patternfly/react-styles/css/components/Tooltip/tippy-overrides.css");
var react_styles_1 = require("@patternfly/react-styles");
var TooltipContent_1 = require("./TooltipContent");
var constants_1 = require("../../helpers/constants");
var react_tokens_1 = require("@patternfly/react-tokens");
var TooltipPosition;
(function (TooltipPosition) {
    TooltipPosition["auto"] = "auto";
    TooltipPosition["top"] = "top";
    TooltipPosition["bottom"] = "bottom";
    TooltipPosition["left"] = "left";
    TooltipPosition["right"] = "right";
})(TooltipPosition = exports.TooltipPosition || (exports.TooltipPosition = {}));
var Tooltip = /** @class */ (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.storeTippyInstance = function (tip) {
            tip.popperChildren.tooltip.classList.add(tooltip_1["default"].tooltip);
            _this.tip = tip;
        };
        _this.handleEscKeyClick = function (event) {
            if (event.keyCode === constants_1.KEY_CODES.ESCAPE_KEY && _this.tip.state.isVisible) {
                _this.tip.hide();
            }
        };
        return _this;
    }
    Tooltip.prototype.componentDidMount = function () {
        document.addEventListener('keydown', this.handleEscKeyClick, false);
    };
    Tooltip.prototype.componentWillUnmount = function () {
        document.removeEventListener('keydown', this.handleEscKeyClick, false);
    };
    Tooltip.prototype.extendChildren = function () {
        return React.cloneElement(this.props.children, {
            isAppLauncher: this.props.isAppLauncher
        });
    };
    Tooltip.prototype.render = function () {
        var _a = this.props, position = _a.position, trigger = _a.trigger, isVisible = _a.isVisible, enableFlip = _a.enableFlip, children = _a.children, className = _a.className, bodyContent = _a.content, entryDelay = _a.entryDelay, exitDelay = _a.exitDelay, appendTo = _a.appendTo, zIndex = _a.zIndex, maxWidth = _a.maxWidth, isAppLauncher = _a.isAppLauncher, distance = _a.distance, aria = _a.aria, boundary = _a.boundary, flipBehavior = _a.flipBehavior, tippyProps = _a.tippyProps, rest = __rest(_a, ["position", "trigger", "isVisible", "enableFlip", "children", "className", "content", "entryDelay", "exitDelay", "appendTo", "zIndex", "maxWidth", "isAppLauncher", "distance", "aria", "boundary", "flipBehavior", "tippyProps"]);
        var content = (<div className={react_styles_1.css(!enableFlip && react_styles_1.getModifier(tooltip_1["default"], position, tooltip_1["default"].modifiers.top), className)} role="tooltip" {...rest}>
        <TooltipContent_1.TooltipContent>{bodyContent}</TooltipContent_1.TooltipContent>
      </div>);
        return (<PopoverBase_1["default"] {...tippyProps} arrow aria={aria} onCreate={this.storeTippyInstance} maxWidth={maxWidth} zIndex={zIndex} appendTo={appendTo} content={content} lazy animateFill={false} theme="pf-tooltip" performance placement={position} trigger={trigger} delay={[entryDelay, exitDelay]} distance={distance} flip={enableFlip} flipBehavior={flipBehavior} boundary={boundary} isVisible={isVisible} popperOptions={{
            modifiers: {
                preventOverflow: {
                    enabled: enableFlip
                },
                hide: {
                    enabled: enableFlip
                }
            }
        }}>
        {isAppLauncher ? this.extendChildren() : children}
      </PopoverBase_1["default"]>);
    };
    Tooltip.defaultProps = {
        position: 'top',
        trigger: 'mouseenter focus',
        isVisible: false,
        enableFlip: true,
        className: '',
        entryDelay: 500,
        exitDelay: 500,
        appendTo: function () { return document.body; },
        zIndex: 9999,
        maxWidth: react_tokens_1.c_tooltip_MaxWidth && react_tokens_1.c_tooltip_MaxWidth.value,
        isAppLauncher: false,
        distance: 15,
        aria: 'describedby',
        boundary: 'window',
        // For every initial starting position, there are 3 escape positions
        flipBehavior: ['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom'],
        tippyProps: {}
    };
    return Tooltip;
}(React.Component));
exports.Tooltip = Tooltip;
