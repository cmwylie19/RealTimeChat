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
exports.Accordion = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a["aria-label"], ariaLabel = _d === void 0 ? '' : _d, _e = _a.headingLevel, headingLevel = _e === void 0 ? 'h3' : _e, _f = _a.asDefinitionList, asDefinitionList = _f === void 0 ? true : _f, props = __rest(_a, ["children", "className", 'aria-label', "headingLevel", "asDefinitionList"]);
    var AccordionList = asDefinitionList ? 'dl' : 'div';
    return (<AccordionList className={react_styles_1.css(accordion_1["default"].accordion, className)} aria-label={ariaLabel} {...props}>
      <AccordionContext_1.AccordionContext.Provider value={{
        ContentContainer: asDefinitionList ? 'dd' : 'div',
        ToggleContainer: asDefinitionList ? 'dt' : headingLevel
    }}>
        {children}
      </AccordionContext_1.AccordionContext.Provider>
    </AccordionList>);
};
