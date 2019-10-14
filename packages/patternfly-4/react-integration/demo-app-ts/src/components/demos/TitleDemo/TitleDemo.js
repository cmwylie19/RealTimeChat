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
var react_core_1 = require("@patternfly/react-core");
var react_1 = require("react");
var myProps = {
    size: 'md',
    headingLevel: react_core_1.TitleLevel.h1
};
var TitleDemo = /** @class */ (function (_super) {
    __extends(TitleDemo, _super);
    function TitleDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitleDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TitleDemo.prototype.render = function () {
        return (<react_1["default"].Fragment>
      <react_core_1.Title size={myProps.size} headingLevel={myProps.headingLevel}>
        Integration Demo App
      </react_core_1.Title>
    </react_1["default"].Fragment>);
    };
    return TitleDemo;
}(react_1.Component));
exports.TitleDemo = TitleDemo;
