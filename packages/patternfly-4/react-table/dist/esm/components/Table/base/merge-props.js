function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * merge-props.js
 *
 * Forked from reactabular-table version 8.14.0
 * https://github.com/reactabular/reactabular/tree/v8.14.0/packages/reactabular-table/src
 */
import { mergeWith } from 'lodash';
import classNames from 'classnames';
export function mergeProps(...props) {
  const firstProps = props[0];
  const restProps = props.slice(1);

  if (!restProps.length) {
    return mergeWith({}, firstProps);
  } // Avoid mutating the first prop collection


  return mergeWith(mergeWith({}, firstProps), ...restProps, (a, b, key) => {
    if (key === 'children') {
      // Children have to be merged in reverse order for Reactabular
      // logic to work.
      return _objectSpread({}, b, {}, a);
    }

    if (key === 'className') {
      // Process class names through classNames to merge properly
      // as a string.
      return classNames(a, b);
    }

    return undefined;
  });
}
//# sourceMappingURL=merge-props.js.map