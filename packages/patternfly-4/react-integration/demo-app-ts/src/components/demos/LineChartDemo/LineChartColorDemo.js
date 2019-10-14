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
var victory_1 = require("victory");
var LineChartColorDemo = /** @class */ (function (_super) {
    __extends(LineChartColorDemo, _super);
    function LineChartColorDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineChartColorDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    LineChartColorDemo.prototype.render = function () {
        return (<div>
        <div style={{ height: '275px', width: '450px' }}>
          <react_charts_1.Chart containerComponent={<victory_1.VictoryZoomContainer zoomDimension="x"/>} legendData={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }, { name: 'Birds' }, { name: 'Mice' }]} legendPosition="bottom" height={275} padding={{
            bottom: 75,
            left: 50,
            right: 50,
            top: 50
        }} themeColor={react_charts_1.ChartThemeColor.multi} width={450}>
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
    return LineChartColorDemo;
}(react_1["default"].Component));
exports.LineChartColorDemo = LineChartColorDemo;
