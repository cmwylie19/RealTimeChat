import * as React from 'react';
import { mount } from 'enzyme';
import { RowWrapper } from './RowWrapper';

const getRowWrapper = props => React.createElement("table", null, React.createElement("tbody", null, React.createElement(RowWrapper, props)));

describe('RowWrapper', () => {
  test('renders correctly', () => {
    const trRef = jest.fn();
    const view = mount(getRowWrapper({
      onScroll: jest.fn(),
      onResize: jest.fn(),
      trRef
    }));
    expect(view).toMatchSnapshot();
    expect(trRef.mock.calls).toHaveLength(1);
  });
  test('renders expanded correctly', () => {
    const view = mount(getRowWrapper({
      row: {
        isExpanded: true
      }
    }));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=RowWrapper.test.js.map