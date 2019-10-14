var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { getContext } from 'recompose';
import { wrongDepth, correctDepth, navContextTypes } from './VerticalNavConstants';
import VerticalNavItemHelper from './VerticalNavItemHelper';

/**
 * VerticalNav.Item - a child component for primary nav items under VerticalNav
 * This is a thin wrapper for VerticalNavItemHelper, to expose the warnings and the explicit-depth API.
 * In the future, we could lift some of the primary-specific code from Helper into this file.
 */
var BaseVerticalNavItem = function BaseVerticalNavItem(props) {
  if (wrongDepth(props, 'primary')) {
    return correctDepth(props);
  }
  return React.createElement(VerticalNavItemHelper, props);
};

BaseVerticalNavItem.propTypes = _extends({}, VerticalNavItemHelper.propTypes);

var VerticalNavItem = getContext(navContextTypes)(BaseVerticalNavItem);

VerticalNavItem.propTypes = _extends({}, BaseVerticalNavItem.propTypes);
VerticalNavItem.displayName = 'VerticalNav.Item';

export default VerticalNavItem;