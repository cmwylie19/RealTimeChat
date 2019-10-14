"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Spinner_1 = require("./Spinner");
test('simple spinner', function () {
    var view = enzyme_1.shallow(<Spinner_1.Spinner />);
    expect(view).toMatchSnapshot();
});
test('small spinner', function () {
    var view = enzyme_1.shallow(<Spinner_1.Spinner />);
    expect(view).toMatchSnapshot();
});
test('medium spinner', function () {
    var view = enzyme_1.shallow(<Spinner_1.Spinner />);
    expect(view).toMatchSnapshot();
});
test('large spinner', function () {
    var view = enzyme_1.shallow(<Spinner_1.Spinner />);
    expect(view).toMatchSnapshot();
});
test('extra large spinner', function () {
    var view = enzyme_1.shallow(<Spinner_1.Spinner />);
    expect(view).toMatchSnapshot();
});
