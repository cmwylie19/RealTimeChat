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
var StackedAreaDemo = /** @class */ (function (_super) {
    __extends(StackedAreaDemo, _super);
    function StackedAreaDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedAreaDemo.prototype.render = function () {
        return (<div>
            <div style={{ height: '225px', width: '650px' }}>
              <react_charts_1.Chart containerComponent={<react_charts_1.ChartVoronoiContainer labels={function (datum) { return datum.name + ": " + datum.y; }}/>} legendData={[{ name: 'Cats' }, { name: 'Birds' }, { name: 'Dogs' }]} legendPosition="bottom" height={225} padding={{
            bottom: 75,
            left: 50,
            right: 50,
            top: 50
        }} maxDomain={{ y: 30 }} themeColor={react_charts_1.ChartThemeColor.multiUnordered} width={650}>
                <react_charts_1.ChartAxis />
                <react_charts_1.ChartAxis dependentAxis showGrid/>
                 <react_charts_1.ChartStack>
                  <react_charts_1.ChartArea data={[
            { name: 'Cats', x: 'Sunday', y: 6 },
            { name: 'Cats', x: 'Monday', y: 2 },
            { name: 'Cats', x: 'Tuesday', y: 8 },
            { name: 'Cats', x: 'Wednesday', y: 15 },
            { name: 'Cats', x: 'Thursday', y: 6 },
            { name: 'Cats', x: 'Friday', y: 2 },
            { name: 'Cats', x: 'Saturday', y: 0 }
        ]} interpolation="basis"/>
                  <react_charts_1.ChartArea data={[
            { name: 'Birds', x: 'Sunday', y: 4 },
            { name: 'Birds', x: 'Monday', y: 5 },
            { name: 'Birds', x: 'Tuesday', y: 7 },
            { name: 'Birds', x: 'Wednesday', y: 6 },
            { name: 'Birds', x: 'Thursday', y: 10 },
            { name: 'Birds', x: 'Friday', y: 3 },
            { name: 'Birds', x: 'Saturday', y: 5 }
        ]} interpolation="basis"/>
                  <react_charts_1.ChartArea data={[
            { name: 'Dogs', x: 'Sunday', y: 8 },
            { name: 'Dogs', x: 'Monday', y: 18 },
            { name: 'Dogs', x: 'Tuesday', y: 14 },
            { name: 'Dogs', x: 'Wednesday', y: 8 },
            { name: 'Dogs', x: 'Thursday', y: 6 },
            { name: 'Dogs', x: 'Friday', y: 8 },
            { name: 'Dogs', x: 'Saturday', y: 12 }
        ]} interpolation="basis"/>
                  </react_charts_1.ChartStack>
              </react_charts_1.Chart>
            </div>
          </div>);
    };
    return StackedAreaDemo;
}(react_1["default"].Component));
exports.StackedAreaDemo = StackedAreaDemo;
