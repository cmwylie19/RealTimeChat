"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ModalBoxFooter_1 = require("./ModalBoxFooter");
test('ModalBoxFooter Test', function () {
    var view = enzyme_1.shallow(<ModalBoxFooter_1.ModalBoxFooter className="test-box-footer-class">This is a ModalBox Footer</ModalBoxFooter_1.ModalBoxFooter>);
    expect(view).toMatchSnapshot();
});
