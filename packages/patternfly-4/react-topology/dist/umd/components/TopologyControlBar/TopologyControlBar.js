(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-core", "@patternfly/react-icons", "@patternfly/react-styles/css/components/Topology/topology-controlbar.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-core"), require("@patternfly/react-icons"), require("@patternfly/react-styles/css/components/Topology/topology-controlbar.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.reactCore, global.reactIcons, global.topologyControlbar);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _reactCore, _reactIcons) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TopologyControlBar = exports.createTopologyControlButtons = exports.defaultControlButtonsOptions = exports.LEGEND = exports.RESET_VIEW = exports.FIT_TO_SCREEN = exports.ZOOM_OUT = exports.ZOOM_IN = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};

    if (obj != null) {
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  /* ID's for common control buttons */
  const ZOOM_IN = exports.ZOOM_IN = 'zoom-in';
  const ZOOM_OUT = exports.ZOOM_OUT = 'zoom-out';
  const FIT_TO_SCREEN = exports.FIT_TO_SCREEN = 'fit-to-screen';
  const RESET_VIEW = exports.RESET_VIEW = 'reset-view';
  const LEGEND = exports.LEGEND = 'legend';
  /* Data needed for each control button */

  /* Default options for creating control buttons */

  const defaultControlButtonsOptions = exports.defaultControlButtonsOptions = {
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

  const createTopologyControlButtons = exports.createTopologyControlButtons = ({
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

  const TopologyControlBar = exports.TopologyControlBar = _ref => {
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
      const renderedButton = React.createElement(_reactCore.Button, {
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
        return React.createElement(_reactCore.Tooltip, {
          content: button.tooltip
        }, renderedButton);
      }

      return renderedButton;
    };

    return React.createElement(_reactCore.Toolbar, _extends({
      className: className
    }, props), React.createElement(_reactCore.ToolbarGroup, null, controlButtons.map(button => {
      return button.hidden ? null : React.createElement(_reactCore.ToolbarItem, {
        key: button.id
      }, renderButton(button));
    }), children));
  };

  TopologyControlBar.propTypes = {
    className: _propTypes2.default.string,
    children: _propTypes2.default.node,
    controlButtons: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      id: _propTypes2.default.any.isRequired,
      icon: _propTypes2.default.node.isRequired,
      tooltip: _propTypes2.default.node,
      ariaLabel: _propTypes2.default.string,
      callback: _propTypes2.default.func,
      disabled: _propTypes2.default.bool,
      hidden: _propTypes2.default.bool
    })),
    onButtonClick: _propTypes2.default.func
  };
});
//# sourceMappingURL=TopologyControlBar.js.map