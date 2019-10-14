"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BodyWrapper = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _table = _interopRequireDefault(require("@patternfly/react-styles/css/components/Table/table"));

var _headerUtils = require("./utils/headerUtils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BodyWrapper = function BodyWrapper(_ref) {
  var mappedRows = _ref.mappedRows,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? [] : _ref$rows,
      onCollapse = _ref.onCollapse,
      tbodyRef = _ref.tbodyRef,
      headerRows = _ref.headerRows,
      props = _objectWithoutProperties(_ref, ["mappedRows", "rows", "onCollapse", "tbodyRef", "headerRows"]);

  if (mappedRows && mappedRows.some(function (row) {
    return row.hasOwnProperty('parent');
  })) {
    return React.createElement(React.Fragment, null, (0, _headerUtils.mapOpenedRows)(mappedRows, props.children).map(function (oneRow, key) {
      return React.createElement("tbody", _extends({}, props, {
        className: (0, _reactStyles.css)(oneRow.isOpen && _table["default"].modifiers.expanded),
        key: "tbody-".concat(key),
        ref: tbodyRef
      }), oneRow.rows);
    }));
  }

  return React.createElement("tbody", _extends({}, props, {
    ref: tbodyRef
  }));
};

exports.BodyWrapper = BodyWrapper;
BodyWrapper.propTypes = {
  children: _propTypes["default"].node,
  mappedRows: _propTypes["default"].arrayOf(_propTypes["default"].any),
  rows: _propTypes["default"].arrayOf(_propTypes["default"].any),
  onCollapse: _propTypes["default"].func,
  tbodyRef: _propTypes["default"].oneOfType([_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].object]), _propTypes["default"].any]),
  headerRows: _propTypes["default"].arrayOf(_propTypes["default"].any)
};
//# sourceMappingURL=BodyWrapper.js.map