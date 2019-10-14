"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Stack_1 = require("./Stack");
var StackItem_1 = require("./StackItem");
var gutters_1 = require("../../styles/gutters");
test('isMain set to true', function () {
    var view = enzyme_1.mount(<Stack_1.Stack>
      <StackItem_1.StackItem isFilled>Filled content</StackItem_1.StackItem>
    </Stack_1.Stack>);
    expect(view).toMatchSnapshot();
});
test('isMain defaults to false', function () {
    var view = enzyme_1.mount(<Stack_1.Stack>
      <StackItem_1.StackItem>Basic content</StackItem_1.StackItem>
    </Stack_1.Stack>);
    expect(view).toMatchSnapshot();
});
Object.values(gutters_1.GutterSize).forEach(function (gutter) {
    test("Gutter " + gutter, function () {
        var view = enzyme_1.mount(<Stack_1.Stack gutter={gutter}>
        <StackItem_1.StackItem>Basic content</StackItem_1.StackItem>
      </Stack_1.Stack>);
        expect(view).toMatchSnapshot();
    });
});
