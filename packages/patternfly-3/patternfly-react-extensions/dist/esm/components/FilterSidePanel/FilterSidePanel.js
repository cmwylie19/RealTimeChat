var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FilterSidePanelCategory from './FilterSidePanelCategory';
import FilterSidePanelCategoryItem from './FilterSidePanelCategoryItem';

/**
 * FilterSidePanel Component for PatternFly
 */
var FilterSidePanel = function FilterSidePanel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  var classes = classNames('filter-panel-pf', className);
  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    children
  );
};

FilterSidePanel.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
FilterSidePanel.defaultProps = {
  children: null,
  className: ''
};

FilterSidePanel.Category = FilterSidePanelCategory;
FilterSidePanel.CategoryItem = FilterSidePanelCategoryItem;

export default FilterSidePanel;