"use strict";
exports.__esModule = true;
var React = require("react");
var react_styles_1 = require("@patternfly/react-styles");
var dropdownConstants_1 = require("./dropdownConstants");
exports.DropdownGroup = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.label, label = _d === void 0 ? '' : _d;
    return (<dropdownConstants_1.DropdownContext.Consumer>
    {function (_a) {
        var sectionClass = _a.sectionClass, sectionTitleClass = _a.sectionTitleClass, sectionComponent = _a.sectionComponent;
        var SectionComponent = sectionComponent;
        return (<SectionComponent className={react_styles_1.css(sectionClass, className)}>
          {label && (<h1 className={react_styles_1.css(sectionTitleClass)} aria-hidden>
              {label}
            </h1>)}
          <ul role="none">{children}</ul>
        </SectionComponent>);
    }}
  </dropdownConstants_1.DropdownContext.Consumer>);
};
