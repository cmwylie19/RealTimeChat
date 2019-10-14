(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-styles/css/components/Expandable/expandable", "@patternfly/react-styles", "@patternfly/react-icons"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-styles/css/components/Expandable/expandable"), require("@patternfly/react-styles"), require("@patternfly/react-icons"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.expandable, global.reactStyles, global.reactIcons);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _expandable, _reactStyles, _reactIcons) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Expandable = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _expandable2 = _interopRequireDefault(_expandable);

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

  class Expandable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isExpanded: props.isExpanded
      };
    }

    render() {
      const _this$props = this.props,
            {
        onToggle: onToggleProp,
        isFocused,
        isHovered,
        isActive,
        className,
        toggleText,
        children,
        isExpanded
      } = _this$props,
            props = _objectWithoutProperties(_this$props, ["onToggle", "isFocused", "isHovered", "isActive", "className", "toggleText", "children", "isExpanded"]);

      let onToggle = onToggleProp;
      let propOrStateIsExpanded = isExpanded; // uncontrolled

      if (isExpanded === undefined) {
        propOrStateIsExpanded = this.state.isExpanded;

        onToggle = () => {
          onToggleProp();
          this.setState({
            isExpanded: !this.state.isExpanded
          });
        };
      }

      return React.createElement("div", _extends({}, props, {
        className: (0, _reactStyles.css)(_expandable2.default.expandable, propOrStateIsExpanded && _expandable2.default.modifiers.expanded, className)
      }), React.createElement("button", {
        className: (0, _reactStyles.css)(_expandable2.default.expandableToggle, isFocused && _expandable2.default.modifiers.focus, isHovered && _expandable2.default.modifiers.hover, isActive && _expandable2.default.modifiers.active),
        type: "button",
        "aria-expanded": propOrStateIsExpanded,
        onClick: onToggle
      }, React.createElement(_reactIcons.AngleRightIcon, {
        className: (0, _reactStyles.css)(_expandable2.default.expandableToggleIcon),
        "aria-hidden": true
      }), React.createElement("span", null, toggleText)), React.createElement("div", {
        className: (0, _reactStyles.css)(_expandable2.default.expandableContent),
        hidden: !propOrStateIsExpanded
      }, children));
    }

  }

  exports.Expandable = Expandable;

  _defineProperty(Expandable, "propTypes", {
    children: _propTypes2.default.node.isRequired,
    className: _propTypes2.default.string,
    isExpanded: _propTypes2.default.bool,
    toggleText: _propTypes2.default.string,
    onToggle: _propTypes2.default.func,
    isFocused: _propTypes2.default.bool,
    isHovered: _propTypes2.default.bool,
    isActive: _propTypes2.default.bool
  });

  _defineProperty(Expandable, "defaultProps", {
    className: '',
    toggleText: '',
    onToggle: () => undefined,
    isFocused: false,
    isActive: false,
    isHovered: false
  });
});
//# sourceMappingURL=Expandable.js.map