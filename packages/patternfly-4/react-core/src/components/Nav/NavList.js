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
var NavVariants_1 = require("./NavVariants");
var nav_1 = require("@patternfly/react-styles/css/components/Nav/nav");
var react_styles_1 = require("@patternfly/react-styles");
var react_icons_1 = require("@patternfly/react-icons");
var util_1 = require("../../helpers/util");
var Nav_1 = require("./Nav");
var NavList = /** @class */ (function (_super) {
    __extends(NavList, _super);
    function NavList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.navList = React.createRef();
        _this.handleScrollButtons = function () {
            if (_this.navList.current) {
                var updateScrollButtonState = _this.context.updateScrollButtonState;
                var container = _this.navList.current;
                // get first element and check if it is in view
                var showLeftScrollButton = !util_1.isElementInView(container, container.firstChild, false);
                // get last element and check if it is in view
                var showRightScrollButton = !util_1.isElementInView(container, container.lastChild, false);
                updateScrollButtonState({
                    showLeftScrollButton: showLeftScrollButton,
                    showRightScrollButton: showRightScrollButton
                });
            }
        };
        _this.scrollLeft = function () {
            // find first Element that is fully in view on the left, then scroll to the element before it
            if (_this.navList.current) {
                var container = _this.navList.current;
                var childrenArr = Array.from(container.children);
                var firstElementInView = void 0;
                var lastElementOutOfView = void 0;
                for (var i = 0; i < childrenArr.length && !firstElementInView; i++) {
                    if (util_1.isElementInView(container, childrenArr[i], false)) {
                        firstElementInView = childrenArr[i];
                        lastElementOutOfView = childrenArr[i - 1];
                    }
                }
                if (lastElementOutOfView) {
                    container.scrollLeft -= lastElementOutOfView.scrollWidth;
                }
                _this.handleScrollButtons();
            }
        };
        _this.scrollRight = function () {
            // find last Element that is fully in view on the right, then scroll to the element after it
            if (_this.navList.current) {
                var container = _this.navList.current;
                var childrenArr = Array.from(container.children);
                var lastElementInView = void 0;
                var firstElementOutOfView = void 0;
                for (var i = childrenArr.length - 1; i >= 0 && !lastElementInView; i--) {
                    if (util_1.isElementInView(container, childrenArr[i], false)) {
                        lastElementInView = childrenArr[i];
                        firstElementOutOfView = childrenArr[i + 1];
                    }
                }
                if (firstElementOutOfView) {
                    container.scrollLeft += firstElementOutOfView.scrollWidth;
                }
                _this.handleScrollButtons();
            }
        };
        return _this;
    }
    NavList.prototype.componentDidMount = function () {
        var variant = this.props.variant;
        var isHorizontal = variant === NavVariants_1.NavVariants.horizontal || variant === NavVariants_1.NavVariants.tertiary;
        if (isHorizontal) {
            window.addEventListener('resize', this.handleScrollButtons, false);
            // call the handle resize function to check if scroll buttons should be shown
            this.handleScrollButtons();
        }
    };
    NavList.prototype.componentWillUnmount = function () {
        var variant = this.props.variant;
        var isHorizontal = variant === NavVariants_1.NavVariants.horizontal || variant === NavVariants_1.NavVariants.tertiary;
        if (isHorizontal) {
            document.removeEventListener('resize', this.handleScrollButtons, false);
        }
    };
    NavList.prototype.render = function () {
        var _a;
        var _b = this.props, variant = _b.variant, children = _b.children, className = _b.className, ariaLeftScroll = _b.ariaLeftScroll, ariaRightScroll = _b.ariaRightScroll, props = __rest(_b, ["variant", "children", "className", "ariaLeftScroll", "ariaRightScroll"]);
        var variantStyle = (_a = {},
            _a[NavVariants_1.NavVariants["default"]] = nav_1["default"].navList,
            _a[NavVariants_1.NavVariants.simple] = nav_1["default"].navSimpleList,
            _a[NavVariants_1.NavVariants.horizontal] = nav_1["default"].navHorizontalList,
            _a[NavVariants_1.NavVariants.tertiary] = nav_1["default"].navTertiaryList,
            _a);
        var isHorizontal = variant === NavVariants_1.NavVariants.horizontal || variant === NavVariants_1.NavVariants.tertiary;
        return (<>
        {isHorizontal && (<button className={react_styles_1.css(nav_1["default"].navScrollButton)} aria-label={ariaLeftScroll} onClick={this.scrollLeft}>
            <react_icons_1.AngleLeftIcon />
          </button>)}
        <ul ref={this.navList} className={react_styles_1.css(variantStyle[variant], className)} {...props}>
          {children}
        </ul>
        {isHorizontal && (<button className={react_styles_1.css(nav_1["default"].navScrollButton)} aria-label={ariaRightScroll} onClick={this.scrollRight}>
            <react_icons_1.AngleRightIcon />
          </button>)}
      </>);
    };
    NavList.contextType = Nav_1.NavContext;
    NavList.defaultProps = {
        variant: 'default',
        children: null,
        className: '',
        ariaLeftScroll: 'Scroll left',
        ariaRightScroll: 'Scroll right'
    };
    return NavList;
}(React.Component));
exports.NavList = NavList;
