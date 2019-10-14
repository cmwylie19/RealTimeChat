import React from 'react';
import { shallow } from 'enzyme';
import GenerateId from './GenerateId';
test('generates id', () => {
  const view = shallow(React.createElement(GenerateId, null, id => React.createElement("div", {
    id: id
  }, "div with random ID")));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=GenerateId.test.js.map