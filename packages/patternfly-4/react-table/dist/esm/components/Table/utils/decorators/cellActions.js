function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { ActionsColumn } from '../../ActionsColumn';

const resolveOrDefault = (resolver, defaultValue, rowData, extraData) => typeof resolver === 'function' ? resolver(rowData, extraData) : defaultValue;

export const cellActions = (actions, actionResolver, areActionsDisabled) => (label, {
  rowData,
  column,
  rowIndex,
  columnIndex,
  column: {
    extraParams: {
      dropdownPosition,
      dropdownDirection
    }
  },
  property
}) => {
  const extraData = {
    rowIndex,
    columnIndex,
    column,
    property
  };
  const resolvedActions = resolveOrDefault(actionResolver, actions, rowData, extraData);
  const resolvedIsDisabled = resolveOrDefault(areActionsDisabled, rowData && rowData.disableActions, rowData, extraData);
  const renderProps = resolvedActions && resolvedActions.length > 0 ? {
    children: React.createElement(ActionsColumn, {
      items: resolvedActions,
      dropdownPosition: dropdownPosition,
      dropdownDirection: dropdownDirection,
      isDisabled: resolvedIsDisabled,
      rowData: rowData,
      extraData: extraData
    }, label)
  } : {};
  return _objectSpread({
    className: css(styles.tableAction),
    isVisible: true
  }, renderProps);
};
//# sourceMappingURL=cellActions.js.map