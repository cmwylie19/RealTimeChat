import * as React from 'react';
import { mount } from 'enzyme';
import { DropdownToggle } from './DropdownToggle';
import { DropdownContext } from './dropdownConstants';
describe('API', () => {
  test('click on closed', () => {
    const mockToggle = jest.fn();
    const view = mount(React.createElement(DropdownToggle, {
      onToggle: mockToggle,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    view.find('button').first().simulate('click');
    expect(mockToggle.mock.calls[0][0]).toBe(true);
  });
  test('click on opened', () => {
    const mockToggle = jest.fn();
    const view = mount(React.createElement(DropdownToggle, {
      id: "Dropdown Toggle",
      onToggle: mockToggle,
      isOpen: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    view.find('button').first().simulate('click');
    expect(mockToggle.mock.calls[0][0]).toBe(false);
  });
  test('on click outside has been removed', () => {
    let mousedown = () => {};

    document.addEventListener = jest.fn((event, cb) => {
      mousedown = cb;
    });
    document.removeEventListener = jest.fn((event, cb) => {
      if (mousedown === cb) {
        mousedown = () => {};
      }
    });
    const mockToggle = jest.fn();
    const view = mount(React.createElement(DropdownToggle, {
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
  test('on touch outside has been removed', () => {
    let touchstart = () => {};

    document.addEventListener = jest.fn((event, cb) => {
      touchstart = cb;
    });
    document.removeEventListener = jest.fn((event, cb) => {
      if (touchstart === cb) {
        touchstart = () => {};
      }
    });
    const mockToggle = jest.fn();
    const view = mount(React.createElement(DropdownToggle, {
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
describe('state', () => {
  test('hover', () => {
    const view = mount(React.createElement(DropdownToggle, {
      id: "Dropdown Toggle",
      isHovered: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    expect(view).toMatchSnapshot();
  });
  test('active', () => {
    const view = mount(React.createElement(DropdownToggle, {
      id: "Dropdown Toggle",
      isActive: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    expect(view).toMatchSnapshot();
  });
  test('focus', () => {
    const view = mount(React.createElement(DropdownToggle, {
      id: "Dropdown Toggle",
      isFocused: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    expect(view).toMatchSnapshot();
  });
  test('class changes', () => {
    const view = mount(React.createElement(DropdownContext.Provider, {
      value: {
        toggleTextClass: 'some-test-class',
        toggleIconClass: 'another-test-class'
      }
    }, React.createElement(DropdownToggle, {
      id: "Dropdown Toggle",
      isFocused: true,
      parentRef: document.createElement('div')
    }, "Dropdown")));
    expect(view).toMatchSnapshot();
  });
  test('class changes', () => {
    const view = mount(React.createElement(DropdownContext.Provider, {
      value: {
        toggleTextClass: 'some-test-class',
        toggleIconClass: 'another-test-class'
      }
    }, React.createElement(DropdownToggle, {
      id: "Dropdown Toggle",
      isFocused: true,
      parentRef: document.createElement('div')
    }, "Dropdown")));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=DropdownToggle.test.js.map