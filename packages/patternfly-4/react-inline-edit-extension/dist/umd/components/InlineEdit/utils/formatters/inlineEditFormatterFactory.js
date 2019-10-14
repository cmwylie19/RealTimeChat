(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const inlineEditFormatterFactory = ({
    renderEdit,
    renderValue,
    resolveValue,
    isEditable = null
  } = {}) => (value, additionalData) => {
    const {
      rowData
    } = additionalData;

    if (resolveValue) {
      value = resolveValue(value, additionalData);
    }

    if (renderEdit && rowData.isEditing && (!isEditable || isEditable(additionalData))) {
      const computedData = {
        activeEditId: rowData.editConfig && rowData.editConfig.activeEditId
      };
      return renderEdit(value, additionalData, computedData);
    } else if (renderValue) {
      return renderValue(value, additionalData);
    }

    return value;
  };

  exports.default = inlineEditFormatterFactory;
});
//# sourceMappingURL=inlineEditFormatterFactory.js.map