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

var _Button = require('patternfly-react/dist/js/components/Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _cssElementQueries = require('css-element-queries');

var _breakjs = require('breakjs');

var _breakjs2 = _interopRequireDefault(_breakjs);

var _helpers = require('../../common/helpers');

var _CatalogTile = require('../CatalogTile/CatalogTile');

var _CatalogTile2 = _interopRequireDefault(_CatalogTile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var layout = window && typeof window.matchMedia === 'function' ? (0, _breakjs2.default)({ mobile: 480, small: 768, medium: 992, large: 1200 }) : { atMost: function atMost() {
    return false;
  } };

var CatalogTileViewCategory = function (_React$Component) {
  _inherits(CatalogTileViewCategory, _React$Component);

  function CatalogTileViewCategory(props) {
    _classCallCheck(this, CatalogTileViewCategory);

    var _this = _possibleConstructorReturn(this, (CatalogTileViewCategory.__proto__ || Object.getPrototypeOf(CatalogTileViewCategory)).call(this, props));

    _this.computeNumShown = function () {
      if (!_this._isMounted) {
        return;
      }

      if (_this.categoryContainer && layout) {
        var rows = 1;

        if (layout.atMost('mobile')) {
          rows = 3;
        } else if (layout.atMost('small')) {
          rows = 2;
        }

        var numShown = Math.floor(_this.categoryContainer.clientWidth / 235) * rows;
        var rightSpacerWidth = _this.categoryContainer.clientWidth % 235;
        _this.setState({ numShown: numShown, rightSpacerWidth: rightSpacerWidth });
      }
    };

    _this.handleRef = function (ref) {
      if (!ref) {
        return;
      }
      _this.categoryContainer = ref;
    };

    _this._resizeSensors = [];
    _this.state = {
      numShown: 0,
      rightSpacerWidth: 0
    };
    return _this;
  }

  _createClass(CatalogTileViewCategory, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMounted = true;

      // Watch for resizes and recompute the number shown when it does
      this.computeNumShown();
      this._resizeSensors.push(new _cssElementQueries.ResizeSensor([this.categoryContainer], _helpers.helpers.debounce(this.computeNumShown, 100)));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
      this._resizeSensors.forEach(function (sensor) {
        sensor.detach();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          title = _props.title,
          totalItems = _props.totalItems,
          viewAllText = _props.viewAllText,
          viewAll = _props.viewAll,
          onViewAll = _props.onViewAll,
          props = _objectWithoutProperties(_props, ['children', 'className', 'title', 'totalItems', 'viewAllText', 'viewAll', 'onViewAll']);

      var _state = this.state,
          numShown = _state.numShown,
          rightSpacerWidth = _state.rightSpacerWidth;

      var classes = (0, _classnames2.default)('catalog-tile-view-pf-category', className);

      var tileValidator = function tileValidator(child) {
        return _helpers.helpers.hasDisplayName(child, _CatalogTile2.default.displayName);
      };
      var filterCatalogTiles = function filterCatalogTiles(childrenArray) {
        return childrenArray && childrenArray.filter(function (child) {
          return tileValidator(child) || child.props && filterCatalogTiles(_helpers.helpers.childrenToArray(child.props.children), tileValidator);
        });
      };

      var allChildren = _helpers.helpers.childrenToArray(children);

      /* Find the children that are tiles (or are wrapped tiles) and those that are not */
      var catalogTiles = filterCatalogTiles(allChildren);
      var nonTiles = allChildren.filter(function (child) {
        return !catalogTiles.includes(child);
      });

      // Only show the tiles that fit in a single row, unless viewAll is specified
      if (!viewAll && numShown && numShown < totalItems) {
        catalogTiles = catalogTiles.slice(0, numShown);
      }

      return _react2.default.createElement(
        'div',
        _extends({ className: classes }, props, { ref: this.handleRef }),
        _react2.default.createElement(
          'div',
          { className: 'catalog-tile-view-pf-category-header' },
          _react2.default.createElement(
            'span',
            { className: 'catalog-tile-view-pf-category-header-title' },
            title
          ),
          !viewAll && numShown < totalItems && _react2.default.createElement(
            'span',
            { className: 'pull-right' },
            _react2.default.createElement(
              _Button2.default,
              {
                bsStyle: 'link',
                className: 'catalog-tile-view-pf-category-view-all pull-right',
                style: { marginRight: rightSpacerWidth },
                onClick: onViewAll
              },
              viewAllText + ' (' + totalItems + ')'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'catalog-tile-view-pf-category-body' },
          catalogTiles,
          nonTiles
        )
      );
    }
  }]);

  return CatalogTileViewCategory;
}(_react2.default.Component);

CatalogTileViewCategory.propTypes = {
  /** CatalogTile items */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Tile for the category */
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  /** Total number of items in this category */
  totalItems: _propTypes2.default.number,
  /** Text to show for the view all toggle when viewAll is false */
  viewAllText: _propTypes2.default.string,
  /** Flag to show all tiles (versus only the first row) */
  viewAll: _propTypes2.default.bool,
  /** Callback when view all is clicked */
  onViewAll: _propTypes2.default.func
};

CatalogTileViewCategory.defaultProps = {
  children: null,
  className: '',
  title: null,
  totalItems: 0,
  viewAll: true,
  viewAllText: 'View All',
  onViewAll: _helpers.helpers.noop
};

exports.default = CatalogTileViewCategory;