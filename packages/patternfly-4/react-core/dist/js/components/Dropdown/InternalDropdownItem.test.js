"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _InternalDropdownItem = require("./InternalDropdownItem");

var _Separator = require("./Separator");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('dropdown items', function () {
  test('a', function () {
    var view = (0, _enzyme.shallow)(React.createElement(_InternalDropdownItem.InternalDropdownItem, null, "Something"));
    expect(view).toMatchSnapshot();
  });
  test('button', function () {
    var view = (0, _enzyme.shallow)(React.createElement(_InternalDropdownItem.InternalDropdownItem, {
      component: "button"
    }, "Something"));
    expect(view).toMatchSnapshot();
  });
  test('separator', function () {
    var view = (0, _enzyme.shallow)(React.createElement(_Separator.DropdownSeparator, null));
    expect(view).toMatchSnapshot();
  });
  describe('hover', function () {
    test('a', function () {
      var view = (0, _enzyme.shallow)(React.createElement(_InternalDropdownItem.InternalDropdownItem, {
        isHovered: true
      }, "Something"));
      expect(view).toMatchSnapshot();
    });
    test('button', function () {
      var view = (0, _enzyme.shallow)(React.createElement(_InternalDropdownItem.InternalDropdownItem, {
        isHovered: true,
        component: "button"
      }, "Something"));
      expect(view).toMatchSnapshot();
    });
  });
  describe('disabled', function () {
    test('a', function () {
      var view = (0, _enzyme.shallow)(React.createElement(_InternalDropdownItem.InternalDropdownItem, {
        isDisabled: true
      }, "Something"));
      expect(view).toMatchSnapshot();
    });
    test('button', function () {
      var view = (0, _enzyme.shallow)(React.createElement(_InternalDropdownItem.InternalDropdownItem, {
        isDisabled: true,
        component: "button"
      }, "Something"));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=InternalDropdownItem.test.js.map