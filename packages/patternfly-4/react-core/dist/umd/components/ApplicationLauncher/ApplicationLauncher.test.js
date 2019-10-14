(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "@patternfly/react-icons", "./ApplicationLauncher", "../Dropdown/DropdownItem", "../Dropdown/dropdownConstants", "../Dropdown/Separator"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("@patternfly/react-icons"), require("./ApplicationLauncher"), require("../Dropdown/DropdownItem"), require("../Dropdown/dropdownConstants"), require("../Dropdown/Separator"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.reactIcons, global.ApplicationLauncher, global.DropdownItem, global.dropdownConstants, global.Separator);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _reactIcons, _ApplicationLauncher, _DropdownItem, _dropdownConstants, _Separator) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const dropdownItems = [_react2.default.createElement(_DropdownItem.DropdownItem, {
    key: "link"
  }, "Link"), _react2.default.createElement(_DropdownItem.DropdownItem, {
    key: "action",
    component: "button"
  }, "Action"), _react2.default.createElement(_DropdownItem.DropdownItem, {
    key: "disabled link",
    isDisabled: true
  }, "Disabled Link"), _react2.default.createElement(_DropdownItem.DropdownItem, {
    key: "disabled action",
    isDisabled: true,
    component: "button"
  }, "Disabled Action"), _react2.default.createElement(_Separator.DropdownSeparator, {
    key: "separator"
  }), _react2.default.createElement(_DropdownItem.DropdownItem, {
    key: "separated link"
  }, "Separated Link"), _react2.default.createElement(_DropdownItem.DropdownItem, {
    key: "separated action",
    component: "button"
  }, "Separated Action")];
  describe('ApplicationLauncher', () => {
    test('regular', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_ApplicationLauncher.ApplicationLauncher, {
        dropdownItems: dropdownItems
      }));
      expect(view).toMatchSnapshot();
    });
    test('right aligned', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_ApplicationLauncher.ApplicationLauncher, {
        dropdownItems: dropdownItems,
        position: _dropdownConstants.DropdownPosition.right
      }));
      expect(view).toMatchSnapshot();
    });
    test('dropup', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_ApplicationLauncher.ApplicationLauncher, {
        dropdownItems: dropdownItems,
        direction: _dropdownConstants.DropdownDirection.up
      }));
      expect(view).toMatchSnapshot();
    });
    test('dropup + right aligned', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_ApplicationLauncher.ApplicationLauncher, {
        dropdownItems: dropdownItems,
        direction: _dropdownConstants.DropdownDirection.up,
        position: _dropdownConstants.DropdownPosition.right
      }));
      expect(view).toMatchSnapshot();
    });
    test('expanded', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_ApplicationLauncher.ApplicationLauncher, {
        dropdownItems: dropdownItems,
        isOpen: true
      }));
      expect(view).toMatchSnapshot();
    });
    test('custom icon', () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_ApplicationLauncher.ApplicationLauncher, {
        dropdownItems: dropdownItems,
        isOpen: true,
        toggleIcon: _react2.default.createElement(_reactIcons.HelpIcon, {
          id: "test-icon"
        })
      }));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=ApplicationLauncher.test.js.map