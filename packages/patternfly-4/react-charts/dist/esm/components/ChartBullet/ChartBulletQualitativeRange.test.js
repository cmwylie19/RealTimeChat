import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBulletQualitativeRange } from './ChartBulletQualitativeRange';
Object.values([true, false]).forEach(isRead => {
  test('ChartBulletQualitativeRange', () => {
    const view = shallow(React.createElement(ChartBulletQualitativeRange, null));
    expect(view).toMatchSnapshot();
  });
});
test('renders component data', () => {
  const view = shallow(React.createElement(ChartBulletQualitativeRange, {
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
//# sourceMappingURL=ChartBulletQualitativeRange.test.js.map