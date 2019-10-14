import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { Body as BaseBody } from './base';
import { TableContext } from './Table';
import { isRowExpanded } from './utils';

const flagVisibility = rows => {
  const visibleRows = rows.filter(oneRow => !oneRow.parent || oneRow.isExpanded);

  if (visibleRows.length > 0) {
    visibleRows[0].isFirstVisible = true;
    visibleRows[visibleRows.length - 1].isLastVisible = true;
  }
};

class ContextBody extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onRow", (row, rowProps) => {
      const {
        onRowClick,
        onRow
      } = this.props;

      const extendedRowProps = _objectSpread({}, rowProps, {}, onRow ? onRow(row, rowProps) : {});

      return {
        row,
        rowProps: extendedRowProps,
        onMouseDown: event => {
          const computedData = {
            isInput: event.target.tagName !== 'INPUT',
            isButton: event.target.tagName !== 'BUTTON'
          };
          onRowClick(event, row, rowProps, computedData);
        }
      };
    });

    _defineProperty(this, "mapCells", (headerData, row, rowKey) => {
      // column indexes start after generated optional columns
      let additionalColsIndexShift = headerData[0].extraParams.firstUserColumnIndex;
      return _objectSpread({}, row && (row.cells || row).reduce((acc, cell, cellIndex) => {
        const isCellObject = cell === Object(cell);
        const mappedCell = {
          [headerData[cellIndex + additionalColsIndexShift].property]: {
            title: isCellObject ? cell.title : cell,
            props: _objectSpread({
              isVisible: true
            }, isCellObject ? cell.props : null)
          }
        }; // increment the shift index when a cell spans multiple columns

        if (isCellObject && cell.props && cell.props.colSpan) {
          additionalColsIndexShift += cell.props.colSpan - 1;
        }

        return _objectSpread({}, acc, {}, mappedCell);
      }, {
        id: row.id !== undefined ? row.id : rowKey
      }));
    });
  }

  render() {
    const _this$props = this.props,
          {
      className,
      headerData,
      rows,
      rowKey,
      children,
      onRowClick
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["className", "headerData", "rows", "rowKey", "children", "onRowClick"]);

    let mappedRows;

    if (headerData.length > 0) {
      mappedRows = rows.map((oneRow, oneRowKey) => _objectSpread({}, oneRow, {}, this.mapCells(headerData, oneRow, oneRowKey), {
        isExpanded: isRowExpanded(oneRow, rows),
        isFirst: oneRowKey === 0,
        isLast: oneRowKey === rows.length - 1,
        isFirstVisible: false,
        isLastVisible: false
      }));
      flagVisibility(mappedRows);
    }

    return React.createElement(React.Fragment, null, mappedRows && React.createElement(BaseBody, _extends({}, props, {
      mappedRows: mappedRows,
      rows: mappedRows,
      onRow: this.onRow,
      rowKey: rowKey,
      className: className
    })));
  }

}

_defineProperty(ContextBody, "propTypes", {
  className: _pt.string,
  children: _pt.node,
  headerData: _pt.arrayOf(_pt.any),
  rows: _pt.arrayOf(_pt.any),
  rowKey: _pt.any,
  onRowClick: _pt.any,
  onRow: _pt.any
});

export const TableBody = (_ref) => {
  let {
    onRow = (...args) => Object,
    className = '',
    children = null,
    rowKey = 'id',
    onRowClick = (...args) => undefined
  } = _ref,
      props = _objectWithoutProperties(_ref, ["onRow", "className", "children", "rowKey", "onRowClick"]);

  return React.createElement(TableContext.Consumer, null, (_ref2) => {
    let {
      headerData = [],
      rows = []
    } = _ref2,
        rest = _objectWithoutProperties(_ref2, ["headerData", "rows"]);

    return React.createElement(ContextBody, _extends({
      headerData: headerData,
      rows: rows,
      onRow: onRow,
      className: className,
      children: children,
      rowKey: rowKey,
      onRowClick: onRowClick
    }, props, rest));
  });
};
TableBody.propTypes = {
  className: _pt.string,
  children: _pt.node,
  headerData: _pt.arrayOf(_pt.any),
  rows: _pt.arrayOf(_pt.any),
  rowKey: _pt.any,
  onRowClick: _pt.any,
  onRow: _pt.any
};
//# sourceMappingURL=Body.js.map