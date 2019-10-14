"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_charts_1 = require("@patternfly/react-charts");
var SimpleBarDemo = /** @class */ (function (_super) {
    __extends(SimpleBarDemo, _super);
    function SimpleBarDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleBarDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    SimpleBarDemo.prototype.render = function () {
        return (<div>
        <div style={{ width: '600px', height: '250px', paddingLeft: '50px' }}>
          <react_charts_1.Chart domain={{ y: [0, 9] }} domainPadding={{ x: [30, 25] }} legendData={[{ name: 'Cats' }]} legendOrientation="vertical" legendPosition="right" height={250} padding={{
            bottom: 50,
            left: 50,
            right: 200,
            top: 50
        }} width={600}>
            <react_charts_1.ChartBar data={[{ name: 'Cats', x: '2015', y: 1 }, { name: 'Cats', x: '2016', y: 2 }, { name: 'Cats', x: '2017', y: 5 }, { name: 'Cats', x: '2018', y: 3 }]}/>
          </react_charts_1.Chart>
        </div>
      </div>);
    };
    return SimpleBarDemo;
}(react_1["default"].Component));
exports.SimpleBarDemo = SimpleBarDemo;
