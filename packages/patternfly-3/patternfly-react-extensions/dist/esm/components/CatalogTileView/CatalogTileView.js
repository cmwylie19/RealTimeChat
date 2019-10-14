var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CatalogTileViewCategory from './CatalogTileViewCategory';

var CatalogTileView = function CatalogTileView(_ref) {
  var children = _ref.children,
      className = _ref.className,
      useCategories = _ref.useCategories,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'useCategories']);

  var classes = classNames('catalog-tile-view-pf', { 'catalog-tile-view-pf-no-categories': !useCategories }, className);

  return React.createElement(
    'div',
    _extends({ className: classes }, props),
    children
  );
};

CatalogTileView.propTypes = {
  /** Children */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag to use categories in the view */
  useCategories: PropTypes.bool
};

CatalogTileView.defaultProps = {
  children: null,
  useCategories: true,
  className: ''
};

CatalogTileView.Category = CatalogTileViewCategory;

export default CatalogTileView;