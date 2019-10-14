import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartContainer } from './ChartContainer';
import { ChartLegend } from '../ChartLegend';
Object.values([true, false]).forEach(isRead => {
  test('ChartContainer', () => {
    const view = shallow(React.createElement(ChartContainer, null));
    expect(view).toMatchSnapshot();
  });
});
test('renders container via ChartLegend', () => {
  const view = shallow(React.createElement(ChartContainer, null, React.createElement(ChartLegend, {
    data: [{
      name: 'Cats'
    }, {
      name: 'Dogs'
    }],
    height: 50,
    standalone: false,
    title: "Average number of pets",
    width: 200
  })));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ChartContainer.test.js.map