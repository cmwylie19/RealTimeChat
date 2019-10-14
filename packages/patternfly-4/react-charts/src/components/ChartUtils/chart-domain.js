"use strict";
exports.__esModule = true;
var victory_core_1 = require("victory-core");
// Returns the min and max domain for given data
exports.getDomain = function (_a) {
    var data = _a.data, maxDomain = _a.maxDomain, minDomain = _a.minDomain, x = _a.x, y = _a.y;
    // x-domain
    var xLow = 0;
    var xHigh = 0;
    var xLowSearch = true;
    var xHighSearch = true;
    if (minDomain !== undefined && minDomain.x !== undefined) {
        xLow = minDomain.x;
        xLowSearch = false;
    }
    else if (minDomain !== undefined && minDomain.y === undefined) {
        xLow = minDomain;
        xLowSearch = false;
    }
    if (maxDomain !== undefined && maxDomain.x !== undefined) {
        xHigh = maxDomain.x;
        xHighSearch = false;
    }
    else if (maxDomain !== undefined && maxDomain.y === undefined) {
        xHigh = maxDomain;
        xHighSearch = false;
    }
    // y-domain
    var yLow = 0;
    var yHigh = 0;
    var yLowSearch = true;
    var yHighSearch = true;
    if (minDomain !== undefined && minDomain.y !== undefined) {
        yLow = minDomain.y;
        yLowSearch = false;
    }
    else if (minDomain !== undefined && minDomain.x === undefined) {
        yLow = minDomain;
        yLowSearch = false;
    }
    if (maxDomain !== undefined && maxDomain.y !== undefined) {
        yHigh = maxDomain.y;
        yHighSearch = false;
    }
    else if (maxDomain !== undefined && maxDomain.x === undefined) {
        yHigh = maxDomain;
        yHighSearch = false;
    }
    // Search data for max / min range
    var datum = victory_core_1.Data.formatData(data, { x: x, y: y }, ['x', 'y']);
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
    return { x: [xLow, xHigh], y: [yLow, yHigh] };
};
exports.getDomains = function (_a) {
    var maxDomain = _a.maxDomain, minDomain = _a.minDomain, sources = _a.sources;
    var domains = [];
    sources.forEach(function (source) {
        var _a = (source.component ? source.component.props : undefined).data, compData = _a === void 0 ? source.data : _a;
        var domain = exports.getDomain({
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
        xDomains.push.apply(xDomains, domain.x);
        yDomains.push.apply(yDomains, domain.y);
    });
    var xLow = Math.min.apply(Math, xDomains);
    var xHigh = Math.max.apply(Math, xDomains);
    var yLow = Math.min.apply(Math, yDomains);
    var yHigh = Math.max.apply(Math, yDomains);
    return { x: [xLow, xHigh], y: [yLow, yHigh] };
};
