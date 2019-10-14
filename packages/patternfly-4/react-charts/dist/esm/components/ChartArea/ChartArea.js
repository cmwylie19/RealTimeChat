import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryArea } from 'victory';
import { ChartContainer } from '../ChartContainer';
import { getTheme } from '../ChartUtils';
export let ChartAreaSortOrder;
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

(function (ChartAreaSortOrder) {
  ChartAreaSortOrder["ascending"] = "ascending";
  ChartAreaSortOrder["descending"] = "descending";
})(ChartAreaSortOrder || (ChartAreaSortOrder = {}));

export const ChartArea = (_ref) => {
  let {
    containerComponent = React.createElement(ChartContainer, null),
    themeColor,
    themeVariant,
    // destructure last
    theme = getTheme(themeColor, themeVariant)
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["containerComponent", "themeColor", "themeVariant", "theme"]);

  // Clone so users can override container props
  const container = React.cloneElement(containerComponent, _objectSpread({
    theme
  }, containerComponent.props));
  return React.createElement(VictoryArea, _extends({
    containerComponent: container,
    theme: theme
  }, rest));
}; // Note: VictoryArea.role must be hoisted

ChartArea.propTypes = {
  animate: _pt.any,
  categories: _pt.any,
  containerComponent: _pt.element,
  data: _pt.arrayOf(_pt.any),
  dataComponent: _pt.element,
  domain: _pt.any,
  domainPadding: _pt.any,
  eventKey: _pt.any,
  events: _pt.arrayOf(_pt.any),
  externalEventMutations: _pt.arrayOf(_pt.any),
  groupComponent: _pt.element,
  height: _pt.number,
  horizontal: _pt.bool,
  interpolation: _pt.any,
  labelComponent: _pt.element,
  labels: _pt.oneOfType([_pt.arrayOf(_pt.string), _pt.arrayOf(_pt.number), _pt.any]),
  maxDomain: _pt.oneOfType([_pt.number, _pt.shape({
    x: _pt.number,
    y: _pt.number
  })]),
  minDomain: _pt.oneOfType([_pt.number, _pt.shape({
    x: _pt.number,
    y: _pt.number
  })]),
  name: _pt.string,
  origin: _pt.shape({
    x: _pt.number.isRequired,
    y: _pt.number.isRequired
  }),
  padding: _pt.any,
  polar: _pt.bool,
  range: _pt.oneOfType([_pt.shape({})]),
  samples: _pt.number,
  scale: _pt.oneOfType([_pt.any, _pt.any, _pt.shape({
    x: _pt.oneOfType([_pt.any, _pt.any]),
    y: _pt.oneOfType([_pt.any, _pt.any])
  })])
};
hoistNonReactStatics(ChartArea, VictoryArea);
//# sourceMappingURL=ChartArea.js.map