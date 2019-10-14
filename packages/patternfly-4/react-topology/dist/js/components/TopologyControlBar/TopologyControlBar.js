"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopologyControlBar = exports.createTopologyControlButtons = exports.defaultControlButtonsOptions = exports.LEGEND = exports.RESET_VIEW = exports.FIT_TO_SCREEN = exports.ZOOM_OUT = exports.ZOOM_IN = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactCore = require("@patternfly/react-core");

var _reactIcons = require("@patternfly/react-icons");

require("@patternfly/react-styles/css/components/Topology/topology-controlbar.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* ID's for common control buttons */
var ZOOM_IN = 'zoom-in';
exports.ZOOM_IN = ZOOM_IN;
var ZOOM_OUT = 'zoom-out';
exports.ZOOM_OUT = ZOOM_OUT;
var FIT_TO_SCREEN = 'fit-to-screen';
exports.FIT_TO_SCREEN = FIT_TO_SCREEN;
var RESET_VIEW = 'reset-view';
exports.RESET_VIEW = RESET_VIEW;
var LEGEND = 'legend';
/* Data needed for each control button */

exports.LEGEND = LEGEND;

/* Default options for creating control buttons */
var defaultControlButtonsOptions = {
  zoomIn: true,
  zoomInIcon: React.createElement(_reactIcons.SearchPlusIcon, null),
  zoomInTip: 'Zoom In',
  zoomInAriaLabel: 'Zoom In',
  zoomInCallback: null,
  zoomInDisabled: false,
  zoomInHidden: false,
  zoomOut: true,
  zoomOutIcon: React.createElement(_reactIcons.SearchMinusIcon, null),
  zoomOutTip: 'Zoom Out',
  zoomOutAriaLabel: 'Zoom Out',
  zoomOutCallback: null,
  zoomOutDisabled: false,
  zoomOutHidden: false,
  fitToScreen: true,
  fitToScreenIcon: React.createElement(_reactIcons.ExpandArrowsAltIcon, null),
  fitToScreenTip: 'Fit to Screen',
  fitToScreenAriaLabel: 'Fit to Screen',
  fitToScreenCallback: null,
  fitToScreenDisabled: false,
  fitToScreenHidden: false,
  resetView: true,
  resetViewIcon: React.createElement(_reactIcons.ExpandIcon, null),
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

exports.defaultControlButtonsOptions = defaultControlButtonsOptions;

var createTopologyControlButtons = function createTopologyControlButtons() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultControlButtonsOptions,
      _ref$zoomIn = _ref.zoomIn,
      zoomIn = _ref$zoomIn === void 0 ? defaultControlButtonsOptions.zoomIn : _ref$zoomIn,
      _ref$zoomInIcon = _ref.zoomInIcon,
      zoomInIcon = _ref$zoomInIcon === void 0 ? defaultControlButtonsOptions.zoomInIcon : _ref$zoomInIcon,
      _ref$zoomInTip = _ref.zoomInTip,
      zoomInTip = _ref$zoomInTip === void 0 ? defaultControlButtonsOptions.zoomInTip : _ref$zoomInTip,
      _ref$zoomInAriaLabel = _ref.zoomInAriaLabel,
      zoomInAriaLabel = _ref$zoomInAriaLabel === void 0 ? defaultControlButtonsOptions.zoomInAriaLabel : _ref$zoomInAriaLabel,
      _ref$zoomInCallback = _ref.zoomInCallback,
      zoomInCallback = _ref$zoomInCallback === void 0 ? defaultControlButtonsOptions.zoomInCallback : _ref$zoomInCallback,
      _ref$zoomInDisabled = _ref.zoomInDisabled,
      zoomInDisabled = _ref$zoomInDisabled === void 0 ? defaultControlButtonsOptions.zoomInDisabled : _ref$zoomInDisabled,
      _ref$zoomInHidden = _ref.zoomInHidden,
      zoomInHidden = _ref$zoomInHidden === void 0 ? defaultControlButtonsOptions.zoomInHidden : _ref$zoomInHidden,
      _ref$zoomOut = _ref.zoomOut,
      zoomOut = _ref$zoomOut === void 0 ? defaultControlButtonsOptions.zoomOut : _ref$zoomOut,
      _ref$zoomOutIcon = _ref.zoomOutIcon,
      zoomOutIcon = _ref$zoomOutIcon === void 0 ? defaultControlButtonsOptions.zoomOutIcon : _ref$zoomOutIcon,
      _ref$zoomOutTip = _ref.zoomOutTip,
      zoomOutTip = _ref$zoomOutTip === void 0 ? defaultControlButtonsOptions.zoomOutTip : _ref$zoomOutTip,
      _ref$zoomOutAriaLabel = _ref.zoomOutAriaLabel,
      zoomOutAriaLabel = _ref$zoomOutAriaLabel === void 0 ? defaultControlButtonsOptions.zoomOutAriaLabel : _ref$zoomOutAriaLabel,
      _ref$zoomOutCallback = _ref.zoomOutCallback,
      zoomOutCallback = _ref$zoomOutCallback === void 0 ? defaultControlButtonsOptions.zoomOutCallback : _ref$zoomOutCallback,
      _ref$zoomOutDisabled = _ref.zoomOutDisabled,
      zoomOutDisabled = _ref$zoomOutDisabled === void 0 ? defaultControlButtonsOptions.zoomOutDisabled : _ref$zoomOutDisabled,
      _ref$zoomOutHidden = _ref.zoomOutHidden,
      zoomOutHidden = _ref$zoomOutHidden === void 0 ? defaultControlButtonsOptions.zoomOutHidden : _ref$zoomOutHidden,
      _ref$fitToScreen = _ref.fitToScreen,
      fitToScreen = _ref$fitToScreen === void 0 ? defaultControlButtonsOptions.fitToScreen : _ref$fitToScreen,
      _ref$fitToScreenIcon = _ref.fitToScreenIcon,
      fitToScreenIcon = _ref$fitToScreenIcon === void 0 ? defaultControlButtonsOptions.fitToScreenIcon : _ref$fitToScreenIcon,
      _ref$fitToScreenTip = _ref.fitToScreenTip,
      fitToScreenTip = _ref$fitToScreenTip === void 0 ? defaultControlButtonsOptions.fitToScreenTip : _ref$fitToScreenTip,
      _ref$fitToScreenAriaL = _ref.fitToScreenAriaLabel,
      fitToScreenAriaLabel = _ref$fitToScreenAriaL === void 0 ? defaultControlButtonsOptions.fitToScreenAriaLabel : _ref$fitToScreenAriaL,
      _ref$fitToScreenCallb = _ref.fitToScreenCallback,
      fitToScreenCallback = _ref$fitToScreenCallb === void 0 ? defaultControlButtonsOptions.fitToScreenCallback : _ref$fitToScreenCallb,
      _ref$fitToScreenDisab = _ref.fitToScreenDisabled,
      fitToScreenDisabled = _ref$fitToScreenDisab === void 0 ? defaultControlButtonsOptions.fitToScreenDisabled : _ref$fitToScreenDisab,
      _ref$fitToScreenHidde = _ref.fitToScreenHidden,
      fitToScreenHidden = _ref$fitToScreenHidde === void 0 ? defaultControlButtonsOptions.fitToScreenHidden : _ref$fitToScreenHidde,
      _ref$resetView = _ref.resetView,
      resetView = _ref$resetView === void 0 ? defaultControlButtonsOptions.resetView : _ref$resetView,
      _ref$resetViewIcon = _ref.resetViewIcon,
      resetViewIcon = _ref$resetViewIcon === void 0 ? defaultControlButtonsOptions.resetViewIcon : _ref$resetViewIcon,
      _ref$resetViewTip = _ref.resetViewTip,
      resetViewTip = _ref$resetViewTip === void 0 ? defaultControlButtonsOptions.resetViewTip : _ref$resetViewTip,
      _ref$resetViewAriaLab = _ref.resetViewAriaLabel,
      resetViewAriaLabel = _ref$resetViewAriaLab === void 0 ? defaultControlButtonsOptions.resetViewAriaLabel : _ref$resetViewAriaLab,
      _ref$resetViewCallbac = _ref.resetViewCallback,
      resetViewCallback = _ref$resetViewCallbac === void 0 ? defaultControlButtonsOptions.resetViewCallback : _ref$resetViewCallbac,
      _ref$resetViewDisable = _ref.resetViewDisabled,
      resetViewDisabled = _ref$resetViewDisable === void 0 ? defaultControlButtonsOptions.resetViewDisabled : _ref$resetViewDisable,
      _ref$resetViewHidden = _ref.resetViewHidden,
      resetViewHidden = _ref$resetViewHidden === void 0 ? defaultControlButtonsOptions.resetViewHidden : _ref$resetViewHidden,
      _ref$legend = _ref.legend,
      legend = _ref$legend === void 0 ? defaultControlButtonsOptions.legend : _ref$legend,
      _ref$legendIcon = _ref.legendIcon,
      legendIcon = _ref$legendIcon === void 0 ? defaultControlButtonsOptions.legendIcon : _ref$legendIcon,
      _ref$legendTip = _ref.legendTip,
      legendTip = _ref$legendTip === void 0 ? defaultControlButtonsOptions.legendTip : _ref$legendTip,
      _ref$legendAriaLabel = _ref.legendAriaLabel,
      legendAriaLabel = _ref$legendAriaLabel === void 0 ? defaultControlButtonsOptions.legendAriaLabel : _ref$legendAriaLabel,
      _ref$legendCallback = _ref.legendCallback,
      legendCallback = _ref$legendCallback === void 0 ? defaultControlButtonsOptions.legendCallback : _ref$legendCallback,
      _ref$legendDisabled = _ref.legendDisabled,
      legendDisabled = _ref$legendDisabled === void 0 ? defaultControlButtonsOptions.legendDisabled : _ref$legendDisabled,
      _ref$legendHidden = _ref.legendHidden,
      legendHidden = _ref$legendHidden === void 0 ? defaultControlButtonsOptions.legendHidden : _ref$legendHidden,
      _ref$customButtons = _ref.customButtons,
      customButtons = _ref$customButtons === void 0 ? defaultControlButtonsOptions.customButtons : _ref$customButtons;

  var controlButtons = [];

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
    controlButtons.push.apply(controlButtons, _toConsumableArray(customButtons));
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

exports.createTopologyControlButtons = createTopologyControlButtons;

var TopologyControlBar = function TopologyControlBar(_ref2) {
  var _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? null : _ref2$className,
      _ref2$children = _ref2.children,
      children = _ref2$children === void 0 ? null : _ref2$children,
      _ref2$controlButtons = _ref2.controlButtons,
      controlButtons = _ref2$controlButtons === void 0 ? [] : _ref2$controlButtons,
      _ref2$onButtonClick = _ref2.onButtonClick,
      onButtonClick = _ref2$onButtonClick === void 0 ? function () {
    return undefined;
  } : _ref2$onButtonClick,
      props = _objectWithoutProperties(_ref2, ["className", "children", "controlButtons", "onButtonClick"]);

  var handleButtonClick = function handleButtonClick(event, button) {
    event.preventDefault();
    onButtonClick(button.id);

    if (button.callback) {
      button.callback(button.id);
    }
  };

  var renderButton = function renderButton(button) {
    var renderedButton = React.createElement(_reactCore.Button, {
      id: button.id,
      className: "pf-topology-control-bar__button".concat(button.disabled ? ' pf-m-disabled' : ''),
      onClick: function onClick(event) {
        return handleButtonClick(event, button);
      },
      disabled: button.disabled,
      "aria-disabled": button.disabled,
      variant: "tertiary"
    }, button.icon, (button.ariaLabel || button.tooltip) && React.createElement("span", {
      className: "sr-only"
    }, button.ariaLabel || button.tooltip));

    if (button.tooltip) {
      return React.createElement(_reactCore.Tooltip, {
        content: button.tooltip
      }, renderedButton);
    }

    return renderedButton;
  };

  return React.createElement(_reactCore.Toolbar, _extends({
    className: className
  }, props), React.createElement(_reactCore.ToolbarGroup, null, controlButtons.map(function (button) {
    return button.hidden ? null : React.createElement(_reactCore.ToolbarItem, {
      key: button.id
    }, renderButton(button));
  }), children));
};

exports.TopologyControlBar = TopologyControlBar;
TopologyControlBar.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  controlButtons: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].any.isRequired,
    icon: _propTypes["default"].node.isRequired,
    tooltip: _propTypes["default"].node,
    ariaLabel: _propTypes["default"].string,
    callback: _propTypes["default"].func,
    disabled: _propTypes["default"].bool,
    hidden: _propTypes["default"].bool
  })),
  onButtonClick: _propTypes["default"].func
};
//# sourceMappingURL=TopologyControlBar.js.map