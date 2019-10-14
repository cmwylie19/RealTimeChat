"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SelectToggle = require("./SelectToggle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('API', function () {
  test('click on closed', function () {
    var mockToggle = jest.fn();
    var view = (0, _enzyme.mount)(_react["default"].createElement(_SelectToggle.SelectToggle, {
      id: "Select Toggle",
      onToggle: mockToggle,
      parentRef: {
        current: document.createElement('div')
      }
    }, "Select"));
    view.find('button').first().simulate('click');
    expect(mockToggle.mock.calls[0][0]).toBe(true);
  });
  test('click on opened', function () {
    var mockToggle = jest.fn();
    var view = (0, _enzyme.mount)(_react["default"].createElement(_SelectToggle.SelectToggle, {
      id: "Select Toggle",
      onToggle: mockToggle,
      isExpanded: true,
      parentRef: {
        current: document.createElement('div')
      }
    }, "Select"));
    view.find('button').first().simulate('click');
    expect(mockToggle.mock.calls[0][0]).toBe(false);
  });
  test('click on document', function () {
    var map = {};
    document.addEventListener = jest.fn(function (event, cb) {
      map[event] = cb;
    });
    var mockToggle = jest.fn();
    (0, _enzyme.mount)(_react["default"].createElement(_SelectToggle.SelectToggle, {
      id: "Select Toggle",
      onToggle: mockToggle,
      isExpanded: true,
      parentRef: {
        current: document.createElement('div')
      }
    }, "Select"));
    map.mousedown({
      target: document
    });
    expect(mockToggle.mock.calls[0][0]).toBe(false);
  });
  test('touch on document', function () {
    var map = {};
    document.addEventListener = jest.fn(function (event, cb) {
      map[event] = cb;
    });
    var mockToggle = jest.fn();
    (0, _enzyme.mount)(_react["default"].createElement(_SelectToggle.SelectToggle, {
      id: "Select Toggle",
      onToggle: mockToggle,
      isExpanded: true,
      parentRef: {
        current: document.createElement('div')
      }
    }, "Select"));
    map.touchstart({
      target: document
    });
    expect(mockToggle.mock.calls[0][0]).toBe(false);
  });
  test('on click outside has been removed', function () {
    var map = {};
    document.addEventListener = jest.fn(function (event, cb) {
      map[event] = cb;
    });
    document.removeEventListener = jest.fn(function (event, cb) {
      if (map[event] === cb) {
        map[event] = function () {};
      }
    });
    var mockToggle = jest.fn();
    var view = (0, _enzyme.mount)(_react["default"].createElement(_SelectToggle.SelectToggle, {
      id: "Select Toggle",
      onToggle: mockToggle,
      isExpanded: true,
      parentRef: {
        current: document.createElement('div')
      }
    }, "Select"));
    view.unmount();
    map.mousedown({
      target: document
    });
    expect(mockToggle.mock.calls).toHaveLength(0);
    expect(document.removeEventListener).toHaveBeenCalledWith('mousedown', expect.any(Function));
  });
  test('on touch outside has been removed', function () {
    var map = {};
    document.addEventListener = jest.fn(function (event, cb) {
      map[event] = cb;
    });
    document.removeEventListener = jest.fn(function (event, cb) {
      if (map[event] === cb) {
        map[event] = function () {};
      }
    });
    var mockToggle = jest.fn();
    var view = (0, _enzyme.mount)(_react["default"].createElement(_SelectToggle.SelectToggle, {
      id: "Select Toggle",
      onToggle: mockToggle,
      isExpanded: true,
      parentRef: {
        current: document.createElement('div')
      }
    }, "Select"));
    view.unmount();
    map.touchstart({
      target: document
    });
    expect(mockToggle.mock.calls).toHaveLength(0);
    expect(document.removeEventListener).toHaveBeenCalledWith('touchstart', expect.any(Function));
  });
});
describe('state', function () {
  test('hover', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_SelectToggle.SelectToggle, {
      id: "Select Toggle",
      isHovered: true,
      parentRef: {
        current: document.createElement('div')
      }
    }, "Select"));
    expect(view).toMatchSnapshot();
  });
  test('active', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_SelectToggle.SelectToggle, {
      id: "Select Toggle",
      isActive: true,
      parentRef: {
        current: document.createElement('div')
      }
    }, "Select"));
    expect(view).toMatchSnapshot();
  });
  test('focus', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_SelectToggle.SelectToggle, {
      id: "Select Toggle",
      isFocused: true,
      parentRef: {
        current: document.createElement('div')
      }
    }, "Select"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=SelectToggle.test.js.map