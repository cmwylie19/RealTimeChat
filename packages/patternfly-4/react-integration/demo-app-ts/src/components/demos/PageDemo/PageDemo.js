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
var PageDemo = /** @class */ (function (_super) {
    __extends(PageDemo, _super);
    function PageDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isNavOpen: true
        };
        _this.onNavToggle = function () {
            _this.setState({
                isNavOpen: !_this.state.isNavOpen
            });
        };
        return _this;
    }
    PageDemo.prototype.componentDidMount = function () {
        window.scrollTo(0, 0);
    };
    PageDemo.prototype.render = function () {
        var isNavOpen = this.state.isNavOpen;
        var logoProps = {
            href: 'https://patternfly.org',
            onClick: function () { return console.log('clicked logo'); },
            target: '_blank'
        };
        var Header = (<react_core_1.PageHeader logo="Logo that's a <div>" logoProps={logoProps} toolbar="Toolbar" avatar=" | Avatar" showNavToggle isNavOpen={isNavOpen} onNavToggle={this.onNavToggle} logoComponent={'div'}/>);
        var pageId = 'page-demo-page-id';
        var PageSkipToContent = (<react_core_1.SkipToContent href={"#" + pageId}>Skip to Content</react_core_1.SkipToContent>);
        var Sidebar = <react_core_1.PageSidebar id="page-demo-sidebar" nav="Navigation" isNavOpen={isNavOpen}/>;
        return (<react_core_1.Page id="page-demo" header={Header} sidebar={Sidebar} mainContainerId={pageId} skipToContent={PageSkipToContent}>
        <react_core_1.PageSection variant={react_core_1.PageSectionVariants.darker}>Section with darker background</react_core_1.PageSection>
        <react_core_1.PageSection variant={react_core_1.PageSectionVariants.dark}>Section with dark background</react_core_1.PageSection>
        <react_core_1.PageSection variant={react_core_1.PageSectionVariants.light}>Section with light background</react_core_1.PageSection>
      </react_core_1.Page>);
    };
    return PageDemo;
}(react_1["default"].Component));
exports.PageDemo = PageDemo;
