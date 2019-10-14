import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var Day = function Day(_ref) {
  var day = _ref.day,
      setSelected = _ref.setSelected,
      classNamesArray = _ref.classNamesArray;

  var date = day.getDate();
  return React.createElement(
    'td',
    {
      className: classNames('day', classNamesArray),
      'data-day': date,
      onClick: function onClick() {
        setSelected(day);
      }
    },
    date
  );
};

Day.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired,
  classNamesArray: PropTypes.object,
  setSelected: PropTypes.func
};

Day.defaultProps = {
  setSelected: null,
  classNamesArray: []
};
export default Day;