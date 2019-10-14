'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

  var classes = (0, _classnames2.default)('vertical-tabs-pf-tab', { active: active, 'active-descendant': hasActiveDescendant, shown: shown }, className);

  var linkClasses = (0, _classnames2.default)({
    'no-wrap': wrapStyle === 'nowrap',
    truncate: wrapStyle === 'truncate'
  });

  var handleActivate = function handleActivate(e) {
    e.preventDefault();
    if (onActivate) {
      onActivate();
    }
  };

  return _react2.default.createElement(
    'li',
    _extends({ className: classes }, props),
    _react2.default.createElement(
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
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Title for the tab */
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  /** Title wrap style */
  wrapStyle: _propTypes2.default.oneOf(['wrap', 'truncate', 'nowrap']),
  /** Flag if this is the active tab */
  active: _propTypes2.default.bool,
  /** Flag if a descendant tab is active (used only in restrictTabs mode) */
  hasActiveDescendant: _propTypes2.default.bool,
  /** Flag to force show the tab (if parent tab is shown, used only in restrictTabs mode) */
  shown: _propTypes2.default.bool,
  /** Callback function when the tab is activated */
  onActivate: _propTypes2.default.func
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

exports.default = VerticalTabsTab;