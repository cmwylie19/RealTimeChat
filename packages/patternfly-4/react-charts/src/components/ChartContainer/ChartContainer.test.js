"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartContainer_1 = require("./ChartContainer");
var ChartLegend_1 = require("../ChartLegend");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartContainer', function () {
        var view = enzyme_1.shallow(<ChartContainer_1.ChartContainer />);
        expect(view).toMatchSnapshot();
    });
});
test('renders container via ChartLegend', function () {
    var view = enzyme_1.shallow(<ChartContainer_1.ChartContainer>
      <ChartLegend_1.ChartLegend data={[{ name: 'Cats' }, { name: 'Dogs' }]} height={50} standalone={false} title="Average number of pets" width={200}/>
    </ChartContainer_1.ChartContainer>);
    expect(view).toMatchSnapshot();
});
