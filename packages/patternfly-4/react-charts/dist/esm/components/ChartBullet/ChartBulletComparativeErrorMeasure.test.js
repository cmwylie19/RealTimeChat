import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletComparativeErrorMeasure } from './ChartBulletComparativeErrorMeasure';
Object.values([true, false]).forEach(isRead => {
  test('ChartBulletComparativeErrorMeasure', () => {
    const view = shallow(React.createElement(ChartBulletComparativeErrorMeasure, null));
    expect(view).toMatchSnapshot();
  });
});
test('renders component data', () => {
  const view = shallow(React.createElement(ChartBulletComparativeErrorMeasure, {
    data: [{
      y: 88
    }],
    domain: {
      x: [0, 200]
    },
    width: 450
  }));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ChartBulletComparativeErrorMeasure.test.js.map