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

var _reactEllipsisWithTooltip = require('react-ellipsis-with-tooltip');

var _reactEllipsisWithTooltip2 = _interopRequireDefault(_reactEllipsisWithTooltip);

var _Spinner = require('patternfly-react/dist/js/components/Spinner/Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Button = require('patternfly-react/dist/js/components/Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ListGroup = require('patternfly-react/dist/js/components/ListGroup/ListGroup');

var _ListGroup2 = _interopRequireDefault(_ListGroup);

var _TypeAheadSelect = require('patternfly-react/dist/js/components/TypeAheadSelect/TypeAheadSelect');

var _TypeAheadSelect2 = _interopRequireDefault(_TypeAheadSelect);

var _helpers = require('../../common/helpers');

var _SelectHelper = require('./SelectHelper');

var _SelectInput = require('./SelectInput');

var _SelectInput2 = _interopRequireDefault(_SelectInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function Select(_ref) {
  var disabled = _ref.disabled,
      emptyText = _ref.emptyText,
      focusOnMount = _ref.focusOnMount,
      isLoading = _ref.isLoading,
      isSearchable = _ref.isSearchable,
      loadingText = _ref.loadingText,
      onItemClick = _ref.onItemClick,
      onKeyDown = _ref.onKeyDown,
      onSearchChange = _ref.onSearchChange,
      onSearchClear = _ref.onSearchClear,
      onToggle = _ref.onToggle,
      open = _ref.open,
      options = _ref.options,
      placeholder = _ref.placeholder,
      searchValue = _ref.searchValue,
      selectedItem = _ref.selectedItem;

  var classes = (0, _classnames2.default)('select-container-pf', { open: open });

  var renderResults = function renderResults(results) {
    return results.length === 0 ? _react2.default.createElement(
      _ListGroup2.default.ListGroupItem,
      { id: 'select-empty', key: 'empty', className: 'select-empty-list' },
      _react2.default.createElement(
        'span',
        { id: 'empty-text' },
        emptyText
      )
    ) : results.map(function (opt, i) {
      return _react2.default.createElement(
        _ListGroup2.default.ListGroupItem,
        (0, _SelectHelper.createItemProps)(opt, selectedItem, opt.className || 'no-border', onItemClick),
        _react2.default.createElement(
          _reactEllipsisWithTooltip2.default,
          null,
          searchValue && searchValue.length ? _react2.default.createElement(
            _TypeAheadSelect2.default.Highlighter,
            { search: searchValue },
            opt.name
          ) : opt.name
        )
      );
    });
  };

  return _react2.default.createElement(
    'div',
    { className: classes },
    _react2.default.createElement(
      _Button2.default,
      { disabled: disabled, onClick: onToggle, active: open, className: 'select-dropdown-toggle' },
      selectedItem.id ? _react2.default.createElement(
        _reactEllipsisWithTooltip2.default,
        null,
        selectedItem.name
      ) : _react2.default.createElement(
        _reactEllipsisWithTooltip2.default,
        null,
        _react2.default.createElement(
          'span',
          { className: 'select-toggle-placeholder' },
          placeholder
        )
      ),
      _react2.default.createElement('span', { className: 'caret select-caret' })
    ),
    open && _react2.default.createElement(
      'div',
      { className: 'select-body-container' },
      isSearchable && _react2.default.createElement(_SelectInput2.default, {
        onClear: onSearchClear,
        focus: focusOnMount,
        onChange: onSearchChange,
        onKeyDown: onKeyDown,
        placeholder: placeholder,
        searchValue: searchValue
      }),
      _react2.default.createElement(
        _ListGroup2.default,
        { className: 'select-scrollable-list' },
        isLoading ? _react2.default.createElement(
          _ListGroup2.default.ListGroupItem,
          { id: 'select-loading', key: 'loading', className: 'select-loading-list' },
          _react2.default.createElement(
            'div',
            { id: 'select-loading-container' },
            _react2.default.createElement(_Spinner2.default, { id: 'select-spinner', loading: true, size: 'sm' }),
            ' ',
            _react2.default.createElement(
              'span',
              null,
              loadingText
            )
          )
        ) : renderResults(options)
      )
    )
  );
};

Select.propTypes = {
  /** is Select disabled */
  disabled: _propTypes2.default.bool,

  /** no Results text */
  emptyText: _propTypes2.default.string,

  /** should Search input take focus on open */
  focusOnMount: _propTypes2.default.bool,

  /** isLoading bool */
  isLoading: _propTypes2.default.bool,

  /** show Search bool */
  isSearchable: _propTypes2.default.bool,

  /** isLoading text */
  loadingText: _propTypes2.default.string,

  /** onItemClick func({ event, id, name }) */
  onItemClick: _propTypes2.default.func,

  /** onKeyDown func(event) */
  onKeyDown: _propTypes2.default.func,

  /** onSearchChange func(event) */
  onSearchChange: _propTypes2.default.func,

  /** onSearchClear func() */
  onSearchClear: _propTypes2.default.func,

  /** onToggle func() */
  onToggle: _propTypes2.default.func,

  /** isOpen bool */
  open: _propTypes2.default.bool.isRequired,

  /** options array */
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string,
    name: _propTypes2.default.string
  })).isRequired,

  /** placeholder */
  placeholder: _propTypes2.default.string,

  /** searchValue */
  searchValue: _propTypes2.default.string,

  /** selectedItem object { id: string, name: string } */
  selectedItem: _propTypes2.default.PropTypes.shape({
    id: _propTypes2.default.string,
    name: _propTypes2.default.string
  })
};

Select.defaultProps = {
  disabled: false,
  emptyText: 'No Results',
  focusOnMount: true,
  isLoading: false,
  isSearchable: true,
  loadingText: 'Loading...',
  onItemClick: _helpers.noop,
  onKeyDown: _helpers.noop,
  onSearchChange: _helpers.noop,
  onSearchClear: _helpers.noop,
  onToggle: _helpers.noop,
  placeholder: 'Filter...',
  searchValue: '',
  selectedItem: {
    id: 'null',
    name: 'null'
  }
};

exports.default = Select;