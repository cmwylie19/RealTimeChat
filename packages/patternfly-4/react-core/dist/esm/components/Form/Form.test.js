import React from 'react';
import { shallow } from 'enzyme';
import { Form } from './Form';
describe('Form component', () => {
  test('should render default form variant', () => {
    const view = shallow(React.createElement(Form, null));
    expect(view).toMatchSnapshot();
  });
  test('should render horizontal form variant', () => {
    const view = shallow(React.createElement(Form, {
      isHorizontal: true
    }));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Form.test.js.map