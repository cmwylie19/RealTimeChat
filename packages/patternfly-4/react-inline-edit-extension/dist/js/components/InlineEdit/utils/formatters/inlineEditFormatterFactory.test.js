"use strict";

var _inlineEditFormatterFactory = _interopRequireDefault(require("./inlineEditFormatterFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var blue = 'blue';
var alteredValue = 'violet';

var buildAdditionalData = function buildAdditionalData(data) {
  var isEditing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var activeEditId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'testId';
  return {
    rowData: {
      isEditing: isEditing,
      editConfig: {
        activeEditId: activeEditId
      },
      data: data
    }
  };
};

describe('inlineEditFormatterFactory', function () {
  test('renders default value', function () {
    var additionalData = buildAdditionalData(alteredValue);
    expect((0, _inlineEditFormatterFactory["default"])()(blue, additionalData)).toBe(blue);
  });
  test('renders resolved value', function () {
    var additionalData = buildAdditionalData(alteredValue);
    expect((0, _inlineEditFormatterFactory["default"])({
      resolveValue: function resolveValue(value, _ref) {
        var rowData = _ref.rowData;
        return rowData.data;
      }
    })(blue, additionalData)).toBe(alteredValue);
  });
  test('renders resolved and render value', function () {
    var additionalData = buildAdditionalData(alteredValue, false);
    expect((0, _inlineEditFormatterFactory["default"])({
      resolveValue: function resolveValue(value, _ref2) {
        var rowData = _ref2.rowData;
        return rowData.data;
      },
      renderValue: function renderValue(value) {
        return "ultra ".concat(value);
      },
      renderEdit: function renderEdit(value) {
        return "violent ".concat(value);
      }
    })(blue, additionalData)).toBe("ultra ".concat(alteredValue));
  });
  test('renders resolved and render edit value', function () {
    var additionalData = buildAdditionalData(alteredValue);
    expect((0, _inlineEditFormatterFactory["default"])({
      resolveValue: function resolveValue(value, _ref3) {
        var rowData = _ref3.rowData;
        return rowData.data;
      },
      renderEdit: function renderEdit(value) {
        return "ultra ".concat(value);
      }
    })(blue, additionalData)).toBe("ultra ".concat(alteredValue));
  });
  test('passes computed data', function () {
    var additionalData = buildAdditionalData(alteredValue, true, 'myId');
    expect((0, _inlineEditFormatterFactory["default"])({
      renderEdit: function renderEdit(value, data, _ref4) {
        var activeEditId = _ref4.activeEditId;
        return activeEditId;
      }
    })(blue, additionalData)).toBe('myId');
  });
});
//# sourceMappingURL=inlineEditFormatterFactory.test.js.map