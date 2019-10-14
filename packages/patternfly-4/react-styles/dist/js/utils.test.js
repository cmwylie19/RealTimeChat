"use strict";

var utils = _interopRequireWildcard(require("./utils"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('isValidStyleDeclaration', function () {
  test('returns false for a falsy value', function () {
    var result = utils.isValidStyleDeclaration(null);
    expect(result).toBe(false);
  });
  test('returns false for object without a string __className', function () {
    var result = utils.isValidStyleDeclaration({
      __className: {}
    });
    expect(result).toBe(false);
  });
  test('returns false for object without a function __inject', function () {
    var result = utils.isValidStyleDeclaration({
      __inject: {}
    });
    expect(result).toBe(false);
  });
  test('returns true for object with a string __className and function __inject', function () {
    var result = utils.isValidStyleDeclaration({
      __inject: jest.fn(),
      __className: 'class'
    });
    expect(result).toBe(true);
  });
});
test('createStyleDeclaration', function () {
  expect(utils.createStyleDeclaration('  .foo-bar  ', 'css')).toMatchSnapshot();
});
describe('isModifier', function () {
  test('returns true for class starting with .pf-m-', function () {
    var result = utils.isModifier('.pf-m-test');
    expect(result).toBe(true);
  });
  test('returns false for class not starting with .pf-m-', function () {
    var result = utils.isModifier('.pf-l-test');
    expect(result).toBe(false);
  });
  test('returns false for non string values', function () {
    var result = utils.isModifier({});
    expect(result).toBe(false);
  });
});
describe('getModifier', function () {
  var styles = {
    modifiers: {
      fooBar: {}
    }
  };
  test('gets modifer from style object', function () {
    var modifer = utils.getModifier(styles, 'fooBar');
    expect(modifer).toBe(styles.modifiers.fooBar);
  });
  test('gets modifer from modifers object', function () {
    var modifer = utils.getModifier(styles.modifiers, 'fooBar');
    expect(modifer).toBe(styles.modifiers.fooBar);
  });
  test('gets modifer using dash case lookup', function () {
    var modifer = utils.getModifier(styles, 'foo-bar');
    expect(modifer).toBe(styles.modifiers.fooBar);
  });
  test('returns default modifier if specified modifier is not found', function () {
    var defaultModifier = {};
    var modifer = utils.getModifier(styles, 'other', defaultModifier);
    expect(modifer).toBe(defaultModifier);
  });
  test('returns null for falsy styleObjects', function () {
    var modifer = utils.getModifier(null, 'fooBar');
    expect(modifer).toBe(null);
  });
});
describe('formatClassName', function () {
  test('formats component class names', function () {
    expect(utils.formatClassName('pf-c-foo-bar__baz')).toMatchSnapshot();
  });
  test('formats layout class names', function () {
    expect(utils.formatClassName('pf-l-foo-bar__baz')).toMatchSnapshot();
  });
  test('formats utility class names', function () {
    expect(utils.formatClassName('pf-u-foo-bar__baz')).toMatchSnapshot();
  });
});
test('getCSSClasses returns classes from css', function () {
  var css = "\n    .foo,\n    .bar {}\n\n    p.baz {}\n\n    @media(min-width: 0px) {\n      .baz {}\n    }\n  ";
  expect(utils.getCSSClasses(css)).toMatchSnapshot();
});
describe('getClassName', function () {
  test('returns self if string', function () {
    var style = 'foo';
    expect(utils.getClassName(style)).toBe(style);
  });
  test('returns empty string if it is not a styleObject', function () {
    expect(utils.getClassName({})).toBe('');
  });
  test('returns className from styleObj', function () {
    var style = utils.createStyleDeclaration('.foo-bar', '');
    expect(utils.getClassName(style)).toMatchSnapshot();
  });
});
//# sourceMappingURL=utils.test.js.map