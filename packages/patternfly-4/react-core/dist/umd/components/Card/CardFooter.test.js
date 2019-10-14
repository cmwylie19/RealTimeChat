(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./CardFooter", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./CardFooter"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.CardFooter, global.enzyme);
    global.undefined = mod.exports;
  }
})(this, function (_react, _CardFooter, _enzyme) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('renders with PatternFly Core styles', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_CardFooter.CardFooter, null));
    expect(view).toMatchSnapshot();
  });
  test('className is added to the root element', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_CardFooter.CardFooter, {
      className: "extra-class"
    }));
    expect(view.prop('className')).toMatchSnapshot();
  });
  test('extra props are spread to the root element', () => {
    const testId = 'card-footer';
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_CardFooter.CardFooter, {
      "data-testid": testId
    }));
    expect(view.prop('data-testid')).toBe(testId);
  });
  test('allows passing in a string as the component', () => {
    const component = 'div';
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_CardFooter.CardFooter, {
      component: component
    }));
    expect(view.type()).toBe(component);
  });
  test('allows passing in a React Component as the component', () => {
    const Component = () => _react2.default.createElement("div", null, "im a div");

    const view = (0, _enzyme.shallow)(_react2.default.createElement(_CardFooter.CardFooter, {
      component: Component
    }));
    expect(view.type()).toBe(Component);
  });
});
//# sourceMappingURL=CardFooter.test.js.map