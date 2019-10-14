function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { ChartBulletStyles } from '../../ChartTheme';
import { getBulletComparativeErrorMeasureTheme, getBulletComparativeMeasureTheme, getBulletComparativeWarningMeasureTheme, getBulletPrimaryDotMeasureTheme, getBulletPrimarySegmentedMeasureTheme, getBulletQualitativeRangeTheme } from '../../ChartUtils';
export const getComparativeMeasureErrorWidth = ({
  height,
  horizontal,
  themeColor,
  themeVariant,
  width,
  // destructure last
  theme = getBulletComparativeErrorMeasureTheme(themeColor, themeVariant)
}) => scaleBarWidth({
  defaultSize: theme.bar.height,
  height,
  horizontal,
  value: ChartBulletStyles.comparativeMeasureErrorWidth,
  width
});
export const getComparativeMeasureWidth = ({
  height,
  horizontal,
  themeColor,
  themeVariant,
  width,
  // destructure last
  theme = getBulletComparativeMeasureTheme(themeColor, themeVariant)
}) => scaleBarWidth({
  defaultSize: theme.bar.height,
  height,
  horizontal,
  value: ChartBulletStyles.comparativeMeasureWidth,
  width
});
export const getComparativeMeasureWarningWidth = ({
  height,
  horizontal,
  themeColor,
  themeVariant,
  width,
  // destructure last
  theme = getBulletComparativeWarningMeasureTheme(themeColor, themeVariant)
}) => scaleBarWidth({
  defaultSize: theme.bar.height,
  height,
  horizontal,
  value: ChartBulletStyles.comparativeMeasureWarningWidth,
  width
});
export const getPrimaryDotMeasureSize = ({
  height,
  horizontal,
  themeColor,
  themeVariant,
  width,
  // destructure last
  theme = getBulletPrimaryDotMeasureTheme(themeColor, themeVariant)
}) => scaleSize({
  defaultSize: theme.group.height,
  height,
  horizontal,
  value: ChartBulletStyles.primaryDotMeasureSize,
  width
});
export const getPrimarySegmentedMeasureWidth = ({
  height,
  horizontal,
  themeColor,
  themeVariant,
  width,
  // destructure last
  theme = getBulletPrimarySegmentedMeasureTheme(themeColor, themeVariant)
}) => scaleBarWidth({
  defaultSize: theme.group.height,
  height,
  horizontal,
  scale: .3,
  value: ChartBulletStyles.primarySegmentedMeasureWidth,
  width
});
export const getQualitativeRangeBarWidth = ({
  height,
  horizontal,
  themeColor,
  themeVariant,
  width,
  // destructure last
  theme = getBulletQualitativeRangeTheme(themeColor, themeVariant)
}) => scaleBarWidth({
  defaultSize: theme.group.height,
  height,
  horizontal,
  value: ChartBulletStyles.qualitativeRangeWidth,
  width
});

const scale = ({
  defaultSize,
  height,
  horizontal = true,
  scale = 1,
  value,
  width
}) => horizontal ? height > defaultSize ? value + (height - defaultSize) * scale : value - (defaultSize - height) * scale : width > defaultSize ? value + (width - defaultSize) * scale : value - (defaultSize - width) * scale; // Scale bar width per the given size properties


export const scaleBarWidth = props => Math.max(scale(props), 0); // Scale size per the given size properties

export const scaleSize = (_ref) => {
  let {
    value
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["value"]);

  return Math.round(scale(_objectSpread({
    scale: 1 / value,
    value
  }, rest)));
};
//# sourceMappingURL=chart-bullet-size.js.map