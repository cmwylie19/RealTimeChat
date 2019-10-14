(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Tab = undefined;

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

  const Tab0 = _ref => {
    let {
      children,
      eventKey,
      className = '',
      tabContentId,
      tabContentRef,
      title
    } = _ref,
        props = _objectWithoutProperties(_ref, ["children", "eventKey", "className", "tabContentId", "tabContentRef", "title"]); // destructuring to prevent console warnings for applying eventKey, and tabContentId to a DOM element and remove title from the DOM element


    const Component = props.href ? 'a' : 'button';
    return React.createElement(Component, _extends({}, props, {
      className: className,
      ref: tabContentRef
    }), children);
  };

  Tab0.propTypes = {
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    href: _propTypes2.default.string,
    title: _propTypes2.default.node.isRequired,
    eventKey: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
    tabContentId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    tabContentRef: _propTypes2.default.any
  };

  const withForwardedRef = Component => {
    class TabContainer extends React.Component {
      render() {
        const _this$props = this.props,
              {
          forwardRef
        } = _this$props,
              rest = _objectWithoutProperties(_this$props, ["forwardRef"]);

        return React.createElement(Component, _extends({
          ref: forwardRef
        }, rest));
      }

    }

    _defineProperty(TabContainer, "propTypes", {
      children: _propTypes2.default.node,
      className: _propTypes2.default.string,
      href: _propTypes2.default.string,
      title: _propTypes2.default.node.isRequired,
      eventKey: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
      tabContentId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
      tabContentRef: _propTypes2.default.any,
      forwardRef: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func, _propTypes2.default.object])
    });

    return React.forwardRef((props, tabContentRef) => React.createElement(TabContainer, _extends({}, props, {
      forwardRef: tabContentRef
    })));
  };

  const Tab = exports.Tab = withForwardedRef(Tab0);
});
//# sourceMappingURL=Tab.js.map