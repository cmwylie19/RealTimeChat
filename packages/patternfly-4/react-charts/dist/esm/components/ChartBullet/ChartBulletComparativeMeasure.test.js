import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletComparativeMeasure } from './ChartBulletComparativeMeasure';
Object.values([true, false]).forEach(isRead => {
  test('ChartBulletComparativeMeasure', () => {
    const view = shallow(React.createElement(ChartBulletComparativeMeasure, null));
    expect(view).toMatchSnapshot();
  });
});
test('renders component data', () => {
  const view = shallow(React.createElement(ChartBulletComparativeMeasure, {
    data: [{
      y: 100
    }],
    domain: {
      x: [0, 200]
    },
    width: 450
  }));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ChartBulletComparativeMeasure.test.js.map