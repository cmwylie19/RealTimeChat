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
var react_styles_1 = require("@patternfly/react-styles");
var DropdownMenu_1 = require("./DropdownMenu");
var dropdownConstants_1 = require("./dropdownConstants");
var DropdownWithContext = /** @class */ (function (_super) {
    __extends(DropdownWithContext, _super);
    function DropdownWithContext(props) {
        var _this = _super.call(this, props) || this;
        _this.openedOnEnter = false;
        _this.baseComponentRef = React.createRef();
        _this.onEnter = function () {
            _this.openedOnEnter = true;
        };
        if (props.dropdownItems && props.dropdownItems.length > 0 && props.children) {
            throw new Error('Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered ');
        }
        return _this;
    }
    DropdownWithContext.prototype.componentDidUpdate = function () {
        if (!this.props.isOpen) {
            this.openedOnEnter = false;
        }
    };
    DropdownWithContext.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, className = _a.className, direction = _a.direction, dropdownItems = _a.dropdownItems, isOpen = _a.isOpen, isPlain = _a.isPlain, isGrouped = _a.isGrouped, onSelect = _a.onSelect, position = _a.position, toggle = _a.toggle, autoFocus = _a.autoFocus, props = __rest(_a, ["children", "className", "direction", "dropdownItems", "isOpen", "isPlain", "isGrouped", "onSelect", "position", "toggle", "autoFocus"]);
        var id = toggle.props.id || "pf-toggle-id-" + DropdownWithContext.currentId++;
        var component;
        var renderedContent;
        var ariaHasPopup = false;
        if (dropdownItems && dropdownItems.length > 0) {
            component = 'ul';
            renderedContent = dropdownItems;
            ariaHasPopup = true;
        }
        else {
            component = 'div';
            renderedContent = React.Children.toArray(children);
        }
        var openedOnEnter = this.openedOnEnter;
        return (<dropdownConstants_1.DropdownContext.Consumer>
        {function (_a) {
            var baseClass = _a.baseClass, baseComponent = _a.baseComponent, contextId = _a.id;
            var BaseComponent = baseComponent;
            return (<BaseComponent {...props} className={react_styles_1.css(baseClass, direction === dropdownConstants_1.DropdownDirection.up && dropdown_1["default"].modifiers.top, isOpen && dropdown_1["default"].modifiers.expanded, className)} ref={_this.baseComponentRef}>
              {React.Children.map(toggle, function (oneToggle) {
                return React.cloneElement(oneToggle, {
                    parentRef: _this.baseComponentRef,
                    isOpen: isOpen,
                    id: id,
                    isPlain: isPlain,
                    ariaHasPopup: ariaHasPopup,
                    onEnter: function () { return _this.onEnter(); }
                });
            })}
              {isOpen && (<DropdownMenu_1.DropdownMenu component={component} isOpen={isOpen} position={position} aria-labelledby={contextId ? contextId + "-toggle" : id} openedOnEnter={openedOnEnter} isGrouped={isGrouped} autoFocus={openedOnEnter && autoFocus}>
                  {renderedContent}
                </DropdownMenu_1.DropdownMenu>)}
            </BaseComponent>);
        }}
      </dropdownConstants_1.DropdownContext.Consumer>);
    };
    // seed for the aria-labelledby ID
    DropdownWithContext.currentId = 0;
    DropdownWithContext.defaultProps = {
        className: '',
        dropdownItems: [],
        isOpen: false,
        isPlain: false,
        isGrouped: false,
        position: dropdownConstants_1.DropdownPosition.left,
        direction: dropdownConstants_1.DropdownDirection.down,
        onSelect: Function.prototype,
        autoFocus: true
    };
    return DropdownWithContext;
}(React.Component));
exports.DropdownWithContext = DropdownWithContext;
