(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./StyleSheet"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./StyleSheet"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.StyleSheet);
    global.undefined = mod.exports;
  }
})(this, function (_StyleSheet) {
  "use strict";

  test('converts a css string into an object', () => {
    const styles = _StyleSheet.StyleSheet.parse(`
  .pf-c-button {
    color: red;
  }
  .pf-c-alert {
    color: black;
  }
  `);

    expect(styles).toMatchSnapshot();
  });
  test('places modifers in the modifers object', () => {
    const styles = _StyleSheet.StyleSheet.parse(`
  .pf-m-active {}
  .pf-m-secondary-alt {}
  `);

    expect(styles).toMatchSnapshot();
  });
  describe('css', () => {
    const stringValue = 'value';

    const parseValue = _StyleSheet.StyleSheet.parse('.parseValue {}');

    const createValue = _StyleSheet.StyleSheet.create({
      createValue: {}
    });

    test('removes falsy values', () => {
      const result = (0, _StyleSheet.css)(stringValue, null, undefined, false, 0);
      expect(result).toBe(stringValue);
    });
    test('handles values from StyleSheet.parse', () => {
      expect((0, _StyleSheet.css)(parseValue.parseValue)).toMatchSnapshot();
    });
    test('handles values from StyleSheet.create', () => {
      expect((0, _StyleSheet.css)(createValue.createValue)).toMatchSnapshot();
    });
    test('concatenates values together', () => {
      expect((0, _StyleSheet.css)(parseValue.parseValue, createValue.createValue, stringValue)).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=StyleSheet.test.js.map