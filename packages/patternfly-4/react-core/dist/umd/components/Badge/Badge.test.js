(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./Badge", "react", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./Badge"), require("react"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.Badge, global.react, global.enzyme);
    global.undefined = mod.exports;
  }
})(this, function (_Badge, _react, _enzyme) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Object.values([true, false]).forEach(isRead => {
    test(`${isRead} Badge`, () => {
      const view = (0, _enzyme.shallow)(_react2.default.createElement(_Badge.Badge, {
        isRead: isRead
      }, isRead ? 'read' : 'unread', " Badge"));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=Badge.test.js.map