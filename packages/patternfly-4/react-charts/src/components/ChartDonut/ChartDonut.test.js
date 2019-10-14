"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartDonut_1 = require("./ChartDonut");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartDonut', function () {
        var view = enzyme_1.shallow(<ChartDonut_1.ChartDonut />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<ChartDonut_1.ChartDonut data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]} height={200} width={200}/>);
    expect(view).toMatchSnapshot();
});
