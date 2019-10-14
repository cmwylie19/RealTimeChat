(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "@patternfly/react-table", "@patternfly/react-core", "./editableRowWrapper", "./editableTableBody", "./utils", "./constants", "../TableTextInput", "../../test-helpers/data-sets", "../../test-helpers/helpers"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("@patternfly/react-table"), require("@patternfly/react-core"), require("./editableRowWrapper"), require("./editableTableBody"), require("./utils"), require("./constants"), require("../TableTextInput"), require("../../test-helpers/data-sets"), require("../../test-helpers/helpers"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.reactTable, global.reactCore, global.editableRowWrapper, global.editableTableBody, global.utils, global.constants, global.TableTextInput, global.dataSets, global.helpers);
    global.undefined = mod.exports;
  }
})(this, function (_react, _enzyme, _reactTable, _reactCore, _editableRowWrapper, _editableTableBody, _utils, _constants, _TableTextInput, _dataSets, _helpers) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _editableRowWrapper2 = _interopRequireDefault(_editableRowWrapper);

  var _editableTableBody2 = _interopRequireDefault(_editableTableBody);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  const firstColTitle = 'editcolfirst';
  const lastColTitle = 'editcollast';
  const firstInputName = 'inputOne';
  const secondInputName = 'inputTwo';
  const editRowIndex = 2;
  const firstColEditedRowInputId = {
    rowIndex: editRowIndex,
    columnIndex: 0,
    column: {
      property: firstColTitle
    },
    name: firstInputName
  };
  const lastColEditedRowInputId = {
    rowIndex: editRowIndex,
    columnIndex: _dataSets.columns.length + 2 - 1,
    column: {
      property: lastColTitle
    },
    name: secondInputName
  };
  describe('Editable table', () => {
    let mountOptions;
    let container;
    beforeEach(() => {
      container = (0, _enzyme.mount)(_react2.default.createElement("div", null));
      mountOptions = {
        attachTo: container.getDOMNode()
      }; // mock closest for selecting the first column (firing onEditCellClicked) and resolving table for confirm buttons

      (0, _helpers.mockClosest)({
        '[data-key]': {
          getAttribute: () => firstColEditedRowInputId.columnIndex,
          contains: elem => elem.getAttribute('id') === (0, _helpers.makeTableId)(firstColEditedRowInputId)
        },
        '[id]': {
          getAttribute: () => (0, _helpers.makeTableId)(firstColEditedRowInputId)
        }
      }, selector => selector === 'table' ? container.getDOMNode().getElementsByTagName('table')[0] : undefined, true);
    });
    afterEach(() => {
      container.unmount();
    });
    test('should call correct function', () => {
      const ComposedBody = (0, _editableTableBody2.default)(_reactTable.TableBody);
      const ComposedRowWrapper = (0, _editableRowWrapper2.default)(_reactTable.RowWrapper);
      const onBlur = jest.fn();
      const inlineEditingFormatter = (0, _utils.inlineEditFormatterFactory)({
        renderEdit: (value, {
          columnIndex,
          rowIndex,
          column
        }, {
          activeEditId
        }) => {
          const firstInputId = (0, _helpers.makeTableId)({
            rowIndex,
            columnIndex,
            column,
            name: firstInputName
          });
          const secondInputId = (0, _helpers.makeTableId)({
            rowIndex,
            columnIndex,
            column,
            name: secondInputName
          });
          return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_TableTextInput.TableTextInput, {
            id: firstInputId,
            defaultValue: value,
            onBlur: onBlur,
            autoFocus: activeEditId === firstInputId
          }), _react2.default.createElement(_TableTextInput.TableTextInput, {
            id: secondInputId,
            defaultValue: value,
            onBlur: onBlur,
            autoFocus: activeEditId === secondInputId
          }));
        }
      });
      const editableCols = [{
        title: firstColTitle,
        cellFormatters: [inlineEditingFormatter]
      }, ..._dataSets.columns, {
        title: lastColTitle,
        cellFormatters: [inlineEditingFormatter]
      }];

      const editableRows = _dataSets.rows.map(row => _objectSpread({}, row, {
        cells: ['', ...row.cells, ''] // add two new columns

      }));

      editableRows[editRowIndex].isEditing = true;
      const editConfig = {
        activeEditId: (0, _helpers.makeTableId)(lastColEditedRowInputId),
        onEditCellClicked: jest.fn(),
        editConfirmationType: _constants.TableEditConfirmation.ROW,
        onEditConfirmed: jest.fn(),
        onEditCanceled: jest.fn()
      };
      const view = (0, _enzyme.mount)(_react2.default.createElement(_reactTable.Table, {
        caption: "Editable table",
        cells: editableCols,
        rows: editableRows,
        rowWrapper: ComposedRowWrapper
      }, _react2.default.createElement(_reactTable.TableHeader, null), _react2.default.createElement(ComposedBody, {
        editConfig: editConfig
      })), mountOptions); // calls onBlur properly

      const editTextInputWrapper = view.find(_reactCore.TextInput).find(`#${(0, _helpers.makeTableId)(lastColEditedRowInputId)}`).first();
      editTextInputWrapper.prop('onBlur')({
        currentTarget: {
          value: 'water'
        }
      });
      expect(onBlur).toHaveBeenCalled();
      expect(onBlur.mock.calls).toHaveLength(1);
      expect(onBlur.mock.calls[0][0]).toBe('water'); // responds to cell click

      view.find(`#${(0, _helpers.makeTableId)(firstColEditedRowInputId)}`).hostNodes().simulate('mousedown'); // should immediately call onEditCellClicked

      setTimeout(() => expect(editConfig.onEditCellClicked).toHaveBeenCalled(), 0); // responds to confirmation button clicks

      view.find('.pf-c-table__inline-edit-buttons button.pf-c-button.pf-m-primary').simulate('mouseup');
      expect(editConfig.onEditConfirmed).toHaveBeenCalled();
      view.find('.pf-c-table__inline-edit-buttons button.pf-c-button.pf-m-plain').simulate('mouseup');
      expect(editConfig.onEditCanceled).toHaveBeenCalled();
    });
  });
});
//# sourceMappingURL=InlineEdit.api.test.js.map