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
var contextSelectorConstants_1 = require("./contextSelectorConstants");
var ContextSelectorItem = /** @class */ (function (_super) {
    __extends(ContextSelectorItem, _super);
    function ContextSelectorItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = React.createRef();
        return _this;
    }
    ContextSelectorItem.prototype.componentDidMount = function () {
        /* eslint-disable-next-line */
        this.props.sendRef(this.props.index, this.ref.current);
    };
    ContextSelectorItem.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, children = _a.children, isHovered = _a.isHovered, onClick = _a.onClick, isDisabled = _a.isDisabled, index = _a.index, sendRef = _a.sendRef, props = __rest(_a, ["className", "children", "isHovered", "onClick", "isDisabled", "index", "sendRef"]);
        return (<contextSelectorConstants_1.ContextSelectorContext.Consumer>
        {function (_a) {
            var onSelect = _a.onSelect;
            return (<li role="none">
            <button className={react_styles_1.css(context_selector_1["default"].contextSelectorMenuListItem, isDisabled && context_selector_1["default"].modifiers.disabled, isHovered && context_selector_1["default"].modifiers.hover, className)} ref={_this.ref} onClick={function (event) {
                if (!isDisabled) {
                    onClick(event);
                    onSelect(event, children);
                }
            }} {...props}>
              {children}
            </button>
          </li>);
        }}
      </contextSelectorConstants_1.ContextSelectorContext.Consumer>);
    };
    ContextSelectorItem.defaultProps = {
        children: null,
        className: '',
        isHovered: false,
        isDisabled: false,
        onClick: function () { return undefined; },
        index: undefined,
        sendRef: Function.prototype
    };
    return ContextSelectorItem;
}(React.Component));
exports.ContextSelectorItem = ContextSelectorItem;
