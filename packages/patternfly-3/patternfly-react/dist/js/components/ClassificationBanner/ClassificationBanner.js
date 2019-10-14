'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../Button');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultColors = {
  'pf-red': 1,
  'pf-blue': 1,
  'pf-green': 1,
  'pf-orange': 1,
  'pf-yellow': 1
};

/**
 * ClassificationBanner Component for PatternFly React
 */

var ClassificationBanner = function (_React$Component) {
  _inherits(ClassificationBanner, _React$Component);

  function ClassificationBanner(props) {
    _classCallCheck(this, ClassificationBanner);

    var _this = _possibleConstructorReturn(this, (ClassificationBanner.__proto__ || Object.getPrototypeOf(ClassificationBanner)).call(this, props));

    _this.state = { closed: props.closed };
    _this.onClose = _this.onClose.bind(_this);
    return _this;
  }

  _createClass(ClassificationBanner, [{
    key: 'onClose',
    value: function onClose(e) {
      this.setState({
        closed: !this.state.closed
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.closed !== this.state.closed) {
        this.setState({ closed: nextProps.closed });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          bottomBanner = _props.bottomBanner,
          hostName = _props.hostName,
          userName = _props.userName,
          closeButton = _props.closeButton,
          userNamePosition = _props.userNamePosition,
          hostNamePosition = _props.hostNamePosition,
          bannerColor = _props.bannerColor,
          title = _props.title,
          props = _objectWithoutProperties(_props, ['children', 'bottomBanner', 'hostName', 'userName', 'closeButton', 'userNamePosition', 'hostNamePosition', 'bannerColor', 'title']);

      var classificationBannerClasses = {
        top: (0, _classnames2.default)('classification-banner-pf-banner', 'classification-banner-pf-banner-top', defaultColors[bannerColor] ? 'classification-banner-' + bannerColor : ''),
        bottom: (0, _classnames2.default)('classification-banner-pf-banner', defaultColors[bannerColor] ? 'classification-banner-' + bannerColor : '', 'classification-banner-pf-banner-bottom'),
        closeButton: (0, _classnames2.default)({
          'classification-banner-pf-close pficon-error-circle-o': closeButton
        }),
        children: (0, _classnames2.default)({
          'classification-banner-pf-children-no-bottom': !this.state.closed && !bottomBanner,
          'classification-banner-pf-children': !this.state.closed && bottomBanner
        })
      };

      var leftLabels = [hostNamePosition === 'left' ? _react2.default.createElement(
        'span',
        null,
        hostName
      ) : null, userNamePosition === 'left' ? _react2.default.createElement(
        'span',
        null,
        userName
      ) : null];
      var rightLabels = [hostNamePosition === 'right' ? _react2.default.createElement(
        'span',
        null,
        hostName
      ) : null, userNamePosition === 'right' ? _react2.default.createElement(
        'span',
        null,
        userName
      ) : null];
      var bannerBackgroundStyle = defaultColors[bannerColor] ? {} : { background: bannerColor };

      return _react2.default.createElement(
        'div',
        props,
        !this.state.closed && _react2.default.createElement(
          'nav',
          { style: bannerBackgroundStyle, className: classificationBannerClasses.top },
          _react2.default.createElement(
            'div',
            { className: 'classification-banner-pf-banner-left' },
            leftLabels[0],
            leftLabels[1]
          ),
          _react2.default.createElement(
            'div',
            { className: 'classification-banner-pf-classification-level' },
            title
          ),
          _react2.default.createElement(
            'div',
            { className: 'classification-banner-pf-banner-right' },
            closeButton && _react2.default.createElement(_Button.Button, {
              className: classificationBannerClasses.closeButton,
              bsStyle: 'link',
              bsSize: 'small',
              'data-toggle': 'tooltip',
              'data-placement': 'bottom',
              title: 'Close',
              onClick: function onClick(e) {
                return _this2.onClose(e);
              }
            }),
            rightLabels[0],
            rightLabels[1]
          )
        ),
        _react2.default.createElement(
          'div',
          { className: classificationBannerClasses.children },
          children
        ),
        !this.state.closed && bottomBanner && _react2.default.createElement(
          'footer',
          { style: bannerBackgroundStyle, className: classificationBannerClasses.bottom },
          _react2.default.createElement(
            'div',
            { className: 'classification-banner-pf-classification-level' },
            title
          )
        )
      );
    }
  }]);

  return ClassificationBanner;
}(_react2.default.Component);

ClassificationBanner.propTypes = {
  /** Child nodes */
  children: _propTypes2.default.node,
  /** Option to display system hostname that user has logged into */
  hostName: _propTypes2.default.string,
  /** Option to display user login */
  userName: _propTypes2.default.string,
  /** Option to close classification banner */
  closeButton: _propTypes2.default.bool,
  /** Option to enable or disable classification banner across bottom screen */
  bottomBanner: _propTypes2.default.bool,
  /** Whether banner's state is closed or not */
  closed: _propTypes2.default.bool,
  /** Option to configure location of user login on the banner */
  userNamePosition: _propTypes2.default.string,
  /** Option to configure location of hostname on the banner */
  hostNamePosition: _propTypes2.default.string,
  /** Option to configure banner color. Hex code is supported e.g. #39a5dc */
  bannerColor: _propTypes2.default.string,
  /** Classification level or custom text to display in top and bottom banner */
  title: _propTypes2.default.string
};

ClassificationBanner.defaultProps = {
  children: null,
  hostName: '',
  userName: '',
  closeButton: false,
  bottomBanner: true,
  closed: false,
  userNamePosition: 'right',
  hostNamePosition: 'left',
  bannerColor: '',
  title: ''
};

exports.default = ClassificationBanner;