'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactClickOutside = require('react-click-outside');

var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

var _index = require('./index');

var _Select = require('./Select.fixtures');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatefulWrapperSelect = function (_Component) {
  _inherits(StatefulWrapperSelect, _Component);

  function StatefulWrapperSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StatefulWrapperSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StatefulWrapperSelect.__proto__ || Object.getPrototypeOf(StatefulWrapperSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false,
      isSearching: false,
      searchValue: '',
      selected: { id: '3', name: 'selected' },
      isLoading: false,
      options: _Select.optionsArray,
      matched: []
    }, _this.onToggle = function () {
      return _this.setState({ open: !_this.state.open, isSearching: false, searchValue: '' });
    }, _this.matcher = function (search) {
      var options = _this.state.options;

      var results = [];
      options.forEach(function (opt) {
        if (opt.name.includes(search)) {
          results.push(opt);
        }
      });
      return results;
    }, _this.onSearch = function (e) {
      e.persist();
      if (e.target.value !== '') {
        _this.setState({
          searchValue: e.target.value,
          isSearching: true,
          isLoading: true
        }, function () {
          setTimeout(function () {
            _this.setState({
              isLoading: false,
              matched: _this.matcher(e.target.value)
            });
          }, 700);
        });
      } else {
        _this.setState({ isSearching: false, searchValue: '' });
      }
    }, _this.onClear = function () {
      return _this.setState({ searchValue: '', isSearching: false });
    }, _this.onItemClick = function (host) {
      return _this.setState({ selected: { id: host.id, name: host.name }, open: false, isSearching: false, searchValue: '' });
    }, _this.handleClickOutside = function () {
      if (_this.state.open === true) {
        _this.onToggle();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StatefulWrapperSelect, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          open = _state.open,
          isSearching = _state.isSearching,
          searchValue = _state.searchValue,
          selected = _state.selected,
          isLoading = _state.isLoading,
          options = _state.options,
          matched = _state.matched;

      return _react2.default.createElement(_index.Select, {
        options: isSearching ? matched : options,
        placeholder: 'Filter Host...',
        open: open,
        onToggle: this.onToggle,
        searchValue: searchValue,
        onSearchChange: this.onSearch,
        onSearchClear: this.onClear,
        onItemClick: this.onItemClick,
        selectedItem: selected,
        isLoading: isLoading
      });
    }
  }]);

  return StatefulWrapperSelect;
}(_react.Component);

exports.default = (0, _reactClickOutside2.default)(StatefulWrapperSelect);