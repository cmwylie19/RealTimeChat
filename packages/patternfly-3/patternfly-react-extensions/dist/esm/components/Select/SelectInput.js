var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'patternfly-react/dist/esm/components/Icon/Icon';

import { noop } from '../../common/helpers';

var SelectInput = function (_React$Component) {
  _inherits(SelectInput, _React$Component);

  function SelectInput(props) {
    _classCallCheck(this, SelectInput);

    var _this = _possibleConstructorReturn(this, (SelectInput.__proto__ || Object.getPrototypeOf(SelectInput)).call(this, props));

    _this.searchInput = React.createRef();
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

      var classes = classNames('select-input-search', className);

      return React.createElement(
        'div',
        { className: classes },
        React.createElement(Icon, { type: 'fa', name: 'search' }),
        React.createElement('input', {
          autoComplete: 'off',
          className: 'form-control',
          ref: this.searchInput,
          id: id,
          placeholder: placeholder,
          value: searchValue,
          onChange: onChange,
          onKeyDown: onKeyDown
        }),
        React.createElement(Icon, { type: 'fa', name: 'close', onClick: onClear })
      );
    }
  }]);

  return SelectInput;
}(React.Component);

SelectInput.propTypes = {
  className: PropTypes.string,
  focus: PropTypes.bool,
  id: PropTypes.string,
  onClear: PropTypes.func,
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  searchValue: PropTypes.string
};

SelectInput.defaultProps = {
  className: null,
  focus: false,
  id: null,
  onClear: noop,
  onKeyDown: noop,
  onChange: noop,
  placeholder: 'Filter...',
  searchValue: ''
};

export default SelectInput;