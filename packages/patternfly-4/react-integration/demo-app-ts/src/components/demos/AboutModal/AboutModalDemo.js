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
var brandImg_svg_1 = require("./brandImg.svg");
var AboutModalDemo = /** @class */ (function (_super) {
    __extends(AboutModalDemo, _super);
    function AboutModalDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.handleModalToggle = function () {
            _this.setState(function (_a) {
                var isModalOpen = _a.isModalOpen;
                return ({
                    isModalOpen: !isModalOpen
                });
            });
        };
        _this.state = {
            isModalOpen: false
        };
        return _this;
    }
    AboutModalDemo.prototype.render = function () {
        var isModalOpen = this.state.isModalOpen;
        return (<react_1["default"].Fragment>
        <react_core_1.Button id="modal-button" variant="primary" onClick={this.handleModalToggle}>
          Show About Modal
        </react_core_1.Button>
        <react_core_1.AboutModal isOpen={isModalOpen} onClose={this.handleModalToggle} trademark="Trademark and copyright information here" brandImageSrc={brandImg_svg_1["default"]} brandImageAlt="Patternfly Logo" productName="Product Name">
          <react_core_1.TextContent>
            <react_core_1.TextList component="dl">
              <react_core_1.TextListItem component="dt">CFME Version</react_core_1.TextListItem>
              <react_core_1.TextListItem component="dd">5.5.3.4.20102789036450</react_core_1.TextListItem>
              <react_core_1.TextListItem component="dt">Cloudforms Version</react_core_1.TextListItem>
              <react_core_1.TextListItem component="dd">4.1</react_core_1.TextListItem>
              <react_core_1.TextListItem component="dt">Server Name</react_core_1.TextListItem>
              <react_core_1.TextListItem component="dd">40DemoMaster</react_core_1.TextListItem>
              <react_core_1.TextListItem component="dt">User Name</react_core_1.TextListItem>
              <react_core_1.TextListItem component="dd">Administrator</react_core_1.TextListItem>
              <react_core_1.TextListItem component="dt">User Role</react_core_1.TextListItem>
              <react_core_1.TextListItem component="dd">EvmRole-super_administrator</react_core_1.TextListItem>
              <react_core_1.TextListItem component="dt">Browser Version</react_core_1.TextListItem>
              <react_core_1.TextListItem component="dd">601.2</react_core_1.TextListItem>
              <react_core_1.TextListItem component="dt">Browser OS</react_core_1.TextListItem>
              <react_core_1.TextListItem component="dd">Mac</react_core_1.TextListItem>
            </react_core_1.TextList>
          </react_core_1.TextContent>
        </react_core_1.AboutModal>
      </react_1["default"].Fragment>);
    };
    return AboutModalDemo;
}(react_1["default"].Component));
exports.AboutModalDemo = AboutModalDemo;
