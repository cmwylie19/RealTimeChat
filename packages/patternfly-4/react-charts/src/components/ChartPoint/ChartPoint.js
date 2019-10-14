"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = require("react");
var victory_core_1 = require("victory-core");
var path_helpers_1 = require("./path-helpers");
exports.ChartPoint = function (_a) {
    var active = _a.active, className = _a.className, clipPath = _a.clipPath, datum = _a.datum, events = _a.events, _b = _a.pathComponent, pathComponent = _b === void 0 ? <victory_core_1.Path /> : _b, role = _a.role, shapeRendering = _a.shapeRendering, transform = _a.transform, rest = __rest(_a, ["active", "className", "clipPath", "datum", "events", "pathComponent", "role", "shapeRendering", "transform"]);
    var getPath = function (props) {
        var datum = props.datum, active = props.active, x = props.x, y = props.y;
        var size = victory_core_1.Helpers.evaluateProp(props.size, datum, active);
        if (props.getPath) {
            return props.getPath(x, y, size);
        }
        var pathFunctions = {
            circle: path_helpers_1.PathHelpers.circle,
            square: path_helpers_1.PathHelpers.square,
            diamond: path_helpers_1.PathHelpers.diamond,
            triangleDown: path_helpers_1.PathHelpers.triangleDown,
            triangleUp: path_helpers_1.PathHelpers.triangleUp,
            plus: path_helpers_1.PathHelpers.plus,
            minus: path_helpers_1.PathHelpers.minus,
            star: path_helpers_1.PathHelpers.star,
            dash: path_helpers_1.PathHelpers.dash,
            threshold: path_helpers_1.PathHelpers.threshold
        };
        var symbol = victory_core_1.Helpers.evaluateProp(props.symbol, datum, active);
        var symbolFunction = typeof pathFunctions[symbol] === 'function' ? pathFunctions[symbol] : pathFunctions.circle;
        return symbolFunction(x, y, size);
    };
    return React.cloneElement(pathComponent, {
        className: className,
        clipPath: clipPath,
        d: getPath(__assign({ datum: datum, active: active }, rest)),
        events: events,
        role: role,
        shapeRendering: shapeRendering,
        style: victory_core_1.Helpers.evaluateStyle(rest.style, datum, active),
        transform: transform
    });
};
