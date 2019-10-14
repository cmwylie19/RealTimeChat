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
var react_icons_1 = require("@patternfly/react-icons");
var react_1 = require("react");
var EmptyStateDemo = /** @class */ (function (_super) {
    __extends(EmptyStateDemo, _super);
    function EmptyStateDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myLargeEmptyStateProps = {
            children: <react_1["default"].Fragment>
    <react_core_1.EmptyStateIcon icon={react_icons_1.CubesIcon}/>
    <react_core_1.Title headingLevel="h5" size="lg">
      Large Empty State
    </react_core_1.Title>
    <react_core_1.EmptyStateBody>
      This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
      enough to meet a variety of needs.
    </react_core_1.EmptyStateBody>
    <react_core_1.Button variant="primary">Primary Action</react_core_1.Button>
    <react_core_1.EmptyStateSecondaryActions>
      <react_core_1.Button variant="link">Multiple</react_core_1.Button>
      <react_core_1.Button variant="link">Action Buttons</react_core_1.Button>
      <react_core_1.Button variant="link">Can</react_core_1.Button>
      <react_core_1.Button variant="link">Go here</react_core_1.Button>
      <react_core_1.Button variant="link">In the secondary</react_core_1.Button>
      <react_core_1.Button variant="link">Action area</react_core_1.Button>
    </react_core_1.EmptyStateSecondaryActions>
   </react_1["default"].Fragment>
        };
        _this.mySmallEmptyStateProps = {
            children: <react_1["default"].Fragment>
    <react_core_1.EmptyStateIcon icon={react_icons_1.CubesIcon}/>
    <react_core_1.Title headingLevel="h5" size="lg">
      Small Empty State
    </react_core_1.Title>
    <react_core_1.EmptyStateBody>
      This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
      enough to meet a variety of needs.
    </react_core_1.EmptyStateBody>
    <react_core_1.Button variant="primary">Primary Action</react_core_1.Button>
    <react_core_1.EmptyStateSecondaryActions>
      <react_core_1.Button variant="link">Multiple</react_core_1.Button>
      <react_core_1.Button variant="link">Action Buttons</react_core_1.Button>
      <react_core_1.Button variant="link">Can</react_core_1.Button>
      <react_core_1.Button variant="link">Go here</react_core_1.Button>
      <react_core_1.Button variant="link">In the secondary</react_core_1.Button>
      <react_core_1.Button variant="link">Action area</react_core_1.Button>
    </react_core_1.EmptyStateSecondaryActions>
   </react_1["default"].Fragment>,
            variant: react_core_1.EmptyStateVariant.small
        };
        _this.myFullEmptyStateProps = {
            children: <react_1["default"].Fragment>
    <react_core_1.EmptyStateIcon icon={react_icons_1.CubesIcon}/>
    <react_core_1.Title headingLevel="h5" size="lg">
      Full Empty State
    </react_core_1.Title>
    <react_core_1.EmptyStateBody>
      This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible
      enough to meet a variety of needs.
    </react_core_1.EmptyStateBody>
    <react_core_1.Button variant="primary">Primary Action</react_core_1.Button>
    <react_core_1.EmptyStateSecondaryActions>
      <react_core_1.Button variant="link">Multiple</react_core_1.Button>
      <react_core_1.Button variant="link">Action Buttons</react_core_1.Button>
      <react_core_1.Button variant="link">Can</react_core_1.Button>
      <react_core_1.Button variant="link">Go here</react_core_1.Button>
      <react_core_1.Button variant="link">In the secondary</react_core_1.Button>
      <react_core_1.Button variant="link">Action area</react_core_1.Button>
    </react_core_1.EmptyStateSecondaryActions>
   </react_1["default"].Fragment>,
            variant: react_core_1.EmptyStateVariant.full
        };
        return _this;
    }
    EmptyStateDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    EmptyStateDemo.prototype.render = function () {
        return (<react_1["default"].Fragment>
       <react_core_1.EmptyState children={this.myLargeEmptyStateProps.children}/>
       <react_core_1.EmptyState children={this.mySmallEmptyStateProps.children} variant={this.mySmallEmptyStateProps.variant}/>
       <react_core_1.EmptyState children={this.myFullEmptyStateProps.children} variant={this.myFullEmptyStateProps.variant}/>
     </react_1["default"].Fragment>);
    };
    return EmptyStateDemo;
}(react_1.Component));
exports.EmptyStateDemo = EmptyStateDemo;
exports["default"] = EmptyStateDemo;
