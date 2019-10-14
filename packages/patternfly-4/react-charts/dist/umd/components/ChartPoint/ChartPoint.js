(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "victory-core", "./path-helpers"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("victory-core"), require("./path-helpers"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.victoryCore, global.pathHelpers);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _react, _victoryCore, _pathHelpers) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChartPoint = undefined;

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

  const ChartPoint = exports.ChartPoint = _ref => {
    let {
      active,
      className,
      clipPath,
      datum,
      events,
      pathComponent = React.createElement(_victoryCore.Path, null),
      role,
      shapeRendering,
      transform
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["active", "className", "clipPath", "datum", "events", "pathComponent", "role", "shapeRendering", "transform"]);

    const getPath = props => {
      const {
        datum,
        active,
        x,
        y
      } = props;

      const size = _victoryCore.Helpers.evaluateProp(props.size, datum, active);

      if (props.getPath) {
        return props.getPath(x, y, size);
      }

      const pathFunctions = {
        circle: _pathHelpers.PathHelpers.circle,
        square: _pathHelpers.PathHelpers.square,
        diamond: _pathHelpers.PathHelpers.diamond,
        triangleDown: _pathHelpers.PathHelpers.triangleDown,
        triangleUp: _pathHelpers.PathHelpers.triangleUp,
        plus: _pathHelpers.PathHelpers.plus,
        minus: _pathHelpers.PathHelpers.minus,
        star: _pathHelpers.PathHelpers.star,
        dash: _pathHelpers.PathHelpers.dash,
        threshold: _pathHelpers.PathHelpers.threshold
      };

      const symbol = _victoryCore.Helpers.evaluateProp(props.symbol, datum, active);

      const symbolFunction = typeof pathFunctions[symbol] === 'function' ? pathFunctions[symbol] : pathFunctions.circle;
      return symbolFunction(x, y, size);
    };

    return React.cloneElement(pathComponent, {
      className,
      clipPath,
      d: getPath(_objectSpread({
        datum,
        active
      }, rest)),
      events,
      role,
      shapeRendering,
      style: _victoryCore.Helpers.evaluateStyle(rest.style, datum, active),
      transform
    });
  };

  ChartPoint.propTypes = {
    active: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    clipPath: _propTypes2.default.string,
    data: _propTypes2.default.arrayOf(_propTypes2.default.any),
    datum: _propTypes2.default.any,
    events: _propTypes2.default.any,
    getPath: _propTypes2.default.any,
    id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    index: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    origin: _propTypes2.default.shape({
      x: _propTypes2.default.number,
      y: _propTypes2.default.number
    }),
    pathComponent: _propTypes2.default.element,
    polar: _propTypes2.default.bool,
    role: _propTypes2.default.string,
    scale: _propTypes2.default.any,
    shapeRendering: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.any]),
    style: _propTypes2.default.any,
    symbol: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['circle']), _propTypes2.default.oneOf(['diamond']), _propTypes2.default.oneOf(['plus']), _propTypes2.default.oneOf(['minus']), _propTypes2.default.oneOf(['square']), _propTypes2.default.oneOf(['star']), _propTypes2.default.oneOf(['triangleDown']), _propTypes2.default.oneOf(['triangleUp']), _propTypes2.default.oneOf(['dash']), _propTypes2.default.oneOf(['threshold']), _propTypes2.default.any]),
    transform: _propTypes2.default.string,
    x: _propTypes2.default.number,
    y: _propTypes2.default.number
  };
});
//# sourceMappingURL=ChartPoint.js.map