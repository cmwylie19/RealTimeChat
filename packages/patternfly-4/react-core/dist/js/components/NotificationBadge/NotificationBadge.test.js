"use strict";

var _NotificationBadge = require("./NotificationBadge");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Object.values([true, false]).forEach(function (isRead) {
  test("".concat(isRead, " NotificationBadge"), function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_NotificationBadge.NotificationBadge, {
      isRead: isRead
    }, isRead ? 'read' : 'unread', " Badge"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=NotificationBadge.test.js.map