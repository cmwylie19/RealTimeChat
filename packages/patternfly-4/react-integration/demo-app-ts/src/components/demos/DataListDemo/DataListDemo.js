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
var react_core_1 = require("@patternfly/react-core");
var DataListDemo = /** @class */ (function (_super) {
    __extends(DataListDemo, _super);
    function DataListDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DataListDemo.prototype.render = function () {
        return (<react_core_1.DataList aria-label="Simple data list example">
        <react_core_1.DataListItem aria-labelledby="simple-item1">
          <react_core_1.DataListItemRow>
            <react_core_1.DataListItemCells dataListCells={[
            <react_core_1.DataListCell key="primary content">
                  <span id="simple-item1">Primary content</span>
                </react_core_1.DataListCell>,
            <react_core_1.DataListCell key="secondary content">
                  <span id="simple-item2">Secondary content</span>
                </react_core_1.DataListCell>
        ]}/>
          </react_core_1.DataListItemRow>
        </react_core_1.DataListItem>
        <react_core_1.DataListItem aria-labelledby="simple-item2">
          <react_core_1.DataListItemRow>
            <react_core_1.DataListItemCells dataListCells={[
            <react_core_1.DataListCell isFilled={false} key="secondary content fill">
                  <span id="simple-item3">Secondary content (pf-m-no-fill)</span>
                </react_core_1.DataListCell>,
            <react_core_1.DataListCell isFilled={false} alignRight key="secondary content align">
                  <span id="simple-item4">Secondary content (pf-m-align-right pf-m-no-fill)</span>
                </react_core_1.DataListCell>
        ]}/>
          </react_core_1.DataListItemRow>
        </react_core_1.DataListItem>
      </react_core_1.DataList>);
    };
    return DataListDemo;
}(react_1["default"].Component));
exports.DataListDemo = DataListDemo;
