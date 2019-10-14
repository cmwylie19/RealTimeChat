(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./cssUtils", "./reactUtils", "../../../utils", "./cssPropertyOverrides"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./cssUtils"), require("./reactUtils"), require("../../../utils"), require("./cssPropertyOverrides"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.cssUtils, global.reactUtils, global.utils, global.cssPropertyOverrides);
    global.undefined = mod.exports;
  }
})(this, function (exports, _cssUtils, _reactUtils, _utils, _cssPropertyOverrides) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createSerializer = createSerializer;

  function createSerializer({
    globalCSS = ''
  } = {}) {
    (0, _cssPropertyOverrides.addOverrides)();

    function test(val) {
      return val && !val.withStyles && val.$$typeof === Symbol.for('react.test.json');
    }

    function print(val, printer) {
      const nodes = (0, _reactUtils.getNodes)(val);
      nodes.forEach(node => {
        node.withStyles = true;
      });
      const selectors = (0, _cssUtils.getSelectors)(nodes);
      const styles = (0, _cssUtils.getStyles)(selectors, (0, _utils.getInsertedStyles)().join(''), globalCSS);
      const code = printer(val);

      if (styles) {
        return `${styles}\n\n${code}`;
      }

      return code;
    }

    return {
      test,
      print
    };
  }

  exports.default = createSerializer();
});
//# sourceMappingURL=serializer.js.map