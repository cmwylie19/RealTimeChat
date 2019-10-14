"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BodyRow = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var React = _interopRequireWildcard(require("react"));

var _columnsAreEqual = require("./columns-are-equal");

var _evaluateFormatters = require("./evaluate-formatters");

var _evaluateTransforms = require("./evaluate-transforms");

var _mergeProps = require("./merge-props");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BodyRow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BodyRow, _React$Component);

  function BodyRow() {
    _classCallCheck(this, BodyRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(BodyRow).apply(this, arguments));
  }

  _createClass(BodyRow, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$props = this.props,
          columns = _this$props.columns,
          rowData = _this$props.rowData; // Check for row based override.

      var renderers = nextProps.renderers;

      if (renderers && renderers.row && renderers.row.shouldComponentUpdate) {
        if ((0, _lodash.isFunction)(renderers.row.shouldComponentUpdate)) {
          return renderers.row.shouldComponentUpdate.call(this, nextProps, {}, {});
        }

        return true;
      }

      return !((0, _columnsAreEqual.columnsAreEqual)(columns, nextProps.columns) && (0, _lodash.isEqual)(rowData, nextProps.rowData));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          columns = _this$props2.columns,
          renderers = _this$props2.renderers,
          onRow = _this$props2.onRow,
          rowKey = _this$props2.rowKey,
          rowIndex = _this$props2.rowIndex,
          rowData = _this$props2.rowData;
      return React.createElement(renderers.row, onRow(rowData, {
        rowIndex: rowIndex,
        rowKey: rowKey
      }), columns.map(function (column, columnIndex) {
        var property = column.property,
            cell = column.cell,
            props = column.props;
        var evaluatedProperty = property || cell && cell.property;

        var _ref = cell || {},
            _ref$transforms = _ref.transforms,
            transforms = _ref$transforms === void 0 ? [] : _ref$transforms,
            _ref$formatters = _ref.formatters,
            formatters = _ref$formatters === void 0 ? [] : _ref$formatters;

        var extraParameters = {
          columnIndex: columnIndex,
          property: evaluatedProperty,
          column: column,
          rowData: rowData,
          rowIndex: rowIndex,
          rowKey: rowKey
        };
        var transformed = (0, _evaluateTransforms.evaluateTransforms)(transforms, rowData[evaluatedProperty], extraParameters);

        if (!transformed) {
          // tslint:disable-next-line:no-console
          console.warn('Table.Body - Failed to receive a transformed result');
        }

        return React.createElement(renderers.cell, _objectSpread({
          key: "".concat(columnIndex, "-cell")
        }, (0, _mergeProps.mergeProps)(props, cell && cell.props, transformed)), transformed.children || (0, _evaluateFormatters.evaluateFormatters)(formatters)(rowData["_".concat(evaluatedProperty)] || rowData[evaluatedProperty], extraParameters));
      }));
    }
  }]);

  return BodyRow;
}(React.Component);

exports.BodyRow = BodyRow;

_defineProperty(BodyRow, "propTypes", {
  columns: _propTypes["default"].any.isRequired,
  renderers: _propTypes["default"].any.isRequired,
  onRow: _propTypes["default"].any,
  rowIndex: _propTypes["default"].number.isRequired,
  rowData: _propTypes["default"].any.isRequired,
  rowKey: _propTypes["default"].string.isRequired
});

_defineProperty(BodyRow, "defaultProps", {
  onRow: function onRow() {
    return Object;
  }
});
//# sourceMappingURL=body-row.js.map