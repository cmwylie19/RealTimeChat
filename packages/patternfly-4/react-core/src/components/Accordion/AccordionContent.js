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
var AccordionContext_1 = require("./AccordionContext");
exports.AccordionContent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.children, children = _c === void 0 ? null : _c, _d = _a.id, id = _d === void 0 ? '' : _d, _e = _a.isHidden, isHidden = _e === void 0 ? false : _e, _f = _a.isFixed, isFixed = _f === void 0 ? false : _f, _g = _a["aria-label"], ariaLabel = _g === void 0 ? '' : _g, component = _a.component, props = __rest(_a, ["className", "children", "id", "isHidden", "isFixed", 'aria-label', "component"]);
    return (<AccordionContext_1.AccordionContext.Consumer>
    {function (_a) {
        var ContentContainer = _a.ContentContainer;
        var Container = component || ContentContainer;
        return (<Container id={id} className={react_styles_1.css(accordion_1["default"].accordionExpandedContent, isFixed && accordion_1["default"].modifiers.fixed, !isHidden && accordion_1["default"].modifiers.expanded, className)} hidden={isHidden} aria-label={ariaLabel} {...props}>
          <div className={react_styles_1.css(accordion_1["default"].accordionExpandedContentBody)}>{children}</div>
        </Container>);
    }}
  </AccordionContext_1.AccordionContext.Consumer>);
};
