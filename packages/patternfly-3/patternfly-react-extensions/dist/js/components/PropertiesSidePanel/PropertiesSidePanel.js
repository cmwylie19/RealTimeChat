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

var _PropertyItem = require('./PropertyItem');

var _PropertyItem2 = _interopRequireDefault(_PropertyItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PropertiesSidePanel = function PropertiesSidePanel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      otherProps = _objectWithoutProperties(_ref, ['children', 'className']);

  var classes = (0, _classnames2.default)('properties-side-panel-pf', className);

  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, otherProps),
    children
  );
};

PropertiesSidePanel.propTypes = {
  /** Children, should be PropertyItem items plus any action buttons, etc */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string
};

PropertiesSidePanel.defaultProps = {
  children: null,
  className: ''
};

PropertiesSidePanel.Property = _PropertyItem2.default;

exports.default = PropertiesSidePanel;