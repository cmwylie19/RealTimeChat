'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Grid = require('patternfly-react/dist/js/components/Grid/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * TableGridCol Component for PatternFly
 */

var TableGridCol = function TableGridCol(_ref) {
  var children = _ref.children,
      selected = _ref.selected,
      props = _objectWithoutProperties(_ref, ['children', 'selected']);

  var classes = (0, _classnames2.default)('table-grid-pf-col', { active: selected });
  return _react2.default.createElement(
    _Grid2.default.Col,
    props,
    _react2.default.createElement(
      'span',
      { className: classes },
      children
    )
  );
};

TableGridCol.propTypes = {
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Flag if the cell is selected */
  selected: _propTypes2.default.bool
};

TableGridCol.defaultProps = {
  children: null,
  selected: false
};

exports.default = TableGridCol;