"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.rows = exports.columns = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable no-console */
var columns = [{
  title: 'Header cell'
}, 'Branches', {
  title: 'Pull requests'
}, 'Workspaces', {
  title: 'Last Commit'
}];
exports.columns = columns;
var rows = [{
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}, {
  cells: ['one', 'two', 'three', 'four', 'five']
}];
exports.rows = rows;
var actions = [{
  title: 'Some action',
  onClick: function onClick(_ref, _ref2) {
    var event = _ref.event;
    var rowId = _ref2.rowId;
    return (// tslint:disable-next-line:no-console
      console.log('clicked on Some action, on row: ', rowId)
    );
  }
}, {
  title: React.createElement("div", null, "Another action"),
  onClick: function onClick(_ref3, _ref4) {
    var event = _ref3.event;
    var rowId = _ref4.rowId;
    return (// tslint:disable-next-line:no-console
      console.log('clicked on Another action, on row: ', rowId)
    );
  }
}, {
  isSeparator: true
}, {
  title: 'Third action',
  onClick: function onClick(_ref5, _ref6) {
    var event = _ref5.event;
    var rowId = _ref6.rowId;
    return (// tslint:disable-next-line:no-console
      console.log('clicked on Third action, on row: ', rowId)
    );
  }
}];
exports.actions = actions;
//# sourceMappingURL=data-sets.js.map