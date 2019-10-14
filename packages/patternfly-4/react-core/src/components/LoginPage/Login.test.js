"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Login_1 = require("./Login");
var LoginFooter_1 = require("./LoginFooter");
var LoginHeader_1 = require("./LoginHeader");
test('Check login layout example against snapshot', function () {
    var Header = <LoginHeader_1.LoginHeader headerBrand="HeaderBrand">Header Text</LoginHeader_1.LoginHeader>;
    var Footer = <LoginFooter_1.LoginFooter>Footer</LoginFooter_1.LoginFooter>;
    var view = enzyme_1.shallow(<Login_1.Login footer={Footer} header={Header}>
      Main
    </Login_1.Login>);
    expect(view).toMatchSnapshot();
});
