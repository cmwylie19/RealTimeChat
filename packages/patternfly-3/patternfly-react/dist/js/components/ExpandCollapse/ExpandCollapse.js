'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('../Button');

var _Icon = require('../Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ALIGN_LEFT = 'left';
var ALIGN_CENTER = 'center';

var ALIGN_TYPES = [ALIGN_LEFT, ALIGN_CENTER];

var ExpandCollapse = function (_React$Component) {
  _inherits(ExpandCollapse, _React$Component);

  function ExpandCollapse() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ExpandCollapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ExpandCollapse.__proto__ || Object.getPrototypeOf(ExpandCollapse)).call.apply(_ref, [this].concat(args))), _this), _this.state = { expanded: false, mirroredExpanded: false }, _this.onClick = function () {
      if (_this.props.onToggle) {
        _this.props.onToggle();
      } else {
        _this.setState(function (prevState) {
          return { expanded: !prevState.expanded };
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ExpandCollapse, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          textCollapsed = _props.textCollapsed,
          textExpanded = _props.textExpanded,
          align = _props.align,
          className = _props.className,
          bordered = _props.bordered;
      var expanded = this.state.expanded;


      var separatorClass = (0, _classnames2.default)('expand-collapse-pf-separator', { bordered: bordered });

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('expand-collapse-pf', className) },
        _react2.default.createElement(
          'div',
          { className: 'expand-collapse-pf-link-container' },
          align === ALIGN_CENTER && _react2.default.createElement('span', { className: separatorClass }),
          _react2.default.createElement(
            _Button.Button,
            { bsStyle: 'link', onClick: this.onClick },
            _react2.default.createElement(_Icon.Icon, { type: 'fa', name: expanded ? 'angle-down' : 'angle-right' }),
            expanded ? textExpanded : textCollapsed
          ),
          _react2.default.createElement('span', { className: separatorClass })
        ),
        this.state.expanded && children
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.mirroredExpanded !== nextProps.expanded) {
        return {
          expanded: nextProps.expanded,
          mirroredExpanded: nextProps.expanded
        };
      }
      return null;
    }
  }]);

  return ExpandCollapse;
}(_react2.default.Component);

ExpandCollapse.propTypes = {
  children: _propTypes2.default.any.isRequired,
  /** Top-level custom class */
  className: _propTypes2.default.string,
  /** Text for the link in collapsed state */
  textCollapsed: _propTypes2.default.string,
  /** Text for the link in expanded state */
  textExpanded: _propTypes2.default.string,
  /** Align the link to the left or center. */
  align: _propTypes2.default.oneOf(ALIGN_TYPES),
  /** Flag to show a separation border line */
  bordered: _propTypes2.default.bool,
  /** Flag to control expansion state */
  expanded: _propTypes2.default.bool, // eslint-disable-line react/no-unused-prop-types
  /** Callback function to control externally stored expansion state */
  onToggle: _propTypes2.default.func
};

ExpandCollapse.defaultProps = {
  className: '',
  textCollapsed: 'Show Advanced Options',
  textExpanded: 'Hide Advanced Options',
  align: ALIGN_LEFT,
  bordered: true,
  expanded: false,
  onToggle: undefined
};

ExpandCollapse.ALIGN_LEFT = ALIGN_LEFT;
ExpandCollapse.ALIGN_CENTER = ALIGN_CENTER;
ExpandCollapse.ALIGN_TYPES = ALIGN_TYPES;

exports.default = ExpandCollapse;