function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { TableContext, TableBody, isRowExpanded } from '@patternfly/react-table';
import PropTypes from 'prop-types';
import { TableEditConfirmation } from './constants';
import { showIdWarnings } from './utils/utils';

const propTypes = _objectSpread({}, TableBody.propTypes, {
  editConfig: PropTypes.shape({
    editConfirmationType: PropTypes.oneOf(Object.values(TableEditConfirmation)),
    onEditCellClicked: PropTypes.func,
    onEditConfirmed: PropTypes.func,
    onEditCanceled: PropTypes.func
  }).isRequired,

  /** Function that is fired when user clicks on a row if not editing.  */
  onRowClick: PropTypes.func
});

const defaultProps = _objectSpread({}, TableBody.defaultProps, {
  editConfig: null,
  onRowClick: () => undefined
});

const resolveCascadeEditability = rows => {
  const isRowExpandedIndexes = new Set(rows.map((row, idx) => isRowExpanded(row, rows) ? idx : null).filter(row => row !== null)); // flag parents and their children which are edited together

  rows.filter((row, idx) => row.parent !== undefined && row.isEditing && isRowExpandedIndexes.has(idx) && row.isEditableTogetherWithParent && rows[row.parent].isEditing).forEach(row => {
    rows[row.parent].isChildEditing = true;
    row.isParentEditing = true;
  });
  const lastVisibleRow = rows.filter((row, idx) => !row.parent || isRowExpandedIndexes.has(idx)).pop(); // flag last parent row if there are only descendants under it

  if (lastVisibleRow && lastVisibleRow.isParentEditing) {
    let parentRow = lastVisibleRow;

    while (parentRow.parent !== undefined && parentRow.isEditableTogetherWithParent) {
      parentRow = rows[parentRow.parent];
    }

    parentRow.isLastVisibleParent = true;
  }
};

const onRow = (event, row, rowProps, computedData, {
  onRowClick,
  editConfig
}) => {
  const {
    target
  } = event;
  const cell = target.closest('[data-key]');
  const cellNumber = parseInt(cell && cell.getAttribute('data-key'), 10);
  const hasCellNumber = !Number.isNaN(cellNumber);
  let onEditCellClicked;

  if (hasCellNumber && editConfig && typeof editConfig.onEditCellClicked === 'function') {
    // resolve closest (e.g. for dropdowns) usable id of a clicked element inside a cell
    const idElement = target.closest('[id]');
    const elementId = idElement && cell.contains(idElement) ? idElement.getAttribute('id') || null : null;

    if (!elementId) {
      showIdWarnings(row, target);
    }

    onEditCellClicked = () => {
      editConfig.onEditCellClicked(event, row, _objectSpread({}, rowProps, {
        columnIndex: cellNumber,
        elementId
      }));
    };
  } // give priority to fire onChange/onBlur callbacks


  setTimeout(() => {
    if (!row.isEditing) {
      onRowClick(event, row, rowProps, computedData);

      if (onEditCellClicked) {
        // edit cell after rerender
        setTimeout(onEditCellClicked, 0);
      }
    } else if (onEditCellClicked) {
      onEditCellClicked();
    }
  }, 0);
};

const Body = (_ref) => {
  let {
    BodyComponent,
    rows,
    editConfig,
    onRowClick
  } = _ref,
      props = _objectWithoutProperties(_ref, ["BodyComponent", "rows", "editConfig", "onRowClick"]);

  const isTableEditing = rows.some(row => row.isEditing);
  const mappedRows = rows.map(row => _objectSpread({}, row, {
    editConfig,
    isTableEditing
  }));
  resolveCascadeEditability(mappedRows);
  return React.createElement(BodyComponent, _extends({}, props, {
    rows: mappedRows,
    onRowClick: (event, row, rowProps, computedData) => onRow(event, row, rowProps, computedData, {
      onRowClick,
      editConfig
    })
  }));
};

Body.propTypes = {
  BodyComponent: PropTypes.any.isRequired,
  rows: PropTypes.array,
  editConfig: PropTypes.any,
  onRowClick: PropTypes.func
};
Body.defaultProps = {
  rows: [],
  editConfig: null,
  onRowClick: () => undefined
};

const editableTableBody = BodyComponent => {
  const InlineEditBody = (_ref2) => {
    let {
      editConfig,
      onRowClick
    } = _ref2,
        props = _objectWithoutProperties(_ref2, ["editConfig", "onRowClick"]);

    return React.createElement(TableContext.Consumer, null, (_ref3) => {
      let {
        rows
      } = _ref3,
          consumedProps = _objectWithoutProperties(_ref3, ["rows"]);

      return React.createElement(Body, _extends({}, consumedProps, {
        rows: rows
      }, props, {
        editConfig: editConfig,
        onRowClick: onRowClick,
        BodyComponent: BodyComponent
      }));
    });
  };

  InlineEditBody.propTypes = propTypes;
  InlineEditBody.defaultProps = defaultProps;
  return InlineEditBody;
};

export default editableTableBody;
//# sourceMappingURL=editableTableBody.js.map