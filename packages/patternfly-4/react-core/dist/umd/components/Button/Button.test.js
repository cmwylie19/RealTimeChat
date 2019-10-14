(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./Button", "react", "enzyme", "@patternfly/react-icons"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./Button"), require("react"), require("enzyme"), require("@patternfly/react-icons"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.Button, global.react, global.enzyme, global.reactIcons);
    global.undefined = mod.exports;
  }
})(this, function (_Button, _react, _enzyme, _reactIcons) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Object.values(_Button.ButtonVariant).forEach(variant => {
    test(`${variant} button`, () => {
      const view = (0, _enzyme.mount)(_react2.default.createElement(_Button.Button, {
        variant: variant,
        "aria-label": variant
      }, variant, " Button"));
      expect(view).toMatchSnapshot();
    });
  });
  test('it adds an aria-label to plain buttons', () => {
    const label = 'aria-label test';
    const view = (0, _enzyme.mount)(_react2.default.createElement(_Button.Button, {
      "aria-label": label
    }));
    expect(view.find('button').props()['aria-label']).toBe(label);
  });
  test('link with icon', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_Button.Button, {
      variant: _Button.ButtonVariant.link,
      icon: _react2.default.createElement(_reactIcons.CartArrowDownIcon, null)
    }, "Block Button"));
    expect(view).toMatchSnapshot();
  });
  test('isBlock', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_Button.Button, {
      isBlock: true
    }, "Block Button"));
    expect(view).toMatchSnapshot();
  });
  test('isDisabled', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_Button.Button, {
      isDisabled: true
    }, "Disabled Button"));
    expect(view).toMatchSnapshot();
  });
  test('isFocus', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_Button.Button, {
      isFocus: true
    }, "Focused Button"));
    expect(view).toMatchSnapshot();
  });
  test('isHover', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_Button.Button, {
      isHover: true
    }, "Hovered Button"));
    expect(view).toMatchSnapshot();
  });
  test('isInline', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_Button.Button, {
      variant: _Button.ButtonVariant.link,
      isInline: true
    }, "Hovered Button"));
    expect(view).toMatchSnapshot();
  });
  test('allows passing in a string as the component', () => {
    const component = 'a';
    const view = (0, _enzyme.mount)(_react2.default.createElement(_Button.Button, {
      component: component
    }));
    expect(view.find(component).type()).toBe(component);
  });
  test('allows passing in a React Component as the component', () => {
    const Component = () => _react2.default.createElement("div", null, "im a div");

    const view = (0, _enzyme.mount)(_react2.default.createElement(_Button.Button, {
      component: Component
    }));
    expect(view.find(Component).type()).toBe(Component);
  });
  test('aria-disabled is set to true and tabIndex to -1 if component is not a button and is disabled', () => {
    const view = (0, _enzyme.mount)(_react2.default.createElement(_Button.Button, {
      component: "a",
      isDisabled: true
    }, "Disabled Anchor Button"));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=Button.test.js.map