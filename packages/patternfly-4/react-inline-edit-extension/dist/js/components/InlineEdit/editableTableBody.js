"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactTable = require("@patternfly/react-table");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("./constants");

var _utils = require("./utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = _objectSpread({}, _reactTable.TableBody.propTypes, {
  editConfig: _propTypes["default"].shape({
    editConfirmationType: _propTypes["default"].oneOf(Object.values(_constants.TableEditConfirmation)),
    onEditCellClicked: _propTypes["default"].func,
    onEditConfirmed: _propTypes["default"].func,
    onEditCanceled: _propTypes["default"].func
  }).isRequired,

  /** Function that is fired when user clicks on a row if not editing.  */
  onRowClick: _propTypes["default"].func
});

var defaultProps = _objectSpread({}, _reactTable.TableBody.defaultProps, {
  editConfig: null,
  onRowClick: function onRowClick() {
    return undefined;
  }
});

var resolveCascadeEditability = function resolveCascadeEditability(rows) {
  var isRowExpandedIndexes = new Set(rows.map(function (row, idx) {
    return (0, _reactTable.isRowExpanded)(row, rows) ? idx : null;
  }).filter(function (row) {
    return row !== null;
  })); // flag parents and their children which are edited together

  rows.filter(function (row, idx) {
    return row.parent !== undefined && row.isEditing && isRowExpandedIndexes.has(idx) && row.isEditableTogetherWithParent && rows[row.parent].isEditing;
  }).forEach(function (row) {
    rows[row.parent].isChildEditing = true;
    row.isParentEditing = true;
  });
  var lastVisibleRow = rows.filter(function (row, idx) {
    return !row.parent || isRowExpandedIndexes.has(idx);
  }).pop(); // flag last parent row if there are only descendants under it

  if (lastVisibleRow && lastVisibleRow.isParentEditing) {
    var parentRow = lastVisibleRow;

    while (parentRow.parent !== undefined && parentRow.isEditableTogetherWithParent) {
      parentRow = rows[parentRow.parent];
    }

    parentRow.isLastVisibleParent = true;
  }
};

var onRow = function onRow(event, row, rowProps, computedData, _ref) {
  var onRowClick = _ref.onRowClick,
      editConfig = _ref.editConfig;
  var target = event.target;
  var cell = target.closest('[data-key]');
  var cellNumber = parseInt(cell && cell.getAttribute('data-key'), 10);
  var hasCellNumber = !Number.isNaN(cellNumber);
  var onEditCellClicked;

  if (hasCellNumber && editConfig && typeof editConfig.onEditCellClicked === 'function') {
    // resolve closest (e.g. for dropdowns) usable id of a clicked element inside a cell
    var idElement = target.closest('[id]');
    var elementId = idElement && cell.contains(idElement) ? idElement.getAttribute('id') || null : null;

    if (!elementId) {
      (0, _utils.showIdWarnings)(row, target);
    }

    onEditCellClicked = function onEditCellClicked() {
      editConfig.onEditCellClicked(event, row, _objectSpread({}, rowProps, {
        columnIndex: cellNumber,
        elementId: elementId
      }));
    };
  } // give priority to fire onChange/onBlur callbacks


  setTimeout(function () {
    if (!row.isEditing) {
      onRowClick(event, row, rowProps, computedData);

      if (onEditCellClicked) {
        // edit cell after rerender
        setTimeout(onEditCellClicked, 0);
      }
    } else if (onEditCellClicked) {
      onEditCellClicked();
    }
  }, 0);
};

var Body = function Body(_ref2) {
  var BodyComponent = _ref2.BodyComponent,
      rows = _ref2.rows,
      editConfig = _ref2.editConfig,
      _onRowClick = _ref2.onRowClick,
      props = _objectWithoutProperties(_ref2, ["BodyComponent", "rows", "editConfig", "onRowClick"]);

  var isTableEditing = rows.some(function (row) {
    return row.isEditing;
  });
  var mappedRows = rows.map(function (row) {
    return _objectSpread({}, row, {
      editConfig: editConfig,
      isTableEditing: isTableEditing
    });
  });
  resolveCascadeEditability(mappedRows);
  return _react["default"].createElement(BodyComponent, _extends({}, props, {
    rows: mappedRows,
    onRowClick: function onRowClick(event, row, rowProps, computedData) {
      return onRow(event, row, rowProps, computedData, {
        onRowClick: _onRowClick,
        editConfig: editConfig
      });
    }
  }));
};

Body.propTypes = {
  BodyComponent: _propTypes["default"].any.isRequired,
  rows: _propTypes["default"].array,
  editConfig: _propTypes["default"].any,
  onRowClick: _propTypes["default"].func
};
Body.defaultProps = {
  rows: [],
  editConfig: null,
  onRowClick: function onRowClick() {
    return undefined;
  }
};

var editableTableBody = function editableTableBody(BodyComponent) {
  var InlineEditBody = function InlineEditBody(_ref3) {
    var editConfig = _ref3.editConfig,
        onRowClick = _ref3.onRowClick,
        props = _objectWithoutProperties(_ref3, ["editConfig", "onRowClick"]);

    return _react["default"].createElement(_reactTable.TableContext.Consumer, null, function (_ref4) {
      var rows = _ref4.rows,
          consumedProps = _objectWithoutProperties(_ref4, ["rows"]);

      return _react["default"].createElement(Body, _extends({}, consumedProps, {
        rows: rows
      }, props, {
        editConfig: editConfig,
        onRowClick: onRowClick,
        BodyComponent: BodyComponent
      }));
    });
  };

  InlineEditBody.propTypes = propTypes;
  InlineEditBody.defaultProps = defaultProps;
  return InlineEditBody;
};

var _default = editableTableBody;
exports["default"] = _default;
//# sourceMappingURL=editableTableBody.js.map