var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'patternfly-react/dist/esm/components/Button/Button';
import Grid from 'patternfly-react/dist/esm/components/Grid/Grid';
import Icon from 'patternfly-react/dist/esm/components/Icon/Icon';

import { helpers } from '../../common/helpers';

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

  var classes = classNames('table-grid-pf-column-header text-nowrap', { 'active-sort': isSorted, descending: !isAscending }, className);

  return React.createElement(
    Grid.Col,
    _extends({ className: classes }, props),
    sortable && React.createElement(
      Button,
      { bsStyle: 'link', onClick: onSortToggle },
      children,
      isSorted && React.createElement(Icon, {
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
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag if this column is sortable */
  sortable: PropTypes.bool,
  /** Flag if this is the current sort column */
  isSorted: PropTypes.bool,
  /** Flag if the sort is ascending */
  isAscending: PropTypes.bool,
  /** Callback function when the user click on this column header */
  onSortToggle: PropTypes.func
}, Grid.Col.propTypes);

TableGridColumnHeader.defaultProps = _extends({
  children: null,
  className: '',
  sortable: false,
  isSorted: false,
  isAscending: true,
  onSortToggle: helpers.noop
}, Grid.Col.defaultProps);

export default TableGridColumnHeader;