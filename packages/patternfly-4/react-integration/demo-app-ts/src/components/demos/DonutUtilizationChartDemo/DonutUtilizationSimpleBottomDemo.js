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
var DonutUtilizationSimpleBottomDemo = /** @class */ (function (_super) {
    __extends(DonutUtilizationSimpleBottomDemo, _super);
    function DonutUtilizationSimpleBottomDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DonutUtilizationSimpleBottomDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    DonutUtilizationSimpleBottomDemo.prototype.render = function () {
        return (<div>
      <div style={{ backgroundColor: 'white', height: '275px', width: '300px', paddingTop: '25px' }}>
        <react_charts_1.ChartDonutUtilization ariaDesc="Storage capacity" ariaTitle="Donut utilization chart example" constrainToVisibleArea={true} data={{ x: 'Storage capacity', y: 45 }} height={275} labels={function (_a) {
            var datum = _a.datum;
            return datum.x ? datum.x + ": " + datum.y + "%" : null;
        }} legendData={[{ name: "Storage capacity: 45%" }, { name: 'Unused' }]} legendPosition="bottom" padding={{
            bottom: 50,
            left: 8,
            right: 8,
            top: 8
        }} subTitle="of 100 GBps" title="45%" thresholds={[{ value: 60 }, { value: 90 }]} width={300}/>
      </div>
    </div>);
    };
    return DonutUtilizationSimpleBottomDemo;
}(react_1["default"].Component));
exports.DonutUtilizationSimpleBottomDemo = DonutUtilizationSimpleBottomDemo;
