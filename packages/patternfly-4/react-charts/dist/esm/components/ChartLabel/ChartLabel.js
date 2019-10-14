import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { defaults } from 'lodash';
import { VictoryLabel } from 'victory';
import { ChartCommonStyles } from '../ChartTheme';
export let ChartLabelDirection;

(function (ChartLabelDirection) {
  ChartLabelDirection["rtl"] = "rtl";
  ChartLabelDirection["ltr"] = "ltr";
  ChartLabelDirection["inherit"] = "inherit";
})(ChartLabelDirection || (ChartLabelDirection = {}));

export let ChartLabelPlacement;

(function (ChartLabelPlacement) {
  ChartLabelPlacement["parallel"] = "parallel";
  ChartLabelPlacement["perpendicular"] = "perpendicular";
  ChartLabelPlacement["vertical"] = "vertical";
})(ChartLabelPlacement || (ChartLabelPlacement = {}));

export const ChartLabel = (_ref) => {
  let {
    style
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["style"]);

  const applyDefaultStyle = customStyle => defaults(customStyle, {
    fontFamily: ChartCommonStyles.label.fontFamily,
    fontSize: ChartCommonStyles.label.fontSize,
    letterSpacing: ChartCommonStyles.label.letterSpacing
  });

  const newStyle = Array.isArray(style) ? style.map(applyDefaultStyle) : applyDefaultStyle(style);
  return React.createElement(VictoryLabel, _extends({
    style: newStyle
  }, rest));
}; // Note: VictoryLabel.role must be hoisted

ChartLabel.propTypes = {
  active: _pt.bool,
  angle: _pt.oneOfType([_pt.string, _pt.number]),
  capHeight: _pt.any,
  children: _pt.any,
  className: _pt.string,
  data: _pt.arrayOf(_pt.any),
  datum: _pt.object,
  desc: _pt.string,
  direction: _pt.oneOf(['rtl', 'ltr', 'inherit']),
  dx: _pt.any,
  dy: _pt.any,
  events: _pt.any,
  index: _pt.oneOfType([_pt.string, _pt.number]),
  labelPlacement: _pt.oneOf(['parallel', 'perpendicular', 'vertical']),
  lineHeight: _pt.any,
  origin: _pt.shape({
    x: _pt.number.isRequired,
    y: _pt.number.isRequired
  }),
  polar: _pt.bool,
  renderInPortal: _pt.bool,
  scale: _pt.shape({
    x: _pt.any,
    y: _pt.any
  }),
  style: _pt.oneOfType([_pt.any, _pt.arrayOf(_pt.any)]),
  text: _pt.oneOfType([_pt.arrayOf(_pt.string), _pt.any]),
  x: _pt.number,
  y: _pt.number
};
hoistNonReactStatics(ChartLabel, VictoryLabel);
//# sourceMappingURL=ChartLabel.js.map