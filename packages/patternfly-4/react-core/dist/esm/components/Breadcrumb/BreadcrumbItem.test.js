import * as React from 'react';
import { BreadcrumbItem } from './BreadcrumbItem';
import { shallow } from 'enzyme';
describe('BreadcrumbItem component', () => {
  test('should render default breadcrumbItem', () => {
    const view = shallow(React.createElement(BreadcrumbItem, null, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbItem with className', () => {
    const view = shallow(React.createElement(BreadcrumbItem, {
      className: "Class"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbItem with id', () => {
    const view = shallow(React.createElement(BreadcrumbItem, {
      id: "Item 1"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render active breadcrumbItem', () => {
    const view = shallow(React.createElement(BreadcrumbItem, {
      isActive: true
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render link breadcrumbItem', () => {
    const view = shallow(React.createElement(BreadcrumbItem, {
      to: "/somewhere"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbItem with target', () => {
    const view = shallow(React.createElement(BreadcrumbItem, {
      target: "/somewhere"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbItem with custom element', () => {
    const view = shallow(React.createElement(BreadcrumbItem, null, React.createElement("h1", null, "Header")));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=BreadcrumbItem.test.js.map