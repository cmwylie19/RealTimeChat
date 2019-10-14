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
var alert_1 = require("@patternfly/react-styles/css/components/Alert/alert");
var accessibility_1 = require("@patternfly/react-styles/css/utilities/Accessibility/accessibility");
var AlertIcon_1 = require("./AlertIcon");
var util_1 = require("../../helpers/util");
var AlertVariant;
(function (AlertVariant) {
    AlertVariant["success"] = "success";
    AlertVariant["danger"] = "danger";
    AlertVariant["warning"] = "warning";
    AlertVariant["info"] = "info";
    AlertVariant["default"] = "default";
})(AlertVariant = exports.AlertVariant || (exports.AlertVariant = {}));
exports.Alert = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? AlertVariant.info : _b, _c = _a.isInline, isInline = _c === void 0 ? false : _c, _d = _a.variantLabel, variantLabel = _d === void 0 ? util_1.capitalize(variant) + " alert:" : _d, _e = _a["aria-label"], ariaLabel = _e === void 0 ? util_1.capitalize(variant) + " Alert" : _e, _f = _a.action, action = _f === void 0 ? null : _f, title = _a.title, _g = _a.children, children = _g === void 0 ? '' : _g, _h = _a.className, className = _h === void 0 ? '' : _h, props = __rest(_a, ["variant", "isInline", "variantLabel", 'aria-label', "action", "title", "children", "className"]);
    var readerTitle = (<React.Fragment>
      <span className={react_styles_1.css(accessibility_1["default"].screenReader)}>{variantLabel}</span>
      {title}
    </React.Fragment>);
    var customClassName = react_styles_1.css(alert_1["default"].alert, isInline && alert_1["default"].modifiers.inline, (variant !== AlertVariant["default"]) && react_styles_1.getModifier(alert_1["default"], variant, alert_1["default"].modifiers.info), className);
    return (<div {...props} className={customClassName} aria-label={ariaLabel}>
      <AlertIcon_1.AlertIcon variant={variant}/>
      <h4 className={react_styles_1.css(alert_1["default"].alertTitle)}>{readerTitle}</h4>
      {children && (<div className={react_styles_1.css(alert_1["default"].alertDescription)}>
          {children}
        </div>)}
      {action && (<div className={react_styles_1.css(alert_1["default"].alertAction)}>{React.cloneElement(action, { title: title, variantLabel: variantLabel })}</div>)}
    </div>);
};
