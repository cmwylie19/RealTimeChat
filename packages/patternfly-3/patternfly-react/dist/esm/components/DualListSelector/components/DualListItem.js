import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DualListItemTooltip from './DualListItemTooltip';
import { TypeAheadSelect } from '../../../components/TypeAheadSelect';
import { noop } from '../../../common/helpers';

var Highlighter = TypeAheadSelect.Highlighter;


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

  var cx = classNames('dual-list-pf-item', className, checked && 'selected', disabled && 'disabled');
  var itemLabel = React.createElement(
    'span',
    { className: 'dual-list-pf-item-label' },
    React.createElement(
      Highlighter,
      { search: filterTerm },
      label
    )
  );
  var item = React.createElement(
    'label',
    { className: cx, hidden: hiddenByFilter || hidden },
    React.createElement('input', {
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
  return tooltipText ? React.createElement(
    DualListItemTooltip,
    { text: tooltipText, id: tooltipID || getTooltipID() },
    item
  ) : item;
};

DualListItem.propTypes = {
  /** Is the element chacked */
  checked: PropTypes.bool,
  /** Additional html class */
  className: PropTypes.string,
  /** The element position, used by the onChange function. */
  position: PropTypes.number,
  /** The element parent position, used by the onChange function. */
  parentPosition: PropTypes.number,
  /** The element value, used by the onChange function. */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** The element label, used by the onChange function. */
  label: PropTypes.string,
  /** The term which is flitering the list. */
  filterTerm: PropTypes.string,
  /** A function that is running when the item selected state is toggled. */
  onChange: PropTypes.func,
  /** The side of the selector. */
  side: PropTypes.string,
  /** Sets the item visibillity when filtering. */
  hiddenByFilter: PropTypes.bool,
  /** Sets the item default visibillity, can't be reverted. */
  hidden: PropTypes.bool,
  /** Disable the item to move between lists */
  disabled: PropTypes.bool,
  /** unique tooltip ID */
  tooltipID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** text to be shown on the tooltip */
  tooltipText: PropTypes.string
};

DualListItem.defaultProps = {
  checked: false,
  className: null,
  parentPosition: null,
  position: 0,
  value: '',
  label: null,
  filterTerm: null,
  onChange: noop,
  side: null,
  hiddenByFilter: false,
  hidden: false,
  disabled: false,
  tooltipID: null,
  tooltipText: null
};

export default DualListItem;