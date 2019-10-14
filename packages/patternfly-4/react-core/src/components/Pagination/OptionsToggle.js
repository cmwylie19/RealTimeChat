"use strict";
exports.__esModule = true;
var React = require("react");
var options_menu_1 = require("@patternfly/react-styles/css/components/OptionsMenu/options-menu");
var react_styles_1 = require("@patternfly/react-styles");
var helpers_1 = require("../../helpers");
var Dropdown_1 = require("../Dropdown");
exports.OptionsToggle = function (_a) {
    var _b = _a.itemsTitle, itemsTitle = _b === void 0 ? 'items' : _b, _c = _a.optionsToggle, optionsToggle = _c === void 0 ? 'Select' : _c, _d = _a.itemsPerPageTitle, itemsPerPageTitle = _d === void 0 ? 'Items per page' : _d, _e = _a.firstIndex, firstIndex = _e === void 0 ? 0 : _e, _f = _a.lastIndex, lastIndex = _f === void 0 ? 0 : _f, _g = _a.itemCount, itemCount = _g === void 0 ? 0 : _g, _h = _a.widgetId, widgetId = _h === void 0 ? '' : _h, _j = _a.showToggle, showToggle = _j === void 0 ? true : _j, _k = _a.onToggle, onToggle = _k === void 0 ? function (_isOpen) { return undefined; } : _k, _l = _a.isOpen, isOpen = _l === void 0 ? false : _l, _m = _a.isDisabled, isDisabled = _m === void 0 ? false : _m, _o = _a.parentRef, parentRef = _o === void 0 ? null : _o, _p = _a.toggleTemplate, ToggleTemplate = _p === void 0 ? '' : _p, _q = _a.onEnter, onEnter = _q === void 0 ? null : _q;
    return (<div className={react_styles_1.css(options_menu_1["default"].optionsMenuToggle, isDisabled && options_menu_1["default"].modifiers.disabled, options_menu_1["default"].modifiers.plain, options_menu_1["default"].modifiers.text)}>
      {showToggle && (<React.Fragment>
          <span className={react_styles_1.css(options_menu_1["default"].optionsMenuToggleText)}>
            {typeof ToggleTemplate === 'string' ? (helpers_1.fillTemplate(ToggleTemplate, { firstIndex: firstIndex, lastIndex: lastIndex, itemCount: itemCount, itemsTitle: itemsTitle })) : (<ToggleTemplate firstIndex={firstIndex} lastIndex={lastIndex} itemCount={itemCount} itemsTitle={itemsTitle}/>)}
          </span>
          <Dropdown_1.DropdownToggle onEnter={onEnter} aria-label={optionsToggle} onToggle={onToggle} isDisabled={isDisabled || itemCount <= 0} isOpen={isOpen} id={widgetId + "-toggle"} className={options_menu_1["default"].optionsMenuToggleButton} parentRef={parentRef}>
          </Dropdown_1.DropdownToggle>
        </React.Fragment>)}
    </div>);
};
