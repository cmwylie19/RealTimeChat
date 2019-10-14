"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartBulletGroupTitle_1 = require("./ChartBulletGroupTitle");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartBulletGroupTitle', function () {
        var view = enzyme_1.shallow(<ChartBulletGroupTitle_1.ChartBulletGroupTitle />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<ChartBulletGroupTitle_1.ChartBulletGroupTitle title="Text label" subTitle="Measure details"/>);
    expect(view).toMatchSnapshot();
});
