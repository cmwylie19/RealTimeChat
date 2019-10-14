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
var SparklineDemo = /** @class */ (function (_super) {
    __extends(SparklineDemo, _super);
    function SparklineDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SparklineDemo.prototype.render = function () {
        return (<div>
        <div style={{ marginLeft: '50px', marginTop: '50px', height: '135px' }}>
          <div style={{ height: '100px', width: '400px' }}>
            <react_charts_1.ChartGroup height={100} padding={0} width={400}>
              <react_charts_1.ChartArea data={[
            { name: 'Cats', x: 1, y: 3 },
            { name: 'Cats', x: 2, y: 4 },
            { name: 'Cats', x: 3, y: 8 },
            { name: 'Cats', x: 4, y: 6 }
        ]}/>
            </react_charts_1.ChartGroup>
          </div>
          <react_charts_1.ChartLabel text="CPU utilization"/>
        </div>
      </div>);
    };
    return SparklineDemo;
}(react_1["default"].Component));
exports.SparklineDemo = SparklineDemo;
