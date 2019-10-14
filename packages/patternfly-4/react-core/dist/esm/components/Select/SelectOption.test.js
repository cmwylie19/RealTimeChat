function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { shallow, mount } from 'enzyme';
import { SelectOption } from './SelectOption';
import { SelectProvider } from './selectConstants';

class User {
  constructor(title, firstName, lastName) {
    _defineProperty(this, "toString", () => `${this.title}: ${this.firstName} ${this.lastName}`);

    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
  }

}

describe('select options', () => {
  test('renders with value parameter successfully', () => {
    const view = mount(React.createElement(SelectProvider, {
      value: {
        onSelect: () => {},
        onClose: () => {},
        variant: 'single'
      }
    }, React.createElement(SelectOption, {
      value: "test",
      sendRef: jest.fn()
    })));
    expect(view.instance().props).toHaveProperty('value', 'test');
    expect(view).toMatchSnapshot();
  });
  test('renders with custom display successfully', () => {
    const view = mount(React.createElement(SelectProvider, {
      value: {
        onSelect: () => {},
        onClose: () => {},
        variant: 'single'
      }
    }, React.createElement(SelectOption, {
      value: "test",
      sendRef: jest.fn()
    }, React.createElement("div", null, "test display"))));
    expect(view).toMatchSnapshot();
  });
  test('renders with custom user object successfully', () => {
    const view = mount(React.createElement(SelectProvider, {
      value: {
        onSelect: () => {},
        onClose: () => {},
        variant: 'single'
      }
    }, React.createElement(SelectOption, {
      value: new User('Mr.', 'Test', 'User'),
      sendRef: jest.fn()
    })));
    expect(view).toMatchSnapshot();
  });
  test('renders with custom display and custom user object successfully', () => {
    const view = mount(React.createElement(SelectProvider, {
      value: {
        onSelect: () => {},
        onClose: () => {},
        variant: 'single'
      }
    }, React.createElement(SelectOption, {
      value: new User('Mr.', 'Test', 'User'),
      sendRef: jest.fn()
    }, React.createElement("div", null, "test display"))));
    expect(view).toMatchSnapshot();
  });
  describe('disabled', () => {
    test('renders disabled successfully', () => {
      const view = mount(React.createElement(SelectProvider, {
        value: {
          onSelect: () => {},
          onClose: () => {},
          variant: 'single'
        }
      }, React.createElement(SelectOption, {
        isDisabled: true,
        value: "test",
        sendRef: jest.fn()
      })));
      expect(view.find('button').hasClass('pf-m-disabled')).toBe(true);
      expect(view).toMatchSnapshot();
    });
  });
  describe('is selected', () => {
    test('renders selected successfully', () => {
      const view = shallow(React.createElement(SelectOption, {
        isSelected: true,
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
  });
  describe('checked', () => {
    test('renders with checked successfully', () => {
      const view = shallow(React.createElement(SelectOption, {
        isChecked: true,
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=SelectOption.test.js.map