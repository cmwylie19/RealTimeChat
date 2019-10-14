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
var Tab0 = function (_a) {
    var children = _a.children, eventKey = _a.eventKey, _b = _a.className, className = _b === void 0 ? '' : _b, tabContentId = _a.tabContentId, tabContentRef = _a.tabContentRef, title = _a.title, props = __rest(_a, ["children", "eventKey", "className", "tabContentId", "tabContentRef", "title"]);
    // destructuring to prevent console warnings for applying eventKey, and tabContentId to a DOM element and remove title from the DOM element
    var Component = (props.href ? 'a' : 'button');
    return (<Component {...props} className={className} ref={tabContentRef}>
      {children}
    </Component>);
};
var withForwardedRef = function (Component) {
    var TabContainer = /** @class */ (function (_super) {
        __extends(TabContainer, _super);
        function TabContainer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TabContainer.prototype.render = function () {
            var _a = this.props, forwardRef = _a.forwardRef, rest = __rest(_a, ["forwardRef"]);
            return <Component ref={forwardRef} {...rest}/>;
        };
        return TabContainer;
    }(React.Component));
    return React.forwardRef(function (props, tabContentRef) { return <TabContainer {...props} forwardRef={tabContentRef}/>; });
};
exports.Tab = withForwardedRef(Tab0);
