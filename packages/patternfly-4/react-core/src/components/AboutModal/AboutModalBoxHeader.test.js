"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var AboutModalBoxHeader_1 = require("./AboutModalBoxHeader");
test('AboutModalBoxHeader Test', function () {
    var view = enzyme_1.shallow(<AboutModalBoxHeader_1.AboutModalBoxHeader productName="Product Name" id="id">
      This is a AboutModalBox header
    </AboutModalBoxHeader_1.AboutModalBoxHeader>);
    expect(view).toMatchSnapshot();
});
