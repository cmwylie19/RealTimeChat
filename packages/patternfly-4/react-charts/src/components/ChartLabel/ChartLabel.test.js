"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartLabel_1 = require("./ChartLabel");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartLabel', function () {
        var view = enzyme_1.shallow(<ChartLabel_1.ChartLabel />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component text', function () {
    var view = enzyme_1.shallow(<ChartLabel_1.ChartLabel text="This is a test"/>);
    expect(view).toMatchSnapshot();
});
