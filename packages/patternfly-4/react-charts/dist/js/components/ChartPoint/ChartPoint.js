"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartPoint = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _victoryCore = require("victory-core");

var _pathHelpers = require("./path-helpers");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ChartPoint = function ChartPoint(_ref) {
  var active = _ref.active,
      className = _ref.className,
      clipPath = _ref.clipPath,
      datum = _ref.datum,
      events = _ref.events,
      _ref$pathComponent = _ref.pathComponent,
      pathComponent = _ref$pathComponent === void 0 ? React.createElement(_victoryCore.Path, null) : _ref$pathComponent,
      role = _ref.role,
      shapeRendering = _ref.shapeRendering,
      transform = _ref.transform,
      rest = _objectWithoutProperties(_ref, ["active", "className", "clipPath", "datum", "events", "pathComponent", "role", "shapeRendering", "transform"]);

  var getPath = function getPath(props) {
    var datum = props.datum,
        active = props.active,
        x = props.x,
        y = props.y;

    var size = _victoryCore.Helpers.evaluateProp(props.size, datum, active);

    if (props.getPath) {
      return props.getPath(x, y, size);
    }

    var pathFunctions = {
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

    var symbol = _victoryCore.Helpers.evaluateProp(props.symbol, datum, active);

    var symbolFunction = typeof pathFunctions[symbol] === 'function' ? pathFunctions[symbol] : pathFunctions.circle;
    return symbolFunction(x, y, size);
  };

  return React.cloneElement(pathComponent, {
    className: className,
    clipPath: clipPath,
    d: getPath(_objectSpread({
      datum: datum,
      active: active
    }, rest)),
    events: events,
    role: role,
    shapeRendering: shapeRendering,
    style: _victoryCore.Helpers.evaluateStyle(rest.style, datum, active),
    transform: transform
  });
};

exports.ChartPoint = ChartPoint;
ChartPoint.propTypes = {
  active: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  clipPath: _propTypes["default"].string,
  data: _propTypes["default"].arrayOf(_propTypes["default"].any),
  datum: _propTypes["default"].any,
  events: _propTypes["default"].any,
  getPath: _propTypes["default"].any,
  id: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  index: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  origin: _propTypes["default"].shape({
    x: _propTypes["default"].number,
    y: _propTypes["default"].number
  }),
  pathComponent: _propTypes["default"].element,
  polar: _propTypes["default"].bool,
  role: _propTypes["default"].string,
  scale: _propTypes["default"].any,
  shapeRendering: _propTypes["default"].string,
  size: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].any]),
  style: _propTypes["default"].any,
  symbol: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(['circle']), _propTypes["default"].oneOf(['diamond']), _propTypes["default"].oneOf(['plus']), _propTypes["default"].oneOf(['minus']), _propTypes["default"].oneOf(['square']), _propTypes["default"].oneOf(['star']), _propTypes["default"].oneOf(['triangleDown']), _propTypes["default"].oneOf(['triangleUp']), _propTypes["default"].oneOf(['dash']), _propTypes["default"].oneOf(['threshold']), _propTypes["default"].any]),
  transform: _propTypes["default"].string,
  x: _propTypes["default"].number,
  y: _propTypes["default"].number
};
//# sourceMappingURL=ChartPoint.js.map