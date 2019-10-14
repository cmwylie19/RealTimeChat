import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartLegend } from '../ChartLegend';
import { ChartPoint } from './ChartPoint';
Object.values([true, false]).forEach(isRead => {
  test('ChartPoint', () => {
    const view = shallow(React.createElement(ChartLegend, {
      dataComponent: React.createElement(ChartPoint, null)
    }));
    expect(view).toMatchSnapshot();
  });
});
test('renders component data', () => {
  const view = shallow(React.createElement(ChartLegend, {
    data: [{
      name: 'Cats'
    }, {
      name: 'Dogs',
      symbol: {
        type: 'dash'
      }
    }],
    title: "Average number of pets",
    height: 50,
    width: 200
  }));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ChartPoint.test.js.map