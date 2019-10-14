"use strict";
exports.__esModule = true;
require("@patternfly/react-core/dist/styles/base.css");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var App_1 = require("./App");
var serviceWorker = require("./serviceWorker");
react_dom_1["default"].render(<App_1["default"] />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
