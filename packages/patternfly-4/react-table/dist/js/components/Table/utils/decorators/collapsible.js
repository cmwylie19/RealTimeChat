"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expandedRow = exports.expandable = exports.collapsible = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _table = _interopRequireDefault(require("@patternfly/react-styles/css/components/Table/table"));

var _CollapseColumn = require("../../CollapseColumn");

var _ExpandableRowContent = require("../../ExpandableRowContent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var collapsible = function collapsible(value, _ref) {
  var rowIndex = _ref.rowIndex,
      columnIndex = _ref.columnIndex,
      rowData = _ref.rowData,
      column = _ref.column,
      property = _ref.property;
  var _column$extraParams = column.extraParams,
      onCollapse = _column$extraParams.onCollapse,
      _column$extraParams$r = _column$extraParams.rowLabeledBy,
      rowLabeledBy = _column$extraParams$r === void 0 ? 'simple-node' : _column$extraParams$r,
      _column$extraParams$e = _column$extraParams.expandId,
      expandId = _column$extraParams$e === void 0 ? 'expand-toggle' : _column$extraParams$e;
  var extraData = {
    rowIndex: rowIndex,
    columnIndex: columnIndex,
    column: column,
    property: property
  };

  function onToggle(event) {
    // tslint:disable-next-line:no-unused-expression
    onCollapse && onCollapse(event, rowIndex, rowData && !rowData.isOpen, rowData, extraData);
  }

  return {
    className: rowData.isOpen !== undefined && (0, _reactStyles.css)(_table["default"].tableToggle),
    isVisible: !rowData.fullWidth,
    children: React.createElement(_CollapseColumn.CollapseColumn, {
      "aria-labelledby": "".concat(rowLabeledBy).concat(rowIndex, " ").concat(expandId).concat(rowIndex),
      onToggle: onToggle,
      id: expandId + rowIndex,
      isOpen: rowData && rowData.isOpen
    }, value)
  };
};

exports.collapsible = collapsible;

var expandable = function expandable(value, _ref2) {
  var rowData = _ref2.rowData;
  return rowData.hasOwnProperty('parent') ? React.createElement(_ExpandableRowContent.ExpandableRowContent, null, value) : value;
};

exports.expandable = expandable;

var expandedRow = function expandedRow(colSpan) {
  var expandedRowFormatter = function expandedRowFormatter(value, _ref3) {
    var rowIndex = _ref3.rowIndex,
        rowData = _ref3.rowData,
        _ref3$column$extraPar = _ref3.column.extraParams.contentId,
        contentId = _ref3$column$extraPar === void 0 ? 'expanded-content' : _ref3$column$extraPar;
    return rowData.hasOwnProperty('parent') && {
      // todo: rewrite this logic, it is not type safe
      colSpan: colSpan + !!rowData.fullWidth,
      id: contentId + rowIndex,
      className: rowData.noPadding && (0, _reactStyles.css)(_table["default"].modifiers.noPadding)
    };
  };

  return expandedRowFormatter;
};

exports.expandedRow = expandedRow;
//# sourceMappingURL=collapsible.js.map