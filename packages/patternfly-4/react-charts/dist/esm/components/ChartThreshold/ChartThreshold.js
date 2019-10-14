function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryLine } from 'victory';
import { ChartLine } from '../ChartLine';
import { getThresholdTheme } from '../ChartUtils/chart-theme';
export const ChartThreshold = (_ref) => {
  let {
    themeColor,
    themeVariant,
    style
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["themeColor", "themeVariant", "style"]);

  const theme = getThresholdTheme(themeColor, themeVariant);
  return React.createElement(ChartLine, _extends({}, rest, {
    theme: theme
  }));
}; // Note: VictoryPie.role must be hoisted

hoistNonReactStatics(ChartThreshold, VictoryLine);
//# sourceMappingURL=ChartThreshold.js.map