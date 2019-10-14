var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PaginationRowArrowIcon from './PaginationRowArrowIcon';
import { noop } from '../../common/helpers';

/**
 * PaginationRowBack component for Patternfly React
 */
var PaginationRowBack = function PaginationRowBack(_ref) {
  var className = _ref.className,
      page = _ref.page,
      messagesFirstPage = _ref.messagesFirstPage,
      messagesPreviousPage = _ref.messagesPreviousPage,
      onFirstPage = _ref.onFirstPage,
      onPreviousPage = _ref.onPreviousPage,
      disable = _ref.disable,
      props = _objectWithoutProperties(_ref, ['className', 'page', 'messagesFirstPage', 'messagesPreviousPage', 'onFirstPage', 'onPreviousPage', 'disable']);

  var classes = classNames('pagination', 'pagination-pf-back', className);
  return React.createElement(
    'ul',
    _extends({ className: classes }, props),
    React.createElement(
      'li',
      { className: page === 1 || disable ? 'disabled' : '' },
      React.createElement(
        'a',
        {
          href: '#',
          title: messagesFirstPage,
          onClick: function onClick(e) {
            e.preventDefault();
            if (page !== 1) {
              onFirstPage(e);
            }
          }
        },
        React.createElement(PaginationRowArrowIcon, { name: 'double-left' })
      )
    ),
    React.createElement(
      'li',
      { className: page === 1 || disable ? 'disabled' : '' },
      React.createElement(
        'a',
        {
          href: '#',
          title: messagesPreviousPage,
          onClick: function onClick(e) {
            e.preventDefault();
            if (page !== 1) {
              onPreviousPage(e);
            }
          }
        },
        React.createElement(PaginationRowArrowIcon, { name: 'left' })
      )
    )
  );
};
PaginationRowBack.propTypes = {
  /** additional class names */
  className: PropTypes.string,
  /** pagination page */
  page: PropTypes.number.isRequired,
  /** messages firstPage */
  messagesFirstPage: PropTypes.string.isRequired,
  /** messages previousPage */
  messagesPreviousPage: PropTypes.string.isRequired,
  /** first page callback */
  onFirstPage: PropTypes.func,
  /** previous page selection callback */
  onPreviousPage: PropTypes.func,
  /** disable back button */
  disable: PropTypes.bool
};
PaginationRowBack.defaultProps = {
  className: '',
  onFirstPage: noop,
  onPreviousPage: noop,
  disable: false
};
export default PaginationRowBack;