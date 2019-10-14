import React from 'react';
import { mount } from 'enzyme';
import { List } from './List';
import { ListItem } from './ListItem';

const ListItems = () => React.createElement(React.Fragment, null, React.createElement(List, null, React.createElement(ListItem, null, "First"), React.createElement(ListItem, null, "Second"), React.createElement(ListItem, null, "Third")));

describe('list', () => {
  test('simple list', () => {
    const view = mount(React.createElement(List, null, React.createElement(ListItems, null)));
    expect(view).toMatchSnapshot();
  });
  test('inline list', () => {
    const view = mount(React.createElement(List, {
      variant: "inline"
    }, React.createElement(ListItems, null)));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=List.test.js.map