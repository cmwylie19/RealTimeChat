var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import ApplicationLauncherWrapper from './ApplicationLauncherWrapper';
import enhanceWithClickOutside from 'react-click-outside';

var StatefulApplicationLauncherWrapper = function (_React$Component) {
  _inherits(StatefulApplicationLauncherWrapper, _React$Component);

  function StatefulApplicationLauncherWrapper(props) {
    _classCallCheck(this, StatefulApplicationLauncherWrapper);

    var _this = _possibleConstructorReturn(this, (StatefulApplicationLauncherWrapper.__proto__ || Object.getPrototypeOf(StatefulApplicationLauncherWrapper)).call(this, props));

    _this.toggleLauncher = function () {
      _this.setState({ open: !_this.state.open });
    };

    _this.handleClickOutside = function () {
      if (_this.state.open === true) {
        _this.toggleLauncher();
      }
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(StatefulApplicationLauncherWrapper, [{
    key: 'render',
    value: function render() {
      return React.createElement(ApplicationLauncherWrapper, {
        apps: this.props.apps,
        noIcons: this.props.noIcons,
        grid: this.props.grid,
        tooltip: this.props.tooltip,
        tooltipPlacement: this.props.tooltipPlacement,
        open: this.state.open,
        toggleLauncher: this.toggleLauncher
      });
    }
  }]);

  return StatefulApplicationLauncherWrapper;
}(React.Component);

StatefulApplicationLauncherWrapper.propTypes = {
  /** Array of App Objects */
  apps: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    icon: PropTypes.string,
    tooltip: PropTypes.string,
    onClick: PropTypes.func
  })),
  /** No Icons Bool */
  noIcons: PropTypes.bool,
  /** Grid instead of List (List is Default) */
  grid: PropTypes.bool,
  /** Toggle Tooltip */
  tooltip: PropTypes.string,
  /** Tooltip Placement */
  tooltipPlacement: PropTypes.string
};
StatefulApplicationLauncherWrapper.defaultProps = {
  noIcons: false,
  tooltip: '',
  tooltipPlacement: 'left',
  grid: false,
  apps: [{
    title: 'Royal',
    icon: 'virtual-machine',
    tooltip: 'Tooltip!',
    onClick: function onClick(e) {
      e.preventDefault();
    }
  }]
};
export default enhanceWithClickOutside(StatefulApplicationLauncherWrapper);