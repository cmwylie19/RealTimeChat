"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartBulletComparativeWarningMeasure_1 = require("./ChartBulletComparativeWarningMeasure");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartBulletComparativeZeroMeasure', function () {
        var view = enzyme_1.shallow(<ChartBulletComparativeWarningMeasure_1.ChartBulletComparativeWarningMeasure />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<ChartBulletComparativeWarningMeasure_1.ChartBulletComparativeWarningMeasure data={[{ y: 100 }]} domain={{ x: [0, 200] }} width={450}/>);
    expect(view).toMatchSnapshot();
});
