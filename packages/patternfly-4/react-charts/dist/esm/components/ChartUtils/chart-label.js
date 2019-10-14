function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { Helpers, TextSize } from 'victory-core';
import { getPieOrigin } from './chart-origin';
import { ChartCommonStyles } from '../ChartTheme';
// Returns x coordinate for bullet labels
export const getBulletLabelX = ({
  chartWidth,
  dx = 0,
  labelPosition
}) => {
  return labelPosition === 'top' && chartWidth ? Math.round(chartWidth / 2) : dx;
}; // Returns y coordinate for bullet labels

export const getBulletLabelY = ({
  chartHeight,
  dy = 0,
  labelPosition
}) => {
  switch (labelPosition) {
    case 'bottom':
      return chartHeight + ChartCommonStyles.label.margin + dy;

    case 'left':
      return chartHeight ? Math.round(chartHeight / 2) + dy : dy;

    default:
      return dy;
  }
}; // Returns x coordinate for pie labels

export const getPieLabelX = ({
  dx = 0,
  height,
  labelPosition,
  legendPosition,
  padding,
  width
}) => {
  const origin = getPieOrigin({
    height,
    padding,
    width
  });
  const radius = Helpers.getRadius({
    height,
    width,
    padding
  });

  switch (labelPosition) {
    case 'bottom':
    case 'center':
      return origin.x + dx;

    case 'right':
      switch (legendPosition) {
        case 'bottom':
          return origin.x + ChartCommonStyles.label.margin + dx + radius;

        case 'right':
          return origin.x + ChartCommonStyles.label.margin + dx;

        default:
          return dx;
      }

    default:
      return dx;
  }
}; // Returns x coordinate for pie labels

export const getPieLabelY = ({
  dy = 0,
  height,
  labelPosition,
  padding,
  width
}) => {
  const origin = getPieOrigin({
    height,
    padding,
    width
  });
  const radius = Helpers.getRadius({
    height,
    width,
    padding
  });

  switch (labelPosition) {
    case 'center':
    case 'right':
      return origin.y + dy;

    case 'bottom':
      return origin.y + radius + ChartCommonStyles.label.margin * 2 + dy;

    default:
      return dy;
  }
}; // Average pixels per glyph for overpass / Red Hat fonts

export const overpassFontCharacterConstant = 2.5875; // Returns an approximate size for the give text

export const getLabelTextSize = ({
  text,
  theme
}) => {
  const style = theme.legend.style.labels;
  return TextSize.approximateTextSize(text, _objectSpread({}, style, {
    characterConstant: overpassFontCharacterConstant
  }));
};
//# sourceMappingURL=chart-label.js.map