"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _DropdownToggle = require("./DropdownToggle");

var _dropdownConstants = require("./dropdownConstants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('API', function () {
  test('click on closed', function () {
    var mockToggle = jest.fn();
    var view = (0, _enzyme.mount)(React.createElement(_DropdownToggle.DropdownToggle, {
      onToggle: mockToggle,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    view.find('button').first().simulate('click');
    expect(mockToggle.mock.calls[0][0]).toBe(true);
  });
  test('click on opened', function () {
    var mockToggle = jest.fn();
    var view = (0, _enzyme.mount)(React.createElement(_DropdownToggle.DropdownToggle, {
      id: "Dropdown Toggle",
      onToggle: mockToggle,
      isOpen: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    view.find('button').first().simulate('click');
    expect(mockToggle.mock.calls[0][0]).toBe(false);
  });
  test('on click outside has been removed', function () {
    var mousedown = function mousedown() {};

    document.addEventListener = jest.fn(function (event, cb) {
      mousedown = cb;
    });
    document.removeEventListener = jest.fn(function (event, cb) {
      if (mousedown === cb) {
        mousedown = function mousedown() {};
      }
    });
    var mockToggle = jest.fn();
    var view = (0, _enzyme.mount)(React.createElement(_DropdownToggle.DropdownToggle, {
      id: "Dropdown Toggle",
      onToggle: mockToggle,
      isOpen: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    view.unmount();
    mousedown({
      target: document
    });
    expect(mockToggle.mock.calls).toHaveLength(0);
    expect(document.removeEventListener).toHaveBeenCalledWith('mousedown', expect.any(Function));
  });
  test('on touch outside has been removed', function () {
    var touchstart = function touchstart() {};

    document.addEventListener = jest.fn(function (event, cb) {
      touchstart = cb;
    });
    document.removeEventListener = jest.fn(function (event, cb) {
      if (touchstart === cb) {
        touchstart = function touchstart() {};
      }
    });
    var mockToggle = jest.fn();
    var view = (0, _enzyme.mount)(React.createElement(_DropdownToggle.DropdownToggle, {
      id: "Dropdown Toggle",
      onToggle: mockToggle,
      isOpen: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    view.unmount();
    touchstart({
      target: document
    });
    expect(mockToggle.mock.calls).toHaveLength(0);
    expect(document.removeEventListener).toHaveBeenCalledWith('touchstart', expect.any(Function));
  });
});
describe('state', function () {
  test('hover', function () {
    var view = (0, _enzyme.mount)(React.createElement(_DropdownToggle.DropdownToggle, {
      id: "Dropdown Toggle",
      isHovered: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    expect(view).toMatchSnapshot();
  });
  test('active', function () {
    var view = (0, _enzyme.mount)(React.createElement(_DropdownToggle.DropdownToggle, {
      id: "Dropdown Toggle",
      isActive: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    expect(view).toMatchSnapshot();
  });
  test('focus', function () {
    var view = (0, _enzyme.mount)(React.createElement(_DropdownToggle.DropdownToggle, {
      id: "Dropdown Toggle",
      isFocused: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    expect(view).toMatchSnapshot();
  });
  test('class changes', function () {
    var view = (0, _enzyme.mount)(React.createElement(_dropdownConstants.DropdownContext.Provider, {
      value: {
        toggleTextClass: 'some-test-class',
        toggleIconClass: 'another-test-class'
      }
    }, React.createElement(_DropdownToggle.DropdownToggle, {
      id: "Dropdown Toggle",
      isFocused: true,
      parentRef: document.createElement('div')
    }, "Dropdown")));
    expect(view).toMatchSnapshot();
  });
  test('class changes', function () {
    var view = (0, _enzyme.mount)(React.createElement(_dropdownConstants.DropdownContext.Provider, {
      value: {
        toggleTextClass: 'some-test-class',
        toggleIconClass: 'another-test-class'
      }
    }, React.createElement(_DropdownToggle.DropdownToggle, {
      id: "Dropdown Toggle",
      isFocused: true,
      parentRef: document.createElement('div')
    }, "Dropdown")));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=DropdownToggle.test.js.map