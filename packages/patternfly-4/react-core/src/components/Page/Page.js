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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = require("react");
var page_1 = require("@patternfly/react-styles/css/components/Page/page");
var react_styles_1 = require("@patternfly/react-styles");
var react_tokens_1 = require("@patternfly/react-tokens");
var util_1 = require("../../helpers/util");
var PageLayouts;
(function (PageLayouts) {
    PageLayouts["vertical"] = "vertical";
    PageLayouts["horizontal"] = "horizontal";
})(PageLayouts = exports.PageLayouts || (exports.PageLayouts = {}));
var PageContext = React.createContext({});
exports.PageContextProvider = PageContext.Provider;
exports.PageContextConsumer = PageContext.Consumer;
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page(props) {
        var _this = _super.call(this, props) || this;
        _this.handleResize = function () {
            var onPageResize = _this.props.onPageResize;
            var windowSize = window.innerWidth;
            var mobileView = windowSize < Number.parseInt(react_tokens_1.global_breakpoint_md.value, 10);
            if (onPageResize) {
                onPageResize({ mobileView: mobileView, windowSize: windowSize });
            }
            _this.setState(function (prevState) { return ({
                mobileView: mobileView
            }); });
        };
        _this.onNavToggleMobile = function () {
            _this.setState({
                mobileIsNavOpen: !_this.state.mobileIsNavOpen
            });
        };
        _this.onNavToggleDesktop = function () {
            _this.setState({
                desktopIsNavOpen: !_this.state.desktopIsNavOpen
            });
        };
        var isManagedSidebar = props.isManagedSidebar, defaultManagedSidebarIsOpen = props.defaultManagedSidebarIsOpen;
        var managedSidebarOpen = !isManagedSidebar ? true : defaultManagedSidebarIsOpen;
        _this.state = {
            desktopIsNavOpen: managedSidebarOpen,
            mobileIsNavOpen: false,
            mobileView: false
        };
        return _this;
    }
    Page.prototype.componentDidMount = function () {
        var _a = this.props, isManagedSidebar = _a.isManagedSidebar, onPageResize = _a.onPageResize;
        if (isManagedSidebar || onPageResize) {
            window.addEventListener('resize', util_1.debounce(this.handleResize, 250));
            // Initial check if should be shown
            this.handleResize();
        }
    };
    Page.prototype.componentWillUnmount = function () {
        var _a = this.props, isManagedSidebar = _a.isManagedSidebar, onPageResize = _a.onPageResize;
        if (isManagedSidebar || onPageResize) {
            window.removeEventListener('resize', util_1.debounce(this.handleResize, 250));
        }
    };
    Page.prototype.render = function () {
        var _a = this.props, breadcrumb = _a.breadcrumb, className = _a.className, children = _a.children, header = _a.header, sidebar = _a.sidebar, skipToContent = _a.skipToContent, mainContainerId = _a.mainContainerId, isManagedSidebar = _a.isManagedSidebar, defaultManagedSidebarIsOpen = _a.defaultManagedSidebarIsOpen, onPageResize = _a.onPageResize, rest = __rest(_a, ["breadcrumb", "className", "children", "header", "sidebar", "skipToContent", "mainContainerId", "isManagedSidebar", "defaultManagedSidebarIsOpen", "onPageResize"]);
        var _b = this.state, mobileView = _b.mobileView, mobileIsNavOpen = _b.mobileIsNavOpen, desktopIsNavOpen = _b.desktopIsNavOpen;
        var context = {
            isManagedSidebar: isManagedSidebar,
            onNavToggle: mobileView ? this.onNavToggleMobile : this.onNavToggleDesktop,
            isNavOpen: mobileView ? mobileIsNavOpen : desktopIsNavOpen
        };
        return (<exports.PageContextProvider value={context}>
        <div {...rest} className={react_styles_1.css(page_1["default"].page, className)}>
          {skipToContent}
          {header}
          {sidebar}
          <main role="main" id={mainContainerId} className={react_styles_1.css(page_1["default"].pageMain)} tabIndex={-1}>
            {breadcrumb && <section className={react_styles_1.css(page_1["default"].pageMainBreadcrumb)}>{breadcrumb}</section>}
            {children}
          </main>
        </div>
      </exports.PageContextProvider>);
    };
    Page.defaultProps = {
        breadcrumb: null,
        children: null,
        className: '',
        header: null,
        sidebar: null,
        skipToContent: null,
        isManagedSidebar: false,
        defaultManagedSidebarIsOpen: true,
        onPageResize: function () { return null; },
        mainContainerId: null
    };
    return Page;
}(React.Component));
exports.Page = Page;
