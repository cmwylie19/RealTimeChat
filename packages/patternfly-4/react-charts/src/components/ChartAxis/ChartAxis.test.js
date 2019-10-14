"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Chart_1 = require("../Chart");
var ChartAxis_1 = require("./ChartAxis");
var ChartGroup_1 = require("../ChartGroup");
var ChartLine_1 = require("../ChartLine");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartAxis', function () {
        var view = enzyme_1.shallow(<ChartAxis_1.ChartAxis />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<Chart_1.Chart domainPadding={{ x: [30, 25] }} height={200} width={300}>
      <ChartGroup_1.ChartGroup>
        <ChartLine_1.ChartLine data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }, { x: 4, y: 3 }]}/>
        <ChartLine_1.ChartLine data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }, { x: 4, y: 4 }]}/>
        <ChartLine_1.ChartLine data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }, { x: 4, y: 5 }]}/>
        <ChartLine_1.ChartLine data={[{ x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 8 }, { x: 4, y: 7 }]}/>
      </ChartGroup_1.ChartGroup>
      <ChartAxis_1.ChartAxis tickValues={[2, 3, 4]}/>
      <ChartAxis_1.ChartAxis dependentAxis tickValues={[2, 5, 8]}/>
    </Chart_1.Chart>);
    expect(view).toMatchSnapshot();
});
