"use strict";
exports.__esModule = true;
var NotificationBadge_1 = require("./NotificationBadge");
var react_1 = require("react");
var enzyme_1 = require("enzyme");
Object.values([true, false]).forEach(function (isRead) {
    test(isRead + " NotificationBadge", function () {
        var view = enzyme_1.shallow(<NotificationBadge_1.NotificationBadge isRead={isRead}>{isRead ? 'read' : 'unread'} Badge</NotificationBadge_1.NotificationBadge>);
        expect(view).toMatchSnapshot();
    });
});
