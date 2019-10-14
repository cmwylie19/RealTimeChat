"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ClipboardCopyExpanded = require("./ClipboardCopyExpanded");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var props = {
  className: 'class-1',
  id: 'id-1'
};
test('expanded content render', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ClipboardCopyExpanded.ClipboardCopyExpanded, props, "This is my text"));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ClipboardCopyExpanded.test.js.map