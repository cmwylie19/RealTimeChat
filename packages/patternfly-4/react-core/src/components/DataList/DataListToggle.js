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
var react_icons_1 = require("@patternfly/react-icons");
var data_list_1 = require("@patternfly/react-styles/css/components/DataList/data-list");
var Button_1 = require("../Button");
exports.DataListToggle = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.isExpanded, isExpanded = _c === void 0 ? false : _c, _d = _a["aria-controls"], ariaControls = _d === void 0 ? '' : _d, _e = _a["aria-label"], ariaLabel = _e === void 0 ? 'Details' : _e, _f = _a["aria-labelledby"], ariaLabelledBy = _f === void 0 ? '' : _f, _g = _a.rowid, rowid = _g === void 0 ? '' : _g, id = _a.id, props = __rest(_a, ["className", "isExpanded", 'aria-controls', 'aria-label', 'aria-labelledby', "rowid", "id"]);
    return (<div className={react_styles_1.css(data_list_1["default"].dataListItemControl, className)} {...props}>
    <div className={react_styles_1.css(data_list_1["default"].dataListToggle)}>
      <Button_1.Button id={id} variant={Button_1.ButtonVariant.plain} aria-controls={ariaControls !== '' && ariaControls} aria-label={ariaLabel} aria-labelledby={ariaLabel !== 'Details' ? null : rowid + " " + id} aria-expanded={isExpanded}>
        <react_icons_1.AngleRightIcon />
      </Button_1.Button>
    </div>
  </div>);
};
