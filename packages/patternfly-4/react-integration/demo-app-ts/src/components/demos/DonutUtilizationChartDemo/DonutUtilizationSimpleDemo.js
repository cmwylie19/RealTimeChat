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
var DonutUtilizationSimpleDemo = /** @class */ (function (_super) {
    __extends(DonutUtilizationSimpleDemo, _super);
    function DonutUtilizationSimpleDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DonutUtilizationSimpleDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    DonutUtilizationSimpleDemo.prototype.render = function () {
        return (<div>
        <div style={{ backgroundColor: 'white', height: '230px', width: '500px' }}>
          <react_charts_1.ChartDonutUtilization data={{ x: 'GBps capacity', y: 75 }} labels={function (_a) {
            var datum = _a.datum;
            return datum.x ? datum.x + " - " + datum.y + "%" : null;
        }} subTitle="of 100 GBps" title="75%" width={500}/>
        </div>
      </div>);
    };
    return DonutUtilizationSimpleDemo;
}(react_1["default"].Component));
exports.DonutUtilizationSimpleDemo = DonutUtilizationSimpleDemo;
