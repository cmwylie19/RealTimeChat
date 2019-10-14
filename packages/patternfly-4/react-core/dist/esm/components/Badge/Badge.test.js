import { Badge } from './Badge';
import React from 'react';
import { shallow } from 'enzyme';
Object.values([true, false]).forEach(isRead => {
  test(`${isRead} Badge`, () => {
    const view = shallow(React.createElement(Badge, {
      isRead: isRead
    }, isRead ? 'read' : 'unread', " Badge"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Badge.test.js.map