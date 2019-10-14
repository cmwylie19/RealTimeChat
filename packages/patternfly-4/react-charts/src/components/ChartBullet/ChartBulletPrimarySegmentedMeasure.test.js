"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartBulletPrimarySegmentedMeasure_1 = require("./ChartBulletPrimarySegmentedMeasure");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartBulletPrimarySegmentedMeasure', function () {
        var view = enzyme_1.shallow(<ChartBulletPrimarySegmentedMeasure_1.ChartBulletPrimarySegmentedMeasure />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<ChartBulletPrimarySegmentedMeasure_1.ChartBulletPrimarySegmentedMeasure data={[{ y: 50 }, { y: 85 }, { y: 150 }]} domain={{ x: [0, 200] }}/>);
    expect(view).toMatchSnapshot();
});
