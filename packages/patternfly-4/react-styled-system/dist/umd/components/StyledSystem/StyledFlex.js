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

  const StyledFlexBase = (0, _reactEmotion2.default)(_StyledBox.StyledBoxBase)({
    display: 'flex'
  }, // flex parent props
  _styledSystem.flexWrap, _styledSystem.flexDirection, _styledSystem.alignItems, _styledSystem.alignContent, _styledSystem.justifyContent);
  /**
   * StyledFlex inherits all the props from the StyledBox component.
   */

  const StyledFlex = _ref => {
    let {
      className,
      children,
      component
    } = _ref,
        props = _objectWithoutProperties(_ref, ["className", "children", "component"]);

    const StyledFlexBaseWithComponent = StyledFlexBase.withComponent(component);
    return _react2.default.createElement(StyledFlexBaseWithComponent, _extends({}, props, {
      className: (0, _reactStyles.css)(className)
    }), children);
  };

  StyledFlex.propTypes = _objectSpread({}, _StyledBox2.default.propTypes, {
    /** flex-wrap */
    flexWrap: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** flex-direction */
    flexDirection: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** align-items */
    alignItems: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** align-content */
    alignContent: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array]),

    /** justify-content */
    justifyContent: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.array])
  });
  StyledFlex.defaultProps = _objectSpread({}, _StyledBox2.default.defaultProps, {
    flexWrap: null,
    flexDirection: null,
    alignItems: null,
    alignContent: null,
    justifyContent: null
  });
  exports.default = StyledFlex;
});
//# sourceMappingURL=StyledFlex.js.map