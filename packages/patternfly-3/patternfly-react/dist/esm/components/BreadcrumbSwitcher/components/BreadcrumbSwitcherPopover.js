var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Popover, ListGroup, ListGroupItem, Pager, Spinner, TypeAheadSelect } from '../../../index';
import EllipsisWithTooltip from 'react-ellipsis-with-tooltip';
import BreadcrumbSearchInput from './BreadcrumbSearchInput';
import { noop } from '../../../common/helpers';
import { removeLastSlashFromPath, getCurrentPath } from '../BreadcrumbSwitcherHelper';

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
    popoverBody = React.createElement(
      'div',
      { className: 'breadcrumb-switcher-popover-loading text-center' },
      React.createElement(Spinner, { loading: true, size: 'md' })
    );
  } else if (hasError) {
    popoverBody = React.createElement(
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
      var hrefWithName = href ? removeLastSlashFromPath(href.replace(id, name)) : href;

      var itemProps = {
        key: key,
        id: key,
        className: 'no-border',
        active: href === window.location.pathname || getCurrentPath() === hrefWithName
      };

      if (itemProps.active) {
        return _extends({}, itemProps, { disabled: true });
      }

      return _extends({}, itemProps, { onClick: function onClick(e) {
          return onResourceClick(e, href, id);
        }, href: href });
    };
    popoverBody = React.createElement(
      React.Fragment,
      null,
      React.createElement(
        ListGroup,
        { className: 'scrollable-list' },
        resources.map(function (resource) {
          return React.createElement(
            ListGroupItem,
            createItemProps(resource),
            React.createElement(
              EllipsisWithTooltip,
              null,
              searchValue && searchValue.length ? React.createElement(
                TypeAheadSelect.Highlighter,
                { search: searchValue },
                resource.name
              ) : resource.name
            )
          );
        })
      ),
      isPaginated && React.createElement(Pager, {
        className: 'pager-sm',
        messages: { nextPage: '', previousPage: '' },
        onNextPage: onNextPageClick,
        onPreviousPage: onPrevPageClick,
        disablePrevious: currentPage === 1,
        disableNext: totalPages === 0 || currentPage === Math.ceil(totalPages)
      })
    );
  }

  return React.createElement(
    Popover,
    _extends({ className: 'breadcrumb-switcher-popover' }, props),
    React.createElement(BreadcrumbSearchInput, {
      onClear: onSearchClear,
      timeout: searchDebounceTimeout,
      focus: true,
      onSearchChange: onSearchChange,
      searchValue: searchValue
    }),
    popoverBody
  );
};

BreadcrumbSwitcherPopover.propTypes = _extends({}, Popover.propTypes, {
  searchValue: PropTypes.string,
  loading: PropTypes.bool,
  hasError: PropTypes.bool,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  resources: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func
  })),
  onSearchChange: PropTypes.func,
  onResourceClick: PropTypes.func,
  isPaginated: PropTypes.bool.isRequired
});

BreadcrumbSwitcherPopover.defaultProps = {
  searchValue: '',
  loading: false,
  hasError: false,
  currentPage: 1,
  totalPages: 1,
  resources: [],
  onResourceClick: noop,
  onSearchChange: noop
};

export default BreadcrumbSwitcherPopover;