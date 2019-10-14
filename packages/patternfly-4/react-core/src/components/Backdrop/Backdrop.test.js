"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var Backdrop_1 = require("./Backdrop");
test('Backdrop Test', function () {
    var view = enzyme_1.shallow(<Backdrop_1.Backdrop>Backdrop</Backdrop_1.Backdrop>);
    expect(view).toMatchSnapshot();
});
