import _pt from "prop-types";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * body-row.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import { isEqual, isFunction } from 'lodash';
import * as React from 'react';
import { columnsAreEqual } from './columns-are-equal';
import { evaluateFormatters } from './evaluate-formatters';
import { evaluateTransforms } from './evaluate-transforms';
import { mergeProps } from './merge-props';
export class BodyRow extends React.Component {
  shouldComponentUpdate(nextProps) {
    const {
      columns,
      rowData
    } = this.props; // Check for row based override.

    const {
      renderers
    } = nextProps;

    if (renderers && renderers.row && renderers.row.shouldComponentUpdate) {
      if (isFunction(renderers.row.shouldComponentUpdate)) {
        return renderers.row.shouldComponentUpdate.call(this, nextProps, {}, {});
      }

      return true;
    }

    return !(columnsAreEqual(columns, nextProps.columns) && isEqual(rowData, nextProps.rowData));
  }

  render() {
    const {
      columns,
      renderers,
      onRow,
      rowKey,
      rowIndex,
      rowData
    } = this.props;
    return React.createElement(renderers.row, onRow(rowData, {
      rowIndex,
      rowKey
    }), columns.map((column, columnIndex) => {
      const {
        property,
        cell,
        props
      } = column;
      const evaluatedProperty = property || cell && cell.property;
      const {
        transforms = [],
        formatters = []
      } = cell || {};
      const extraParameters = {
        columnIndex,
        property: evaluatedProperty,
        column,
        rowData,
        rowIndex,
        rowKey
      };
      const transformed = evaluateTransforms(transforms, rowData[evaluatedProperty], extraParameters);

      if (!transformed) {
        // tslint:disable-next-line:no-console
        console.warn('Table.Body - Failed to receive a transformed result');
      }

      return React.createElement(renderers.cell, _objectSpread({
        key: `${columnIndex}-cell`
      }, mergeProps(props, cell && cell.props, transformed)), transformed.children || evaluateFormatters(formatters)(rowData[`_${evaluatedProperty}`] || rowData[evaluatedProperty], extraParameters));
    }));
  }

}

_defineProperty(BodyRow, "propTypes", {
  columns: _pt.any.isRequired,
  renderers: _pt.any.isRequired,
  onRow: _pt.any,
  rowIndex: _pt.number.isRequired,
  rowData: _pt.any.isRequired,
  rowKey: _pt.string.isRequired
});

_defineProperty(BodyRow, "defaultProps", {
  onRow: (...args) => Object
});
//# sourceMappingURL=body-row.js.map