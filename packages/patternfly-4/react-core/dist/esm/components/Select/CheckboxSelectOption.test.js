import React from 'react';
import { shallow } from 'enzyme';
import { CheckboxSelectOption } from './CheckboxSelectOption';
describe('checkbox select options', () => {
  test('renders with value parameter successfully', () => {
    const view = shallow(React.createElement(CheckboxSelectOption, {
      value: "test",
      sendRef: jest.fn()
    }));
    expect(view).toMatchSnapshot();
  });
  test('renders with children successfully', () => {
    const view = shallow(React.createElement(CheckboxSelectOption, {
      value: "test",
      sendRef: jest.fn()
    }, React.createElement("div", null, "test")));
    expect(view).toMatchSnapshot();
  });
  describe('hover', () => {
    test('renders with checked successfully', () => {
      const view = shallow(React.createElement(CheckboxSelectOption, {
        isChecked: true,
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
  });
  describe('disabled', () => {
    test('renders disabled successfully', () => {
      const view = shallow(React.createElement(CheckboxSelectOption, {
        isDisabled: true,
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=CheckboxSelectOption.test.js.map