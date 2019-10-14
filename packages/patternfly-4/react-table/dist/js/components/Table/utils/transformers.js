"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "selectable", {
  enumerable: true,
  get: function get() {
    return _selectable.selectable;
  }
});
Object.defineProperty(exports, "sortable", {
  enumerable: true,
  get: function get() {
    return _sortable.sortable;
  }
});
Object.defineProperty(exports, "cellActions", {
  enumerable: true,
  get: function get() {
    return _cellActions.cellActions;
  }
});
Object.defineProperty(exports, "cellWidth", {
  enumerable: true,
  get: function get() {
    return _cellWidth.cellWidth;
  }
});
Object.defineProperty(exports, "cellHeightAuto", {
  enumerable: true,
  get: function get() {
    return _cellHeightAuto.cellHeightAuto;
  }
});
Object.defineProperty(exports, "wrappable", {
  enumerable: true,
  get: function get() {
    return _wrappable.wrappable;
  }
});
Object.defineProperty(exports, "textCenter", {
  enumerable: true,
  get: function get() {
    return _textCenter.textCenter;
  }
});
Object.defineProperty(exports, "collapsible", {
  enumerable: true,
  get: function get() {
    return _collapsible.collapsible;
  }
});
Object.defineProperty(exports, "expandedRow", {
  enumerable: true,
  get: function get() {
    return _collapsible.expandedRow;
  }
});
Object.defineProperty(exports, "expandable", {
  enumerable: true,
  get: function get() {
    return _collapsible.expandable;
  }
});
Object.defineProperty(exports, "compoundExpand", {
  enumerable: true,
  get: function get() {
    return _compoundExpand.compoundExpand;
  }
});
Object.defineProperty(exports, "headerCol", {
  enumerable: true,
  get: function get() {
    return _headerCol.headerCol;
  }
});
Object.defineProperty(exports, "classNames", {
  enumerable: true,
  get: function get() {
    return _classNames.classNames;
  }
});
Object.defineProperty(exports, "Visibility", {
  enumerable: true,
  get: function get() {
    return _classNames.Visibility;
  }
});
exports.mapProps = exports.parentId = exports.emptyCol = exports.scopeColTransformer = exports.emptyTD = void 0;

var _selectable = require("./decorators/selectable");

var _sortable = require("./decorators/sortable");

var _cellActions = require("./decorators/cellActions");

var _cellWidth = require("./decorators/cellWidth");

var _cellHeightAuto = require("./decorators/cellHeightAuto");

var _wrappable = require("./decorators/wrappable");

var _textCenter = require("./decorators/textCenter");

var _collapsible = require("./decorators/collapsible");

var _compoundExpand = require("./decorators/compoundExpand");

var _headerCol = require("./decorators/headerCol");

var _classNames = require("./decorators/classNames");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var emptyTD = function emptyTD() {
  return {
    scope: '',
    component: 'td'
  };
};

exports.emptyTD = emptyTD;

var scopeColTransformer = function scopeColTransformer() {
  return {
    scope: 'col'
  };
};

exports.scopeColTransformer = scopeColTransformer;

var emptyCol = function emptyCol(label) {
  return _objectSpread({}, label ? {} : {
    scope: ''
  });
};

exports.emptyCol = emptyCol;

var parentId = function parentId(_value, _ref) {
  var rowData = _ref.rowData;
  return {
    parentId: rowData.parent
  };
};

exports.parentId = parentId;

var mapProps = function mapProps(_label, _ref2) {
  var property = _ref2.property,
      rowData = _ref2.rowData;
  return _objectSpread({}, rowData[property] && rowData[property].props);
};

exports.mapProps = mapProps;
//# sourceMappingURL=transformers.js.map