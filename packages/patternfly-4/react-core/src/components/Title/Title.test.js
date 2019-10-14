"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var _1 = require(".");
Object.values(_1.TitleSize).forEach(function (size) {
    test(size + " Title", function () {
        var view = enzyme_1.shallow(<_1.Title size={size} headingLevel={_1.TitleLevel.h1}>
        {size} Title
      </_1.Title>);
        expect(view).toMatchSnapshot();
    });
});
test('Heading level can be set using a string value', function () {
    var view = enzyme_1.shallow(<_1.Title size="lg" headingLevel={_1.TitleLevel.h3}>
      H3 Heading
    </_1.Title>);
    var isH3 = view.find('h3').length === 1;
    var isH1 = view.find('h1').length === 1;
    expect(isH1).toBe(false);
    expect(isH3).toBe(true);
});
