"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDomains = exports.getDomain = void 0;

var _victoryCore = require("victory-core");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// Returns the min and max domain for given data
var getDomain = function getDomain(_ref) {
  var data = _ref.data,
      maxDomain = _ref.maxDomain,
      minDomain = _ref.minDomain,
      x = _ref.x,
      y = _ref.y;
  // x-domain
  var xLow = 0;
  var xHigh = 0;
  var xLowSearch = true;
  var xHighSearch = true;

  if (minDomain !== undefined && minDomain.x !== undefined) {
    xLow = minDomain.x;
    xLowSearch = false;
  } else if (minDomain !== undefined && minDomain.y === undefined) {
    xLow = minDomain;
    xLowSearch = false;
  }

  if (maxDomain !== undefined && maxDomain.x !== undefined) {
    xHigh = maxDomain.x;
    xHighSearch = false;
  } else if (maxDomain !== undefined && maxDomain.y === undefined) {
    xHigh = maxDomain;
    xHighSearch = false;
  } // y-domain


  var yLow = 0;
  var yHigh = 0;
  var yLowSearch = true;
  var yHighSearch = true;

  if (minDomain !== undefined && minDomain.y !== undefined) {
    yLow = minDomain.y;
    yLowSearch = false;
  } else if (minDomain !== undefined && minDomain.x === undefined) {
    yLow = minDomain;
    yLowSearch = false;
  }

  if (maxDomain !== undefined && maxDomain.y !== undefined) {
    yHigh = maxDomain.y;
    yHighSearch = false;
  } else if (maxDomain !== undefined && maxDomain.x === undefined) {
    yHigh = maxDomain;
    yHighSearch = false;
  } // Search data for max / min range


  var datum = _victoryCore.Data.formatData(data, {
    x: x,
    y: y
  }, ['x', 'y']);

  datum.forEach(function (dataPoint) {
    if (xLowSearch) {
      if (dataPoint._x < xLow) {
        xLow = dataPoint._x;
      }
    }

    if (xHighSearch) {
      if (dataPoint._x > xHigh) {
        xHigh = dataPoint._x;
      }
    }

    if (yLowSearch) {
      if (dataPoint._y < yLow) {
        yLow = dataPoint._y;
      }
    }

    if (yHighSearch) {
      if (dataPoint._y > yHigh) {
        yHigh = dataPoint._y;
      }
    }
  });
  return {
    x: [xLow, xHigh],
    y: [yLow, yHigh]
  };
};

exports.getDomain = getDomain;

var getDomains = function getDomains(_ref2) {
  var maxDomain = _ref2.maxDomain,
      minDomain = _ref2.minDomain,
      sources = _ref2.sources;
  var domains = [];
  sources.forEach(function (source) {
    var _ref3 = source.component ? source.component.props : undefined,
        _ref3$data = _ref3.data,
        compData = _ref3$data === void 0 ? source.data : _ref3$data;

    var domain = getDomain({
      data: compData,
      maxDomain: maxDomain,
      minDomain: minDomain,
      x: source.component ? source.component.props.x : undefined,
      y: source.component ? source.component.props.y : undefined
    });
    domains.push(domain);
  });
  var xDomains = [];
  var yDomains = [];
  domains.forEach(function (domain) {
    xDomains.push.apply(xDomains, _toConsumableArray(domain.x));
    yDomains.push.apply(yDomains, _toConsumableArray(domain.y));
  });
  var xLow = Math.min.apply(Math, xDomains);
  var xHigh = Math.max.apply(Math, xDomains);
  var yLow = Math.min.apply(Math, yDomains);
  var yHigh = Math.max.apply(Math, yDomains);
  return {
    x: [xLow, xHigh],
    y: [yLow, yHigh]
  };
};

exports.getDomains = getDomains;
//# sourceMappingURL=chart-domain.js.map