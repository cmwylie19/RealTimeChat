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
var WizardDemo = /** @class */ (function (_super) {
    __extends(WizardDemo, _super);
    function WizardDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: false
        };
        return _this;
    }
    WizardDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    WizardDemo.prototype.render = function () {
        var _this = this;
        var steps = [
            { name: 'A', component: <p>Step 1</p> },
            {
                name: 'B',
                steps: [
                    {
                        name: 'B-1',
                        component: <p>Step 2</p>,
                        enableNext: true
                    },
                    {
                        name: 'B-2',
                        component: <p>Step 3</p>,
                        enableNext: false,
                        canJumpTo: false
                    }
                ]
            },
            { name: 'C', component: <p>Step 4</p> },
            { name: 'D', component: <p>Step 5</p> }
        ];
        return (<react_1["default"].Fragment>
      <react_core_1.Wizard isOpen={this.state.isOpen} title="Wizard title" description="Description here" steps={steps} startAtStep={1} onClose={function () { return _this.setState({ isOpen: false }); }}/>
      <react_core_1.Button onClick={function () { return _this.setState({ isOpen: true }); }}>Show Wizard</react_core_1.Button>
      </react_1["default"].Fragment>);
    };
    return WizardDemo;
}(react_1.Component));
exports.WizardDemo = WizardDemo;
