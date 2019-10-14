import React from 'react';
import PropTypes from 'prop-types';
import Collapse from 'react-bootstrap/es/Collapse';

import { Notification } from '../index';
import { NotificationDrawer } from '../NotificationDrawer/index';
import { Icon } from '../../Icon';
import { Button } from '../../Button';
import { MenuItem } from '../../MenuItem';
import { noop } from '../../../common/helpers';
import getIconClass from './Icon.consts';

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
    return React.createElement(
      Notification,
      {
        key: i,
        seen: notification.seen,
        onClick: function onClick() {
          return notificationClickHandler(panelkey, notification.id, notification.seen);
        }
      },
      notification.actions ? Object.keys(notification.actions).length > 0 && React.createElement(
        NotificationDrawer.Dropdown,
        { pullRight: true, id: i },
        notification.actions.links.map(function (link, j) {
          return React.createElement(
            MenuItem,
            { key: j, id: 'notification-kebab-' + j, onClick: function onClick() {
                return onClickedLink(link);
              } },
            link.title
          );
        }),
        React.createElement(MenuItem, { divider: true }),
        React.createElement(
          MenuItem,
          { id: 'notification-kebab-hide', onClick: function onClick() {
              return onNotificationHide(panelkey, notification.id);
            } },
          translations.deleteNotification
        )
      ) : null,
      React.createElement(Icon, { className: 'pull-left', type: 'pf', name: getIconClass(notification.level) }),
      React.createElement(
        Notification.Content,
        null,
        React.createElement(
          Notification.Message,
          null,
          notification.text
        ),
        notification.created_at && React.createElement(Notification.Info, {
          leftText: new Date(notification.created_at).toLocaleDateString(),
          rightText: new Date(notification.created_at).toLocaleTimeString()
        })
      )
    );
  });

  var renderNotifications = React.createElement(
    NotificationDrawer.PanelBody,
    { key: 'containsNotifications' },
    showLoading ? [notificationsMap, React.createElement(Notification, { key: 'loading', type: 'loading' })] : notificationsMap
  );

  var renderClearReadButtons = React.createElement(
    NotificationDrawer.PanelAction,
    { key: panelkey },
    unreadCount > 0 && React.createElement(
      NotificationDrawer.PanelActionLink,
      { className: 'drawer-pf-action-link', 'data-toggle': 'mark-all-read' },
      React.createElement(
        Button,
        { bsStyle: 'link', onClick: function onClick() {
            return onMarkPanelAsRead(panelkey);
          } },
        translations.readAll
      )
    ),
    React.createElement(
      NotificationDrawer.PanelActionLink,
      { 'data-toggle': 'clear-all' },
      React.createElement(
        Button,
        { bsStyle: 'link', onClick: function onClick() {
            return onMarkPanelAsClear(panelkey);
          } },
        React.createElement(Icon, { type: 'pf', name: 'close' }),
        translations.clearAll
      )
    )
  );

  var noNotificationsMessage = React.createElement(NotificationDrawer.EmptyState, { title: translations.emptyState });

  return React.createElement(
    NotificationDrawer.Panel,
    { className: className, expanded: isExpanded },
    React.createElement(
      NotificationDrawer.PanelHeading,
      { onClick: function onClick() {
          return togglePanel(panelkey);
        } },
      React.createElement(
        NotificationDrawer.PanelTitle,
        null,
        React.createElement(
          'a',
          { className: isExpanded ? '' : 'collapsed' },
          panelName
        )
      ),
      React.createElement(NotificationDrawer.PanelCounter, { text: getUnread() })
    ),
    React.createElement(
      Collapse,
      { 'in': isExpanded },
      React.createElement(
        NotificationDrawer.PanelCollapse,
        { id: panelkey },
        notifications.length > 0 ? [renderNotifications, renderClearReadButtons] : noNotificationsMessage
      )
    )
  );
};

NotificationDrawerPanelWrapper.propTypes = {
  /** Panel Key,Name */
  panelkey: PropTypes.string,
  panelName: PropTypes.string,
  className: PropTypes.string,
  /** Notification Panels Array */
  notifications: PropTypes.array,
  /** is Expanded Bool */
  isExpanded: PropTypes.bool,
  /** function(panelkey, notificationkey) on Notification Click */
  onNotificationClick: PropTypes.func,
  /** function(panelkey, notificationkey) on Notification Mark as Read Click */
  onNotificationAsRead: PropTypes.func,
  /** on function(panelkey) Panel Read All Click */
  onMarkPanelAsRead: PropTypes.func,
  /** function(url) on Dropdown Link Click */
  onClickedLink: PropTypes.func,
  /** function(panelkey, notificationkey) on Notification Hide Click */
  onNotificationHide: PropTypes.func,

  /** function(panelkey) Panel Clear All Click */
  onMarkPanelAsClear: PropTypes.func,
  /** function() togglePanel Click */
  togglePanel: PropTypes.func,
  /** show Loading notification Bool */
  showLoading: PropTypes.bool,
  /** translations for Title, EmptyState, Read/Clear */
  translations: PropTypes.shape({
    title: PropTypes.string,
    unreadEvent: PropTypes.string,
    unreadEvents: PropTypes.string,
    emptyState: PropTypes.string,
    readAll: PropTypes.string,
    clearAll: PropTypes.string,
    deleteNotification: PropTypes.string
  })
};
NotificationDrawerPanelWrapper.defaultProps = {
  panelkey: '1',
  notifications: PropTypes.array,
  isExpanded: false,
  className: null,
  panelName: null,
  onNotificationClick: noop,
  onNotificationAsRead: noop,
  onMarkPanelAsRead: noop,
  onClickedLink: noop,
  onNotificationHide: noop,
  onMarkPanelAsClear: noop,
  togglePanel: noop,
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

export default NotificationDrawerPanelWrapper;