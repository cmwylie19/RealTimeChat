"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ModalBoxCloseButton_1 = require("./ModalBoxCloseButton");
test('ModalBoxCloseButton Test', function () {
    var mockfn = jest.fn();
    var view = enzyme_1.shallow(<ModalBoxCloseButton_1.ModalBoxCloseButton className="test-box-close-button-class" onClose={mockfn}/>);
    expect(view).toMatchSnapshot();
    view
        .find('.test-box-close-button-class')
        .at(0)
        .simulate('click');
    expect(mockfn.mock.calls).toHaveLength(1);
});
