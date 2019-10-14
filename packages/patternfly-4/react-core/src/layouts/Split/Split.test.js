"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Split_1 = require("./Split");
var SplitItem_1 = require("./SplitItem");
var gutters_1 = require("../../styles/gutters");
test('isFilled', function () {
    var view = enzyme_1.mount(<Split_1.Split>
      <SplitItem_1.SplitItem isFilled>Main content</SplitItem_1.SplitItem>
    </Split_1.Split>);
    expect(view).toMatchSnapshot();
});
test('isFilled defaults to false', function () {
    var view = enzyme_1.mount(<Split_1.Split>
      <SplitItem_1.SplitItem>Basic content</SplitItem_1.SplitItem>
    </Split_1.Split>);
    expect(view).toMatchSnapshot();
});
Object.values(gutters_1.GutterSize).forEach(function (gutter) {
    test("Gutter " + gutter, function () {
        var view = enzyme_1.mount(<Split_1.Split gutter={gutter}>
        <SplitItem_1.SplitItem>Basic Content</SplitItem_1.SplitItem>
      </Split_1.Split>);
        expect(view).toMatchSnapshot();
    });
});
