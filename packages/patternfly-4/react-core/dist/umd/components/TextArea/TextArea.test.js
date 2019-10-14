(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./TextArea"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./TextArea"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.TextArea);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _TextArea) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

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
    onChange: jest.fn(),
    value: 'test textarea'
  };
  test('textarea input passes value and event to onChange handler', () => {
    const newValue = 'new test textarea';
    const event = {
      currentTarget: {
        value: newValue
      }
    };
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_TextArea.TextArea, _extends({}, props, {
      "aria-label": "test textarea"
    })));
    view.find('textarea').simulate('change', event);
    expect(props.onChange).toBeCalledWith(newValue, event);
  });
  test('simple text input', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_TextArea.TextArea, _extends({}, props, {
      "aria-label": "simple textarea"
    })));
    expect(view).toMatchSnapshot();
  });
  test('invalid text input', () => {
    const view = (0, _enzyme.shallow)(_react2.default.createElement(_TextArea.TextArea, _extends({}, props, {
      required: true,
      isValid: false,
      "aria-label": "invalid textarea"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should throw console error when no aria-label or id is given', () => {
    const myMock = jest.fn();
    global.console = {
      error: myMock
    };
    (0, _enzyme.shallow)(_react2.default.createElement(_TextArea.TextArea, props));
    expect(myMock).toBeCalled();
  });
  test('should not throw console error when id is given but no aria-label', () => {
    const myMock = jest.fn();
    global.console = {
      error: myMock
    };
    (0, _enzyme.shallow)(_react2.default.createElement(_TextArea.TextArea, _extends({}, props, {
      id: "5"
    })));
    expect(myMock).not.toBeCalled();
  });
  test('should not throw console error when aria-label is given but no id', () => {
    const myMock = jest.fn();
    global.console = {
      error: myMock
    };
    (0, _enzyme.shallow)(_react2.default.createElement(_TextArea.TextArea, _extends({}, props, {
      "aria-label": "test textarea"
    })));
    expect(myMock).not.toBeCalled();
  });
});
//# sourceMappingURL=TextArea.test.js.map