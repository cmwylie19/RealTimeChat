"use strict";
exports.__esModule = true;
var React = require("react");
var progress_1 = require("@patternfly/react-styles/css/components/Progress/progress");
var react_styles_1 = require("@patternfly/react-styles");
var react_icons_1 = require("@patternfly/react-icons");
var ProgressBar_1 = require("./ProgressBar");
var ProgressMeasureLocation;
(function (ProgressMeasureLocation) {
    ProgressMeasureLocation["outside"] = "outside";
    ProgressMeasureLocation["inside"] = "inside";
    ProgressMeasureLocation["top"] = "top";
    ProgressMeasureLocation["none"] = "none";
})(ProgressMeasureLocation = exports.ProgressMeasureLocation || (exports.ProgressMeasureLocation = {}));
var ProgressVariant;
(function (ProgressVariant) {
    ProgressVariant["danger"] = "danger";
    ProgressVariant["success"] = "success";
    ProgressVariant["info"] = "info";
})(ProgressVariant = exports.ProgressVariant || (exports.ProgressVariant = {}));
var variantToIcon = {
    danger: react_icons_1.TimesCircleIcon,
    success: react_icons_1.CheckCircleIcon
};
exports.ProgressContainer = function (_a) {
    var ariaProps = _a.ariaProps, value = _a.value, _b = _a.title, title = _b === void 0 ? '' : _b, parentId = _a.parentId, _c = _a.label, label = _c === void 0 ? null : _c, _d = _a.variant, variant = _d === void 0 ? ProgressVariant.info : _d, _e = _a.measureLocation, measureLocation = _e === void 0 ? ProgressMeasureLocation.top : _e;
    var StatusIcon = variantToIcon.hasOwnProperty(variant) && variantToIcon[variant];
    return (<React.Fragment>
      <div className={react_styles_1.css(progress_1["default"].progressDescription)} id={parentId + "-description"}>
        {title}
      </div>
      <div className={react_styles_1.css(progress_1["default"].progressStatus)}>
        {(measureLocation === ProgressMeasureLocation.top || measureLocation === ProgressMeasureLocation.outside) && (<span className={react_styles_1.css(progress_1["default"].progressMeasure)}>{label || value + "%"}</span>)}
        {variantToIcon.hasOwnProperty(variant) && (<span className={react_styles_1.css(progress_1["default"].progressStatusIcon)}>
            <StatusIcon />
          </span>)}
      </div>
      <ProgressBar_1.ProgressBar ariaProps={ariaProps} value={value}>
        {measureLocation === ProgressMeasureLocation.inside && value + "%"}
      </ProgressBar_1.ProgressBar>
    </React.Fragment>);
};
