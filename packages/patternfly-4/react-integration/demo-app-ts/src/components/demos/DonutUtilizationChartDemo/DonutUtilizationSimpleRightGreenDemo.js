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
var DonutUtilizationSimpleRightGreenDemo = /** @class */ (function (_super) {
    __extends(DonutUtilizationSimpleRightGreenDemo, _super);
    function DonutUtilizationSimpleRightGreenDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spacer: '',
            used: 0
        };
        return _this;
    }
    DonutUtilizationSimpleRightGreenDemo.prototype.componentDidMount = function () {
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
    DonutUtilizationSimpleRightGreenDemo.prototype.componentWillUnmount = function () {
        clearInterval(this.interval);
    };
    DonutUtilizationSimpleRightGreenDemo.prototype.render = function () {
        var _a = this.state, spacer = _a.spacer, used = _a.used;
        return (<div>
        <div style={{ backgroundColor: 'white', height: '300px', width: '230px' }}>
          <react_charts_1.ChartDonutUtilization ariaDesc="Storage capacity" ariaTitle="Donut utilization chart example" constrainToVisibleArea={true} data={{ x: 'Storage capacity', y: used }} height={300} labels={function (_a) {
            var datum = _a.datum;
            return datum.x ? datum.x + ": " + datum.y + "%" : null;
        }} legendData={[{ name: "Storage capacity: " + spacer + used + "%" }, { name: 'Unused' }]} legendOrientation="vertical" legendPosition="bottom" padding={{
            bottom: 75,
            left: 8,
            right: 8,
            top: 8
        }} subTitle="of 100 GBps" title={used + "%"} themeColor={react_charts_1.ChartThemeColor.green} themeVariant={react_charts_1.ChartThemeVariant.light} thresholds={[{ value: 60 }, { value: 90 }]} width={230}/>
        </div>
      </div>);
    };
    return DonutUtilizationSimpleRightGreenDemo;
}(react_1["default"].Component));
exports.DonutUtilizationSimpleRightGreenDemo = DonutUtilizationSimpleRightGreenDemo;
