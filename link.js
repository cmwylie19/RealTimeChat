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
exports.__esModule = true;
var react_1 = require("react");
var STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal'
};
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link(props) {
        var _this = _super.call(this, props) || this;
        _this._onMouseEnter = _this._onMouseEnter.bind(_this);
        _this._onMouseLeave = _this._onMouseLeave.bind(_this);
        _this.state = {
            "class": STATUS.NORMAL
        };
        return _this;
    }
    Link.prototype._onMouseEnter = function () {
        this.setState({ "class": STATUS.HOVERED });
    };
    Link.prototype._onMouseLeave = function () {
        this.setState({ "class": STATUS.NORMAL });
    };
    Link.prototype.render = function () {
        return className = { "this": .state["class"] };
        href = { "this": .props.page || '#' };
        onMouseEnter = { "this": ._onMouseEnter };
        onMouseLeave = { "this": ._onMouseLeave }
            >
                { "this": .props.children }
            < /a>;
        ;
    };
    return Link;
}(react_1["default"].Component));
exports["default"] = Link;
