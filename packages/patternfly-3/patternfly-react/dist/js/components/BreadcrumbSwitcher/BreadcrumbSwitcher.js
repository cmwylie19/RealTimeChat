'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Overlay = require('../Overlay');

var _helpers = require('../../common/helpers');

var _BreadcrumbSwitcherPopover = require('./components/BreadcrumbSwitcherPopover');

var _BreadcrumbSwitcherPopover2 = _interopRequireDefault(_BreadcrumbSwitcherPopover);

var _BreadcrumbSwitcherToggler = require('./components/BreadcrumbSwitcherToggler');

var _BreadcrumbSwitcherToggler2 = _interopRequireDefault(_BreadcrumbSwitcherToggler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BreadcrumbSwitcher = function (_Component) {
  _inherits(BreadcrumbSwitcher, _Component);

  function BreadcrumbSwitcher() {
    _classCallCheck(this, BreadcrumbSwitcher);

    return _possibleConstructorReturn(this, (BreadcrumbSwitcher.__proto__ || Object.getPrototypeOf(BreadcrumbSwitcher)).apply(this, arguments));
  }

  _createClass(BreadcrumbSwitcher, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          open = _props.open,
          onOpen = _props.onOpen;


      if (open === true && prevProps.open === false) {
        onOpen();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          className = _props2.className,
          open = _props2.open,
          onOpen = _props2.onOpen,
          currentPage = _props2.currentPage,
          totalPages = _props2.totalPages,
          isLoading = _props2.isLoading,
          isPaginated = _props2.isPaginated,
          hasError = _props2.hasError,
          resources = _props2.resources,
          onTogglerClick = _props2.onTogglerClick,
          onHide = _props2.onHide,
          onNextPageClick = _props2.onNextPageClick,
          onPrevPageClick = _props2.onPrevPageClick,
          onSearchChange = _props2.onSearchChange,
          searchValue = _props2.searchValue,
          onSearchClear = _props2.onSearchClear,
          searchDebounceTimeout = _props2.searchDebounceTimeout,
          onResourceClick = _props2.onResourceClick,
          props = _objectWithoutProperties(_props2, ['className', 'open', 'onOpen', 'currentPage', 'totalPages', 'isLoading', 'isPaginated', 'hasError', 'resources', 'onTogglerClick', 'onHide', 'onNextPageClick', 'onPrevPageClick', 'onSearchChange', 'searchValue', 'onSearchClear', 'searchDebounceTimeout', 'onResourceClick']);

      var classes = (0, _classnames2.default)('breadcrumb-switcher', className);

      return _react2.default.createElement(
        'div',
        _extends({ className: classes }, props),
        _react2.default.createElement(_BreadcrumbSwitcherToggler2.default, {
          id: 'switcher',
          onClick: function onClick() {
            return onTogglerClick();
          },
          ref: function ref(_ref) {
            _this2.togglerRef = _ref;
          }
        }),
        _react2.default.createElement(
          _Overlay.Overlay,
          {
            rootClose: true,
            show: open,
            container: this,
            placement: 'bottom',
            onHide: onHide
            // TODO: try to remove the `ReactDOM.findDOMNode`
            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
            // react-bootstrap still have it in their docs: https://react-bootstrap.github.io/components/overlays/
            // eslint-disable-next-line react/no-find-dom-node
            , target: function target() {
              return _reactDom2.default.findDOMNode(_this2.togglerRef);
            }
          },
          _react2.default.createElement(_BreadcrumbSwitcherPopover2.default, {
            id: 'breadcrumb-switcher-popover',
            loading: isLoading,
            isPaginated: isPaginated,
            hasError: hasError,
            onSearchChange: onSearchChange,
            resources: resources,
            onNextPageClick: onNextPageClick,
            onPrevPageClick: onPrevPageClick,
            currentPage: currentPage,
            totalPages: totalPages,
            searchValue: searchValue,
            onSearchClear: onSearchClear,
            searchDebounceTimeout: searchDebounceTimeout,
            onResourceClick: onResourceClick
          })
        )
      );
    }
  }]);

  return BreadcrumbSwitcher;
}(_react.Component);

BreadcrumbSwitcher.propTypes = {
  /** className */
  className: _propTypes2.default.string,
  /** search box value */
  searchValue: _propTypes2.default.string,
  /** is switcher open bool */
  open: _propTypes2.default.bool,
  /** searchDebounceTimeout */
  searchDebounceTimeout: _propTypes2.default.number,
  /** current Page */
  currentPage: _propTypes2.default.number,
  /** total Pages */
  totalPages: _propTypes2.default.number,
  /** is Loadnig bool */
  isLoading: _propTypes2.default.bool,
  /** is Paginated bool */
  isPaginated: _propTypes2.default.bool,
  /** has Error bool */
  hasError: _propTypes2.default.bool,
  /** Breadcrumb resources */
  resources: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    name: _propTypes2.default.string.isRequired,
    href: _propTypes2.default.string,
    onClick: _propTypes2.default.func
  })),
  /** function() onTogglerClick func */
  onTogglerClick: _propTypes2.default.func,
  /** function() onHide func */
  onHide: _propTypes2.default.func,
  /** function() onOpen func */
  onOpen: _propTypes2.default.func,
  /** function() onPrevPageClick func */
  onPrevPageClick: _propTypes2.default.func,
  /** function() onNextPageClick func */
  onNextPageClick: _propTypes2.default.func,
  /** function(resource) onResourceClick func */
  onResourceClick: _propTypes2.default.func,
  /** function(newSearch) onSearchChange func */
  onSearchChange: _propTypes2.default.func,
  /** function() onSearchClear func */
  onSearchClear: _propTypes2.default.func
};

BreadcrumbSwitcher.defaultProps = {
  className: '',
  searchValue: '',
  open: false,
  searchDebounceTimeout: 300,
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
  isPaginated: true,
  hasError: false,
  resources: [],
  onTogglerClick: _helpers.noop,
  onHide: _helpers.noop,
  onOpen: _helpers.noop,
  onResourceClick: _helpers.noop,
  onPrevPageClick: _helpers.noop,
  onNextPageClick: _helpers.noop,
  onSearchChange: _helpers.noop,
  onSearchClear: _helpers.noop
};

exports.default = BreadcrumbSwitcher;