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
var components_1 = require("./components");
var react_router_dom_1 = require("react-router-dom");
var Demos_1 = require("./Demos");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeItem: null
        };
        _this.onNavSelect = function (selectedItem) {
            _this.setState({ activeItem: selectedItem.itemId });
        };
        _this.getNav = function () {
            var activeItem = _this.state.activeItem;
            return (<react_core_1.Nav onSelect={_this.onNavSelect} aria-label="Nav">
        <react_core_1.NavList variant={react_core_1.NavVariants.simple}>
          {Demos_1["default"].map(function (demo, index) {
                return (<react_core_1.NavItem itemId={index} isActive={activeItem === index} key={demo.id}>
                <react_router_dom_1.Link id={demo.id + "-nav-item-link"} to={"/" + demo.id + "-nav-link"}>{demo.name}</react_router_dom_1.Link>
              </react_core_1.NavItem>);
            })}
        </react_core_1.NavList>
      </react_core_1.Nav>);
        };
        _this.getPages = function () {
            return (<react_1["default"].Fragment>
        {Demos_1["default"].map(function (demo) {
                return (<react_router_dom_1.Route path={"/" + demo.id + "-nav-link"} render={function (_a) {
                    var match = _a.match;
                    return <react_core_1.PageSection style={{ zIndex: 2 }} id={"/" + demo.id + "-page-section"}>{react_1["default"].createElement(demo.componentType)}</react_core_1.PageSection>;
                }} key={demo.id}/>);
            })}
      </react_1["default"].Fragment>);
        };
        _this.pageId = 'ts-demo-app-page-id';
        _this.getSkipToContentLink = function () { return (<react_core_1.SkipToContent href={"#" + _this.pageId}>Skip to Content</react_core_1.SkipToContent>); };
        return _this;
    }
    App.prototype.render = function () {
        return (<react_router_dom_1.BrowserRouter>
        <react_core_1.Page header={<components_1.AppHeader />} sidebar={<components_1.AppSidebar nav={this.getNav()}/>} skipToContent={this.getSkipToContentLink()} isManagedSidebar mainContainerId={this.pageId}>
          {this.getPages()}
        </react_core_1.Page>
      </react_router_dom_1.BrowserRouter>);
    };
    return App;
}(react_1["default"].Component));
exports["default"] = App;
