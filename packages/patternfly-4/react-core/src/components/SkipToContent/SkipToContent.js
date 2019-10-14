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
var skip_to_content_1 = require("@patternfly/react-styles/css/components/SkipToContent/skip-to-content");
var button_1 = require("@patternfly/react-styles/css/components/Button/button");
var react_styles_1 = require("@patternfly/react-styles");
var SkipToContent = /** @class */ (function (_super) {
    __extends(SkipToContent, _super);
    function SkipToContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SkipToContent.prototype.render = function () {
        var _a = this.props, component = _a.component, children = _a.children, className = _a.className, href = _a.href, show = _a.show, rest = __rest(_a, ["component", "children", "className", "href", "show"]);
        var Component = component;
        return (<Component {...rest} className={react_styles_1.css(button_1["default"].button, react_styles_1.getModifier(button_1["default"].modifiers, 'primary'), skip_to_content_1["default"].skipToContent, show && react_styles_1.getModifier(skip_to_content_1["default"], 'focus'), className)} href={href}>
        {children}
      </Component>);
    };
    SkipToContent.defaultProps = {
        component: 'a',
        className: '',
        show: false
    };
    return SkipToContent;
}(React.Component));
exports.SkipToContent = SkipToContent;
