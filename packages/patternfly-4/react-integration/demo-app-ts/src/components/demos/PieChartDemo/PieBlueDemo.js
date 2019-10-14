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
var PieBlueDemo = /** @class */ (function (_super) {
    __extends(PieBlueDemo, _super);
    function PieBlueDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PieBlueDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    PieBlueDemo.prototype.render = function () {
        return (<div>
        <div style={{ height: '230px', width: '350px', paddingTop: '50px', paddingLeft: '50px' }}>
          <react_charts_1.ChartPie data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]} height={230} labels={function (_a) {
            var datum = _a.datum;
            return datum.x + ": " + datum.y;
        }} legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]} legendOrientation="vertical" legendPosition="right" width={350}/>
        </div>
      </div>);
    };
    return PieBlueDemo;
}(react_1["default"].Component));
exports.PieBlueDemo = PieBlueDemo;
