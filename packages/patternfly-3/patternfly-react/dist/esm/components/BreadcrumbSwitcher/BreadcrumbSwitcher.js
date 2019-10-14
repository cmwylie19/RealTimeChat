var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Overlay } from '../Overlay';

import { noop } from '../../common/helpers';

import BreadcrumbSwitcherPopover from './components/BreadcrumbSwitcherPopover';
import BreadcrumbSwitcherToggler from './components/BreadcrumbSwitcherToggler';

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

      var classes = classNames('breadcrumb-switcher', className);

      return React.createElement(
        'div',
        _extends({ className: classes }, props),
        React.createElement(BreadcrumbSwitcherToggler, {
          id: 'switcher',
          onClick: function onClick() {
            return onTogglerClick();
          },
          ref: function ref(_ref) {
            _this2.togglerRef = _ref;
          }
        }),
        React.createElement(
          Overlay,
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
              return ReactDOM.findDOMNode(_this2.togglerRef);
            }
          },
          React.createElement(BreadcrumbSwitcherPopover, {
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
}(Component);

BreadcrumbSwitcher.propTypes = {
  /** className */
  className: PropTypes.string,
  /** search box value */
  searchValue: PropTypes.string,
  /** is switcher open bool */
  open: PropTypes.bool,
  /** searchDebounceTimeout */
  searchDebounceTimeout: PropTypes.number,
  /** current Page */
  currentPage: PropTypes.number,
  /** total Pages */
  totalPages: PropTypes.number,
  /** is Loadnig bool */
  isLoading: PropTypes.bool,
  /** is Paginated bool */
  isPaginated: PropTypes.bool,
  /** has Error bool */
  hasError: PropTypes.bool,
  /** Breadcrumb resources */
  resources: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func
  })),
  /** function() onTogglerClick func */
  onTogglerClick: PropTypes.func,
  /** function() onHide func */
  onHide: PropTypes.func,
  /** function() onOpen func */
  onOpen: PropTypes.func,
  /** function() onPrevPageClick func */
  onPrevPageClick: PropTypes.func,
  /** function() onNextPageClick func */
  onNextPageClick: PropTypes.func,
  /** function(resource) onResourceClick func */
  onResourceClick: PropTypes.func,
  /** function(newSearch) onSearchChange func */
  onSearchChange: PropTypes.func,
  /** function() onSearchClear func */
  onSearchClear: PropTypes.func
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
  onTogglerClick: noop,
  onHide: noop,
  onOpen: noop,
  onResourceClick: noop,
  onPrevPageClick: noop,
  onNextPageClick: noop,
  onSearchChange: noop,
  onSearchClear: noop
};

export default BreadcrumbSwitcher;