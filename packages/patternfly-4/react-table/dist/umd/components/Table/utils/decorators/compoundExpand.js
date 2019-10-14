(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "@patternfly/react-core", "@patternfly/react-styles/css/components/Table/table"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("@patternfly/react-core"), require("@patternfly/react-styles/css/components/Table/table"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.reactCore, global.table);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _reactStyles, _reactCore, _table) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.compoundExpand = undefined;

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

  const compoundExpand = exports.compoundExpand = (value, {
    rowIndex,
    columnIndex,
    rowData,
    column,
    property
  }) => {
    if (!value) {
      return null;
    }

    const {
      title,
      props
    } = value;
    const {
      extraParams: {
        onExpand
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
      onExpand && onExpand(event, rowIndex, columnIndex, props.isOpen, rowData, extraData);
    }

    return {
      className: (0, _reactStyles.css)(_table2.default.tableCompoundExpansionToggle, props.isOpen && _table2.default.modifiers.expanded),
      children: props.isOpen !== undefined && React.createElement(_reactCore.Button, {
        variant: "link",
        onClick: onToggle,
        "aria-expanded": props.isOpen,
        "aria-controls": props.ariaControls
      }, title)
    };
  };
});
//# sourceMappingURL=compoundExpand.js.map