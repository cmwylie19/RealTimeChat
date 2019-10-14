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
var react_core_1 = require("@patternfly/react-core");
var react_1 = require("react");
var ChipGroupDemo = /** @class */ (function (_super) {
    __extends(ChipGroupDemo, _super);
    function ChipGroupDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            badgeChipArray: [
                {
                    name: 'Lemons',
                    isRead: true,
                    count: 10
                },
                {
                    name: 'Limes',
                    isRead: true,
                    count: 8
                }
            ]
        };
        _this.deleteItem = function (id) {
            var copyOfbadgeChipArray = _this.state.badgeChipArray;
            var index = copyOfbadgeChipArray.findIndex(function (chipObj) { return chipObj.name === id; });
            if (index !== -1) {
                copyOfbadgeChipArray.splice(index, 1);
                _this.setState({ badgeChipArray: copyOfbadgeChipArray });
            }
        };
        return _this;
    }
    ChipGroupDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    ChipGroupDemo.prototype.render = function () {
        var _this = this;
        var badgeChipArray = this.state.badgeChipArray;
        return (<react_core_1.ChipGroup>
        {badgeChipArray.map(function (chip) { return (<react_core_1.Chip key={chip.name} onClick={function () { return _this.deleteItem(chip.name); }}>
            {chip.name}
            <react_core_1.Badge isRead={chip.isRead}>{chip.count}</react_core_1.Badge>
          </react_core_1.Chip>); })}
      </react_core_1.ChipGroup>);
    };
    return ChipGroupDemo;
}(react_1.Component));
exports.ChipGroupDemo = ChipGroupDemo;
