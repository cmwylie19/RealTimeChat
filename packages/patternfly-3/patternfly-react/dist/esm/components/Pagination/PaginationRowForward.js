function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PaginationRowArrowIcon from './PaginationRowArrowIcon';
import { noop } from '../../common/helpers';

/**
 * PaginationRowForward component for Patternfly React
 */
var PaginationRowForward = function PaginationRowForward(_ref) {
  var className = _ref.className,
      page = _ref.page,
      amountOfPages = _ref.amountOfPages,
      messagesNextPage = _ref.messagesNextPage,
      messagesLastPage = _ref.messagesLastPage,
      onNextPage = _ref.onNextPage,
      onLastPage = _ref.onLastPage,
      disable = _ref.disable,
      props = _objectWithoutProperties(_ref, ['className', 'page', 'amountOfPages', 'messagesNextPage', 'messagesLastPage', 'onNextPage', 'onLastPage', 'disable']);

  var classes = classNames('pagination', 'pagination-pf-forward', className);
  return React.createElement(
    'ul',
    { className: classes },
    React.createElement(
      'li',
      { className: page === amountOfPages || disable ? 'disabled' : '' },
      React.createElement(
        'a',
        {
          href: '#',
          title: messagesNextPage,
          onClick: function onClick(e) {
            e.preventDefault();
            if (page !== amountOfPages) {
              onNextPage(e);
            }
          }
        },
        React.createElement(PaginationRowArrowIcon, { name: 'right' })
      )
    ),
    React.createElement(
      'li',
      { className: page === amountOfPages || disable ? 'disabled' : '' },
      React.createElement(
        'a',
        {
          href: '#',
          title: messagesLastPage,
          onClick: function onClick(e) {
            e.preventDefault();
            if (page !== amountOfPages) {
              onLastPage(e);
            }
          }
        },
        React.createElement(PaginationRowArrowIcon, { name: 'double-right' })
      )
    )
  );
};
PaginationRowForward.propTypes = {
  /** additional class names */
  className: PropTypes.string,
  /** pagination page */
  page: PropTypes.number.isRequired,
  /** calculated amount of pages */
  amountOfPages: PropTypes.number.isRequired,
  /** messages next page */
  messagesNextPage: PropTypes.string.isRequired,
  /** messages last page */
  messagesLastPage: PropTypes.string.isRequired,
  /** next page callback */
  onNextPage: PropTypes.func,
  /** last page callback */
  onLastPage: PropTypes.func,
  /** disable next button  */
  disable: PropTypes.bool
};
PaginationRowForward.defaultProps = {
  className: '',
  onNextPage: noop,
  onLastPage: noop,
  disable: false
};
export default PaginationRowForward;