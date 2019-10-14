"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cellActions = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _table = _interopRequireDefault(require("@patternfly/react-styles/css/components/Table/table"));

var _ActionsColumn = require("../../ActionsColumn");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var resolveOrDefault = function resolveOrDefault(resolver, defaultValue, rowData, extraData) {
  return typeof resolver === 'function' ? resolver(rowData, extraData) : defaultValue;
};

var cellActions = function cellActions(actions, actionResolver, areActionsDisabled) {
  return function (label, _ref) {
    var rowData = _ref.rowData,
        column = _ref.column,
        rowIndex = _ref.rowIndex,
        columnIndex = _ref.columnIndex,
        _ref$column$extraPara = _ref.column.extraParams,
        dropdownPosition = _ref$column$extraPara.dropdownPosition,
        dropdownDirection = _ref$column$extraPara.dropdownDirection,
        property = _ref.property;
    var extraData = {
      rowIndex: rowIndex,
      columnIndex: columnIndex,
      column: column,
      property: property
    };
    var resolvedActions = resolveOrDefault(actionResolver, actions, rowData, extraData);
    var resolvedIsDisabled = resolveOrDefault(areActionsDisabled, rowData && rowData.disableActions, rowData, extraData);
    var renderProps = resolvedActions && resolvedActions.length > 0 ? {
      children: React.createElement(_ActionsColumn.ActionsColumn, {
        items: resolvedActions,
        dropdownPosition: dropdownPosition,
        dropdownDirection: dropdownDirection,
        isDisabled: resolvedIsDisabled,
        rowData: rowData,
        extraData: extraData
      }, label)
    } : {};
    return _objectSpread({
      className: (0, _reactStyles.css)(_table["default"].tableAction),
      isVisible: true
    }, renderProps);
  };
};

exports.cellActions = cellActions;
//# sourceMappingURL=cellActions.js.map