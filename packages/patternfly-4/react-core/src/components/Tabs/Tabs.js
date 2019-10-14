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
var tabs_1 = require("@patternfly/react-styles/css/components/Tabs/tabs");
var button_1 = require("@patternfly/react-styles/css/components/Button/button");
var react_styles_1 = require("@patternfly/react-styles");
var react_icons_1 = require("@patternfly/react-icons");
var util_1 = require("../../helpers/util");
var constants_1 = require("../../helpers/constants");
var Tab_1 = require("./Tab");
var TabContent_1 = require("./TabContent");
var withOuia_1 = require("../withOuia");
var TabsVariant;
(function (TabsVariant) {
    TabsVariant["div"] = "div";
    TabsVariant["nav"] = "nav";
})(TabsVariant = exports.TabsVariant || (exports.TabsVariant = {}));
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.tabList = React.createRef();
        _this.handleScrollButtons = function () {
            if (_this.tabList.current) {
                var container = _this.tabList.current;
                // get first element and check if it is in view
                var showLeftScrollButton = !util_1.isElementInView(container, container.firstChild, false);
                // get lase element and check if it is in view
                var showRightScrollButton = !util_1.isElementInView(container, container.lastChild, false);
                // determine if selected tab is out of view and apply styles
                var selectedTab_1;
                var childrenArr = Array.from(container.children);
                childrenArr.forEach(function (child) {
                    var className = child.className;
                    if (className.search('pf-m-current') > 0) {
                        selectedTab_1 = child;
                    }
                });
                var sideOutOfView = util_1.sideElementIsOutOfView(container, selectedTab_1);
                _this.setState({
                    showLeftScrollButton: showLeftScrollButton,
                    showRightScrollButton: showRightScrollButton,
                    highlightLeftScrollButton: (sideOutOfView === constants_1.SIDE.LEFT || sideOutOfView === constants_1.SIDE.BOTH) && showLeftScrollButton,
                    highlightRightScrollButton: (sideOutOfView === constants_1.SIDE.RIGHT || sideOutOfView === constants_1.SIDE.BOTH) && showRightScrollButton
                });
            }
        };
        _this.scrollLeft = function () {
            // find first Element that is fully in view on the left, then scroll to the element before it
            if (_this.tabList.current) {
                var container = _this.tabList.current;
                var childrenArr = Array.from(container.children);
                var firstElementInView = void 0;
                var lastElementOutOfView = void 0;
                var i = void 0;
                for (i = 0; i < childrenArr.length && !firstElementInView; i++) {
                    if (util_1.isElementInView(container, childrenArr[i], false)) {
                        firstElementInView = childrenArr[i];
                        lastElementOutOfView = childrenArr[i - 1];
                    }
                }
                if (lastElementOutOfView) {
                    container.scrollLeft -= lastElementOutOfView.scrollWidth;
                }
            }
        };
        _this.scrollRight = function () {
            // find last Element that is fully in view on the right, then scroll to the element after it
            if (_this.tabList.current) {
                var container = _this.tabList.current;
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
            }
        };
        _this.state = {
            showLeftScrollButton: false,
            showRightScrollButton: false,
            highlightLeftScrollButton: false,
            highlightRightScrollButton: false,
            shownKeys: [_this.props.activeKey] // only for mountOnEnter case
        };
        return _this;
    }
    Tabs.prototype.handleTabClick = function (event, eventKey, tabContentRef, mountOnEnter) {
        var _this = this;
        var shownKeys = this.state.shownKeys;
        this.props.onSelect(event, eventKey);
        // process any tab content sections outside of the component
        if (tabContentRef) {
            React.Children.map(this.props.children, function (child, i) {
                child.props.tabContentRef.current.hidden = true;
            });
            // most recently selected tabContent
            tabContentRef.current.hidden = false;
        }
        // Update scroll button state and which button to highlight
        setTimeout(function () {
            _this.handleScrollButtons();
        }, 1);
        if (mountOnEnter) {
            this.setState({
                shownKeys: shownKeys.concat(eventKey)
            });
        }
    };
    Tabs.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.handleScrollButtons, false);
        // call the handle resize function to check if scroll buttons should be shown
        this.handleScrollButtons();
    };
    Tabs.prototype.componentWillUnmount = function () {
        document.removeEventListener('resize', this.handleScrollButtons, false);
    };
    Tabs.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, children = _a.children, activeKey = _a.activeKey, id = _a.id, isFilled = _a.isFilled, isSecondary = _a.isSecondary, leftScrollAriaLabel = _a.leftScrollAriaLabel, rightScrollAriaLabel = _a.rightScrollAriaLabel, ariaLabel = _a["aria-label"], variant = _a.variant, ouiaContext = _a.ouiaContext, ouiaId = _a.ouiaId, mountOnEnter = _a.mountOnEnter, unmountOnExit = _a.unmountOnExit, props = __rest(_a, ["className", "children", "activeKey", "id", "isFilled", "isSecondary", "leftScrollAriaLabel", "rightScrollAriaLabel", 'aria-label', "variant", "ouiaContext", "ouiaId", "mountOnEnter", "unmountOnExit"]);
        var _b = this.state, showLeftScrollButton = _b.showLeftScrollButton, showRightScrollButton = _b.showRightScrollButton, highlightLeftScrollButton = _b.highlightLeftScrollButton, highlightRightScrollButton = _b.highlightRightScrollButton, shownKeys = _b.shownKeys;
        var uniqueId = id || util_1.getUniqueId();
        var Component = variant === TabsVariant.nav ? 'nav' : 'div';
        return (<React.Fragment>
        <Component aria-label={ariaLabel} className={react_styles_1.css(tabs_1["default"].tabs, isFilled && tabs_1["default"].modifiers.fill, isSecondary && tabs_1["default"].modifiers.tabsSecondary, showLeftScrollButton && tabs_1["default"].modifiers.start, showRightScrollButton && tabs_1["default"].modifiers.end, highlightLeftScrollButton && tabs_1["default"].modifiers.startCurrent, highlightRightScrollButton && tabs_1["default"].modifiers.endCurrent, className)} {...ouiaContext.isOuia && {
            'data-ouia-component-type': 'Tabs',
            'data-ouia-component-id': ouiaId || ouiaContext.ouiaId
        }} id={id && id} {...props}>
          <button className={react_styles_1.css(tabs_1["default"].tabsScrollButton, isSecondary && button_1["default"].modifiers.secondary)} aria-label={leftScrollAriaLabel} onClick={this.scrollLeft}>
            <react_icons_1.AngleLeftIcon />
          </button>
          <ul className={react_styles_1.css(tabs_1["default"].tabsList)} ref={this.tabList} onScroll={this.handleScrollButtons}>
            {React.Children.map(children, function (child, index) {
            var _a = child.props, title = _a.title, eventKey = _a.eventKey, tabContentRef = _a.tabContentRef, childId = _a.id, tabContentId = _a.tabContentId, rest = __rest(_a, ["title", "eventKey", "tabContentRef", "id", "tabContentId"]);
            return (<li key={index} className={react_styles_1.css(tabs_1["default"].tabsItem, eventKey === activeKey && tabs_1["default"].modifiers.current, className)}>
                  <Tab_1.Tab className={react_styles_1.css(tabs_1["default"].tabsButton)} onClick={function (event) { return _this.handleTabClick(event, eventKey, tabContentRef, mountOnEnter); }} id={"pf-tab-" + eventKey + "-" + (childId || uniqueId)} aria-controls={tabContentId ? "" + tabContentId : "pf-tab-section-" + eventKey + "-" + (childId || uniqueId)} tabContentId={tabContentId} tabContentRef={tabContentRef} eventKey={eventKey} {...rest}>
                    {title}
                  </Tab_1.Tab>
                </li>);
        })}
          </ul>
          <button className={react_styles_1.css(tabs_1["default"].tabsScrollButton, isSecondary && button_1["default"].modifiers.secondary)} aria-label={rightScrollAriaLabel} onClick={this.scrollRight}>
            <react_icons_1.AngleRightIcon />
          </button>
        </Component>
        {React.Children.map(children, function (child, index) {
            if (!child.props.children || (unmountOnExit && child.props.eventKey !== activeKey) || (mountOnEnter && shownKeys.indexOf(child.props.eventKey) === -1)) {
                return null;
            }
            else {
                return <TabContent_1.TabContent key={index} activeKey={activeKey} child={child} id={child.props.id || uniqueId}/>;
            }
        })}
      </React.Fragment>);
    };
    Tabs.defaultProps = {
        className: '',
        activeKey: 0,
        onSelect: function () { return undefined; },
        isFilled: false,
        isSecondary: false,
        leftScrollAriaLabel: 'Scroll left',
        rightScrollAriaLabel: 'Scroll right',
        variant: TabsVariant.div,
        mountOnEnter: false,
        unmountOnExit: false
    };
    return Tabs;
}(React.Component));
var TabsWithOuiaContext = withOuia_1.withOuiaContext(Tabs);
exports.Tabs = TabsWithOuiaContext;
