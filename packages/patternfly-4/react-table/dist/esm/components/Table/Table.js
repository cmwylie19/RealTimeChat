import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Table/table';
import stylesGrid from '@patternfly/react-styles/css/components/Table/table-grid';
import { DropdownPosition, DropdownDirection } from '@patternfly/react-core';
import { css, getModifier } from '@patternfly/react-styles';
import { Provider } from './base';
import { BodyCell } from './BodyCell';
import { HeaderCell } from './HeaderCell';
import { RowWrapper } from './RowWrapper';
import { BodyWrapper } from './BodyWrapper';
import { calculateColumns } from './utils/headerUtils';
export let TableGridBreakpoint;

(function (TableGridBreakpoint) {
  TableGridBreakpoint["none"] = "";
  TableGridBreakpoint["grid"] = "grid";
  TableGridBreakpoint["gridMd"] = "grid-md";
  TableGridBreakpoint["gridLg"] = "grid-lg";
  TableGridBreakpoint["gridXl"] = "grid-xl";
  TableGridBreakpoint["grid2xl"] = "grid-2xl";
})(TableGridBreakpoint || (TableGridBreakpoint = {}));

export let TableVariant;

(function (TableVariant) {
  TableVariant["compact"] = "compact";
})(TableVariant || (TableVariant = {}));

export let SortByDirection;

(function (SortByDirection) {
  SortByDirection["asc"] = "asc";
  SortByDirection["desc"] = "desc";
})(SortByDirection || (SortByDirection = {}));

export const TableContext = React.createContext({
  headerData: null,
  headerRows: null,
  rows: []
});
export class Table extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "isSelected", row => row.selected === true);

    _defineProperty(this, "areAllRowsSelected", rows => {
      if (rows === undefined || rows.length === 0) {
        return false;
      }

      return rows.every(row => this.isSelected(row) || row.hasOwnProperty('parent') && !row.showSelect);
    });
  }

  render() {
    const _this$props = this.props,
          {
      'aria-label': ariaLabel,
      caption,
      header,
      className,
      gridBreakPoint,
      onSort,
      onSelect,
      canSelectAll,
      sortBy,
      children,
      actions,
      actionResolver,
      areActionsDisabled,
      onCollapse,
      onExpand,
      rowLabeledBy,
      dropdownPosition,
      dropdownDirection,
      contentId,
      expandId,
      variant,
      rows,
      cells,
      bodyWrapper,
      rowWrapper,
      borders,
      role
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["aria-label", "caption", "header", "className", "gridBreakPoint", "onSort", "onSelect", "canSelectAll", "sortBy", "children", "actions", "actionResolver", "areActionsDisabled", "onCollapse", "onExpand", "rowLabeledBy", "dropdownPosition", "dropdownDirection", "contentId", "expandId", "variant", "rows", "cells", "bodyWrapper", "rowWrapper", "borders", "role"]);

    if (!ariaLabel && !caption && !header && role !== 'presentation') {
      // tslint:disable-next-line:no-console
      console.error('Table: Specify at least one of: header, caption, aria-label');
    }

    const headerData = calculateColumns(cells, {
      sortBy,
      onSort,
      onSelect,
      canSelectAll,
      allRowsSelected: onSelect ? this.areAllRowsSelected(rows) : false,
      actions,
      actionResolver,
      areActionsDisabled,
      onCollapse,
      onExpand,
      rowLabeledBy,
      expandId,
      contentId,
      dropdownPosition,
      dropdownDirection,
      firstUserColumnIndex: [onCollapse, onSelect].filter(callback => callback).length
    });
    return React.createElement(TableContext.Provider, {
      value: {
        headerData,
        headerRows: null,
        rows
      }
    }, header, React.createElement(Provider, _extends({}, props, {
      "aria-label": ariaLabel,
      renderers: {
        body: {
          wrapper: bodyWrapper || BodyWrapper,
          row: rowWrapper || RowWrapper,
          cell: BodyCell
        },
        header: {
          cell: HeaderCell
        }
      },
      columns: headerData,
      role: role,
      className: css(styles.table, gridBreakPoint && getModifier(stylesGrid, gridBreakPoint), getModifier(styles, variant), (onCollapse && variant === TableVariant.compact || onExpand) && styles.modifiers.expandable, variant === TableVariant.compact && borders === false ? styles.modifiers.noBorderRows : null, className)
    }), caption && React.createElement("caption", null, caption), children));
  }

}

