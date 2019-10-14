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
var ReactDOM = require("react-dom");
var data_toolbar_1 = require("@patternfly/react-styles/css/components/DataToolbar/data-toolbar");
var react_styles_1 = require("@patternfly/react-styles");
var DataToolbarUtils_1 = require("./DataToolbarUtils");
var Button_1 = require("../../../components/Button");
var react_tokens_1 = require("@patternfly/react-tokens");
var DataToolbarUtils_2 = require("./DataToolbarUtils");
var util_1 = require("../../../helpers/util");
var DataToolbarToggleGroup = /** @class */ (function (_super) {
    __extends(DataToolbarToggleGroup, _super);
    function DataToolbarToggleGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isContentPopup = function () {
            var viewportSize = window.innerWidth;
            var lgBreakpointValue = parseInt(react_tokens_1.global_breakpoint_lg.value);
            return viewportSize < lgBreakpointValue;
        };
        return _this;
    }
    DataToolbarToggleGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props, toggleIcon = _a.toggleIcon, breakpoint = _a.breakpoint, variant = _a.variant, breakpointMods = _a.breakpointMods, spacers = _a.spacers, className = _a.className, children = _a.children, props = __rest(_a, ["toggleIcon", "breakpoint", "variant", "breakpointMods", "spacers", "className", "children"]);
        return (<DataToolbarUtils_1.DataToolbarContext.Consumer>
        {function (_a) {
            var isExpanded = _a.isExpanded, toggleIsExpanded = _a.toggleIsExpanded, expandableContentRef = _a.expandableContentRef, expandableContentId = _a.expandableContentId;
            return (<div className={react_styles_1.css(data_toolbar_1["default"].dataToolbarGroup, variant && react_styles_1.getModifier(data_toolbar_1["default"], variant), util_1.formatBreakpointMods(breakpointMods, data_toolbar_1["default"]), DataToolbarUtils_2.formatSpacers(spacers, 'pf-m-space-items'), react_styles_1.getModifier(data_toolbar_1["default"], 'toggle-group'), react_styles_1.getModifier(data_toolbar_1["default"], "reveal-on-" + breakpoint), className)} {...props}>
              <div className={react_styles_1.css(data_toolbar_1["default"].dataToolbarToggle)}>
                <Button_1.Button variant="plain" onClick={toggleIsExpanded} {...isExpanded && { 'aria-expanded': true }} aria-haspopup={isExpanded && _this.isContentPopup()} aria-controls={expandableContentId}>
                  {toggleIcon}
                </Button_1.Button>
              </div>
              {isExpanded ? ReactDOM.createPortal(children, expandableContentRef.current) : children}
            </div>);
        }}
      </DataToolbarUtils_1.DataToolbarContext.Consumer>);
    };
    DataToolbarToggleGroup.defaultProps = {
        breakpointMods: [],
        spacers: []
    };
    return DataToolbarToggleGroup;
}(React.Component));
exports.DataToolbarToggleGroup = DataToolbarToggleGroup;
