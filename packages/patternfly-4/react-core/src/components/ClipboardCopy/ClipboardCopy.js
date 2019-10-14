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
var clipboard_copy_1 = require("@patternfly/react-styles/css/components/ClipboardCopy/clipboard-copy");
var react_styles_1 = require("@patternfly/react-styles");
var TextInput_1 = require("../TextInput");
var Tooltip_1 = require("../Tooltip");
var GenerateId_1 = require("../../helpers/GenerateId/GenerateId");
var ClipboardCopyButton_1 = require("./ClipboardCopyButton");
var ClipboardCopyToggle_1 = require("./ClipboardCopyToggle");
var ClipboardCopyExpanded_1 = require("./ClipboardCopyExpanded");
exports.clipboardCopyFunc = function (event, text) {
    var clipboard = event.currentTarget.parentElement;
    var el = document.createElement('input');
    el.value = text;
    clipboard.appendChild(el);
    el.select();
    document.execCommand('copy');
    clipboard.removeChild(el);
};
var ClipboardCopyVariant;
(function (ClipboardCopyVariant) {
    ClipboardCopyVariant["inline"] = "inline";
    ClipboardCopyVariant["expansion"] = "expansion";
})(ClipboardCopyVariant = exports.ClipboardCopyVariant || (exports.ClipboardCopyVariant = {}));
var ClipboardCopy = /** @class */ (function (_super) {
    __extends(ClipboardCopy, _super);
    function ClipboardCopy(props) {
        var _this = _super.call(this, props) || this;
        _this.timer = null;
        _this.componentDidUpdate = function (prevProps, prevState) {
            if (prevProps.children !== _this.props.children) {
                _this.updateText(_this.props.children);
            }
        };
        _this.expandContent = function (_event) {
            _this.setState(function (prevState) { return ({
                expanded: !prevState.expanded
            }); });
        };
        _this.updateText = function (text) {
            _this.setState({ text: text });
            _this.props.onChange(text);
        };
        _this.render = function () {
            var _a = _this.props, isReadOnly = _a.isReadOnly, isExpanded = _a.isExpanded, isCode = _a.isCode, exitDelay = _a.exitDelay, maxWidth = _a.maxWidth, entryDelay = _a.entryDelay, switchDelay = _a.switchDelay, onCopy = _a.onCopy, hoverTip = _a.hoverTip, clickTip = _a.clickTip, textAriaLabel = _a.textAriaLabel, toggleAriaLabel = _a.toggleAriaLabel, variant = _a.variant, position = _a.position, className = _a.className, onChange = _a.onChange, // Don't pass to <div>
            divProps = __rest(_a, ["isReadOnly", "isExpanded", "isCode", "exitDelay", "maxWidth", "entryDelay", "switchDelay", "onCopy", "hoverTip", "clickTip", "textAriaLabel", "toggleAriaLabel", "variant", "position", "className", "onChange"]);
            var textIdPrefix = 'text-input-';
            var toggleIdPrefix = 'toggle-';
            var contentIdPrefix = 'content-';
            return (<div className={react_styles_1.css(clipboard_copy_1["default"].clipboardCopy, _this.state.expanded && clipboard_copy_1["default"].modifiers.expanded, className)} {...divProps}>
        <GenerateId_1["default"] prefix="">
          {function (id) { return (<React.Fragment>
              <div className={react_styles_1.css(clipboard_copy_1["default"].clipboardCopyGroup)}>
                {variant === 'expansion' && (<ClipboardCopyToggle_1.ClipboardCopyToggle isExpanded={_this.state.expanded} onClick={_this.expandContent} id={toggleIdPrefix + "-" + id} textId={textIdPrefix + "-" + id} contentId={contentIdPrefix + "-" + id} aria-label={toggleAriaLabel}/>)}
                <TextInput_1.TextInput isReadOnly={isReadOnly || _this.state.expanded} onChange={_this.updateText} value={_this.state.text} id={"text-input-" + id} aria-label={textAriaLabel}/>
                <ClipboardCopyButton_1.ClipboardCopyButton exitDelay={exitDelay} entryDelay={entryDelay} maxWidth={maxWidth} position={position} id={"copy-button-" + id} textId={"text-input-" + id} aria-label={hoverTip} onClick={function (event) {
                if (_this.timer) {
                    window.clearTimeout(_this.timer);
                    _this.setState({ copied: false });
                }
                onCopy(event, _this.state.text);
                _this.setState({ copied: true }, function () {
                    _this.timer = window.setTimeout(function () {
                        _this.setState({ copied: false });
                        _this.timer = null;
                    }, switchDelay);
                });
            }}>
                  {_this.state.copied ? clickTip : hoverTip}
                </ClipboardCopyButton_1.ClipboardCopyButton>
              </div>
              {_this.state.expanded && (<ClipboardCopyExpanded_1.ClipboardCopyExpanded isReadOnly={isReadOnly} isCode={isCode} id={"content-" + id} onChange={_this.updateText}>
                  {_this.state.text}
                </ClipboardCopyExpanded_1.ClipboardCopyExpanded>)}
            </React.Fragment>); }}
        </GenerateId_1["default"]>
      </div>);
        };
        _this.state = {
            text: _this.props.children,
            expanded: _this.props.isExpanded,
            copied: false
        };
        return _this;
    }
    ClipboardCopy.defaultProps = {
        hoverTip: 'Copy to clipboard',
        clickTip: 'Successfully copied to clipboard!',
        isReadOnly: false,
        isExpanded: false,
        isCode: false,
        variant: 'inline',
        position: Tooltip_1.TooltipPosition.top,
        maxWidth: '150px',
        exitDelay: 1600,
        entryDelay: 100,
        switchDelay: 2000,
        onCopy: exports.clipboardCopyFunc,
        onChange: function () { return undefined; },
        textAriaLabel: 'Copyable input',
        toggleAriaLabel: 'Show content'
    };
    return ClipboardCopy;
}(React.Component));
exports.ClipboardCopy = ClipboardCopy;
