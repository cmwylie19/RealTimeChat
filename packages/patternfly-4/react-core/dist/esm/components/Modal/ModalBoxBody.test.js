import * as React from 'react';
import { shallow } from 'enzyme';
import { ModalBoxBody } from './ModalBoxBody';
test('ModalBoxBody Test', () => {
  const view = shallow(React.createElement(ModalBoxBody, {
    id: "id",
    className: "test-box-class"
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ModalBoxBody.test.js.map