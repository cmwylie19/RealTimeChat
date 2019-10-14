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
var clipboard_copy_1 = require("@patternfly/react-styles/css/components/ClipboardCopy/clipboard-copy");
var react_styles_1 = require("@patternfly/react-styles");
var react_icons_1 = require("@patternfly/react-icons");
exports.ClipboardCopyToggle = function (_a) {
    var onClick = _a.onClick, _b = _a.className, className = _b === void 0 ? '' : _b, id = _a.id, textId = _a.textId, contentId = _a.contentId, _c = _a.isExpanded, isExpanded = _c === void 0 ? false : _c, props = __rest(_a, ["onClick", "className", "id", "textId", "contentId", "isExpanded"]);
    return (<button onClick={onClick} className={react_styles_1.css(clipboard_copy_1["default"].clipboardCopyGroupToggle, className)} id={id} aria-labelledby={id + " " + textId} aria-controls={id + " " + contentId} aria-expanded={isExpanded} {...props}>
      <react_icons_1.AngleRightIcon aria-hidden="true" className={react_styles_1.css(clipboard_copy_1["default"].clipboardCopyGroupToggleIcon)}/>
    </button>);
};
