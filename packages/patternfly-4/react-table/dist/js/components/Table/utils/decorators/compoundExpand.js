"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compoundExpand = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _reactCore = require("@patternfly/react-core");

var _table = _interopRequireDefault(require("@patternfly/react-styles/css/components/Table/table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var compoundExpand = function compoundExpand(value, _ref) {
  var rowIndex = _ref.rowIndex,
      columnIndex = _ref.columnIndex,
      rowData = _ref.rowData,
      column = _ref.column,
      property = _ref.property;

  if (!value) {
    return null;
  }

  var title = value.title,
      props = value.props;
  var onExpand = column.extraParams.onExpand;
  var extraData = {
    rowIndex: rowIndex,
    columnIndex: columnIndex,
    column: column,
    property: property
  };

  function onToggle(event) {
    // tslint:disable-next-line:no-unused-expression
    onExpand && onExpand(event, rowIndex, columnIndex, props.isOpen, rowData, extraData);
  }

  return {
    className: (0, _reactStyles.css)(_table["default"].tableCompoundExpansionToggle, props.isOpen && _table["default"].modifiers.expanded),
    children: props.isOpen !== undefined && React.createElement(_reactCore.Button, {
      variant: "link",
      onClick: onToggle,
      "aria-expanded": props.isOpen,
      "aria-controls": props.ariaControls
    }, title)
  };
};

exports.compoundExpand = compoundExpand;
//# sourceMappingURL=compoundExpand.js.map