function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { DropdownToggleCheckbox } from './DropdownToggleCheckbox';
const props = {
  onChange: jest.fn(),
  isChecked: false
};
test('controlled', () => {
  const view = shallow(React.createElement(DropdownToggleCheckbox, {
    isChecked: true,
    id: "check",
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('uncontrolled', () => {
  const view = shallow(React.createElement(DropdownToggleCheckbox, {
    id: "check",
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('with text', () => {
  const view = shallow(React.createElement(DropdownToggleCheckbox, {
    id: "check",
    isDisabled: true,
    "aria-label": "check"
  }, "Some text"));
  expect(view).toMatchSnapshot();
});
test('isDisabled', () => {
  const view = shallow(React.createElement(DropdownToggleCheckbox, {
    id: "check",
    isDisabled: true,
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('3rd state', () => {
  const view = shallow(React.createElement(DropdownToggleCheckbox, {
    id: "check",
    isChecked: null,
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('passing class', () => {
  const view = shallow(React.createElement(DropdownToggleCheckbox, {
    label: "label",
    className: "class-123",
    id: "check",
    isChecked: true,
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('passing HTML attribute', () => {
  const view = shallow(React.createElement(DropdownToggleCheckbox, {
    label: "label",
    "aria-labelledby": "labelId",
    id: "check",
    isChecked: true,
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('checkbox passes value and event to onChange handler', () => {
  const newValue = true;
  const event = {
    target: {
      checked: newValue
    }
  };
  const view = mount(React.createElement(DropdownToggleCheckbox, _extends({
    id: "check"
  }, props, {
    "aria-label": "check"
  })));
  view.find('input').simulate('change', event);
  expect(props.onChange.mock.calls[0][0]).toBe(newValue);
  expect(props.onChange.mock.calls[0][1]).toMatchObject(event);
});
//# sourceMappingURL=DropdownToggleCheckbox.test.js.map