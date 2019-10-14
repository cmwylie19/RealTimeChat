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
var LineChartSimpleDemo = /** @class */ (function (_super) {
    __extends(LineChartSimpleDemo, _super);
    function LineChartSimpleDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineChartSimpleDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    LineChartSimpleDemo.prototype.render = function () {
        return (<div>
        <div style={{ height: '250px', width: '600px' }}>
          <react_charts_1.Chart legendData={[{ name: 'Cats' }]} legendOrientation="vertical" legendPosition="right" height={250} padding={{
            bottom: 50,
            left: 50,
            right: 200,
            top: 50
        }} width={600}>
            <react_charts_1.ChartAxis tickValues={[2, 3, 4]}/>
            <react_charts_1.ChartAxis dependentAxis tickValues={[2, 5, 8]}/>
            <react_charts_1.ChartGroup>
              <react_charts_1.ChartLine data={[
            { name: 'Cats', x: 1, y: 1 },
            { name: 'Cats', x: 2, y: 2 },
            { name: 'Cats', x: 3, y: 5 },
            { name: 'Cats', x: 4, y: 3 }
        ]}/>
            </react_charts_1.ChartGroup>
          </react_charts_1.Chart>
        </div>
      </div>);
    };
    return LineChartSimpleDemo;
}(react_1["default"].Component));
exports.LineChartSimpleDemo = LineChartSimpleDemo;
