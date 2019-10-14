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
var select_1 = require("@patternfly/react-styles/css/components/Select/select");
var check_1 = require("@patternfly/react-styles/css/components/Check/check");
var react_styles_1 = require("@patternfly/react-styles");
var selectConstants_1 = require("./selectConstants");
var CheckboxSelectOption = /** @class */ (function (_super) {
    __extends(CheckboxSelectOption, _super);
    function CheckboxSelectOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = React.createRef();
        _this.onKeyDown = function (event) {
            if (event.key === selectConstants_1.KeyTypes.Tab) {
                return;
            }
            event.preventDefault();
            if (event.key === selectConstants_1.KeyTypes.ArrowUp) {
                _this.props.keyHandler(_this.props.index, 'up');
            }
            else if (event.key === selectConstants_1.KeyTypes.ArrowDown) {
                _this.props.keyHandler(_this.props.index, 'down');
            }
            else if (event.key === selectConstants_1.KeyTypes.Enter) {
                _this.ref.current.click();
                _this.ref.current.focus();
            }
        };
        return _this;
    }
    CheckboxSelectOption.prototype.componentDidMount = function () {
        this.props.sendRef(this.ref.current, this.props.index);
    };
    CheckboxSelectOption.prototype.componentDidUpdate = function () {
        this.props.sendRef(this.ref.current, this.props.index);
    };
    CheckboxSelectOption.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, className = _a.className, value = _a.value, onClick = _a.onClick, isDisabled = _a.isDisabled, isChecked = _a.isChecked, sendRef = _a.sendRef, keyHandler = _a.keyHandler, index = _a.index, props = __rest(_a, ["children", "className", "value", "onClick", "isDisabled", "isChecked", "sendRef", "keyHandler", "index"]);
        return (<selectConstants_1.SelectConsumer>
        {function (_a) {
            var onSelect = _a.onSelect;
            return (<label {...props} className={react_styles_1.css(check_1["default"].check, select_1["default"].selectMenuItem, isDisabled && select_1["default"].modifiers.disabled, className)} onKeyDown={_this.onKeyDown}>
            <input id={value} className={react_styles_1.css(check_1["default"].checkInput)} type="checkbox" onChange={function (event) {
                if (!isDisabled) {
                    onClick(event);
                    onSelect(event, value);
                }
            }} ref={_this.ref} defaultChecked={isChecked || false} disabled={isDisabled}/>
            <span className={react_styles_1.css(check_1["default"].checkLabel, isDisabled && select_1["default"].modifiers.disabled)}>{children || value}</span>
          </label>);
        }}
      </selectConstants_1.SelectConsumer>);
    };
    CheckboxSelectOption.defaultProps = {
        className: '',
        value: '',
        index: 0,
        isDisabled: false,
        isChecked: false,
        onClick: Function.prototype,
        sendRef: Function.prototype,
        keyHandler: Function.prototype
    };
    return CheckboxSelectOption;
}(React.Component));
exports.CheckboxSelectOption = CheckboxSelectOption;
