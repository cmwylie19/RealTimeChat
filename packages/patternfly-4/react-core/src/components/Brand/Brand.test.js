"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Brand_1 = require("./Brand");
test('simple brand', function () {
    var view = enzyme_1.shallow(<Brand_1.Brand alt="brand"/>);
    expect(view).toMatchSnapshot();
});
