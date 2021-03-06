'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('../../../../index');

var _LoginCardSocialLink = require('./LoginCardSocialLink');

var _LoginCardSocialLink2 = _interopRequireDefault(_LoginCardSocialLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginCardSocialColumns = function (_React$Component) {
  _inherits(LoginCardSocialColumns, _React$Component);

  function LoginCardSocialColumns() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LoginCardSocialColumns);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoginCardSocialColumns.__proto__ || Object.getPrototypeOf(LoginCardSocialColumns)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expend: false,
      width: window.innerWidth
    }, _this.updateWindowWidth = function () {
      _this.setState({
        width: window.innerWidth
      });
    }, _this.getListItems = function () {
      _this.hiddenLinks = [];
      var _this$props = _this.props,
          links = _this$props.links,
          numberOfButtonsToShow = _this$props.numberOfButtonsToShow;

      return links && links.map(function (link, index) {
        if (index >= numberOfButtonsToShow) {
          _this.hiddenLinks.push(link);
          return true;
        }

        return _react2.default.createElement(_LoginCardSocialLink2.default, { link: link, key: link.key || index });
      });
    }, _this.getHiddenListItems = function () {
      var numberOfButtonsToShow = _this.props.numberOfButtonsToShow;

      return _this.hiddenLinks && _this.hiddenLinks.map(function (link, index) {
        return _react2.default.createElement(_LoginCardSocialLink2.default, { link: link, key: link.key || index + numberOfButtonsToShow });
      });
    }, _this.toggleExpend = function () {
      _this.setState({ expend: !_this.state.expend });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LoginCardSocialColumns, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.updateWindowWidth);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowWidth);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          links = _props.links,
          numberOfButtonsToShow = _props.numberOfButtonsToShow;

      if (!links) {
        return null;
      }
      var _state = this.state,
          expend = _state.expend,
          width = _state.width;

      var expendButton = width > 768 && links.length > numberOfButtonsToShow && _react2.default.createElement(
        _index.Button,
        { bsStyle: 'link', bsClass: 'btn btn-link login-pf-social-toggle', onClick: this.toggleExpend },
        expend ? 'Less' : 'More',
        ' \xA0',
        _react2.default.createElement(_index.Icon, { name: 'angle-' + (expend ? 'up' : 'down') })
      );

      var doubleColumn = links.length > 4 ? 'login-pf-social-double-col' : '';
      var moreItems = expend || width < 768 ? this.getHiddenListItems() : null;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          { className: (0, _classnames2.default)('login-pf-social list-unstyled', doubleColumn) },
          this.getListItems(),
          moreItems
        ),
        expendButton
      );
    }
  }]);

  return LoginCardSocialColumns;
}(_react2.default.Component);

LoginCardSocialColumns.propTypes = {
  /** Array of social links to generate. */
  links: _propTypes2.default.arrayOf(_propTypes2.default.shape(_extends({}, _LoginCardSocialLink2.default.propTypes))),
  /** The amount of buttons to show. Above this number, the buttons would be hidden */
  numberOfButtonsToShow: _propTypes2.default.number
};

LoginCardSocialColumns.defaultProps = {
  links: [],
  numberOfButtonsToShow: 8
};

exports.default = LoginCardSocialColumns;