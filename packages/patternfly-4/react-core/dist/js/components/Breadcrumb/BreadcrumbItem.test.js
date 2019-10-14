"use strict";

var React = _interopRequireWildcard(require("react"));

var _BreadcrumbItem = require("./BreadcrumbItem");

var _enzyme = require("enzyme");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('BreadcrumbItem component', function () {
  test('should render default breadcrumbItem', function () {
    var view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbItem.BreadcrumbItem, null, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbItem with className', function () {
    var view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbItem.BreadcrumbItem, {
      className: "Class"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbItem with id', function () {
    var view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbItem.BreadcrumbItem, {
      id: "Item 1"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render active breadcrumbItem', function () {
    var view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbItem.BreadcrumbItem, {
      isActive: true
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render link breadcrumbItem', function () {
    var view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbItem.BreadcrumbItem, {
      to: "/somewhere"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbItem with target', function () {
    var view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbItem.BreadcrumbItem, {
      target: "/somewhere"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbItem with custom element', function () {
    var view = (0, _enzyme.shallow)(React.createElement(_BreadcrumbItem.BreadcrumbItem, null, React.createElement("h1", null, "Header")));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=BreadcrumbItem.test.js.map