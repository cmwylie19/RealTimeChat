function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { CSSStyleDeclaration } from 'cssstyle';
import camelcase from 'camel-case';
const properties = ['grid', 'grid-area', 'grid-auto-columns', 'grid-auto-flow', 'grid-auto-rows', 'grid-column', 'grid-column-end', 'grid-column-gap', 'grid-column-start', 'grid-gap', 'grid-row', 'grid-row-end', 'grid-row-gap', 'grid-row-start', 'grid-template', 'grid-template-areas', 'grid-template-columns', 'grid-template-rows'];

function createOverride(key) {
  return {
    set(v) {
      this._setProperty(key, v);
    },

    get() {
      return this.getPropertyValue(key);
    },

    enumerable: true,
    configurable: true
  };
}

export function addOverrides() {
  const overrides = properties.reduce((acc, property) => _objectSpread({}, acc, {
    [property]: createOverride(property),
    [camelcase(property)]: createOverride(property)
  }), {});
  Object.defineProperties(CSSStyleDeclaration.prototype, overrides);
}
//# sourceMappingURL=cssPropertyOverrides.js.map