"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _GenerateId = _interopRequireDefault(require("./GenerateId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('generates id', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_GenerateId["default"], null, function (id) {
    return _react["default"].createElement("div", {
      id: id
    }, "div with random ID");
  }));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=GenerateId.test.js.map