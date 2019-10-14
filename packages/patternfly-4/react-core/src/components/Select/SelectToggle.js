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
var button_1 = require("@patternfly/react-styles/css/components/Button/button");
var react_styles_1 = require("@patternfly/react-styles");
var react_icons_1 = require("@patternfly/react-icons");
var selectConstants_1 = require("./selectConstants");
var SelectToggle = /** @class */ (function (_super) {
    __extends(SelectToggle, _super);
    function SelectToggle(props) {
        var _this = _super.call(this, props) || this;
        _this.onDocClick = function (event) {
            var _a = _this.props, parentRef = _a.parentRef, isExpanded = _a.isExpanded, onToggle = _a.onToggle, onClose = _a.onClose;
            if (isExpanded && parentRef && !parentRef.current.contains(event.target)) {
                onToggle(false);
                onClose();
                _this.toggle.current.focus();
            }
        };
        _this.onEscPress = function (event) {
            var _a = _this.props, parentRef = _a.parentRef, isExpanded = _a.isExpanded, variant = _a.variant, onToggle = _a.onToggle, onClose = _a.onClose;
            if (event.key === selectConstants_1.KeyTypes.Tab && variant === selectConstants_1.SelectVariant.checkbox) {
                return;
            }
            if (isExpanded &&
                (event.key === selectConstants_1.KeyTypes.Escape || event.key === selectConstants_1.KeyTypes.Tab) &&
                parentRef &&
                parentRef.current.contains(event.target)) {
                onToggle(false);
                onClose();
                _this.toggle.current.focus();
            }
        };
        _this.onKeyDown = function (event) {
            var _a = _this.props, isExpanded = _a.isExpanded, onToggle = _a.onToggle, variant = _a.variant, onClose = _a.onClose, onEnter = _a.onEnter, handleTypeaheadKeys = _a.handleTypeaheadKeys;
            if ((event.key === selectConstants_1.KeyTypes.ArrowDown || event.key === selectConstants_1.KeyTypes.ArrowUp) &&
                (variant === selectConstants_1.SelectVariant.typeahead || variant === selectConstants_1.SelectVariant.typeaheadMulti)) {
                handleTypeaheadKeys((event.key === selectConstants_1.KeyTypes.ArrowDown && 'down') || (event.key === selectConstants_1.KeyTypes.ArrowUp && 'up'));
            }
            if (event.key === selectConstants_1.KeyTypes.Enter &&
                (variant === selectConstants_1.SelectVariant.typeahead || variant === selectConstants_1.SelectVariant.typeaheadMulti)) {
                if (isExpanded) {
                    handleTypeaheadKeys('enter');
                }
                else {
                    onToggle(!isExpanded);
                }
            }
            if ((event.key === selectConstants_1.KeyTypes.Tab && variant === selectConstants_1.SelectVariant.checkbox) ||
                (event.key === selectConstants_1.KeyTypes.Tab && !isExpanded) ||
                (event.key !== selectConstants_1.KeyTypes.Enter && event.key !== selectConstants_1.KeyTypes.Space) ||
                ((event.key === selectConstants_1.KeyTypes.Space || event.key === selectConstants_1.KeyTypes.Enter) &&
                    (variant === selectConstants_1.SelectVariant.typeahead || variant === selectConstants_1.SelectVariant.typeaheadMulti))) {
                return;
            }
            event.preventDefault();
            if ((event.key === selectConstants_1.KeyTypes.Tab || event.key === selectConstants_1.KeyTypes.Enter || event.key === selectConstants_1.KeyTypes.Space) && isExpanded) {
                onToggle(!isExpanded);
                onClose();
                _this.toggle.current.focus();
            }
            else if ((event.key === selectConstants_1.KeyTypes.Enter || event.key === selectConstants_1.KeyTypes.Space) && !isExpanded) {
                onToggle(!isExpanded);
                onEnter();
            }
        };
        var variant = props.variant;
        var isTypeahead = variant === selectConstants_1.SelectVariant.typeahead || variant === selectConstants_1.SelectVariant.typeaheadMulti;
        _this.toggle = isTypeahead ? React.createRef() : React.createRef();
        return _this;
    }
    SelectToggle.prototype.componentDidMount = function () {
        document.addEventListener('mousedown', this.onDocClick);
        document.addEventListener('touchstart', this.onDocClick);
        document.addEventListener('keydown', this.onEscPress);
    };
    SelectToggle.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.onDocClick);
        document.removeEventListener('touchstart', this.onDocClick);
        document.removeEventListener('keydown', this.onEscPress);
    };
    SelectToggle.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, isExpanded = _a.isExpanded, isFocused = _a.isFocused, isActive = _a.isActive, isHovered = _a.isHovered, isPlain = _a.isPlain, isDisabled = _a.isDisabled, variant = _a.variant, onToggle = _a.onToggle, onEnter = _a.onEnter, onClose = _a.onClose, handleTypeaheadKeys = _a.handleTypeaheadKeys, parentRef = _a.parentRef, id = _a.id, type = _a.type, ariaLabelledBy = _a.ariaLabelledBy, ariaLabelToggle = _a.ariaLabelToggle, props = __rest(_a, ["className", "children", "isExpanded", "isFocused", "isActive", "isHovered", "isPlain", "isDisabled", "variant", "onToggle", "onEnter", "onClose", "handleTypeaheadKeys", "parentRef", "id", "type", "ariaLabelledBy", "ariaLabelToggle"]);
        var isTypeahead = variant === selectConstants_1.SelectVariant.typeahead || variant === selectConstants_1.SelectVariant.typeaheadMulti;
        var toggleProps = {
            id: id,
            'aria-labelledby': ariaLabelledBy,
            'aria-expanded': isExpanded,
            'aria-haspopup': (variant !== selectConstants_1.SelectVariant.checkbox && 'listbox') || null
        };
        return (<React.Fragment>
        {!isTypeahead && (<button {...props} {...toggleProps} ref={this.toggle} type={type} className={react_styles_1.css(select_1["default"].selectToggle, isFocused && select_1["default"].modifiers.focus, isHovered && select_1["default"].modifiers.hover, isDisabled && select_1["default"].modifiers.disabled, isActive && select_1["default"].modifiers.active, isPlain && select_1["default"].modifiers.plain, className)} onClick={function (_event) {
            onToggle(!isExpanded);
            if (isExpanded) {
                onClose();
            }
        }} onKeyDown={this.onKeyDown} disabled={isDisabled}>
            {children}
            <react_icons_1.CaretDownIcon className={react_styles_1.css(select_1["default"].selectToggleArrow)}/>
          </button>)}
        {isTypeahead && (<div {...props} ref={this.toggle} className={react_styles_1.css(select_1["default"].selectToggle, isFocused && select_1["default"].modifiers.focus, isHovered && select_1["default"].modifiers.hover, isActive && select_1["default"].modifiers.active, isDisabled && select_1["default"].modifiers.disabled, isPlain && select_1["default"].modifiers.plain, isTypeahead && select_1["default"].modifiers.typeahead, className)} onClick={function (_event) {
            if (!isDisabled) {
                onToggle(true);
            }
        }} onKeyDown={this.onKeyDown}>
            {children}
            <button {...toggleProps} className={react_styles_1.css(button_1["default"].button, select_1["default"].selectToggleButton)} aria-label={ariaLabelToggle} onClick={function (_event) {
            _event.stopPropagation();
            onToggle(!isExpanded);
            if (isExpanded) {
                onClose();
            }
        }} disabled={isDisabled}>
              <react_icons_1.CaretDownIcon className={react_styles_1.css(select_1["default"].selectToggleArrow)}/>
            </button>
          </div>)}
      </React.Fragment>);
    };
    SelectToggle.defaultProps = {
        className: '',
        isExpanded: false,
        isFocused: false,
        isHovered: false,
        isActive: false,
        isPlain: false,
        isDisabled: false,
        variant: false,
        ariaLabelledBy: '',
        ariaLabelToggle: '',
        type: 'button',
        onToggle: Function.prototype,
        onEnter: Function.prototype,
        onClose: Function.prototype
    };
    return SelectToggle;
}(React.Component));
exports.SelectToggle = SelectToggle;
