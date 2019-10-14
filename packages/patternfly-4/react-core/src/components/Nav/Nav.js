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
var nav_1 = require("@patternfly/react-styles/css/components/Nav/nav");
var react_styles_1 = require("@patternfly/react-styles");
exports.NavContext = React.createContext({});
var Nav = /** @class */ (function (_super) {
    __extends(Nav, _super);
    function Nav() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showLeftScrollButton: false,
            showRightScrollButton: false
        };
        _this.updateScrollButtonState = function (state) {
            var showLeftScrollButton = state.showLeftScrollButton, showRightScrollButton = state.showRightScrollButton;
            _this.setState({
                showLeftScrollButton: showLeftScrollButton,
                showRightScrollButton: showRightScrollButton
            });
        };
        return _this;
    }
    // Callback from NavItem
    Nav.prototype.onSelect = function (event, groupId, itemId, to, preventDefault, onClick) {
        if (preventDefault) {
            event.preventDefault();
        }
        this.props.onSelect({ groupId: groupId, itemId: itemId, event: event, to: to });
        if (onClick) {
            onClick(event, itemId, groupId, to);
        }
    };
    // Callback from NavExpandable
    Nav.prototype.onToggle = function (event, groupId, toggleValue) {
        this.props.onToggle({
            event: event,
            groupId: groupId,
            isExpanded: toggleValue
        });
    };
    Nav.prototype.render = function () {
        var _this = this;
        var _a = this.props, ariaLabel = _a["aria-label"], children = _a.children, className = _a.className, onSelect = _a.onSelect, onToggle = _a.onToggle, theme = _a.theme, props = __rest(_a, ['aria-label', "children", "className", "onSelect", "onToggle", "theme"]);
        var _b = this.state, showLeftScrollButton = _b.showLeftScrollButton, showRightScrollButton = _b.showRightScrollButton;
        var childrenProps = children.props;
        return (<exports.NavContext.Provider value={{
            onSelect: function (event, groupId, itemId, to, preventDefault, onClick) { return _this.onSelect(event, groupId, itemId, to, preventDefault, onClick); },
            onToggle: function (event, groupId, expanded) { return _this.onToggle(event, groupId, expanded); },
            updateScrollButtonState: this.updateScrollButtonState
        }}>
        <nav className={react_styles_1.css(nav_1["default"].nav, theme === 'dark' && nav_1["default"].modifiers.dark, showLeftScrollButton && nav_1["default"].modifiers.start, showRightScrollButton && nav_1["default"].modifiers.end, className)} aria-label={ariaLabel === ''
            ? typeof childrenProps !== 'undefined' && childrenProps.variant === 'tertiary' ? 'Local' : 'Global'
            : ariaLabel} {...props}>
          {children}
        </nav>
      </exports.NavContext.Provider>);
    };
    Nav.defaultProps = {
        'aria-label': '',
        "children": null,
        "className": '',
        "onSelect": function () { return undefined; },
        "onToggle": function () { return undefined; },
        "theme": 'light'
    };
    return Nav;
}(React.Component));
exports.Nav = Nav;
