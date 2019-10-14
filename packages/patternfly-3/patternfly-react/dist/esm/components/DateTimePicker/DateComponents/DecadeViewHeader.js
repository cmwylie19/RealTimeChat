import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../common/helpers';

export var DecadeViewHeader = function DecadeViewHeader(_ref) {
  var currDecade = _ref.currDecade,
      getPrevDecade = _ref.getPrevDecade,
      getNextDecade = _ref.getNextDecade;
  return React.createElement(
    'thead',
    null,
    React.createElement(
      'tr',
      null,
      React.createElement(
        'th',
        { className: 'prev', onClick: getPrevDecade },
        React.createElement('span', { className: 'glyphicon glyphicon-chevron-left' })
      ),
      React.createElement(
        'th',
        { className: 'picker-switch', 'data-action': 'pickerSwitch', colSpan: '5' },
        currDecade + '-' + (currDecade + 11)
      ),
      React.createElement(
        'th',
        { className: 'next', onClick: getNextDecade },
        React.createElement('span', { className: 'glyphicon glyphicon-chevron-right' })
      )
    )
  );
};

DecadeViewHeader.propTypes = {
  currDecade: PropTypes.number,
  getPrevDecade: PropTypes.func,
  getNextDecade: PropTypes.func
};
DecadeViewHeader.defaultProps = {
  currDecade: 20,
  getPrevDecade: noop,
  getNextDecade: noop
};
export default DecadeViewHeader;