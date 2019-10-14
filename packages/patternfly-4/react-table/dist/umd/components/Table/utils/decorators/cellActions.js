(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "@patternfly/react-styles/css/components/Table/table", "../../ActionsColumn"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("@patternfly/react-styles/css/components/Table/table"), require("../../ActionsColumn"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.table, global.ActionsColumn);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _reactStyles, _table, _ActionsColumn) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.cellActions = undefined;

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

  const resolveOrDefault = (resolver, defaultValue, rowData, extraData) => typeof resolver === 'function' ? resolver(rowData, extraData) : defaultValue;

  const cellActions = exports.cellActions = (actions, actionResolver, areActionsDisabled) => (label, {
    rowData,
    column,
    rowIndex,
    columnIndex,
    column: {
      extraParams: {
        dropdownPosition,
        dropdownDirection
      }
    },
    property
  }) => {
    const extraData = {
      rowIndex,
      columnIndex,
      column,
      property
    };
    const resolvedActions = resolveOrDefault(actionResolver, actions, rowData, extraData);
    const resolvedIsDisabled = resolveOrDefault(areActionsDisabled, rowData && rowData.disableActions, rowData, extraData);
    const renderProps = resolvedActions && resolvedActions.length > 0 ? {
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
      className: (0, _reactStyles.css)(_table2.default.tableAction),
      isVisible: true
    }, renderProps);
  };
});
//# sourceMappingURL=cellActions.js.map