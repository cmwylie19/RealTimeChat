import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { mapOpenedRows } from './utils/headerUtils';
export const BodyWrapper = (_ref) => {
  let {
    mappedRows,
    rows = [],
    onCollapse,
    tbodyRef,
    headerRows
  } = _ref,
      props = _objectWithoutProperties(_ref, ["mappedRows", "rows", "onCollapse", "tbodyRef", "headerRows"]);

  if (mappedRows && mappedRows.some(row => row.hasOwnProperty('parent'))) {
    return React.createElement(React.Fragment, null, mapOpenedRows(mappedRows, props.children).map((oneRow, key) => React.createElement("tbody", _extends({}, props, {
      className: css(oneRow.isOpen && styles.modifiers.expanded),
      key: `tbody-${key}`,
      ref: tbodyRef
    }), oneRow.rows)));
  }

  return React.createElement("tbody", _extends({}, props, {
    ref: tbodyRef
  }));
};
BodyWrapper.propTypes = {
  children: _pt.node,
  mappedRows: _pt.arrayOf(_pt.any),
  rows: _pt.arrayOf(_pt.any),
  onCollapse: _pt.func,
  tbodyRef: _pt.oneOfType([_pt.oneOfType([_pt.string, _pt.func, _pt.object]), _pt.any]),
  headerRows: _pt.arrayOf(_pt.any)
};
//# sourceMappingURL=BodyWrapper.js.map