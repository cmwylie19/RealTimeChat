"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var Chart_1 = require("../Chart");
var ChartBar_1 = require("../ChartBar");
var ChartStack_1 = require("./ChartStack");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartStack', function () {
        var view = enzyme_1.shallow(<ChartStack_1.ChartStack />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<Chart_1.Chart domainPadding={{ x: [30, 25] }} height={200} width={300}>
      <ChartStack_1.ChartStack>
        <ChartBar_1.ChartBar data={[{ x: 'Cats', y: 1 }, { x: 'Dogs', y: 2 }, { x: 'Birds', y: 5 }, { x: 'Mice', y: 3 }]}/>
        <ChartBar_1.ChartBar data={[{ x: 'Cats', y: 2 }, { x: 'Dogs', y: 1 }, { x: 'Birds', y: 7 }, { x: 'Mice', y: 4 }]}/>
        <ChartBar_1.ChartBar data={[{ x: 'Cats', y: 4 }, { x: 'Dogs', y: 4 }, { x: 'Birds', y: 9 }, { x: 'Mice', y: 7 }]}/>
        <ChartBar_1.ChartBar data={[{ x: 'Cats', y: 3 }, { x: 'Dogs', y: 3 }, { x: 'Birds', y: 8 }, { x: 'Mice', y: 5 }]}/>
      </ChartStack_1.ChartStack>
    </Chart_1.Chart>);
    expect(view).toMatchSnapshot();
});
