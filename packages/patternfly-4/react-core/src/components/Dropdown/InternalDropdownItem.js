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
var react_styles_1 = require("@patternfly/react-styles");
var dropdownConstants_1 = require("./dropdownConstants");
var constants_1 = require("../../helpers/constants");
var Tooltip_1 = require("../Tooltip");
var InternalDropdownItem = /** @class */ (function (_super) {
    __extends(InternalDropdownItem, _super);
    function InternalDropdownItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = React.createRef();
        _this.onKeyDown = function (event) {
            // Detected key press on this item, notify the menu parent so that the appropriate
            // item can be focused
            if (event.keyCode === constants_1.KEY_CODES.TAB) {
                return;
            }
            event.preventDefault();
            if (event.keyCode === constants_1.KEY_CODES.ARROW_UP) {
                _this.props.context.keyHandler(_this.props.index, constants_1.KEYHANDLER_DIRECTION.UP);
            }
            else if (event.keyCode === constants_1.KEY_CODES.ARROW_DOWN) {
                _this.props.context.keyHandler(_this.props.index, constants_1.KEYHANDLER_DIRECTION.DOWN);
            }
            else if (event.keyCode === constants_1.KEY_CODES.ENTER) {
                var childNode = ((_this.ref.current && _this.ref.current.childNodes && _this.ref.current.childNodes.length) ? _this.ref.current.childNodes[0] : _this.ref.current);
                if (childNode.click) {
                    childNode.click();
                }
            }
        };
        return _this;
    }
    InternalDropdownItem.prototype.componentDidMount = function () {
        var _a = this.props, context = _a.context, index = _a.index, isDisabled = _a.isDisabled, role = _a.role;
        context.sendRef(index, this.ref.current, isDisabled, role === 'separator');
    };
    InternalDropdownItem.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, children = _a.children, isHovered = _a.isHovered, context = _a.context, onClick = _a.onClick, component = _a.component, role = _a.role, isDisabled = _a.isDisabled, index = _a.index, href = _a.href, tooltip = _a.tooltip, tooltipProps = _a.tooltipProps, additionalProps = __rest(_a, ["className", "children", "isHovered", "context", "onClick", "component", "role", "isDisabled", "index", "href", "tooltip", "tooltipProps"]);
        var Component = component;
        var isComponentReactElement = false;
        var classes;
        if (Component === 'a') {
            additionalProps['aria-disabled'] = isDisabled;
            additionalProps.tabIndex = isDisabled ? -1 : additionalProps.tabIndex;
        }
        else if (Component === 'button') {
            additionalProps.disabled = isDisabled;
            additionalProps.type = additionalProps.type || 'button';
        }
        else if (React.isValidElement(Component)) {
            // Render a custom wrapper component, for example router Link component
            // instead of our wrapper
            isComponentReactElement = true;
        }
        var renderWithTooltip = function (childNode) {
            return tooltip ? (<Tooltip_1.Tooltip content={tooltip} {...tooltipProps}>
          {childNode}
        </Tooltip_1.Tooltip>) : (childNode);
        };
        return (<dropdownConstants_1.DropdownContext.Consumer>
        {function (_a) {
            var onSelect = _a.onSelect, itemClass = _a.itemClass, disabledClass = _a.disabledClass, hoverClass = _a.hoverClass;
            if (_this.props.role === 'separator') {
                classes = className;
            }
            else {
                classes = react_styles_1.css(isDisabled && disabledClass, isHovered && hoverClass, className);
            }
            return (<li role={role} ref={_this.ref} onKeyDown={_this.onKeyDown} onClick={function (event) {
                if (!isDisabled) {
                    onClick(event);
                    onSelect(event);
                }
            }}>
              {renderWithTooltip(isComponentReactElement ? React.cloneElement(Component, __assign(__assign({}, additionalProps), { className: react_styles_1.css(classes, itemClass) })) :
                <Component {...additionalProps} href={href || null} className={react_styles_1.css(classes, _this.props.role !== 'separator' && itemClass)}>
                  {children}
                </Component>)}
            </li>);
        }}
      </dropdownConstants_1.DropdownContext.Consumer>);
    };
    InternalDropdownItem.defaultProps = {
        className: '',
        isHovered: false,
        component: 'a',
        role: 'none',
        isDisabled: false,
        href: '',
        tooltipProps: {},
        onClick: function (event) { return undefined; },
        onSelect: function () { return undefined; },
        index: -1,
        context: {
            keyHandler: Function.prototype,
            sendRef: Function.prototype
        }
    };
    return InternalDropdownItem;
}(React.Component));
exports.InternalDropdownItem = InternalDropdownItem;
