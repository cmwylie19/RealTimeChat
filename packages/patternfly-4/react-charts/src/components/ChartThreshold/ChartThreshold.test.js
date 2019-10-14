"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Chart_1 = require("../Chart");
var ChartGroup_1 = require("../ChartGroup");
var ChartThreshold_1 = require("./ChartThreshold");
var ChartTheme_1 = require("../ChartTheme");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartThreshold', function () {
        var view = enzyme_1.shallow(<ChartThreshold_1.ChartThreshold />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var data = [
        { name: 'Birds Threshold', x: 0, y: 2 },
        { name: 'Birds Threshold', x: 2, y: 2 },
        { name: 'Birds Threshold', x: 2, y: 3 },
        { name: 'Birds Threshold', x: 5, y: 3 },
    ];
    var view = enzyme_1.shallow(<Chart_1.Chart minDomain={{ y: 0 }} height={200} width={200}>
      <ChartGroup_1.ChartGroup>
        <ChartThreshold_1.ChartThreshold data={data} themeColor={ChartTheme_1.ChartThemeColor.orange} themeVariant={ChartTheme_1.ChartThemeVariant.light}/>
      </ChartGroup_1.ChartGroup>
    </Chart_1.Chart>);
    expect(view).toMatchSnapshot();
});
