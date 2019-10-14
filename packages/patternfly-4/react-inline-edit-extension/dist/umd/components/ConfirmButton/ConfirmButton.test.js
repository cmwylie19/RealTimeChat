(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.index);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _index) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('it renders properly', () => {
    const component = (0, _enzyme.shallow)(_react2.default.createElement(_index.ConfirmButton, null));
    expect(component).toMatchSnapshot();
  });
});
//# sourceMappingURL=ConfirmButton.test.js.map