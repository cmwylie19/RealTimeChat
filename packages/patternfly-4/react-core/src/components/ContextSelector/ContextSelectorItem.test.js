"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var ContextSelectorItem_1 = require("./ContextSelectorItem");
test('Renders ContextSelectorItem', function () {
    var view = enzyme_1.shallow(<ContextSelectorItem_1.ContextSelectorItem sendRef={jest.fn()} index={0}>
      My Project
    </ContextSelectorItem_1.ContextSelectorItem>);
    expect(view).toMatchSnapshot();
});
test('Renders ContextSelectorItem disabled and hovered', function () {
    var view = enzyme_1.shallow(<ContextSelectorItem_1.ContextSelectorItem isDisabled isHovered sendRef={jest.fn()} index={0}>
      My Project
    </ContextSelectorItem_1.ContextSelectorItem>);
    expect(view).toMatchSnapshot();
});
test('Verify onClick is called ', function () {
    var mockfn = jest.fn();
    var view = enzyme_1.mount(<ContextSelectorItem_1.ContextSelectorItem isHovered onClick={mockfn} sendRef={jest.fn()} index={0}>
      My Project
    </ContextSelectorItem_1.ContextSelectorItem>);
    view
        .find('button')
        .at(0)
        .simulate('click');
    expect(mockfn.mock.calls).toHaveLength(1);
});
