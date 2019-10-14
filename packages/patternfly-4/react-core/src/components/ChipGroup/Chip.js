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
exports.__esModule = true;
var React = require("react");
var react_styles_1 = require("@patternfly/react-styles");
var ChipButton_1 = require("./ChipButton");
var Tooltip_1 = require("../Tooltip");
var react_icons_1 = require("@patternfly/react-icons");
var chip_1 = require("@patternfly/react-styles/css/components/Chip/chip");
var GenerateId_1 = require("../../helpers/GenerateId/GenerateId");
var Chip = /** @class */ (function (_super) {
    __extends(Chip, _super);
    function Chip(props) {
        var _this = _super.call(this, props) || this;
        _this.span = React.createRef();
        _this.renderOverflowChip = function () {
            var _a = _this.props, children = _a.children, className = _a.className, onClick = _a.onClick;
            var Component = _this.props.component;
            return (<Component className={react_styles_1.css(chip_1["default"].chip, chip_1["default"].modifiers.overflow, className)}>
        <ChipButton_1.ChipButton onClick={onClick}>
          <span className={react_styles_1.css(chip_1["default"].chipText)}>{children}</span>
        </ChipButton_1.ChipButton>
      </Component>);
        };
        _this.renderChip = function (randomId) {
            var _a = _this.props, children = _a.children, closeBtnAriaLabel = _a.closeBtnAriaLabel, tooltipPosition = _a.tooltipPosition, className = _a.className, onClick = _a.onClick, isReadOnly = _a.isReadOnly;
            var Component = _this.props.component;
            if (_this.state.isTooltipVisible) {
                return (<Tooltip_1.Tooltip position={tooltipPosition} content={children}>
          <Component className={react_styles_1.css(chip_1["default"].chip, isReadOnly && chip_1["default"].modifiers.readOnly, className)}>
            <span ref={_this.span} className={react_styles_1.css(chip_1["default"].chipText)} id={randomId}>
              {children}
            </span>
            {!isReadOnly && (<ChipButton_1.ChipButton onClick={onClick} ariaLabel={closeBtnAriaLabel} id={"remove_" + randomId} aria-labelledby={"remove_" + randomId + " " + randomId}>
                <react_icons_1.TimesCircleIcon aria-hidden="true"/>
              </ChipButton_1.ChipButton>)}
          </Component>
        </Tooltip_1.Tooltip>);
            }
            return (<Component className={react_styles_1.css(chip_1["default"].chip, isReadOnly && chip_1["default"].modifiers.readOnly, className)}>
        <span ref={_this.span} className={react_styles_1.css(chip_1["default"].chipText)} id={randomId}>
          {children}
        </span>
        {!isReadOnly && (<ChipButton_1.ChipButton onClick={onClick} ariaLabel={closeBtnAriaLabel} id={"remove_" + randomId} aria-labelledby={"remove_" + randomId + " " + randomId}>
            <react_icons_1.TimesCircleIcon aria-hidden="true"/>
          </ChipButton_1.ChipButton>)}
      </Component>);
        };
        _this.state = {
            isTooltipVisible: false
        };
        return _this;
    }
    Chip.prototype.componentDidMount = function () {
        this.setState({
            isTooltipVisible: Boolean(this.span.current &&
                this.span.current.offsetWidth < this.span.current.scrollWidth)
        });
    };
    Chip.prototype.render = function () {
        var _this = this;
        var isOverflowChip = this.props.isOverflowChip;
        return (<GenerateId_1["default"]>{function (randomId) { return (isOverflowChip ? _this.renderOverflowChip() : _this.renderChip(randomId)); }}</GenerateId_1["default"]>);
    };
    Chip.defaultProps = {
        closeBtnAriaLabel: 'close',
        className: '',
        isOverflowChip: false,
        isReadOnly: false,
        tooltipPosition: 'top',
        onClick: function () { return undefined; },
        component: 'div'
    };
    return Chip;
}(React.Component));
exports.Chip = Chip;
