import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { DropdownDirection } from '../Dropdown';
import { ToggleTemplate } from './ToggleTemplate';
import styles from '@patternfly/react-styles/css/components/Pagination/pagination';
import { css } from '@patternfly/react-styles';
import { Navigation } from './Navigation';
import { PaginationOptionsMenu } from './PaginationOptionsMenu';
import { withOuiaContext } from '../withOuia';
export let PaginationVariant;

(function (PaginationVariant) {
  PaginationVariant["top"] = "top";
  PaginationVariant["bottom"] = "bottom";
  PaginationVariant["left"] = "left";
  PaginationVariant["right"] = "right";
})(PaginationVariant || (PaginationVariant = {}));

const defaultPerPageOptions = [{
  title: '10',
  value: 10
}, {
  title: '20',
  value: 20
}, {
  title: '50',
  value: 50
}, {
  title: '100',
  value: 100
}];

const Pagination = (_ref) => {
  let {
    children = null,
    className = '',
    variant = PaginationVariant.top,
    isDisabled = false,
    isCompact = false,
    perPage = defaultPerPageOptions[0].value,
    titles = {
      items: '',
      page: '',
      itemsPerPage: 'Items per page',
      perPageSuffix: 'per page',
      toFirstPage: 'Go to first page',
      toPreviousPage: 'Go to previous page',
      toLastPage: 'Go to last page',
      toNextPage: 'Go to next page',
      optionsToggle: 'Items per page',
      currPage: 'Current page',
      paginationTitle: 'Pagination'
    },
    firstPage = 1,
    page = 1,
    itemCount,
    itemsStart = null,
    itemsEnd = null,
    perPageOptions = defaultPerPageOptions,
    dropDirection = DropdownDirection.down,
    widgetId = 'pagination-options-menu',
    toggleTemplate = ToggleTemplate,
    onSetPage = () => undefined,
    onPerPageSelect = () => undefined,
    onFirstClick = () => undefined,
    onPreviousClick = () => undefined,
    onNextClick = () => undefined,
    onPageInput = () => undefined,
    onLastClick = () => undefined,
    ouiaContext = null,
    ouiaId = null
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "variant", "isDisabled", "isCompact", "perPage", "titles", "firstPage", "page", "itemCount", "itemsStart", "itemsEnd", "perPageOptions", "dropDirection", "widgetId", "toggleTemplate", "onSetPage", "onPerPageSelect", "onFirstClick", "onPreviousClick", "onNextClick", "onPageInput", "onLastClick", "ouiaContext", "ouiaId"]);

  const lastPage = Math.ceil(itemCount / perPage);

  if (page < firstPage) {
    page = firstPage;
  } else if (page > lastPage) {
    page = lastPage;
  }

  const firstIndex = itemCount <= 0 ? 0 : (page - 1) * perPage + 1;
  let lastIndex;

  if (itemCount <= 0) {
    lastIndex = 0;
  } else {
    lastIndex = page === lastPage ? itemCount : page * perPage;
  }

  return React.createElement("div", _extends({
    className: css(styles.pagination, variant === PaginationVariant.bottom && styles.modifiers.footer, isCompact && styles.modifiers.compact, className),
    id: widgetId
  }, ouiaContext.isOuia && {
    'data-ouia-component-type': 'Pagination',
    'data-ouia-component-id': ouiaId || ouiaContext.ouiaId
  }, props), variant === PaginationVariant.top && React.createElement("div", {
    className: css(styles.paginationTotalItems)
  }, React.createElement(ToggleTemplate, {
    firstIndex: firstIndex,
    lastIndex: lastIndex,
    itemCount: itemCount,
    itemsTitle: titles.items
  })), React.createElement(PaginationOptionsMenu, {
    itemsPerPageTitle: titles.itemsPerPage,
    perPageSuffix: titles.perPageSuffix,
    itemsTitle: isCompact ? '' : titles.items,
    optionsToggle: titles.optionsToggle,
    perPageOptions: perPageOptions,
    firstIndex: itemsStart !== null ? itemsStart : firstIndex,
    lastIndex: itemsEnd !== null ? itemsEnd : lastIndex,
    itemCount: itemCount,
    perPage: perPage,
    onPerPageSelect: onPerPageSelect,
    dropDirection: dropDirection,
    widgetId: widgetId,
    toggleTemplate: toggleTemplate,
    isDisabled: isDisabled
  }), React.createElement(Navigation, {
    pagesTitle: titles.page,
    toLastPage: titles.toLastPage,
    toPreviousPage: titles.toPreviousPage,
    toNextPage: titles.toNextPage,
    toFirstPage: titles.toFirstPage,
    currPage: titles.currPage,
    paginationTitle: titles.paginationTitle,
    page: itemCount <= 0 ? 0 : page,
    firstPage: itemsStart !== null ? itemsStart : firstIndex,
    lastPage: lastPage,
    onSetPage: onSetPage,
    onFirstClick: onFirstClick,
    onPreviousClick: onPreviousClick,
    onNextClick: onNextClick,
    onLastClick: onLastClick,
    onPageInput: onPageInput,
    isDisabled: isDisabled,
    isCompact: isCompact
  }), children);
};

Pagination.propTypes = {
  children: _pt.node,
  className: _pt.string,
  itemCount: _pt.number.isRequired,
  variant: _pt.oneOf(['top', 'bottom', 'left', 'right']),
  isDisabled: _pt.bool,
  isCompact: _pt.bool,
  perPage: _pt.number,
  perPageOptions: _pt.arrayOf(_pt.shape({
    title: _pt.string,
    value: _pt.number
  })),
  firstPage: _pt.number,
  page: _pt.number,
  itemsStart: _pt.number,
  itemsEnd: _pt.number,
  widgetId: _pt.string,
  dropDirection: _pt.oneOf(['up', 'down']),
  titles: _pt.shape({
    page: _pt.string,
    items: _pt.string,
    itemsPerPage: _pt.string,
    perPageSuffix: _pt.string,
    toFirstPage: _pt.string,
    toPreviousPage: _pt.string,
    toLastPage: _pt.string,
    toNextPage: _pt.string,
    optionsToggle: _pt.string,
    currPage: _pt.string,
    paginationTitle: _pt.string
  }),
  toggleTemplate: _pt.oneOfType([_pt.func, _pt.string]),
  onSetPage: _pt.func,
  onFirstClick: _pt.func,
  onPreviousClick: _pt.func,
  onNextClick: _pt.func,
  onLastClick: _pt.func,
  onPageInput: _pt.func,
  onPerPageSelect: _pt.func
};
const PaginationWithOuiaContext = withOuiaContext(Pagination);
export { PaginationWithOuiaContext as Pagination };
//# sourceMappingURL=Pagination.js.map