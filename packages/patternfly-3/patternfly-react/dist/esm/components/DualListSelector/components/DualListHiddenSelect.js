var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../common/helpers';

var DualListHiddenSelect = function DualListHiddenSelect(_ref) {
  var items = _ref.items,
      props = _objectWithoutProperties(_ref, ['items']);

  var selectedValues = [];
  var options = React.createElement(
    React.Fragment,
    null,
    items ? items.map(function (_ref2, index) {
      var value = _ref2.value,
          children = _ref2.children,
          label = _ref2.label;

      if (children) {
        return children.map(function (_ref3, childIndex) {
          var childValue = _ref3.value,
              childLabel = _ref3.label;

          selectedValues.push(childValue);
          return React.createElement(
            'option',
            { key: index + '-' + childIndex, value: childValue },
            childLabel
          );
        });
      }
      selectedValues.push(value);
      return React.createElement(
        'option',
        { key: index, value: value },
        label
      );
    }) : React.createElement('option', null)
  );
  return (
    // Added 'onChange' after the browser threw a warning of using the value attribute without it.
    React.createElement(
      'select',
      _extends({}, props, { multiple: true, hidden: true, value: selectedValues, onChange: noop }),
      options
    )
  );
};

DualListHiddenSelect.propTypes = {
  /** An array of items */
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }))
  }))
};

DualListHiddenSelect.defaultProps = {
  items: []
};

export default DualListHiddenSelect;