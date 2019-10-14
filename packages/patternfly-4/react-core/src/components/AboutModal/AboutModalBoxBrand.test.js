"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var AboutModalBoxBrand_1 = require("./AboutModalBoxBrand");
test('test About Modal Brand', function () {
    var view = enzyme_1.shallow(<AboutModalBoxBrand_1.AboutModalBoxBrand src="testimage.." alt="brand"/>);
    expect(view).toMatchSnapshot();
});
