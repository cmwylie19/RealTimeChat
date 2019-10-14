(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-icons", "@patternfly/react-core", "@patternfly/react-styles/css/components/Topology/topology-side-bar.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-icons"), require("@patternfly/react-core"), require("@patternfly/react-styles/css/components/Topology/topology-side-bar.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.reactIcons, global.reactCore, global.topologySideBar);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _reactIcons, _reactCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TopologySideBar = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

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

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
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

  class TopologySideBar extends React.Component {
    constructor(props) {
      super(props);

      _defineProperty(this, "timer", null);

      _defineProperty(this, "updateForTransitions", () => {
        this.setState({
          isIn: this.props.show
        });
      });

      _defineProperty(this, "startTimer", () => {
        this.clearTimer();
        this.timer = setTimeout(this.updateForTransitions, 150);
      });

      _defineProperty(this, "clearTimer", () => {
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
      });

      this.state = {
        isIn: false
      };
    }

    componentWillUnmount() {
      this.clearTimer();
    }

    render() {
      const _this$props = this.props,
            {
        className = '',
        show = false,
        onClose = null,
        header,
        children = null
      } = _this$props,
            otherProps = _objectWithoutProperties(_this$props, ["className", "show", "onClose", "header", "children"]);

      const {
        isIn
      } = this.state;

      if (isIn !== show) {
        this.clearTimer();
        this.startTimer();
      }

      return React.createElement("div", _extends({}, otherProps, {
        role: "dialog",
        className: `pf-topology-side-bar fade ${className}${show ? ' shown' : ''}${isIn ? ' in' : ''}`
      }), show && React.createElement(React.Fragment, null, onClose && React.createElement(_reactCore.Button, {
        className: "pf-topology-side-bar__dismiss",
        variant: "plain",
        onClick: onClose,
        "aria-label": "Close"
      }, React.createElement(_reactIcons.TimesIcon, null)), header && React.createElement("div", {
        className: "pf-topology-side-bar__header"
      }, header), React.createElement("div", {
        className: "pf-topology-side-bar__body"
      }, children)));
    }

  }

  exports.TopologySideBar = TopologySideBar;

  _defineProperty(TopologySideBar, "propTypes", {
    className: _propTypes2.default.string,
    children: _propTypes2.default.node,
    show: _propTypes2.default.bool,
    onClose: _propTypes2.default.func,
    header: _propTypes2.default.node
  });
});
//# sourceMappingURL=TopologySideBar.js.map