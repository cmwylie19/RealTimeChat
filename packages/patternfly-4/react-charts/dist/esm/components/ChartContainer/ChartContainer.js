import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryContainer } from 'victory';
import { getClassName, getTheme } from '../ChartUtils';
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 *
 * Note: VictoryContainer may support other props (e.g., children), but they're undocumented and not typed
 */

export const ChartContainer = (_ref) => {
  let {
    className,
    themeColor,
    themeVariant,
    // destructure last
    theme = getTheme(themeColor, themeVariant)
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "themeColor", "themeVariant", "theme"]);

  const chartClassName = getClassName({
    className
  }); // Note: theme is valid, but @types/victory is missing a prop type
  // @ts-ignore

  return React.createElement(VictoryContainer, _extends({
    className: chartClassName,
    theme: theme
  }, rest));
}; // Note: VictoryContainer.role must be hoisted

ChartContainer.propTypes = {
  children: _pt.oneOfType([_pt.node, _pt.arrayOf(_pt.node)]),
  className: _pt.string,
  containerId: _pt.oneOfType([_pt.number, _pt.string]),
  containerRef: _pt.any,
  desc: _pt.string,
  events: _pt.any,
  height: _pt.number,
  responsive: _pt.bool,
  style: _pt.any,
  theme: _pt.any,
  themeColor: _pt.string,
  themeVariant: _pt.string,
  title: _pt.string,
  width: _pt.number
};
hoistNonReactStatics(ChartContainer, VictoryContainer);
//# sourceMappingURL=ChartContainer.js.map