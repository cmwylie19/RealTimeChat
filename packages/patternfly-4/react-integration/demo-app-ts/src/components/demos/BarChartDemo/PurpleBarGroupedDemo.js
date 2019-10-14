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
var PurpleBarGroupedDemo = /** @class */ (function (_super) {
    __extends(PurpleBarGroupedDemo, _super);
    function PurpleBarGroupedDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PurpleBarGroupedDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    PurpleBarGroupedDemo.prototype.render = function () {
        return (<div>
        <div style={{ width: '600px', height: '250px', paddingLeft: '50px' }}>
          <react_charts_1.Chart containerComponent={<react_charts_1.ChartVoronoiContainer labels={function (_a) {
            var datum = _a.datum;
            return datum.name + ": " + datum.y;
        }}/>} domainPadding={{ x: [30, 25] }} legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }, { name: 'Mice' }]} legendOrientation="vertical" legendPosition="right" height={250} padding={{
            bottom: 50,
            left: 50,
            right: 200,
            top: 50
        }} themeColor={react_charts_1.ChartThemeColor.purple} width={600}>
            <react_charts_1.ChartAxis />
            <react_charts_1.ChartAxis dependentAxis showGrid/>
            <react_charts_1.ChartGroup offset={11}>
              <react_charts_1.ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]}/>
              <react_charts_1.ChartBar data={[{ name: 'Dogs', x: '2015', y: 2 }, { name: 'Dogs', x: '2016', y: 1 }, { name: 'Dogs', x: '2017', y: 7 }, { name: 'Dogs', x: '2018', y: 4 }]}/>
              <react_charts_1.ChartBar data={[{ name: 'Birds', x: '2015', y: 4 }, { name: 'Birds', x: '2016', y: 4 }, { name: 'Birds', x: '2017', y: 9 }, { name: 'Birds', x: '2018', y: 7 }]}/>
              <react_charts_1.ChartBar data={[{ name: 'Mice', x: '2015', y: 3 }, { name: 'Mice', x: '2016', y: 3 }, { name: 'Mice', x: '2017', y: 8 }, { name: 'Mice', x: '2018', y: 5 }]}/>
            </react_charts_1.ChartGroup>
          </react_charts_1.Chart>
        </div>
      </div>);
    };
    return PurpleBarGroupedDemo;
}(react_1["default"].Component));
exports.PurpleBarGroupedDemo = PurpleBarGroupedDemo;
