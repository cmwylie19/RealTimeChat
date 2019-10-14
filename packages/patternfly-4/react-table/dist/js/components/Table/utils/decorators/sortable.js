"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortable = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _table = _interopRequireDefault(require("@patternfly/react-styles/css/components/Table/table"));

var _button = _interopRequireDefault(require("@patternfly/react-styles/css/components/Button/button"));

var _Table = require("../../Table");

var _SortColumn = require("../../SortColumn");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var sortable = function sortable(label, _ref) {
  var columnIndex = _ref.columnIndex,
      column = _ref.column,
      property = _ref.property;
  var _column$extraParams = column.extraParams,
      sortBy = _column$extraParams.sortBy,
      onSort = _column$extraParams.onSort;
  var extraData = {
    columnIndex: columnIndex,
    column: column,
    property: property
  };
  var isSortedBy = sortBy && columnIndex === sortBy.index;

  function sortClicked(event) {
    var reversedDirection;

    if (!isSortedBy) {
      reversedDirection = _Table.SortByDirection.asc;
    } else {
      reversedDirection = sortBy.direction === _Table.SortByDirection.asc ? _Table.SortByDirection.desc : _Table.SortByDirection.asc;
    } // tslint:disable-next-line:no-unused-expression


    onSort && onSort(event, columnIndex, reversedDirection, extraData);
  }

  return {
    "className": (0, _reactStyles.css)(_table["default"].tableSort, isSortedBy && _table["default"].modifiers.selected),
    'aria-sort': isSortedBy ? "".concat(sortBy.direction, "ending") : 'none',
    "children": React.createElement(_SortColumn.SortColumn, {
      isSortedBy: isSortedBy,
      sortDirection: isSortedBy ? sortBy.direction : '',
      onSort: sortClicked,
      className: (0, _reactStyles.css)(_button["default"].button, _button["default"].modifiers.plain)
    }, label)
  };
};

exports.sortable = sortable;
//# sourceMappingURL=sortable.js.map