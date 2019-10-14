(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "@patternfly/react-styles/css/components/Table/table"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("@patternfly/react-styles/css/components/Table/table"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.table);
    global.undefined = mod.exports;
  }
})(this, function (exports, _reactStyles, _table) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.classNames = exports.Visibility = undefined;

  var _table2 = _interopRequireDefault(_table);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const Visibility = exports.Visibility = (0, _reactStyles.pickProperties)(_table2.default.modifiers, ['hidden', 'hiddenOnSm', 'hiddenOnMd', 'hiddenOnLg', 'hiddenOnXl', 'hiddenOn2Xl', 'visibleOnSm', 'visibleOnMd', 'visibleOnLg', 'visibleOnXl', 'visibleOn2Xl']); // tslint:disable-next-line:no-shadowed-variable

  const classNames = exports.classNames = (...classNames) => () => ({
    className: (0, _reactStyles.css)(...classNames)
  });
});
//# sourceMappingURL=classNames.js.map