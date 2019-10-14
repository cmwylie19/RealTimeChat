"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartLegend_1 = require("../ChartLegend");
var ChartPoint_1 = require("./ChartPoint");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartPoint', function () {
        var view = enzyme_1.shallow(<ChartLegend_1.ChartLegend dataComponent={<ChartPoint_1.ChartPoint />}/>);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<ChartLegend_1.ChartLegend data={[{ name: 'Cats' }, { name: 'Dogs', symbol: { type: 'dash' } }]} title="Average number of pets" height={50} width={200}/>);
    expect(view).toMatchSnapshot();
});
