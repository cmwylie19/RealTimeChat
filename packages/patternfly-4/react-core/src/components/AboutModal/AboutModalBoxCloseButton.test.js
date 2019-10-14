"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var AboutModalBoxCloseButton_1 = require("./AboutModalBoxCloseButton");
test('AboutModalBoxCloseButton Test', function () {
    var view = enzyme_1.shallow(<AboutModalBoxCloseButton_1.AboutModalBoxCloseButton />);
    expect(view).toMatchSnapshot();
});
test('AboutModalBoxCloseButton Test onclose', function () {
    var onClose = jest.fn();
    var view = enzyme_1.shallow(<AboutModalBoxCloseButton_1.AboutModalBoxCloseButton onClose={onClose}/>);
    expect(view).toMatchSnapshot();
});
