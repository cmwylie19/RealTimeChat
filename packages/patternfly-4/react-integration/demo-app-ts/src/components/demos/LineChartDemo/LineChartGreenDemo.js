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
var LineChartGreenDemo = /** @class */ (function (_super) {
    __extends(LineChartGreenDemo, _super);
    function LineChartGreenDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineChartGreenDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    LineChartGreenDemo.prototype.render = function () {
        return (<div>
        <div style={{ height: '250px', width: '600px' }}>
          <react_charts_1.Chart containerComponent={<react_charts_1.ChartVoronoiContainer labels={function (_a) {
            var datum = _a.datum;
            return datum.name + ": " + datum.y;
        }}/>} legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]} legendOrientation="vertical" legendPosition="right" height={250} padding={{
            bottom: 50,
            left: 50,
            right: 200,
            top: 50
        }} themeColor={react_charts_1.ChartThemeColor.green} width={600}>
            <react_charts_1.ChartAxis tickValues={[2, 3, 4]}/>
            <react_charts_1.ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]}/>
            <react_charts_1.ChartGroup>
              <react_charts_1.ChartLine data={[
            { name: 'Cats', x: 1, y: 1 },
            { name: 'Cats', x: 2, y: 2 },
            { name: 'Cats', x: 3, y: 5 },
            { name: 'Cats', x: 4, y: 3 }
        ]}/>
              <react_charts_1.ChartLine data={[
            { name: 'Dogs', x: 1, y: 2 },
            { name: 'Dogs', x: 2, y: 1 },
            { name: 'Dogs', x: 3, y: 7 },
            { name: 'Dogs', x: 4, y: 4 }
        ]} style={{
            data: {
                strokeDasharray: '3,3'
            }
        }}/>
              <react_charts_1.ChartLine data={[
            { name: 'Birds', x: 1, y: 3 },
            { name: 'Birds', x: 2, y: 4 },
            { name: 'Birds', x: 3, y: 9 },
            { name: 'Birds', x: 4, y: 5 }
        ]}/>
              <react_charts_1.ChartLine data={[
            { name: 'Mice', x: 1, y: 3 },
            { name: 'Mice', x: 2, y: 3 },
            { name: 'Mice', x: 3, y: 8 },
            { name: 'Mice', x: 4, y: 7 }
        ]}/>
            </react_charts_1.ChartGroup>
          </react_charts_1.Chart>
        </div>
      </div>);
    };
    return LineChartGreenDemo;
}(react_1["default"].Component));
exports.LineChartGreenDemo = LineChartGreenDemo;
