"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartBulletComparativeErrorMeasure_1 = require("./ChartBulletComparativeErrorMeasure");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartBulletComparativeErrorMeasure', function () {
        var view = enzyme_1.shallow(<ChartBulletComparativeErrorMeasure_1.ChartBulletComparativeErrorMeasure />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<ChartBulletComparativeErrorMeasure_1.ChartBulletComparativeErrorMeasure data={[{ y: 88 }]} domain={{ x: [0, 200] }} width={450}/>);
    expect(view).toMatchSnapshot();
});
