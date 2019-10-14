"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartBulletQualitativeRange_1 = require("./ChartBulletQualitativeRange");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartBulletQualitativeRange', function () {
        var view = enzyme_1.shallow(<ChartBulletQualitativeRange_1.ChartBulletQualitativeRange />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<ChartBulletQualitativeRange_1.ChartBulletQualitativeRange data={[{ y: 50 }, { y: 85 }, { y: 150 }]} domain={{ x: [0, 200] }}/>);
    expect(view).toMatchSnapshot();
});
