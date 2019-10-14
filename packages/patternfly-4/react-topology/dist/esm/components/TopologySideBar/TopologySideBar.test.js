import * as React from 'react';
import { mount } from 'enzyme';
import { TopologySideBar } from './index';
describe('TopologySideBar', () => {
  test('should display topology sidebar correctly', () => {
    const view = mount(React.createElement(TopologySideBar, {
      className: "my-test-class",
      show: true,
      header: React.createElement("span", {
        id: "test-header-id"
      }, "Header")
    }, React.createElement("div", {
      id: "test-canvas"
    })));
    expect(view).toMatchSnapshot();
    expect(view.find('.pf-topology-side-bar__header #test-header-id').length).toBe(1);
  });
  test('should display topology sidebar w/ close correctly', () => {
    const mockClose = jest.fn();
    const view = mount(React.createElement(TopologySideBar, {
      className: "my-test-class",
      show: true,
      onClose: mockClose
    }, ">", React.createElement("div", {
      id: "test-canvas"
    })));
    expect(view).toMatchSnapshot();
    view.find('button.pf-topology-side-bar__dismiss').simulate('click');
    expect(mockClose).toBeCalled();
  });
  test('should hide the sidebar correctly', () => {
    const view = mount(React.createElement(TopologySideBar, {
      className: "my-test-class",
      show: false,
      header: React.createElement("span", {
        id: "test-header-id"
      }, "Header")
    }, ">", React.createElement("div", {
      id: "test-canvas"
    })));
    expect(view).toMatchSnapshot();
    expect(view.find('#test-canvas').length).toBe(0);
  });
});
//# sourceMappingURL=TopologySideBar.test.js.map