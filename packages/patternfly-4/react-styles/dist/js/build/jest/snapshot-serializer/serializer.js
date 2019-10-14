"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSerializer = createSerializer;
exports["default"] = void 0;

var _cssUtils = require("./cssUtils");

var _reactUtils = require("./reactUtils");

var _utils = require("../../../utils");

var _cssPropertyOverrides = require("./cssPropertyOverrides");

function createSerializer() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$globalCSS = _ref.globalCSS,
      globalCSS = _ref$globalCSS === void 0 ? '' : _ref$globalCSS;

  (0, _cssPropertyOverrides.addOverrides)();

  function test(val) {
    return val && !val.withStyles && val.$$typeof === Symbol["for"]('react.test.json');
  }

  function print(val, printer) {
    var nodes = (0, _reactUtils.getNodes)(val);
    nodes.forEach(function (node) {
      node.withStyles = true;
    });
    var selectors = (0, _cssUtils.getSelectors)(nodes);
    var styles = (0, _cssUtils.getStyles)(selectors, (0, _utils.getInsertedStyles)().join(''), globalCSS);
    var code = printer(val);

    if (styles) {
      return "".concat(styles, "\n\n").concat(code);
    }

    return code;
  }

  return {
    test: test,
    print: print
  };
}

var _default = createSerializer();

exports["default"] = _default;
//# sourceMappingURL=serializer.js.map