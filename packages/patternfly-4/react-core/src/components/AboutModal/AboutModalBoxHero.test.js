"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var AboutModalBoxHero_1 = require("./AboutModalBoxHero");
test('test About Modal Box SHero', function () {
    var view = enzyme_1.shallow(<AboutModalBoxHero_1.AboutModalBoxHero />);
    expect(view).toMatchSnapshot();
});
