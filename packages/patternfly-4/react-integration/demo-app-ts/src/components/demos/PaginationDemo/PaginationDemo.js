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
var react_core_1 = require("@patternfly/react-core");
var PaginationDemo = /** @class */ (function (_super) {
    __extends(PaginationDemo, _super);
    function PaginationDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            topPage: 1,
            bottomPage: 1,
            perPage: 20
        };
        _this.onSetTopPage = function (_event, pageNumber) {
            _this.setState({
                topPage: pageNumber
            });
        };
        _this.onSetBottomPage = function (_event, pageNumber) {
            _this.setState({
                bottomPage: pageNumber
            });
        };
        _this.onPerPageSelect = function (_event, perPage) {
            _this.setState({
                perPage: perPage
            });
        };
        return _this;
    }
    PaginationDemo.prototype.renderPagination = function () {
        return (<react_core_1.StackItem isFilled={false}>
        <react_core_1.Title size="2xl">Pagination</react_core_1.Title>
        <react_1["default"].Fragment>
          <react_core_1.Pagination itemCount={523} perPage={this.state.perPage} page={this.state.topPage} onSetPage={this.onSetTopPage} widgetId="pagination-options-menu-top" onPerPageSelect={this.onPerPageSelect}/>
          <react_core_1.Pagination itemCount={523} widgetId="pagination-options-menu-bottom" perPage={this.state.perPage} page={this.state.bottomPage} variant={react_core_1.PaginationVariant.bottom} onSetPage={this.onSetBottomPage} onPerPageSelect={this.onPerPageSelect}/>
           <react_core_1.Pagination itemCount={523} widgetId="pagination-options-menu-bottom" perPage={this.state.perPage} page={this.state.bottomPage} variant={react_core_1.PaginationVariant.bottom} onSetPage={this.onSetBottomPage} onPerPageSelect={this.onPerPageSelect} isCompact/>
        </react_1["default"].Fragment>
      </react_core_1.StackItem>);
    };
    PaginationDemo.prototype.renderDisabled = function () {
        return (<react_core_1.StackItem isFilled={false}>
        <react_core_1.Title size="2xl">Disabled state</react_core_1.Title>
        <react_1["default"].Fragment>
          <react_core_1.Pagination itemCount={523} perPage={this.state.perPage} page={this.state.topPage} onSetPage={this.onSetTopPage} widgetId="pagination-options-menu-disabled" onPerPageSelect={this.onPerPageSelect} isDisabled/>
        </react_1["default"].Fragment>
      </react_core_1.StackItem>);
    };
    PaginationDemo.prototype.render = function () {
        return <react_core_1.Stack gutter="md">
      {this.renderPagination()}
      {this.renderDisabled()}
    </react_core_1.Stack>;
    };
    return PaginationDemo;
}(react_1["default"].Component));
exports.PaginationDemo = PaginationDemo;
exports["default"] = PaginationDemo;
