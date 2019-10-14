import * as React from 'react';
import { shallow } from 'enzyme';
import { ChartBullet } from './ChartBullet';
Object.values([true, false]).forEach(isRead => {
  test('ChartBulletQualitativeRange', () => {
    const view = shallow(React.createElement(ChartBullet, null));
    expect(view).toMatchSnapshot();
  });
});
test('renders component data', () => {
  const view = shallow(React.createElement(ChartBullet, {
    ariaDesc: "Storage capacity",
    ariaTitle: "Bullet chart example",
    comparativeWarningMeasureData: [{
      name: 'Warning',
      y: 88
    }],
    labels: ({
      datum
    }) => `${datum.name}: ${datum.y}`,
    maxDomain: {
      y: 100
    },
    primarySegmentedMeasureData: [{
      name: 'Measure',
      y: 50
    }],
    qualitativeRangeData: [{
      name: 'Range',
      y: 50
    }, {
      name: 'Range',
      y: 75
    }],
    width: 450
  }));
  expect(view).toMatchSnapshot();
});
//# sourceMappingURL=ChartBullet.test.js.map