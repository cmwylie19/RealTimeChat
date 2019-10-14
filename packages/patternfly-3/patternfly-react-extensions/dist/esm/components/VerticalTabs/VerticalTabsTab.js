var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var VerticalTabsTab = function VerticalTabsTab(_ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      wrapStyle = _ref.wrapStyle,
      active = _ref.active,
      hasActiveDescendant = _ref.hasActiveDescendant,
      shown = _ref.shown,
      onActivate = _ref.onActivate,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'title', 'wrapStyle', 'active', 'hasActiveDescendant', 'shown', 'onActivate']);

  var classes = classNames('vertical-tabs-pf-tab', { active: active, 'active-descendant': hasActiveDescendant, shown: shown }, className);

  var linkClasses = classNames({
    'no-wrap': wrapStyle === 'nowrap',
    truncate: wrapStyle === 'truncate'
  });

  var handleActivate = function handleActivate(e) {
    e.preventDefault();
    if (onActivate) {
      onActivate();
    }
  };

  return React.createElement(
    'li',
    _extends({ className: classes }, props),
    React.createElement(
      'a',
      { className: linkClasses, onClick: function onClick(e) {
          return handleActivate(e);
        }, href: '#' },
      title
    ),
    children
  );
};

VerticalTabsTab.propTypes = {
  /** Child tab nodes (VerticalTabsTab's) */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Title for the tab */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Title wrap style */
  wrapStyle: PropTypes.oneOf(['wrap', 'truncate', 'nowrap']),
  /** Flag if this is the active tab */
  active: PropTypes.bool,
  /** Flag if a descendant tab is active (used only in restrictTabs mode) */
  hasActiveDescendant: PropTypes.bool,
  /** Flag to force show the tab (if parent tab is shown, used only in restrictTabs mode) */
  shown: PropTypes.bool,
  /** Callback function when the tab is activated */
  onActivate: PropTypes.func
};

VerticalTabsTab.defaultProps = {
  children: null,
  className: '',
  title: null,
  wrapStyle: 'wrap',
  active: false,
  hasActiveDescendant: false,
  shown: false,
  onActivate: null
};

export default VerticalTabsTab;