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
var expandable_1 = require("@patternfly/react-styles/css/components/Expandable/expandable");
var react_styles_1 = require("@patternfly/react-styles");
var react_icons_1 = require("@patternfly/react-icons");
var Expandable = /** @class */ (function (_super) {
    __extends(Expandable, _super);
    function Expandable(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isExpanded: props.isExpanded
        };
        return _this;
    }
    Expandable.prototype.render = function () {
        var _this = this;
        var _a = this.props, onToggleProp = _a.onToggle, isFocused = _a.isFocused, isHovered = _a.isHovered, isActive = _a.isActive, className = _a.className, toggleText = _a.toggleText, children = _a.children, isExpanded = _a.isExpanded, props = __rest(_a, ["onToggle", "isFocused", "isHovered", "isActive", "className", "toggleText", "children", "isExpanded"]);
        var onToggle = onToggleProp;
        var propOrStateIsExpanded = isExpanded;
        // uncontrolled
        if (isExpanded === undefined) {
            propOrStateIsExpanded = this.state.isExpanded;
            onToggle = function () {
                onToggleProp();
                _this.setState({ isExpanded: !_this.state.isExpanded });
            };
        }
        return (<div {...props} className={react_styles_1.css(expandable_1["default"].expandable, propOrStateIsExpanded && expandable_1["default"].modifiers.expanded, className)}>
        <button className={react_styles_1.css(expandable_1["default"].expandableToggle, isFocused && expandable_1["default"].modifiers.focus, isHovered && expandable_1["default"].modifiers.hover, isActive && expandable_1["default"].modifiers.active)} type="button" aria-expanded={propOrStateIsExpanded} onClick={onToggle}>
          <react_icons_1.AngleRightIcon className={react_styles_1.css(expandable_1["default"].expandableToggleIcon)} aria-hidden/>
          <span>{toggleText}</span>
        </button>
        <div className={react_styles_1.css(expandable_1["default"].expandableContent)} hidden={!propOrStateIsExpanded}>
          {children}
        </div>
      </div>);
    };
    Expandable.defaultProps = {
        className: '',
        toggleText: '',
        onToggle: function () { return undefined; },
        isFocused: false,
        isActive: false,
        isHovered: false
    };
    return Expandable;
}(React.Component));
exports.Expandable = Expandable;
