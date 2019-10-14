"use strict";
exports.__esModule = true;
var React = require("react");
var GridItem_1 = require("./GridItem");
var enzyme_1 = require("enzyme");
var sizes_1 = require("../../styles/sizes");
test('adds span class', function () {
    var view = enzyme_1.shallow(<GridItem_1.GridItem span={4}/>);
    expect(view.props().className).toMatchSnapshot();
});
test('adds offset class', function () {
    var view = enzyme_1.shallow(<GridItem_1.GridItem offset={4}/>);
    expect(view.props().className).toMatchSnapshot();
});
test('adds row class', function () {
    var view = enzyme_1.shallow(<GridItem_1.GridItem rowSpan={4}/>);
    expect(view.props().className).toMatchSnapshot();
});
Object.values(sizes_1.DeviceSizes).forEach(function (size) {
    test("adds " + size + " span class", function () {
        var _a;
        var props = (_a = {}, _a[size] = 4, _a);
        var view = enzyme_1.shallow(<GridItem_1.GridItem {...props}/>);
        expect(view.props().className).toMatchSnapshot();
    });
    test("adds " + size + " offset classes", function () {
        var _a;
        var props = (_a = {}, _a[size + "Offset"] = 1, _a);
        var view = enzyme_1.shallow(<GridItem_1.GridItem {...props}/>);
        expect(view.props().className).toMatchSnapshot();
    });
    test("adds " + size + " row classes", function () {
        var _a;
        var props = (_a = {}, _a[size + "RowSpan"] = 1, _a);
        var view = enzyme_1.shallow(<GridItem_1.GridItem {...props}/>);
        expect(view.props().className).toMatchSnapshot();
    });
});