_defineProperty(Table, "propTypes", {
  'aria-label': _pt.string,
  children: _pt.node,
  className: _pt.string,
  variant: _pt.oneOf(['compact']),
  borders: _pt.bool,
  gridBreakPoint: _pt.oneOf(['', 'grid', 'grid-md', 'grid-lg', 'grid-xl', 'grid-2xl']),
  sortBy: _pt.shape({
    index: _pt.number,
    direction: _pt.oneOf(['asc', 'desc'])
  }),
  onCollapse: _pt.func,
  onExpand: _pt.func,
  onSelect: _pt.func,
  canSelectAll: _pt.bool,
  onSort: _pt.func,
  actions: _pt.arrayOf(_pt.oneOfType([_pt.shape({
    isSeparator: _pt.bool,
    itemKey: _pt.string,
    title: _pt.oneOfType([_pt.string, _pt.node]),
    onClick: _pt.func.isRequired
  }), _pt.shape({
    isSeparator: _pt.bool.isRequired
  })])),
  actionResolver: _pt.func,
  areActionsDisabled: _pt.func,
  header: _pt.node,
  caption: _pt.node,
  rowLabeledBy: _pt.string,
  expandId: _pt.string,
  contentId: _pt.string,
  dropdownPosition: _pt.oneOf(['right', 'left']),
  dropdownDirection: _pt.oneOf(['up', 'down']),
  rows: _pt.arrayOf(_pt.oneOfType([_pt.shape({
    cells: _pt.arrayOf(_pt.oneOfType([_pt.node, _pt.shape({
      title: _pt.oneOfType([_pt.string, _pt.node]),
      props: _pt.any
    })])),
    isOpen: _pt.bool,
    parent: _pt.number,
    compoundParent: _pt.number,
    props: _pt.any,
    fullWidth: _pt.bool,
    noPadding: _pt.bool,
    showSelect: _pt.bool,
    isExpanded: _pt.bool,
    isFirstVisible: _pt.bool,
    isLastVisible: _pt.bool,
    selected: _pt.bool
  }), _pt.arrayOf(_pt.string)])).isRequired,
  cells: _pt.arrayOf(_pt.oneOfType([_pt.shape({
    title: _pt.oneOfType([_pt.string, _pt.node]),
    transforms: _pt.arrayOf(_pt.func),
    cellTransforms: _pt.arrayOf(_pt.func),
    columnTransforms: _pt.arrayOf(_pt.func),
    formatters: _pt.arrayOf(_pt.func),
    cellFormatters: _pt.arrayOf(_pt.func),
    props: _pt.any,
    data: _pt.any,
    header: _pt.any,
    cell: _pt.any
  }), _pt.string])).isRequired,
  bodyWrapper: _pt.any
});

_defineProperty(Table, "defaultProps", {
  "children": null,
  "className": '',
  "variant": null,
  "borders": true,
  "rowLabeledBy": 'simple-node',
  "expandId": 'expandable-toggle',
  "contentId": 'expanded-content',
  "dropdownPosition": DropdownPosition.right,
  "dropdownDirection": DropdownDirection.down,
  "header": undefined,
  "caption": undefined,
  'aria-label': undefined,
  "gridBreakPoint": TableGridBreakpoint.gridMd,
  "role": 'grid',
  "canSelectAll": true
});
//# sourceMappingURL=Table.js.map