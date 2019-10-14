function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { mount } from 'enzyme';
import { TopologyControlBar, createTopologyControlButtons, defaultControlButtonsOptions, ZOOM_IN } from './TopologyControlBar';
describe('TopologyControlBar', () => {
  test('should display the default controls correctly', () => {
    const controlButtons = createTopologyControlButtons();
    const mockfn = jest.fn();
    const view = mount(React.createElement(TopologyControlBar, {
      className: "default-test-class",
      id: "default-test-id",
      controlButtons: controlButtons,
      onButtonClick: mockfn
    }));
    expect(view).toMatchSnapshot();
    view.find(`#${ZOOM_IN}`).at(0).simulate('click');
    expect(mockfn.mock.calls).toHaveLength(1);
  });
  test('should accept button options correctly', () => {
    const mockfn = jest.fn();
    const controlButtons = createTopologyControlButtons(_objectSpread({}, defaultControlButtonsOptions, {
      zoomInCallback: mockfn,
      zoomInAriaLabel: 'test-zoom-in-aria-label',
      zoomInIcon: React.createElement("span", null, "test zoom in"),
      zoomInTip: 'test zoom in tooltip',
      fitToScreenHidden: true,
      resetViewDisabled: true,
      legend: false
    }));
    const view = mount(React.createElement(TopologyControlBar, {
      className: "default-test-class",
      id: "default-test-id",
      controlButtons: controlButtons
    }));
    expect(view).toMatchSnapshot();
    view.find(`#${ZOOM_IN}`).at(0).simulate('click');
    expect(mockfn.mock.calls).toHaveLength(1);
  });
});
//# sourceMappingURL=TopologyControlBar.test.js.map