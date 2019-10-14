function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { shallow } from 'enzyme';
import { Radio } from './Radio';
const props = {
  onChange: jest.fn()
};
describe('Radio check component', () => {
  test('controlled', () => {
    const view = shallow(React.createElement(Radio, {
      isChecked: true,
      id: "check",
      "aria-label": "check",
      name: "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('uncontrolled', () => {
    const view = shallow(React.createElement(Radio, {
      id: "check",
      "aria-label": "check",
      name: "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('isDisabled', () => {
    const view = shallow(React.createElement(Radio, {
      id: "check",
      isDisabled: true,
      "aria-label": "check",
      name: "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('label is string', () => {
    const view = shallow(React.createElement(Radio, {
      label: "Label",
      id: "check",
      isChecked: true,
      "aria-label": "check",
      name: "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('label is function', () => {
    const functionLabel = () => React.createElement("h1", null, "Header");

    const view = shallow(React.createElement(Radio, {
      label: functionLabel(),
      id: "check",
      isChecked: true,
      "aria-label": "check",
      name: "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('label is node', () => {
    const view = shallow(React.createElement(Radio, {
      label: React.createElement("h1", null, "Header"),
      id: "check",
      isChecked: true,
      "aria-label": "check",
      name: "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('passing class', () => {
    const view = shallow(React.createElement(Radio, {
      label: "label",
      className: "class-123",
      id: "check",
      isChecked: true,
      "aria-label": "check",
      name: "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('passing HTML attribute', () => {
    const view = shallow(React.createElement(Radio, {
      label: "label",
      "aria-labelledby": "labelId",
      id: "check",
      isChecked: true,
      "aria-label": "check",
      name: "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('Radio passes value and event to onChange handler', () => {
    const newValue = true;
    const event = {
      currentTarget: {
        checked: newValue
      }
    };
    const view = shallow(React.createElement(Radio, _extends({
      id: "check"
    }, props, {
      "aria-label": "check",
      name: "check"
    })));
    view.find('input').simulate('change', event);
    expect(props.onChange).toBeCalledWith(newValue, event);
  });
});
//# sourceMappingURL=Radio.test.js.map