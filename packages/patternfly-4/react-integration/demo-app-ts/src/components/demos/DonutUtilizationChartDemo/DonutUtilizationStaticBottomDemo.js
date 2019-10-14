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
var DonutUtilizationStaticBottomDemo = /** @class */ (function (_super) {
    __extends(DonutUtilizationStaticBottomDemo, _super);
    function DonutUtilizationStaticBottomDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DonutUtilizationStaticBottomDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    DonutUtilizationStaticBottomDemo.prototype.render = function () {
        return (<div>
        <div style={{ backgroundColor: 'white', height: '225px', width: '675px', paddingTop: '20px' }}>
          <react_charts_1.ChartDonutThreshold ariaDesc="Storage capacity" ariaTitle="Donut utilization chart with static threshold example" constrainToVisibleArea={true} data={[{ x: 'Warning at 60%', y: 60 }, { x: 'Danger at 90%', y: 90 }]} height={225} labels={function (_a) {
            var datum = _a.datum;
            return datum.x ? datum.x : null;
        }} legendPosition="bottom" padding={{
            bottom: 50,
            left: 8,
            right: 8,
            top: 8
        }} subTitlePosition="right" width={675}>
            <react_charts_1.ChartDonutUtilization data={{ x: 'Storage capacity', y: 45 }} labels={function (_a) {
            var datum = _a.datum;
            return datum.x ? datum.x + ": " + datum.y + "%" : null;
        }} legendData={[{ name: "Storage capacity: 45%" }, { name: 'Warning threshold at 60%' }, { name: 'Danger threshold at 90%' }]} subTitle="of 100 GBps" title="45%" thresholds={[{ value: 60 }, { value: 90 }]}/>
          </react_charts_1.ChartDonutThreshold>
        </div>
      </div>);
    };
    return DonutUtilizationStaticBottomDemo;
}(react_1["default"].Component));
exports.DonutUtilizationStaticBottomDemo = DonutUtilizationStaticBottomDemo;
