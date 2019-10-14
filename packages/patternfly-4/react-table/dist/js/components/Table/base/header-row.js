"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderRow = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _evaluateFormatters = require("./evaluate-formatters");

var _evaluateTransforms = require("./evaluate-transforms");

var _mergeProps = require("./merge-props");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HeaderRow = function HeaderRow(_ref) {
  var rowData = _ref.rowData,
      rowIndex = _ref.rowIndex,
      renderers = _ref.renderers,
      _ref$onRow = _ref.onRow,
      onRow = _ref$onRow === void 0 ? function () {
    return Object;
  } : _ref$onRow;
  return React.createElement(renderers.row, onRow(rowData, {
    rowIndex: rowIndex
  }), rowData.map(function (column, columnIndex) {
    var property = column.property,
        _column$header = column.header,
        header = _column$header === void 0 ? {} : _column$header,
        _column$props = column.props,
        props = _column$props === void 0 ? {} : _column$props;
    var evaluatedProperty = property || header && header.property;
    var label = header.label,
        _header$transforms = header.transforms,
        transforms = _header$transforms === void 0 ? [] : _header$transforms,
        _header$formatters = header.formatters,
        formatters = _header$formatters === void 0 ? [] : _header$formatters;
    var extraParameters = {
      columnIndex: columnIndex,
      property: evaluatedProperty,
      column: column
    };
    var transformedProps = (0, _evaluateTransforms.evaluateTransforms)(transforms, label, extraParameters);

    if (!transformedProps) {
      // tslint:disable-next-line:no-console
      console.warn('Table.Header - Failed to receive a transformed result'); // eslint-disable-line max-len, no-console
    }

    return React.createElement(renderers.cell, _objectSpread({
      key: "".concat(columnIndex, "-header")
    }, (0, _mergeProps.mergeProps)(props, header && header.props, transformedProps)), transformedProps.children || (0, _evaluateFormatters.evaluateFormatters)(formatters)(label, extraParameters));
  }));
};

exports.HeaderRow = HeaderRow;
HeaderRow.propTypes = {
  rowData: _propTypes["default"].any.isRequired,
  rowIndex: _propTypes["default"].number.isRequired,
  renderers: _propTypes["default"].any.isRequired,
  onRow: _propTypes["default"].any
};
//# sourceMappingURL=header-row.js.map