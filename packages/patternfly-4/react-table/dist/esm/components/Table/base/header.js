import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * header.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import * as React from 'react';
import { ProviderContext } from './provider';
import { HeaderRow } from './header-row';

class BaseHeader extends React.Component {
  render() {
    const _this$props = this.props,
          {
      children,
      headerRows,
      onRow,
      renderers,
      columns
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["children", "headerRows", "onRow", "renderers", "columns"]); // If headerRows aren't passed, default to bodyColumns as header rows


    return React.createElement(renderers.header.wrapper, props, [(headerRows || [columns]).map((rowData, rowIndex) => React.createElement(HeaderRow, {
      key: `${rowIndex}-header-row`,
      renderers: renderers.header,
      onRow,
      rowData,
      rowIndex
    }))].concat(children));
  }

}

_defineProperty(BaseHeader, "propTypes", {
  headerRows: _pt.oneOfType([_pt.arrayOf(_pt.any), _pt.any]),
  children: _pt.node,
  columns: _pt.any,
  onRow: _pt.any,
  className: _pt.string
});

export const Header = props => React.createElement(ProviderContext.Consumer, null, ({
  columns,
  renderers
}) => React.createElement(BaseHeader, _extends({
  columns: columns,
  renderers: renderers
}, props)));
Header.propTypes = {
  headerRows: _pt.oneOfType([_pt.arrayOf(_pt.any), _pt.any]),
  children: _pt.node,
  columns: _pt.any,
  onRow: _pt.any,
  className: _pt.string
};
//# sourceMappingURL=header.js.map