(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function getNodes(node, nodes = []) {
    if (node.children) {
      const children = typeof node.children === 'function' ? node.children() : node.children;
      children.forEach(child => getNodes(child, nodes));
    }

    if (typeof node === 'object') {
      nodes.push(node);
    }

    return nodes;
  }

  exports.getNodes = getNodes;
});
//# sourceMappingURL=reactUtils.js.map