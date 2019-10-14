"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.headerCol = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var headerCol = function headerCol() {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'simple-node';

  // tslint:disable-next-line:no-shadowed-variable
  var headerCol = function headerCol(value) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        rowIndex = _ref.rowIndex;

    var result = _typeof(value) === 'object' ? value.title : value;
    return {
      component: 'th',
      children: React.createElement("div", {
        id: "".concat(id).concat(rowIndex)
      }, result)
    };
  };

  return headerCol;
};

exports.headerCol = headerCol;
//# sourceMappingURL=headerCol.js.map