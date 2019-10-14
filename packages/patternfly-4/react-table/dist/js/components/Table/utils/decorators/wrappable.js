"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrappable = void 0;

var _reactStyles = require("@patternfly/react-styles");

var _table = _interopRequireDefault(require("@patternfly/react-styles/css/components/Table/table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var wrappable = function wrappable() {
  return {
    className: (0, _reactStyles.css)((0, _reactStyles.getModifier)(_table["default"], 'wrap'))
  };
};

exports.wrappable = wrappable;
//# sourceMappingURL=wrappable.js.map