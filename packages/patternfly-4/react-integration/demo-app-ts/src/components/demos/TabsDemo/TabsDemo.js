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
var TabDemo = /** @class */ (function (_super) {
    __extends(TabDemo, _super);
    function TabDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            activeTabKey: 0,
            activeTabKey2: 0,
            activeTabKey3: 0
        };
        // Toggle currently active tab
        _this.handleTabClick = function (event, tabIndex) {
            _this.setState({
                activeTabKey: tabIndex
            });
        };
        // Toggle currently active tab
        _this.handleTabClick2 = function (event, tabIndex) {
            _this.setState({
                activeTabKey2: tabIndex
            });
        };
        // Toggle currently active tab
        _this.handleTabClick3 = function (event, tabIndex) {
            _this.setState({
                activeTabKey3: tabIndex
            });
        };
        _this.contentRef1 = react_1["default"].createRef();
        _this.contentRef2 = react_1["default"].createRef();
        _this.contentRef3 = react_1["default"].createRef();
        return _this;
    }
    TabDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TabDemo.prototype.render = function () {
        return (<react_1["default"].Fragment>
        <react_core_1.Tabs id="unconnectedChildren" activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
          <react_core_1.Tab id="demoTab1" eventKey={0} title="Tab item 1" tabContentId="demoTab1Section" tabContentRef={this.contentRef1}/>
          <react_core_1.Tab id="demoTab2" eventKey={1} title="Tab item 2" tabContentId="demoTab2Section" tabContentRef={this.contentRef2}/>
          <react_core_1.Tab id="demoTab3" eventKey={2} title={<i>Tab item 3</i>} tabContentId="demoTab3Section" tabContentRef={this.contentRef3}/>
        </react_core_1.Tabs>
        <div>
          <react_core_1.TabContent eventKey={0} id="demoTab1Section" ref={this.contentRef1} aria-label="Tab item 1" onAuxClick={function (event) { return console.log(event); }}>
            Tab 1 section
          </react_core_1.TabContent>
          <react_core_1.TabContent eventKey={1} id="demoTab2Section" ref={this.contentRef2} aria-label="Tab item 2" hidden>
            Tab 2 section
          </react_core_1.TabContent>
          <react_core_1.TabContent eventKey={2} id="demoTab3Section" ref={this.contentRef3} aria-label="Tab item 3" hidden>
            Tab 3 section
          </react_core_1.TabContent>
        </div>
        <react_core_1.Tabs id="mountOnEnter" mountOnEnter activeKey={this.state.activeTabKey2} onSelect={this.handleTabClick2}>
          <react_core_1.Tab eventKey={0} title="Tab item 1">
            Tab 1 section
          </react_core_1.Tab>
          <react_core_1.Tab eventKey={1} title="Tab item 2">
            Tab 2 section
          </react_core_1.Tab>
          <react_core_1.Tab eventKey={2} title="Tab item 3">
            Tab 3 section
          </react_core_1.Tab>
      </react_core_1.Tabs>
      <react_core_1.Tabs id="unmountOnExit" unmountOnExit activeKey={this.state.activeTabKey3} onSelect={this.handleTabClick3}>
        <react_core_1.Tab eventKey={0} title="Tab item 1">
          Tab 1 section
        </react_core_1.Tab>
        <react_core_1.Tab eventKey={1} title="Tab item 2">
          Tab 2 section
        </react_core_1.Tab>
        <react_core_1.Tab eventKey={2} title="Tab item 3">
          Tab 3 section
        </react_core_1.Tab>
      </react_core_1.Tabs>
      </react_1["default"].Fragment>);
    };
    return TabDemo;
}(react_1.Component));
exports.TabDemo = TabDemo;
