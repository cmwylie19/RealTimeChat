import * as React from 'react';
import { shallow } from 'enzyme';
import { Popover, PopoverPosition } from './Popover';
test('popover renders close-button, header and body', () => {
  const view = shallow(React.createElement(Popover, {
    position: "top",
    isVisible: true,
    hideOnOutsideClick: true,
    headerContent: React.createElement("div", null, "Popover Header"),
    bodyContent: React.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.")
  }, React.createElement("div", null, "Toggle Popover")));
  expect(view).toMatchSnapshot();
});
test('popover can specify position as object value', () => {
  const view = shallow(React.createElement(Popover, {
    position: PopoverPosition.right,
    isVisible: true,
    hideOnOutsideClick: true,
    headerContent: React.createElement("div", null, "Popover Header"),
    bodyContent: React.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.")
  }, React.createElement("div", null, "Toggle Popover")));
  expect(view).toMatchSnapshot();
});
test('popover passes along values to tippy.js', () => {
  const view = shallow(React.createElement(Popover, {
    position: PopoverPosition.right,
    isVisible: true,
    hideOnOutsideClick: true,
    headerContent: React.createElement("div", null, "Popover Header"),
    bodyContent: React.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis."),
    tippyProps: {
      duration: [200, 200],
      offset: 20
    }
  }, React.createElement("div", null, "Tippy Props Test")));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Popover.test.js.map