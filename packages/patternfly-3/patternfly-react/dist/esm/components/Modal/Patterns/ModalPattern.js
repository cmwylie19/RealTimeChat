var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../../index';
import Modal from '../Modal';
import CustomModalDialog from '../InnerComponents/CustomModalDialog';
import BsModal from 'react-bootstrap/es/Modal';

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

  return React.createElement(
    Modal,
    _extends({ show: show }, rest),
    React.createElement(
      Modal.Header,
      null,
      React.createElement(Modal.CloseButton, { onClick: onClose }),
      React.createElement(
        Modal.Title,
        null,
        title
      )
    ),
    React.createElement(
      Modal.Body,
      null,
      children
    ),
    React.createElement(
      Modal.Footer,
      null,
      footer
    )
  );
};

ModalPattern.propTypes = _extends({}, BsModal.propTypes, {
  show: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClose: PropTypes.func,
  footer: PropTypes.node,
  children: PropTypes.node
});

ModalPattern.defaultProps = _extends({}, BsModal.defaultProps, {
  dialogComponentClass: CustomModalDialog,
  show: false,
  title: '',
  onClose: noop,
  footer: null,
  children: null
});

ModalPattern.displayName = 'ModalPattern';

export default ModalPattern;