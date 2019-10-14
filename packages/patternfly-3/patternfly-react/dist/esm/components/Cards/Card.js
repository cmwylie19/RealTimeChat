var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

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

  var classes = classNames('card-pf', { 'card-pf-accented': accented }, { 'card-pf-aggregate-status': aggregated }, {
    'card-pf-aggregate-status card-pf-aggregate-status-mini': aggregatedMini
  }, { 'card-pf-match-height': matchHeight }, className);

  return React.createElement(
    'div',
    _extends({ className: classes, ref: cardRef }, props),
    children
  );
};

Card.propTypes = {
  /** Child nodes */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** Top Card Accent Bool */
  accented: PropTypes.bool,
  /** Aggregate Card Bool */
  aggregated: PropTypes.bool,
  /** Aggregate Mini Card Bool */
  aggregatedMini: PropTypes.bool,
  /** Match Height Bool */
  matchHeight: PropTypes.bool,
  /** Reference prop */
  cardRef: PropTypes.func
};

Card.defaultProps = {
  className: '',
  accented: false,
  aggregated: false,
  aggregatedMini: false,
  matchHeight: false,
  cardRef: null
};

export default Card;