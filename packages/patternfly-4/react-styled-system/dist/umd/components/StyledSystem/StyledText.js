(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "prop-types", "react-emotion", "styled-system", "./StyledBox"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("prop-types"), require("react-emotion"), require("styled-system"), require("./StyledBox"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.propTypes, global.reactEmotion, global.styledSystem, global.StyledBox);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _reactStyles, _propTypes, _reactEmotion, _styledSystem, _StyledBox) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

  var _StyledBox2 = _interopRequireDefault(_StyledBox);

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

  const StyledTextBase = (0, _reactEmotion2.default)(_StyledBox.StyledBoxBase)( // theme key: fonts
  _styledSystem.fontFamily, // theme key: fontWeights
  _styledSystem.fontWeight, // theme key: lineHeights
  _styledSystem.lineHeight, // theme key: letterSpacings
  _styledSystem.letterSpacing, // no theme keys
  _styledSystem.textAlign);
  /**
   * StyledText inherits all the props from the StyledBox component.
   */

  const StyledText = _ref => {
    let {
      className,
      children,
      component
    } = _ref,
        props = _objectWithoutProperties(_ref, ["className", "children", "component"]);

    const StyledTextBaseWithComponent = StyledTextBase.withComponent(component);
    return _react2.default.createElement(StyledTextBaseWithComponent, _extends({}, props, {
      className: (0, _reactStyles.css)(className)
    }), children);
  };

  StyledText.propTypes = _objectSpread({}, _StyledBox2.default.propTypes, {
    /** font-family - Maps with Maps with StyledConstants.fonts */
    fontFamily: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** font-weight - Maps with Maps with StyledConstants.fontWeights */
    fontWeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** line-height - Maps with Maps with StyledConstants.lineHeights */
    lineHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** letter-spacing */
    letterSpacing: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** text-align */
    textAlign: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array])
  });
  StyledText.defaultProps = _objectSpread({}, _StyledBox2.default.defaultProps, {
    fontFamily: null,
    fontWeight: null,
    lineHeight: null,
    letterSpacing: null,
    textAlign: null
  });
  exports.default = StyledText;
});
//# sourceMappingURL=StyledText.js.map