'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../../../index');

var _reactEllipsisWithTooltip = require('react-ellipsis-with-tooltip');

var _reactEllipsisWithTooltip2 = _interopRequireDefault(_reactEllipsisWithTooltip);

var _BreadcrumbSearchInput = require('./BreadcrumbSearchInput');

var _BreadcrumbSearchInput2 = _interopRequireDefault(_BreadcrumbSearchInput);

var _helpers = require('../../../common/helpers');

var _BreadcrumbSwitcherHelper = require('../BreadcrumbSwitcherHelper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BreadcrumbSwitcherPopover = function BreadcrumbSwitcherPopover(_ref) {
  var resources = _ref.resources,
      onResourceClick = _ref.onResourceClick,
      onNextPageClick = _ref.onNextPageClick,
      onPrevPageClick = _ref.onPrevPageClick,
      loading = _ref.loading,
      isPaginated = _ref.isPaginated,
      hasError = _ref.hasError,
      currentPage = _ref.currentPage,
      totalPages = _ref.totalPages,
      onSearchChange = _ref.onSearchChange,
      onSearchClear = _ref.onSearchClear,
      searchValue = _ref.searchValue,
      searchDebounceTimeout = _ref.searchDebounceTimeout,
      resourceLoadError = _ref.resourceLoadError,
      props = _objectWithoutProperties(_ref, ['resources', 'onResourceClick', 'onNextPageClick', 'onPrevPageClick', 'loading', 'isPaginated', 'hasError', 'currentPage', 'totalPages', 'onSearchChange', 'onSearchClear', 'searchValue', 'searchDebounceTimeout', 'resourceLoadError']);

  var popoverBody = void 0;

  if (loading) {
    popoverBody = _react2.default.createElement(
      'div',
      { className: 'breadcrumb-switcher-popover-loading text-center' },
      _react2.default.createElement(_index.Spinner, { loading: true, size: 'md' })
    );
  } else if (hasError) {
    popoverBody = _react2.default.createElement(
      'div',
      { className: 'breadcrumb-switcher-popover-error' },
      resourceLoadError
    );
  } else {
    var createItemProps = function createItemProps(item) {
      var id = item.id,
          href = item.href,
          name = item.name;

      var key = id + '-' + name;
      var hrefWithName = href ? (0, _BreadcrumbSwitcherHelper.removeLastSlashFromPath)(href.replace(id, name)) : href;

      var itemProps = {
        key: key,
        id: key,
        className: 'no-border',
        active: href === window.location.pathname || (0, _BreadcrumbSwitcherHelper.getCurrentPath)() === hrefWithName
      };

      if (itemProps.active) {
        return _extends({}, itemProps, { disabled: true });
      }

      return _extends({}, itemProps, { onClick: function onClick(e) {
          return onResourceClick(e, href, id);
        }, href: href });
    };
    popoverBody = _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(
        _index.ListGroup,
        { className: 'scrollable-list' },
        resources.map(function (resource) {
          return _react2.default.createElement(
            _index.ListGroupItem,
            createItemProps(resource),
            _react2.default.createElement(
              _reactEllipsisWithTooltip2.default,
              null,
              searchValue && searchValue.length ? _react2.default.createElement(
                _index.TypeAheadSelect.Highlighter,
                { search: searchValue },
                resource.name
              ) : resource.name
            )
          );
        })
      ),
      isPaginated && _react2.default.createElement(_index.Pager, {
        className: 'pager-sm',
        messages: { nextPage: '', previousPage: '' },
        onNextPage: onNextPageClick,
        onPreviousPage: onPrevPageClick,
        disablePrevious: currentPage === 1,
        disableNext: totalPages === 0 || currentPage === Math.ceil(totalPages)
      })
    );
  }

  return _react2.default.createElement(
    _index.Popover,
    _extends({ className: 'breadcrumb-switcher-popover' }, props),
    _react2.default.createElement(_BreadcrumbSearchInput2.default, {
      onClear: onSearchClear,
      timeout: searchDebounceTimeout,
      focus: true,
      onSearchChange: onSearchChange,
      searchValue: searchValue
    }),
    popoverBody
  );
};

BreadcrumbSwitcherPopover.propTypes = _extends({}, _index.Popover.propTypes, {
  searchValue: _propTypes2.default.string,
  loading: _propTypes2.default.bool,
  hasError: _propTypes2.default.bool,
  currentPage: _propTypes2.default.number,
  totalPages: _propTypes2.default.number,
  resources: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    name: _propTypes2.default.string.isRequired,
    href: _propTypes2.default.string,
    onClick: _propTypes2.default.func
  })),
  onSearchChange: _propTypes2.default.func,
  onResourceClick: _propTypes2.default.func,
  isPaginated: _propTypes2.default.bool.isRequired
});

BreadcrumbSwitcherPopover.defaultProps = {
  searchValue: '',
  loading: false,
  hasError: false,
  currentPage: 1,
  totalPages: 1,
  resources: [],
  onResourceClick: _helpers.noop,
  onSearchChange: _helpers.noop
};

exports.default = BreadcrumbSwitcherPopover;