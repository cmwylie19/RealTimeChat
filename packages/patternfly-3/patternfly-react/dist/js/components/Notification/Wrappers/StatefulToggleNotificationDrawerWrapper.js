'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../NotificationDrawer/index');

var _index2 = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatefulToggleNotificationDrawerWrapper = function (_React$Component) {
  _inherits(StatefulToggleNotificationDrawerWrapper, _React$Component);

  function StatefulToggleNotificationDrawerWrapper(props) {
    _classCallCheck(this, StatefulToggleNotificationDrawerWrapper);

    var _this = _possibleConstructorReturn(this, (StatefulToggleNotificationDrawerWrapper.__proto__ || Object.getPrototypeOf(StatefulToggleNotificationDrawerWrapper)).call(this, props));

    _this.toggleDrawer = function () {
      _this.setState(function (prevState) {
        return {
          isDrawerOpen: !prevState.isDrawerOpen
        };
      });
    };

    _this.updateUnreadCount = function (bool) {
      if (bool) {
        _this.setState({ hasUnreadMessages: true });
      } else {
        _this.setState({ hasUnreadMessages: false });
      }
    };

    _this.state = {
      panels: props.panels,
      isDrawerOpen: props.isDrawerOpen,
      hasUnreadMessages: props.hasUnreadMessages
    };
    return _this;
  }

  _createClass(StatefulToggleNotificationDrawerWrapper, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: 'nav navbar-nav navbar-right navbar-iconic' },
        _react2.default.createElement(_index.NotificationDrawer.Toggle, { hasUnreadMessages: this.state.hasUnreadMessages, onClick: this.toggleDrawer }),
        this.state.isDrawerOpen && _react2.default.createElement(_index2.StatefulNotificationDrawerWrapper, {
          panels: this.state.panels,
          maxPanelHeight: this.props.maxPanelHeight,
          isDrawerOpen: true,
          isExpandable: this.props.isExpandable,
          hasUnreadMessages: true,
          updateUnreadCount: this.updateUnreadCount,
          toggleDrawer: this.toggleDrawer
        })
      );
    }
  }]);

  return StatefulToggleNotificationDrawerWrapper;
}(_react2.default.Component);

StatefulToggleNotificationDrawerWrapper.propTypes = {
  /** Notification Panels Array */
  panels: _propTypes2.default.array,
  /** Is Drawer Open Bool */
  isDrawerOpen: _propTypes2.default.bool,
  /** has Unread Messages Bool */
  hasUnreadMessages: _propTypes2.default.bool,
  /** is Drawer Expandable */
  isExpandable: _propTypes2.default.bool,
  /** Max Panel Height */
  maxPanelHeight: _propTypes2.default.string
};
StatefulToggleNotificationDrawerWrapper.defaultProps = {
  panels: null,
  isDrawerOpen: false,
  hasUnreadMessages: false,
  isExpandable: true,
  maxPanelHeight: null
};

exports.default = StatefulToggleNotificationDrawerWrapper;