'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Card Component for PatternFly React
 */
var Card = function Card(_ref) {
  var children = _ref.children,
      className = _ref.className,
      accented = _ref.accented,
      aggregated = _ref.aggregated,
      aggregatedMini = _ref.aggregatedMini,
      matchHeight = _ref.matchHeight,
      cardRef = _ref.cardRef,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'accented', 'aggregated', 'aggregatedMini', 'matchHeight', 'cardRef']);

  var classes = (0, _classnames2.default)('card-pf', { 'card-pf-accented': accented }, { 'card-pf-aggregate-status': aggregated }, {
    'card-pf-aggregate-status card-pf-aggregate-status-mini': aggregatedMini
  }, { 'card-pf-match-height': matchHeight }, className);

  return _react2.default.createElement(
    'div',
    _extends({ className: classes, ref: cardRef }, props),
    children
  );
};

Card.propTypes = {
  /** Child nodes */
  children: _propTypes2.default.node.isRequired,
  /** Additional element css classes */
  className: _propTypes2.default.string,
  /** Top Card Accent Bool */
  accented: _propTypes2.default.bool,
  /** Aggregate Card Bool */
  aggregated: _propTypes2.default.bool,
  /** Aggregate Mini Card Bool */
  aggregatedMini: _propTypes2.default.bool,
  /** Match Height Bool */
  matchHeight: _propTypes2.default.bool,
  /** Reference prop */
  cardRef: _propTypes2.default.func
};

Card.defaultProps = {
  className: '',
  accented: false,
  aggregated: false,
  aggregatedMini: false,
  matchHeight: false,
  cardRef: null
};

exports.default = Card;