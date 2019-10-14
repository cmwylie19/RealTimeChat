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
var react_icons_1 = require("@patternfly/react-icons");
var context_selector_1 = require("@patternfly/react-styles/css/components/ContextSelector/context-selector");
var react_styles_1 = require("@patternfly/react-styles");
var constants_1 = require("../../helpers/constants");
var ContextSelectorToggle = /** @class */ (function (_super) {
    __extends(ContextSelectorToggle, _super);
    function ContextSelectorToggle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggle = React.createRef();
        _this.componentDidMount = function () {
            document.addEventListener('mousedown', _this.onDocClick);
            document.addEventListener('touchstart', _this.onDocClick);
            document.addEventListener('keydown', _this.onEscPress);
        };
        _this.componentWillUnmount = function () {
            document.removeEventListener('mousedown', _this.onDocClick);
            document.removeEventListener('touchstart', _this.onDocClick);
            document.removeEventListener('keydown', _this.onEscPress);
        };
        _this.onDocClick = function (event) {
            var _a = _this.props, isOpen = _a.isOpen, parentRef = _a.parentRef, onToggle = _a.onToggle;
            if (isOpen && parentRef && !parentRef.contains(event.target)) {
                onToggle(null, false);
                _this.toggle.current.focus();
            }
        };
        _this.onEscPress = function (event) {
            var _a = _this.props, isOpen = _a.isOpen, parentRef = _a.parentRef, onToggle = _a.onToggle;
            var keyCode = event.keyCode || event.which;
            if (isOpen && keyCode === constants_1.KEY_CODES.ESCAPE_KEY && parentRef && parentRef.contains(event.target)) {
                onToggle(null, false);
                _this.toggle.current.focus();
            }
        };
        _this.onKeyDown = function (event) {
            var _a = _this.props, isOpen = _a.isOpen, onToggle = _a.onToggle, onEnter = _a.onEnter;
            if ((event.keyCode === constants_1.KEY_CODES.TAB && !isOpen) || event.key !== constants_1.KEY_CODES.ENTER) {
                return;
            }
            event.preventDefault();
            if ((event.keyCode === constants_1.KEY_CODES.TAB || event.keyCode === constants_1.KEY_CODES.ENTER || event.key !== constants_1.KEY_CODES.SPACE) &&
                isOpen) {
                onToggle(null, !isOpen);
            }
            else if ((event.keyCode === constants_1.KEY_CODES.ENTER || event.key === ' ') && !isOpen) {
                onToggle(null, !isOpen);
                onEnter();
            }
        };
        return _this;
    }
    ContextSelectorToggle.prototype.render = function () {
        var _a = this.props, className = _a.className, toggleText = _a.toggleText, isOpen = _a.isOpen, isFocused = _a.isFocused, isActive = _a.isActive, isHovered = _a.isHovered, onToggle = _a.onToggle, onEnter = _a.onEnter, parentRef = _a.parentRef, id = _a.id, props = __rest(_a, ["className", "toggleText", "isOpen", "isFocused", "isActive", "isHovered", "onToggle", "onEnter", "parentRef", "id"]);
        return (<button {...props} id={id} ref={this.toggle} className={react_styles_1.css(context_selector_1["default"].contextSelectorToggle, isFocused && context_selector_1["default"].modifiers.focus, isHovered && context_selector_1["default"].modifiers.hover, isActive && context_selector_1["default"].modifiers.active, className)} type="button" onClick={function (event) { return onToggle(event, !isOpen); }} aria-expanded={isOpen} onKeyDown={this.onKeyDown}>
        <span className={react_styles_1.css(context_selector_1["default"].contextSelectorToggleText)}>{toggleText}</span>
        <react_icons_1.CaretDownIcon className={react_styles_1.css(context_selector_1["default"].contextSelectorToggleIcon)} aria-hidden/>
      </button>);
    };
    ContextSelectorToggle.defaultProps = {
        className: '',
        toggleText: '',
        isOpen: false,
        onEnter: function () { return undefined; },
        parentRef: null,
        isFocused: false,
        isHovered: false,
        isActive: false,
        onToggle: function (event, value) { return undefined; }
    };
    return ContextSelectorToggle;
}(React.Component));
exports.ContextSelectorToggle = ContextSelectorToggle;
