'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ApplicationLauncherWrapper = require('./ApplicationLauncherWrapper');

var _ApplicationLauncherWrapper2 = _interopRequireDefault(_ApplicationLauncherWrapper);

var _reactClickOutside = require('react-click-outside');

var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      return _react2.default.createElement(_ApplicationLauncherWrapper2.default, {
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
}(_react2.default.Component);

StatefulApplicationLauncherWrapper.propTypes = {
  /** Array of App Objects */
  apps: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string,
    icon: _propTypes2.default.string,
    tooltip: _propTypes2.default.string,
    onClick: _propTypes2.default.func
  })),
  /** No Icons Bool */
  noIcons: _propTypes2.default.bool,
  /** Grid instead of List (List is Default) */
  grid: _propTypes2.default.bool,
  /** Toggle Tooltip */
  tooltip: _propTypes2.default.string,
  /** Tooltip Placement */
  tooltipPlacement: _propTypes2.default.string
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
exports.default = (0, _reactClickOutside2.default)(StatefulApplicationLauncherWrapper);