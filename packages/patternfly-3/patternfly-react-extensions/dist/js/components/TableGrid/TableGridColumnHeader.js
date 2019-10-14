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

var _Button = require('patternfly-react/dist/js/components/Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Grid = require('patternfly-react/dist/js/components/Grid/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Icon = require('patternfly-react/dist/js/components/Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * TableGridColumnHeader Component for PatternFly
 */

var TableGridColumnHeader = function TableGridColumnHeader(_ref) {
  var children = _ref.children,
      className = _ref.className,
      sortable = _ref.sortable,
      isSorted = _ref.isSorted,
      isAscending = _ref.isAscending,
      onSortToggle = _ref.onSortToggle,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'sortable', 'isSorted', 'isAscending', 'onSortToggle']);

  var classes = (0, _classnames2.default)('table-grid-pf-column-header text-nowrap', { 'active-sort': isSorted, descending: !isAscending }, className);

  return _react2.default.createElement(
    _Grid2.default.Col,
    _extends({ className: classes }, props),
    sortable && _react2.default.createElement(
      _Button2.default,
      { bsStyle: 'link', onClick: onSortToggle },
      children,
      isSorted && _react2.default.createElement(_Icon2.default, {
        className: 'table-grid-pf-header-sort-arrow',
        type: 'pf',
        name: isAscending ? 'sort-common-asc' : 'sort-common-desc'
      })
    ),
    !sortable && children
  );
};

TableGridColumnHeader.propTypes = _extends({
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Flag if this column is sortable */
  sortable: _propTypes2.default.bool,
  /** Flag if this is the current sort column */
  isSorted: _propTypes2.default.bool,
  /** Flag if the sort is ascending */
  isAscending: _propTypes2.default.bool,
  /** Callback function when the user click on this column header */
  onSortToggle: _propTypes2.default.func
}, _Grid2.default.Col.propTypes);

TableGridColumnHeader.defaultProps = _extends({
  children: null,
  className: '',
  sortable: false,
  isSorted: false,
  isAscending: true,
  onSortToggle: _helpers.helpers.noop
}, _Grid2.default.Col.defaultProps);

exports.default = TableGridColumnHeader;