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
var Tooltip_1 = require("../Tooltip");
exports.ClipboardCopyButton = function (_a) {
    var onClick = _a.onClick, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.exitDelay, exitDelay = _c === void 0 ? 100 : _c, _d = _a.entryDelay, entryDelay = _d === void 0 ? 100 : _d, _e = _a.maxWidth, maxWidth = _e === void 0 ? '100px' : _e, _f = _a.position, position = _f === void 0 ? 'top' : _f, _g = _a["aria-label"], ariaLabel = _g === void 0 ? 'Copyable input' : _g, id = _a.id, textId = _a.textId, children = _a.children, props = __rest(_a, ["onClick", "className", "exitDelay", "entryDelay", "maxWidth", "position", 'aria-label', "id", "textId", "children"]);
    return (<Tooltip_1.Tooltip trigger="mouseenter focus click" exitDelay={exitDelay} entryDelay={entryDelay} maxWidth={maxWidth} position={position} content={<div>{children}</div>}>
    <button onClick={onClick} className={react_styles_1.css(clipboard_copy_1["default"].clipboardCopyGroupCopy, className)} aria-label={ariaLabel} id={id} aria-labelledby={id + " " + textId} {...props}>
      <react_icons_1.CopyIcon />
    </button>
  </Tooltip_1.Tooltip>);
};
