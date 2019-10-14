(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./Card", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./Card"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.Card, global.enzyme);
    global.undefined = mod.exports;
  }
})(this, function (_react, _Card, _enzyme) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('renders with PatternFly Core styles', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_Card.Card, null));
    expect(view).toMatchSnapshot();
  });
  test('className is added to the root element', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_Card.Card, {
      className: "extra-class"
    }));
    expect(view.prop('className')).toMatchSnapshot();
  });
  test('extra props are spread to the root element', () => {
    const testId = 'card';
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_Card.Card, {
      "data-testid": testId
    }));
    expect(view.prop('data-testid')).toBe(testId);
  });
  test('allows passing in a string as the component', () => {
    const component = 'section';
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_Card.Card, {
      component: component
    }));
    expect(view.type()).toBe(component);
  });
  test('allows passing in a React Component as the component', () => {
    const Component = () => _react2.default.createElement("div", null, "im a div");

    const view = (0, _enzyme.shallow)(_react2.default.createElement(_Card.Card, {
      component: Component
    }));
    expect(view.type()).toBe(Component);
  });
  test('card with isHoverable applied ', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_Card.Card, {
      isHoverable: true
    }));
    expect(view).toMatchSnapshot();
  });
  test('card with isCompact applied ', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_Card.Card, {
      isCompact: true
    }));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Card.test.js.map