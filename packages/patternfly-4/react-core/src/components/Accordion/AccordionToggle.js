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
var react_styles_1 = require("@patternfly/react-styles");
var accordion_1 = require("@patternfly/react-styles/css/components/Accordion/accordion");
var react_icons_1 = require("@patternfly/react-icons");
var AccordionContext_1 = require("./AccordionContext");
exports.AccordionToggle = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, id = _a.id, _c = _a.isExpanded, isExpanded = _c === void 0 ? false : _c, _d = _a.children, children = _d === void 0 ? null : _d, component = _a.component, props = __rest(_a, ["className", "id", "isExpanded", "children", "component"]);
    return (<AccordionContext_1.AccordionContext.Consumer>
    {function (_a) {
        var ToggleContainer = _a.ToggleContainer;
        var Container = component || ToggleContainer;
        return (<Container>
          <button id={id} className={react_styles_1.css(accordion_1["default"].accordionToggle, isExpanded && accordion_1["default"].modifiers.expanded, className)} {...props} aria-expanded={isExpanded}>
            <span className={react_styles_1.css(accordion_1["default"].accordionToggleText)}>{children}</span>
            <react_icons_1.AngleRightIcon className={react_styles_1.css(accordion_1["default"].accordionToggleIcon)}/>
          </button>
        </Container>);
    }}
  </AccordionContext_1.AccordionContext.Consumer>);
};
