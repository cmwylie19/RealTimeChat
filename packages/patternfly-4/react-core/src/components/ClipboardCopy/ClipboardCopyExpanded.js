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
var ClipboardCopyExpanded = /** @class */ (function (_super) {
    __extends(ClipboardCopyExpanded, _super);
    function ClipboardCopyExpanded(props) {
        var _this = _super.call(this, props) || this;
        _this.contentRef = React.createRef();
        return _this;
    }
    ClipboardCopyExpanded.prototype.componentDidMount = function () {
        if (this.contentRef.current) {
            this.contentRef.current.innerText = this.props.children;
        }
    };
    ClipboardCopyExpanded.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, onChange = _a.onChange, isReadOnly = _a.isReadOnly, isCode = _a.isCode, props = __rest(_a, ["className", "children", "onChange", "isReadOnly", "isCode"]);
        var clipboardCopyExpandableComponent = <div suppressContentEditableWarning ref={this.contentRef} className={react_styles_1.css(clipboard_copy_1["default"].clipboardCopyExpandableContent, className)} onInput={function (e) { return onChange(e.target.innerText, e); }} contentEditable={!isReadOnly} {...props}/>;
        return (isCode ? <pre>{clipboardCopyExpandableComponent}</pre> : clipboardCopyExpandableComponent);
    };
    ClipboardCopyExpanded.defaultProps = {
        onChange: function () { return undefined; },
        className: '',
        isReadOnly: false,
        isCode: false
    };
    return ClipboardCopyExpanded;
}(React.Component));
exports.ClipboardCopyExpanded = ClipboardCopyExpanded;
