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

var _Button = require('patternfly-react/dist/js/components/Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Grid = require('patternfly-react/dist/js/components/Grid/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Icon = require('patternfly-react/dist/js/components/Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _OverlayTrigger = require('patternfly-react/dist/js/components/OverlayTrigger/OverlayTrigger');

var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);

var _Tooltip = require('patternfly-react/dist/js/components/Tooltip/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * TableGridHead Component for PatternFly
 */

var TableGridHead = function TableGridHead(_ref) {
  var id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      showCheckbox = _ref.showCheckbox,
      allSelected = _ref.allSelected,
      partialSelected = _ref.partialSelected,
      onToggleSelection = _ref.onToggleSelection,
      toggleTip = _ref.toggleTip,
      allSelectedAriaLabel = _ref.allSelectedAriaLabel,
      partialSelectedAriaLabel = _ref.partialSelectedAriaLabel,
      noneSelectedAriaLabel = _ref.noneSelectedAriaLabel,
      props = _objectWithoutProperties(_ref, ['id', 'children', 'className', 'showCheckbox', 'allSelected', 'partialSelected', 'onToggleSelection', 'toggleTip', 'allSelectedAriaLabel', 'partialSelectedAriaLabel', 'noneSelectedAriaLabel']);

  var classes = (0, _classnames2.default)('table-grid-pf-head', className);

  var getTipText = function getTipText() {
    if (toggleTip) {
      return toggleTip;
    }
    if (allSelected) {
      return 'All Selected';
    }
    if (partialSelected) {
      return 'Partially Selected';
    }
    return 'None Selected';
  };

  var getAriaLabel = function getAriaLabel() {
    if (allSelected) {
      return allSelectedAriaLabel;
    }
    if (partialSelected) {
      return partialSelectedAriaLabel;
    }
    return noneSelectedAriaLabel;
  };

  var checkboxTooltip = _react2.default.createElement(
    _Tooltip2.default,
    { id: (id || Date.now()) + '_tip' },
    getTipText()
  );

  var iconName = void 0;
  if (allSelected) {
    iconName = 'check-square';
  } else if (partialSelected) {
    iconName = 'minus-square';
  } else {
    iconName = 'square-o';
  }

  return _react2.default.createElement(
    _Grid2.default.Row,
    _extends({ id: id, className: classes }, props),
    showCheckbox && _react2.default.createElement(
      'div',
      { className: 'table-grid-pf-checkbox' },
      _react2.default.createElement(
        _OverlayTrigger2.default,
        { delay: 500, overlay: checkboxTooltip },
        _react2.default.createElement(
          _Button2.default,
          { bsStyle: 'link', onClick: onToggleSelection, 'aria-label': getAriaLabel() },
          _react2.default.createElement(_Icon2.default, { type: 'fa', name: iconName })
        )
      )
    ),
    children
  );
};

TableGridHead.propTypes = {
  /** Id */
  id: _propTypes2.default.any,
  /** Children nodes */
  children: _propTypes2.default.node,
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** Flag to show the Header Checkbox  */
  showCheckbox: _propTypes2.default.bool,
  /** Flag if all items are selected (showCheckbox only) */
  allSelected: _propTypes2.default.bool,
  /** Flag if some of the items are selected  (showCheckbox only) */
  partialSelected: _propTypes2.default.bool,
  /** Callback function for checkbox toggle (showCheckbox only) */
  onToggleSelection: _propTypes2.default.func,
  /** Text for the toggle tooltip (showCheckbox only) */
  toggleTip: _propTypes2.default.string,
  /** Screen reader text for All Selected (showCheckbox only) */
  allSelectedAriaLabel: _propTypes2.default.string,
  /** Screen reader text for Partial Selected (showCheckbox only) */
  partialSelectedAriaLabel: _propTypes2.default.string,
  /** Screen reader text for None Selected (showCheckbox only) */
  noneSelectedAriaLabel: _propTypes2.default.string
};
TableGridHead.defaultProps = {
  id: null,
  children: null,
  className: '',
  showCheckbox: false,
  allSelected: false,
  partialSelected: false,
  onToggleSelection: _helpers.helpers.noop,
  toggleTip: null,
  allSelectedAriaLabel: 'Click to deselect all',
  partialSelectedAriaLabel: 'Click to deselect all',
  noneSelectedAriaLabel: 'Click to select all'
};

exports.default = TableGridHead;