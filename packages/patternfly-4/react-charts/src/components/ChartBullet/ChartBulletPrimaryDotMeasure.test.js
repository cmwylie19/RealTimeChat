"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartBulletPrimaryDotMeasure_1 = require("./ChartBulletPrimaryDotMeasure");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartBulletPrimaryDotMeasure', function () {
        var view = enzyme_1.shallow(<ChartBulletPrimaryDotMeasure_1.ChartBulletPrimaryDotMeasure />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<ChartBulletPrimaryDotMeasure_1.ChartBulletPrimaryDotMeasure data={[{ y: 50 }, { y: 85 }, { y: 150 }]} domain={{ x: [0, 200] }}/>);
    expect(view).toMatchSnapshot();
});
