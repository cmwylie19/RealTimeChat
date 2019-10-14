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

var _Checkbox = require('react-bootstrap/lib/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FilterSidePanelCategoryItem = function FilterSidePanelCategoryItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      count = _ref.count,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'icon', 'count']);

  var classes = (0, _classnames2.default)('filter-panel-pf-category-item', className);

  return _react2.default.createElement(
    'div',
    { className: classes },
    _react2.default.createElement(
      _Checkbox2.default,
      props,
      icon && _react2.default.createElement(
        'span',
        { className: 'item-icon' },
        icon
      ),
      children,
      Number.isInteger(count) && _react2.default.createElement(
        'span',
        { className: 'item-count' },
        '(' + count + ')'
      )
    )
  );
};

FilterSidePanelCategoryItem.propTypes = _extends({
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Optional icon (or other) to show before the children */
  icon: _propTypes2.default.node,
  /** Optional count of the items matching the filter */
  count: _propTypes2.default.number
}, _helpers.helpers.excludeKeys(_Checkbox2.default.propTypes, ['className', 'children']));

FilterSidePanelCategoryItem.defaultProps = _extends({
  children: null,
  className: '',
  icon: null,
  count: null
}, _helpers.helpers.excludeKeys(_Checkbox2.default.defaultProps, ['className', 'children']));

exports.default = FilterSidePanelCategoryItem;