(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "react-dom", "prop-types", "tippy.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-dom"), require("prop-types"), require("tippy.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.propTypes, global.tippy);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _propTypes, _tippy) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _tippy2 = _interopRequireDefault(_tippy);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
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

  // These props are not native to `tippy.js` and are specific to React only.
  const REACT_ONLY_PROPS = ['children', 'onCreate', 'isVisible', 'isEnabled']; // Avoid Babel's large '_objectWithoutProperties' helper function.

  function getNativeTippyProps(props) {
    return Object.keys(props).reduce((acc, key) => {
      if (REACT_ONLY_PROPS.indexOf(key) === -1) {
        acc[key] = props[key];
      }

      return acc;
    }, {});
  }

  class PopoverBase extends _react2.default.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        isMounted: false
      });

      _defineProperty(this, "container", typeof document !== 'undefined' && document.createElement('div'));
    }

    get isReactElementContent() {
      return _react2.default.isValidElement(this.props.content);
    }

    get options() {
      return _objectSpread({}, getNativeTippyProps(this.props), {
        content: this.isReactElementContent ? this.container : this.props.content
      });
    }

    get isManualTrigger() {
      return this.props.trigger === 'manual';
    }

    componentDidMount() {
      /* eslint-disable-next-line */
      this.setState({
        isMounted: true
      });
      /* eslint-disable-next-line */

      this.tip = _tippy2.default.one(_reactDom2.default.findDOMNode(this), this.options);
      const {
        onCreate,
        isEnabled,
        isVisible
      } = this.props;

      if (onCreate) {
        onCreate(this.tip);
      }

      if (isEnabled === false) {
        this.tip.disable();
      }

      if (this.isManualTrigger && isVisible === true) {
        this.tip.show();
      }
    }

    componentDidUpdate() {
      this.tip.set(this.options);
      const {
        isEnabled,
        isVisible
      } = this.props;

      if (isEnabled === true) {
        this.tip.enable();
      }

      if (isEnabled === false) {
        this.tip.disable();
      }

      if (this.isManualTrigger) {
        if (isVisible === true) {
          this.tip.show();
        }

        if (isVisible === false) {
          this.tip.hide();
        }
      }
    }

    componentWillUnmount() {
      this.tip.destroy();
      this.tip = null;
    }

    render() {
      return _react2.default.createElement(_react2.default.Fragment, null, this.props.children, this.isReactElementContent && this.state.isMounted && _reactDom2.default.createPortal(this.props.content, this.container));
    }

  }

  _defineProperty(PopoverBase, "propTypes", {
    children: _propTypes2.default.element.isRequired,
    content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]).isRequired,
    isEnabled: _propTypes2.default.bool,
    isVisible: _propTypes2.default.bool,
    onCreate: _propTypes2.default.func,
    trigger: _propTypes2.default.string
  });

  _defineProperty(PopoverBase, "defaultProps", {
    isEnabled: undefined,
    isVisible: undefined,
    onCreate: undefined,
    trigger: 'mouseenter focus'
  });

  exports.default = PopoverBase;
});
//# sourceMappingURL=PopoverBase.js.map