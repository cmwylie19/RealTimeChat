(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./CardBody", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./CardBody"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.CardBody, global.enzyme);
    global.undefined = mod.exports;
  }
})(this, function (_react, _CardBody, _enzyme) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('renders with PatternFly Core styles', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_CardBody.CardBody, null));
    expect(view).toMatchSnapshot();
  });
  test('className is added to the root element', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_CardBody.CardBody, {
      className: "extra-class"
    }));
    expect(view.prop('className')).toMatchSnapshot();
  });
  test('extra props are spread to the root element', () => {
    const testId = 'card-body';
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_CardBody.CardBody, {
      "data-testid": testId
    }));
    expect(view.prop('data-testid')).toBe(testId);
  });
  test('allows passing in a string as the component', () => {
    const component = 'section';
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_CardBody.CardBody, {
      component: component
    }));
    expect(view.type()).toBe(component);
  });
  test('allows passing in a React Component as the component', () => {
    const Component = () => _react2.default.createElement("div", null, "im a div");

    const view = (0, _enzyme.shallow)(_react2.default.createElement(_CardBody.CardBody, {
      component: Component
    }));
    expect(view.type()).toBe(Component);
  });
  test('body with no-fill applied ', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_CardBody.CardBody, {
      isFilled: false
    }));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=CardBody.test.js.map