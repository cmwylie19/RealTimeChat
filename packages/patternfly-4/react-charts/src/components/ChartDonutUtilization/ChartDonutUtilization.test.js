"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartDonutUtilization_1 = require("./ChartDonutUtilization");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartDonutUtilization', function () {
        var view = enzyme_1.shallow(<ChartDonutUtilization_1.ChartDonutUtilization />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<ChartDonutUtilization_1.ChartDonutUtilization data={{ x: 'Cats', y: 35 }} height={200} width={200}/>);
    expect(view).toMatchSnapshot();
});
