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
var ExpandableDemo = /** @class */ (function (_super) {
    __extends(ExpandableDemo, _super);
    function ExpandableDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isExpanded: false
        };
        _this.onToggle = function () { return _this.setState({ isExpanded: !_this.state.isExpanded }); };
        return _this;
    }
    ExpandableDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    ExpandableDemo.prototype.render = function () {
        var isExpanded = this.state.isExpanded;
        return (<react_1["default"].Fragment>
        <h1> Simple Expandable Example: </h1>
          <react_core_1.Expandable toggleText={isExpanded ? 'Show Less' : 'Show More'} onToggle={this.onToggle} isExpanded={isExpanded}>
            This content is visible only when the component is expanded.
          </react_core_1.Expandable>
        <br />
        <h1> Uncontrolled Expandable Example: </h1>
        <react_core_1.Expandable toggleText="Show More">
          This content is visible only when the component is expanded.
        </react_core_1.Expandable>
      </react_1["default"].Fragment>);
    };
    return ExpandableDemo;
}(react_1["default"].Component));
exports.ExpandableDemo = ExpandableDemo;
