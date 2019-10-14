var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { NotificationDrawerWrapper } from './index';

var StatefulNotificationDrawerWrapper = function (_React$Component) {
  _inherits(StatefulNotificationDrawerWrapper, _React$Component);

  function StatefulNotificationDrawerWrapper(props) {
    _classCallCheck(this, StatefulNotificationDrawerWrapper);

    var _this = _possibleConstructorReturn(this, (StatefulNotificationDrawerWrapper.__proto__ || Object.getPrototypeOf(StatefulNotificationDrawerWrapper)).call(this, props));

    _this.onClickLink = function (url) {
      window.open(url.href);
    };

    _this.onMarkPanelAsRead = function (panelkey) {
      var panels = _this.state.panels.map(function (panel) {
        if (panel.panelkey === panelkey) {
          panel.notifications.map(function (notification) {
            notification.seen = true;
            return notification;
          });
        }
        return panel;
      });
      _this.setState({ panels: panels });
      _this.updateUnreadCount();
    };

    _this.onMarkPanelAsClear = function (key) {
      var panels = _this.state.panels.map(function (panel) {
        if (panel.panelkey === key) {
          panel.notifications = [];
        }
        return panel;
      });
      _this.setState({ panels: panels });
      _this.updateUnreadCount();
    };

    _this.onNotificationAsRead = function (panelkey, nkey) {
      var panels = _this.state.panels.map(function (panel) {
        if (panel.panelkey === panelkey) {
          panel.notifications.map(function (notification) {
            if (notification.id === nkey) {
              notification.seen = true;
            }
            return notification;
          });
        }
        return panel;
      });
      _this.setState({ panels: panels });
      _this.updateUnreadCount();
    };

    _this.onNotificationClick = function () {
      // On Click
    };

    _this.onNotificationHide = function (panelkey, nkey) {
      var panels = _this.state.panels.map(function (panel) {
        if (panel.panelkey === panelkey) {
          for (var i = 0; i < panel.notifications.length; i++) {
            if (nkey === panel.notifications[i].id) {
              panel.notifications.splice(i, 1);
            }
          }
        }
        return panel;
      });
      _this.setState({ panels: panels });
      _this.updateUnreadCount();
    };

    _this.togglePanel = function (key) {
      if (_this.state.expandedPanel === key) {
        _this.setState({ expandedPanel: '-1' });
      } else {
        _this.setState({ expandedPanel: key });
      }
    };

    _this.toggleDrawerExpand = function () {
      _this.setState(function (prevState) {
        return {
          isExpanded: !prevState.isExpanded
        };
      });
    };

    _this.updateUnreadCount = function () {
      var hasunread = false;
      for (var i = 0; i < _this.state.panels.length; i++) {
        for (var j = 0; j < _this.state.panels[i].notifications.length; j++) {
          if (_this.state.panels[i].notifications[j].seen === false) {
            hasunread = true;
          }
        }
      }
      _this.props.updateUnreadCount(hasunread);
    };

    _this.state = {
      panels: props.panels,
      isExpanded: props.isExpanded,
      expandedPanel: props.expandedPanel
    };
    return _this;
  }

  _createClass(StatefulNotificationDrawerWrapper, [{
    key: 'render',
    value: function render() {
      return React.createElement(NotificationDrawerWrapper, {
        panels: this.state.panels,
        togglePanel: this.togglePanel,
        toggleDrawerExpand: this.toggleDrawerExpand,
        isExpanded: this.state.isExpanded,
        isExpandable: this.props.isExpandable,
        expandedPanel: this.state.expandedPanel,
        toggleDrawerHide: this.props.toggleDrawer,
        onNotificationClick: this.onNotificationClick,
        onNotificationAsRead: this.onNotificationAsRead,
        onNotificationHide: this.onNotificationHide,
        onMarkPanelAsClear: this.onMarkPanelAsClear,
        onMarkPanelAsRead: this.onMarkPanelAsRead,
        onClickedLink: this.onClickLink
      });
    }
  }]);

  return StatefulNotificationDrawerWrapper;
}(React.Component);

StatefulNotificationDrawerWrapper.propTypes = {
  /** Notification Panels Array */
  panels: PropTypes.array,
  /** is Expanded Bool */
  isExpanded: PropTypes.bool,
  /** updateUnreadCount Func */
  updateUnreadCount: PropTypes.func,
  /** toggleDrawer Func */
  toggleDrawer: PropTypes.func,
  /** is Drawer Expandable prop */
  isExpandable: PropTypes.bool,
  /** expanded Panel */
  expandedPanel: PropTypes.string
};
StatefulNotificationDrawerWrapper.defaultProps = {
  panels: null,
  isExpanded: false,
  updateUnreadCount: null,
  toggleDrawer: null,
  isExpandable: true,
  expandedPanel: null
};

export default StatefulNotificationDrawerWrapper;