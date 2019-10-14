(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "@patternfly/react-styles/css/components/Table/table", "@patternfly/react-styles/css/components/Button/button", "../../Table", "../../SortColumn"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("@patternfly/react-styles/css/components/Table/table"), require("@patternfly/react-styles/css/components/Button/button"), require("../../Table"), require("../../SortColumn"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.table, global.button, global.Table, global.SortColumn);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _reactStyles, _table, _button, _Table, _SortColumn) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.sortable = undefined;

  var React = _interopRequireWildcard(_react);

  var _table2 = _interopRequireDefault(_table);

  var _button2 = _interopRequireDefault(_button);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};

    if (obj != null) {
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  const sortable = exports.sortable = (label, {
    columnIndex,
    column,
    property
  }) => {
    const {
      extraParams: {
        sortBy,
        onSort
      }
    } = column;
    const extraData = {
      columnIndex,
      column,
      property
    };
    const isSortedBy = sortBy && columnIndex === sortBy.index;

    function sortClicked(event) {
      let reversedDirection;

      if (!isSortedBy) {
        reversedDirection = _Table.SortByDirection.asc;
      } else {
        reversedDirection = sortBy.direction === _Table.SortByDirection.asc ? _Table.SortByDirection.desc : _Table.SortByDirection.asc;
      } // tslint:disable-next-line:no-unused-expression


      onSort && onSort(event, columnIndex, reversedDirection, extraData);
    }

    return {
      "className": (0, _reactStyles.css)(_table2.default.tableSort, isSortedBy && _table2.default.modifiers.selected),
      'aria-sort': isSortedBy ? `${sortBy.direction}ending` : 'none',
      "children": React.createElement(_SortColumn.SortColumn, {
        isSortedBy: isSortedBy,
        sortDirection: isSortedBy ? sortBy.direction : '',
        onSort: sortClicked,
        className: (0, _reactStyles.css)(_button2.default.button, _button2.default.modifiers.plain)
      }, label)
    };
  };
});
//# sourceMappingURL=sortable.js.map