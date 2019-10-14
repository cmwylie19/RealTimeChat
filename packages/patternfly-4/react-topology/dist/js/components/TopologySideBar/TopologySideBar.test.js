"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('TopologySideBar', function () {
  test('should display topology sidebar correctly', function () {
    var view = (0, _enzyme.mount)(React.createElement(_index.TopologySideBar, {
      className: "my-test-class",
      show: true,
      header: React.createElement("span", {
        id: "test-header-id"
      }, "Header")
    }, React.createElement("div", {
      id: "test-canvas"
    })));
    expect(view).toMatchSnapshot();
    expect(view.find('.pf-topology-side-bar__header #test-header-id').length).toBe(1);
  });
  test('should display topology sidebar w/ close correctly', function () {
    var mockClose = jest.fn();
    var view = (0, _enzyme.mount)(React.createElement(_index.TopologySideBar, {
      className: "my-test-class",
      show: true,
      onClose: mockClose
    }, ">", React.createElement("div", {
      id: "test-canvas"
    })));
    expect(view).toMatchSnapshot();
    view.find('button.pf-topology-side-bar__dismiss').simulate('click');
    expect(mockClose).toBeCalled();
  });
  test('should hide the sidebar correctly', function () {
    var view = (0, _enzyme.mount)(React.createElement(_index.TopologySideBar, {
      className: "my-test-class",
      show: false,
      header: React.createElement("span", {
        id: "test-header-id"
      }, "Header")
    }, ">", React.createElement("div", {
      id: "test-canvas"
    })));
    expect(view).toMatchSnapshot();
    expect(view.find('#test-canvas').length).toBe(0);
  });
});
//# sourceMappingURL=TopologySideBar.test.js.map