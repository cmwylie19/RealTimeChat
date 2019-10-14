'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _v = require('uuid/v1');

var _v2 = _interopRequireDefault(_v);

var _index = require('../../../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DualListDropDown = function DualListDropDown(_ref) {
  var id = _ref.id,
      children = _ref.children;

  var kebabID = id || 'dual-list-pf-kebab-' + (0, _v2.default)();
  return children ? _react2.default.createElement(
    _index.DropdownKebab,
    { id: kebabID, pullRight: true },
    children
  ) : null;
};

DualListDropDown.propTypes = {
  /** The menu items */
  children: _propTypes2.default.node,
  /** ID for the kebab container */
  id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

DualListDropDown.defaultProps = {
  children: null,
  id: null
};

exports.default = DualListDropDown;