"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var AboutModalBoxContent_1 = require("./AboutModalBoxContent");
test('AboutModalBoxContent Test', function () {
    var view = enzyme_1.shallow(<AboutModalBoxContent_1.AboutModalBoxContent trademark="trademark" id="id">
      This is a AboutModalBoxContent
    </AboutModalBoxContent_1.AboutModalBoxContent>);
    expect(view).toMatchSnapshot();
});
