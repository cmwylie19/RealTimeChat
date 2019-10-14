(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./inlineEditFormatterFactory"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./inlineEditFormatterFactory"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.inlineEditFormatterFactory);
    global.undefined = mod.exports;
  }
})(this, function (_inlineEditFormatterFactory) {
  "use strict";

  var _inlineEditFormatterFactory2 = _interopRequireDefault(_inlineEditFormatterFactory);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const blue = 'blue';
  const alteredValue = 'violet';

  const buildAdditionalData = (data, isEditing = true, activeEditId = 'testId') => ({
    rowData: {
      isEditing,
      editConfig: {
        activeEditId
      },
      data
    }
  });

  describe('inlineEditFormatterFactory', () => {
    test('renders default value', () => {
      const additionalData = buildAdditionalData(alteredValue);
      expect((0, _inlineEditFormatterFactory2.default)()(blue, additionalData)).toBe(blue);
    });
    test('renders resolved value', () => {
      const additionalData = buildAdditionalData(alteredValue);
      expect((0, _inlineEditFormatterFactory2.default)({
        resolveValue: (value, {
          rowData
        }) => rowData.data
      })(blue, additionalData)).toBe(alteredValue);
    });
    test('renders resolved and render value', () => {
      const additionalData = buildAdditionalData(alteredValue, false);
      expect((0, _inlineEditFormatterFactory2.default)({
        resolveValue: (value, {
          rowData
        }) => rowData.data,
        renderValue: value => `ultra ${value}`,
        renderEdit: value => `violent ${value}`
      })(blue, additionalData)).toBe(`ultra ${alteredValue}`);
    });
    test('renders resolved and render edit value', () => {
      const additionalData = buildAdditionalData(alteredValue);
      expect((0, _inlineEditFormatterFactory2.default)({
        resolveValue: (value, {
          rowData
        }) => rowData.data,
        renderEdit: value => `ultra ${value}`
      })(blue, additionalData)).toBe(`ultra ${alteredValue}`);
    });
    test('passes computed data', () => {
      const additionalData = buildAdditionalData(alteredValue, true, 'myId');
      expect((0, _inlineEditFormatterFactory2.default)({
        renderEdit: (value, data, {
          activeEditId
        }) => activeEditId
      })(blue, additionalData)).toBe('myId');
    });
  });
});
//# sourceMappingURL=inlineEditFormatterFactory.test.js.map