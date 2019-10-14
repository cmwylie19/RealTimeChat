'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDebounceInput = require('react-debounce-input');

var _index = require('../../../index');

var _helpers = require('../../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BreadcrumbSearchInput = function (_React$Component) {
  _inherits(BreadcrumbSearchInput, _React$Component);

  function BreadcrumbSearchInput() {
    _classCallCheck(this, BreadcrumbSearchInput);

    return _possibleConstructorReturn(this, (BreadcrumbSearchInput.__proto__ || Object.getPrototypeOf(BreadcrumbSearchInput)).apply(this, arguments));
  }

  _createClass(BreadcrumbSearchInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.focus) {
        this.gainFocus();
      }
    }
  }, {
    key: 'gainFocus',
    value: function gainFocus() {
      this.nameInput.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          onSearchChange = _props.onSearchChange,
          searchValue = _props.searchValue,
          timeout = _props.timeout,
          onClear = _props.onClear,
          placeHolder = _props.placeHolder;


      return _react2.default.createElement(
        'div',
        { className: 'input-search' },
        _react2.default.createElement(_index.Icon, { type: 'fa', name: 'search' }),
        _react2.default.createElement(_reactDebounceInput.DebounceInput, {
          className: 'form-control',
          inputRef: function inputRef(input) {
            _this2.nameInput = input;
          },
          autoComplete: 'off',
          id: 'breadcrumbs-search',
          placeholder: placeHolder,
          value: searchValue,
          minLength: 0,
          debounceTimeout: timeout,
          onChange: onSearchChange
        }),
        _react2.default.createElement(_index.Icon, { type: 'fa', name: 'close', onClick: function onClick() {
            return onClear();
          } })
      );
    }
  }]);

  return BreadcrumbSearchInput;
}(_react2.default.Component);

BreadcrumbSearchInput.propTypes = {
  focus: _propTypes2.default.bool,
  searchValue: _propTypes2.default.string,
  timeout: _propTypes2.default.number,
  onSearchChange: _propTypes2.default.func,
  onClear: _propTypes2.default.func,
  placeHolder: _propTypes2.default.string
};

BreadcrumbSearchInput.defaultProps = {
  focus: false,
  searchValue: '',
  timeout: 300,
  onSearchChange: _helpers.noop,
  onClear: _helpers.noop,
  placeHolder: 'Filter...'
};

exports.default = BreadcrumbSearchInput;