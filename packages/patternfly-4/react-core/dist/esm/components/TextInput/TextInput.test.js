function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { shallow } from 'enzyme';
import { TextInput } from './TextInput';
const props = {
  onChange: jest.fn(),
  value: 'test input'
};
test('input passes value and event to onChange handler', () => {
  const newValue = 'new test input';
  const event = {
    currentTarget: {
      value: newValue
    }
  };
  const view = shallow(React.createElement(TextInput, _extends({}, props, {
    "aria-label": "test input"
  })));
  view.find('input').simulate('change', event);
  expect(props.onChange).toBeCalledWith(newValue, event);
});
test('simple text input', () => {
  const view = shallow(React.createElement(TextInput, _extends({}, props, {
    "aria-label": "simple text input"
  })));
  expect(view).toMatchSnapshot();
});
test('disabled text input', () => {
  const view = shallow(React.createElement(TextInput, {
    isDisabled: true,
    "aria-label": "disabled text input"
  }));
  expect(view).toMatchSnapshot();
});
test('readonly text input', () => {
  const view = shallow(React.createElement(TextInput, {
    isReadOnly: true,
    value: "read only",
    "aria-label": "readonly text input"
  }));
  expect(view).toMatchSnapshot();
});
test('invalid text input', () => {
  const view = shallow(React.createElement(TextInput, _extends({}, props, {
    required: true,
    isValid: false,
    "aria-label": "invalid text input"
  })));
  expect(view).toMatchSnapshot();
});
test('should throw console error when no aria-label, id or aria-labelledby is given', () => {
  const myMock = jest.fn();
  global.console = {
    error: myMock
  };
  shallow(React.createElement(TextInput, props));
  expect(myMock).toBeCalled();
});
test('should not throw console error when id is given but no aria-label or aria-labelledby', () => {
  const myMock = jest.fn();
  global.console = {
    error: myMock
  };
  shallow(React.createElement(TextInput, _extends({}, props, {
    id: "5"
  })));
  expect(myMock).not.toBeCalled();
});
test('should not throw console error when aria-label is given but no id or aria-labelledby', () => {
  const myMock = jest.fn();
  global.console = {
    error: myMock
  };
  shallow(React.createElement(TextInput, _extends({}, props, {
    "aria-label": "test input"
  })));
  expect(myMock).not.toBeCalled();
});
test('should not throw console error when aria-labelledby is given but no id or aria-label', () => {
  const myMock = jest.fn();
  global.console = {
    error: myMock
  };
  shallow(React.createElement(TextInput, _extends({}, props, {
    "aria-labelledby": "test input"
  })));
  expect(myMock).not.toBeCalled();
});
//# sourceMappingURL=TextInput.test.js.map