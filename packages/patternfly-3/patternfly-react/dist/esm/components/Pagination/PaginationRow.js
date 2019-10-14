import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PaginationRowAmountOfPages from './PaginationRowAmountOfPages';
import PaginationRowButtonGroup from './PaginationRowButtonGroup';
import PaginationRowItems from './PaginationRowItems';
import PaginationRowBack from './PaginationRowBack';
import PaginationRowForward from './PaginationRowForward';
import { noop } from '../../common/helpers';
import { PAGINATION_VIEW_TYPES, PAGINATION_VIEW } from './PaginationConstants';
import { Form, FormControl, FormGroup, ControlLabel } from '../Form';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';
import PaginationRowArrowIcon from './PaginationRowArrowIcon';

/**
 * PaginationRow component for Patternfly React
 */
var PaginationRow = function PaginationRow(_ref) {
  var baseClassName = _ref.baseClassName,
      className = _ref.className,
      viewType = _ref.viewType,
      pagination = _ref.pagination,
      pageSizeDropUp = _ref.pageSizeDropUp,
      pageInputValue = _ref.pageInputValue,
      amountOfPages = _ref.amountOfPages,
      itemCount = _ref.itemCount,
      itemsStart = _ref.itemsStart,
      itemsEnd = _ref.itemsEnd,
      messages = _ref.messages,
      dropdownButtonId = _ref.dropdownButtonId,
      _onSubmit = _ref.onSubmit,
      onPerPageSelect = _ref.onPerPageSelect,
      onFirstPage = _ref.onFirstPage,
      onPreviousPage = _ref.onPreviousPage,
      onPageInput = _ref.onPageInput,
      onNextPage = _ref.onNextPage,
      onLastPage = _ref.onLastPage,
      disableNext = _ref.disableNext,
      disablePrev = _ref.disablePrev;
  var page = pagination.page,
      perPage = pagination.perPage,
      _pagination$perPageOp = pagination.perPageOptions,
      perPageOptions = _pagination$perPageOp === undefined ? [] : _pagination$perPageOp;

  var classes = classNames(baseClassName, className, {
    'list-view-pf-pagination': viewType === PAGINATION_VIEW.LIST,
    'card-view-pf-pagination': viewType === PAGINATION_VIEW.CARD,
    'table-view-pf-pagination': viewType === PAGINATION_VIEW.TABLE,
    clearfix: true
  });
  var pageValue = pageInputValue !== undefined ? pageInputValue : page;
  return React.createElement(
    Form,
    {
      className: classes,
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        _onSubmit(e);
      }
    },
    React.createElement(
      FormGroup,
      null,
      React.createElement(
        DropdownButton,
        {
          title: perPage,
          dropup: pageSizeDropUp,
          componentClass: PaginationRowButtonGroup,
          onSelect: onPerPageSelect,
          id: dropdownButtonId
        },
        perPageOptions.map(function (option, i) {
          return React.createElement(
            MenuItem,
            { eventKey: option, active: option === perPage, key: i },
            option
          );
        })
      ),
      React.createElement(
        'span',
        null,
        messages.perPage
      )
    ),
    React.createElement(
      FormGroup,
      null,
      React.createElement(PaginationRowItems, {
        itemCount: itemCount,
        itemsStart: itemsStart,
        itemsEnd: itemsEnd,
        messagesOf: messages.of
      }),
      React.createElement(PaginationRowBack, {
        page: page,
        messagesFirstPage: messages.firstPage,
        messagesPreviousPage: messages.previousPage,
        onFirstPage: onFirstPage,
        onPreviousPage: onPreviousPage,
        disable: disablePrev
      }),
      React.createElement(
        ControlLabel,
        { className: 'sr-only' },
        messages.currentPage
      ),
      React.createElement(FormControl, { className: 'pagination-pf-page', type: 'text', value: pageValue, onChange: onPageInput }),
      React.createElement(PaginationRowAmountOfPages, { messagesOf: messages.of, amountOfPages: amountOfPages }),
      React.createElement(PaginationRowForward, {
        page: page,
        amountOfPages: amountOfPages,
        messagesNextPage: messages.nextPage,
        messagesLastPage: messages.lastPage,
        onNextPage: onNextPage,
        onLastPage: onLastPage,
        disable: disableNext
      })
    )
  );
};
PaginationRow.propTypes = {
  /** Base css class */
  baseClassName: PropTypes.string,
  /** Additional css classes */
  className: PropTypes.string,
  /** pagination row view type */
  viewType: PropTypes.oneOf(PAGINATION_VIEW_TYPES).isRequired,
  /** user pagination settings */
  pagination: PropTypes.shape({
    /** the current page */
    page: PropTypes.number.isRequired,
    /** the current per page setting */
    perPage: PropTypes.number.isRequired,
    /** per page options */
    perPageOptions: PropTypes.array
  }).isRequired,
  /** Page size button drops up */
  pageSizeDropUp: PropTypes.bool,
  /** page input (optional override for page input) */
  pageInputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** calculated amount of pages */
  amountOfPages: PropTypes.number.isRequired,
  /** calculated number of rows */
  itemCount: PropTypes.number.isRequired,
  /** calculated items start */
  itemsStart: PropTypes.number.isRequired,
  /** calculated items end */
  itemsEnd: PropTypes.number.isRequired,
  /** message text inputs for i18n */
  messages: PropTypes.shape({
    firstPage: PropTypes.string,
    previousPage: PropTypes.string,
    nextPage: PropTypes.string,
    lastPage: PropTypes.string,
    perPage: PropTypes.string,
    of: PropTypes.string
  }),
  /** dropdown button id */
  dropdownButtonId: PropTypes.string,
  /** onSubmit callback */
  onSubmit: PropTypes.func,
  /** per page selection callback */
  onPerPageSelect: PropTypes.func,
  /** first page callback */
  onFirstPage: PropTypes.func,
  /** previous page selection callback */
  onPreviousPage: PropTypes.func,
  /** user page input callback */
  onPageInput: PropTypes.func,
  /** next page callback */
  onNextPage: PropTypes.func,
  /** last page callback */
  onLastPage: PropTypes.func,
  /** disable next page */
  disableNext: PropTypes.bool,
  /** disable previous page */
  disablePrev: PropTypes.bool
};
PaginationRow.defaultProps = {
  baseClassName: 'content-view-pf-pagination',
  className: '',
  messages: {
    firstPage: 'First Page',
    previousPage: 'Previous Page',
    currentPage: 'Current Page',
    nextPage: 'Next Page',
    lastPage: 'Last Page',
    perPage: 'per page',
    of: 'of'
  },
  pageInputValue: '',
  pageSizeDropUp: true,
  onSubmit: noop,
  onPerPageSelect: noop,
  onFirstPage: noop,
  onPreviousPage: noop,
  onPageInput: noop,
  onNextPage: noop,
  onLastPage: noop,
  dropdownButtonId: 'pagination-row-dropdown',
  disableNext: false,
  disablePrev: false
};

PaginationRow.AmountOfPages = PaginationRowAmountOfPages;
PaginationRow.ArrowIcon = PaginationRowArrowIcon;
PaginationRow.Back = PaginationRowBack;
PaginationRow.ButtonGroup = PaginationRowButtonGroup;
PaginationRow.Forward = PaginationRowForward;
PaginationRow.Items = PaginationRowItems;
PaginationRow.PAGINATION_VIEW = PAGINATION_VIEW;
PaginationRow.PAGINATION_VIEW_TYPES = PAGINATION_VIEW_TYPES;

export default PaginationRow;