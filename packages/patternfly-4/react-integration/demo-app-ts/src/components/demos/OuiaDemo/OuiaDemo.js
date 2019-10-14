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
var OuiaDemo = /** @class */ (function (_super) {
    __extends(OuiaDemo, _super);
    function OuiaDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (isChecked) {
            _this.setState({
                isChecked: isChecked
            });
        };
        _this.state = {
            isChecked: true
        };
        return _this;
    }
    OuiaDemo.prototype.render = function () {
        var isChecked = this.state.isChecked;
        return (<react_core_1.OuiaContext.Provider value={{ isOuia: true }}>
        <react_1["default"].Fragment>
          <react_core_1.Switch id="simple-switch" label={isChecked ? 'Message when on' : 'Message when off'} onChange={this.handleChange} aria-label="Switch" isChecked={isChecked} ouiaId="first_switch"/>
          <br />
          <react_core_1.Switch id="disabled-switch-off" aria-label="disabled switch" label="Message when on" isChecked={false} isDisabled/>
        </react_1["default"].Fragment>
      </react_core_1.OuiaContext.Provider>);
    };
    return OuiaDemo;
}(react_1["default"].Component));
exports.OuiaDemo = OuiaDemo;
