"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _OptionsMenu = require("./OptionsMenu");

var _OptionsMenuToggle = require("./OptionsMenuToggle");

var _OptionsMenuItemGroup = require("./OptionsMenuItemGroup");

var _OptionsMenuItem = require("./OptionsMenuItem");

var _OptionsMenuSeparator = require("./OptionsMenuSeparator");

var _OptionsMenuToggleWithText = require("./OptionsMenuToggleWithText");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var menuItems = [_react["default"].createElement(_OptionsMenuItemGroup.OptionsMenuItemGroup, {
  key: "first group"
}, _react["default"].createElement(_OptionsMenuItem.OptionsMenuItem, {
  key: "name"
}, "Name"), _react["default"].createElement(_OptionsMenuItem.OptionsMenuItem, {
  key: "date"
}, "Date"), _react["default"].createElement(_OptionsMenuItem.OptionsMenuItem, {
  isDisabled: true,
  key: "disabled"
}, "Disabled"), _react["default"].createElement(_OptionsMenuItem.OptionsMenuItem, {
  key: "size"
}, "Size")), _react["default"].createElement(_OptionsMenuSeparator.OptionsMenuSeparator, {
  key: "separator"
}), _react["default"].createElement(_OptionsMenuItemGroup.OptionsMenuItemGroup, {
  key: "second group"
}, _react["default"].createElement(_OptionsMenuItem.OptionsMenuItem, {
  key: "ascending"
}, "Ascending"), _react["default"].createElement(_OptionsMenuItem.OptionsMenuItem, {
  key: "descending"
}, "Descending"))];
describe('optionsMenu', function () {
  test('regular', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_OptionsMenu.OptionsMenu, {
      id: "regular",
      menuItems: menuItems,
      toggle: _react["default"].createElement(_OptionsMenuToggle.OptionsMenuToggle, null, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
  test('right aligned', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_OptionsMenu.OptionsMenu, {
      id: "rightAligned",
      menuItems: menuItems,
      position: _OptionsMenu.OptionsMenuPosition.right,
      toggle: _react["default"].createElement(_OptionsMenuToggle.OptionsMenuToggle, null, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
  test('open up', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_OptionsMenu.OptionsMenu, {
      id: "openUp",
      menuItems: menuItems,
      direction: _OptionsMenu.OptionsMenuDirection.up,
      toggle: _react["default"].createElement(_OptionsMenuToggle.OptionsMenuToggle, null, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
  test('right aligned + open up', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_OptionsMenu.OptionsMenu, {
      id: "rightAlignedOpenUp",
      menuItems: menuItems,
      position: _OptionsMenu.OptionsMenuPosition.right,
      direction: _OptionsMenu.OptionsMenuDirection.up,
      toggle: _react["default"].createElement(_OptionsMenuToggle.OptionsMenuToggle, null, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
  test('expanded', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_OptionsMenu.OptionsMenu, {
      id: "expanded",
      menuItems: menuItems,
      isOpen: true,
      toggle: _react["default"].createElement(_OptionsMenuToggle.OptionsMenuToggle, null, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
  test('plain', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_OptionsMenu.OptionsMenu, {
      id: "plain",
      menuItems: menuItems,
      isPlain: true,
      toggle: _react["default"].createElement(_OptionsMenuToggle.OptionsMenuToggle, null, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
  test('text', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_OptionsMenu.OptionsMenu, {
      id: "text",
      menuItems: menuItems,
      toggle: _react["default"].createElement(_OptionsMenuToggleWithText.OptionsMenuToggleWithText, {
        toggleButtonContents: _react["default"].createElement(_react["default"].Fragment, null, "Test"),
        toggleText: "Test"
      })
    }));
    expect(view).toMatchSnapshot();
  });
  test('isDisabled', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_OptionsMenu.OptionsMenu, {
      id: "disabled",
      menuItems: menuItems,
      toggle: _react["default"].createElement(_OptionsMenuToggle.OptionsMenuToggle, {
        isDisabled: true
      }, "Options Menu")
    }));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=OptionsMenu.test.js.map