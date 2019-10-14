import React from 'react';
import PropTypes from 'prop-types';
import UUID from 'uuid/v1';
import { DropdownKebab } from '../../../index';

var DualListDropDown = function DualListDropDown(_ref) {
  var id = _ref.id,
      children = _ref.children;

  var kebabID = id || 'dual-list-pf-kebab-' + UUID();
  return children ? React.createElement(
    DropdownKebab,
    { id: kebabID, pullRight: true },
    children
  ) : null;
};

DualListDropDown.propTypes = {
  /** The menu items */
  children: PropTypes.node,
  /** ID for the kebab container */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DualListDropDown.defaultProps = {
  children: null,
  id: null
};

export default DualListDropDown;