"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var ContextSelectorToggle_1 = require("./ContextSelectorToggle");
test('Renders ContextSelectorToggle', function () {
    var view = enzyme_1.shallow(<ContextSelectorToggle_1.ContextSelectorToggle id="toggle-id"/>);
    expect(view).toMatchSnapshot();
});
test('Verify onToggle is called ', function () {
    var mockfnOnToggle = jest.fn();
    var view = enzyme_1.mount(<ContextSelectorToggle_1.ContextSelectorToggle onToggle={mockfnOnToggle} id="toggle-id"/>);
    view
        .find('button')
        .at(0)
        .simulate('click');
    expect(mockfnOnToggle.mock.calls).toHaveLength(1);
});
test('Verify ESC press ', function () {
    var view = enzyme_1.mount(<ContextSelectorToggle_1.ContextSelectorToggle isOpen id="toggle-id"/>);
    view.simulate('keyDown', { key: 'Escape' });
    expect(view).toMatchSnapshot();
});
test('Verify ESC press with not isOpen', function () {
    var view = enzyme_1.mount(<ContextSelectorToggle_1.ContextSelectorToggle onToggle={jest.fn()} id="toggle-id"/>);
    view.simulate('keyDown', { key: 'Escape' });
    expect(view).toMatchSnapshot();
});
test('Verify keydown tab ', function () {
    var view = enzyme_1.mount(<ContextSelectorToggle_1.ContextSelectorToggle isOpen id="toggle-id"/>);
    view.simulate('keyDown', { key: 'Tab' });
    expect(view).toMatchSnapshot();
});
test('Verify keydown enter ', function () {
    var view = enzyme_1.mount(<ContextSelectorToggle_1.ContextSelectorToggle onToggle={jest.fn()} onEnter={jest.fn()} id="toggle-id"/>);
    view.simulate('keyDown', { key: 'Enter' });
    expect(view).toMatchSnapshot();
});
