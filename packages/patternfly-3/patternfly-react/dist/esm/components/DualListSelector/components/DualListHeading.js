import React from 'react';
import PropTypes from 'prop-types';
import DualListFilter from './DualListFilter';
import DualListSort from './DualListSort';
import DualListMainCheckbox from './DualListMainCheckbox';
import DualListDropDown from './DualListDropDown';
import { noop } from '../../../common/helpers';
import { SORT_ARIA_LABEL } from '../constants';

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
  return React.createElement(
    'div',
    { className: 'dual-list-pf-heading' },
    React.createElement(DualListMainCheckbox, { side: side, onChange: onMainCheckboxChange, isChecked: isMainChecked }),
    React.createElement(DualListFilter, { side: side, onChange: onFilterChange }),
    React.createElement(DualListSort, { side: side, onClick: onSortClick, isSortAsc: isSortAsc, ariaLabel: sortAriaLabel }),
    React.createElement(
      DualListDropDown,
      { id: kebabID },
      kebabMenu
    )
  );
};

DualListHeading.propTypes = {
  /** Which type of sort is it to determine the right icon. */
  isSortAsc: PropTypes.bool,
  /** The function which is running when sort icon is clicked. */
  onSortClick: PropTypes.func,
  /** The filter function that runs on the list items when the input changes. */
  onFilterChange: PropTypes.func,
  /** The function which is being called on checked state toggled. */
  onMainCheckboxChange: PropTypes.func,
  /** The Kebab menu items */
  kebabMenu: PropTypes.node,
  /** Which side is the selector, passed by the onClick function. */
  side: PropTypes.string,
  /** Sets the aria-label of the icon. */
  sortAriaLabel: PropTypes.string,
  /** controlls the main checkbox */
  isMainChecked: PropTypes.bool,
  /** ID for the kebab container */
  kebabID: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DualListHeading.defaultProps = {
  isSortAsc: true,
  onSortClick: noop,
  onFilterChange: noop,
  onMainCheckboxChange: noop,
  kebabMenu: null,
  side: null,
  sortAriaLabel: SORT_ARIA_LABEL,
  isMainChecked: false,
  kebabID: null
};

export default DualListHeading;