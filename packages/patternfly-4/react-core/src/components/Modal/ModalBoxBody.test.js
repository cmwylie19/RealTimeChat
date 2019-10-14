"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ModalBoxBody_1 = require("./ModalBoxBody");
test('ModalBoxBody Test', function () {
    var view = enzyme_1.shallow(<ModalBoxBody_1.ModalBoxBody id="id" className="test-box-class">This is a ModalBox header</ModalBoxBody_1.ModalBoxBody>);
    expect(view).toMatchSnapshot();
});
