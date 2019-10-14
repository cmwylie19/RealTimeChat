var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

var AsyncTypeAheadSelect = function (_React$Component) {
  _inherits(AsyncTypeAheadSelect, _React$Component);

  function AsyncTypeAheadSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AsyncTypeAheadSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AsyncTypeAheadSelect.__proto__ || Object.getPrototypeOf(AsyncTypeAheadSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      options: _this.props.options,
      isLoading: _this.props.isLoading
    }, _this.onSearchStart = function () {
      return _this.setState({ isLoading: true });
    }, _this.onSearchEnd = function (options) {
      return _this.setState({ options: options, isLoading: false });
    }, _this.handleSearch = function (query) {
      _this.onSearchStart();
      Promise.resolve(_this.props.onSearch(query)).then(function (options) {
        return _this.onSearchEnd(options);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // query is the text string entered by the user.


  _createClass(AsyncTypeAheadSelect, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          innerRef = _props.innerRef,
          props = _objectWithoutProperties(_props, ['innerRef']);

      return React.createElement(AsyncTypeahead, _extends({}, props, {
        ref: innerRef,
        onSearch: this.handleSearch,
        options: this.state.options,
        isLoading: this.state.isLoading
      }));
    }
  }]);

  return AsyncTypeAheadSelect;
}(React.Component);

AsyncTypeAheadSelect.propTypes = {
  /** Callback function for search */
  onSearch: PropTypes.func.isRequired,
  /** Array of selectable options */
  options: PropTypes.array,
  /** Flag to indicate if typeahead is loading */
  isLoading: PropTypes.bool,
  /** Internal property to access the react bootstrap typeahead component via outer ref property */
  innerRef: PropTypes.any
};

AsyncTypeAheadSelect.defaultProps = {
  options: [],
  isLoading: false,
  innerRef: null
};

export default React.forwardRef(function (props, ref) {
  return React.createElement(AsyncTypeAheadSelect, _extends({}, props, { innerRef: ref }));
});