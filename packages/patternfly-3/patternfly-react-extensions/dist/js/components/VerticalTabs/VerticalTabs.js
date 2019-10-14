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

var _VerticalTabsTab = require('./VerticalTabsTab');

var _VerticalTabsTab2 = _interopRequireDefault(_VerticalTabsTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * VerticalTabs Component for PatternFly
 */
var VerticalTabs = function VerticalTabs(_ref) {
  var children = _ref.children,
      className = _ref.className,
      restrictTabs = _ref.restrictTabs,
      activeTab = _ref.activeTab,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'restrictTabs', 'activeTab']);

  var classes = (0, _classnames2.default)('vertical-tabs-pf', { 'restrict-tabs': restrictTabs, 'active-tab': activeTab }, className);
  return _react2.default.createElement(
    'ul',
    _extends({ className: classes }, props),
    children
  );
};

VerticalTabs.propTypes = {
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Flag to restrict shown tabs to active tabs, their parents, their siblings, and direct children */
  restrictTabs: _propTypes2.default.bool,
  /** Flag if a direct child is active (only used in restrictTabs mode) */
  activeTab: _propTypes2.default.bool
};
VerticalTabs.defaultProps = {
  children: null,
  className: '',
  restrictTabs: false,
  activeTab: false
};

VerticalTabs.Tab = _VerticalTabsTab2.default;

exports.default = VerticalTabs;