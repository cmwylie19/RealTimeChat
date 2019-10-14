'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Modal = require('react-bootstrap/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _CustomModalDialog = require('./InnerComponents/CustomModalDialog');

var _CustomModalDialog2 = _interopRequireDefault(_CustomModalDialog);

var _ModalCloseButton = require('./ModalCloseButton');

var _ModalCloseButton2 = _interopRequireDefault(_ModalCloseButton);

var _ModalPattern = require('./Patterns/ModalPattern');

var _ModalPattern2 = _interopRequireDefault(_ModalPattern);

var _StatefulModalPattern = require('./Patterns/StatefulModalPattern');

var _StatefulModalPattern2 = _interopRequireDefault(_StatefulModalPattern);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Modal Component for Patternfly React
 */
var Modal = function (_BsModal) {
  _inherits(Modal, _BsModal);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      return _get(Modal.prototype.__proto__ || Object.getPrototypeOf(Modal.prototype), 'render', this).call(this);
    }
  }]);

  return Modal;
}(_Modal2.default);

Modal.propTypes = _extends({}, _Modal2.default.propTypes);

Modal.defaultProps = _extends({}, _Modal2.default.defaultProps, {
  dialogComponentClass: _CustomModalDialog2.default
});

Modal.CloseButton = _ModalCloseButton2.default;

Modal.Pattern = _ModalPattern2.default;
Modal.Pattern.Stateful = _StatefulModalPattern2.default;

exports.default = Modal;