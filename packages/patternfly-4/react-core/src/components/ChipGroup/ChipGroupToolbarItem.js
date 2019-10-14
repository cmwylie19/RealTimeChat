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
var chip_group_1 = require("@patternfly/react-styles/css/components/ChipGroup/chip-group");
var ChipGroup_1 = require("./ChipGroup");
exports.ChipGroupToolbarItem = function (_a) {
    var _b = _a.categoryName, categoryName = _b === void 0 ? '' : _b, _c = _a.children, children = _c === void 0 ? null : _c, _d = _a.className, className = _d === void 0 ? '' : _d, props = __rest(_a, ["categoryName", "children", "className"]);
    if (React.Children.count(children)) {
        return (<ChipGroup_1.ChipGroupContext.Consumer>
          {function (HeadingLevel) {
            return (<ul className={react_styles_1.css(chip_group_1["default"].chipGroup, chip_group_1["default"].modifiers.toolbar, className)} {...props}>
                <li>
                  <HeadingLevel className={react_styles_1.css(chip_group_1["default"].chipGroupLabel)}>{categoryName}</HeadingLevel>
                  <ul className={react_styles_1.css(chip_group_1["default"].chipGroup)}>{children}</ul>
                </li>
              </ul>);
        }}
        </ChipGroup_1.ChipGroupContext.Consumer>);
    }
    return null;
};
