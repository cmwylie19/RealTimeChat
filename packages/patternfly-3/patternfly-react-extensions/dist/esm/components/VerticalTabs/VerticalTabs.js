var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import VerticalTabsTab from './VerticalTabsTab';

/**
 * VerticalTabs Component for PatternFly
 */
var VerticalTabs = function VerticalTabs(_ref) {
  var children = _ref.children,
      className = _ref.className,
      restrictTabs = _ref.restrictTabs,
      activeTab = _ref.activeTab,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'restrictTabs', 'activeTab']);

  var classes = classNames('vertical-tabs-pf', { 'restrict-tabs': restrictTabs, 'active-tab': activeTab }, className);
  return React.createElement(
    'ul',
    _extends({ className: classes }, props),
    children
  );
};

VerticalTabs.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag to restrict shown tabs to active tabs, their parents, their siblings, and direct children */
  restrictTabs: PropTypes.bool,
  /** Flag if a direct child is active (only used in restrictTabs mode) */
  activeTab: PropTypes.bool
};
VerticalTabs.defaultProps = {
  children: null,
  className: '',
  restrictTabs: false,
  activeTab: false
};

VerticalTabs.Tab = VerticalTabsTab;

export default VerticalTabs;