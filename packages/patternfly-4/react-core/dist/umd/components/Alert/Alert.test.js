(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Alert", "./AlertActionLink", "./AlertActionCloseButton"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Alert"), require("./AlertActionLink"), require("./AlertActionCloseButton"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Alert, global.AlertActionLink, global.AlertActionCloseButton);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _Alert, _AlertActionLink, _AlertActionCloseButton) {
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

  test('default Alert variant is info', () => {
    const view = (0, _enzyme.shallow)(React.createElement(_Alert.Alert, {
      title: "this is a test"
    }, "Alert testing"));
    expect(view.props().className).toMatch(/pf-m-info/);
  });
  Object.values(_Alert.AlertVariant).forEach(variant => {
    describe(`Alert - ${variant}`, () => {
      test('Description', () => {
        const view = (0, _enzyme.mount)(React.createElement(_Alert.Alert, {
          variant: variant,
          title: ""
        }, "Some alert"));
        expect(view).toMatchSnapshot();
      });
      test('Title', () => {
        const view = (0, _enzyme.mount)(React.createElement(_Alert.Alert, {
          variant: variant,
          title: "Some title"
        }, "Some alert"));
        expect(view).toMatchSnapshot();
      });
      test('Action Link', () => {
        const view = (0, _enzyme.mount)(React.createElement(_Alert.Alert, {
          variant: variant,
          action: React.createElement(_AlertActionLink.AlertActionLink, null, "test"),
          title: ""
        }, "Some alert"));
        expect(view).toMatchSnapshot();
      });
      test('Action Close Button', () => {
        const onClose = jest.fn();
        const view = (0, _enzyme.mount)(React.createElement(_Alert.Alert, {
          variant: variant,
          action: React.createElement(_AlertActionCloseButton.AlertActionCloseButton, {
            "aria-label": "Close",
            onClose: onClose
          }),
          title: ""
        }, "Some alert"));
        expect(view).toMatchSnapshot();
        view.find('button[aria-label="Close"]').simulate('click');
        expect(onClose).toHaveBeenCalled();
      });
      test('Action and Title', () => {
        const view = (0, _enzyme.mount)(React.createElement(_Alert.Alert, {
          variant: variant,
          action: React.createElement(_AlertActionLink.AlertActionLink, null, "test"),
          title: "Some title"
        }, "Some alert"));
        expect(view).toMatchSnapshot();
      });
      test('Custom aria label', () => {
        const view = (0, _enzyme.mount)(React.createElement(_Alert.Alert, {
          variant: variant,
          "aria-label": `Custom aria label for ${variant}`,
          action: React.createElement(_AlertActionLink.AlertActionLink, null, "test"),
          title: "Some title"
        }, "Some alert"));
        expect(view).toMatchSnapshot();
      });
      test('inline variation', () => {
        const view = (0, _enzyme.mount)(React.createElement(_Alert.Alert, {
          variant: variant,
          isInline: true,
          title: "Some title"
        }, "Some alert"));
        expect(view).toMatchSnapshot();
      });
    });
  });
});
//# sourceMappingURL=Alert.test.js.map