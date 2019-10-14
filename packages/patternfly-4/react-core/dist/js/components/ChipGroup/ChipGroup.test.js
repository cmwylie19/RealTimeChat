"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('ChipGroup', function () {
  test('chip group default', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_index.ChipGroup, null, _react["default"].createElement(_index.Chip, null, "1.1")));
    expect(view).toMatchSnapshot();
  });
  test('chip group with toolbar', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_index.ChipGroup, {
      withToolbar: true
    }, _react["default"].createElement(_index.ChipGroupToolbarItem, null, _react["default"].createElement(_index.Chip, null, "1.1"))));
    expect(view).toMatchSnapshot();
  });
  test('chip group expanded', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_index.ChipGroup, null, _react["default"].createElement(_index.Chip, null, "1"), _react["default"].createElement(_index.Chip, null, "2"), _react["default"].createElement(_index.Chip, null, "3"), _react["default"].createElement(_index.Chip, null, "4")));
    var overflowButton = view.find('.pf-m-overflow .pf-c-chip__text');
    expect(overflowButton.text()).toBe('1 more');
    overflowButton.simulate('click');
    expect(overflowButton.text()).toBe('Show Less');
  });
  test('chip group will not render if no children passed', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_index.ChipGroup, null));
    expect(view.html()).toBeNull();
  });
});
//# sourceMappingURL=ChipGroup.test.js.map