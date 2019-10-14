var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import { Icon } from '../../../index';
import { noop } from '../../../common/helpers';

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


      return React.createElement(
        'div',
        { className: 'input-search' },
        React.createElement(Icon, { type: 'fa', name: 'search' }),
        React.createElement(DebounceInput, {
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
        React.createElement(Icon, { type: 'fa', name: 'close', onClick: function onClick() {
            return onClear();
          } })
      );
    }
  }]);

  return BreadcrumbSearchInput;
}(React.Component);

BreadcrumbSearchInput.propTypes = {
  focus: PropTypes.bool,
  searchValue: PropTypes.string,
  timeout: PropTypes.number,
  onSearchChange: PropTypes.func,
  onClear: PropTypes.func,
  placeHolder: PropTypes.string
};

BreadcrumbSearchInput.defaultProps = {
  focus: false,
  searchValue: '',
  timeout: 300,
  onSearchChange: noop,
  onClear: noop,
  placeHolder: 'Filter...'
};

export default BreadcrumbSearchInput;