(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./OptionsMenu", "./OptionsMenuToggle", "./OptionsMenuItemGroup", "./OptionsMenuItem", "./OptionsMenuSeparator", "./OptionsMenuToggleWithText"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./OptionsMenu"), require("./OptionsMenuToggle"), require("./OptionsMenuItemGroup"), require("./OptionsMenuItem"), require("./OptionsMenuSeparator"), require("./OptionsMenuToggleWithText"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.OptionsMenu, global.OptionsMenuToggle, global.OptionsMenuItemGroup, global.OptionsMenuItem, global.OptionsMenuSeparator, global.OptionsMenuToggleWithText);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _OptionsMenu, _OptionsMenuToggle, _OptionsMenuItemGroup, _OptionsMenuItem, _OptionsMenuSeparator, _OptionsMenuToggleWithText) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const menuItems = [_react2.default.createElement(_OptionsMenuItemGroup.OptionsMenuItemGroup, {
    key: "first group"
  }, _react2.default.createElement(_OptionsMenuItem.OptionsMenuItem, {
    key: "name"
  }, "Name"), _react2.default.createElement(_OptionsMenuItem.OptionsMenuItem, {
    key: "date"
  }, "Date"), _react2.default.createElement(_OptionsMenuItem.OptionsMenuItem, {
    isDisabled: true,
    key: "disabled"
  }, "Disabled"), _react2.default.createElement(_OptionsMenuItem.OptionsMenuItem, {
    key: "size"
  }, "Size")), _react2.default.createElement(_OptionsMenuSeparator.OptionsMenuSeparator, {
    key: "separator"
  }), _react2.default.createElement(_OptionsMenuItemGroup.OptionsMenuItemGroup, {
    key: "second group"
  }, _react2.default.createElement(_OptionsMenuItem.OptionsMenuItem, {
    key: "ascending"
  }, "Ascending"), _react2.default.createElement(_OptionsMenuItem.OptionsMenuItem, {
    key: "descending"
  }, "Descending"))];
  describe('optionsMenu', () => {
    test('regular', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_OptionsMenu.OptionsMenu, {
        id: "regular",
        menuItems: menuItems,
        toggle: _react2.default.createElement(_OptionsMenuToggle.OptionsMenuToggle, null, "Options Menu")
      }));
      expect(view).toMatchSnapshot();
    });
    test('right aligned', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_OptionsMenu.OptionsMenu, {
        id: "rightAligned",
        menuItems: menuItems,
        position: _OptionsMenu.OptionsMenuPosition.right,
        toggle: _react2.default.createElement(_OptionsMenuToggle.OptionsMenuToggle, null, "Options Menu")
      }));
      expect(view).toMatchSnapshot();
    });
    test('open up', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_OptionsMenu.OptionsMenu, {
        id: "openUp",
        menuItems: menuItems,
        direction: _OptionsMenu.OptionsMenuDirection.up,
        toggle: _react2.default.createElement(_OptionsMenuToggle.OptionsMenuToggle, null, "Options Menu")
      }));
      expect(view).toMatchSnapshot();
    });
    test('right aligned + open up', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_OptionsMenu.OptionsMenu, {
        id: "rightAlignedOpenUp",
        menuItems: menuItems,
        position: _OptionsMenu.OptionsMenuPosition.right,
        direction: _OptionsMenu.OptionsMenuDirection.up,
        toggle: _react2.default.createElement(_OptionsMenuToggle.OptionsMenuToggle, null, "Options Menu")
      }));
      expect(view).toMatchSnapshot();
    });
    test('expanded', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_OptionsMenu.OptionsMenu, {
        id: "expanded",
        menuItems: menuItems,
        isOpen: true,
        toggle: _react2.default.createElement(_OptionsMenuToggle.OptionsMenuToggle, null, "Options Menu")
      }));
      expect(view).toMatchSnapshot();
    });
    test('plain', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_OptionsMenu.OptionsMenu, {
        id: "plain",
        menuItems: menuItems,
        isPlain: true,
        toggle: _react2.default.createElement(_OptionsMenuToggle.OptionsMenuToggle, null, "Options Menu")
      }));
      expect(view).toMatchSnapshot();
    });
    test('text', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_OptionsMenu.OptionsMenu, {
        id: "text",
        menuItems: menuItems,
        toggle: _react2.default.createElement(_OptionsMenuToggleWithText.OptionsMenuToggleWithText, {
          toggleButtonContents: _react2.default.createElement(_react2.default.Fragment, null, "Test"),
          toggleText: "Test"
        })
      }));
      expect(view).toMatchSnapshot();
    });
    test('isDisabled', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_OptionsMenu.OptionsMenu, {
        id: "disabled",
        menuItems: menuItems,
        toggle: _react2.default.createElement(_OptionsMenuToggle.OptionsMenuToggle, {
          isDisabled: true
        }, "Options Menu")
      }));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=OptionsMenu.test.js.map