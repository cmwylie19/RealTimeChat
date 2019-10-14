import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletComparativeWarningMeasure } from './ChartBulletComparativeWarningMeasure';
Object.values([true, false]).forEach(isRead => {
  test('ChartBulletComparativeZeroMeasure', () => {
    const view = shallow(React.createElement(ChartBulletComparativeWarningMeasure, null));
    expect(view).toMatchSnapshot();
  });
});
test('renders component data', () => {
  const view = shallow(React.createElement(ChartBulletComparativeWarningMeasure, {
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
//# sourceMappingURL=ChartBulletComparativeWarningMeasure.test.js.map