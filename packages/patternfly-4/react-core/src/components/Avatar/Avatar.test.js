"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Avatar_1 = require("./Avatar");
test('simple avatar', function () {
    var view = enzyme_1.shallow(<Avatar_1.Avatar alt="avatar"/>);
    expect(view).toMatchSnapshot();
});
