"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var App_1 = require("./App");
it('renders without crashing', function () {
    var div = document.createElement('div');
    react_dom_1["default"].render(<App_1["default"] />, div);
    react_dom_1["default"].unmountComponentAtNode(div);
});
