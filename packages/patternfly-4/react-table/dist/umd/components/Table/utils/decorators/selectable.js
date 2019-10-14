(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "@patternfly/react-styles/css/components/Table/table", "../../SelectColumn"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("@patternfly/react-styles/css/components/Table/table"), require("../../SelectColumn"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.table, global.SelectColumn);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _reactStyles, _table, _SelectColumn) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectable = undefined;

  var React = _interopRequireWildcard(_react);

  var _table2 = _interopRequireDefault(_table);

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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  const selectable = exports.selectable = (label, {
    rowIndex,
    columnIndex,
    rowData,
    column,
    property
  }) => {
    const {
      extraParams: {
        onSelect,
        allRowsSelected,
        rowLabeledBy = 'simple-node'
      }
    } = column;
    const extraData = {
      rowIndex,
      columnIndex,
      column,
      property
    };

    if (rowData && rowData.hasOwnProperty('parent') && !rowData.showSelect) {
      return {
        component: 'td',
        isVisible: true,
        scope: ''
      };
    }

    const rowId = rowIndex !== undefined ? rowIndex : -1;

    function selectClick(event) {
      const selected = rowIndex === undefined ? event.target.checked : rowData && !rowData.selected; // todo: change event type to React.FormEvent<HTMLInputElement> in the future, breaking change a.t.m.
      // tslint:disable-next-line:no-unused-expression

      onSelect && onSelect(event, selected, rowId, rowData, extraData);
    }

    const customProps = _objectSpread({}, rowId !== -1 ? {
      "checked": rowData && !!rowData.selected,
      'aria-labelledby': rowLabeledBy + rowIndex
    } : {
      "checked": allRowsSelected,
      'aria-label': 'Select all rows'
    });

    return {
      className: (0, _reactStyles.css)(_table2.default.tableCheck),
      component: 'td',
      scope: '',
      isVisible: true,
      children: React.createElement(_SelectColumn.SelectColumn, _extends({}, customProps, {
        onSelect: selectClick,
        name: rowId !== -1 ? `checkrow${rowIndex}` : 'check-all'
      }), label)
    };
  };
});
//# sourceMappingURL=selectable.js.map