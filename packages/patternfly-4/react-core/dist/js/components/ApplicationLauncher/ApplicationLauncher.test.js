"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactIcons = require("@patternfly/react-icons");

var _ApplicationLauncher = require("./ApplicationLauncher");

var _DropdownItem = require("../Dropdown/DropdownItem");

var _dropdownConstants = require("../Dropdown/dropdownConstants");

var _Separator = require("../Dropdown/Separator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dropdownItems = [_react["default"].createElement(_DropdownItem.DropdownItem, {
  key: "link"
}, "Link"), _react["default"].createElement(_DropdownItem.DropdownItem, {
  key: "action",
  component: "button"
}, "Action"), _react["default"].createElement(_DropdownItem.DropdownItem, {
  key: "disabled link",
  isDisabled: true
}, "Disabled Link"), _react["default"].createElement(_DropdownItem.DropdownItem, {
  key: "disabled action",
  isDisabled: true,
  component: "button"
}, "Disabled Action"), _react["default"].createElement(_Separator.DropdownSeparator, {
  key: "separator"
}), _react["default"].createElement(_DropdownItem.DropdownItem, {
  key: "separated link"
}, "Separated Link"), _react["default"].createElement(_DropdownItem.DropdownItem, {
  key: "separated action",
  component: "button"
}, "Separated Action")];
describe('ApplicationLauncher', function () {
  test('regular', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_ApplicationLauncher.ApplicationLauncher, {
      dropdownItems: dropdownItems
    }));
    expect(view).toMatchSnapshot();
  });
  test('right aligned', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_ApplicationLauncher.ApplicationLauncher, {
      dropdownItems: dropdownItems,
      position: _dropdownConstants.DropdownPosition.right
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_ApplicationLauncher.ApplicationLauncher, {
      dropdownItems: dropdownItems,
      direction: _dropdownConstants.DropdownDirection.up
    }));
    expect(view).toMatchSnapshot();
  });
  test('dropup + right aligned', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_ApplicationLauncher.ApplicationLauncher, {
      dropdownItems: dropdownItems,
      direction: _dropdownConstants.DropdownDirection.up,
      position: _dropdownConstants.DropdownPosition.right
    }));
    expect(view).toMatchSnapshot();
  });
  test('expanded', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_ApplicationLauncher.ApplicationLauncher, {
      dropdownItems: dropdownItems,
      isOpen: true
    }));
    expect(view).toMatchSnapshot();
  });
  test('custom icon', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_ApplicationLauncher.ApplicationLauncher, {
      dropdownItems: dropdownItems,
      isOpen: true,
      toggleIcon: _react["default"].createElement(_reactIcons.HelpIcon, {
        id: "test-icon"
      })
    }));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=ApplicationLauncher.test.js.map