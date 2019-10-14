"use strict";
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
var Nav_1 = require("./Nav");
exports.NavItem = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.to, to = _d === void 0 ? '' : _d, _e = _a.isActive, isActive = _e === void 0 ? false : _e, _f = _a.groupId, groupId = _f === void 0 ? null : _f, _g = _a.itemId, itemId = _g === void 0 ? null : _g, _h = _a.preventDefault, preventDefault = _h === void 0 ? false : _h, _j = _a.onClick, onClick = _j === void 0 ? null : _j, _k = _a.component, component = _k === void 0 ? 'a' : _k, props = __rest(_a, ["children", "className", "to", "isActive", "groupId", "itemId", "preventDefault", "onClick", "component"]);
    var Component = component;
    var renderDefaultLink = function () {
        var preventLinkDefault = preventDefault || !to;
        return (<Nav_1.NavContext.Consumer>
        {function (context) { return (<Component href={to} onClick={function (e) { return context.onSelect(e, groupId, itemId, to, preventLinkDefault, onClick); }} className={react_styles_1.css(nav_1["default"].navLink, isActive && nav_1["default"].modifiers.current, className)} aria-current={isActive ? 'page' : null} {...props}>
            {children}
          </Component>); }}
      </Nav_1.NavContext.Consumer>);
    };
    var renderClonedChild = function (child) { return (<Nav_1.NavContext.Consumer>
      {function (context) {
        return React.cloneElement(child, {
            "onClick": function (e) { return context.onSelect(e, groupId, itemId, to, preventDefault, onClick); },
            "className": react_styles_1.css(nav_1["default"].navLink, isActive && nav_1["default"].modifiers.current, child.props && child.props.className),
            'aria-current': isActive ? 'page' : null
        });
    }}
    </Nav_1.NavContext.Consumer>); };
    return (<li className={react_styles_1.css(nav_1["default"].navItem, className)}>
      {React.isValidElement(children) ? renderClonedChild(children) : renderDefaultLink()}
    </li>);
};
