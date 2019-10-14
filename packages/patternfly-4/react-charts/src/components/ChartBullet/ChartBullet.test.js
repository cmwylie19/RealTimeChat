"use strict";
exports.__esModule = true;
var React = require("react");
var enzyme_1 = require("enzyme");
var ChartBullet_1 = require("./ChartBullet");
Object.values([true, false]).forEach(function (isRead) {
    test('ChartBulletQualitativeRange', function () {
        var view = enzyme_1.shallow(<ChartBullet_1.ChartBullet />);
        expect(view).toMatchSnapshot();
    });
});
test('renders component data', function () {
    var view = enzyme_1.shallow(<ChartBullet_1.ChartBullet ariaDesc="Storage capacity" ariaTitle="Bullet chart example" comparativeWarningMeasureData={[{ name: 'Warning', y: 88 }]} labels={function (_a) {
        var datum = _a.datum;
        return datum.name + ": " + datum.y;
    }} maxDomain={{ y: 100 }} primarySegmentedMeasureData={[{ name: 'Measure', y: 50 }]} qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]} width={450}/>);
    expect(view).toMatchSnapshot();
});
