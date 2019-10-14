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
var context_selector_1 = require("@patternfly/react-styles/css/components/ContextSelector/context-selector");
var react_styles_1 = require("@patternfly/react-styles");
var ContextSelectorMenuList = /** @class */ (function (_super) {
    __extends(ContextSelectorMenuList, _super);
    function ContextSelectorMenuList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.refsCollection = [];
        _this.sendRef = function (index, ref) {
            _this.refsCollection[index] = ref;
        };
        _this.render = function () {
            var _a = _this.props, className = _a.className, isOpen = _a.isOpen, children = _a.children, props = __rest(_a, ["className", "isOpen", "children"]);
            return (<ul className={react_styles_1.css(context_selector_1["default"].contextSelectorMenuList, className)} hidden={!isOpen} role="menu" {...props}>
        {_this.extendChildren()}
      </ul>);
        };
        return _this;
    }
    ContextSelectorMenuList.prototype.extendChildren = function () {
        var _this = this;
        return React.Children.map(this.props.children, function (child, index) {
            return React.cloneElement(child, {
                sendRef: _this.sendRef,
                index: index
            });
        });
    };
    ContextSelectorMenuList.defaultProps = {
        children: null,
        className: '',
        isOpen: true
    };
    return ContextSelectorMenuList;
}(React.Component));
exports.ContextSelectorMenuList = ContextSelectorMenuList;
