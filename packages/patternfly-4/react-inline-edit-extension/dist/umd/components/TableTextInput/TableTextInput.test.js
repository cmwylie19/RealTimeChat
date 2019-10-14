(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./TableTextInput"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./TableTextInput"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.TableTextInput);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _TableTextInput) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _TableTextInput2 = _interopRequireDefault(_TableTextInput);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  const props = {
    defaultValue: 'test',
    autoFocus: true,
    onBlur: jest.fn()
  };
  test('simple table text input', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_TableTextInput2.default, {
      "aria-label": "simple text input"
    }));
    expect(view).toMatchSnapshot();
  });
  test('focused table text input', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_TableTextInput2.default, _extends({}, props, {
      "aria-label": "focused text input"
    })));
    expect(view).toMatchSnapshot();
  });
});
//# sourceMappingURL=TableTextInput.test.js.map