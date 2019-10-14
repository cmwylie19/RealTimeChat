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
var data_list_1 = require("@patternfly/react-styles/css/components/DataList/data-list");
var visibilityModifiers = react_styles_1.pickProperties(data_list_1["default"].modifiers, [
    'hidden',
    'hiddenOnSm',
    'hiddenOnMd',
    'hiddenOnLg',
    'hiddenOnXl',
    'hiddenOn_2xl',
    'visibleOnSm',
    'visibleOnMd',
    'visibleOnLg',
    'visibleOnXl',
    'visibleOn_2xl'
]);
exports.DataListActionVisibility = Object.keys(visibilityModifiers)
    .map(function (key) { return [key.replace('_2xl', '2Xl'), visibilityModifiers[key]]; })
    .reduce(function (acc, curr) {
    var _a;
    return (__assign(__assign({}, acc), (_a = {}, _a[curr[0]] = curr[1], _a)));
}, {});
var DataListAction = /** @class */ (function (_super) {
    __extends(DataListAction, _super);
    function DataListAction(props) {
        var _this = _super.call(this, props) || this;
        _this.onToggle = function (isOpen) {
            _this.setState({ isOpen: isOpen });
        };
        _this.onSelect = function (event) {
            _this.setState(function (prevState) { return ({
                isOpen: !prevState.isOpen
            }); });
        };
        _this.state = {
            isOpen: false
        };
        return _this;
    }
    DataListAction.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, id = _a.id, ariaLabel = _a["aria-label"], ariaLabelledBy = _a["aria-labelledby"], props = __rest(_a, ["children", "className", "id", 'aria-label', 'aria-labelledby']);
        return (<div className={react_styles_1.css(data_list_1["default"].dataListItemAction, className)} {...props}>
        {children}
      </div>);
    };
    DataListAction.defaultProps = {
        className: ''
    };
    return DataListAction;
}(React.Component));
exports.DataListAction = DataListAction;
