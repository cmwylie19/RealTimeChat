"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNodes = getNodes;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function getNodes(node) {
  var nodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (node.children) {
    var children = typeof node.children === 'function' ? node.children() : node.children;
    children.forEach(function (child) {
      return getNodes(child, nodes);
    });
  }

  if (_typeof(node) === 'object') {
    nodes.push(node);
  }

  return nodes;
}
//# sourceMappingURL=reactUtils.js.map