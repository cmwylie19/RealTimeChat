"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartLegend_1 = require("./ChartLegend");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartLegend', function () {
        var view = enzyme_1.shallow(<ChartLegend_1.ChartLegend />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<ChartLegend_1.ChartLegend data={[{ name: 'Cats' }, { name: 'Dogs' }]} title="Average number of pets" height={50} width={200}/>);
    expect(view).toMatchSnapshot();
});
