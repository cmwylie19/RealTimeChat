import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Backdrop/backdrop';
import { canUseDOM } from 'exenv';
import { KEY_CODES } from '../../helpers/constants';
import { AboutModalContainer } from './AboutModalContainer';
export class AboutModal extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "id", AboutModal.currentId++);

    _defineProperty(this, "ariaLabelledBy", `pf-about-modal-title-${this.id}`);

    _defineProperty(this, "ariaDescribedBy", `pf-about-modal-content-${this.id}`);

    _defineProperty(this, "handleEscKeyClick", event => {
      if (event.keyCode === KEY_CODES.ESCAPE_KEY && this.props.isOpen) {
        this.props.onClose();
      }
    });

    _defineProperty(this, "toggleSiblingsFromScreenReaders", hide => {
      const bodyChildren = document.body.children;

      for (const child of Array.from(bodyChildren)) {
        if (child !== this.state.container) {
          hide ? child.setAttribute('aria-hidden', '' + hide) : child.removeAttribute('aria-hidden');
        }
      }
    });

    this.state = {
      container: undefined
    };

    if (props.brandImageSrc && !props.brandImageAlt) {
      // tslint:disable-next-line:no-console
      console.error('AboutModal:', 'brandImageAlt is required when a brandImageSrc is specified');
    }
  }

  componentDidMount() {
    const container = document.createElement('div');
    this.setState({
      container
    });
    document.body.appendChild(container);
    document.addEventListener('keydown', this.handleEscKeyClick, false);

    if (this.props.isOpen) {
      document.body.classList.add(css(styles.backdropOpen));
    } else {
      document.body.classList.remove(css(styles.backdropOpen));
    }
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      document.body.classList.add(css(styles.backdropOpen));
      this.toggleSiblingsFromScreenReaders(true);
    } else {
      document.body.classList.remove(css(styles.backdropOpen));
      this.toggleSiblingsFromScreenReaders(false);
    }
  }

  componentWillUnmount() {
    if (this.state.container) {
      document.body.removeChild(this.state.container);
    }

    document.removeEventListener('keydown', this.handleEscKeyClick, false);
  }

  render() {
    const props = _extends({}, this.props);

    const {
      container
    } = this.state;

    if (!canUseDOM || !container) {
      return null;
    }

    return ReactDOM.createPortal(React.createElement(AboutModalContainer, _extends({
      ariaLabelledbyId: this.ariaLabelledBy,
      ariaDescribedById: this.ariaDescribedBy
    }, props)), container);
  }

}

_defineProperty(AboutModal, "propTypes", {
  children: _pt.node.isRequired,
  className: _pt.string,
  isOpen: _pt.bool,
  onClose: _pt.func,
  productName: _pt.string,
  trademark: _pt.string,
  brandImageSrc: _pt.string.isRequired,
  brandImageAlt: _pt.string.isRequired,
  backgroundImageSrc: _pt.string,
  noAboutModalBoxContentContainer: _pt.bool
});

_defineProperty(AboutModal, "currentId", 0);

_defineProperty(AboutModal, "defaultProps", {
  className: '',
  isOpen: false,
  onClose: () => undefined,
  productName: '',
  trademark: '',
  backgroundImageSrc: '',
  noAboutModalBoxContentContainer: false
});
//# sourceMappingURL=AboutModal.js.map