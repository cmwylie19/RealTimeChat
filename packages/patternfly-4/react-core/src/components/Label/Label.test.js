"use strict";
exports.__esModule = true;
var react_1 = require("react");
var enzyme_1 = require("enzyme");
var Label_1 = require("./Label");
test('label', function () {
    var view = enzyme_1.shallow(<Label_1.Label>Something</Label_1.Label>);
    expect(view).toMatchSnapshot();
});
test('compact label', function () {
    var view = enzyme_1.shallow(<Label_1.Label isCompact>Something</Label_1.Label>);
    expect(view).toMatchSnapshot();
});
test('label with additional class name', function () {
    var view = enzyme_1.shallow(<Label_1.Label className="klass1">Something</Label_1.Label>);
    expect(view).toMatchSnapshot();
});
test('label with additional class name and props', function () {
    var view = enzyme_1.shallow(<Label_1.Label className="class-1" id="label-1" data-label-name="something">
      Something
    </Label_1.Label>);
    expect(view).toMatchSnapshot();
});
