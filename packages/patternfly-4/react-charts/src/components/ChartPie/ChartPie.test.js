"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartPie_1 = require("./ChartPie");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartPie', function () {
        var view = enzyme_1.shallow(<ChartPie_1.ChartPie />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<ChartPie_1.ChartPie data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]} height={200} width={200}/>);
    expect(view).toMatchSnapshot();
});
