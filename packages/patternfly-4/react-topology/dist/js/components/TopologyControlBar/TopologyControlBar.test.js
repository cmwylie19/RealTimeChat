"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _TopologyControlBar = require("./TopologyControlBar");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('TopologyControlBar', function () {
  test('should display the default controls correctly', function () {
    var controlButtons = (0, _TopologyControlBar.createTopologyControlButtons)();
    var mockfn = jest.fn();
    var view = (0, _enzyme.mount)(React.createElement(_TopologyControlBar.TopologyControlBar, {
      className: "default-test-class",
      id: "default-test-id",
      controlButtons: controlButtons,
      onButtonClick: mockfn
    }));
    expect(view).toMatchSnapshot();
    view.find("#".concat(_TopologyControlBar.ZOOM_IN)).at(0).simulate('click');
    expect(mockfn.mock.calls).toHaveLength(1);
  });
  test('should accept button options correctly', function () {
    var mockfn = jest.fn();
    var controlButtons = (0, _TopologyControlBar.createTopologyControlButtons)(_objectSpread({}, _TopologyControlBar.defaultControlButtonsOptions, {
      zoomInCallback: mockfn,
      zoomInAriaLabel: 'test-zoom-in-aria-label',
      zoomInIcon: React.createElement("span", null, "test zoom in"),
      zoomInTip: 'test zoom in tooltip',
      fitToScreenHidden: true,
      resetViewDisabled: true,
      legend: false
    }));
    var view = (0, _enzyme.mount)(React.createElement(_TopologyControlBar.TopologyControlBar, {
      className: "default-test-class",
      id: "default-test-id",
      controlButtons: controlButtons
    }));
    expect(view).toMatchSnapshot();
    view.find("#".concat(_TopologyControlBar.ZOOM_IN)).at(0).simulate('click');
    expect(mockfn.mock.calls).toHaveLength(1);
  });
});
//# sourceMappingURL=TopologyControlBar.test.js.map