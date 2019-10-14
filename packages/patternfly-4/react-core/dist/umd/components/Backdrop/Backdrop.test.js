(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Backdrop"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Backdrop"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Backdrop);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Backdrop) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('Backdrop Test', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_Backdrop.Backdrop, null, "Backdrop"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Backdrop.test.js.map