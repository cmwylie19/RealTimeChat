(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./utils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./utils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.utils);
    global.undefined = mod.exports;
  }
})(this, function (_utils) {
  "use strict";

  var utils = _interopRequireWildcard(_utils);

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

  describe('isValidStyleDeclaration', () => {
    test('returns false for a falsy value', () => {
      const result = utils.isValidStyleDeclaration(null);
      expect(result).toBe(false);
    });
    test('returns false for object without a string __className', () => {
      const result = utils.isValidStyleDeclaration({
        __className: {}
      });
      expect(result).toBe(false);
    });
    test('returns false for object without a function __inject', () => {
      const result = utils.isValidStyleDeclaration({
        __inject: {}
      });
      expect(result).toBe(false);
    });
    test('returns true for object with a string __className and function __inject', () => {
      const result = utils.isValidStyleDeclaration({
        __inject: jest.fn(),
        __className: 'class'
      });
      expect(result).toBe(true);
    });
  });
  test('createStyleDeclaration', () => {
    expect(utils.createStyleDeclaration('  .foo-bar  ', 'css')).toMatchSnapshot();
  });
  describe('isModifier', () => {
    test('returns true for class starting with .pf-m-', () => {
      const result = utils.isModifier('.pf-m-test');
      expect(result).toBe(true);
    });
    test('returns false for class not starting with .pf-m-', () => {
      const result = utils.isModifier('.pf-l-test');
      expect(result).toBe(false);
    });
    test('returns false for non string values', () => {
      const result = utils.isModifier({});
      expect(result).toBe(false);
    });
  });
  describe('getModifier', () => {
    const styles = {
      modifiers: {
        fooBar: {}
      }
    };
    test('gets modifer from style object', () => {
      const modifer = utils.getModifier(styles, 'fooBar');
      expect(modifer).toBe(styles.modifiers.fooBar);
    });
    test('gets modifer from modifers object', () => {
      const modifer = utils.getModifier(styles.modifiers, 'fooBar');
      expect(modifer).toBe(styles.modifiers.fooBar);
    });
    test('gets modifer using dash case lookup', () => {
      const modifer = utils.getModifier(styles, 'foo-bar');
      expect(modifer).toBe(styles.modifiers.fooBar);
    });
    test('returns default modifier if specified modifier is not found', () => {
      const defaultModifier = {};
      const modifer = utils.getModifier(styles, 'other', defaultModifier);
      expect(modifer).toBe(defaultModifier);
    });
    test('returns null for falsy styleObjects', () => {
      const modifer = utils.getModifier(null, 'fooBar');
      expect(modifer).toBe(null);
    });
  });
  describe('formatClassName', () => {
    test('formats component class names', () => {
      expect(utils.formatClassName('pf-c-foo-bar__baz')).toMatchSnapshot();
    });
    test('formats layout class names', () => {
      expect(utils.formatClassName('pf-l-foo-bar__baz')).toMatchSnapshot();
    });
    test('formats utility class names', () => {
      expect(utils.formatClassName('pf-u-foo-bar__baz')).toMatchSnapshot();
    });
  });
  test('getCSSClasses returns classes from css', () => {
    const css = `
    .foo,
    .bar {}

    p.baz {}

    @media(min-width: 0px) {
      .baz {}
    }
  `;
    expect(utils.getCSSClasses(css)).toMatchSnapshot();
  });
  describe('getClassName', () => {
    test('returns self if string', () => {
      const style = 'foo';
      expect(utils.getClassName(style)).toBe(style);
    });
    test('returns empty string if it is not a styleObject', () => {
      expect(utils.getClassName({})).toBe('');
    });
    test('returns className from styleObj', () => {
      const style = utils.createStyleDeclaration('.foo-bar', '');
      expect(utils.getClassName(style)).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=utils.test.js.map