"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var PageHeader_1 = require("./PageHeader");
jest.mock('./Page');
test('Check page vertical layout example against snapshot', function () {
    var Header = <PageHeader_1.PageHeader logo="Logo" toolbar="Toolbar" avatar=" | Avatar" onNavToggle={function () { return undefined; }}/>;
    var view = enzyme_1.mount(Header);
    expect(view).toMatchSnapshot();
});
