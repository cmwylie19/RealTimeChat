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
var AlertDemo = /** @class */ (function (_super) {
    __extends(AlertDemo, _super);
    function AlertDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.hideAlertOne = function () { return _this.setState({ alertOneVisible: false }); };
        _this.state = { alertOneVisible: true };
        return _this;
    }
    AlertDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    AlertDemo.prototype.render = function () {
        var alertOneVisible = this.state.alertOneVisible;
        return (<react_1["default"].Fragment>
        {alertOneVisible && (<react_core_1.Alert id="info-alert" variant="info" title="Info alert title" action={<react_core_1.AlertActionCloseButton id="test-button" onClose={this.hideAlertOne}/>}>
            Info alert description. <a href="#">This is a link.</a>
          </react_core_1.Alert>)}
        <react_core_1.Alert id="default-alert" variant="default" title="Default alert title" isInline>
            Info alert description
        </react_core_1.Alert>
      </react_1["default"].Fragment>);
    };
    return AlertDemo;
}(react_1["default"].Component));
exports.AlertDemo = AlertDemo;
