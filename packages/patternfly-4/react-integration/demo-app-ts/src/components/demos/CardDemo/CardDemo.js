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
var CardDemo = /** @class */ (function (_super) {
    __extends(CardDemo, _super);
    function CardDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    CardDemo.prototype.render = function () {
        return (<react_1["default"].Fragment>
        <react_core_1.Card isHoverable>
          <react_core_1.CardHeader>Header</react_core_1.CardHeader>
          <react_core_1.CardBody>Body</react_core_1.CardBody>
          <react_core_1.CardFooter>Footer</react_core_1.CardFooter>
        </react_core_1.Card>
        <br></br>
        <react_core_1.Card isCompact>
          <react_core_1.CardHeader>Header</react_core_1.CardHeader>
          <react_core_1.CardBody>Body</react_core_1.CardBody>
          <react_core_1.CardFooter>Footer</react_core_1.CardFooter>
        </react_core_1.Card>
      </react_1["default"].Fragment>);
    };
    return CardDemo;
}(react_1["default"].Component));
exports.CardDemo = CardDemo;
