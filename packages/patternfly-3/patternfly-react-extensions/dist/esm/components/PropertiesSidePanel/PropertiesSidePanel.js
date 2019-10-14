var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PropertyItem from './PropertyItem';

var PropertiesSidePanel = function PropertiesSidePanel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      otherProps = _objectWithoutProperties(_ref, ['children', 'className']);

  var classes = classNames('properties-side-panel-pf', className);

  return React.createElement(
    'div',
    _extends({ className: classes }, otherProps),
    children
  );
};

PropertiesSidePanel.propTypes = {
  /** Children, should be PropertyItem items plus any action buttons, etc */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

PropertiesSidePanel.defaultProps = {
  children: null,
  className: ''
};

PropertiesSidePanel.Property = PropertyItem;

export default PropertiesSidePanel;