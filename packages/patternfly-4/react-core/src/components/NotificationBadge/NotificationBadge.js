"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = require("react");
var Button_1 = require("../Button");
var react_styles_1 = require("@patternfly/react-styles");
var notification_badge_1 = require("@patternfly/react-styles/css/components/NotificationBadge/notification-badge");
exports.NotificationBadge = function (_a) {
    var _b = _a.isRead, isRead = _b === void 0 ? false : _b, className = _a.className, children = _a.children, props = __rest(_a, ["isRead", "className", "children"]);
    return (<Button_1.Button variant={Button_1.ButtonVariant.plain} className={className} {...props}>
    <span className={react_styles_1.css(notification_badge_1["default"].notificationBadge, isRead ? notification_badge_1["default"].modifiers.read : notification_badge_1["default"].modifiers.unread)}>
      {children}
    </span>
  </Button_1.Button>);
};
