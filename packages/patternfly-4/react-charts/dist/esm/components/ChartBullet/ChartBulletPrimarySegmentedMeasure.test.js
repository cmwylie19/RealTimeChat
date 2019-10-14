import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletPrimarySegmentedMeasure } from './ChartBulletPrimarySegmentedMeasure';
Object.values([true, false]).forEach(isRead => {
  test('ChartBulletPrimarySegmentedMeasure', () => {
    const view = shallow(React.createElement(ChartBulletPrimarySegmentedMeasure, null));
    expect(view).toMatchSnapshot();
  });
});
test('renders component data', () => {
  const view = shallow(React.createElement(ChartBulletPrimarySegmentedMeasure, {
    data: [{
      y: 50
    }, {
      y: 85
    }, {
      y: 150
    }],
    domain: {
      x: [0, 200]
    }
  }));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ChartBulletPrimarySegmentedMeasure.test.js.map