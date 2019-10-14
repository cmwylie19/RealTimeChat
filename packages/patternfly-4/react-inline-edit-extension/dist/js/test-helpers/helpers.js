"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTableId = exports.mockClosest = void 0;

var mockClosest = function mockClosest(map, resolveFunction) {
  var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!Element.prototype.closest || force) {
    Element.prototype.closest = function (selector) {
      return map && map[selector] || resolveFunction && resolveFunction(selector);
    };
  }
};

exports.mockClosest = mockClosest;

var makeTableId = function makeTableId(_ref) {
  var property = _ref.column.property,
      rowIndex = _ref.rowIndex,
      columnIndex = _ref.columnIndex,
      name = _ref.name;
  return "".concat(property, "-").concat(rowIndex, "-").concat(columnIndex).concat(name ? "-".concat(name) : '');
};

exports.makeTableId = makeTableId;
//# sourceMappingURL=helpers.js.map