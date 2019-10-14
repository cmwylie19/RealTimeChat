"use strict";
exports.__esModule = true;
var React = require("react");
var Gallery_1 = require("./Gallery");
var gutters_1 = require("../../styles/gutters");
var enzyme_1 = require("enzyme");
Object.values(gutters_1.GutterSize).forEach(function (gutter) {
    test("gutter " + gutter, function () {
        var view = enzyme_1.shallow(<Gallery_1.Gallery gutter={gutter}/>);
        expect(view).toMatchSnapshot();
    });
});
