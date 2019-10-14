"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartBulletComparativeMeasure_1 = require("./ChartBulletComparativeMeasure");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartBulletComparativeMeasure', function () {
        var view = enzyme_1.shallow(<ChartBulletComparativeMeasure_1.ChartBulletComparativeMeasure />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<ChartBulletComparativeMeasure_1.ChartBulletComparativeMeasure data={[{ y: 100 }]} domain={{ x: [0, 200] }} width={450}/>);
    expect(view).toMatchSnapshot();
});
