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
var progress_1 = require("@patternfly/react-styles/css/components/Progress/progress");
var react_styles_1 = require("@patternfly/react-styles");
exports.ProgressBar = function (_a) {
    var ariaProps = _a.ariaProps, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.children, children = _c === void 0 ? null : _c, value = _a.value, props = __rest(_a, ["ariaProps", "className", "children", "value"]);
    return (<div {...props} className={react_styles_1.css(progress_1["default"].progressBar, className)} {...ariaProps}>
    <div className={react_styles_1.css(progress_1["default"].progressIndicator)} style={{ width: value + "%" }}>
      <span className={react_styles_1.css(progress_1["default"].progressMeasure)}>{children}</span>
    </div>
  </div>);
};
