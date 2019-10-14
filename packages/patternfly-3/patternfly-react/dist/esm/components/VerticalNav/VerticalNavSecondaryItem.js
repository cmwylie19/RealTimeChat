var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { getContext } from 'recompose';
import { wrongDepth, correctDepth, navContextTypes } from './VerticalNavConstants';
import VerticalNavItemHelper from './VerticalNavItemHelper';

/**
 * VerticalNav.SecondaryItem - a child component for secondary nav items under VerticalNav
 * This is a thin wrapper for VerticalNavItemHelper, to expose the warnings and the explicit-depth API.
 * In the future, we could lift some of the secondary-specific code from Helper into this file.
 */
var BaseVerticalNavSecondaryItem = function BaseVerticalNavSecondaryItem(props) {
  if (wrongDepth(props, 'secondary')) {
    return correctDepth(props);
  }

  return React.createElement(VerticalNavItemHelper, props);
};

BaseVerticalNavSecondaryItem.propTypes = _extends({}, VerticalNavItemHelper.propTypes);

var VerticalNavSecondaryItem = getContext(navContextTypes)(BaseVerticalNavSecondaryItem);

VerticalNavSecondaryItem.propTypes = _extends({}, BaseVerticalNavSecondaryItem.propTypes);
VerticalNavSecondaryItem.displayName = 'VerticalNav.SecondaryItem';

export default VerticalNavSecondaryItem;