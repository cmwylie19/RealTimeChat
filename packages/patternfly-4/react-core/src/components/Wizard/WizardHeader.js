"use strict";
exports.__esModule = true;
var React = require("react");
var wizard_1 = require("@patternfly/react-styles/css/components/Wizard/wizard");
var react_styles_1 = require("@patternfly/react-styles");
var Button_1 = require("../Button");
var Title_1 = require("../Title");
var react_icons_1 = require("@patternfly/react-icons");
exports.WizardHeader = function (_a) {
    var _b = _a.onClose, onClose = _b === void 0 ? function () { return undefined; } : _b, title = _a.title, description = _a.description, ariaLabelCloseButton = _a.ariaLabelCloseButton, titleId = _a.titleId, descriptionId = _a.descriptionId;
    return (<div className={react_styles_1.css(wizard_1["default"].wizardHeader)}>
      <Button_1.Button variant="plain" className={react_styles_1.css(wizard_1["default"].wizardClose)} aria-label={ariaLabelCloseButton} onClick={onClose}>
        <react_icons_1.TimesIcon aria-hidden="true"/>
      </Button_1.Button>
      <Title_1.Title size="3xl" className={react_styles_1.css(wizard_1["default"].wizardTitle)} aria-label={title} id={titleId}>{title || <>&nbsp;</>}</Title_1.Title>
      {description && <p className={react_styles_1.css(wizard_1["default"].wizardDescription)} id={descriptionId}>
        {description}
      </p>}
    </div>);
};
