function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from 'patternfly-react/dist/esm/components/Grid/Grid';

/**
 * TableGridCol Component for PatternFly
 */

var TableGridCol = function TableGridCol(_ref) {
  var children = _ref.children,
      selected = _ref.selected,
      props = _objectWithoutProperties(_ref, ['children', 'selected']);

  var classes = classNames('table-grid-pf-col', { active: selected });
  return React.createElement(
    Grid.Col,
    props,
    React.createElement(
      'span',
      { className: classes },
      children
    )
  );
};

TableGridCol.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Flag if the cell is selected */
  selected: PropTypes.bool
};

TableGridCol.defaultProps = {
  children: null,
  selected: false
};

export default TableGridCol;