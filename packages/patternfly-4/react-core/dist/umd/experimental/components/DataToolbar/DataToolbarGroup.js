(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "@patternfly/react-styles/css/components/DataToolbar/data-toolbar", "@patternfly/react-styles", "./DataToolbarUtils", "../../../helpers/util"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("@patternfly/react-styles/css/components/DataToolbar/data-toolbar"), require("@patternfly/react-styles"), require("./DataToolbarUtils"), require("../../../helpers/util"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.dataToolbar, global.reactStyles, global.DataToolbarUtils, global.util);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _dataToolbar, _reactStyles, _DataToolbarUtils, _util) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DataToolbarGroup = exports.DataToolbarGroupVariant = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _dataToolbar2 = _interopRequireDefault(_dataToolbar);

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

  let DataToolbarGroupVariant = exports.DataToolbarGroupVariant = undefined;

  (function (DataToolbarGroupVariant) {
    DataToolbarGroupVariant["filter-group"] = "filter-group";
    DataToolbarGroupVariant["icon-button-group"] = "icon-button-group";
    DataToolbarGroupVariant["button-group"] = "button-group";
  })(DataToolbarGroupVariant || (exports.DataToolbarGroupVariant = DataToolbarGroupVariant = {}));

  const DataToolbarGroup = exports.DataToolbarGroup = _ref => {
    let {
      breakpointMods = [],
      spacers = [],
      itemSpacers = [],
      className,
      variant,
      children
    } = _ref,
        props = _objectWithoutProperties(_ref, ["breakpointMods", "spacers", "itemSpacers", "className", "variant", "children"]);

    return React.createElement("div", _extends({
      className: (0, _reactStyles.css)(_dataToolbar2.default.dataToolbarGroup, variant && (0, _reactStyles.getModifier)(_dataToolbar2.default, variant), (0, _util.formatBreakpointMods)(breakpointMods, _dataToolbar2.default), (0, _DataToolbarUtils.formatSpacers)(itemSpacers, 'pf-m-space-items'), (0, _DataToolbarUtils.formatSpacers)(spacers), className)
    }, props), children);
  };

  DataToolbarGroup.propTypes = {
    className: _propTypes2.default.string,
    variant: _propTypes2.default.oneOfType([_propTypes2.default.any, _propTypes2.default.oneOf(['filter-group']), _propTypes2.default.oneOf(['icon-button-group']), _propTypes2.default.oneOf(['button-group'])]),
    breakpointMods: _propTypes2.default.arrayOf(_propTypes2.default.any),
    spacers: _propTypes2.default.arrayOf(_propTypes2.default.any),
    itemSpacers: _propTypes2.default.arrayOf(_propTypes2.default.any),
    children: _propTypes2.default.node
  };
});
//# sourceMappingURL=DataToolbarGroup.js.map