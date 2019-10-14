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

var _DualListItemTooltip = require('./DualListItemTooltip');

var _DualListItemTooltip2 = _interopRequireDefault(_DualListItemTooltip);

var _TypeAheadSelect = require('../../../components/TypeAheadSelect');

var _helpers = require('../../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Highlighter = _TypeAheadSelect.TypeAheadSelect.Highlighter;


var DualListItem = function DualListItem(_ref) {
  var checked = _ref.checked,
      className = _ref.className,
      position = _ref.position,
      parentPosition = _ref.parentPosition,
      value = _ref.value,
      label = _ref.label,
      filterTerm = _ref.filterTerm,
      onChange = _ref.onChange,
      side = _ref.side,
      hidden = _ref.hidden,
      hiddenByFilter = _ref.hiddenByFilter,
      disabled = _ref.disabled,
      tooltipID = _ref.tooltipID,
      tooltipText = _ref.tooltipText;

  var cx = (0, _classnames2.default)('dual-list-pf-item', className, checked && 'selected', disabled && 'disabled');
  var itemLabel = _react2.default.createElement(
    'span',
    { className: 'dual-list-pf-item-label' },
    _react2.default.createElement(
      Highlighter,
      { search: filterTerm },
      label
    )
  );
  var item = _react2.default.createElement(
    'label',
    { className: cx, hidden: hiddenByFilter || hidden },
    _react2.default.createElement('input', {
      type: 'checkbox',
      'data-position': position,
      'data-parent-position': parentPosition,
      onChange: onChange,
      checked: checked || false,
      value: value,
      'data-side': side,
      disabled: disabled
    }),
    itemLabel
  );
  var getTooltipID = function getTooltipID() {
    var uniqueTooltipID = 'dual-list-item-tooltip-' + side;
    if (parentPosition) {
      uniqueTooltipID += '-' + parentPosition;
    }
    uniqueTooltipID += '-' + position;
    return uniqueTooltipID;
  };
  return tooltipText ? _react2.default.createElement(
    _DualListItemTooltip2.default,
    { text: tooltipText, id: tooltipID || getTooltipID() },
    item
  ) : item;
};

DualListItem.propTypes = {
  /** Is the element chacked */
  checked: _propTypes2.default.bool,
  /** Additional html class */
  className: _propTypes2.default.string,
  /** The element position, used by the onChange function. */
  position: _propTypes2.default.number,
  /** The element parent position, used by the onChange function. */
  parentPosition: _propTypes2.default.number,
  /** The element value, used by the onChange function. */
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  /** The element label, used by the onChange function. */
  label: _propTypes2.default.string,
  /** The term which is flitering the list. */
  filterTerm: _propTypes2.default.string,
  /** A function that is running when the item selected state is toggled. */
  onChange: _propTypes2.default.func,
  /** The side of the selector. */
  side: _propTypes2.default.string,
  /** Sets the item visibillity when filtering. */
  hiddenByFilter: _propTypes2.default.bool,
  /** Sets the item default visibillity, can't be reverted. */
  hidden: _propTypes2.default.bool,
  /** Disable the item to move between lists */
  disabled: _propTypes2.default.bool,
  /** unique tooltip ID */
  tooltipID: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /** text to be shown on the tooltip */
  tooltipText: _propTypes2.default.string
};

DualListItem.defaultProps = {
  checked: false,
  className: null,
  parentPosition: null,
  position: 0,
  value: '',
  label: null,
  filterTerm: null,
  onChange: _helpers.noop,
  side: null,
  hiddenByFilter: false,
  hidden: false,
  disabled: false,
  tooltipID: null,
  tooltipText: null
};

exports.default = DualListItem;