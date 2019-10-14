"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Chart_1 = require("../Chart/Chart");
var ChartGroup_1 = require("../ChartGroup/ChartGroup");
var ChartScatter_1 = require("./ChartScatter");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartScatter', function () {
        var view = enzyme_1.shallow(<ChartScatter_1.ChartScatter />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<Chart_1.Chart minDomain={{ y: 0 }} height={200} width={200}>
      <ChartGroup_1.ChartGroup>
        <ChartScatter_1.ChartScatter data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }]}/>
        <ChartScatter_1.ChartScatter data={[{ x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }]}/>
        <ChartScatter_1.ChartScatter data={[{ x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }]}/>
        <ChartScatter_1.ChartScatter data={[{ x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]}/>
      </ChartGroup_1.ChartGroup>
    </Chart_1.Chart>);
    expect(view).toMatchSnapshot();
});
