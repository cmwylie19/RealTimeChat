import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Button, Toolbar, ToolbarGroup, ToolbarItem, Tooltip } from '@patternfly/react-core';
import { ExpandIcon, ExpandArrowsAltIcon, SearchPlusIcon, SearchMinusIcon } from '@patternfly/react-icons';
import '@patternfly/react-styles/css/components/Topology/topology-controlbar.css';
/* ID's for common control buttons */

export const ZOOM_IN = 'zoom-in';
export const ZOOM_OUT = 'zoom-out';
export const FIT_TO_SCREEN = 'fit-to-screen';
export const RESET_VIEW = 'reset-view';
export const LEGEND = 'legend';
/* Data needed for each control button */

/* Default options for creating control buttons */
export const defaultControlButtonsOptions = {
  zoomIn: true,
  zoomInIcon: React.createElement(SearchPlusIcon, null),
  zoomInTip: 'Zoom In',
  zoomInAriaLabel: 'Zoom In',
  zoomInCallback: null,
  zoomInDisabled: false,
  zoomInHidden: false,
  zoomOut: true,
  zoomOutIcon: React.createElement(SearchMinusIcon, null),
  zoomOutTip: 'Zoom Out',
  zoomOutAriaLabel: 'Zoom Out',
  zoomOutCallback: null,
  zoomOutDisabled: false,
  zoomOutHidden: false,
  fitToScreen: true,
  fitToScreenIcon: React.createElement(ExpandArrowsAltIcon, null),
  fitToScreenTip: 'Fit to Screen',
  fitToScreenAriaLabel: 'Fit to Screen',
  fitToScreenCallback: null,
  fitToScreenDisabled: false,
  fitToScreenHidden: false,
  resetView: true,
  resetViewIcon: React.createElement(ExpandIcon, null),
  resetViewTip: 'Reset View',
  resetViewAriaLabel: 'Reset View',
  resetViewCallback: null,
  resetViewDisabled: false,
  resetViewHidden: false,
  legend: true,
  legendIcon: 'Legend',
  legendTip: '',
  legendAriaLabel: null,
  legendCallback: null,
  legendDisabled: false,
  legendHidden: false,
  customButtons: []
};
/* Utility function to create the common control buttons, can pass null for all defaults, or specify overrides */

