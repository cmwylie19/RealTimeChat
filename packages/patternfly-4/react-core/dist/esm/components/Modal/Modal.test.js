function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { KEY_CODES } from '../../helpers/constants';
import { css } from '../../../../react-styles/dist/js';
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';
import { Modal } from './Modal';
jest.spyOn(document, 'createElement');
jest.spyOn(document.body, 'addEventListener');
const props = {
  title: 'Modal',
  onClose: jest.fn(),
  isOpen: false,
  children: 'modal content'
};
test('Modal creates a container element once for div', () => {
  const view = shallow(React.createElement(Modal, props));
  view.update();
  expect(document.createElement).toBeCalledWith('div');
  expect(document.createElement).toHaveBeenCalledTimes(1);
});
test('modal closes with escape', () => {
  shallow(React.createElement(Modal, _extends({}, props, {
    isOpen: true,
    appendTo: document.body
  })));
  const mock = document.body.addEventListener.mock;
  const [event, handler] = mock.calls[0];
  expect(event).toBe('keydown');
  handler({
    keyCode: KEY_CODES.ESCAPE_KEY
  });
  expect(props.onClose).toBeCalled();
});
test('modal does not call onClose for esc key if it is not open', () => {
  shallow(React.createElement(Modal, props));
  const mock = document.body.addEventListener.mock;
  const [event, handler] = mock.calls[0];
  expect(event).toBe('keydown');
  handler({
    keyCode: KEY_CODES.ESCAPE_KEY
  });
  expect(props.onClose).not.toBeCalled();
});
test('Each modal is given a new id', () => {
  const first = shallow(React.createElement(Modal, props));
  const second = shallow(React.createElement(Modal, props));
  expect(first.instance().id).not.toBe(second.instance().id);
});
test('modal removes body backdropOpen class when removed', () => {
  const view = shallow(React.createElement(Modal, _extends({}, props, {
    isOpen: true
  })));
  view.update();
  expect(document.body.className).toContain(css(styles.backdropOpen));
  view.setProps({
    isOpen: false
  });
  view.update();
  expect(document.body.className).not.toContain(css(styles.backdropOpen));
});
test('modal shows/hides the close button based on showClose (default true)', () => {
  const view = mount(React.createElement(Modal, _extends({}, props, {
    isOpen: true
  })));
  view.update();
  expect(view.exists('.pf-c-modal-box .pf-c-button')).toBeTruthy();
  view.setProps({
    showClose: false
  });
  view.update();
  expect(view.exists('.pf-c-modal-box .pf-c-button')).toBeFalsy();
});
//# sourceMappingURL=Modal.test.js.map