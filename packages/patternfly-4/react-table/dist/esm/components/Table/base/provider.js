import _pt from "prop-types";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * provider.tsx
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import * as React from 'react';
import { TableDefaults } from './types';
export const ProviderContext = React.createContext({
  columns: null,
  renderers: null
});
export class Provider extends React.Component {
  render() {
    const _this$props = this.props,
          {
      columns,
      renderers,
      components,
      children
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["columns", "renderers", "components", "children"]);

    let finalRenderers = renderers;

    if (components) {
      // tslint:disable-next-line:no-console
      console.warn('`components` have been deprecated in favor of `renderers` and will be removed in the next major version, please rename!');
      finalRenderers = components;
    }

    const provider = React.createElement(renderers.table || TableDefaults.renderers.table, props, children);
    return React.createElement(ProviderContext.Provider, {
      value: {
        columns,
        renderers: {
          table: finalRenderers.table || TableDefaults.renderers.table,
          header: _objectSpread({}, TableDefaults.renderers.header, {}, finalRenderers.header),
          body: _objectSpread({}, TableDefaults.renderers.body, {}, finalRenderers.body)
        }
      }
    }, provider);
  }

}

_defineProperty(Provider, "propTypes", {
  children: _pt.node,
  role: _pt.string,
  className: _pt.string
});

_defineProperty(Provider, "defaultProps", {
  renderers: TableDefaults.renderers
});
//# sourceMappingURL=provider.js.map