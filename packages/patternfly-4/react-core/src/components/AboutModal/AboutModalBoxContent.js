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
var about_modal_box_1 = require("@patternfly/react-styles/css/components/AboutModalBox/about-modal-box");
var content_1 = require("@patternfly/react-styles/css/components/Content/content");
exports.AboutModalBoxContent = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, trademark = _a.trademark, id = _a.id, _c = _a.noAboutModalBoxContentContainer, noAboutModalBoxContentContainer = _c === void 0 ? false : _c, props = __rest(_a, ["children", "className", "trademark", "id", "noAboutModalBoxContentContainer"]);
    return (<div className={react_styles_1.css(about_modal_box_1["default"].aboutModalBoxContent, className)} id={id} {...props}>
    <div className={react_styles_1.css('pf-c-about-modal-box__body')}>
      {noAboutModalBoxContentContainer ? children : <div className={react_styles_1.css(content_1["default"].content)}>{children}</div>}
    </div>
    <p className={react_styles_1.css(about_modal_box_1["default"].aboutModalBoxStrapline)}>
      {trademark}
    </p>
  </div>);
};
