import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletPrimaryDotMeasure } from './ChartBulletPrimaryDotMeasure';
Object.values([true, false]).forEach(isRead => {
  test('ChartBulletPrimaryDotMeasure', () => {
    const view = shallow(React.createElement(ChartBulletPrimaryDotMeasure, null));
    expect(view).toMatchSnapshot();
  });
});
test('renders component data', () => {
  const view = shallow(React.createElement(ChartBulletPrimaryDotMeasure, {
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
//# sourceMappingURL=ChartBulletPrimaryDotMeasure.test.js.map