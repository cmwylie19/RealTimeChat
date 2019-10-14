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

  /**
   * types.tsx
   *
   * Forked from reactabular-table version 8.14.0
   * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
   */
  // Cell Type
  // Columns Types
  // Rows Types
  // Table Defaults
  const TableDefaults = exports.TableDefaults = {
    renderers: {
      table: 'table',
      header: {
        wrapper: 'thead',
        row: 'tr',
        cell: 'th'
      },
      body: {
        wrapper: 'tbody',
        row: 'tr',
        cell: 'td'
      }
    }
  }; // Formatters Types
});
//# sourceMappingURL=types.js.map