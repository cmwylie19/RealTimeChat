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
var react_charts_1 = require("@patternfly/react-charts");
var DonutUtilizationSimpleRightDemo = /** @class */ (function (_super) {
    __extends(DonutUtilizationSimpleRightDemo, _super);
    function DonutUtilizationSimpleRightDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spacer: '',
            used: 0
        };
        return _this;
    }
    DonutUtilizationSimpleRightDemo.prototype.componentDidMount = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.interval = setInterval(function () {
            var used = _this.state.used;
            var val = (used + 10) % 100;
            _this.setState({
                spacer: val < 10 ? ' ' : '',
                used: val
            });
        }, 1000);
    };
    DonutUtilizationSimpleRightDemo.prototype.componentWillUnmount = function () {
        clearInterval(this.interval);
    };
    DonutUtilizationSimpleRightDemo.prototype.render = function () {
        var _a = this.state, spacer = _a.spacer, used = _a.used;
        return (<div>
        <div style={{ backgroundColor: 'white', height: '230px', width: '435px' }}>
          <react_charts_1.ChartDonutUtilization data={{ x: 'GBps capacity', y: used }} labels={function (_a) {
            var datum = _a.datum;
            return datum.x ? datum.x + ": " + datum.y + "%" : null;
        }} legendData={[{ name: "Storage capacity: " + spacer + used + "%" }, { name: 'Unused' }]} legendOrientation="vertical" subTitle="of 100 GBps" title={used + "%"} thresholds={[{ value: 60 }, { value: 90 }]} width={435}/>
        </div>
      </div>);
    };
    return DonutUtilizationSimpleRightDemo;
}(react_1["default"].Component));
exports.DonutUtilizationSimpleRightDemo = DonutUtilizationSimpleRightDemo;
