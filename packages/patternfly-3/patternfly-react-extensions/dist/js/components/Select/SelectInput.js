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

var _Icon = require('patternfly-react/dist/js/components/Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectInput = function (_React$Component) {
  _inherits(SelectInput, _React$Component);

  function SelectInput(props) {
    _classCallCheck(this, SelectInput);

    var _this = _possibleConstructorReturn(this, (SelectInput.__proto__ || Object.getPrototypeOf(SelectInput)).call(this, props));

    _this.searchInput = _react2.default.createRef();
    return _this;
  }

  _createClass(SelectInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.focus) {
        this.searchInput.current.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          onClear = _props.onClear,
          className = _props.className,
          onKeyDown = _props.onKeyDown,
          onChange = _props.onChange,
          placeholder = _props.placeholder,
          searchValue = _props.searchValue;

      var classes = (0, _classnames2.default)('select-input-search', className);

      return _react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement(_Icon2.default, { type: 'fa', name: 'search' }),
        _react2.default.createElement('input', {
          autoComplete: 'off',
          className: 'form-control',
          ref: this.searchInput,
          id: id,
          placeholder: placeholder,
          value: searchValue,
          onChange: onChange,
          onKeyDown: onKeyDown
        }),
        _react2.default.createElement(_Icon2.default, { type: 'fa', name: 'close', onClick: onClear })
      );
    }
  }]);

  return SelectInput;
}(_react2.default.Component);

SelectInput.propTypes = {
  className: _propTypes2.default.string,
  focus: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  onClear: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  searchValue: _propTypes2.default.string
};

SelectInput.defaultProps = {
  className: null,
  focus: false,
  id: null,
  onClear: _helpers.noop,
  onKeyDown: _helpers.noop,
  onChange: _helpers.noop,
  placeholder: 'Filter...',
  searchValue: ''
};

exports.default = SelectInput;