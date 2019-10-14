var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var CatalogItemHeader = function CatalogItemHeader(_ref) {
  var className = _ref.className,
      iconImg = _ref.iconImg,
      iconClass = _ref.iconClass,
      title = _ref.title,
      vendor = _ref.vendor,
      props = _objectWithoutProperties(_ref, ['className', 'iconImg', 'iconClass', 'title', 'vendor']);

  var classes = classNames('catalog-item-header-pf', className);

  return React.createElement(
    'header',
    _extends({ className: classes }, props),
    iconImg && React.createElement('img', { className: 'catalog-item-header-pf-icon', src: iconImg, alt: '' }),
    !iconImg && iconClass && React.createElement('span', { className: 'catalog-item-header-pf-icon ' + iconClass }),
    React.createElement(
      'div',
      { className: 'catalog-item-header-pf-text' },
      React.createElement(
        'h1',
        { className: 'catalog-item-header-pf-title' },
        title
      ),
      vendor && React.createElement(
        'h5',
        { className: 'catalog-item-header-pf-subtitle' },
        vendor
      )
    )
  );
};

CatalogItemHeader.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** URL of an image for the item's icon */
  iconImg: PropTypes.string,
  /** Class for the image when an icon is to be used (exclusive from iconImg) */
  iconClass: PropTypes.string,
  /** Tile for the catalog item */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Vendor for the catalog item */
  vendor: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

CatalogItemHeader.defaultProps = {
  className: '',
  iconImg: null,
  iconClass: null,
  vendor: null
};

export default CatalogItemHeader;