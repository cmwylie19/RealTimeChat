import _pt from "prop-types";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * header-row.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import * as React from 'react';
import { evaluateFormatters } from './evaluate-formatters';
import { evaluateTransforms } from './evaluate-transforms';
import { mergeProps } from './merge-props';
export const HeaderRow = ({
  rowData,
  rowIndex,
  renderers,
  onRow = () => Object
}) => {
  return React.createElement(renderers.row, onRow(rowData, {
    rowIndex
  }), rowData.map((column, columnIndex) => {
    const {
      property,
      header = {},
      props = {}
    } = column;
    const evaluatedProperty = property || header && header.property;
    const {
      label,
      transforms = [],
      formatters = []
    } = header;
    const extraParameters = {
      columnIndex,
      property: evaluatedProperty,
      column
    };
    const transformedProps = evaluateTransforms(transforms, label, extraParameters);

    if (!transformedProps) {
      // tslint:disable-next-line:no-console
      console.warn('Table.Header - Failed to receive a transformed result'); // eslint-disable-line max-len, no-console
    }

    return React.createElement(renderers.cell, _objectSpread({
      key: `${columnIndex}-header`
    }, mergeProps(props, header && header.props, transformedProps)), transformedProps.children || evaluateFormatters(formatters)(label, extraParameters));
  }));
};
HeaderRow.propTypes = {
  rowData: _pt.any.isRequired,
  rowIndex: _pt.number.isRequired,
  renderers: _pt.any.isRequired,
  onRow: _pt.any
};
//# sourceMappingURL=header-row.js.map