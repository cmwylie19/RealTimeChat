"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var ContextSelector_1 = require("./ContextSelector");
var ContextSelectorItem_1 = require("./ContextSelectorItem");
var items = [
    <ContextSelectorItem_1.ContextSelectorItem key="0">My Project</ContextSelectorItem_1.ContextSelectorItem>,
    <ContextSelectorItem_1.ContextSelectorItem key="1">OpenShift Cluster</ContextSelectorItem_1.ContextSelectorItem>,
    <ContextSelectorItem_1.ContextSelectorItem key="2">Production Ansible</ContextSelectorItem_1.ContextSelectorItem>,
    <ContextSelectorItem_1.ContextSelectorItem key="3">AWS</ContextSelectorItem_1.ContextSelectorItem>,
    <ContextSelectorItem_1.ContextSelectorItem key="4">Azure</ContextSelectorItem_1.ContextSelectorItem>
];
test('Renders ContextSelector', function () {
    var view = enzyme_1.shallow(<ContextSelector_1.ContextSelector> {items} </ContextSelector_1.ContextSelector>);
    expect(view).toMatchSnapshot();
});
test('Renders ContextSelector open', function () {
    var view = enzyme_1.shallow(<ContextSelector_1.ContextSelector isOpen> {items} </ContextSelector_1.ContextSelector>);
    expect(view).toMatchSnapshot();
});
test('Verify onToggle is called ', function () {
    var mockfn = jest.fn();
    var view = enzyme_1.mount(<ContextSelector_1.ContextSelector onToggle={mockfn}> {items} </ContextSelector_1.ContextSelector>);
    view
        .find('button')
        .at(0)
        .simulate('click');
    expect(mockfn.mock.calls).toHaveLength(1);
});
