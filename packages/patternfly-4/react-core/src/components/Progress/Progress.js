"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var progress_1 = require("@patternfly/react-styles/css/components/Progress/progress");
var react_styles_1 = require("@patternfly/react-styles");
var ProgressContainer_1 = require("./ProgressContainer");
var util_1 = require("../../helpers/util");
var ProgressSize;
(function (ProgressSize) {
    ProgressSize["sm"] = "sm";
    ProgressSize["md"] = "md";
    ProgressSize["lg"] = "lg";
})(ProgressSize = exports.ProgressSize || (exports.ProgressSize = {}));
var Progress = /** @class */ (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = _this.props.id || util_1.getUniqueId();
        return _this;
    }
    Progress.prototype.render = function () {
        var _a = this.props, id = _a.id, className = _a.className, size = _a.size, value = _a.value, title = _a.title, label = _a.label, variant = _a.variant, measureLocation = _a.measureLocation, min = _a.min, max = _a.max, valueText = _a.valueText, props = __rest(_a, ["id", "className", "size", "value", "title", "label", "variant", "measureLocation", "min", "max", "valueText"]);
        var additionalProps = __assign(__assign({}, props), (valueText ? { 'aria-valuetext': valueText } : { 'aria-describedby': this.id + "-description" }));
        var ariaProps = {
            'aria-describedby': this.id + "-description",
            'aria-valuemin': min,
            'aria-valuenow': value,
            'aria-valuemax': max
        };
        if (valueText) {
            ariaProps['aria-valuetext'] = valueText;
        }
        var scaledValue = Math.min(100, Math.max(0, Math.floor(((value - min) / (max - min)) * 100)));
        return (<div {...additionalProps} className={react_styles_1.css(progress_1["default"].progress, react_styles_1.getModifier(progress_1["default"], variant, ''), react_styles_1.getModifier(progress_1["default"], measureLocation, ''), react_styles_1.getModifier(progress_1["default"], measureLocation === ProgressContainer_1.ProgressMeasureLocation.inside ? ProgressSize.lg : size, ''), !title && react_styles_1.getModifier(progress_1["default"], 'singleline', ''), className)} id={this.id} role="progressbar">
        <ProgressContainer_1.ProgressContainer parentId={this.id} value={scaledValue} title={title} label={label} variant={variant} measureLocation={measureLocation} ariaProps={ariaProps}/>
      </div>);
    };
    Progress.defaultProps = {
        className: '',
        measureLocation: ProgressContainer_1.ProgressMeasureLocation.top,
        variant: ProgressContainer_1.ProgressVariant.info,
        id: '',
        title: '',
        min: 0,
        max: 100,
        size: null,
        label: null,
        value: 0,
        valueText: null
    };
    return Progress;
}(React.Component));
exports.Progress = Progress;
