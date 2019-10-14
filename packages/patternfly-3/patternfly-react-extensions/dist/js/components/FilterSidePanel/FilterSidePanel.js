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

var _FilterSidePanelCategory = require('./FilterSidePanelCategory');

var _FilterSidePanelCategory2 = _interopRequireDefault(_FilterSidePanelCategory);

var _FilterSidePanelCategoryItem = require('./FilterSidePanelCategoryItem');

var _FilterSidePanelCategoryItem2 = _interopRequireDefault(_FilterSidePanelCategoryItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * FilterSidePanel Component for PatternFly
 */
var FilterSidePanel = function FilterSidePanel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  var classes = (0, _classnames2.default)('filter-panel-pf', className);
  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, props),
    children
  );
};

FilterSidePanel.propTypes = {
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string
};
FilterSidePanel.defaultProps = {
  children: null,
  className: ''
};

FilterSidePanel.Category = _FilterSidePanelCategory2.default;
FilterSidePanel.CategoryItem = _FilterSidePanelCategoryItem2.default;

exports.default = FilterSidePanel;