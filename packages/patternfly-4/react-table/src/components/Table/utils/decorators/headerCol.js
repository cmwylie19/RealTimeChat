"use strict";
exports.__esModule = true;
var React = require("react");
exports.headerCol = function (id) {
    if (id === void 0) { id = 'simple-node'; }
    // tslint:disable-next-line:no-shadowed-variable
    var headerCol = function (value, _a) {
        var rowIndex = (_a === void 0 ? {} : _a).rowIndex;
        var result = typeof value === 'object' ? value.title : value;
        return {
            component: 'th',
            children: <div id={"" + id + rowIndex}>{result}</div>
        };
    };
    return headerCol;
};
