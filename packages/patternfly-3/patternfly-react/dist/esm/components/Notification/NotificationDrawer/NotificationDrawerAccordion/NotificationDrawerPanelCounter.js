var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

var NotificationDrawerPanelCounter = function NotificationDrawerPanelCounter(_ref) {
  var text = _ref.text,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['text', 'className']);

  var classes = classNames('panel-counter', className);

  return React.createElement(
    'span',
    _extends({ className: classes }, props),
    text
  );
};
NotificationDrawerPanelCounter.propTypes = {
  /** Text prop for the Panel Counter */
  text: PropTypes.string,
  /** Additional element css classes */
  className: PropTypes.string
};
NotificationDrawerPanelCounter.defaultProps = {
  className: '',
  text: ''
};

export default NotificationDrawerPanelCounter;