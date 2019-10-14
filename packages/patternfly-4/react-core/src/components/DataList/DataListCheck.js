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
exports.DataListCheck = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, onChange = _a.onChange, _c = _a.isValid, isValid = _c === void 0 ? true : _c, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, _e = _a.isChecked, isChecked = _e === void 0 ? null : _e, _f = _a.checked, checked = _f === void 0 ? null : _f, props = __rest(_a, ["className", "onChange", "isValid", "isDisabled", "isChecked", "checked"]);
    return (<div className={react_styles_1.css(data_list_1["default"].dataListItemControl, className)}>
    <div className={react_styles_1.css('pf-c-data-list__check')}>
      <input {...props} type="checkbox" onChange={function (event) { return onChange(event.currentTarget.checked, event); }} aria-invalid={!isValid} disabled={isDisabled} defaultChecked={isChecked || checked}/>
    </div>
  </div>);
};
