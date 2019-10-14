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
var experimental_1 = require("@patternfly/react-core/dist/esm/experimental");
var SpinnerDemo = /** @class */ (function (_super) {
    __extends(SpinnerDemo, _super);
    function SpinnerDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpinnerDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    SpinnerDemo.prototype.render = function () {
        return (<react_1["default"].Fragment>
        <experimental_1.Spinner />
        <span>
          <div>Size variations</div>
          <experimental_1.Spinner size="sm"/>
          <experimental_1.Spinner size="md"/>
          <experimental_1.Spinner size="lg"/>
          <experimental_1.Spinner size="xl"/>
        </span>
      </react_1["default"].Fragment>);
    };
    return SpinnerDemo;
}(react_1["default"].Component));
exports.SpinnerDemo = SpinnerDemo;
