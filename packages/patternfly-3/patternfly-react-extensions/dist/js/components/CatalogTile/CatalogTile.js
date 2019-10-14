'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CatalogTileBadge = require('./CatalogTileBadge');

var _CatalogTileBadge2 = _interopRequireDefault(_CatalogTileBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultTruncateDescription = function defaultTruncateDescription(text, max) {
  if (max === -1 || typeof text !== 'string' || text.length <= max) {
    return text;
  }

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    text.substring(0, max - 3),
    '\u2026'
  );
};

var CatalogTile = function (_React$Component) {
  _inherits(CatalogTile, _React$Component);

  function CatalogTile() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CatalogTile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CatalogTile.__proto__ || Object.getPrototypeOf(CatalogTile)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      heightStyle: {}
    }, _this.handleDescriptionRef = function (ref) {
      if (!ref) {
        return;
      }

      _this.descFullHeight = ref.clientHeight;
    }, _this.handleDescriptionSpanRef = function (ref) {
      if (!ref) {
        return;
      }

      _this.descLineHeight = parseInt(window.getComputedStyle(ref).getPropertyValue('line-height'), 10);
    }, _this.handleClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          href = _this$props.href;


      if (!href) {
        e.preventDefault();
      }
      if (onClick) {
        onClick(e);
      }
    }, _this.renderBadges = function (badges) {
      if (!badges || !badges.length) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'catalog-tile-pf-badge-container' },
        badges.map(function (badge, index) {
          return _react2.default.createElement(
            'span',
            { key: 'badge-' + index },
            badge
          );
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CatalogTile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.computeDescHeight();
    }
  }, {
    key: 'computeDescHeight',
    value: function computeDescHeight() {
      var heightStyle = {};

      if (this.descFullHeight && this.descLineHeight) {
        heightStyle.maxHeight = Math.floor(this.descFullHeight / this.descLineHeight) * this.descLineHeight + 'px';
      }

      this.setState({ heightStyle: heightStyle });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          id = _props.id,
          className = _props.className,
          featured = _props.featured,
          href = _props.href,
          onClick = _props.onClick,
          icon = _props.icon,
          iconImg = _props.iconImg,
          iconAlt = _props.iconAlt,
          iconClass = _props.iconClass,
          badges = _props.badges,
          title = _props.title,
          vendor = _props.vendor,
          description = _props.description,
          truncateDescriptionFn = _props.truncateDescriptionFn,
          maxDescriptionLength = _props.maxDescriptionLength,
          footer = _props.footer,
          otherProps = _objectWithoutProperties(_props, ['id', 'className', 'featured', 'href', 'onClick', 'icon', 'iconImg', 'iconAlt', 'iconClass', 'badges', 'title', 'vendor', 'description', 'truncateDescriptionFn', 'maxDescriptionLength', 'footer']);

      var heightStyle = this.state.heightStyle;

      var truncateDescription = truncateDescriptionFn || defaultTruncateDescription;

      var classes = (0, _classnames2.default)('catalog-tile-pf', { featured: featured }, className);

      var OuterComponent = href || onClick ? function (_ref2) {
        var children = _ref2.children;
        return _react2.default.createElement(
          'a',
          _extends({ id: id, className: classes, href: href || '#' }, otherProps, { onClick: function onClick(e) {
              return _this2.handleClick(e);
            } }),
          children
        );
      } : function (_ref3) {
        var children = _ref3.children;
        return _react2.default.createElement(
          'div',
          _extends({ id: id, className: classes }, otherProps),
          children
        );
      };

      return _react2.default.createElement(
        OuterComponent,
        null,
        _react2.default.createElement(
          'div',
          { className: 'catalog-tile-pf-header' },
          iconImg && _react2.default.createElement('img', { className: 'catalog-tile-pf-icon', src: iconImg, alt: iconAlt }),
          !iconImg && (iconClass || icon) && _react2.default.createElement(
            'span',
            { className: 'catalog-tile-pf-icon ' + iconClass },
            icon
          ),
          this.renderBadges(badges)
        ),
        _react2.default.createElement(
          'div',
          { className: 'catalog-tile-pf-body' },
          _react2.default.createElement(
            'div',
            { className: 'catalog-tile-pf-title' },
            title
          ),
          _react2.default.createElement(
            'div',
            { className: 'catalog-tile-pf-subtitle' },
            vendor
          ),
          _react2.default.createElement(
            'div',
            { className: 'catalog-tile-pf-description', ref: this.handleDescriptionRef, style: heightStyle },
            _react2.default.createElement(
              'span',
              { ref: this.handleDescriptionSpanRef },
              truncateDescription(description, maxDescriptionLength, id)
            )
          )
        ),
        footer && _react2.default.createElement(
          'div',
          { className: 'catalog-tile-pf-footer' },
          footer
        )
      );
    }
  }]);

  return CatalogTile;
}(_react2.default.Component);

CatalogTile.propTypes = {
  /** Id */
  id: _propTypes2.default.any,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Flag if the tile is 'featured' */
  featured: _propTypes2.default.bool,
  /** href for the tile if used as a link */
  href: _propTypes2.default.string,
  /** Callback for a click on the tile */
  onClick: _propTypes2.default.func,
  /** URL of an image for the item's icon */
  iconImg: _propTypes2.default.string,
  /** Alternate text for the item's icon */
  iconAlt: _propTypes2.default.string,
  /** Class for the image when an icon is to be used (exclusive from iconImg) */
  iconClass: _propTypes2.default.string,
  /** Alternatively provided JSX for the icon */
  icon: _propTypes2.default.node,
  /** Array of badges */
  badges: _propTypes2.default.arrayOf(_propTypes2.default.node),
  /** Tile for the catalog item */
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]).isRequired,
  /** Vendor for the catalog item */
  vendor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  /** Description of the catalog item */
  description: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  /** Max description length before applying truncation (when description is a string), -1 for auto truncate to last visible line */
  maxDescriptionLength: _propTypes2.default.number,
  /** Truncation function(description, max, id) used to truncate description when necessary (defaults to using ellipses) */
  truncateDescriptionFn: _propTypes2.default.func,
  /** Footer for the tile */
  footer: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node])
};

CatalogTile.defaultProps = {
  id: null,
  className: '',
  featured: false,
  href: null,
  onClick: null,
  iconImg: null,
  iconAlt: '',
  iconClass: '',
  icon: null,
  badges: [],
  vendor: null,
  description: null,
  maxDescriptionLength: -1,
  truncateDescriptionFn: null,
  footer: null
};

CatalogTile.displayName = 'CatalogTile';

CatalogTile.Badge = _CatalogTileBadge2.default;

exports.default = CatalogTile;