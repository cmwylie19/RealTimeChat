'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CatalogItemHeader = function CatalogItemHeader(_ref) {
  var className = _ref.className,
      iconImg = _ref.iconImg,
      iconClass = _ref.iconClass,
      title = _ref.title,
      vendor = _ref.vendor,
      props = _objectWithoutProperties(_ref, ['className', 'iconImg', 'iconClass', 'title', 'vendor']);

  var classes = (0, _classnames2.default)('catalog-item-header-pf', className);

  return _react2.default.createElement(
    'header',
    _extends({ className: classes }, props),
    iconImg && _react2.default.createElement('img', { className: 'catalog-item-header-pf-icon', src: iconImg, alt: '' }),
    !iconImg && iconClass && _react2.default.createElement('span', { className: 'catalog-item-header-pf-icon ' + iconClass }),
    _react2.default.createElement(
      'div',
      { className: 'catalog-item-header-pf-text' },
      _react2.default.createElement(
        'h1',
        { className: 'catalog-item-header-pf-title' },
        title
      ),
      vendor && _react2.default.createElement(
        'h5',
        { className: 'catalog-item-header-pf-subtitle' },
        vendor
      )
    )
  );
};

CatalogItemHeader.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** URL of an image for the item's icon */
  iconImg: _propTypes2.default.string,
  /** Class for the image when an icon is to be used (exclusive from iconImg) */
  iconClass: _propTypes2.default.string,
  /** Tile for the catalog item */
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]).isRequired,
  /** Vendor for the catalog item */
  vendor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node])
};

CatalogItemHeader.defaultProps = {
  className: '',
  iconImg: null,
  iconClass: null,
  vendor: null
};

exports.default = CatalogItemHeader;