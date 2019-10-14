function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { SelectColumn } from '../../SelectColumn';
export const selectable = (label, {
  rowIndex,
  columnIndex,
  rowData,
  column,
  property
}) => {
  const {
    extraParams: {
      onSelect,
      allRowsSelected,
      rowLabeledBy = 'simple-node'
    }
  } = column;
  const extraData = {
    rowIndex,
    columnIndex,
    column,
    property
  };

  if (rowData && rowData.hasOwnProperty('parent') && !rowData.showSelect) {
    return {
      component: 'td',
      isVisible: true,
      scope: ''
    };
  }

  const rowId = rowIndex !== undefined ? rowIndex : -1;

  function selectClick(event) {
    const selected = rowIndex === undefined ? event.target.checked : rowData && !rowData.selected; // todo: change event type to React.FormEvent<HTMLInputElement> in the future, breaking change a.t.m.
    // tslint:disable-next-line:no-unused-expression

    onSelect && onSelect(event, selected, rowId, rowData, extraData);
  }

  const customProps = _objectSpread({}, rowId !== -1 ? {
    "checked": rowData && !!rowData.selected,
    'aria-labelledby': rowLabeledBy + rowIndex
  } : {
    "checked": allRowsSelected,
    'aria-label': 'Select all rows'
  });

  return {
    className: css(styles.tableCheck),
    component: 'td',
    scope: '',
    isVisible: true,
    children: React.createElement(SelectColumn, _extends({}, customProps, {
      onSelect: selectClick,
      name: rowId !== -1 ? `checkrow${rowIndex}` : 'check-all'
    }), label)
  };
};
//# sourceMappingURL=selectable.js.map