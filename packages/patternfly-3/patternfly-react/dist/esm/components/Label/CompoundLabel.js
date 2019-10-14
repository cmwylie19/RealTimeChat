var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '../Tooltip';
import { OverlayTrigger } from '../OverlayTrigger';
import LabelWithTooltip from './LabelWithTooltip';

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
      return React.createElement(LabelWithTooltip, {
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
      var categoryTooltip = React.createElement(
        Tooltip,
        { id: 'tooltip' },
        this.props.category.label
      );
      return React.createElement(
        'span',
        { className: 'label label-primary compound-label-pf' },
        React.createElement(
          OverlayTrigger,
          { placement: this.props.overlayPlacement, overlay: categoryTooltip },
          React.createElement(
            'span',
            { className: 'category-label-pf' },
            this.props.categoryTruncate(this.props.category.label)
          )
        ),
        React.createElement(
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
}(React.Component);

CompoundLabel.propTypes = {
  /** Category in CATEGORY: value(s) pair */
  /**  Parent of label, it does not get displayed in this component */
  category: PropTypes.shape({
    id: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  /** Array of Values in Category:VALUE(S) pair  */
  /** id uniquily identify value within its category, label is text which is displayed */
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired).isRequired,
  /** Fuction callback called when X button is clicked */
  onDeleteClick: PropTypes.func.isRequired,
  /** Function used to truncate category label */
  categoryTruncate: PropTypes.func,
  /** Function used to truncate value label */
  valueTruncate: PropTypes.func,
  /** Name of CSS class(es) which are set to outer label */
  className: PropTypes.string,
  /** Bootstrap style which is set to label */
  bsStyle: PropTypes.string,
  /** Name of CSS class(es) which are set to inner label(s) */
  innerClassName: PropTypes.string,
  /** Placement of the overlay */
  overlayPlacement: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
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

export default CompoundLabel;