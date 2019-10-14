var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { getContext } from 'recompose';
import { wrongDepth, correctDepth, navContextTypes } from './VerticalNavConstants';
import VerticalNavItemHelper from './VerticalNavItemHelper';

/**
 * VerticalNav.TertiaryItem - a child component for tertiary nav items under VerticalNav
 * This is a thin wrapper for VerticalNavItemHelper, to expose the warnings and the explicit-depth API.
 * In the future, we could lift some of the tertiary-specific code from Helper into this file.
 */
var BaseVerticalNavTertiaryItem = function BaseVerticalNavTertiaryItem(props) {
  if (wrongDepth(props, 'tertiary')) {
    return correctDepth(props);
  }
  return React.createElement(VerticalNavItemHelper, props);
};

BaseVerticalNavTertiaryItem.propTypes = _extends({}, VerticalNavItemHelper.propTypes);

var VerticalNavTertiaryItem = getContext(navContextTypes)(BaseVerticalNavTertiaryItem);

VerticalNavTertiaryItem.propTypes = _extends({}, BaseVerticalNavTertiaryItem.propTypes);
VerticalNavTertiaryItem.displayName = 'VerticalNav.TertiaryItem';

export default VerticalNavTertiaryItem;