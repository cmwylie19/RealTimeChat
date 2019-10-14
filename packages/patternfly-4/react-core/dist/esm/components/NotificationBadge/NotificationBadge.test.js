import { NotificationBadge } from './NotificationBadge';
import React from 'react';
import { shallow } from 'enzyme';
Object.values([true, false]).forEach(isRead => {
  test(`${isRead} NotificationBadge`, () => {
    const view = shallow(React.createElement(NotificationBadge, {
      isRead: isRead
    }, isRead ? 'read' : 'unread', " Badge"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=NotificationBadge.test.js.map