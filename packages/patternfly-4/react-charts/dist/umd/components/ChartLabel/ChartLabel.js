(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "hoist-non-react-statics", "lodash", "victory", "../ChartTheme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("hoist-non-react-statics"), require("lodash"), require("victory"), require("../ChartTheme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.hoistNonReactStatics, global.lodash, global.victory, global.ChartTheme);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _hoistNonReactStatics, _lodash, _victory, _ChartTheme) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartLabel = exports.ChartLabelPlacement = exports.ChartLabelDirection = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

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

  let ChartLabelDirection = exports.ChartLabelDirection = undefined;

  (function (ChartLabelDirection) {
    ChartLabelDirection["rtl"] = "rtl";
    ChartLabelDirection["ltr"] = "ltr";
    ChartLabelDirection["inherit"] = "inherit";
  })(ChartLabelDirection || (exports.ChartLabelDirection = ChartLabelDirection = {}));

  let ChartLabelPlacement = exports.ChartLabelPlacement = undefined;

  (function (ChartLabelPlacement) {
    ChartLabelPlacement["parallel"] = "parallel";
    ChartLabelPlacement["perpendicular"] = "perpendicular";
    ChartLabelPlacement["vertical"] = "vertical";
  })(ChartLabelPlacement || (exports.ChartLabelPlacement = ChartLabelPlacement = {}));

  const ChartLabel = exports.ChartLabel = _ref => {
    let {
      style
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["style"]);

    const applyDefaultStyle = customStyle => (0, _lodash.defaults)(customStyle, {
      fontFamily: _ChartTheme.ChartCommonStyles.label.fontFamily,
      fontSize: _ChartTheme.ChartCommonStyles.label.fontSize,
      letterSpacing: _ChartTheme.ChartCommonStyles.label.letterSpacing
    });

    const newStyle = Array.isArray(style) ? style.map(applyDefaultStyle) : applyDefaultStyle(style);
    return React.createElement(_victory.VictoryLabel, _extends({
      style: newStyle
    }, rest));
  }; // Note: VictoryLabel.role must be hoisted


  ChartLabel.propTypes = {
    active: _propTypes2.default.bool,
    angle: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    capHeight: _propTypes2.default.any,
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    data: _propTypes2.default.arrayOf(_propTypes2.default.any),
    datum: _propTypes2.default.object,
    desc: _propTypes2.default.string,
    direction: _propTypes2.default.oneOf(['rtl', 'ltr', 'inherit']),
    dx: _propTypes2.default.any,
    dy: _propTypes2.default.any,
    events: _propTypes2.default.any,
    index: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    labelPlacement: _propTypes2.default.oneOf(['parallel', 'perpendicular', 'vertical']),
    lineHeight: _propTypes2.default.any,
    origin: _propTypes2.default.shape({
      x: _propTypes2.default.number.isRequired,
      y: _propTypes2.default.number.isRequired
    }),
    polar: _propTypes2.default.bool,
    renderInPortal: _propTypes2.default.bool,
    scale: _propTypes2.default.shape({
      x: _propTypes2.default.any,
      y: _propTypes2.default.any
    }),
    style: _propTypes2.default.oneOfType([_propTypes2.default.any, _propTypes2.default.arrayOf(_propTypes2.default.any)]),
    text: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.any]),
    x: _propTypes2.default.number,
    y: _propTypes2.default.number
  };
  (0, _hoistNonReactStatics2.default)(ChartLabel, _victory.VictoryLabel);
});
//# sourceMappingURL=ChartLabel.js.map