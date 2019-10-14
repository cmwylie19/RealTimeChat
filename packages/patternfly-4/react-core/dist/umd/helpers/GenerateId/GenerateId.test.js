(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./GenerateId"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./GenerateId"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.GenerateId);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _GenerateId) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _GenerateId2 = _interopRequireDefault(_GenerateId);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('generates id', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_GenerateId2.default, null, id => _react2.default.createElement("div", {
      id: id
    }, "div with random ID")));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=GenerateId.test.js.map