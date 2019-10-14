"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartBulletTitle_1 = require("./ChartBulletTitle");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartBulletTitle', function () {
        var view = enzyme_1.shallow(<ChartBulletTitle_1.ChartBulletTitle />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<ChartBulletTitle_1.ChartBulletTitle title="Text label" subTitle="Measure details"/>);
    expect(view).toMatchSnapshot();
});
