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
var react_core_1 = require("@patternfly/react-core");
var table_1 = require("@patternfly/react-styles/css/components/Table/table");
var react_styles_1 = require("@patternfly/react-styles");
var RowWrapper = /** @class */ (function (_super) {
    __extends(RowWrapper, _super);
    function RowWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.handleScroll = function (event) {
            if (!_this._unmounted) {
                _this.props.onScroll(event);
            }
        };
        _this.handleResize = function (event) {
            if (!_this._unmounted) {
                _this.props.onResize(event);
            }
        };
        if (props.onScroll) {
            _this.handleScroll = react_core_1.debounce(_this.handleScroll, 100);
        }
        if (props.onResize) {
            _this.handleResize = react_core_1.debounce(_this.handleResize, 100);
        }
        return _this;
    }
    RowWrapper.prototype.componentDidMount = function () {
        this._unmounted = false;
        if (this.props.onScroll) {
            window.addEventListener('scroll', this.handleScroll);
        }
        if (this.props.onResize) {
            window.addEventListener('resize', this.handleResize);
        }
    };
    RowWrapper.prototype.componentWillUnmount = function () {
        this._unmounted = true;
        if (this.props.onScroll) {
            window.removeEventListener('scroll', this.handleScroll);
        }
        if (this.props.onResize) {
            window.removeEventListener('resize', this.handleResize);
        }
    };
    RowWrapper.prototype.render = function () {
        var _a = this.props, trRef = _a.trRef, className = _a.className, onScroll = _a.onScroll, onResize = _a.onResize, isExpanded = _a.row.isExpanded, rowProps = _a.rowProps, props = __rest(_a, ["trRef", "className", "onScroll", "onResize", "row", "rowProps"]);
        return (<tr {...props} ref={trRef} className={react_styles_1.css(className, isExpanded !== undefined && table_1["default"].tableExpandableRow, isExpanded && table_1["default"].modifiers.expanded)} hidden={isExpanded !== undefined && !isExpanded}/>);
    };
    RowWrapper.defaultProps = {
        className: '',
        row: {
            isOpen: undefined,
            isExpanded: undefined
        },
        rowProps: null
    };
    return RowWrapper;
}(React.Component));
exports.RowWrapper = RowWrapper;
