"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var inlineEditFormatterFactory = function inlineEditFormatterFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      renderEdit = _ref.renderEdit,
      renderValue = _ref.renderValue,
      resolveValue = _ref.resolveValue,
      _ref$isEditable = _ref.isEditable,
      isEditable = _ref$isEditable === void 0 ? null : _ref$isEditable;

  return function (value, additionalData) {
    var rowData = additionalData.rowData;

    if (resolveValue) {
      value = resolveValue(value, additionalData);
    }

    if (renderEdit && rowData.isEditing && (!isEditable || isEditable(additionalData))) {
      var computedData = {
        activeEditId: rowData.editConfig && rowData.editConfig.activeEditId
      };
      return renderEdit(value, additionalData, computedData);
    } else if (renderValue) {
      return renderValue(value, additionalData);
    }

    return value;
  };
};

var _default = inlineEditFormatterFactory;
exports["default"] = _default;
//# sourceMappingURL=inlineEditFormatterFactory.js.map