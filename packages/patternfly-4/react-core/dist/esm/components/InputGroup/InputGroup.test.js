import React from 'react';
import { shallow } from 'enzyme';
import { InputGroup } from './InputGroup';
import { InputGroupText } from './InputGroupText';
import { Button } from '../Button';
import { TextInput } from '../TextInput';
test('InputGroupText', () => {
  const view = shallow(React.createElement(InputGroupText, {
    className: "inpt-grp-text",
    id: "email-npt-grp"
  }, "@"));
  expect(view.find('span')).toHaveLength(1);
  const spanProps = view.find('span').props();
  expect(spanProps.className).toEqual(expect.stringContaining('inpt-grp-text'));
  expect(spanProps.id).toBe('email-npt-grp');
  expect(view.text()).toBe('@');
});
test('InputGroup', () => {
  const view = shallow(React.createElement(InputGroup, {
    className: "text-verify-cls",
    id: "text-1"
  }, React.createElement(TextInput, {
    value: "this is text",
    "aria-label": "data text"
  })));
  expect(view.find('div')).toHaveLength(1);
  const divProps = view.find('div').props();
  expect(divProps.className).toEqual(expect.stringContaining('text-verify-cls'));
  expect(divProps.id).toBe('text-1');
});
test('add aria-describedby to form-control if one of the non form-controls has id', () => {
  // In this test, TextInput is a form-control component and Button is not.
  // If Button has an id props, this should be used in aria-describedby.
  const view = shallow(React.createElement(InputGroup, null, React.createElement(TextInput, {
    value: "some data",
    "aria-label": "some text"
  }), React.createElement(Button, {
    variant: "primary",
    id: "button-id"
  }, "hello")));
  expect(view.find(TextInput).props()['aria-describedby']).toBe('button-id');
});
//# sourceMappingURL=InputGroup.test.js.map