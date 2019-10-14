"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Chart_1 = require("../Chart");
var ChartGroup_1 = require("../ChartGroup");
var ChartLine_1 = require("./ChartLine");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartLine', function () {
        var view = enzyme_1.shallow(<ChartLine_1.ChartLine />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<Chart_1.Chart minDomain={{ y: 0 }} height={200} width={200}>
      <ChartGroup_1.ChartGroup>
        <ChartLine_1.ChartLine data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }, { x: 4, y: 3 }]}/>
        <ChartLine_1.ChartLine data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }, { x: 4, y: 4 }]}/>
        <ChartLine_1.ChartLine data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }, { x: 4, y: 5 }]}/>
        <ChartLine_1.ChartLine data={[{ x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 8 }, { x: 4, y: 7 }]}/>
      </ChartGroup_1.ChartGroup>
    </Chart_1.Chart>);
    expect(view).toMatchSnapshot();
});
