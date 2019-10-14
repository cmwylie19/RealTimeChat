(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Label"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Label"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Label);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Label) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('label', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_Label.Label, null, "Something"));
    expect(view).toMatchSnapshot();
  });
  test('compact label', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_Label.Label, {
      isCompact: true
    }, "Something"));
    expect(view).toMatchSnapshot();
  });
  test('label with additional class name', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_Label.Label, {
      className: "klass1"
    }, "Something"));
    expect(view).toMatchSnapshot();
  });
  test('label with additional class name and props', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_Label.Label, {
      className: "class-1",
      id: "label-1",
      "data-label-name": "something"
    }, "Something"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Label.test.js.map