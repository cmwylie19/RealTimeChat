"use strict";
exports.__esModule = true;
var React = require("react");
var Grid_1 = require("./Grid");
var gutters_1 = require("../../styles/gutters");
var enzyme_1 = require("enzyme");
Object.values(gutters_1.GutterSize).forEach(function (gutter) {
    test("gutter " + gutter, function () {
        var view = enzyme_1.shallow(<Grid_1.Grid gutter="md"/>);
        expect(view).toMatchSnapshot();
    });
});
