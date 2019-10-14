"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = exports.TableContext = exports.SortByDirection = exports.TableVariant = exports.TableGridBreakpoint = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _table = _interopRequireDefault(require("@patternfly/react-styles/css/components/Table/table"));

var _tableGrid = _interopRequireDefault(require("@patternfly/react-styles/css/components/Table/table-grid"));

var _reactCore = require("@patternfly/react-core");

var _reactStyles = require("@patternfly/react-styles");

var _base = require("./base");

var _BodyCell = require("./BodyCell");

var _HeaderCell = require("./HeaderCell");

var _RowWrapper = require("./RowWrapper");

var _BodyWrapper = require("./BodyWrapper");

var _headerUtils = require("./utils/headerUtils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TableGridBreakpoint;
exports.TableGridBreakpoint = TableGridBreakpoint;

(function (TableGridBreakpoint) {
  TableGridBreakpoint["none"] = "";
  TableGridBreakpoint["grid"] = "grid";
  TableGridBreakpoint["gridMd"] = "grid-md";
  TableGridBreakpoint["gridLg"] = "grid-lg";
  TableGridBreakpoint["gridXl"] = "grid-xl";
  TableGridBreakpoint["grid2xl"] = "grid-2xl";
})(TableGridBreakpoint || (exports.TableGridBreakpoint = TableGridBreakpoint = {}));

var TableVariant;
exports.TableVariant = TableVariant;

(function (TableVariant) {
  TableVariant["compact"] = "compact";
})(TableVariant || (exports.TableVariant = TableVariant = {}));

var SortByDirection;
exports.SortByDirection = SortByDirection;

(function (SortByDirection) {
  SortByDirection["asc"] = "asc";
  SortByDirection["desc"] = "desc";
})(SortByDirection || (exports.SortByDirection = SortByDirection = {}));

var TableContext = React.createContext({
  headerData: null,
  headerRows: null,
  rows: []
});
exports.TableContext = TableContext;

var Table =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Table);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Table)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "isSelected", function (row) {
      return row.selected === true;
    });

    _defineProperty(_assertThisInitialized(_this), "areAllRowsSelected", function (rows) {
      if (rows === undefined || rows.length === 0) {
        return false;
      }

      return rows.every(function (row) {
        return _this.isSelected(row) || row.hasOwnProperty('parent') && !row.showSelect;
      });
    });

    return _this;
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ariaLabel = _this$props['aria-label'],
          caption = _this$props.caption,
          header = _this$props.header,
          className = _this$props.className,
          gridBreakPoint = _this$props.gridBreakPoint,
          onSort = _this$props.onSort,
          onSelect = _this$props.onSelect,
          canSelectAll = _this$props.canSelectAll,
          sortBy = _this$props.sortBy,
          children = _this$props.children,
          actions = _this$props.actions,
          actionResolver = _this$props.actionResolver,
          areActionsDisabled = _this$props.areActionsDisabled,
          onCollapse = _this$props.onCollapse,
          onExpand = _this$props.onExpand,
          rowLabeledBy = _this$props.rowLabeledBy,
          dropdownPosition = _this$props.dropdownPosition,
          dropdownDirection = _this$props.dropdownDirection,
          contentId = _this$props.contentId,
          expandId = _this$props.expandId,
          variant = _this$props.variant,
          rows = _this$props.rows,
          cells = _this$props.cells,
          bodyWrapper = _this$props.bodyWrapper,
          rowWrapper = _this$props.rowWrapper,
          borders = _this$props.borders,
          role = _this$props.role,
          props = _objectWithoutProperties(_this$props, ["aria-label", "caption", "header", "className", "gridBreakPoint", "onSort", "onSelect", "canSelectAll", "sortBy", "children", "actions", "actionResolver", "areActionsDisabled", "onCollapse", "onExpand", "rowLabeledBy", "dropdownPosition", "dropdownDirection", "contentId", "expandId", "variant", "rows", "cells", "bodyWrapper", "rowWrapper", "borders", "role"]);

      if (!ariaLabel && !caption && !header && role !== 'presentation') {
        // tslint:disable-next-line:no-console
        console.error('Table: Specify at least one of: header, caption, aria-label');
      }

      var headerData = (0, _headerUtils.calculateColumns)(cells, {
        sortBy: sortBy,
        onSort: onSort,
        onSelect: onSelect,
        canSelectAll: canSelectAll,
        allRowsSelected: onSelect ? this.areAllRowsSelected(rows) : false,
        actions: actions,
        actionResolver: actionResolver,
        areActionsDisabled: areActionsDisabled,
        onCollapse: onCollapse,
        onExpand: onExpand,
        rowLabeledBy: rowLabeledBy,
        expandId: expandId,
        contentId: contentId,
        dropdownPosition: dropdownPosition,
        dropdownDirection: dropdownDirection,
        firstUserColumnIndex: [onCollapse, onSelect].filter(function (callback) {
          return callback;
        }).length
      });
      return React.createElement(TableContext.Provider, {
        value: {
          headerData: headerData,
          headerRows: null,
          rows: rows
        }
      }, header, React.createElement(_base.Provider, _extends({}, props, {
        "aria-label": ariaLabel,
        renderers: {
          body: {
            wrapper: bodyWrapper || _BodyWrapper.BodyWrapper,
            row: rowWrapper || _RowWrapper.RowWrapper,
            cell: _BodyCell.BodyCell
          },
          header: {
            cell: _HeaderCell.HeaderCell
          }
        },
        columns: headerData,
        role: role,
        className: (0, _reactStyles.css)(_table["default"].table, gridBreakPoint && (0, _reactStyles.getModifier)(_tableGrid["default"], gridBreakPoint), (0, _reactStyles.getModifier)(_table["default"], variant), (onCollapse && variant === TableVariant.compact || onExpand) && _table["default"].modifiers.expandable, variant === TableVariant.compact && borders === false ? _table["default"].modifiers.noBorderRows : null, className)
      }), caption && React.createElement("caption", null, caption), children));
    }
  }]);

  return Table;
}(React.Component);

