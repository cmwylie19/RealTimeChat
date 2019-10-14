"use strict";

var _StyleSheet = require("./StyleSheet");

test('converts a css string into an object', function () {
  var styles = _StyleSheet.StyleSheet.parse("\n  .pf-c-button {\n    color: red;\n  }\n  .pf-c-alert {\n    color: black;\n  }\n  ");

  expect(styles).toMatchSnapshot();
});
test('places modifers in the modifers object', function () {
  var styles = _StyleSheet.StyleSheet.parse("\n  .pf-m-active {}\n  .pf-m-secondary-alt {}\n  ");

  expect(styles).toMatchSnapshot();
});
describe('css', function () {
  var stringValue = 'value';

  var parseValue = _StyleSheet.StyleSheet.parse('.parseValue {}');

  var createValue = _StyleSheet.StyleSheet.create({
    createValue: {}
  });

  test('removes falsy values', function () {
    var result = (0, _StyleSheet.css)(stringValue, null, undefined, false, 0);
    expect(result).toBe(stringValue);
  });
  test('handles values from StyleSheet.parse', function () {
    expect((0, _StyleSheet.css)(parseValue.parseValue)).toMatchSnapshot();
  });
  test('handles values from StyleSheet.create', function () {
    expect((0, _StyleSheet.css)(createValue.createValue)).toMatchSnapshot();
  });
  test('concatenates values together', function () {
    expect((0, _StyleSheet.css)(parseValue.parseValue, createValue.createValue, stringValue)).toMatchSnapshot();
  });
});
//# sourceMappingURL=StyleSheet.test.js.map