import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { Alert, AlertVariant } from './Alert';
import { AlertActionLink } from './AlertActionLink';
import { AlertActionCloseButton } from './AlertActionCloseButton';
test('default Alert variant is info', () => {
  const view = shallow(React.createElement(Alert, {
    title: "this is a test"
  }, "Alert testing"));
  expect(view.props().className).toMatch(/pf-m-info/);
});
Object.values(AlertVariant).forEach(variant => {
  describe(`Alert - ${variant}`, () => {
    test('Description', () => {
      const view = mount(React.createElement(Alert, {
        variant: variant,
        title: ""
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
    test('Title', () => {
      const view = mount(React.createElement(Alert, {
        variant: variant,
        title: "Some title"
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
    test('Action Link', () => {
      const view = mount(React.createElement(Alert, {
        variant: variant,
        action: React.createElement(AlertActionLink, null, "test"),
        title: ""
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
    test('Action Close Button', () => {
      const onClose = jest.fn();
      const view = mount(React.createElement(Alert, {
        variant: variant,
        action: React.createElement(AlertActionCloseButton, {
          "aria-label": "Close",
          onClose: onClose
        }),
        title: ""
      }, "Some alert"));
      expect(view).toMatchSnapshot();
      view.find('button[aria-label="Close"]').simulate('click');
      expect(onClose).toHaveBeenCalled();
    });
    test('Action and Title', () => {
      const view = mount(React.createElement(Alert, {
        variant: variant,
        action: React.createElement(AlertActionLink, null, "test"),
        title: "Some title"
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
    test('Custom aria label', () => {
      const view = mount(React.createElement(Alert, {
        variant: variant,
        "aria-label": `Custom aria label for ${variant}`,
        action: React.createElement(AlertActionLink, null, "test"),
        title: "Some title"
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
    test('inline variation', () => {
      const view = mount(React.createElement(Alert, {
        variant: variant,
        isInline: true,
        title: "Some title"
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=Alert.test.js.map