exports.Table = Table;

_defineProperty(Table, "propTypes", {
  'aria-label': _propTypes["default"].string,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  variant: _propTypes["default"].oneOf(['compact']),
  borders: _propTypes["default"].bool,
  gridBreakPoint: _propTypes["default"].oneOf(['', 'grid', 'grid-md', 'grid-lg', 'grid-xl', 'grid-2xl']),
  sortBy: _propTypes["default"].shape({
    index: _propTypes["default"].number,
    direction: _propTypes["default"].oneOf(['asc', 'desc'])
  }),
  onCollapse: _propTypes["default"].func,
  onExpand: _propTypes["default"].func,
  onSelect: _propTypes["default"].func,
  canSelectAll: _propTypes["default"].bool,
  onSort: _propTypes["default"].func,
  actions: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].shape({
    isSeparator: _propTypes["default"].bool,
    itemKey: _propTypes["default"].string,
    title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
    onClick: _propTypes["default"].func.isRequired
  }), _propTypes["default"].shape({
    isSeparator: _propTypes["default"].bool.isRequired
  })])),
  actionResolver: _propTypes["default"].func,
  areActionsDisabled: _propTypes["default"].func,
  header: _propTypes["default"].node,
  caption: _propTypes["default"].node,
  rowLabeledBy: _propTypes["default"].string,
  expandId: _propTypes["default"].string,
  contentId: _propTypes["default"].string,
  dropdownPosition: _propTypes["default"].oneOf(['right', 'left']),
  dropdownDirection: _propTypes["default"].oneOf(['up', 'down']),
  rows: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].shape({
    cells: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].shape({
      title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
      props: _propTypes["default"].any
    })])),
    isOpen: _propTypes["default"].bool,
    parent: _propTypes["default"].number,
    compoundParent: _propTypes["default"].number,
    props: _propTypes["default"].any,
    fullWidth: _propTypes["default"].bool,
    noPadding: _propTypes["default"].bool,
    showSelect: _propTypes["default"].bool,
    isExpanded: _propTypes["default"].bool,
    isFirstVisible: _propTypes["default"].bool,
    isLastVisible: _propTypes["default"].bool,
    selected: _propTypes["default"].bool
  }), _propTypes["default"].arrayOf(_propTypes["default"].string)])).isRequired,
  cells: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].shape({
    title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),
    transforms: _propTypes["default"].arrayOf(_propTypes["default"].func),
    cellTransforms: _propTypes["default"].arrayOf(_propTypes["default"].func),
    columnTransforms: _propTypes["default"].arrayOf(_propTypes["default"].func),
    formatters: _propTypes["default"].arrayOf(_propTypes["default"].func),
    cellFormatters: _propTypes["default"].arrayOf(_propTypes["default"].func),
    props: _propTypes["default"].any,
    data: _propTypes["default"].any,
    header: _propTypes["default"].any,
    cell: _propTypes["default"].any
  }), _propTypes["default"].string])).isRequired,
  bodyWrapper: _propTypes["default"].any
});

_defineProperty(Table, "defaultProps", {
  "children": null,
  "className": '',
  "variant": null,
  "borders": true,
  "rowLabeledBy": 'simple-node',
  "expandId": 'expandable-toggle',
  "contentId": 'expanded-content',
  "dropdownPosition": _reactCore.DropdownPosition.right,
  "dropdownDirection": _reactCore.DropdownDirection.down,
  "header": undefined,
  "caption": undefined,
  'aria-label': undefined,
  "gridBreakPoint": TableGridBreakpoint.gridMd,
  "role": 'grid',
  "canSelectAll": true
});
//# sourceMappingURL=Table.js.map