import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import EllipsisWithTooltip from 'react-ellipsis-with-tooltip';
import Spinner from 'patternfly-react/dist/esm/components/Spinner/Spinner';
import Button from 'patternfly-react/dist/esm/components/Button/Button';
import ListGroup from 'patternfly-react/dist/esm/components/ListGroup/ListGroup';
import TypeAheadSelect from 'patternfly-react/dist/esm/components/TypeAheadSelect/TypeAheadSelect';

import { noop } from '../../common/helpers';
import { createItemProps } from './SelectHelper';
import SelectInput from './SelectInput';

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

  var classes = classNames('select-container-pf', { open: open });

  var renderResults = function renderResults(results) {
    return results.length === 0 ? React.createElement(
      ListGroup.ListGroupItem,
      { id: 'select-empty', key: 'empty', className: 'select-empty-list' },
      React.createElement(
        'span',
        { id: 'empty-text' },
        emptyText
      )
    ) : results.map(function (opt, i) {
      return React.createElement(
        ListGroup.ListGroupItem,
        createItemProps(opt, selectedItem, opt.className || 'no-border', onItemClick),
        React.createElement(
          EllipsisWithTooltip,
          null,
          searchValue && searchValue.length ? React.createElement(
            TypeAheadSelect.Highlighter,
            { search: searchValue },
            opt.name
          ) : opt.name
        )
      );
    });
  };

  return React.createElement(
    'div',
    { className: classes },
    React.createElement(
      Button,
      { disabled: disabled, onClick: onToggle, active: open, className: 'select-dropdown-toggle' },
      selectedItem.id ? React.createElement(
        EllipsisWithTooltip,
        null,
        selectedItem.name
      ) : React.createElement(
        EllipsisWithTooltip,
        null,
        React.createElement(
          'span',
          { className: 'select-toggle-placeholder' },
          placeholder
        )
      ),
      React.createElement('span', { className: 'caret select-caret' })
    ),
    open && React.createElement(
      'div',
      { className: 'select-body-container' },
      isSearchable && React.createElement(SelectInput, {
        onClear: onSearchClear,
        focus: focusOnMount,
        onChange: onSearchChange,
        onKeyDown: onKeyDown,
        placeholder: placeholder,
        searchValue: searchValue
      }),
      React.createElement(
        ListGroup,
        { className: 'select-scrollable-list' },
        isLoading ? React.createElement(
          ListGroup.ListGroupItem,
          { id: 'select-loading', key: 'loading', className: 'select-loading-list' },
          React.createElement(
            'div',
            { id: 'select-loading-container' },
            React.createElement(Spinner, { id: 'select-spinner', loading: true, size: 'sm' }),
            ' ',
            React.createElement(
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
  disabled: PropTypes.bool,

  /** no Results text */
  emptyText: PropTypes.string,

  /** should Search input take focus on open */
  focusOnMount: PropTypes.bool,

  /** isLoading bool */
  isLoading: PropTypes.bool,

  /** show Search bool */
  isSearchable: PropTypes.bool,

  /** isLoading text */
  loadingText: PropTypes.string,

  /** onItemClick func({ event, id, name }) */
  onItemClick: PropTypes.func,

  /** onKeyDown func(event) */
  onKeyDown: PropTypes.func,

  /** onSearchChange func(event) */
  onSearchChange: PropTypes.func,

  /** onSearchClear func() */
  onSearchClear: PropTypes.func,

  /** onToggle func() */
  onToggle: PropTypes.func,

  /** isOpen bool */
  open: PropTypes.bool.isRequired,

  /** options array */
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })).isRequired,

  /** placeholder */
  placeholder: PropTypes.string,

  /** searchValue */
  searchValue: PropTypes.string,

  /** selectedItem object { id: string, name: string } */
  selectedItem: PropTypes.PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })
};

Select.defaultProps = {
  disabled: false,
  emptyText: 'No Results',
  focusOnMount: true,
  isLoading: false,
  isSearchable: true,
  loadingText: 'Loading...',
  onItemClick: noop,
  onKeyDown: noop,
  onSearchChange: noop,
  onSearchClear: noop,
  onToggle: noop,
  placeholder: 'Filter...',
  searchValue: '',
  selectedItem: {
    id: 'null',
    name: 'null'
  }
};

export default Select;