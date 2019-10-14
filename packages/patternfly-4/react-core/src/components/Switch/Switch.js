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
var switch_1 = require("@patternfly/react-styles/css/components/Switch/switch");
var react_styles_1 = require("@patternfly/react-styles");
var react_icons_1 = require("@patternfly/react-icons");
var util_1 = require("../../helpers/util");
var withOuia_1 = require("../withOuia");
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch(props) {
        var _this = _super.call(this, props) || this;
        _this.id = '';
        if (!props.id && !props['aria-label']) {
            // tslint:disable-next-line:no-console
            console.error('Switch: Switch requires either an id or aria-label to be specified');
        }
        _this.id = props.id || util_1.getUniqueId();
        return _this;
    }
    Switch.prototype.render = function () {
        var _a = this.props, className = _a.className, label = _a.label, labelOff = _a.labelOff, isChecked = _a.isChecked, isDisabled = _a.isDisabled, onChange = _a.onChange, ouiaContext = _a.ouiaContext, ouiaId = _a.ouiaId, props = __rest(_a, ["className", "label", "labelOff", "isChecked", "isDisabled", "onChange", "ouiaContext", "ouiaId"]);
        var isAriaLabelledBy = props['aria-label'] === '';
        return (<label className={react_styles_1.css(switch_1["default"]["switch"], className)} htmlFor={this.id} {...ouiaContext.isOuia && {
            'data-ouia-component-type': 'Switch',
            'data-ouia-component-id': ouiaId || ouiaContext.ouiaId
        }}>
        <input id={this.id} className={react_styles_1.css(switch_1["default"].switchInput)} type="checkbox" onChange={function (event) { return onChange(event.target.checked, event); }} defaultChecked={isChecked} disabled={isDisabled} aria-labelledby={isAriaLabelledBy ? this.id + "-on" : null} {...props}/>
        {label !== '' ? (<React.Fragment>
            <span className={react_styles_1.css(switch_1["default"].switchToggle)}/>
            <span className={react_styles_1.css(switch_1["default"].switchLabel, switch_1["default"].modifiers.on)} id={isAriaLabelledBy ? this.id + "-on" : null} aria-hidden="true">
              {label}
            </span>
            <span className={react_styles_1.css(switch_1["default"].switchLabel, switch_1["default"].modifiers.off)} id={isAriaLabelledBy ? this.id + "-off" : null} aria-hidden="true">
              {labelOff || label}
            </span>
          </React.Fragment>) : label !== '' && labelOff !== '' ? (<React.Fragment>
            <span className={react_styles_1.css(switch_1["default"].switchToggle)}/>
            <span className={react_styles_1.css(switch_1["default"].switchLabel, switch_1["default"].modifiers.on)} id={isAriaLabelledBy ? this.id + "-on" : null} aria-hidden="true">
              {label}
            </span>
            <span className={react_styles_1.css(switch_1["default"].switchLabel, switch_1["default"].modifiers.off)} id={isAriaLabelledBy ? this.id + "-off" : null} aria-hidden="true">
              {labelOff}
            </span>
          </React.Fragment>) : (<span className={react_styles_1.css(switch_1["default"].switchToggle)}>
            <div className={react_styles_1.css(switch_1["default"].switchToggleIcon)} aria-hidden="true">
              <react_icons_1.CheckIcon noVerticalAlign/>
            </div>
          </span>)}
      </label>);
    };
    Switch.defaultProps = {
        "id": '',
        "className": '',
        "label": '',
        "labelOff": '',
        "isChecked": true,
        "isDisabled": false,
        'aria-label': '',
        "onChange": function () { return undefined; }
    };
    return Switch;
}(React.Component));
var SwitchWithOuiaContext = withOuia_1.withOuiaContext(Switch);
exports.Switch = SwitchWithOuiaContext;
