"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _reactTable = require("@patternfly/react-table");

var _reactCore = require("@patternfly/react-core");

var _editableRowWrapper = _interopRequireDefault(require("./editableRowWrapper"));

var _editableTableBody = _interopRequireDefault(require("./editableTableBody"));

var _utils = require("./utils");

var _constants = require("./constants");

var _TableTextInput = require("../TableTextInput");

var _dataSets = require("../../test-helpers/data-sets");

var _helpers = require("../../test-helpers/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var firstColTitle = 'editcolfirst';
var lastColTitle = 'editcollast';
var firstInputName = 'inputOne';
var secondInputName = 'inputTwo';
var editRowIndex = 2;
var firstColEditedRowInputId = {
  rowIndex: editRowIndex,
  columnIndex: 0,
  column: {
    property: firstColTitle
  },
  name: firstInputName
};
var lastColEditedRowInputId = {
  rowIndex: editRowIndex,
  columnIndex: _dataSets.columns.length + 2 - 1,
  column: {
    property: lastColTitle
  },
  name: secondInputName
};
describe('Editable table', function () {
  var mountOptions;
  var container;
  beforeEach(function () {
    container = (0, _enzyme.mount)(_react["default"].createElement("div", null));
    mountOptions = {
      attachTo: container.getDOMNode()
    }; // mock closest for selecting the first column (firing onEditCellClicked) and resolving table for confirm buttons

    (0, _helpers.mockClosest)({
      '[data-key]': {
        getAttribute: function getAttribute() {
          return firstColEditedRowInputId.columnIndex;
        },
        contains: function contains(elem) {
          return elem.getAttribute('id') === (0, _helpers.makeTableId)(firstColEditedRowInputId);
        }
      },
      '[id]': {
        getAttribute: function getAttribute() {
          return (0, _helpers.makeTableId)(firstColEditedRowInputId);
        }
      }
    }, function (selector) {
      return selector === 'table' ? container.getDOMNode().getElementsByTagName('table')[0] : undefined;
    }, true);
  });
  afterEach(function () {
    container.unmount();
  });
  test('should call correct function', function () {
    var ComposedBody = (0, _editableTableBody["default"])(_reactTable.TableBody);
    var ComposedRowWrapper = (0, _editableRowWrapper["default"])(_reactTable.RowWrapper);
    var onBlur = jest.fn();
    var inlineEditingFormatter = (0, _utils.inlineEditFormatterFactory)({
      renderEdit: function renderEdit(value, _ref, _ref2) {
        var columnIndex = _ref.columnIndex,
            rowIndex = _ref.rowIndex,
            column = _ref.column;
        var activeEditId = _ref2.activeEditId;
        var firstInputId = (0, _helpers.makeTableId)({
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          column: column,
          name: firstInputName
        });
        var secondInputId = (0, _helpers.makeTableId)({
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          column: column,
          name: secondInputName
        });
        return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_TableTextInput.TableTextInput, {
          id: firstInputId,
          defaultValue: value,
          onBlur: onBlur,
          autoFocus: activeEditId === firstInputId
        }), _react["default"].createElement(_TableTextInput.TableTextInput, {
          id: secondInputId,
          defaultValue: value,
          onBlur: onBlur,
          autoFocus: activeEditId === secondInputId
        }));
      }
    });
    var editableCols = [{
      title: firstColTitle,
      cellFormatters: [inlineEditingFormatter]
    }].concat(_toConsumableArray(_dataSets.columns), [{
      title: lastColTitle,
      cellFormatters: [inlineEditingFormatter]
    }]);

    var editableRows = _dataSets.rows.map(function (row) {
      return _objectSpread({}, row, {
        cells: [''].concat(_toConsumableArray(row.cells), ['']) // add two new columns

      });
    });

    editableRows[editRowIndex].isEditing = true;
    var editConfig = {
      activeEditId: (0, _helpers.makeTableId)(lastColEditedRowInputId),
      onEditCellClicked: jest.fn(),
      editConfirmationType: _constants.TableEditConfirmation.ROW,
      onEditConfirmed: jest.fn(),
      onEditCanceled: jest.fn()
    };
    var view = (0, _enzyme.mount)(_react["default"].createElement(_reactTable.Table, {
      caption: "Editable table",
      cells: editableCols,
      rows: editableRows,
      rowWrapper: ComposedRowWrapper
    }, _react["default"].createElement(_reactTable.TableHeader, null), _react["default"].createElement(ComposedBody, {
      editConfig: editConfig
    })), mountOptions); // calls onBlur properly

    var editTextInputWrapper = view.find(_reactCore.TextInput).find("#".concat((0, _helpers.makeTableId)(lastColEditedRowInputId))).first();
    editTextInputWrapper.prop('onBlur')({
      currentTarget: {
        value: 'water'
      }
    });
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur.mock.calls).toHaveLength(1);
    expect(onBlur.mock.calls[0][0]).toBe('water'); // responds to cell click

    view.find("#".concat((0, _helpers.makeTableId)(firstColEditedRowInputId))).hostNodes().simulate('mousedown'); // should immediately call onEditCellClicked

    setTimeout(function () {
      return expect(editConfig.onEditCellClicked).toHaveBeenCalled();
    }, 0); // responds to confirmation button clicks

    view.find('.pf-c-table__inline-edit-buttons button.pf-c-button.pf-m-primary').simulate('mouseup');
    expect(editConfig.onEditConfirmed).toHaveBeenCalled();
    view.find('.pf-c-table__inline-edit-buttons button.pf-c-button.pf-m-plain').simulate('mouseup');
    expect(editConfig.onEditCanceled).toHaveBeenCalled();
  });
});
//# sourceMappingURL=InlineEdit.api.test.js.map