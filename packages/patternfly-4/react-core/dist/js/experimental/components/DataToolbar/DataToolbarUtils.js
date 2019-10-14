"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatSpacers = exports.DataToolbarContext = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DataToolbarContext = React.createContext({});
exports.DataToolbarContext = DataToolbarContext;

var formatSpacers = function formatSpacers(spacers) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'pf-m-spacer';
  return spacers.reduce(function (acc, curr) {
    return "".concat(acc, " ").concat(type, "-").concat(curr.spacerSize).concat(curr.breakpoint ? "-on-".concat(curr.breakpoint) : '');
  }, '');
};

exports.formatSpacers = formatSpacers;
//# sourceMappingURL=DataToolbarUtils.js.map