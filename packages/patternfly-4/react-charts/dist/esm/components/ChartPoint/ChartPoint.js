import _pt from "prop-types";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { Helpers, Path } from 'victory-core';
import { PathHelpers } from './path-helpers';
export const ChartPoint = (_ref) => {
  let {
    active,
    className,
    clipPath,
    datum,
    events,
    pathComponent = React.createElement(Path, null),
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
    const size = Helpers.evaluateProp(props.size, datum, active);

    if (props.getPath) {
      return props.getPath(x, y, size);
    }

    const pathFunctions = {
      circle: PathHelpers.circle,
      square: PathHelpers.square,
      diamond: PathHelpers.diamond,
      triangleDown: PathHelpers.triangleDown,
      triangleUp: PathHelpers.triangleUp,
      plus: PathHelpers.plus,
      minus: PathHelpers.minus,
      star: PathHelpers.star,
      dash: PathHelpers.dash,
      threshold: PathHelpers.threshold
    };
    const symbol = Helpers.evaluateProp(props.symbol, datum, active);
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
    style: Helpers.evaluateStyle(rest.style, datum, active),
    transform
  });
};
ChartPoint.propTypes = {
  active: _pt.bool,
  className: _pt.string,
  clipPath: _pt.string,
  data: _pt.arrayOf(_pt.any),
  datum: _pt.any,
  events: _pt.any,
  getPath: _pt.any,
  id: _pt.oneOfType([_pt.number, _pt.string]),
  index: _pt.oneOfType([_pt.number, _pt.string]),
  origin: _pt.shape({
    x: _pt.number,
    y: _pt.number
  }),
  pathComponent: _pt.element,
  polar: _pt.bool,
  role: _pt.string,
  scale: _pt.any,
  shapeRendering: _pt.string,
  size: _pt.oneOfType([_pt.number, _pt.any]),
  style: _pt.any,
  symbol: _pt.oneOfType([_pt.oneOf(['circle']), _pt.oneOf(['diamond']), _pt.oneOf(['plus']), _pt.oneOf(['minus']), _pt.oneOf(['square']), _pt.oneOf(['star']), _pt.oneOf(['triangleDown']), _pt.oneOf(['triangleUp']), _pt.oneOf(['dash']), _pt.oneOf(['threshold']), _pt.any]),
  transform: _pt.string,
  x: _pt.number,
  y: _pt.number
};
//# sourceMappingURL=ChartPoint.js.map