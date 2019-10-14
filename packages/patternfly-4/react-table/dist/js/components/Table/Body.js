"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableBody = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _base = require("./base");

var _Table = require("./Table");

var _utils = require("./utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var flagVisibility = function flagVisibility(rows) {
  var visibleRows = rows.filter(function (oneRow) {
    return !oneRow.parent || oneRow.isExpanded;
  });

  if (visibleRows.length > 0) {
    visibleRows[0].isFirstVisible = true;
    visibleRows[visibleRows.length - 1].isLastVisible = true;
  }
};

var ContextBody =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContextBody, _React$Component);

  function ContextBody() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ContextBody);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ContextBody)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onRow", function (row, rowProps) {
      var _this$props = _this.props,
          onRowClick = _this$props.onRowClick,
          onRow = _this$props.onRow;

      var extendedRowProps = _objectSpread({}, rowProps, {}, onRow ? onRow(row, rowProps) : {});

      return {
        row: row,
        rowProps: extendedRowProps,
        onMouseDown: function onMouseDown(event) {
          var computedData = {
            isInput: event.target.tagName !== 'INPUT',
            isButton: event.target.tagName !== 'BUTTON'
          };
          onRowClick(event, row, rowProps, computedData);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "mapCells", function (headerData, row, rowKey) {
      // column indexes start after generated optional columns
      var additionalColsIndexShift = headerData[0].extraParams.firstUserColumnIndex;
      return _objectSpread({}, row && (row.cells || row).reduce(function (acc, cell, cellIndex) {
        var isCellObject = cell === Object(cell);

        var mappedCell = _defineProperty({}, headerData[cellIndex + additionalColsIndexShift].property, {
          title: isCellObject ? cell.title : cell,
          props: _objectSpread({
            isVisible: true
          }, isCellObject ? cell.props : null)
        }); // increment the shift index when a cell spans multiple columns


        if (isCellObject && cell.props && cell.props.colSpan) {
          additionalColsIndexShift += cell.props.colSpan - 1;
        }

        return _objectSpread({}, acc, {}, mappedCell);
      }, {
        id: row.id !== undefined ? row.id : rowKey
      }));
    });

    return _this;
  }

  _createClass(ContextBody, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          headerData = _this$props2.headerData,
          rows = _this$props2.rows,
          rowKey = _this$props2.rowKey,
          children = _this$props2.children,
          onRowClick = _this$props2.onRowClick,
          props = _objectWithoutProperties(_this$props2, ["className", "headerData", "rows", "rowKey", "children", "onRowClick"]);

      var mappedRows;

      if (headerData.length > 0) {
        mappedRows = rows.map(function (oneRow, oneRowKey) {
          return _objectSpread({}, oneRow, {}, _this2.mapCells(headerData, oneRow, oneRowKey), {
            isExpanded: (0, _utils.isRowExpanded)(oneRow, rows),
            isFirst: oneRowKey === 0,
            isLast: oneRowKey === rows.length - 1,
            isFirstVisible: false,
            isLastVisible: false
          });
        });
        flagVisibility(mappedRows);
      }

      return React.createElement(React.Fragment, null, mappedRows && React.createElement(_base.Body, _extends({}, props, {
        mappedRows: mappedRows,
        rows: mappedRows,
        onRow: this.onRow,
        rowKey: rowKey,
        className: className
      })));
    }
  }]);

  return ContextBody;
}(React.Component);

_defineProperty(ContextBody, "propTypes", {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  headerData: _propTypes["default"].arrayOf(_propTypes["default"].any),
  rows: _propTypes["default"].arrayOf(_propTypes["default"].any),
  rowKey: _propTypes["default"].any,
  onRowClick: _propTypes["default"].any,
  onRow: _propTypes["default"].any
});

var TableBody = function TableBody(_ref) {
  var _ref$onRow = _ref.onRow,
      onRow = _ref$onRow === void 0 ? function () {
    return Object;
  } : _ref$onRow,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$rowKey = _ref.rowKey,
      rowKey = _ref$rowKey === void 0 ? 'id' : _ref$rowKey,
      _ref$onRowClick = _ref.onRowClick,
      onRowClick = _ref$onRowClick === void 0 ? function () {
    return undefined;
  } : _ref$onRowClick,
      props = _objectWithoutProperties(_ref, ["onRow", "className", "children", "rowKey", "onRowClick"]);

  return React.createElement(_Table.TableContext.Consumer, null, function (_ref2) {
    var _ref2$headerData = _ref2.headerData,
        headerData = _ref2$headerData === void 0 ? [] : _ref2$headerData,
        _ref2$rows = _ref2.rows,
        rows = _ref2$rows === void 0 ? [] : _ref2$rows,
        rest = _objectWithoutProperties(_ref2, ["headerData", "rows"]);

    return React.createElement(ContextBody, _extends({
      headerData: headerData,
      rows: rows,
      onRow: onRow,
      className: className,
      children: children,
      rowKey: rowKey,
      onRowClick: onRowClick
    }, props, rest));
  });
};

exports.TableBody = TableBody;
TableBody.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  headerData: _propTypes["default"].arrayOf(_propTypes["default"].any),
  rows: _propTypes["default"].arrayOf(_propTypes["default"].any),
  rowKey: _propTypes["default"].any,
  onRowClick: _propTypes["default"].any,
  onRow: _propTypes["default"].any
};
//# sourceMappingURL=Body.js.map