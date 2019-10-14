var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Checkbox from 'react-bootstrap/es/Checkbox';

import { helpers } from '../../common/helpers';

var FilterSidePanelCategoryItem = function FilterSidePanelCategoryItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      count = _ref.count,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'icon', 'count']);

  var classes = classNames('filter-panel-pf-category-item', className);

  return React.createElement(
    'div',
    { className: classes },
    React.createElement(
      Checkbox,
      props,
      icon && React.createElement(
        'span',
        { className: 'item-icon' },
        icon
      ),
      children,
      Number.isInteger(count) && React.createElement(
        'span',
        { className: 'item-count' },
        '(' + count + ')'
      )
    )
  );
};

FilterSidePanelCategoryItem.propTypes = _extends({
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Optional icon (or other) to show before the children */
  icon: PropTypes.node,
  /** Optional count of the items matching the filter */
  count: PropTypes.number
}, helpers.excludeKeys(Checkbox.propTypes, ['className', 'children']));

FilterSidePanelCategoryItem.defaultProps = _extends({
  children: null,
  className: '',
  icon: null,
  count: null
}, helpers.excludeKeys(Checkbox.defaultProps, ['className', 'children']));

export default FilterSidePanelCategoryItem;