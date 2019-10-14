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
var Title_1 = require("../Title");
exports.PopoverHeader = function (_a) {
    var children = _a.children, id = _a.id, props = __rest(_a, ["children", "id"]);
    return (<Title_1.Title headingLevel="h6" size={Title_1.TitleSize.xl} id={id} {...props}>
    {children}
  </Title_1.Title>);
};
