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

var _Grid = require('patternfly-react/dist/js/components/Grid/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * TableGridRow Component for PatternFly
 */

var TableGridRow = function TableGridRow(_ref) {
  var children = _ref.children,
      className = _ref.className,
      selected = _ref.selected,
      onToggleSelection = _ref.onToggleSelection,
      checkboxAriaLabel = _ref.checkboxAriaLabel,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'selected', 'onToggleSelection', 'checkboxAriaLabel']);

  var classes = (0, _classnames2.default)('table-grid-pf-row', { active: selected }, className);
  return _react2.default.createElement(
    _Grid2.default.Row,
    _extends({ className: classes }, props),
    _react2.default.createElement(
      'div',
      { className: 'table-grid-pf-checkbox' },
      _react2.default.createElement('input', { type: 'checkbox', checked: selected, onChange: onToggleSelection, 'aria-label': checkboxAriaLabel })
    ),
    children
  );
};

TableGridRow.propTypes = {
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Flag if the row is selected */
  selected: _propTypes2.default.bool,
  /** Callback function for checkbox toggle  (checkbox selection only) */
  onToggleSelection: _propTypes2.default.func,
  /** Aria label for the checkbox (checkbox selection only) */
  checkboxAriaLabel: _propTypes2.default.string
};

TableGridRow.defaultProps = {
  children: null,
  className: '',
  selected: false,
  onToggleSelection: _helpers.helpers.noop,
  checkboxAriaLabel: 'Select'
};

exports.default = TableGridRow;