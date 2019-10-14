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
var DonutUtilizationGreenStaticRightDemo = /** @class */ (function (_super) {
    __extends(DonutUtilizationGreenStaticRightDemo, _super);
    function DonutUtilizationGreenStaticRightDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            used: 0
        };
        return _this;
    }
    DonutUtilizationGreenStaticRightDemo.prototype.componentDidMount = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.interval = setInterval(function () {
            var used = _this.state.used;
            _this.setState({ used: (used + 10) % 100 });
        }, 1000);
    };
    DonutUtilizationGreenStaticRightDemo.prototype.componentWillUnmount = function () {
        clearInterval(this.interval);
    };
    DonutUtilizationGreenStaticRightDemo.prototype.render = function () {
        var used = this.state.used;
        return (<div>
        <div style={{ backgroundColor: 'white', height: '350px', width: '230px', margin: '0 auto' }}>
          <react_charts_1.ChartDonutThreshold data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]} height={350} labels={function (_a) {
            var datum = _a.datum;
            return datum.x ? datum.x : null;
        }} legendPosition="bottom" width={230}>
            <react_charts_1.ChartDonutUtilization data={{ x: 'Storage capacity', y: used }} labels={function (_a) {
            var datum = _a.datum;
            return datum.x ? datum.x + ": " + datum.y + "%" : null;
        }} legendData={[{ name: "Storage capacity: " + used + "%" }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 90%' }]} legendOrientation="vertical" subTitle="of 100 GBps" title={used + "%"} themeColor={react_charts_1.ChartThemeColor.green} themeVariant={react_charts_1.ChartThemeVariant.light} thresholds={[{ value: 60 }, { value: 90 }]}/>
          </react_charts_1.ChartDonutThreshold>
        </div>
      </div>);
    };
    return DonutUtilizationGreenStaticRightDemo;
}(react_1["default"].Component));
exports.DonutUtilizationGreenStaticRightDemo = DonutUtilizationGreenStaticRightDemo;
