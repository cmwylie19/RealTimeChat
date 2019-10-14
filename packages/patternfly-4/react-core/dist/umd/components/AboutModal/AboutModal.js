(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "react-dom", "@patternfly/react-styles", "@patternfly/react-styles/css/components/Backdrop/backdrop", "exenv", "../../helpers/constants", "./AboutModalContainer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("react-dom"), require("@patternfly/react-styles"), require("@patternfly/react-styles/css/components/Backdrop/backdrop"), require("exenv"), require("../../helpers/constants"), require("./AboutModalContainer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.reactDom, global.reactStyles, global.backdrop, global.exenv, global.constants, global.AboutModalContainer);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _reactDom, _reactStyles, _backdrop, _exenv, _constants, _AboutModalContainer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AboutModal = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var ReactDOM = _interopRequireWildcard(_reactDom);

  var _backdrop2 = _interopRequireDefault(_backdrop);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};

    if (obj != null) {
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  class AboutModal extends React.Component {
    constructor(props) {
      super(props);

      _defineProperty(this, "id", AboutModal.currentId++);

      _defineProperty(this, "ariaLabelledBy", `pf-about-modal-title-${this.id}`);

      _defineProperty(this, "ariaDescribedBy", `pf-about-modal-content-${this.id}`);

      _defineProperty(this, "handleEscKeyClick", event => {
        if (event.keyCode === _constants.KEY_CODES.ESCAPE_KEY && this.props.isOpen) {
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
        document.body.classList.add((0, _reactStyles.css)(_backdrop2.default.backdropOpen));
      } else {
        document.body.classList.remove((0, _reactStyles.css)(_backdrop2.default.backdropOpen));
      }
    }

    componentDidUpdate() {
      if (this.props.isOpen) {
        document.body.classList.add((0, _reactStyles.css)(_backdrop2.default.backdropOpen));
        this.toggleSiblingsFromScreenReaders(true);
      } else {
        document.body.classList.remove((0, _reactStyles.css)(_backdrop2.default.backdropOpen));
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

      if (!_exenv.canUseDOM || !container) {
        return null;
      }

      return ReactDOM.createPortal(React.createElement(_AboutModalContainer.AboutModalContainer, _extends({
        ariaLabelledbyId: this.ariaLabelledBy,
        ariaDescribedById: this.ariaDescribedBy
      }, props)), container);
    }

  }

  exports.AboutModal = AboutModal;

  _defineProperty(AboutModal, "propTypes", {
    children: _propTypes2.default.node.isRequired,
    className: _propTypes2.default.string,
    isOpen: _propTypes2.default.bool,
    onClose: _propTypes2.default.func,
    productName: _propTypes2.default.string,
    trademark: _propTypes2.default.string,
    brandImageSrc: _propTypes2.default.string.isRequired,
    brandImageAlt: _propTypes2.default.string.isRequired,
    backgroundImageSrc: _propTypes2.default.string,
    noAboutModalBoxContentContainer: _propTypes2.default.bool
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
});
//# sourceMappingURL=AboutModal.js.map