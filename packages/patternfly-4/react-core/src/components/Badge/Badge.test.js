"use strict";
exports.__esModule = true;
var Badge_1 = require("./Badge");
var react_1 = require("react");
var enzyme_1 = require("enzyme");
Object.values([true, false]).forEach(function (isRead) {
    test(isRead + " Badge", function () {
        var view = enzyme_1.shallow(<Badge_1.Badge isRead={isRead}>{isRead ? 'read' : 'unread'} Badge</Badge_1.Badge>);
        expect(view).toMatchSnapshot();
    });
});
