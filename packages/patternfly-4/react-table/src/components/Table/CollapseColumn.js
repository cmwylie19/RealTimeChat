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
var react_icons_1 = require("@patternfly/react-icons");
var react_styles_1 = require("@patternfly/react-styles");
var react_core_1 = require("@patternfly/react-core");
var table_1 = require("@patternfly/react-styles/css/components/Table/table");
exports.CollapseColumn = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.children, children = _c === void 0 ? null : _c, isOpen = _a.isOpen, onToggle = _a.onToggle, props = __rest(_a, ["className", "children", "isOpen", "onToggle"]);
    return (<React.Fragment>
      {isOpen !== undefined && (<react_core_1.Button className={react_styles_1.css(className, isOpen && table_1["default"].modifiers.expanded)} {...props} variant="plain" aria-label="Details" onClick={onToggle} aria-expanded={isOpen}>
          <react_icons_1.AngleDownIcon />
        </react_core_1.Button>)}
      {children}
    </React.Fragment>);
};
