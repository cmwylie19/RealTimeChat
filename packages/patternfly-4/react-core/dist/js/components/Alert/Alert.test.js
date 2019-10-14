"use strict";

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _Alert = require("./Alert");

var _AlertActionLink = require("./AlertActionLink");

var _AlertActionCloseButton = require("./AlertActionCloseButton");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

test('default Alert variant is info', function () {
  var view = (0, _enzyme.shallow)(React.createElement(_Alert.Alert, {
    title: "this is a test"
  }, "Alert testing"));
  expect(view.props().className).toMatch(/pf-m-info/);
});
Object.values(_Alert.AlertVariant).forEach(function (variant) {
  describe("Alert - ".concat(variant), function () {
    test('Description', function () {
      var view = (0, _enzyme.mount)(React.createElement(_Alert.Alert, {
        variant: variant,
        title: ""
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
    test('Title', function () {
      var view = (0, _enzyme.mount)(React.createElement(_Alert.Alert, {
        variant: variant,
        title: "Some title"
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
    test('Action Link', function () {
      var view = (0, _enzyme.mount)(React.createElement(_Alert.Alert, {
        variant: variant,
        action: React.createElement(_AlertActionLink.AlertActionLink, null, "test"),
        title: ""
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
    test('Action Close Button', function () {
      var onClose = jest.fn();
      var view = (0, _enzyme.mount)(React.createElement(_Alert.Alert, {
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
    test('Action and Title', function () {
      var view = (0, _enzyme.mount)(React.createElement(_Alert.Alert, {
        variant: variant,
        action: React.createElement(_AlertActionLink.AlertActionLink, null, "test"),
        title: "Some title"
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
    test('Custom aria label', function () {
      var view = (0, _enzyme.mount)(React.createElement(_Alert.Alert, {
        variant: variant,
        "aria-label": "Custom aria label for ".concat(variant),
        action: React.createElement(_AlertActionLink.AlertActionLink, null, "test"),
        title: "Some title"
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
    test('inline variation', function () {
      var view = (0, _enzyme.mount)(React.createElement(_Alert.Alert, {
        variant: variant,
        isInline: true,
        title: "Some title"
      }, "Some alert"));
      expect(view).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=Alert.test.js.map