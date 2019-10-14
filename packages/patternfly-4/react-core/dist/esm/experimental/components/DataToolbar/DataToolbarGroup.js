import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/DataToolbar/data-toolbar';
import { css, getModifier } from '@patternfly/react-styles';
import { formatSpacers } from './DataToolbarUtils';
import { formatBreakpointMods } from '../../../helpers/util';
export let DataToolbarGroupVariant;

(function (DataToolbarGroupVariant) {
  DataToolbarGroupVariant["filter-group"] = "filter-group";
  DataToolbarGroupVariant["icon-button-group"] = "icon-button-group";
  DataToolbarGroupVariant["button-group"] = "button-group";
})(DataToolbarGroupVariant || (DataToolbarGroupVariant = {}));

export const DataToolbarGroup = (_ref) => {
  let {
    breakpointMods = [],
    spacers = [],
    itemSpacers = [],
    className,
    variant,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["breakpointMods", "spacers", "itemSpacers", "className", "variant", "children"]);

  return React.createElement("div", _extends({
    className: css(styles.dataToolbarGroup, variant && getModifier(styles, variant), formatBreakpointMods(breakpointMods, styles), formatSpacers(itemSpacers, 'pf-m-space-items'), formatSpacers(spacers), className)
  }, props), children);
};
DataToolbarGroup.propTypes = {
  className: _pt.string,
  variant: _pt.oneOfType([_pt.any, _pt.oneOf(['filter-group']), _pt.oneOf(['icon-button-group']), _pt.oneOf(['button-group'])]),
  breakpointMods: _pt.arrayOf(_pt.any),
  spacers: _pt.arrayOf(_pt.any),
  itemSpacers: _pt.arrayOf(_pt.any),
  children: _pt.node
};
//# sourceMappingURL=DataToolbarGroup.js.map