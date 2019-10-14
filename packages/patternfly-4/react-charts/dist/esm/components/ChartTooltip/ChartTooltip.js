import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { VictoryTooltip } from 'victory';
import { getTheme } from '../ChartUtils';
/**
 * See https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/victory/index.d.ts
 */

export const ChartTooltip = (_ref) => {
  let {
    constrainToVisibleArea = false,
    themeColor,
    themeVariant,
    // destructure last
    theme = getTheme(themeColor, themeVariant)
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["constrainToVisibleArea", "themeColor", "themeVariant", "theme"]);

  // Note: constrainToVisibleArea is valid, but @types/victory is missing a prop type
  // @ts-ignore
  return React.createElement(VictoryTooltip, _extends({
    constrainToVisibleArea: constrainToVisibleArea,
    theme: theme
  }, rest));
}; // Note: VictoryTooltip.defaultEvents must be hoisted

ChartTooltip.propTypes = {
  active: _pt.bool,
  activateData: _pt.bool,
  angle: _pt.oneOfType([_pt.string, _pt.number]),
  center: _pt.shape({
    x: _pt.number.isRequired,
    y: _pt.number.isRequired
  }),
  centerOffset: _pt.shape({
    x: _pt.oneOfType([_pt.number, _pt.any]).isRequired,
    y: _pt.oneOfType([_pt.number, _pt.any]).isRequired
  }),
  constrainToVisibleArea: _pt.bool,
  cornerRadius: _pt.any,
  data: _pt.arrayOf(_pt.any),
  datum: _pt.object,
  dx: _pt.any,
  dy: _pt.any,
  events: _pt.object,
  flyoutComponent: _pt.element,
  flyoutHeight: _pt.any,
  flyoutStyle: _pt.any,
  flyoutWidth: _pt.any,
  groupComponent: _pt.element,
  horizontal: _pt.bool,
  index: _pt.oneOfType([_pt.number, _pt.string]),
  labelComponent: _pt.element,
  orientation: _pt.any,
  pointerLength: _pt.any,
  pointerOrientation: _pt.oneOfType([_pt.oneOf(['top']), _pt.oneOf(['bottom']), _pt.oneOf(['left']), _pt.oneOf(['right']), _pt.any]),
  pointerWidth: _pt.any,
  renderInPortal: _pt.bool
};
hoistNonReactStatics(ChartTooltip, VictoryTooltip);
//# sourceMappingURL=ChartTooltip.js.map