import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger } from '../OverlayTrigger';
import { Tooltip } from '../Tooltip';
import { Icon } from '../Icon';
import { Button } from '../Button';

var ApplicationLauncherToggle = function ApplicationLauncherToggle(_ref) {
  var open = _ref.open,
      tooltip = _ref.tooltip,
      onClick = _ref.onClick,
      tooltipPlacement = _ref.tooltipPlacement;

  if (tooltip) {
    return React.createElement(
      OverlayTrigger,
      {
        placement: tooltipPlacement,
        id: 'applauncher-pf-block-list',
        overlay: React.createElement(
          Tooltip,
          { id: tooltip },
          tooltip
        )
      },
      React.createElement(
        Button,
        { onClick: onClick, bsStyle: 'link', className: 'nav-item-iconic dropdown-toggle', 'aria-expanded': open },
        React.createElement(Icon, { name: 'th applauncher-pf-icon' })
      )
    );
  }
  return React.createElement(
    Button,
    { onClick: onClick, bsStyle: 'link', className: 'nav-item-iconic dropdown-toggle', 'aria-expanded': open },
    React.createElement(Icon, { name: 'th applauncher-pf-icon' }),
    React.createElement(
      'span',
      { className: 'dropdown-title' },
      React.createElement(
        'span',
        { className: 'applauncher-pf-title' },
        'Application Launcher',
        React.createElement('span', { className: 'caret', 'aria-hidden': 'true' })
      )
    )
  );
};
ApplicationLauncherToggle.propTypes = {
  /** onClick func */
  onClick: PropTypes.func,
  /** tooltipPlacement */
  tooltipPlacement: PropTypes.string,
  /** Toggle Tooltip */
  tooltip: PropTypes.string,
  /** is Open bool */
  open: PropTypes.bool.isRequired
};
ApplicationLauncherToggle.defaultProps = {
  onClick: null,
  tooltipPlacement: 'bottom',
  tooltip: ''
};

export default ApplicationLauncherToggle;