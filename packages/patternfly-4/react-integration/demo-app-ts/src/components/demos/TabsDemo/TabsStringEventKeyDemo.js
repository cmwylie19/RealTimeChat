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
var TabsStringEventKeyDemo = /** @class */ (function (_super) {
    __extends(TabsStringEventKeyDemo, _super);
    function TabsStringEventKeyDemo(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            activeTabKey: 'one'
        };
        // Toggle currently active tab
        _this.handleTabClick = function (event, tabIndex) {
            _this.setState({
                activeTabKey2: tabIndex
            });
        };
        _this.contentRefOne = react_1["default"].createRef();
        _this.contentRefTwo = react_1["default"].createRef();
        _this.contentRefThree = react_1["default"].createRef();
        return _this;
    }
    TabsStringEventKeyDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    TabsStringEventKeyDemo.prototype.render = function () {
        return (<react_1["default"].Fragment>
        <react_core_1.Tabs activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
          <react_core_1.Tab id="demoTabOne" eventKey={'one'} title="Tab item 1" tabContentId="demoTab1Section" tabContentRef={this.contentRefOne}/>
          <react_core_1.Tab id="demoTabTwo" eventKey={'two'} title="Tab item 2" tabContentId="demoTab2Section" tabContentRef={this.contentRefTwo}/>
          <react_core_1.Tab id="demoTabThree" eventKey={'three'} title="Tab item 3" tabContentId="demoTab3Section" tabContentRef={this.contentRefThree}/>
        </react_core_1.Tabs>
        <div>
          <react_core_1.TabContent eventKey={'one'} id="demoTab1Section" ref={this.contentRefOne} aria-label="Tab item 1">
            Tab 1 section
          </react_core_1.TabContent>
          <react_core_1.TabContent eventKey={'two'} id="demoTab2Section" ref={this.contentRefTwo} aria-label="Tab item 2" hidden>
            Tab 2 section
          </react_core_1.TabContent>
          <react_core_1.TabContent eventKey={'three'} id="demoTab3Section" ref={this.contentRefThree} aria-label="Tab item 3" hidden>
            Tab 3 section
          </react_core_1.TabContent>
        </div>
      </react_1["default"].Fragment>);
    };
    return TabsStringEventKeyDemo;
}(react_1.Component));
exports.TabsStringEventKeyDemo = TabsStringEventKeyDemo;
