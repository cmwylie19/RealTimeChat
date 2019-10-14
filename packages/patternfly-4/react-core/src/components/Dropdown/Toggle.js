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
var dropdown_1 = require("@patternfly/react-styles/css/components/Dropdown/dropdown");
var dropdownConstants_1 = require("./dropdownConstants");
var react_styles_1 = require("@patternfly/react-styles");
var constants_1 = require("../../helpers/constants");
var Toggle = /** @class */ (function (_super) {
    __extends(Toggle, _super);
    function Toggle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buttonRef = React.createRef();
        _this.componentDidMount = function () {
            document.addEventListener('mousedown', function (event) { return _this.onDocClick(event); });
            document.addEventListener('touchstart', function (event) { return _this.onDocClick(event); });
            document.addEventListener('keydown', function (event) { return _this.onEscPress(event); });
        };
        _this.componentWillUnmount = function () {
            document.removeEventListener('mousedown', function (event) { return _this.onDocClick(event); });
            document.removeEventListener('touchstart', function (event) { return _this.onDocClick(event); });
            document.removeEventListener('keydown', function (event) { return _this.onEscPress(event); });
        };
        _this.onDocClick = function (event) {
            if (_this.props.isOpen && _this.props.parentRef && _this.props.parentRef.current && !_this.props.parentRef.current.contains(event.target)) {
                _this.props.onToggle(false, event);
                _this.buttonRef.current.focus();
            }
        };
        _this.onEscPress = function (event) {
            var parentRef = _this.props.parentRef;
            var keyCode = event.keyCode || event.which;
            if (_this.props.isOpen &&
                (keyCode === constants_1.KEY_CODES.ESCAPE_KEY || event.key === 'Tab') &&
                parentRef && parentRef.current &&
                parentRef.current.contains(event.target)) {
                _this.props.onToggle(false, event);
                _this.buttonRef.current.focus();
            }
        };
        _this.onKeyDown = function (event) {
            if (event.key === 'Tab' && !_this.props.isOpen) {
                return;
            }
            event.preventDefault();
            if ((event.key === 'Tab' || event.key === 'Enter' || event.key === ' ') && _this.props.isOpen) {
                _this.props.onToggle(!_this.props.isOpen, event);
            }
            else if ((event.key === 'Enter' || event.key === ' ') && !_this.props.isOpen) {
                _this.props.onToggle(!_this.props.isOpen, event);
                _this.props.onEnter();
            }
        };
        return _this;
    }
    Toggle.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, children = _a.children, isOpen = _a.isOpen, isFocused = _a.isFocused, isActive = _a.isActive, isHovered = _a.isHovered, isDisabled = _a.isDisabled, isPlain = _a.isPlain, isPrimary = _a.isPrimary, isSplitButton = _a.isSplitButton, ariaHasPopup = _a.ariaHasPopup, onToggle = _a.onToggle, onEnter = _a.onEnter, parentRef = _a.parentRef, id = _a.id, type = _a.type, props = __rest(_a, ["className", "children", "isOpen", "isFocused", "isActive", "isHovered", "isDisabled", "isPlain", "isPrimary", "isSplitButton", "ariaHasPopup", "onToggle", "onEnter", "parentRef", "id", "type"]);
        return (<dropdownConstants_1.DropdownContext.Consumer>
        {function (_a) {
            var toggleClass = _a.toggleClass;
            return (<button {...props} id={id} ref={_this.buttonRef} className={react_styles_1.css(isSplitButton ? dropdown_1["default"].dropdownToggleButton : toggleClass || dropdown_1["default"].dropdownToggle, isFocused && dropdown_1["default"].modifiers.focus, isHovered && dropdown_1["default"].modifiers.hover, isActive && dropdown_1["default"].modifiers.active, isPlain && dropdown_1["default"].modifiers.plain, isPrimary && dropdown_1["default"].modifiers.primary, className)} type={type || 'button'} onClick={function (event) { return onToggle(!isOpen, event); }} aria-expanded={isOpen} aria-haspopup={ariaHasPopup} onKeyDown={function (event) { return _this.onKeyDown(event); }} disabled={isDisabled}>
            {children}
          </button>);
        }}
      </dropdownConstants_1.DropdownContext.Consumer>);
    };
    Toggle.defaultProps = {
        className: '',
        isOpen: false,
        isFocused: false,
        isHovered: false,
        isActive: false,
        isDisabled: false,
        isPlain: false,
        isPrimary: false,
        isSplitButton: false,
        onToggle: Function.prototype,
        onEnter: Function.prototype
    };
    return Toggle;
}(React.Component));
exports.Toggle = Toggle;
