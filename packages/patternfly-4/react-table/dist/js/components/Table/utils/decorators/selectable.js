"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectable = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _table = _interopRequireDefault(require("@patternfly/react-styles/css/components/Table/table"));

var _SelectColumn = require("../../SelectColumn");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var selectable = function selectable(label, _ref) {
  var rowIndex = _ref.rowIndex,
      columnIndex = _ref.columnIndex,
      rowData = _ref.rowData,
      column = _ref.column,
      property = _ref.property;
  var _column$extraParams = column.extraParams,
      onSelect = _column$extraParams.onSelect,
      allRowsSelected = _column$extraParams.allRowsSelected,
      _column$extraParams$r = _column$extraParams.rowLabeledBy,
      rowLabeledBy = _column$extraParams$r === void 0 ? 'simple-node' : _column$extraParams$r;
  var extraData = {
    rowIndex: rowIndex,
    columnIndex: columnIndex,
    column: column,
    property: property
  };

  if (rowData && rowData.hasOwnProperty('parent') && !rowData.showSelect) {
    return {
      component: 'td',
      isVisible: true,
      scope: ''
    };
  }

  var rowId = rowIndex !== undefined ? rowIndex : -1;

  function selectClick(event) {
    var selected = rowIndex === undefined ? event.target.checked : rowData && !rowData.selected; // todo: change event type to React.FormEvent<HTMLInputElement> in the future, breaking change a.t.m.
    // tslint:disable-next-line:no-unused-expression

    onSelect && onSelect(event, selected, rowId, rowData, extraData);
  }

  var customProps = _objectSpread({}, rowId !== -1 ? {
    "checked": rowData && !!rowData.selected,
    'aria-labelledby': rowLabeledBy + rowIndex
  } : {
    "checked": allRowsSelected,
    'aria-label': 'Select all rows'
  });

  return {
    className: (0, _reactStyles.css)(_table["default"].tableCheck),
    component: 'td',
    scope: '',
    isVisible: true,
    children: React.createElement(_SelectColumn.SelectColumn, _extends({}, customProps, {
      onSelect: selectClick,
      name: rowId !== -1 ? "checkrow".concat(rowIndex) : 'check-all'
    }), label)
  };
};

exports.selectable = selectable;
//# sourceMappingURL=selectable.js.map