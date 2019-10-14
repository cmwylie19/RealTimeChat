function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { shallow } from 'enzyme';
import { ClipboardCopyToggle } from './ClipboardCopyToggle';
const props = {
  id: 'my-id',
  textId: 'my-text-id',
  contentId: 'my-content-id',
  isExpanded: false,
  className: 'myclassName',
  onClick: jest.fn()
};
test('toggle button render', () => {
  const desc = 'toggle content';
  const view = shallow(React.createElement(ClipboardCopyToggle, _extends({}, props, {
    "aria-label": desc
  })));
  expect(view).toMatchSnapshot();
});
test('toggle button onClick', () => {
  const onclick = jest.fn();
  const view = shallow(React.createElement(ClipboardCopyToggle, _extends({}, props, {
    onClick: onclick
  })));
  view.find('button').simulate('click');
  expect(onclick).toBeCalled();
});
test('toggle button is on expanded mode', () => {
  let view = shallow(React.createElement(ClipboardCopyToggle, _extends({}, props, {
    isExpanded: true
  })));
  expect(view.props()['aria-expanded']).toBe(true);
  view = shallow(React.createElement(ClipboardCopyToggle, _extends({}, props, {
    isExpanded: false
  })));
  expect(view.props()['aria-expanded']).toBe(false);
});
//# sourceMappingURL=ClipboardCopyToggle.test.js.map