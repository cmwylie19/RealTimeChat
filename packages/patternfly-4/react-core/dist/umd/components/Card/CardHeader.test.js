(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./CardHeader", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./CardHeader"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.CardHeader, global.enzyme);
    global.undefined = mod.exports;
  }
})(this, function (_react, _CardHeader, _enzyme) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('renders with PatternFly Core styles', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_CardHeader.CardHeader, null));
    expect(view).toMatchSnapshot();
  });
  test('className is added to the root element', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_CardHeader.CardHeader, {
      className: "extra-class"
    }));
    expect(view.prop('className')).toMatchSnapshot();
  });
  test('extra props are spread to the root element', () => {
    const testId = 'card-header';
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_CardHeader.CardHeader, {
      "data-testid": testId
    }));
    expect(view.prop('data-testid')).toBe(testId);
  });
});
//# sourceMappingURL=CardHeader.test.js.map