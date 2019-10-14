import * as React from 'react';
import { shallow } from 'enzyme';
import { Tooltip } from './Tooltip';
test('tooltip renders', () => {
  const view = shallow(React.createElement(Tooltip, {
    position: "top",
    content: React.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.")
  }, React.createElement("div", null, "Toggle tooltip")));
  expect(view).toMatchSnapshot();
});
test('tooltip passes along values to tippy.js', () => {
  const view = shallow(React.createElement(Tooltip, {
    position: "top",
    content: React.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis."),
    tippyProps: {
      duration: [200, 200],
      offset: 20
    }
  }, React.createElement("div", null, "Tippy Props Test")));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=Tooltip.test.js.map