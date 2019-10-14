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
  const inlineEditStyles = exports.inlineEditStyles = {
    tableEditableRow: 'pf-c-table__editable-row',
    tableInlineEditButtons: 'pf-c-table__inline-edit-buttons',
    modifiers: {
      tableEditingFirstRow: 'pf-m-table-editing-first-row ',
      tableEditingLastRow: 'pf-m-table-editing-last-row',
      editing: 'pf-m-editing',
      top: 'pf-m-top',
      bottom: 'pf-m-bottom',
      bold: 'pf-m-bold'
    }
  };
});
//# sourceMappingURL=inline-edit-css.js.map