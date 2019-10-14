"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var AboutModalBox_1 = require("./AboutModalBox");
test('AboutModalBox Test', function () {
    var view = enzyme_1.shallow(<AboutModalBox_1.AboutModalBox aria-labelledby="id" aria-describedby="id2">
      This is a AboutModalBox
    </AboutModalBox_1.AboutModalBox>);
    expect(view).toMatchSnapshot();
});
