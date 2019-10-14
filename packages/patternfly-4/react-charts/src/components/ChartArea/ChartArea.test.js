"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartArea_1 = require("../ChartArea");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartArea', function () {
        var view = enzyme_1.shallow(<ChartArea_1.ChartArea />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<ChartArea_1.ChartArea data={[
        { name: 'Cats', x: 1, y: 1 },
        { name: 'Cats', x: 2, y: 2 },
        { name: 'Cats', x: 3, y: 3.2 },
        { name: 'Cats', x: 4, y: 3.5 }
    ]}/>);
    expect(view).toMatchSnapshot();
});
