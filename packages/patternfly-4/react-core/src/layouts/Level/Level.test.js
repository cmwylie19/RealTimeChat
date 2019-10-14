"use strict";
exports.__esModule = true;
var React = require("react");
var Level_1 = require("./Level");
var gutters_1 = require("../../styles/gutters");
var LevelItem_1 = require("./LevelItem");
var enzyme_1 = require("enzyme");
Object.values(gutters_1.GutterSize).forEach(function (gutter) {
    test("Gutter " + gutter, function () {
        var view = enzyme_1.shallow(<Level_1.Level gutter={gutter}/>);
        expect(view).toMatchSnapshot();
    });
});
test('item', function () {
    var view = enzyme_1.shallow(<LevelItem_1.LevelItem>Level Item</LevelItem_1.LevelItem>);
    expect(view).toMatchSnapshot();
});
