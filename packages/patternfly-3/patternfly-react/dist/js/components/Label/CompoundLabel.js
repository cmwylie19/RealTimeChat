'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tooltip = require('../Tooltip');

var _OverlayTrigger = require('../OverlayTrigger');

var _LabelWithTooltip = require('./LabelWithTooltip');

var _LabelWithTooltip2 = _interopRequireDefault(_LabelWithTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompoundLabel = function (_React$Component) {
  _inherits(CompoundLabel, _React$Component);

  function CompoundLabel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CompoundLabel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CompoundLabel.__proto__ || Object.getPrototypeOf(CompoundLabel)).call.apply(_ref, [this].concat(args))), _this), _this.generateTag = function (value) {
      return _react2.default.createElement(_LabelWithTooltip2.default, {
        key: value.id,
        category: _this.props.category,
        value: value,
        onDeleteClick: _this.props.onDeleteClick,
        truncate: _this.props.valueTruncate,
        bsStyle: _this.props.bsStyle,
        className: _this.props.innerClassName,
        overlayPlacement: _this.props.overlayPlacement
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CompoundLabel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var values = [].concat(_toConsumableArray(this.props.values));
      if (values.length === 0) {
        return null;
      }
      var categoryTooltip = _react2.default.createElement(
        _Tooltip.Tooltip,
        { id: 'tooltip' },
        this.props.category.label
      );
      return _react2.default.createElement(
        'span',
        { className: 'label label-primary compound-label-pf' },
        _react2.default.createElement(
          _OverlayTrigger.OverlayTrigger,
          { placement: this.props.overlayPlacement, overlay: categoryTooltip },
          _react2.default.createElement(
            'span',
            { className: 'category-label-pf' },
            this.props.categoryTruncate(this.props.category.label)
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'list-inline ' + this.props.className },
          values.sort(function (a, b) {
            return a.label < b.label ? -1 : 1;
          }).map(function (tagValue) {
            return _this2.generateTag(tagValue);
          })
        )
      );
    }
  }]);

  return CompoundLabel;
}(_react2.default.Component);

CompoundLabel.propTypes = {
  /** Category in CATEGORY: value(s) pair */
  /**  Parent of label, it does not get displayed in this component */
  category: _propTypes2.default.shape({
    id: _propTypes2.default.any.isRequired,
    label: _propTypes2.default.string.isRequired
  }).isRequired,
  /** Array of Values in Category:VALUE(S) pair  */
  /** id uniquily identify value within its category, label is text which is displayed */
  values: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.any.isRequired,
    label: _propTypes2.default.string.isRequired
  }).isRequired).isRequired,
  /** Fuction callback called when X button is clicked */
  onDeleteClick: _propTypes2.default.func.isRequired,
  /** Function used to truncate category label */
  categoryTruncate: _propTypes2.default.func,
  /** Function used to truncate value label */
  valueTruncate: _propTypes2.default.func,
  /** Name of CSS class(es) which are set to outer label */
  className: _propTypes2.default.string,
  /** Bootstrap style which is set to label */
  bsStyle: _propTypes2.default.string,
  /** Name of CSS class(es) which are set to inner label(s) */
  innerClassName: _propTypes2.default.string,
  /** Placement of the overlay */
  overlayPlacement: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left'])
};

CompoundLabel.defaultProps = {
  categoryTruncate: function categoryTruncate(str) {
    return str.length > 18 ? str.substring(0, 18) + '...' : str;
  },
  valueTruncate: function valueTruncate(str) {
    return str.length > 18 ? str.substring(0, 18) + '...' : str;
  },
  className: '',
  bsStyle: 'primary',
  innerClassName: '',
  overlayPlacement: 'bottom'
};

exports.default = CompoundLabel;