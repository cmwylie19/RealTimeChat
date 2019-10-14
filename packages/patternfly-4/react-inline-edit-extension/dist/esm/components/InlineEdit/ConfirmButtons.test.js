import React from 'react';
import { mount } from 'enzyme/build';
import { default as ConfirmButtons } from './ConfirmButtons';

const getConfirmButtons = () => React.createElement(ConfirmButtons, {
  onCancel: jest.fn(),
  onConfirm: jest.fn(),
  buttonsOnTop: true,
  boldBorder: true,
  messages: {
    confirmButtonLabel: 'Confirm',
    cancelButtonLabel: 'Discard'
  },
  environment: {
    window: {
      width: 500,
      height: 500
    },
    row: {
      top: 100,
      bottom: 90,
      left: 30,
      right: 40
    }
  }
});

describe('ConfirmButtons', () => {
  test('renders correctly', () => {
    const view = mount(getConfirmButtons());
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=ConfirmButtons.test.js.map