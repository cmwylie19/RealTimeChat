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
var PieOrangeDemo = /** @class */ (function (_super) {
    __extends(PieOrangeDemo, _super);
    function PieOrangeDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PieOrangeDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    PieOrangeDemo.prototype.render = function () {
        return (<div style={{ height: '230px', width: '350px', paddingTop: '50px', paddingLeft: '50px' }}>
        <div>
          <react_charts_1.ChartPie data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]} height={230} labels={function (_a) {
            var datum = _a.datum;
            return datum.x + ": " + datum.y;
        }} legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]} legendOrientation="vertical" legendPosition="right" themeColor={react_charts_1.ChartThemeColor.orange} width={350}/>
        </div>
      </div>);
    };
    return PieOrangeDemo;
}(react_1["default"].Component));
exports.PieOrangeDemo = PieOrangeDemo;
