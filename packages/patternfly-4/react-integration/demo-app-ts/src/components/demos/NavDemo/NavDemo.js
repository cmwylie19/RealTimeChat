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
var NavDemo = /** @class */ (function (_super) {
    __extends(NavDemo, _super);
    function NavDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            simpleActiveItem: 0,
            defaultActiveItem: 0,
            expandableActiveGroup: 'grp-1',
            expandableActiveItem: 'itm-1-1',
            horizontalActiveItem: 0,
            expandableClickedGroup: '',
            expandableClickedItem: ''
        };
        _this.onSimpleSelect = function (result) {
            _this.setState({ simpleActiveItem: result.itemId });
        };
        _this.onDefaultSelect = function (result) {
            _this.setState({ defaultActiveItem: result.itemId });
        };
        _this.handleNoNavigateLink = function (e, itemId, groupId, to) {
            console.log("No Navigate Link clicked: " + itemId);
        };
        _this.onExpandableSelect = function (result) {
            _this.setState({
                expandableActiveGroup: result.groupId,
                expandableActiveItem: result.itemId
            });
        };
        _this.handleItemOnclick = function (e, itemId, groupId) {
            _this.setState({
                expandableClickedGroup: groupId,
                expandableClickedItem: itemId
            });
        };
        _this.onHorizontalSelect = function (result) {
            _this.setState({ horizontalActiveItem: result.itemId });
        };
        return _this;
    }
    NavDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    NavDemo.prototype.renderSimpleNav = function () {
        var simpleActiveItem = this.state.simpleActiveItem;
        return (<react_core_1.StackItem isFilled>
        <react_core_1.Title size="2xl">Simple Nav</react_core_1.Title>
        <div className="example" style={{ border: '1px solid rgb(114, 118, 123)', backgroundColor: '#fff' }}>
          <react_core_1.Nav onSelect={this.onSimpleSelect} id="nav-primary-simple">
            <react_core_1.NavList id="nav-list-simple" variant={react_core_1.NavVariants.simple}>
              <react_core_1.NavItem id="simple-link1" preventDefault to="#simple-link1" itemId={0} isActive={simpleActiveItem === 0}>
                Link 1
              </react_core_1.NavItem>
              <react_core_1.NavItem id="simple-link2" preventDefault to="#simple-link2" itemId={1} isActive={simpleActiveItem === 1}>
                Link 2
              </react_core_1.NavItem>
              <react_core_1.NavItem id="simple-link3" preventDefault to="#simple-link3" itemId={2} isActive={simpleActiveItem === 2}>
                Link 3
              </react_core_1.NavItem>
              <react_core_1.NavItemSeparator />
              <react_core_1.NavItem id="simple-link4" preventDefault to="#simple-link4" itemId={3} isActive={simpleActiveItem === 3}>
                Link 4
              </react_core_1.NavItem>
            </react_core_1.NavList>
          </react_core_1.Nav>
        </div>
      </react_core_1.StackItem>);
    };
    NavDemo.prototype.renderDefaultNav = function () {
        var defaultActiveItem = this.state.defaultActiveItem;
        return (<react_core_1.StackItem isFilled>
        <react_core_1.Title size="2xl">Default Nav</react_core_1.Title>
        <div className="example" style={{ border: '1px solid rgb(114, 118, 123)', backgroundColor: '#fff' }}>
          <react_core_1.Nav onSelect={this.onDefaultSelect} id="nav-primary-default">
            <react_core_1.NavList>
              <react_core_1.NavItem id="default-link1" to="#default-link1" itemId={0} isActive={defaultActiveItem === 0}>
                Link 1
              </react_core_1.NavItem>
              <react_core_1.NavItem id="default-link2" to="#default-link2" itemId={1} isActive={defaultActiveItem === 1}>
                Link 2
              </react_core_1.NavItem>
              <react_core_1.NavItem id="default-link3" to="#default-link3" itemId={2} isActive={defaultActiveItem === 2}>
                Link 3
              </react_core_1.NavItem>
              <react_core_1.NavItem id="default-link4" to="#default-link4" itemId={3} isActive={defaultActiveItem === 3}>
                Link 4
              </react_core_1.NavItem>
              <react_core_1.NavItemSeparator />
              <react_core_1.NavItem id="default-no-navigate-link" preventDefault to="#default-no-navigate-link" itemId={4} isActive={defaultActiveItem === 4} onClick={this.handleNoNavigateLink}>
                No Navigate Link
              </react_core_1.NavItem>
            </react_core_1.NavList>
          </react_core_1.Nav>
        </div>
      </react_core_1.StackItem>);
    };
    NavDemo.prototype.renderExpandableNav = function () {
        var _a = this.state, expandableActiveGroup = _a.expandableActiveGroup, expandableActiveItem = _a.expandableActiveItem, expandableClickedGroup = _a.expandableClickedGroup, expandableClickedItem = _a.expandableClickedItem;
        return (<react_core_1.StackItem isFilled>
        <react_core_1.Title size="2xl">Expandable Nav</react_core_1.Title>
        <div className="example" style={{ border: '1px solid rgb(114, 118, 123)', backgroundColor: '#fff' }}>
          <react_core_1.Nav onSelect={this.onExpandableSelect} id="nav-primary-expandable">
            <react_core_1.NavList>
              <react_core_1.NavExpandable id="grp-1" title="Group 1" groupId="grp-1" isActive={expandableActiveGroup === 'grp-1'} isExpanded>
                <react_core_1.NavItem id="itm-1-1" preventDefault to="#expandable-1" groupId="grp-1" itemId="itm-1-1" isActive={expandableActiveGroup === 'grp-1' && expandableActiveItem === 'itm-1-1'} onClick={this.handleItemOnclick}>
                  Item 1
                </react_core_1.NavItem>
                <react_core_1.NavItemSeparator />
                <react_core_1.NavItem id="itm-1-2" preventDefault groupId="grp-1" itemId="itm-1-2" isActive={expandableActiveGroup === 'grp-1' && expandableActiveItem === 'itm-1-2'} onClick={this.handleItemOnclick}>
                  Item 2
                </react_core_1.NavItem>
                <react_core_1.NavItem id="itm-1-3" to="#expandable-3" groupId="grp-1" itemId="itm-1-3" isActive={expandableActiveGroup === 'grp-1' && expandableActiveItem === 'itm-1-3'} onClick={this.handleItemOnclick}>
                  Item 3
                </react_core_1.NavItem>
              </react_core_1.NavExpandable>
              <react_core_1.NavExpandable id="grp-2" title="Group 2" groupId="grp-2" isActive={expandableActiveGroup === 'grp-2'} isExpanded>
                <react_core_1.NavItem id="itm-2-1" preventDefault groupId="grp-2" itemId="itm-2-1" isActive={expandableActiveGroup === 'grp-2' && expandableActiveItem === 'itm-2-1'} onClick={this.handleItemOnclick}>
                  Item 1
                </react_core_1.NavItem>
                <react_core_1.NavItem id="itm-2-2" preventDefault to="#expandable-4" groupId="grp-2" itemId="itm-2-2" isActive={expandableActiveGroup === 'grp-2' && expandableActiveItem === 'itm-2-2'} onClick={this.handleItemOnclick}>
                  Item 2
                </react_core_1.NavItem>
                <react_core_1.NavItem id="itm-2-3" preventDefault to="#expandable-5" groupId="grp-2" itemId="itm-2-3" isActive={expandableActiveGroup === 'grp-2' && expandableActiveItem === 'itm-2-3'} onClick={this.handleItemOnclick}>
                  Item 3
                </react_core_1.NavItem>
                <react_core_1.NavItem id="itm-2-4" preventDefault to="#expandable-6" groupId="grp-2" itemId="itm-2-4" isActive={expandableActiveGroup === 'grp-2' && expandableActiveItem === 'itm-2-4'} onClick={this.handleItemOnclick}>
                  Item 4
                </react_core_1.NavItem>
              </react_core_1.NavExpandable>
            </react_core_1.NavList>
          </react_core_1.Nav>
        </div>
        {expandableClickedGroup && (<div>
            <span>Last Clicked: </span>
            <span id="expand-click-group"> {expandableClickedGroup}</span>
            <span id="expand-click-item"> {expandableClickedItem}</span>
          </div>)}
      </react_core_1.StackItem>);
    };
    NavDemo.prototype.renderHorizontalNav = function () {
        var horizontalActiveItem = this.state.horizontalActiveItem;
        return (<react_core_1.StackItem isFilled>
        <react_core_1.Title size="2xl">Horizontal Nav</react_core_1.Title>
        <div style={{ backgroundColor: '#292e34', padding: '1rem' }}>
          <react_core_1.Nav onSelect={this.onHorizontalSelect} id="nav-primary-horizontal">
            <react_core_1.NavList variant={react_core_1.NavVariants.horizontal}>
              <react_core_1.NavItem id="horizontal-link1" preventDefault itemId={0} isActive={horizontalActiveItem === 0}>
                Item 1
              </react_core_1.NavItem>
              <react_core_1.NavItem id="horizontal-link2" preventDefault itemId={1} isActive={horizontalActiveItem === 1}>
                Item 2
              </react_core_1.NavItem>
              <react_core_1.NavItem id="horizontal-link3" preventDefault itemId={2} isActive={horizontalActiveItem === 2}>
                Item 3
              </react_core_1.NavItem>
            </react_core_1.NavList>
          </react_core_1.Nav>
        </div>
      </react_core_1.StackItem>);
    };
    NavDemo.prototype.render = function () {
        // Nav onToggle and onSelect should be optional
        // https://github.com/patternfly/patternfly-react/issues/1234
        return (<react_core_1.Stack gutter="md">
        {this.renderSimpleNav()}
        {this.renderDefaultNav()}
        {this.renderExpandableNav()}
        {this.renderHorizontalNav()}
      </react_core_1.Stack>);
    };
    return NavDemo;
}(react_1.Component));
exports.NavDemo = NavDemo;
