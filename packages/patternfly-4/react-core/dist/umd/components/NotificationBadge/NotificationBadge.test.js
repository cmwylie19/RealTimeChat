(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./NotificationBadge", "react", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./NotificationBadge"), require("react"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.NotificationBadge, global.react, global.enzyme);
    global.undefined = mod.exports;
  }
})(this, function (_NotificationBadge, _react, _enzyme) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Object.values([true, false]).forEach(isRead => {
    test(`${isRead} NotificationBadge`, () => {
      const view = (0, _enzyme.shallow)(_react2.default.createElement(_NotificationBadge.NotificationBadge, {
        isRead: isRead
      }, isRead ? 'read' : 'unread', " Badge"));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=NotificationBadge.test.js.map