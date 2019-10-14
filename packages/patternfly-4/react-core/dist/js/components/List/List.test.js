"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _List = require("./List");

var _ListItem = require("./ListItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ListItems = function ListItems() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_List.List, null, _react["default"].createElement(_ListItem.ListItem, null, "First"), _react["default"].createElement(_ListItem.ListItem, null, "Second"), _react["default"].createElement(_ListItem.ListItem, null, "Third")));
};

describe('list', function () {
  test('simple list', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_List.List, null, _react["default"].createElement(ListItems, null)));
    expect(view).toMatchSnapshot();
  });
  test('inline list', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_List.List, {
      variant: "inline"
    }, _react["default"].createElement(ListItems, null)));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=List.test.js.map