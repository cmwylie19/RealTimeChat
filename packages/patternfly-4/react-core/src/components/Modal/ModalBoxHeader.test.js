"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Title_1 = require("../Title");
var ModalBoxHeader_1 = require("./ModalBoxHeader");
test('ModalBoxHeader Test', function () {
    var view = enzyme_1.shallow(<ModalBoxHeader_1.ModalBoxHeader>This is a ModalBox header</ModalBoxHeader_1.ModalBoxHeader>);
    expect(view).toMatchSnapshot();
});
test('ModalBoxHeader Test with H3', function () {
    var view = enzyme_1.shallow(<ModalBoxHeader_1.ModalBoxHeader headingLevel={Title_1.TitleLevel.h3}>This is a ModalBox header</ModalBoxHeader_1.ModalBoxHeader>);
    expect(view).toMatchSnapshot();
});
test('ModalBoxHeader Test hideTitle', function () {
    var view = enzyme_1.shallow(<ModalBoxHeader_1.ModalBoxHeader hideTitle>This is a ModalBox header</ModalBoxHeader_1.ModalBoxHeader>);
    expect(view).toMatchSnapshot();
});
