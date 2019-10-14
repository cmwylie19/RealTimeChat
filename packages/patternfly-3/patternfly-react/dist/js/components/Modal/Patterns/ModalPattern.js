'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../../../index');

var _Modal = require('../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _CustomModalDialog = require('../InnerComponents/CustomModalDialog');

var _CustomModalDialog2 = _interopRequireDefault(_CustomModalDialog);

var _Modal3 = require('react-bootstrap/lib/Modal');

var _Modal4 = _interopRequireDefault(_Modal3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Modal Pattern component.
 */
var ModalPattern = function ModalPattern(_ref) {
  var show = _ref.show,
      title = _ref.title,
      onClose = _ref.onClose,
      footer = _ref.footer,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ['show', 'title', 'onClose', 'footer', 'children']);

  return _react2.default.createElement(
    _Modal2.default,
    _extends({ show: show }, rest),
    _react2.default.createElement(
      _Modal2.default.Header,
      null,
      _react2.default.createElement(_Modal2.default.CloseButton, { onClick: onClose }),
      _react2.default.createElement(
        _Modal2.default.Title,
        null,
        title
      )
    ),
    _react2.default.createElement(
      _Modal2.default.Body,
      null,
      children
    ),
    _react2.default.createElement(
      _Modal2.default.Footer,
      null,
      footer
    )
  );
};

ModalPattern.propTypes = _extends({}, _Modal4.default.propTypes, {
  show: _propTypes2.default.bool,
  title: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  onClose: _propTypes2.default.func,
  footer: _propTypes2.default.node,
  children: _propTypes2.default.node
});

ModalPattern.defaultProps = _extends({}, _Modal4.default.defaultProps, {
  dialogComponentClass: _CustomModalDialog2.default,
  show: false,
  title: '',
  onClose: _index.noop,
  footer: null,
  children: null
});

ModalPattern.displayName = 'ModalPattern';

exports.default = ModalPattern;