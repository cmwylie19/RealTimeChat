'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('../../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

  var dropdownClasses = (0, _classnames2.default)({
    'dropdown-submenu': submenu,
    'pull-left': pullLeft
  });

  return dropdown ? _react2.default.createElement(
    _index.Dropdown,
    _extends({ componentClass: 'li', className: dropdownClasses }, otherProps),
    _react2.default.createElement(
      _index.Dropdown.Toggle,
      { useAnchor: true, noCaret: submenu },
      title
    ),
    _react2.default.createElement(
      _index.Dropdown.Menu,
      { className: dropup ? 'dropup' : '' },
      children
    )
  ) : _react2.default.createElement(
    _index.ListGroupItem,
    _extends({ listItem: true, bsClass: '', active: active }, otherProps),
    _react2.default.createElement(
      'a',
      { href: '#', onClick: onItemClick },
      title
    ),
    children && _react2.default.createElement(
      _index.ListGroup,
      { componentClass: 'ul', bsClass: 'nav navbar-nav navbar-persistent' },
      children
    )
  );
};

HorizontalNavMenuItem.propTypes = {
  children: _propTypes2.default.node,
  onItemClick: _propTypes2.default.func,
  title: _propTypes2.default.node,
  active: _propTypes2.default.bool,
  dropdown: _propTypes2.default.bool,
  submenu: _propTypes2.default.bool,
  dropup: _propTypes2.default.bool,
  pullLeft: _propTypes2.default.bool
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
exports.default = HorizontalNavMenuItem;