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
var table_1 = require("@patternfly/react-styles/css/components/Table/table");
var headerUtils_1 = require("./utils/headerUtils");
exports.BodyWrapper = function (_a) {
    var mappedRows = _a.mappedRows, _b = _a.rows, rows = _b === void 0 ? [] : _b, onCollapse = _a.onCollapse, tbodyRef = _a.tbodyRef, headerRows = _a.headerRows, props = __rest(_a, ["mappedRows", "rows", "onCollapse", "tbodyRef", "headerRows"]);
    if (mappedRows && mappedRows.some(function (row) { return row.hasOwnProperty('parent'); })) {
        return (<React.Fragment>
        {headerUtils_1.mapOpenedRows(mappedRows, props.children).map(function (oneRow, key) { return (<tbody {...props} className={react_styles_1.css(oneRow.isOpen && table_1["default"].modifiers.expanded)} key={"tbody-" + key} ref={tbodyRef}>
            {oneRow.rows}
          </tbody>); })}
      </React.Fragment>);
    }
    return <tbody {...props} ref={tbodyRef}/>;
};
