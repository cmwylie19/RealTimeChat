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
var nav_1 = require("@patternfly/react-styles/css/components/Nav/nav");
var accessibility_1 = require("@patternfly/react-styles/css/utilities/Accessibility/accessibility");
var react_styles_1 = require("@patternfly/react-styles");
var react_icons_1 = require("@patternfly/react-icons");
var util_1 = require("../../helpers/util");
var Nav_1 = require("./Nav");
var NavExpandable = /** @class */ (function (_super) {
    __extends(NavExpandable, _super);
    function NavExpandable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = _this.props.id || util_1.getUniqueId();
        _this.state = {
            expandedState: false
        };
        _this.onExpand = function (e, val) {
            if (_this.props.onExpand) {
                _this.props.onExpand(e, val);
            }
            else {
                _this.setState({ expandedState: val });
            }
        };
        _this.handleToggle = function (e, onToggle) {
            // Item events can bubble up, ignore those
            if (e.target.getAttribute('data-component') !== 'pf-nav-expandable') {
                return;
            }
            var groupId = _this.props.groupId;
            var expandedState = _this.state.expandedState;
            onToggle(e, groupId, !expandedState);
            _this.onExpand(e, !expandedState);
        };
        return _this;
    }
    NavExpandable.prototype.componentDidMount = function () {
        this.setState({ expandedState: this.props.isExpanded });
    };
    NavExpandable.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.isExpanded !== prevProps.isExpanded) {
            this.setState({ expandedState: this.props.isExpanded });
        }
    };
    NavExpandable.prototype.render = function () {
        var _this = this;
        var _a = this.props, id = _a.id, title = _a.title, srText = _a.srText, children = _a.children, className = _a.className, isActive = _a.isActive, groupId = _a.groupId, isExpanded = _a.isExpanded, onExpand = _a.onExpand, props = __rest(_a, ["id", "title", "srText", "children", "className", "isActive", "groupId", "isExpanded", "onExpand"]);
        var expandedState = this.state.expandedState;
        return (<Nav_1.NavContext.Consumer>
        {function (context) { return (<li className={react_styles_1.css(nav_1["default"].navItem, expandedState && nav_1["default"].modifiers.expanded, isActive && nav_1["default"].modifiers.current, className)} onClick={function (e) { return _this.handleToggle(e, context.onToggle); }} {...props}>
            <a data-component="pf-nav-expandable" className={react_styles_1.css(nav_1["default"].navLink)} id={srText ? null : _this.id} href="#" onClick={function (e) { return e.preventDefault(); }} onMouseDown={function (e) { return e.preventDefault(); }} aria-expanded={expandedState}>
              {title}
              <span className={react_styles_1.css(nav_1["default"].navToggle)}>
                <react_icons_1.AngleRightIcon aria-hidden="true"/>
              </span>
            </a>
            <section className={react_styles_1.css(nav_1["default"].navSubnav)} aria-labelledby={_this.id} hidden={expandedState ? null : true}>
              {srText && (<h2 className={react_styles_1.css(accessibility_1["default"].screenReader)} id={_this.id}>
                  {srText}
                </h2>)}
              <ul className={react_styles_1.css(nav_1["default"].navSimpleList)}>{children}</ul>
            </section>
          </li>); }}
      </Nav_1.NavContext.Consumer>);
    };
    NavExpandable.defaultProps = {
        srText: '',
        isExpanded: false,
        children: '',
        className: '',
        groupId: null,
        isActive: false,
        id: ''
    };
    return NavExpandable;
}(React.Component));
exports.NavExpandable = NavExpandable;