export const createTopologyControlButtons = ({
  zoomIn = defaultControlButtonsOptions.zoomIn,
  zoomInIcon = defaultControlButtonsOptions.zoomInIcon,
  zoomInTip = defaultControlButtonsOptions.zoomInTip,
  zoomInAriaLabel = defaultControlButtonsOptions.zoomInAriaLabel,
  zoomInCallback = defaultControlButtonsOptions.zoomInCallback,
  zoomInDisabled = defaultControlButtonsOptions.zoomInDisabled,
  zoomInHidden = defaultControlButtonsOptions.zoomInHidden,
  zoomOut = defaultControlButtonsOptions.zoomOut,
  zoomOutIcon = defaultControlButtonsOptions.zoomOutIcon,
  zoomOutTip = defaultControlButtonsOptions.zoomOutTip,
  zoomOutAriaLabel = defaultControlButtonsOptions.zoomOutAriaLabel,
  zoomOutCallback = defaultControlButtonsOptions.zoomOutCallback,
  zoomOutDisabled = defaultControlButtonsOptions.zoomOutDisabled,
  zoomOutHidden = defaultControlButtonsOptions.zoomOutHidden,
  fitToScreen = defaultControlButtonsOptions.fitToScreen,
  fitToScreenIcon = defaultControlButtonsOptions.fitToScreenIcon,
  fitToScreenTip = defaultControlButtonsOptions.fitToScreenTip,
  fitToScreenAriaLabel = defaultControlButtonsOptions.fitToScreenAriaLabel,
  fitToScreenCallback = defaultControlButtonsOptions.fitToScreenCallback,
  fitToScreenDisabled = defaultControlButtonsOptions.fitToScreenDisabled,
  fitToScreenHidden = defaultControlButtonsOptions.fitToScreenHidden,
  resetView = defaultControlButtonsOptions.resetView,
  resetViewIcon = defaultControlButtonsOptions.resetViewIcon,
  resetViewTip = defaultControlButtonsOptions.resetViewTip,
  resetViewAriaLabel = defaultControlButtonsOptions.resetViewAriaLabel,
  resetViewCallback = defaultControlButtonsOptions.resetViewCallback,
  resetViewDisabled = defaultControlButtonsOptions.resetViewDisabled,
  resetViewHidden = defaultControlButtonsOptions.resetViewHidden,
  legend = defaultControlButtonsOptions.legend,
  legendIcon = defaultControlButtonsOptions.legendIcon,
  legendTip = defaultControlButtonsOptions.legendTip,
  legendAriaLabel = defaultControlButtonsOptions.legendAriaLabel,
  legendCallback = defaultControlButtonsOptions.legendCallback,
  legendDisabled = defaultControlButtonsOptions.legendDisabled,
  legendHidden = defaultControlButtonsOptions.legendHidden,
  customButtons = defaultControlButtonsOptions.customButtons
} = defaultControlButtonsOptions) => {
  const controlButtons = [];

  if (zoomIn) {
    controlButtons.push({
      id: ZOOM_IN,
      icon: zoomInIcon,
      tooltip: zoomInTip,
      ariaLabel: zoomInAriaLabel,
      callback: zoomInCallback,
      disabled: zoomInDisabled,
      hidden: zoomInHidden
    });
  }

  if (zoomOut) {
    controlButtons.push({
      id: ZOOM_OUT,
      icon: zoomOutIcon,
      tooltip: zoomOutTip,
      ariaLabel: zoomOutAriaLabel,
      callback: zoomOutCallback,
      disabled: zoomOutDisabled,
      hidden: zoomOutHidden
    });
  }

  if (fitToScreen) {
    controlButtons.push({
      id: FIT_TO_SCREEN,
      icon: fitToScreenIcon,
      tooltip: fitToScreenTip,
      ariaLabel: fitToScreenAriaLabel,
      callback: fitToScreenCallback,
      disabled: fitToScreenDisabled,
      hidden: fitToScreenHidden
    });
  }

  if (resetView) {
    controlButtons.push({
      id: RESET_VIEW,
      icon: resetViewIcon,
      tooltip: resetViewTip,
      ariaLabel: resetViewAriaLabel,
      callback: resetViewCallback,
      disabled: resetViewDisabled,
      hidden: resetViewHidden
    });
  }

  if (customButtons) {
    controlButtons.push(...customButtons);
  }

  if (legend) {
    controlButtons.push({
      id: LEGEND,
      icon: legendIcon,
      tooltip: legendTip,
      ariaLabel: legendAriaLabel,
      callback: legendCallback,
      disabled: legendDisabled,
      hidden: legendHidden
    });
  }

  return controlButtons;
};
export const TopologyControlBar = (_ref) => {
  let {
    className = null,
    children = null,
    controlButtons = [],
    onButtonClick = () => undefined
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "controlButtons", "onButtonClick"]);

  const handleButtonClick = (event, button) => {
    event.preventDefault();
    onButtonClick(button.id);

    if (button.callback) {
      button.callback(button.id);
    }
  };

  const renderButton = button => {
    const renderedButton = React.createElement(Button, {
      id: button.id,
      className: `pf-topology-control-bar__button${button.disabled ? ' pf-m-disabled' : ''}`,
      onClick: event => handleButtonClick(event, button),
      disabled: button.disabled,
      "aria-disabled": button.disabled,
      variant: "tertiary"
    }, button.icon, (button.ariaLabel || button.tooltip) && React.createElement("span", {
      className: "sr-only"
    }, button.ariaLabel || button.tooltip));

    if (button.tooltip) {
      return React.createElement(Tooltip, {
        content: button.tooltip
      }, renderedButton);
    }

    return renderedButton;
  };

  return React.createElement(Toolbar, _extends({
    className: className
  }, props), React.createElement(ToolbarGroup, null, controlButtons.map(button => {
    return button.hidden ? null : React.createElement(ToolbarItem, {
      key: button.id
    }, renderButton(button));
  }), children));
};
TopologyControlBar.propTypes = {
  className: _pt.string,
  children: _pt.node,
  controlButtons: _pt.arrayOf(_pt.shape({
    id: _pt.any.isRequired,
    icon: _pt.node.isRequired,
    tooltip: _pt.node,
    ariaLabel: _pt.string,
    callback: _pt.func,
    disabled: _pt.bool,
    hidden: _pt.bool
  })),
  onButtonClick: _pt.func
};
//# sourceMappingURL=TopologyControlBar.js.map