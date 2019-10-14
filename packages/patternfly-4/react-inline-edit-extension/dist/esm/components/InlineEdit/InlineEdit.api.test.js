function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { mount } from 'enzyme';
import { Table, TableHeader, TableBody, RowWrapper } from '@patternfly/react-table';
import { TextInput } from '@patternfly/react-core';
import { default as editableRowWrapper } from './editableRowWrapper';
import { default as editableTableBody } from './editableTableBody';
import { inlineEditFormatterFactory } from './utils';
import { TableEditConfirmation } from './constants';
import { TableTextInput } from '../TableTextInput';
import { rows, columns } from '../../test-helpers/data-sets';
import { mockClosest, makeTableId } from '../../test-helpers/helpers';
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
  columnIndex: columns.length + 2 - 1,
  column: {
    property: lastColTitle
  },
  name: secondInputName
};
describe('Editable table', () => {
  let mountOptions;
  let container;
  beforeEach(() => {
    container = mount(React.createElement("div", null));
    mountOptions = {
      attachTo: container.getDOMNode()
    }; // mock closest for selecting the first column (firing onEditCellClicked) and resolving table for confirm buttons

    mockClosest({
      '[data-key]': {
        getAttribute: () => firstColEditedRowInputId.columnIndex,
        contains: elem => elem.getAttribute('id') === makeTableId(firstColEditedRowInputId)
      },
      '[id]': {
        getAttribute: () => makeTableId(firstColEditedRowInputId)
      }
    }, selector => selector === 'table' ? container.getDOMNode().getElementsByTagName('table')[0] : undefined, true);
  });
  afterEach(() => {
    container.unmount();
  });
  test('should call correct function', () => {
    const ComposedBody = editableTableBody(TableBody);
    const ComposedRowWrapper = editableRowWrapper(RowWrapper);
    const onBlur = jest.fn();
    const inlineEditingFormatter = inlineEditFormatterFactory({
      renderEdit: (value, {
        columnIndex,
        rowIndex,
        column
      }, {
        activeEditId
      }) => {
        const firstInputId = makeTableId({
          rowIndex,
          columnIndex,
          column,
          name: firstInputName
        });
        const secondInputId = makeTableId({
          rowIndex,
          columnIndex,
          column,
          name: secondInputName
        });
        return React.createElement(React.Fragment, null, React.createElement(TableTextInput, {
          id: firstInputId,
          defaultValue: value,
          onBlur: onBlur,
          autoFocus: activeEditId === firstInputId
        }), React.createElement(TableTextInput, {
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
    }, ...columns, {
      title: lastColTitle,
      cellFormatters: [inlineEditingFormatter]
    }];
    const editableRows = rows.map(row => _objectSpread({}, row, {
      cells: ['', ...row.cells, ''] // add two new columns

    }));
    editableRows[editRowIndex].isEditing = true;
    const editConfig = {
      activeEditId: makeTableId(lastColEditedRowInputId),
      onEditCellClicked: jest.fn(),
      editConfirmationType: TableEditConfirmation.ROW,
      onEditConfirmed: jest.fn(),
      onEditCanceled: jest.fn()
    };
    const view = mount(React.createElement(Table, {
      caption: "Editable table",
      cells: editableCols,
      rows: editableRows,
      rowWrapper: ComposedRowWrapper
    }, React.createElement(TableHeader, null), React.createElement(ComposedBody, {
      editConfig: editConfig
    })), mountOptions); // calls onBlur properly

    const editTextInputWrapper = view.find(TextInput).find(`#${makeTableId(lastColEditedRowInputId)}`).first();
    editTextInputWrapper.prop('onBlur')({
      currentTarget: {
        value: 'water'
      }
    });
    expect(onBlur).toHaveBeenCalled();
    expect(onBlur.mock.calls).toHaveLength(1);
    expect(onBlur.mock.calls[0][0]).toBe('water'); // responds to cell click

    view.find(`#${makeTableId(firstColEditedRowInputId)}`).hostNodes().simulate('mousedown'); // should immediately call onEditCellClicked

    setTimeout(() => expect(editConfig.onEditCellClicked).toHaveBeenCalled(), 0); // responds to confirmation button clicks

    view.find('.pf-c-table__inline-edit-buttons button.pf-c-button.pf-m-primary').simulate('mouseup');
    expect(editConfig.onEditConfirmed).toHaveBeenCalled();
    view.find('.pf-c-table__inline-edit-buttons button.pf-c-button.pf-m-plain').simulate('mouseup');
    expect(editConfig.onEditCanceled).toHaveBeenCalled();
  });
});
//# sourceMappingURL=InlineEdit.api.test.js.map