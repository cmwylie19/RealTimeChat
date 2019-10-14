"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _InputGroup = require("./InputGroup");

var _InputGroupText = require("./InputGroupText");

var _Button = require("../Button");

var _TextInput = require("../TextInput");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('InputGroupText', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InputGroupText.InputGroupText, {
    className: "inpt-grp-text",
    id: "email-npt-grp"
  }, "@"));
  expect(view.find('span')).toHaveLength(1);
  var spanProps = view.find('span').props();
  expect(spanProps.className).toEqual(expect.stringContaining('inpt-grp-text'));
  expect(spanProps.id).toBe('email-npt-grp');
  expect(view.text()).toBe('@');
});
test('InputGroup', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InputGroup.InputGroup, {
    className: "text-verify-cls",
    id: "text-1"
  }, _react["default"].createElement(_TextInput.TextInput, {
    value: "this is text",
    "aria-label": "data text"
  })));
  expect(view.find('div')).toHaveLength(1);
  var divProps = view.find('div').props();
  expect(divProps.className).toEqual(expect.stringContaining('text-verify-cls'));
  expect(divProps.id).toBe('text-1');
});
test('add aria-describedby to form-control if one of the non form-controls has id', function () {
  // In this test, TextInput is a form-control component and Button is not.
  // If Button has an id props, this should be used in aria-describedby.
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_InputGroup.InputGroup, null, _react["default"].createElement(_TextInput.TextInput, {
    value: "some data",
    "aria-label": "some text"
  }), _react["default"].createElement(_Button.Button, {
    variant: "primary",
    id: "button-id"
  }, "hello")));
  expect(view.find(_TextInput.TextInput).props()['aria-describedby']).toBe('button-id');
});
//# sourceMappingURL=InputGroup.test.js.map