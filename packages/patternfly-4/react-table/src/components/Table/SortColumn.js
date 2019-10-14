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
var react_icons_1 = require("@patternfly/react-icons");
var react_styles_1 = require("@patternfly/react-styles");
var table_1 = require("@patternfly/react-styles/css/components/Table/table");
var Table_1 = require("./Table");
exports.SortColumn = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.isSortedBy, isSortedBy = _d === void 0 ? false : _d, _e = _a.onSort, onSort = _e === void 0 ? null : _e, _f = _a.sortDirection, sortDirection = _f === void 0 ? '' : _f, props = __rest(_a, ["children", "className", "isSortedBy", "onSort", "sortDirection"]);
    var SortedByIcon;
    if (isSortedBy) {
        SortedByIcon = sortDirection === Table_1.SortByDirection.asc ? react_icons_1.LongArrowAltUpIcon : react_icons_1.LongArrowAltDownIcon;
    }
    else {
        SortedByIcon = react_icons_1.ArrowsAltVIcon;
    }
    return (<button {...props} className={react_styles_1.css(className)} onClick={function (event) { return onSort && onSort(event); }}>
      {children}
      <span className={react_styles_1.css(table_1["default"].tableSortIndicator)}>
        <SortedByIcon />
      </span>
    </button>);
};
