"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartArea_1 = require("../ChartArea");
var ChartGroup_1 = require("../ChartGroup");
var ChartVoronoiContainer_1 = require("./ChartVoronoiContainer");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartVoronoiContainer', function () {
        var view = enzyme_1.shallow(<ChartVoronoiContainer_1.ChartVoronoiContainer />);
        expect(view).toMatchSnapshot();
    });
});
test('renders container via ChartGroup', function () {
    var view = enzyme_1.shallow(<ChartGroup_1.ChartGroup containerComponent={<ChartVoronoiContainer_1.ChartVoronoiContainer />} height={200} width={200}>
      <ChartArea_1.ChartArea data={[
        { name: 'Cats', x: 1, y: 1 },
        { name: 'Cats', x: 2, y: 2 },
        { name: 'Cats', x: 3, y: 3.2 },
        { name: 'Cats', x: 4, y: 3.5 }
    ]}/>
      <ChartArea_1.ChartArea data={[
        { name: 'Dogs', x: 1, y: 0.5 },
        { name: 'Dogs', x: 2, y: 1 },
        { name: 'Dogs', x: 3, y: 2 },
        { name: 'Dogs', x: 4, y: 2.5 },
        { name: 'Dogs', x: 5, y: 2.5 }
    ]}/>
    </ChartGroup_1.ChartGroup>);
    expect(view).toMatchSnapshot();
});
