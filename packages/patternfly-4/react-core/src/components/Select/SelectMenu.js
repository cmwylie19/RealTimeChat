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
var form_1 = require("@patternfly/react-styles/css/components/Form/form");
var react_styles_1 = require("@patternfly/react-styles");
var selectConstants_1 = require("./selectConstants");
// tslint:disable-next-line
var FocusTrap = require('focus-trap-react');
var SelectMenu = /** @class */ (function (_super) {
    __extends(SelectMenu, _super);
    function SelectMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectMenu.prototype.extendChildren = function () {
        var _this = this;
        var _a = this.props, children = _a.children, isGrouped = _a.isGrouped;
        if (isGrouped) {
            var index_1 = 0;
            return React.Children.map(children, function (group) {
                return React.cloneElement(group, {
                    titleId: group.props.label.replace(/\W/g, '-'),
                    children: group.props.children.map(function (option) { return _this.cloneOption(option, index_1++); })
                });
            });
        }
        return React.Children.map(this.props.children, function (child, index) {
            return _this.cloneOption(child, index);
        });
    };
    SelectMenu.prototype.cloneOption = function (child, index) {
        var _a = this.props, selected = _a.selected, sendRef = _a.sendRef, keyHandler = _a.keyHandler;
        var isSelected = selected && selected.constructor === Array
            ? selected && (Array.isArray(selected) && selected.includes(child.props.value))
            : selected === child.props.value;
        return React.cloneElement(child, {
            id: (child.props.value ? child.props.value.toString() : '') + "-" + index,
            isSelected: isSelected,
            sendRef: sendRef,
            keyHandler: keyHandler,
            index: index
        });
    };
    SelectMenu.prototype.extendCheckboxChildren = function (props) {
        var _a = this.props, children = _a.children, isGrouped = _a.isGrouped, checked = _a.checked, sendRef = _a.sendRef, keyHandler = _a.keyHandler;
        var ariaLabel = props["aria-label"], ariaLabelledBy = props["aria-labelledby"];
        if (isGrouped) {
            var index_2 = 0;
            return React.Children.map(children, function (group) {
                return React.cloneElement(group, {
                    titleId: group.props.label.replace(/\W/g, '-'),
                    children: (<fieldset aria-labelledby={group.props.label.replace(/\W/g, '-')} className={react_styles_1.css(form_1["default"].formFieldset)}>
              {group.props.children.map(function (option) {
                        return React.cloneElement(option, {
                            isChecked: checked && checked.includes(option.props.value),
                            sendRef: sendRef,
                            keyHandler: keyHandler,
                            index: index_2++
                        });
                    })}
            </fieldset>)
                });
            });
        }
        return (<fieldset {...props} aria-label={ariaLabel} aria-labelledby={(!ariaLabel && ariaLabelledBy) || null} className={react_styles_1.css(form_1["default"].formFieldset)}>
        {React.Children.map(children, function (child, index) {
            return React.cloneElement(child, {
                isChecked: checked && checked.includes(child.props.value),
                sendRef: sendRef,
                keyHandler: keyHandler,
                index: index
            });
        })}
      </fieldset>);
    };
    SelectMenu.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, className = _a.className, isExpanded = _a.isExpanded, openedOnEnter = _a.openedOnEnter, selected = _a.selected, checked = _a.checked, isGrouped = _a.isGrouped, sendRef = _a.sendRef, keyHandler = _a.keyHandler, maxHeight = _a.maxHeight, props = __rest(_a, ["children", "className", "isExpanded", "openedOnEnter", "selected", "checked", "isGrouped", "sendRef", "keyHandler", "maxHeight"]);
        return (<selectConstants_1.SelectConsumer>
        {function (_a) {
            var variant = _a.variant;
            return (<React.Fragment>
            {variant !== selectConstants_1.SelectVariant.checkbox && (<ul className={react_styles_1.css(select_1["default"].selectMenu, className)} role="listbox" {...maxHeight && { style: ({ maxHeight: maxHeight, overflow: 'auto' }) }} {...props}>
                {_this.extendChildren()}
              </ul>)}
            {variant === selectConstants_1.SelectVariant.checkbox && React.Children.count(children) > 0 && (<FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }}>
                <div className={react_styles_1.css(select_1["default"].selectMenu, className)} {...maxHeight && { style: ({ maxHeight: maxHeight, overflow: 'auto' }) }}>
                  <form noValidate className={react_styles_1.css(form_1["default"].form)}>
                    <div className={react_styles_1.css(form_1["default"].formGroup)}>{_this.extendCheckboxChildren(props)}</div>
                  </form>
                </div>
              </FocusTrap>)}
            {variant === selectConstants_1.SelectVariant.checkbox && React.Children.count(children) === 0 && (<div className={react_styles_1.css(select_1["default"].selectMenu, className)} {...maxHeight && { style: ({ maxHeight: maxHeight, overflow: 'auto' }) }}>
                <form noValidate className={react_styles_1.css(form_1["default"].form)}>
                  <div className={react_styles_1.css(form_1["default"].formGroup)}/>
                </form>
              </div>)}
          </React.Fragment>);
        }}
      </selectConstants_1.SelectConsumer>);
    };
    SelectMenu.defaultProps = {
        className: '',
        isExpanded: false,
        isGrouped: false,
        openedOnEnter: false,
        selected: '',
        maxHeight: '',
        sendRef: Function.prototype,
        keyHandler: Function.prototype
    };
    return SelectMenu;
}(React.Component));
exports.SelectMenu = SelectMenu;
