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
var data_list_1 = require("@patternfly/react-styles/css/components/DataList/data-list");
exports.DataListContent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.children, children = _c === void 0 ? null : _c, _d = _a.id, id = _d === void 0 ? '' : _d, _e = _a.isHidden, isHidden = _e === void 0 ? false : _e, ariaLabel = _a["aria-label"], _f = _a.noPadding, noPadding = _f === void 0 ? false : _f, _g = _a.rowid, rowid = _g === void 0 ? '' : _g, props = __rest(_a, ["className", "children", "id", "isHidden", 'aria-label', "noPadding", "rowid"]);
    return (<section id={id} className={react_styles_1.css(data_list_1["default"].dataListExpandableContent, className)} hidden={isHidden} aria-label={ariaLabel} {...props}>
    <div className={react_styles_1.css(data_list_1["default"].dataListExpandableContentBody, noPadding && data_list_1["default"].modifiers.noPadding)}>{children}</div>
  </section>);
};
