import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Header } from './base';
import { TableContext } from './Table';

const ContextHeader = (_ref) => {
  let {
    className = '',
    headerRows = undefined
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "headerRows"]);

  return React.createElement(Header, _extends({}, props, {
    headerRows: headerRows,
    className: className
  }));
};

ContextHeader.propTypes = {
  className: _pt.string,
  headerRows: _pt.arrayOf(_pt.any)
};
export const TableHeader = (_ref2) => {
  let props = _extends({}, _ref2);

  return React.createElement(TableContext.Consumer, null, ({
    headerRows
  }) => React.createElement(ContextHeader, _extends({}, props, {
    headerRows: headerRows
  })));
};
TableHeader.propTypes = {
  className: _pt.string
};
//# sourceMappingURL=Header.js.map