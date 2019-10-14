var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dropdown, ListGroup, ListGroupItem } from '../../index';

var HorizontalNavMenuItem = function HorizontalNavMenuItem(props) {
  var children = props.children,
      onItemClick = props.onItemClick,
      title = props.title,
      active = props.active,
      dropdown = props.dropdown,
      submenu = props.submenu,
      dropup = props.dropup,
      pullLeft = props.pullLeft,
      otherProps = _objectWithoutProperties(props, ['children', 'onItemClick', 'title', 'active', 'dropdown', 'submenu', 'dropup', 'pullLeft']);

  var dropdownClasses = classNames({
    'dropdown-submenu': submenu,
    'pull-left': pullLeft
  });

  return dropdown ? React.createElement(
    Dropdown,
    _extends({ componentClass: 'li', className: dropdownClasses }, otherProps),
    React.createElement(
      Dropdown.Toggle,
      { useAnchor: true, noCaret: submenu },
      title
    ),
    React.createElement(
      Dropdown.Menu,
      { className: dropup ? 'dropup' : '' },
      children
    )
  ) : React.createElement(
    ListGroupItem,
    _extends({ listItem: true, bsClass: '', active: active }, otherProps),
    React.createElement(
      'a',
      { href: '#', onClick: onItemClick },
      title
    ),
    children && React.createElement(
      ListGroup,
      { componentClass: 'ul', bsClass: 'nav navbar-nav navbar-persistent' },
      children
    )
  );
};

HorizontalNavMenuItem.propTypes = {
  children: PropTypes.node,
  onItemClick: PropTypes.func,
  title: PropTypes.node,
  active: PropTypes.bool,
  dropdown: PropTypes.bool,
  submenu: PropTypes.bool,
  dropup: PropTypes.bool,
  pullLeft: PropTypes.bool
};

HorizontalNavMenuItem.defaultProps = {
  children: null,
  onItemClick: null,
  title: '',
  active: false,
  dropdown: false,
  submenu: false,
  dropup: false,
  pullLeft: false
};
export default HorizontalNavMenuItem;