(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-core", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-core"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactCore, global.propTypes);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _reactCore, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

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

  const textInputProptypes = _objectSpread({}, _reactCore.TextInput.propTypes);

  const textInputDefaultProptypes = _objectSpread({}, _reactCore.TextInput.defaultProps);

  [textInputProptypes, textInputDefaultProptypes].forEach(types => {
    ['value', 'onChange'].forEach(value => {
      delete types[value];
    });
  });

  const propTypes = _objectSpread({}, textInputProptypes, {
    defaultValue: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    autoFocus: _propTypes2.default.bool
  });

  const defaultProps = _objectSpread({}, textInputDefaultProptypes, {
    defaultValue: null,
    onBlur: null,
    autoFocus: false
  });

  class TableTextInput extends _react2.default.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "handleBlur", event => {
        this.props.onBlur(event.currentTarget.value, event);
      });
    }

    render() {
      const _this$props = this.props,
            {
        defaultValue,
        onBlur,
        autoFocus,
        value,
        onChange
      } = _this$props,
            textInputProps = _objectWithoutProperties(_this$props, ["defaultValue", "onBlur", "autoFocus", "value", "onChange"]);

      return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_reactCore.TextInput, _extends({}, textInputProps, {
        value: undefined,
        defaultValue: defaultValue,
        onBlur: this.handleBlur,
        autoFocus: autoFocus
      })));
    }

  }

  TableTextInput.propTypes = propTypes;
  TableTextInput.defaultProps = defaultProps;
  exports.default = TableTextInput;
});
//# sourceMappingURL=TableTextInput.js.map