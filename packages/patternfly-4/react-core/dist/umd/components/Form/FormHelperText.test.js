(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./FormHelperText", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./FormHelperText"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.FormHelperText, global.enzyme);
    global.undefined = mod.exports;
  }
})(this, function (_react, _FormHelperText, _enzyme) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('renders with PatternFly Core styles', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_FormHelperText.FormHelperText, {
      isError: true,
      isHidden: false
    }));
    expect(view).toMatchSnapshot();
  });
  test('className is added to the root element', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_FormHelperText.FormHelperText, {
      className: "extra-class"
    }));
    expect(view.prop('className')).toMatchSnapshot();
  });
  test('extra props are spread to the root element', () => {
    const testId = 'login-body';
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_FormHelperText.FormHelperText, {
      "data-testid": testId
    }));
    expect(view.prop('data-testid')).toBe(testId);
  });
  test('LoginFooterItem  with custom node', () => {
    const CustomNode = () => _react2.default.createElement("div", null, "My custom node");

    const view = (0, _enzyme.shallow)(_react2.default.createElement(_FormHelperText.FormHelperText, null, _react2.default.createElement(CustomNode, null)));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=FormHelperText.test.js.map