'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _OverlayTrigger = require('../OverlayTrigger');

var _Tooltip = require('../Tooltip');

var _Icon = require('../Icon');

var _Button = require('../Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApplicationLauncherToggle = function ApplicationLauncherToggle(_ref) {
  var open = _ref.open,
      tooltip = _ref.tooltip,
      onClick = _ref.onClick,
      tooltipPlacement = _ref.tooltipPlacement;

  if (tooltip) {
    return _react2.default.createElement(
      _OverlayTrigger.OverlayTrigger,
      {
        placement: tooltipPlacement,
        id: 'applauncher-pf-block-list',
        overlay: _react2.default.createElement(
          _Tooltip.Tooltip,
          { id: tooltip },
          tooltip
        )
      },
      _react2.default.createElement(
        _Button.Button,
        { onClick: onClick, bsStyle: 'link', className: 'nav-item-iconic dropdown-toggle', 'aria-expanded': open },
        _react2.default.createElement(_Icon.Icon, { name: 'th applauncher-pf-icon' })
      )
    );
  }
  return _react2.default.createElement(
    _Button.Button,
    { onClick: onClick, bsStyle: 'link', className: 'nav-item-iconic dropdown-toggle', 'aria-expanded': open },
    _react2.default.createElement(_Icon.Icon, { name: 'th applauncher-pf-icon' }),
    _react2.default.createElement(
      'span',
      { className: 'dropdown-title' },
      _react2.default.createElement(
        'span',
        { className: 'applauncher-pf-title' },
        'Application Launcher',
        _react2.default.createElement('span', { className: 'caret', 'aria-hidden': 'true' })
      )
    )
  );
};
ApplicationLauncherToggle.propTypes = {
  /** onClick func */
  onClick: _propTypes2.default.func,
  /** tooltipPlacement */
  tooltipPlacement: _propTypes2.default.string,
  /** Toggle Tooltip */
  tooltip: _propTypes2.default.string,
  /** is Open bool */
  open: _propTypes2.default.bool.isRequired
};
ApplicationLauncherToggle.defaultProps = {
  onClick: null,
  tooltipPlacement: 'bottom',
  tooltip: ''
};

exports.default = ApplicationLauncherToggle;