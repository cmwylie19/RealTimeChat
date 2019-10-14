'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DualListFilter = require('./DualListFilter');

var _DualListFilter2 = _interopRequireDefault(_DualListFilter);

var _DualListSort = require('./DualListSort');

var _DualListSort2 = _interopRequireDefault(_DualListSort);

var _DualListMainCheckbox = require('./DualListMainCheckbox');

var _DualListMainCheckbox2 = _interopRequireDefault(_DualListMainCheckbox);

var _DualListDropDown = require('./DualListDropDown');

var _DualListDropDown2 = _interopRequireDefault(_DualListDropDown);

var _helpers = require('../../../common/helpers');

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DualListHeading = function DualListHeading(_ref) {
  var isSortAsc = _ref.isSortAsc,
      onSortClick = _ref.onSortClick,
      onFilterChange = _ref.onFilterChange,
      onMainCheckboxChange = _ref.onMainCheckboxChange,
      kebabMenu = _ref.kebabMenu,
      side = _ref.side,
      sortAriaLabel = _ref.sortAriaLabel,
      isMainChecked = _ref.isMainChecked,
      kebabID = _ref.kebabID;
  return _react2.default.createElement(
    'div',
    { className: 'dual-list-pf-heading' },
    _react2.default.createElement(_DualListMainCheckbox2.default, { side: side, onChange: onMainCheckboxChange, isChecked: isMainChecked }),
    _react2.default.createElement(_DualListFilter2.default, { side: side, onChange: onFilterChange }),
    _react2.default.createElement(_DualListSort2.default, { side: side, onClick: onSortClick, isSortAsc: isSortAsc, ariaLabel: sortAriaLabel }),
    _react2.default.createElement(
      _DualListDropDown2.default,
      { id: kebabID },
      kebabMenu
    )
  );
};

DualListHeading.propTypes = {
  /** Which type of sort is it to determine the right icon. */
  isSortAsc: _propTypes2.default.bool,
  /** The function which is running when sort icon is clicked. */
  onSortClick: _propTypes2.default.func,
  /** The filter function that runs on the list items when the input changes. */
  onFilterChange: _propTypes2.default.func,
  /** The function which is being called on checked state toggled. */
  onMainCheckboxChange: _propTypes2.default.func,
  /** The Kebab menu items */
  kebabMenu: _propTypes2.default.node,
  /** Which side is the selector, passed by the onClick function. */
  side: _propTypes2.default.string,
  /** Sets the aria-label of the icon. */
  sortAriaLabel: _propTypes2.default.string,
  /** controlls the main checkbox */
  isMainChecked: _propTypes2.default.bool,
  /** ID for the kebab container */
  kebabID: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

DualListHeading.defaultProps = {
  isSortAsc: true,
  onSortClick: _helpers.noop,
  onFilterChange: _helpers.noop,
  onMainCheckboxChange: _helpers.noop,
  kebabMenu: null,
  side: null,
  sortAriaLabel: _constants.SORT_ARIA_LABEL,
  isMainChecked: false,
  kebabID: null
};

exports.default = DualListHeading;