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
var AccordionDemo = /** @class */ (function (_super) {
    __extends(AccordionDemo, _super);
    function AccordionDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            expanded: null
        };
        _this.onToggle = function (id) {
            var expanded = _this.state.expanded;
            _this.setState({ expanded: id !== expanded ? id : null });
        };
        return _this;
    }
    AccordionDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    AccordionDemo.prototype.render = function () {
        var _this = this;
        var expanded = this.state.expanded;
        return (<react_core_1.Accordion id="accordion-example">
        <react_core_1.AccordionItem>
          <react_core_1.AccordionToggle onClick={function () { return _this.onToggle('item-1'); }} isExpanded={expanded === 'item-1'} id="item-1">
            Item One
          </react_core_1.AccordionToggle>
          <react_core_1.AccordionContent isHidden={expanded !== 'item-1'} id="item-1-content">
            <p>
              Item One Content: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </react_core_1.AccordionContent>
        </react_core_1.AccordionItem>
        <react_core_1.AccordionItem>
          <react_core_1.AccordionToggle onClick={function () { return _this.onToggle('item-2'); }} isExpanded={expanded === 'item-2'} id="item-2">
            Item Two
          </react_core_1.AccordionToggle>
          <react_core_1.AccordionContent isHidden={expanded !== 'item-2'} id="item-2-content">
            <p>
              Item Two Content: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </react_core_1.AccordionContent>
        </react_core_1.AccordionItem>
        <react_core_1.AccordionItem>
          <react_core_1.AccordionToggle onClick={function () { return _this.onToggle('item-3'); }} isExpanded={expanded === 'item-3'} id="item-3">
            Item Three
          </react_core_1.AccordionToggle>
          <react_core_1.AccordionContent isHidden={expanded !== 'item-3'} id="item-3-content">
            <p>
              Item Three Content: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </react_core_1.AccordionContent>
        </react_core_1.AccordionItem>
      </react_core_1.Accordion>);
    };
    return AccordionDemo;
}(react_1["default"].Component));
exports.AccordionDemo = AccordionDemo;
