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
var DonutUtilizationStaticInvertedRightDemo = /** @class */ (function (_super) {
    __extends(DonutUtilizationStaticInvertedRightDemo, _super);
    function DonutUtilizationStaticInvertedRightDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            spacer: '',
            used: 100
        };
        return _this;
    }
    DonutUtilizationStaticInvertedRightDemo.prototype.componentDidMount = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.interval = setInterval(function () {
            var used = _this.state.used;
            var val = (((used - 10) % 100) + 100) % 100;
            _this.setState({
                spacer: val < 10 ? ' ' : '',
                used: val
            });
        }, 1000);
    };
    DonutUtilizationStaticInvertedRightDemo.prototype.componentWillUnmount = function () {
        clearInterval(this.interval);
    };
    DonutUtilizationStaticInvertedRightDemo.prototype.render = function () {
        var used = this.state.used;
        return (<div>
        <div style={{ backgroundColor: 'white', height: '230px', width: '500px' }}>
          <react_charts_1.ChartDonutThreshold data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 20%', y: 20 }]} invert labels={function (_a) {
            var datum = _a.datum;
            return datum.x ? datum.x : null;
        }} width={500}>
            <react_charts_1.ChartDonutUtilization data={{ x: 'Storage capacity', y: used }} labels={function (_a) {
            var datum = _a.datum;
            return datum.x ? datum.x + ": " + datum.y + "%" : null;
        }} legendData={[{ name: "Storage capacity: " + used + "%" }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 20%' }]} legendOrientation="vertical" subTitle="of 100 GBps" title={used + "%"} thresholds={[{ value: 60 }, { value: 20 }]}/>
          </react_charts_1.ChartDonutThreshold>
        </div>
      </div>);
    };
    return DonutUtilizationStaticInvertedRightDemo;
}(react_1["default"].Component));
exports.DonutUtilizationStaticInvertedRightDemo = DonutUtilizationStaticInvertedRightDemo;
