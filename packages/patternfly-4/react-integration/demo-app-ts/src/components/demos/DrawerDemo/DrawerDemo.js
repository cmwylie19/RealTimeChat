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
var experimental_1 = require("@patternfly/react-core/dist/esm/experimental");
var react_core_1 = require("@patternfly/react-core");
var DrawerDemo = /** @class */ (function (_super) {
    __extends(DrawerDemo, _super);
    function DrawerDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function () {
            var isExpanded = !_this.state.isExpanded;
            _this.setState({
                isExpanded: isExpanded
            });
        };
        _this.state = {
            isExpanded: false
        };
        return _this;
    }
    DrawerDemo.prototype.render = function () {
        var isExpanded = this.state.isExpanded;
        var panelContent = <experimental_1.DrawerPanelContent> drawer-panel </experimental_1.DrawerPanelContent>;
        var drawerContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';
        return (<react_1["default"].Fragment>
        <react_core_1.Button id="toggleButton" onClick={this.onClick}>Toggle Drawer</react_core_1.Button>
        <experimental_1.Drawer isExpanded={isExpanded} isInline panelContent={panelContent}>
          {drawerContent}
        </experimental_1.Drawer>
      </react_1["default"].Fragment>);
    };
    return DrawerDemo;
}(react_1["default"].Component));
exports.DrawerDemo = DrawerDemo;
