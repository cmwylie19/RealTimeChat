var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'patternfly-react/dist/esm/components/Button/Button';
import Grid from 'patternfly-react/dist/esm/components/Grid/Grid';
import Icon from 'patternfly-react/dist/esm/components/Icon/Icon';
import OverlayTrigger from 'patternfly-react/dist/esm/components/OverlayTrigger/OverlayTrigger';
import Tooltip from 'patternfly-react/dist/esm/components/Tooltip/Tooltip';

import { helpers } from '../../common/helpers';

/**
 * TableGridHead Component for PatternFly
 */

var TableGridHead = function TableGridHead(_ref) {
  var id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      showCheckbox = _ref.showCheckbox,
      allSelected = _ref.allSelected,
      partialSelected = _ref.partialSelected,
      onToggleSelection = _ref.onToggleSelection,
      toggleTip = _ref.toggleTip,
      allSelectedAriaLabel = _ref.allSelectedAriaLabel,
      partialSelectedAriaLabel = _ref.partialSelectedAriaLabel,
      noneSelectedAriaLabel = _ref.noneSelectedAriaLabel,
      props = _objectWithoutProperties(_ref, ['id', 'children', 'className', 'showCheckbox', 'allSelected', 'partialSelected', 'onToggleSelection', 'toggleTip', 'allSelectedAriaLabel', 'partialSelectedAriaLabel', 'noneSelectedAriaLabel']);

  var classes = classNames('table-grid-pf-head', className);

  var getTipText = function getTipText() {
    if (toggleTip) {
      return toggleTip;
    }
    if (allSelected) {
      return 'All Selected';
    }
    if (partialSelected) {
      return 'Partially Selected';
    }
    return 'None Selected';
  };

  var getAriaLabel = function getAriaLabel() {
    if (allSelected) {
      return allSelectedAriaLabel;
    }
    if (partialSelected) {
      return partialSelectedAriaLabel;
    }
    return noneSelectedAriaLabel;
  };

  var checkboxTooltip = React.createElement(
    Tooltip,
    { id: (id || Date.now()) + '_tip' },
    getTipText()
  );

  var iconName = void 0;
  if (allSelected) {
    iconName = 'check-square';
  } else if (partialSelected) {
    iconName = 'minus-square';
  } else {
    iconName = 'square-o';
  }

  return React.createElement(
    Grid.Row,
    _extends({ id: id, className: classes }, props),
    showCheckbox && React.createElement(
      'div',
      { className: 'table-grid-pf-checkbox' },
      React.createElement(
        OverlayTrigger,
        { delay: 500, overlay: checkboxTooltip },
        React.createElement(
          Button,
          { bsStyle: 'link', onClick: onToggleSelection, 'aria-label': getAriaLabel() },
          React.createElement(Icon, { type: 'fa', name: iconName })
        )
      )
    ),
    children
  );
};

TableGridHead.propTypes = {
  /** Id */
  id: PropTypes.any,
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag to show the Header Checkbox  */
  showCheckbox: PropTypes.bool,
  /** Flag if all items are selected (showCheckbox only) */
  allSelected: PropTypes.bool,
  /** Flag if some of the items are selected  (showCheckbox only) */
  partialSelected: PropTypes.bool,
  /** Callback function for checkbox toggle (showCheckbox only) */
  onToggleSelection: PropTypes.func,
  /** Text for the toggle tooltip (showCheckbox only) */
  toggleTip: PropTypes.string,
  /** Screen reader text for All Selected (showCheckbox only) */
  allSelectedAriaLabel: PropTypes.string,
  /** Screen reader text for Partial Selected (showCheckbox only) */
  partialSelectedAriaLabel: PropTypes.string,
  /** Screen reader text for None Selected (showCheckbox only) */
  noneSelectedAriaLabel: PropTypes.string
};
TableGridHead.defaultProps = {
  id: null,
  children: null,
  className: '',
  showCheckbox: false,
  allSelected: false,
  partialSelected: false,
  onToggleSelection: helpers.noop,
  toggleTip: null,
  allSelectedAriaLabel: 'Click to deselect all',
  partialSelectedAriaLabel: 'Click to deselect all',
  noneSelectedAriaLabel: 'Click to select all'
};

export default TableGridHead;