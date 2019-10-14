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
var ReactDOM = require("react-dom");
var dropdown_1 = require("@patternfly/react-styles/css/components/Dropdown/dropdown");
var react_styles_1 = require("@patternfly/react-styles");
var util_1 = require("../../helpers/util");
var dropdownConstants_1 = require("./dropdownConstants");
var DropdownMenu = /** @class */ (function (_super) {
    __extends(DropdownMenu, _super);
    function DropdownMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.refsCollection = [];
        _this.childKeyHandler = function (index, position, custom) {
            if (custom === void 0) { custom = false; }
            util_1.keyHandler(index, position, _this.refsCollection, _this.props.isGrouped ? _this.refsCollection : React.Children.toArray(_this.props.children), custom);
        };
        _this.sendRef = function (index, node, isDisabled, isSeparator) {
            // since the ref is on the outer <li>, target the inner child for focusing and keyboard navigation
            var innerNode = node.childNodes && node.childNodes.length ? node.childNodes[0] : node;
            if (!innerNode.getAttribute) {
                // eslint-disable-line react/no-find-dom-node
                _this.refsCollection[index] = ReactDOM.findDOMNode(innerNode);
            }
            else if (isDisabled || isSeparator) {
                _this.refsCollection[index] = null;
            }
            else {
                _this.refsCollection[index] = innerNode;
            }
        };
        return _this;
    }
    DropdownMenu.prototype.componentDidMount = function () {
        var autoFocus = this.props.autoFocus;
        if (this.props.component === 'ul' && autoFocus) {
            var focusTarget = this.refsCollection.find(function (ref) {
                return ref && !ref.hasAttribute('disabled');
            });
            if (focusTarget) {
                if (focusTarget.focus) {
                    focusTarget.focus();
                }
                else {
                    var searchedFocusTarget = ReactDOM.findDOMNode(focusTarget);
                    searchedFocusTarget.focus();
                }
            }
            else if (focusTarget) {
                // eslint-disable-line react/no-find-dom-node
            }
        }
    };
    DropdownMenu.prototype.extendChildren = function () {
        var _a = this.props, children = _a.children, isGrouped = _a.isGrouped;
        if (isGrouped) {
            var index_1 = 0;
            return React.Children.map(children, function (groupedChildren) {
                var group = groupedChildren;
                return React.cloneElement(group, __assign({}, (group.props && group.props.children && {
                    children: (group.props.children.constructor === Array &&
                        React.Children.map(group.props.children, function (option) {
                            return React.cloneElement(option, {
                                index: index_1++
                            });
                        })) ||
                        React.cloneElement(group.props.children, {
                            index: index_1++
                        })
                })));
            });
        }
        return React.Children.map(children, function (child, index) {
            return React.cloneElement(child, {
                index: index
            });
        });
    };
    DropdownMenu.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, isOpen = _a.isOpen, position = _a.position, children = _a.children, component = _a.component, isGrouped = _a.isGrouped, openedOnEnter = _a.openedOnEnter, props = __rest(_a, ["className", "isOpen", "position", "children", "component", "isGrouped", "openedOnEnter"]);
        return (<dropdownConstants_1.DropdownArrowContext.Provider value={{
            keyHandler: this.childKeyHandler,
            sendRef: this.sendRef
        }}>
        {component === 'div' ? (<dropdownConstants_1.DropdownContext.Consumer>
            {function (_a) {
            var onSelect = _a.onSelect, menuClass = _a.menuClass;
            return (<div className={react_styles_1.css(menuClass, position === dropdownConstants_1.DropdownPosition.right && dropdown_1["default"].modifiers.alignRight, className)} hidden={!isOpen} onClick={function (event) { return onSelect && onSelect(event); }}>
                {children}
              </div>);
        }}
          </dropdownConstants_1.DropdownContext.Consumer>) : ((isGrouped && (<dropdownConstants_1.DropdownContext.Consumer>
              {function (_a) {
            var menuClass = _a.menuClass, menuComponent = _a.menuComponent;
            var MenuComponent = (menuComponent || 'div');
            return (<MenuComponent {...props} className={react_styles_1.css(menuClass, position === dropdownConstants_1.DropdownPosition.right && dropdown_1["default"].modifiers.alignRight, className)} hidden={!isOpen} role="menu">
                    {_this.extendChildren()}
                  </MenuComponent>);
        }}
            </dropdownConstants_1.DropdownContext.Consumer>)) || (<dropdownConstants_1.DropdownContext.Consumer>
              {function (_a) {
            var menuClass = _a.menuClass, menuComponent = _a.menuComponent;
            var MenuComponent = (menuComponent || component);
            return (<MenuComponent {...props} className={react_styles_1.css(menuClass, position === dropdownConstants_1.DropdownPosition.right && dropdown_1["default"].modifiers.alignRight, className)} hidden={!isOpen} role="menu">
                    {_this.extendChildren()}
                  </MenuComponent>);
        }}
            </dropdownConstants_1.DropdownContext.Consumer>))}
      </dropdownConstants_1.DropdownArrowContext.Provider>);
    };
    DropdownMenu.defaultProps = {
        className: '',
        isOpen: true,
        openedOnEnter: false,
        autoFocus: true,
        position: dropdownConstants_1.DropdownPosition.left,
        component: 'ul',
        isGrouped: false
    };
    return DropdownMenu;
}(React.Component));
exports.DropdownMenu = DropdownMenu;
