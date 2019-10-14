(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./decorators/selectable", "./decorators/sortable", "./decorators/cellActions", "./decorators/cellWidth", "./decorators/cellHeightAuto", "./decorators/wrappable", "./decorators/textCenter", "./decorators/collapsible", "./decorators/compoundExpand", "./decorators/headerCol", "./decorators/classNames"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./decorators/selectable"), require("./decorators/sortable"), require("./decorators/cellActions"), require("./decorators/cellWidth"), require("./decorators/cellHeightAuto"), require("./decorators/wrappable"), require("./decorators/textCenter"), require("./decorators/collapsible"), require("./decorators/compoundExpand"), require("./decorators/headerCol"), require("./decorators/classNames"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.selectable, global.sortable, global.cellActions, global.cellWidth, global.cellHeightAuto, global.wrappable, global.textCenter, global.collapsible, global.compoundExpand, global.headerCol, global.classNames);
    global.undefined = mod.exports;
  }
})(this, function (exports, _selectable, _sortable, _cellActions, _cellWidth, _cellHeightAuto, _wrappable, _textCenter, _collapsible, _compoundExpand, _headerCol, _classNames) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "selectable", {
    enumerable: true,
    get: function () {
      return _selectable.selectable;
    }
  });
  Object.defineProperty(exports, "sortable", {
    enumerable: true,
    get: function () {
      return _sortable.sortable;
    }
  });
  Object.defineProperty(exports, "cellActions", {
    enumerable: true,
    get: function () {
      return _cellActions.cellActions;
    }
  });
  Object.defineProperty(exports, "cellWidth", {
    enumerable: true,
    get: function () {
      return _cellWidth.cellWidth;
    }
  });
  Object.defineProperty(exports, "cellHeightAuto", {
    enumerable: true,
    get: function () {
      return _cellHeightAuto.cellHeightAuto;
    }
  });
  Object.defineProperty(exports, "wrappable", {
    enumerable: true,
    get: function () {
      return _wrappable.wrappable;
    }
  });
  Object.defineProperty(exports, "textCenter", {
    enumerable: true,
    get: function () {
      return _textCenter.textCenter;
    }
  });
  Object.defineProperty(exports, "collapsible", {
    enumerable: true,
    get: function () {
      return _collapsible.collapsible;
    }
  });
  Object.defineProperty(exports, "expandedRow", {
    enumerable: true,
    get: function () {
      return _collapsible.expandedRow;
    }
  });
  Object.defineProperty(exports, "expandable", {
    enumerable: true,
    get: function () {
      return _collapsible.expandable;
    }
  });
  Object.defineProperty(exports, "compoundExpand", {
    enumerable: true,
    get: function () {
      return _compoundExpand.compoundExpand;
    }
  });
  Object.defineProperty(exports, "headerCol", {
    enumerable: true,
    get: function () {
      return _headerCol.headerCol;
    }
  });
  Object.defineProperty(exports, "classNames", {
    enumerable: true,
    get: function () {
      return _classNames.classNames;
    }
  });
  Object.defineProperty(exports, "Visibility", {
    enumerable: true,
    get: function () {
      return _classNames.Visibility;
    }
  });

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

  const emptyTD = () => ({
    scope: '',
    component: 'td'
  });

  const scopeColTransformer = () => ({
    scope: 'col'
  });

  const emptyCol = label => _objectSpread({}, label ? {} : {
    scope: ''
  });

  const parentId = (_value, {
    rowData
  }) => ({
    parentId: rowData.parent
  });

  const mapProps = (_label, {
    property,
    rowData
  }) => _objectSpread({}, rowData[property] && rowData[property].props);

  exports.emptyTD = emptyTD;
  exports.scopeColTransformer = scopeColTransformer;
  exports.emptyCol = emptyCol;
  exports.parentId = parentId;
  exports.mapProps = mapProps;
});
//# sourceMappingURL=transformers.js.map