'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Collapse = require('react-bootstrap/lib/Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _index = require('../index');

var _index2 = require('../NotificationDrawer/index');

var _Icon = require('../../Icon');

var _Button = require('../../Button');

var _MenuItem = require('../../MenuItem');

var _helpers = require('../../../common/helpers');

var _Icon2 = require('./Icon.consts');

var _Icon3 = _interopRequireDefault(_Icon2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationDrawerPanelWrapper = function NotificationDrawerPanelWrapper(_ref) {
  var panelkey = _ref.panelkey,
      panelName = _ref.panelName,
      className = _ref.className,
      notifications = _ref.notifications,
      isExpanded = _ref.isExpanded,
      togglePanel = _ref.togglePanel,
      onNotificationClick = _ref.onNotificationClick,
      onNotificationAsRead = _ref.onNotificationAsRead,
      onNotificationHide = _ref.onNotificationHide,
      onMarkPanelAsRead = _ref.onMarkPanelAsRead,
      onClickedLink = _ref.onClickedLink,
      onMarkPanelAsClear = _ref.onMarkPanelAsClear,
      showLoading = _ref.showLoading,
      translations = _ref.translations;

  var unreadCount = notifications.filter(function (notification) {
    return !notification.seen;
  }).length;

  var getUnread = function getUnread() {
    if (unreadCount !== 1) {
      return unreadCount + ' ' + translations.unreadEvents;
    }
    return '1 ' + translations.unreadEvent;
  };

  var notificationClickHandler = function notificationClickHandler(panel, notification, seen) {
    onNotificationClick(panel, notification);

    if (!seen) {
      onNotificationAsRead(panel, notification);
    }
  };

  var notificationsMap = notifications.map(function (notification, i) {
    return _react2.default.createElement(
      _index.Notification,
      {
        key: i,
        seen: notification.seen,
        onClick: function onClick() {
          return notificationClickHandler(panelkey, notification.id, notification.seen);
        }
      },
      notification.actions ? Object.keys(notification.actions).length > 0 && _react2.default.createElement(
        _index2.NotificationDrawer.Dropdown,
        { pullRight: true, id: i },
        notification.actions.links.map(function (link, j) {
          return _react2.default.createElement(
            _MenuItem.MenuItem,
            { key: j, id: 'notification-kebab-' + j, onClick: function onClick() {
                return onClickedLink(link);
              } },
            link.title
          );
        }),
        _react2.default.createElement(_MenuItem.MenuItem, { divider: true }),
        _react2.default.createElement(
          _MenuItem.MenuItem,
          { id: 'notification-kebab-hide', onClick: function onClick() {
              return onNotificationHide(panelkey, notification.id);
            } },
          translations.deleteNotification
        )
      ) : null,
      _react2.default.createElement(_Icon.Icon, { className: 'pull-left', type: 'pf', name: (0, _Icon3.default)(notification.level) }),
      _react2.default.createElement(
        _index.Notification.Content,
        null,
        _react2.default.createElement(
          _index.Notification.Message,
          null,
          notification.text
        ),
        notification.created_at && _react2.default.createElement(_index.Notification.Info, {
          leftText: new Date(notification.created_at).toLocaleDateString(),
          rightText: new Date(notification.created_at).toLocaleTimeString()
        })
      )
    );
  });

  var renderNotifications = _react2.default.createElement(
    _index2.NotificationDrawer.PanelBody,
    { key: 'containsNotifications' },
    showLoading ? [notificationsMap, _react2.default.createElement(_index.Notification, { key: 'loading', type: 'loading' })] : notificationsMap
  );

  var renderClearReadButtons = _react2.default.createElement(
    _index2.NotificationDrawer.PanelAction,
    { key: panelkey },
    unreadCount > 0 && _react2.default.createElement(
      _index2.NotificationDrawer.PanelActionLink,
      { className: 'drawer-pf-action-link', 'data-toggle': 'mark-all-read' },
      _react2.default.createElement(
        _Button.Button,
        { bsStyle: 'link', onClick: function onClick() {
            return onMarkPanelAsRead(panelkey);
          } },
        translations.readAll
      )
    ),
    _react2.default.createElement(
      _index2.NotificationDrawer.PanelActionLink,
      { 'data-toggle': 'clear-all' },
      _react2.default.createElement(
        _Button.Button,
        { bsStyle: 'link', onClick: function onClick() {
            return onMarkPanelAsClear(panelkey);
          } },
        _react2.default.createElement(_Icon.Icon, { type: 'pf', name: 'close' }),
        translations.clearAll
      )
    )
  );

  var noNotificationsMessage = _react2.default.createElement(_index2.NotificationDrawer.EmptyState, { title: translations.emptyState });

  return _react2.default.createElement(
    _index2.NotificationDrawer.Panel,
    { className: className, expanded: isExpanded },
    _react2.default.createElement(
      _index2.NotificationDrawer.PanelHeading,
      { onClick: function onClick() {
          return togglePanel(panelkey);
        } },
      _react2.default.createElement(
        _index2.NotificationDrawer.PanelTitle,
        null,
        _react2.default.createElement(
          'a',
          { className: isExpanded ? '' : 'collapsed' },
          panelName
        )
      ),
      _react2.default.createElement(_index2.NotificationDrawer.PanelCounter, { text: getUnread() })
    ),
    _react2.default.createElement(
      _Collapse2.default,
      { 'in': isExpanded },
      _react2.default.createElement(
        _index2.NotificationDrawer.PanelCollapse,
        { id: panelkey },
        notifications.length > 0 ? [renderNotifications, renderClearReadButtons] : noNotificationsMessage
      )
    )
  );
};

NotificationDrawerPanelWrapper.propTypes = {
  /** Panel Key,Name */
  panelkey: _propTypes2.default.string,
  panelName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  /** Notification Panels Array */
  notifications: _propTypes2.default.array,
  /** is Expanded Bool */
  isExpanded: _propTypes2.default.bool,
  /** function(panelkey, notificationkey) on Notification Click */
  onNotificationClick: _propTypes2.default.func,
  /** function(panelkey, notificationkey) on Notification Mark as Read Click */
  onNotificationAsRead: _propTypes2.default.func,
  /** on function(panelkey) Panel Read All Click */
  onMarkPanelAsRead: _propTypes2.default.func,
  /** function(url) on Dropdown Link Click */
  onClickedLink: _propTypes2.default.func,
  /** function(panelkey, notificationkey) on Notification Hide Click */
  onNotificationHide: _propTypes2.default.func,

  /** function(panelkey) Panel Clear All Click */
  onMarkPanelAsClear: _propTypes2.default.func,
  /** function() togglePanel Click */
  togglePanel: _propTypes2.default.func,
  /** show Loading notification Bool */
  showLoading: _propTypes2.default.bool,
  /** translations for Title, EmptyState, Read/Clear */
  translations: _propTypes2.default.shape({
    title: _propTypes2.default.string,
    unreadEvent: _propTypes2.default.string,
    unreadEvents: _propTypes2.default.string,
    emptyState: _propTypes2.default.string,
    readAll: _propTypes2.default.string,
    clearAll: _propTypes2.default.string,
    deleteNotification: _propTypes2.default.string
  })
};
NotificationDrawerPanelWrapper.defaultProps = {
  panelkey: '1',
  notifications: _propTypes2.default.array,
  isExpanded: false,
  className: null,
  panelName: null,
  onNotificationClick: _helpers.noop,
  onNotificationAsRead: _helpers.noop,
  onMarkPanelAsRead: _helpers.noop,
  onClickedLink: _helpers.noop,
  onNotificationHide: _helpers.noop,
  onMarkPanelAsClear: _helpers.noop,
  togglePanel: _helpers.noop,
  showLoading: false,
  translations: {
    title: 'Notifications',
    unreadEvent: 'Unread Event',
    unreadEvents: 'Unread Events',
    emptyState: 'No Notifications Available',
    readAll: 'Mark All Read',
    clearAll: 'Clear All',
    deleteNotification: 'Hide this notification'
  }
};

exports.default = NotificationDrawerPanelWrapper;