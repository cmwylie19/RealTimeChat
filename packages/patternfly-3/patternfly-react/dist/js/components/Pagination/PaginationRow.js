'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PaginationRowAmountOfPages = require('./PaginationRowAmountOfPages');

var _PaginationRowAmountOfPages2 = _interopRequireDefault(_PaginationRowAmountOfPages);

var _PaginationRowButtonGroup = require('./PaginationRowButtonGroup');

var _PaginationRowButtonGroup2 = _interopRequireDefault(_PaginationRowButtonGroup);

var _PaginationRowItems = require('./PaginationRowItems');

var _PaginationRowItems2 = _interopRequireDefault(_PaginationRowItems);

var _PaginationRowBack = require('./PaginationRowBack');

var _PaginationRowBack2 = _interopRequireDefault(_PaginationRowBack);

var _PaginationRowForward = require('./PaginationRowForward');

var _PaginationRowForward2 = _interopRequireDefault(_PaginationRowForward);

var _helpers = require('../../common/helpers');

var _PaginationConstants = require('./PaginationConstants');

var _Form = require('../Form');

var _Button = require('../Button');

var _MenuItem = require('../MenuItem');

var _PaginationRowArrowIcon = require('./PaginationRowArrowIcon');

var _PaginationRowArrowIcon2 = _interopRequireDefault(_PaginationRowArrowIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  var classes = (0, _classnames2.default)(baseClassName, className, {
    'list-view-pf-pagination': viewType === _PaginationConstants.PAGINATION_VIEW.LIST,
    'card-view-pf-pagination': viewType === _PaginationConstants.PAGINATION_VIEW.CARD,
    'table-view-pf-pagination': viewType === _PaginationConstants.PAGINATION_VIEW.TABLE,
    clearfix: true
  });
  var pageValue = pageInputValue !== undefined ? pageInputValue : page;
  return _react2.default.createElement(
    _Form.Form,
    {
      className: classes,
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        _onSubmit(e);
      }
    },
    _react2.default.createElement(
      _Form.FormGroup,
      null,
      _react2.default.createElement(
        _Button.DropdownButton,
        {
          title: perPage,
          dropup: pageSizeDropUp,
          componentClass: _PaginationRowButtonGroup2.default,
          onSelect: onPerPageSelect,
          id: dropdownButtonId
        },
        perPageOptions.map(function (option, i) {
          return _react2.default.createElement(
            _MenuItem.MenuItem,
            { eventKey: option, active: option === perPage, key: i },
            option
          );
        })
      ),
      _react2.default.createElement(
        'span',
        null,
        messages.perPage
      )
    ),
    _react2.default.createElement(
      _Form.FormGroup,
      null,
      _react2.default.createElement(_PaginationRowItems2.default, {
        itemCount: itemCount,
        itemsStart: itemsStart,
        itemsEnd: itemsEnd,
        messagesOf: messages.of
      }),
      _react2.default.createElement(_PaginationRowBack2.default, {
        page: page,
        messagesFirstPage: messages.firstPage,
        messagesPreviousPage: messages.previousPage,
        onFirstPage: onFirstPage,
        onPreviousPage: onPreviousPage,
        disable: disablePrev
      }),
      _react2.default.createElement(
        _Form.ControlLabel,
        { className: 'sr-only' },
        messages.currentPage
      ),
      _react2.default.createElement(_Form.FormControl, { className: 'pagination-pf-page', type: 'text', value: pageValue, onChange: onPageInput }),
      _react2.default.createElement(_PaginationRowAmountOfPages2.default, { messagesOf: messages.of, amountOfPages: amountOfPages }),
      _react2.default.createElement(_PaginationRowForward2.default, {
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
  baseClassName: _propTypes2.default.string,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** pagination row view type */
  viewType: _propTypes2.default.oneOf(_PaginationConstants.PAGINATION_VIEW_TYPES).isRequired,
  /** user pagination settings */
  pagination: _propTypes2.default.shape({
    /** the current page */
    page: _propTypes2.default.number.isRequired,
    /** the current per page setting */
    perPage: _propTypes2.default.number.isRequired,
    /** per page options */
    perPageOptions: _propTypes2.default.array
  }).isRequired,
  /** Page size button drops up */
  pageSizeDropUp: _propTypes2.default.bool,
  /** page input (optional override for page input) */
  pageInputValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /** calculated amount of pages */
  amountOfPages: _propTypes2.default.number.isRequired,
  /** calculated number of rows */
  itemCount: _propTypes2.default.number.isRequired,
  /** calculated items start */
  itemsStart: _propTypes2.default.number.isRequired,
  /** calculated items end */
  itemsEnd: _propTypes2.default.number.isRequired,
  /** message text inputs for i18n */
  messages: _propTypes2.default.shape({
    firstPage: _propTypes2.default.string,
    previousPage: _propTypes2.default.string,
    nextPage: _propTypes2.default.string,
    lastPage: _propTypes2.default.string,
    perPage: _propTypes2.default.string,
    of: _propTypes2.default.string
  }),
  /** dropdown button id */
  dropdownButtonId: _propTypes2.default.string,
  /** onSubmit callback */
  onSubmit: _propTypes2.default.func,
  /** per page selection callback */
  onPerPageSelect: _propTypes2.default.func,
  /** first page callback */
  onFirstPage: _propTypes2.default.func,
  /** previous page selection callback */
  onPreviousPage: _propTypes2.default.func,
  /** user page input callback */
  onPageInput: _propTypes2.default.func,
  /** next page callback */
  onNextPage: _propTypes2.default.func,
  /** last page callback */
  onLastPage: _propTypes2.default.func,
  /** disable next page */
  disableNext: _propTypes2.default.bool,
  /** disable previous page */
  disablePrev: _propTypes2.default.bool
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
  onSubmit: _helpers.noop,
  onPerPageSelect: _helpers.noop,
  onFirstPage: _helpers.noop,
  onPreviousPage: _helpers.noop,
  onPageInput: _helpers.noop,
  onNextPage: _helpers.noop,
  onLastPage: _helpers.noop,
  dropdownButtonId: 'pagination-row-dropdown',
  disableNext: false,
  disablePrev: false
};

PaginationRow.AmountOfPages = _PaginationRowAmountOfPages2.default;
PaginationRow.ArrowIcon = _PaginationRowArrowIcon2.default;
PaginationRow.Back = _PaginationRowBack2.default;
PaginationRow.ButtonGroup = _PaginationRowButtonGroup2.default;
PaginationRow.Forward = _PaginationRowForward2.default;
PaginationRow.Items = _PaginationRowItems2.default;
PaginationRow.PAGINATION_VIEW = _PaginationConstants.PAGINATION_VIEW;
PaginationRow.PAGINATION_VIEW_TYPES = _PaginationConstants.PAGINATION_VIEW_TYPES;

exports.default = PaginationRow;