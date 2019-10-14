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
var DonutUtilizationSmallDemo = /** @class */ (function (_super) {
    __extends(DonutUtilizationSmallDemo, _super);
    function DonutUtilizationSmallDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DonutUtilizationSmallDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    DonutUtilizationSmallDemo.prototype.render = function () {
        return (<div>
        <div style={{ backgroundColor: 'white', height: '150px', width: '150px' }}>
          <react_charts_1.ChartDonutUtilization data={{ x: 'Storage capacity', y: 75 }} height={150} labels={function (_a) {
            var datum = _a.datum;
            return datum.x ? datum.x + ": " + datum.y + "%" : null;
        }} subTitle="of 100 GBps" title="75%" width={150}/>
        </div>
      </div>);
    };
    return DonutUtilizationSmallDemo;
}(react_1["default"].Component));
exports.DonutUtilizationSmallDemo = DonutUtilizationSmallDemo;
