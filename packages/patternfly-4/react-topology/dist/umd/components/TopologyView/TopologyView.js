(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-core", "@patternfly/react-styles/css/components/Topology/topology-view.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-core"), require("@patternfly/react-styles/css/components/Topology/topology-view.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.reactCore, global.topologyView);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _reactCore) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TopologyView = undefined;

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

  const TopologyView = exports.TopologyView = _ref => {
    let {
      className = '',
      contextToolbar = null,
      viewToolbar = null,
      children = null,
      controlBar = null,
      sideBar = null,
      sideBarOpen = false
    } = _ref,
        props = _objectWithoutProperties(_ref, ["className", "contextToolbar", "viewToolbar", "children", "controlBar", "sideBar", "sideBarOpen"]);

    const containerClasses = `${sideBar ? 'pf-topology-container__with-sidebar' : ''}` + `${sideBarOpen ? ' pf-topology-container__with-sidebar--open' : ''}`;
    return React.createElement(_reactCore.Stack, _extends({
      className: className
    }, props), contextToolbar && React.createElement(_reactCore.StackItem, {
      isFilled: false
    }, contextToolbar), viewToolbar && React.createElement(_reactCore.StackItem, {
      isFilled: false
    }, viewToolbar), React.createElement(_reactCore.StackItem, {
      isFilled: true,
      className: containerClasses
    }, React.createElement("div", {
      className: "pf-topology-content"
    }, children, controlBar && React.createElement("span", {
      className: "pf-topology-control-bar"
    }, controlBar)), sideBar));
  };

  TopologyView.propTypes = {
    className: _propTypes2.default.string,
    children: _propTypes2.default.node,
    contextToolbar: _propTypes2.default.node,
    viewToolbar: _propTypes2.default.node,
    controlBar: _propTypes2.default.node,
    sideBar: _propTypes2.default.node,
    sideBarOpen: _propTypes2.default.bool
  };
});
//# sourceMappingURL=TopologyView.js.map