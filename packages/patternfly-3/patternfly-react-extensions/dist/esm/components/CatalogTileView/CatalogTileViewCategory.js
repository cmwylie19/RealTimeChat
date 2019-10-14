var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'patternfly-react/dist/esm/components/Button/Button';

import { ResizeSensor } from 'css-element-queries';
import Break from 'breakjs';
import { helpers } from '../../common/helpers';
import CatalogTile from '../CatalogTile/CatalogTile';

var layout = window && typeof window.matchMedia === 'function' ? Break({ mobile: 480, small: 768, medium: 992, large: 1200 }) : { atMost: function atMost() {
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
      this._resizeSensors.push(new ResizeSensor([this.categoryContainer], helpers.debounce(this.computeNumShown, 100)));
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

      var classes = classNames('catalog-tile-view-pf-category', className);

      var tileValidator = function tileValidator(child) {
        return helpers.hasDisplayName(child, CatalogTile.displayName);
      };
      var filterCatalogTiles = function filterCatalogTiles(childrenArray) {
        return childrenArray && childrenArray.filter(function (child) {
          return tileValidator(child) || child.props && filterCatalogTiles(helpers.childrenToArray(child.props.children), tileValidator);
        });
      };

      var allChildren = helpers.childrenToArray(children);

      /* Find the children that are tiles (or are wrapped tiles) and those that are not */
      var catalogTiles = filterCatalogTiles(allChildren);
      var nonTiles = allChildren.filter(function (child) {
        return !catalogTiles.includes(child);
      });

      // Only show the tiles that fit in a single row, unless viewAll is specified
      if (!viewAll && numShown && numShown < totalItems) {
        catalogTiles = catalogTiles.slice(0, numShown);
      }

      return React.createElement(
        'div',
        _extends({ className: classes }, props, { ref: this.handleRef }),
        React.createElement(
          'div',
          { className: 'catalog-tile-view-pf-category-header' },
          React.createElement(
            'span',
            { className: 'catalog-tile-view-pf-category-header-title' },
            title
          ),
          !viewAll && numShown < totalItems && React.createElement(
            'span',
            { className: 'pull-right' },
            React.createElement(
              Button,
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
        React.createElement(
          'div',
          { className: 'catalog-tile-view-pf-category-body' },
          catalogTiles,
          nonTiles
        )
      );
    }
  }]);

  return CatalogTileViewCategory;
}(React.Component);

CatalogTileViewCategory.propTypes = {
  /** CatalogTile items */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Tile for the category */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Total number of items in this category */
  totalItems: PropTypes.number,
  /** Text to show for the view all toggle when viewAll is false */
  viewAllText: PropTypes.string,
  /** Flag to show all tiles (versus only the first row) */
  viewAll: PropTypes.bool,
  /** Callback when view all is clicked */
  onViewAll: PropTypes.func
};

CatalogTileViewCategory.defaultProps = {
  children: null,
  className: '',
  title: null,
  totalItems: 0,
  viewAll: true,
  viewAllText: 'View All',
  onViewAll: helpers.noop
};

export default CatalogTileViewCategory;