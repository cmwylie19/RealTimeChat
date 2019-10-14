"use strict";
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
var react_icons_1 = require("@patternfly/react-icons");
var Button_1 = require("../../components/Button");
var Page_1 = require("./Page");
exports.PageHeader = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.logo, logo = _c === void 0 ? null : _c, _d = _a.logoProps, logoProps = _d === void 0 ? null : _d, _e = _a.logoComponent, logoComponent = _e === void 0 ? 'a' : _e, _f = _a.toolbar, toolbar = _f === void 0 ? null : _f, _g = _a.avatar, avatar = _g === void 0 ? null : _g, _h = _a.topNav, topNav = _h === void 0 ? null : _h, _j = _a.isNavOpen, isNavOpen = _j === void 0 ? true : _j, _k = _a.showNavToggle, showNavToggle = _k === void 0 ? false : _k, _l = _a.onNavToggle, onNavToggle = _l === void 0 ? function () { return undefined; } : _l, _m = _a["aria-label"], ariaLabel = _m === void 0 ? 'Global navigation' : _m, props = __rest(_a, ["className", "logo", "logoProps", "logoComponent", "toolbar", "avatar", "topNav", "isNavOpen", "showNavToggle", "onNavToggle", 'aria-label']);
    var LogoComponent = logoComponent;
    return (<Page_1.PageContextConsumer>
      {function (_a) {
        var isManagedSidebar = _a.isManagedSidebar, managedOnNavToggle = _a.onNavToggle, managedIsNavOpen = _a.isNavOpen;
        var navToggle = isManagedSidebar ? managedOnNavToggle : onNavToggle;
        var navOpen = isManagedSidebar ? managedIsNavOpen : isNavOpen;
        return (<header role="banner" className={react_styles_1.css(page_1["default"].pageHeader, className)} {...props}>
            {(showNavToggle || logo) && (<div className={react_styles_1.css(page_1["default"].pageHeaderBrand)}>
                {showNavToggle && (<div className={react_styles_1.css(page_1["default"].pageHeaderBrandToggle)}>
                    <Button_1.Button id="nav-toggle" onClick={navToggle} aria-label={ariaLabel} aria-controls="page-sidebar" aria-expanded={navOpen ? 'true' : 'false'} variant={Button_1.ButtonVariant.plain}>
                      <react_icons_1.BarsIcon />
                    </Button_1.Button>
                  </div>)}
                {logo && (<LogoComponent className={react_styles_1.css(page_1["default"].pageHeaderBrandLink)} {...logoProps}>
                    {logo}
                  </LogoComponent>)}
              </div>)}
            
            
            {topNav && <div className={react_styles_1.css(page_1["default"].pageHeaderNav)}>{topNav}</div>}
            {(toolbar || avatar) && (<div className={react_styles_1.css(page_1["default"].pageHeaderTools)}>
                {toolbar}
                {avatar}
              </div>)}
          </header>);
    }}
    </Page_1.PageContextConsumer>);
};
