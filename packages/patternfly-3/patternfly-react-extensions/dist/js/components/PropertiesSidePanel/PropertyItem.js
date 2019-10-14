'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PropertyItem = function PropertyItem(_ref) {
  var className = _ref.className,
      label = _ref.label,
      value = _ref.value,
      otherProps = _objectWithoutProperties(_ref, ['className', 'label', 'value']);

  var classes = (0, _classnames2.default)('properties-side-panel-pf-property', className);

  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, otherProps),
    _react2.default.createElement(
      'h5',
      { className: 'properties-side-panel-pf-property-label' },
      label
    ),
    _react2.default.createElement(
      'div',
      { className: 'properties-side-panel-pf-property-value' },
      value
    )
  );
};

PropertyItem.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Label for the property */
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]).isRequired,
  /** Value of the property */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node])
};

PropertyItem.defaultProps = {
  className: '',
  value: null
};

exports.default = PropertyItem;