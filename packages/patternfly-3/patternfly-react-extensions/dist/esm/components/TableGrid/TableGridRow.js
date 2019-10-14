var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from 'patternfly-react/dist/esm/components/Grid/Grid';

import { helpers } from '../../common/helpers';

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

  var classes = classNames('table-grid-pf-row', { active: selected }, className);
  return React.createElement(
    Grid.Row,
    _extends({ className: classes }, props),
    React.createElement(
      'div',
      { className: 'table-grid-pf-checkbox' },
      React.createElement('input', { type: 'checkbox', checked: selected, onChange: onToggleSelection, 'aria-label': checkboxAriaLabel })
    ),
    children
  );
};

TableGridRow.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag if the row is selected */
  selected: PropTypes.bool,
  /** Callback function for checkbox toggle  (checkbox selection only) */
  onToggleSelection: PropTypes.func,
  /** Aria label for the checkbox (checkbox selection only) */
  checkboxAriaLabel: PropTypes.string
};

TableGridRow.defaultProps = {
  children: null,
  className: '',
  selected: false,
  onToggleSelection: helpers.noop,
  checkboxAriaLabel: 'Select'
};

export default TableGridRow;