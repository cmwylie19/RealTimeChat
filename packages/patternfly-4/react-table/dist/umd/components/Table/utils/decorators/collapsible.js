(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "@patternfly/react-styles/css/components/Table/table", "../../CollapseColumn", "../../ExpandableRowContent"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("@patternfly/react-styles/css/components/Table/table"), require("../../CollapseColumn"), require("../../ExpandableRowContent"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.table, global.CollapseColumn, global.ExpandableRowContent);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _reactStyles, _table, _CollapseColumn, _ExpandableRowContent) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.expandedRow = exports.expandable = exports.collapsible = undefined;

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

  const collapsible = exports.collapsible = (value, {
    rowIndex,
    columnIndex,
    rowData,
    column,
    property
  }) => {
    const {
      extraParams: {
        onCollapse,
        rowLabeledBy = 'simple-node',
        expandId = 'expand-toggle'
      }
    } = column;
    const extraData = {
      rowIndex,
      columnIndex,
      column,
      property
    };

    function onToggle(event) {
      // tslint:disable-next-line:no-unused-expression
      onCollapse && onCollapse(event, rowIndex, rowData && !rowData.isOpen, rowData, extraData);
    }

    return {
      className: rowData.isOpen !== undefined && (0, _reactStyles.css)(_table2.default.tableToggle),
      isVisible: !rowData.fullWidth,
      children: React.createElement(_CollapseColumn.CollapseColumn, {
        "aria-labelledby": `${rowLabeledBy}${rowIndex} ${expandId}${rowIndex}`,
        onToggle: onToggle,
        id: expandId + rowIndex,
        isOpen: rowData && rowData.isOpen
      }, value)
    };
  };

  const expandable = exports.expandable = (value, {
    rowData
  }) => rowData.hasOwnProperty('parent') ? React.createElement(_ExpandableRowContent.ExpandableRowContent, null, value) : value;

  const expandedRow = exports.expandedRow = colSpan => {
    const expandedRowFormatter = (value, {
      rowIndex,
      rowData,
      column: {
        extraParams: {
          contentId = 'expanded-content'
        }
      }
    }) => rowData.hasOwnProperty('parent') && {
      // todo: rewrite this logic, it is not type safe
      colSpan: colSpan + !!rowData.fullWidth,
      id: contentId + rowIndex,
      className: rowData.noPadding && (0, _reactStyles.css)(_table2.default.modifiers.noPadding)
    };

    return expandedRowFormatter;
  };
});
//# sourceMappingURL=collapsible.js.map