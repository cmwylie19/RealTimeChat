import * as React from 'react';
import { BreadcrumbHeading } from './BreadcrumbHeading';
import { shallow } from 'enzyme';
describe('BreadcrumbHeading component', () => {
  test('should render default breadcrumbHeading', () => {
    const view = shallow(React.createElement(BreadcrumbHeading, null, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should pass classname', () => {
    const view = shallow(React.createElement(BreadcrumbHeading, {
      className: "Class"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should pass custom id', () => {
    const view = shallow(React.createElement(BreadcrumbHeading, {
      id: "Id"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render link breadcrumbTitle', () => {
    const view = shallow(React.createElement(BreadcrumbHeading, {
      to: "/somewhere"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbHeading with target', () => {
    const view = shallow(React.createElement(BreadcrumbHeading, {
      to: "#here",
      target: "_blank"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=BreadcrumbHeading.test.js.map