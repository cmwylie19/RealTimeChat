"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Expandable_1 = require("./Expandable");
var props = {};
test('Expandable', function () {
    var view = enzyme_1.shallow(<Expandable_1.Expandable {...props}>test </Expandable_1.Expandable>);
    expect(view).toMatchSnapshot();
});
test('Renders Expandable expanded', function () {
    var view = enzyme_1.shallow(<Expandable_1.Expandable isExpanded> test </Expandable_1.Expandable>);
    expect(view).toMatchSnapshot();
});
test('Expandable onToggle called', function () {
    var mockfn = jest.fn();
    var view = enzyme_1.shallow(<Expandable_1.Expandable onToggle={mockfn}> test </Expandable_1.Expandable>);
    view
        .find('button')
        .at(0)
        .simulate('click');
    expect(mockfn.mock.calls).toHaveLength(1);
});
test('Renders Uncontrolled Expandable', function () {
    var view = enzyme_1.shallow(<Expandable_1.Expandable toggleText="Show More"> test </Expandable_1.Expandable>);
    expect(view).toMatchSnapshot();
});
