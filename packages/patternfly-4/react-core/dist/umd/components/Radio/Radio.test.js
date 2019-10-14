(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Radio"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Radio"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Radio);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Radio) {
  "use strict";

  var React = _interopRequireWildcard(_react);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};

    if (obj != null) {
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
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
    onChange: jest.fn()
  };
  describe('Radio check component', () => {
    test('controlled', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_Radio.Radio, {
        isChecked: true,
        id: "check",
        "aria-label": "check",
        name: "check"
      }));
      expect(view).toMatchSnapshot();
    });
    test('uncontrolled', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_Radio.Radio, {
        id: "check",
        "aria-label": "check",
        name: "check"
      }));
      expect(view).toMatchSnapshot();
    });
    test('isDisabled', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_Radio.Radio, {
        id: "check",
        isDisabled: true,
        "aria-label": "check",
        name: "check"
      }));
      expect(view).toMatchSnapshot();
    });
    test('label is string', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_Radio.Radio, {
        label: "Label",
        id: "check",
        isChecked: true,
        "aria-label": "check",
        name: "check"
      }));
      expect(view).toMatchSnapshot();
    });
    test('label is function', () => {
      const functionLabel = () => React.createElement("h1", null, "Header");

      const view = (0, _enzyme.shallow)(React.createElement(_Radio.Radio, {
        label: functionLabel(),
        id: "check",
        isChecked: true,
        "aria-label": "check",
        name: "check"
      }));
      expect(view).toMatchSnapshot();
    });
    test('label is node', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_Radio.Radio, {
        label: React.createElement("h1", null, "Header"),
        id: "check",
        isChecked: true,
        "aria-label": "check",
        name: "check"
      }));
      expect(view).toMatchSnapshot();
    });
    test('passing class', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_Radio.Radio, {
        label: "label",
        className: "class-123",
        id: "check",
        isChecked: true,
        "aria-label": "check",
        name: "check"
      }));
      expect(view).toMatchSnapshot();
    });
    test('passing HTML attribute', () => {
      const view = (0, _enzyme.shallow)(React.createElement(_Radio.Radio, {
        label: "label",
        "aria-labelledby": "labelId",
        id: "check",
        isChecked: true,
        "aria-label": "check",
        name: "check"
      }));
      expect(view).toMatchSnapshot();
    });
    test('Radio passes value and event to onChange handler', () => {
      const newValue = true;
      const event = {
        currentTarget: {
          checked: newValue
        }
      };
      const view = (0, _enzyme.shallow)(React.createElement(_Radio.Radio, _extends({
        id: "check"
      }, props, {
        "aria-label": "check",
        name: "check"
      })));
      view.find('input').simulate('change', event);
      expect(props.onChange).toBeCalledWith(newValue, event);
    });
  });
});
//# sourceMappingURL=Radio.test.js.map