'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ModalPattern = require('./ModalPattern');

var _ModalPattern2 = _interopRequireDefault(_ModalPattern);

var _index = require('../../../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Stateful Modal Pattern component.
 */
var StatefulModalPattern = function (_React$Component) {
  _inherits(StatefulModalPattern, _React$Component);

  _createClass(StatefulModalPattern, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return {
        show: (0, _index.propOrState)(nextProps, prevState, 'show')
      };
    }
  }]);

  function StatefulModalPattern(props) {
    _classCallCheck(this, StatefulModalPattern);

    var _this = _possibleConstructorReturn(this, (StatefulModalPattern.__proto__ || Object.getPrototypeOf(StatefulModalPattern)).call(this, props));

    _this.open = function () {
      _this.setState({ show: true });
    };

    _this.close = function () {
      _this.setState({ show: false });
    };

    _this.getModalPatternProps = function () {
      return _this.props;
    };

    _this.state = { show: false };
    return _this;
  }

  _createClass(StatefulModalPattern, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_ModalPattern2.default, _extends({}, this.getModalPatternProps(), { show: this.state.show, onClose: this.close }));
    }
  }]);

  return StatefulModalPattern;
}(_react2.default.Component);

StatefulModalPattern.propTypes = _extends({}, (0, _index.excludeKeys)(_ModalPattern2.default.propTypes, ['onClose']));

StatefulModalPattern.defaultProps = _extends({}, (0, _index.excludeKeys)(_ModalPattern2.default.defaultProps, ['onClose', 'show']));

StatefulModalPattern.displayName = 'StatefulModalPattern';

exports.default = StatefulModalPattern;