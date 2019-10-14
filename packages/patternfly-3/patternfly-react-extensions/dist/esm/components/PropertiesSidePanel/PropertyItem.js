var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var PropertyItem = function PropertyItem(_ref) {
  var className = _ref.className,
      label = _ref.label,
      value = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ['className', 'label', 'value']);

  var classes = classNames('properties-side-panel-pf-property', className);

  return React.createElement(
    'div',
    _extends({ className: classes }, otherProps),
    React.createElement(
      'h5',
      { className: 'properties-side-panel-pf-property-label' },
      label
    ),
    React.createElement(
      'div',
      { className: 'properties-side-panel-pf-property-value' },
      value
    )
  );
};

PropertyItem.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Label for the property */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Value of the property */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

PropertyItem.defaultProps = {
  className: '',
  value: null
};

export default PropertyItem;