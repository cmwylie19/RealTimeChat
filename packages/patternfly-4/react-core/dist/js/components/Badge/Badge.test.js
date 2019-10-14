"use strict";

var _Badge = require("./Badge");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Object.values([true, false]).forEach(function (isRead) {
  test("".concat(isRead, " Badge"), function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Badge.Badge, {
      isRead: isRead
    }, isRead ? 'read' : 'unread', " Badge"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Badge.test.js.map