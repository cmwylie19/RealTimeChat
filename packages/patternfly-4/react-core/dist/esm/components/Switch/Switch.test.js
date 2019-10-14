function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { mount } from 'enzyme';
import { Switch } from './Switch';
const props = {
  onChange: jest.fn(),
  isChecked: false
};
test('switch label for attribute equals input id attribute', () => {
  const view = mount(React.createElement(Switch, {
    id: "foo"
  }));
  expect(view.find('input').prop('id')).toBe('foo');
  expect(view.find('label').prop('htmlFor')).toBe('foo');
});
test('switch label id is auto generated', () => {
  const view = mount(React.createElement(Switch, {
    "aria-label": "..."
  }));
  expect(view.find('input').prop('id')).toBeDefined();
});
test('switch is checked', () => {
  const view = mount(React.createElement(Switch, {
    id: "switch-is-checked",
    label: "On",
    labelOff: "Off",
    isChecked: true
  }));
  expect(view).toMatchSnapshot();
});
test('switch is not checked', () => {
  const view = mount(React.createElement(Switch, {
    id: "switch-is-not-checked",
    label: "On",
    labelOff: "Off",
    isChecked: false
  }));
  expect(view).toMatchSnapshot();
});
test('switch with only label is checked', () => {
  const check = true;
  const view = mount(React.createElement(Switch, {
    id: "switch-is-checked",
    label: check ? "On" : "Off",
    isChecked: check
  }));
  expect(view).toMatchSnapshot();
});
test('switch with only label is not checked', () => {
  const check = false;
  const view = mount(React.createElement(Switch, {
    id: "switch-is-not-checked",
    label: check ? "On" : "Off",
    isChecked: check
  }));
  expect(view).toMatchSnapshot();
});
test('no label switch is checked', () => {
  const view = mount(React.createElement(Switch, {
    id: "no-label-switch-is-checked",
    isChecked: true
  }));
  expect(view).toMatchSnapshot();
});
test('no label switch is not checked', () => {
  const view = mount(React.createElement(Switch, {
    id: "no-label-switch-is-not-checked",
    isChecked: false
  }));
  expect(view).toMatchSnapshot();
});
test('switch is checked and disabled', () => {
  const view = mount(React.createElement(Switch, {
    id: "switch-is-checked-and-disabled",
    isChecked: true,
    isDisabled: true
  }));
  expect(view).toMatchSnapshot();
});
test('switch is not checked and disabled', () => {
  const view = mount(React.createElement(Switch, {
    id: "switch-is-not-checked-and-disabled",
    isChecked: false,
    isDisabled: true
  }));
  expect(view).toMatchSnapshot();
});
test('switch passes value and event to onChange handler', () => {
  const view = mount(React.createElement(Switch, _extends({
    id: "onChange-switch"
  }, props)));
  const input = view.find('input');
  expect(input.prop('defaultChecked')).toBe(false);
  input.simulate('change', {
    target: {
      checked: true
    }
  });
  expect(props.onChange.mock.calls[0][0]).toBe(true);
});
//# sourceMappingURL=Switch.test.js.map