import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * body.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import * as React from 'react';
import { isEqual, isFunction } from 'lodash';
import { resolveRowKey } from './resolve-row-key';
import { BodyRow } from './body-row';
import { ProviderContext } from './provider';

class BaseBody extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "omitOnRow", props => {
      const {
        onRow
      } = props,
            ret = _objectWithoutProperties(props, ["onRow"]);

      return ret;
    });
  }

  shouldComponentUpdate(nextProps) {
    // Skip checking props against `onRow` since that can be bound at render().
    // That's not particularly good practice but you never know how the users
    // prefer to define the handler.
    // Check for wrapper based override.
    const {
      renderers
    } = nextProps;

    if (renderers && renderers.body && renderers.body.wrapper && renderers.body.wrapper.shouldComponentUpdate) {
      if (isFunction(renderers.body.wrapper.shouldComponentUpdate)) {
        return renderers.body.wrapper.shouldComponentUpdate.call(this, nextProps, {}, {});
      }

      return true;
    }

    return !isEqual(this.omitOnRow(this.props), this.omitOnRow(nextProps));
  }

  render() {
    const _this$props = this.props,
          {
      onRow,
      rows,
      rowKey,
      columns,
      renderers
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["onRow", "rows", "rowKey", "columns", "renderers"]);

    const children = rows.map((rowData, index) => {
      const key = resolveRowKey({
        rowData,
        rowIndex: index,
        rowKey
      });
      return React.createElement(BodyRow, {
        key,
        renderers: renderers.body,
        onRow,
        rowKey: key,
        rowIndex: index,
        rowData,
        columns
      });
    });
    return React.createElement(renderers.body.wrapper, props, children);
  }

}

_defineProperty(BaseBody, "propTypes", {
  onRow: _pt.any,
  rows: _pt.any.isRequired,
  rowKey: _pt.any,
  columns: _pt.any,
  mappedRows: _pt.any,
  className: _pt.string
});

_defineProperty(BaseBody, "defaultProps", {
  onRow: (...args) => Object
});

export const Body = props => React.createElement(ProviderContext.Consumer, null, ({
  columns,
  renderers
}) => React.createElement(BaseBody, _extends({
  columns: columns,
  renderers: renderers
}, props)));
Body.propTypes = {
  onRow: _pt.any,
  rows: _pt.any.isRequired,
  rowKey: _pt.any,
  columns: _pt.any,
  mappedRows: _pt.any,
  className: _pt.string
};
//# sourceMappingURL=body.js.map