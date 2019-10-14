import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../common/helpers';

export var DecadeViewTable = function DecadeViewTable(_ref) {
  var yearArray = _ref.yearArray,
      selectedYear = _ref.selectedYear,
      setSelectedYear = _ref.setSelectedYear;
  return React.createElement(
    'tbody',
    null,
    React.createElement(
      'tr',
      null,
      React.createElement(
        'td',
        { colSpan: '7' },
        yearArray.map(function (year) {
          return React.createElement(
            'span',
            {
              onClick: function onClick() {
                return setSelectedYear(year);
              },
              className: 'year ' + (year === selectedYear ? 'active' : ''),
              key: year
            },
            year
          );
        })
      )
    )
  );
};

DecadeViewTable.propTypes = {
  yearArray: PropTypes.array,
  selectedYear: PropTypes.number,
  setSelectedYear: PropTypes.func
};
DecadeViewTable.defaultProps = {
  yearArray: [],
  selectedYear: new Date().getFullYear(),
  setSelectedYear: noop
};

export default DecadeViewTable;