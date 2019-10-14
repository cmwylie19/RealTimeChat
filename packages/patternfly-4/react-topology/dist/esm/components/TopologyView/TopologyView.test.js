import * as React from 'react';
import { mount } from 'enzyme';
import { TopologyView } from './index';
describe('TopologyView', () => {
  test('should display an empty topology correctly', () => {
    const view = mount(React.createElement(TopologyView, {
      className: "my-test-class",
      id: "simple-test-id"
    }));
    expect(view).toMatchSnapshot();
  });
  test('should display topology correctly', () => {
    const view = mount(React.createElement(TopologyView, {
      className: "my-test-class",
      id: "simple-test-id",
      contextToolbar: React.createElement("div", {
        id: "test-context-bar"
      }),
      viewToolbar: React.createElement("div", {
        id: "test-view-bar"
      }),
      controlBar: React.createElement("div", {
        id: "test-control-bar"
      })
    }, React.createElement("div", {
      id: "test-canvas"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should display topology sidebar correctly', () => {
    const view = mount(React.createElement(TopologyView, {
      className: "my-test-class",
      id: "simple-test-id",
      contextToolbar: React.createElement("div", {
        id: "test-context-bar"
      }),
      viewToolbar: React.createElement("div", {
        id: "test-view-bar"
      }),
      controlBar: React.createElement("div", {
        id: "test-control-bar"
      }),
      sideBar: React.createElement("div", null, "Test SideBar"),
      sideBarOpen: false
    }, React.createElement("div", {
      id: "test-canvas"
    })));
    expect(view).toMatchSnapshot();
    expect(view.find('div.pf-topology-container__with-sidebar').length).toBe(1);
    expect(view.find('div.pf-topology-container__with-sidebar.pf-topology-container__with-sidebar--open').length).toBe(0);
  });
  test('should display topology w/ open sidebar correctly', () => {
    const view = mount(React.createElement(TopologyView, {
      className: "my-test-class",
      id: "simple-test-id",
      contextToolbar: React.createElement("div", {
        id: "test-context-bar"
      }),
      viewToolbar: React.createElement("div", {
        id: "test-view-bar"
      }),
      controlBar: React.createElement("div", {
        id: "test-control-bar"
      }),
      sideBar: React.createElement("div", null, "Test SideBar"),
      sideBarOpen: true
    }, React.createElement("div", {
      id: "test-canvas"
    })));
    expect(view).toMatchSnapshot();
    expect(view.find('div.pf-topology-container__with-sidebar.pf-topology-container__with-sidebar--open').length).toBe(1);
  });
});
//# sourceMappingURL=TopologyView.test.js.map